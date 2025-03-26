import './App.css'
import { ChatbotIcon } from './components/ChatbotIcon'

function App() {

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
            <div className="message user-message">
              <p className="message-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>

          <div className="chat-footer">
            <form action="" className="chat-form">
              <input type="text" placeholder='Message Here....' className="message-input" required />
              <button className="material-symbols-outlined">arrow_upward</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
