import { useState, useRef,} from "react";

function ChatApp() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const chatEndRef = useRef(null);

 
  const sendMessage = () => {
    if (newMessage.trim() === "") return; 
    setMessages([...messages, newMessage]);
    setNewMessage(""); 
  };

  return (
    <div style={{ backgroundColor:"", maxWidth: "400px", margin: "auto", border: "1px solid #ccc", padding: "5px", borderRadius: "8px" }}>
      <h2 style={{}} >Chat</h2>
      <div style={{ height: "300px", overflowY: "auto", border: "1px solid #ddd", padding: "10px" }}>
        {messages.map((msg, index) => (
          <div key={index} style={{ marginBottom: "5px", padding: "5px", background: "#f1f1f1", borderRadius: "5px" }}>
            {msg}
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
       
        placeholder="Scrivi un messaggio..."
        style={{ width: "97%", padding: "5px", marginTop: "10px" }}
      />
      <button onClick={sendMessage} style={{ width: "100%", padding: "8px", marginTop: "5px" }}>Invia</button>
    </div>
  );
}

export default ChatApp;
