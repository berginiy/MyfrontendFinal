const chatMessages = document.getElementById('chat-messages');
const messageInput = document.getElementById('message-input');

function appendMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.className = sender === 'user' ? 'user-message' : 'ai-message';
    messageElement.innerText = message;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function sendMessage() {
    const userMessage = messageInput.value;
    if (userMessage.trim() === '') return;
    appendMessage(userMessage, 'user');

    const aiResponse = getAIResponse(userMessage);
    appendMessage(aiResponse, 'ai');

    messageInput.value = '';
}

function getAIResponse(userMessage) {
    return `Вы сказали: ${userMessage}`;
}
