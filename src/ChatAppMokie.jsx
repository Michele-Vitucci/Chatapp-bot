import { useState, useRef, useEffect } from "react";
import useSWR from "swr";
import "./App.css";

const fetcher = (url) => fetch(url).then((res) => res.json());

function ChatApp() {
  const [messages, setMessages] = useState([{ text: "Ciao! Come posso aiutarti?", sender: "bot" }]);
  const [newMessage, setNewMessage] = useState("");
  const chatEndRef = useRef(null);

  const { data, mutate } = useSWR(" https://mocki.io/v1/e17fee0d-a457-49ec-bde9-beb624198e0f ", fetcher, { revalidateOnFocus: false });

  const sendMessage = () => {
    if (newMessage.trim() === "") return;

    const userMessage = { text: newMessage, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setNewMessage("");

    
    setTimeout(() => {
      mutate(); 
      if (data) {
        const botResponse = { text: data.response, sender: "bot" };
        setMessages((prev) => [...prev, botResponse]);
      }
    }, 1000);
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="chat-container">
      <div className="chat-box">
        {messages.map((msg, index) => (
          <p key={index} className={msg.sender}>
            {msg.text}
          </p>
        ))}
        <div ref={chatEndRef} />
      </div>
      <div className="input-area">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Scrivi un messaggio..."
        />
        <button onClick={sendMessage}>Invia</button>
      </div>
    </div>
  );
}

export default ChatApp;
