import { useState } from 'react'
import './App.css'
import { ChatbotIcon } from './components/ChatbotIcon'
import ChatForm from './components/ChatForm'
import { ChatMessage } from './components/ChatMessage';

function App() {
  const [chatHistory, setChatHistory] = useState([]);
  
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
           <ChatForm setChatHistory={setChatHistory}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
