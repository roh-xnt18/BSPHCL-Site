document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';

        // Simple animation for dropdown
        if (navMenu.style.display === 'flex') {
            navMenu.style.position = 'absolute';
            navMenu.style.top = '80px';
            navMenu.style.left = '0';
            navMenu.style.width = '100%';
            navMenu.style.flexDirection = 'column';
            navMenu.style.background = '#0f172a';
            navMenu.style.padding = '20px';
            navMenu.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
        }
    });

    // Header Scroll Effect
    const header = document.querySelector('.glass-header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(15, 23, 42, 0.95)';
            header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
        } else {
            header.style.background = 'rgba(15, 23, 42, 0.8)';
            header.style.boxShadow = 'none';
        }
    });

    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                if (window.innerWidth <= 900) {
                    navMenu.style.display = 'none';
                }
            }
        });
    });

    // Add hover effect to cards using vanilla JS tilt (optional enhancement)
    // Simple 3D effect on mousemove
    const cards = document.querySelectorAll('.service-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // highlight effect
            card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.1), rgba(255,255,255,0.05))`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.background = 'var(--card-bg)';
        });
    });
    // Chatbot Functionality
    const chatToggleBtn = document.querySelector('.chat-toggle-btn');
    const chatWindow = document.querySelector('.chat-window');
    const chatCloseBtn = document.querySelector('.chat-close-btn');
    const chatInput = document.getElementById('chat-input');
    const chatSendBtn = document.getElementById('chat-send-btn');
    const chatBody = document.getElementById('chat-body');

    // Toggle Chat Window
    function toggleChat() {
        chatWindow.classList.toggle('open');
        const icon = chatToggleBtn.querySelector('i');
        if (chatWindow.classList.contains('open')) {
            icon.classList.remove('ri-chat-smile-2-line');
            icon.classList.add('ri-close-line');
            chatInput.focus();
        } else {
            icon.classList.remove('ri-close-line');
            icon.classList.add('ri-chat-smile-2-line');
        }
    }

    chatToggleBtn.addEventListener('click', toggleChat);
    chatCloseBtn.addEventListener('click', toggleChat);

    // Send Message Logic
    function sendMessage() {
        const message = chatInput.value.trim();
        if (message) {
            // Add User Message
            addMessage(message, 'user');
            chatInput.value = '';

            // Simulate Bot Typing/Reply
            setTimeout(() => {
                const response = getBotResponse(message);
                addMessage(response, 'bot');
            }, 1000);
        }
    }

    chatSendBtn.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });

    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', `${sender}-message`);

        const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        messageDiv.innerHTML = `
            <div class="message-content">${text}</div>
            <div class="message-time">${time}</div>
        `;

        chatBody.appendChild(messageDiv);
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    function getBotResponse(input) {
        input = input.toLowerCase();
        if (input.includes('bill') || input.includes('payment')) {
            return "To pay your bill, click on the 'Pay Bill Online' button in the services section or visit the official quick pay portal.";
        } else if (input.includes('complaint') || input.includes('grievance') || input.includes('light')) {
            return "You can lodge a complaint by dialing 1912 (Toll Free) or using the 'Consumer Grievance' link in the section below.";
        } else if (input.includes('connection')) {
            return "For a new connection, please visit the 'New Connection' tab under Consumer services and fill out the application form.";
        } else if (input.includes('hello') || input.includes('hi')) {
            return "Namaste! How can I assist you with your electricity services today?";
        } else {
            return "Thank you for your query. I'm connecting you to our relevant FAQs. Please browse the 'Overview' section for more details or call 1912 for immediate assistance.";
        }
    }
});
