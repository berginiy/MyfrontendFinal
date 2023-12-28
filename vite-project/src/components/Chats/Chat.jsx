import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState('');
    const [draggedItem, setDraggedItem] = useState(null);

    const chatBoxRef = useRef(null);
    const apiUrl = 'http://127.0.0.1:8000/api/schema/swagger-ui/#/api/api_v1_chatgpt_games_action_create'; // Замените на фактический URL вашего API

    const sendMessage = async () => {
        if (userInput.trim() === '') return;

        // Отправка сообщения на сервер ChatGPT
        const response = await axios.post(apiUrl, { message: userInput });

        // Сохранение ответа от ChatGPT в чате
        setMessages(prevMessages => [
            ...prevMessages,
            { type: 'user', text: userInput },
            { type: 'bot', text: response.data.message },
        ]);

        setUserInput('');
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

    useEffect(() => {
        // Прокрутка вниз чата при изменении сообщений
        if (chatBoxRef.current) {
            chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <div>
            <div className="chat-container" ref={chatBoxRef}>
                <div className="chat-box">
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
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    );
};

export default Chat;
