// import { Link } from 'react-router-dom';
// import { UserContext } from '../../App';
// import { useContext } from 'react';

export default function Chat() {
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState('');

    const sendMessage = () => {
        if (userInput.trim() === '') return;
        setMessages([...messages, { type: 'user', text: userInput }]);
        setUserInput('');
        const response = 'Example response from the server.';
        setMessages([...messages, { type: 'bot', text: response }]);
    };

    return (
        <div className="App">
            <div className="chat-container">
                <Chat messages={messages} setMessages={setMessages} />
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
}