// Chat.js
import React, { useState } from 'react';

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState('');

    const sendMessage = () => {
        if (userInput.trim() === '') return;

        setMessages(prevMessages => [...prevMessages, { type: 'user', text: userInput }]);
        setUserInput('');

        const response = 'Example response from the server.';
        setMessages(prevMessages => [...prevMessages, { type: 'bot', text: response }]);
    };

    return (
        <div className="chat-container">
            <div className="chat">
                {messages.map((message, index) => (
                    <div key={index} className={message.type}>
                        {message.text}
                    </div>
                ))}
            </div>
            <div className="user-input">
                <input
                    type="text"
                    value={userInput}
                    placeholder="Enter your message..."
                    onChange={(e) => setUserInput(e.target.value)}
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
};

export default Chat;
