import React, { useState, useRef, useEffect } from 'react';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { text: "Hello! 👋\nI am the BSPHCL Virtual Assistant.\nHow can I help you with your electricity queries today?", sender: 'bot', time: 'Just now' }
    ]);
    const [inputValue, setInputValue] = useState('');
    const chatBodyRef = useRef(null);

    const toggleChat = () => setIsOpen(!isOpen);

    const scrollToBottom = () => {
        if (chatBodyRef.current) {
            chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSendMessage = () => {
        if (!inputValue.trim()) return;

        const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const newMessages = [...messages, { text: inputValue, sender: 'user', time }];
        setMessages(newMessages);
        const userQuery = inputValue.toLowerCase();
        setInputValue('');

        // Simulate Bot Response
        setTimeout(() => {
            let botResponse = "Thank you for your query. I'm connecting you to our relevant FAQs. Please browse the 'Overview' section for more details or call 1912 for immediate assistance.";

            if (userQuery.includes('bill') || userQuery.includes('payment')) {
                botResponse = "To pay your bill, click on the 'Pay Bill Online' button in the services section or visit the official quick pay portal.";
            } else if (userQuery.includes('complaint') || userQuery.includes('grievance') || userQuery.includes('light')) {
                botResponse = "You can lodge a complaint by dialing 1912 (Toll Free) or using the 'Consumer Grievance' link in the section below.";
            } else if (userQuery.includes('connection')) {
                botResponse = "For a new connection, please visit the 'New Connection' tab under Consumer services and fill out the application form.";
            } else if (userQuery.includes('hello') || userQuery.includes('hi')) {
                botResponse = "Namaste! How can I assist you with your electricity services today?";
            }

            setMessages(prev => [...prev, { text: botResponse, sender: 'bot', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
        }, 1000);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') handleSendMessage();
    };

    return (
        <div className="chatbot-container">
            <button className="chat-toggle-btn" onClick={toggleChat}>
                <i className={isOpen ? "ri-close-line" : "ri-chat-smile-2-line"}></i>
            </button>

            <div className={`chat-window ${isOpen ? 'open' : ''}`}>
                <div className="chat-header">
                    <div className="chat-title">
                        <i className="ri-robot-line"></i>
                        <div>
                            <h4>BSPHCL Assistant</h4>
                            <span>Online</span>
                        </div>
                    </div>
                    <button className="chat-close-btn" onClick={toggleChat}><i className="ri-close-line"></i></button>
                </div>
                <div className="chat-body" ref={chatBodyRef}>
                    {messages.map((msg, idx) => (
                        <div key={idx} className={`message ${msg.sender}-message`}>
                            <div className="message-content" dangerouslySetInnerHTML={{ __html: msg.text.replace(/\n/g, '<br/>') }}></div>
                            <div className="message-time">{msg.time}</div>
                        </div>
                    ))}
                </div>
                <div className="chat-footer">
                    <input
                        type="text"
                        placeholder="Type your query..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={handleKeyPress}
                    />
                    <button onClick={handleSendMessage}><i className="ri-send-plane-fill"></i></button>
                </div>
            </div>
        </div>
    );
};

export default Chatbot;
