import React, { useState, useRef } from 'react';

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState('');
    const [draggedItem, setDraggedItem] = useState(null);

    const chatBoxRef = useRef(null);

    const sendMessage = () => {
        if (userInput.trim() === '') return;

        setMessages(prevMessages => [...prevMessages, { type: 'user', text: userInput }]);
        setUserInput('');

        const response = 'Example response from the server.';
        setMessages(prevMessages => [...prevMessages, { type: 'bot', text: response }]);
    };

    const handleDragStart = (index) => {
        setDraggedItem(index);
    };

    const handleDragOver = (index) => {
        if (draggedItem === null) return;

        const newMessages = [...messages];
        const draggedMessage = newMessages[draggedItem];
        newMessages.splice(draggedItem, 1);
        newMessages.splice(index, 0, draggedMessage);

        setMessages(newMessages);
        setDraggedItem(index);
    };

    const handleDragEnd = () => {
        setDraggedItem(null);
    };

    return (
        <div>
            <header className="header">
                <h1>Chat Interface</h1>
            </header>
            <div className="chat-container">
                <div className="chat-box" ref={chatBoxRef}>
                    {messages.map((message, index) => (
                        <div
                            key={index}
                            className={`${message.type} draggable`}
                            draggable
                            onDragStart={() => handleDragStart(index)}
                            onDragOver={() => handleDragOver(index)}
                            onDragEnd={handleDragEnd}
                        >
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
                    <button className='btn_chat' onClick={sendMessage}>Send</button>
                </div>
            </div>
            <footer className="footer">
                <p>© 2023 Chat App. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Chat;
