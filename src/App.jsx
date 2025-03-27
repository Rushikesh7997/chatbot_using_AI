import { useState } from 'react'
import './App.css'
import { ChatbotIcon } from './components/ChatbotIcon'
import ChatForm from './components/ChatForm'
import { ChatMessage } from './components/ChatMessage';

function App() {
  const [chatHistory, setChatHistory] = useState([]);

  const generateBotResponse = async(history) =>{
    history = history.map(({role,text})=>({role,parts:[{text}]}));

    const requestOption = {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({contents:history})
    }

    try{
      const response = await fetch(import.meta.env.API_URL, requestOption);
      const data = await response.json();
      if(!response.ok) throw new Error(data.error.message || "Something went wrong!")
        
      console.log(data)
    }catch(error){
      console.log(error)
    }
  }
  
  return (
    <>
      <div className="container">
        <div className="chatbot-popup">
          <div className="chatbot-header">
            <div className="header-info">
              <ChatbotIcon/>
              <h2 className="logo-text">
                Chatbot
              </h2>
            </div>
            <button className="material-symbols-outlined">keyboard_arrow_down</button>
          </div>

          <div className="chat-body">
            <div className="message bot-message">
              <ChatbotIcon/>
              <p className="message-text">
                Hey There ✨, <br /> How can I help you today ?
              </p>
            </div>

            {/* render the chat history dynamically  */}
            {chatHistory.map((chat, index)=>(
                <ChatMessage key={index} chat={chat}/>
            ))}
          </div>

            {/* Footer  */}
          <div className="chat-footer">
           <ChatForm chatHistory={chatHistory} setChatHistory={setChatHistory} generateBotResponse={generateBotResponse}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
