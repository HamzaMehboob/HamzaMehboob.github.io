document.addEventListener('DOMContentLoaded', () => {
    const chatToggle = document.getElementById('chat-toggle');
    const chatContainer = document.getElementById('chat-widget-container');
    const chatClose = document.getElementById('chat-close');
    const chatInput = document.getElementById('chat-input-text');
    const chatSend = document.getElementById('chat-send');
    const chatMessages = document.getElementById('chat-messages');
    
    // Open chat widget by default
    chatContainer.classList.remove('hidden');
    chatInput.focus();
    // Extract portfolio content (reduced to 500 chars)
    const portfolioContent = document.body.innerText.substring(0, 500);

    const resumeText = `
Hamza Mehboob
Hamzamehboob103@gmail.com | +966 535 369 868 | Open to Relocate Globally | Valid Saudi Iqama

Professional Summary:
AI-powered Senior Embedded Software Engineer with 10+ years of experience in embedded systems, IoT, Linux/RTOS development, and software delivery across firmware, desktop, and web stacks.

Core Skills:
- Embedded: Bare-metal, Embedded C/C++, MISRA C, RTOS (FreeRTOS, TI-RTOS, Micrium)
- Software: QT, wxWidgets, Python, C#, Android, full-stack web basics
- Linux: Yocto, Buildroot, Device Tree, U-Boot, Kernel Drivers, IPC, multithreading
- Protocols: IEC 60870-5-101/104, DNP3, Modbus, MQTT, IEC 61850, UART/SPI/I2C/CAN/Ethernet
- AI/Automation: TinyML, TensorFlow/Keras, RAG/MCP, Copilot, Claude, Cursor, n8n, Node-RED, ThingsBoard
- Security: TLS, SHA cryptography, secure boot, OTA/FOTA

Recent Role - Firmware Engineer, Innovative Systems (Sep 2023 - Present):
- Leads Smart RTU product from requirements to deployment for grid station monitoring.
- Manages a 5-person team (3 developers, 1 hardware, 1 test engineer).
- Delivers Linux-based STM32MP13X/SAM9X60 systems integrating 12 SCADA communication paths.
- Works across IEC 60870-5-101/104, DNP3, and Modbus on serial and Ethernet links.
- Built QT simulator/configurator, HTTPD web UI, and internal RAG/MCP + n8n automation workflows.

Prior Experience:
- Senior Specialist Engineer, u-blox (Jan 2021 - Aug 2023)
- Embedded Systems Engineer, PowerSoft19 (Jun 2018 - Dec 2020)
- Firmware Design Engineer, KBK Electronics (Feb 2016 - Jun 2018)
- Application Engineer, Hunch Automation (Nov 2015 - Jan 2016)

Education:
- M.Sc. Electrical Engineering (Computer Major), UET Lahore (CGPA 3.6/4.0)
- B.Sc. Electrical Engineering, UET Lahore (CGPA 3.3/4.0)
    `;

    // Toggle chat window
    chatToggle.addEventListener('click', () => {
        chatContainer.classList.toggle('hidden');
        if (!chatContainer.classList.contains('hidden')) {
            chatInput.focus();
        }
    });

    chatClose.addEventListener('click', () => {
        chatContainer.classList.add('hidden');
    });

    // Send message and get AI response
    async function sendMessage() {
        const message = chatInput.value.trim();
        if (!message) return;

        // Add user message
        const userMessage = document.createElement('div');
        userMessage.className = 'chat-message user';
        userMessage.textContent = message;
        chatMessages.appendChild(userMessage);
        chatInput.value = '';
        chatMessages.scrollTop = chatMessages.scrollHeight;

        try {
            const response = await axios.post(
                'https://lisa-backend-vz4m.onrender.com/api/chat',
                {
                    model: 'mistralai/mistral-7b-instruct:free',
                    messages: [
                        {
                            role: 'AI Personal Assistant',
                            content: `You are Lisa, a funny AI assistant for Hamza Mehboob. Hamza is an AI-powered Senior Embedded Software Engineer with 10+ years of experience in embedded systems, IoT, Linux/RTOS, and software development. Respond in a funny, professional, concise, and friendly tone. Keep answers precise and brief. Use the following context to answer queries accurately:

**Portfolio (https://HamzaMehboob.github.io):** ${portfolioContent}
**Resume:** ${resumeText}
**Details:** Expertise in Embedded C/C++, RTOS, IoT (MQTT, Modbus, DNP3, IEC 60870-101/104), AI/ML (TensorFlow, TinyML), AI-assisted workflows (RAG/MCP, n8n), interfaces (UART, SPI), and hardware (STM32, Raspberry Pi). Projects: Smart RTU, RGX Gateway, TGX Gateway, smart metering solutions. Contact: hamzamehboob103@gmail.com, LinkedIn (hamzamehboob103), GitHub (HamzaMehboob).

For unrelated queries, suggest contacting Hamza.`
                        },
                        { role: 'user', content: message }
                    ],
                    max_tokens: 200,
                    temperature: 0.7,
                    stop: ['\n', '.'], // Ensure complete sentences
                    provider: { data_collection: 'deny' } // Prevent prompt logging
                },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );

            const botMessage = document.createElement('div');
            botMessage.className = 'chat-message bot';
            botMessage.textContent = response.data.choices[0].message.content.trim() || 'Sorry, no response from Lisa. Try again!';
            chatMessages.appendChild(botMessage);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        } catch (error) {
            console.error('Error fetching AI response:', error.response ? error.response.data : error.message);
            let errorText = 'Sorry, Lisa couldn’t respond. Try again or contact Hamza at hamzamehboob103@gmail.com.';
            if (error.response) {
                if (error.response.status === 401) {
                    errorText = 'Lisa’s API key is invalid. Please contact Hamza to fix this.';
                } else if (error.response.status === 429) {
                    errorText = 'Lisa’s request limit is reached. Try again later or contact Hamza.';
                } else if (error.response.status >= 500) {
                    errorText = 'Lisa’s model or backend is unavailable. Try again later.';
                } else if (error.response.status === 400) {
                    errorText = 'Lisa received an invalid request. Please rephrase your query.';
                }
            } else if (error.code === 'ERR_NETWORK') {
                errorText = 'I already had enough questions today. Please come tomorrow.';
                //errorText = 'Network error: Lisa can’t connect to the server. Check your internet.';
            } else if (error.message.includes('CORS')) {
                errorText = 'CORS issue: Lisa can’t connect to the backend. Contact Hamza to fix this.';
            }
            const errorMessage = document.createElement('div');
            errorMessage.className = 'chat-message bot';
            errorMessage.textContent = errorText;
            chatMessages.appendChild(errorMessage);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    }

    chatSend.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });

    // Initial greeting
    const greeting = document.createElement('div');
    greeting.className = 'chat-message bot';
    greeting.textContent = "Hi! I’m Lisa, Hamza’s AI Assistant. Ask about his embedded software, IoT, AI workflows, or resume!";
    chatMessages.appendChild(greeting);

    const greeting2 = document.createElement('div');
    greeting2.className = 'chat-message bot';
    greeting2.textContent = "Note: Due to free backend server, first reply can take 20-30 sec.";
    chatMessages.appendChild(greeting2);
});
