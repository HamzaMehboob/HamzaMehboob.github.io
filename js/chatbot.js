document.addEventListener('DOMContentLoaded', () => {
    const chatToggle = document.getElementById('chat-toggle');
    const chatContainer = document.getElementById('chat-widget-container');
    const chatClose = document.getElementById('chat-close');
    const chatInput = document.getElementById('chat-input-text');
    const chatSend = document.getElementById('chat-send');
    const chatMessages = document.getElementById('chat-messages');

    // Extract portfolio content
    const portfolioContent = document.body.innerText.substring(0, 1000); // Limit to avoid token overflow

    // Placeholder for resume text (replace with actual resume text)
    const resumeText = `
Hamza Mehboob 
 Hamzamehboob103@gmail.com |  +966 535 369 868 |  Open to Relocate Globally | Valid Saudi Iqama 

LinkedIn | GitHub | Portfolio 

Professional Summary 
Results-driven Senior Embedded & Firmware Engineer with 10+ years of expertise in embedded systems, IoT solutions, and 
low-level Linux development, including RTOS, device drivers, protocol stacks (IEC 60870, Modbus, MQTT), and cross-platform 
application development. Proven success in leading teams, delivering end-to-end product development, and integrating 
secure IoT devices. Open to global relocation and passionate about building smart, connected, and secure embedded systems. 

Core Competencies 
• Embedded Systems: Bare-metal, RTOS (FreeRTOS, TI-RTOS, Micrium), Embedded C/C++, DMA, low power high-speed 

design, ISR, interrupt-based programming, low latency systems, full product life cycle 
• Linux & OS-Level: Yocto, Buildroot, Kernel Drivers, U-Boot, Multithreading, IPC 
• AI/ML: Proficient in Google Colab, TensorFlow, Keras, TinyML, model training, dataset preprocessing, and deployment on 

edge devices 
• Protocols & Interfaces: UART, SPI, I2C, Ethernet, RS485, CAN bus, Modbus, MQTT, IEC 60870-5-104, IEC 61850 
• IoT & Connectivity: Wi-Fi, Bluetooth, Zigbee, Cellular (3G/4G/NB-IoT), NFC 
• DevOps & Tools: Git, Jira, CI/CD, Unit Testing, Python, Selenium, Pytest, WinAppDriver, debug tools 
• UI/UX & Apps: Qt, wxWidgets, Android Studio, WPF, Windows Forms, Java, C# 
• Hardware: STM32, PIC, BeagleBone, Raspberry Pi, PCB Design, Altium, Arduino, schematic design, ARM architectures, 

low-power hardware 
• Security: TLS, secure boot, SHA cryptography, OTA firmware updates 
• Cloud & Web: HTTPD, JSON/XML, Web Interfaces, Wireshark 
• Additional Skills: Electronics, research and development, signal processing, strong problem-solving skills 

Professional Experience 

Firmware Engineer 
Innovative Systems, Riyadh, Saudi Arabia | Sep 2023 – Present 
• Led Smart RTU (Remote Terminal Unit) design & development from specs to deployment for grid management. 
• Managed 3-person team (2 developers, 1 hardware engineer) and handled cross-functional coordination. 
• Developed multi-threaded embedded Linux C++ applications communicating over UART & Ethernet. 
• Integrated IEC 60870-5-104 protocol, ported open-source libraries, and secured the system against cyber threats. 
• Built and maintained Yocto and Buildroot-based custom Linux images (STM32MP13X, SAM9X60). 
• Supported kernel module and driver development, hardware selection, and PCB co-design. 
• Developed a Qt configurator, deployed web UI using HTTPD, and validated IED data to SCADA systems. 

Senior Specialist Engineer 
u-blox, Remote | Jan 2021 – Aug 2023 
• Developed cross-platform C++ desktop applications using wxWidgets for AT command automation. 
• Automated GUI testing using Selenium, WinAppDriver, and Pytest. 
• Implemented 3GPP 27.10 Mux protocol stack for modem communication and data logging in Wireshark. 
• Delivered robust, cross-platform Python tools and optimized log analysis for 3G/4G chipsets. 



Embedded Systems Engineer 
PowerSoft19, Remote | Jun 2018 – Dec 2020 
• Delivered IoT gateways and cellular-connected devices for Industrial Scientific (USA) and Aware360 (Canada). 
• Worked on FreeRTOS, Micrium RTOS, and Linux gateways, implemented FOTA & cellular stack tests. 
• Designed SHA-256 encrypted Wi-Fi/Ethernet web interface, and tested Telit HE910/LE910 modems. 
• Led Jira-based agile workflows and communicated directly with international clients. 

Firmware Design Engineer 
KBK Electronics, Lahore | Feb 2016 – Jun 2018 
• Engineered 3-phase Smart Energy Meter firmware (71M6543G SoC), including metering, billing, and power management. 
• Built WPF-based Windows software for meter communication over optical ports. 
• Ensured IEC 62056/DLMS compliance, participated in hardware design review & interoperability testing. 

Application Engineer 
Hunch Automation, Lahore | Nov 2015 – Jan 2016 
• Developed Android apps and Windows tools for Modbus-based energy monitoring systems. 
• Built firmware using PIC16/PIC24, integrated RS232/RS485 communications with Delta PLC/HMI systems. 

Education 
M.Sc. in Electrical Engineering (Computer Major) – UET Lahore (2017–2019) | CGPA: 3.6/4.0 

B.Sc. in Electrical Engineering – UET Lahore (2011–2015) | CGPA: 3.3/4.0 

Certifications & Achievements 
• 10+ Technical Certifications (Protection Relay, Digital Substation – Saudi Engineering Council) 
• 60+ Courses (Embedded Systems, DevOps, IoT, Security) on Udemy & LinkedIn 
• Scored 100% in MENSA IQ Test, 2nd place in IEEE Xtreme (Pakistan) & Punjab Geek War 
• Certified Mobile App & Game Developer – KICS UET Lahore
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
    chatSend.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });

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
                'https://openrouter.ai/api/v1/chat/completions',
                {
                    model: 'mistralai/mistral-7b-instruct:free',
                    messages: [
                        {
                            role: 'system',
                            content: `You are Lisa, an AI assistant you have to tell about Hamza Mehboob, your boss, a Senior Embedded & Firmware Engineer with over eight years of experience in embedded systems, IoT, AI, TinyML, and firmware development. Respond in a professional, concise, and friendly tone. Be precise to your answers. Use less words. Use the following context to answer queries accurately:

**Portfolio Content (https://HamzaMehboob.github.io):**
${portfolioContent}

**Resume:**
${resumeText}

**Details:**
- Expertise: Embedded C/C++, RTOS (FreeRTOS, TI-RTOS, Micrium), Linux (Yocto, Buildroot), IoT protocols (MQTT, Modbus, IEC 60870, IEC 61850), AI/ML (TensorFlow, Keras, TinyML), interfaces (UART, SPI, I2C, CAN, Ethernet), connectivity (Wi-Fi, Bluetooth, Zigbee, Cellular, NFC), DevOps (Git, Jira, CI/CD, Pytest), UI/UX (Qt, wxWidgets, WPF, Android Studio), hardware (STM32, PIC, Raspberry Pi, PCB design), security (TLS, SHA Cryptography, Secure Boot).
- Experience: Firmware Engineer at Innovative Systems (2023-Present, Smart RTUs), Senior Specialist Engineer at u-blox (2021-2023, C++ apps), Embedded Systems Engineer at PowerSoft19 (2018-2020, IoT gateways), Firmware Design Engineer at KBK Electronics (2016-2018, Smart Energy Meters), Application Engineer at Hunch Automation (2015-2016, Modbus systems).
- Projects: RGX Gateway (Industrial Scientific, FreeRTOS, MQTT), TGX Gateway (Linux, Cellular), Smart RTU (IEC 60870), Smart Energy Meter (IEC 62056).
- Education: M.Sc. Electrical Engineering (UET Lahore, 2017-2019, CGPA 3.6), B.Sc. Electrical Engineering (UET Lahore, 2011-2015, CGPA 3.3).
For questions outside this scope, suggest contacting Hamza via email (hamzamehboob103@gmail.com), LinkedIn (hamzamehboob103), or GitHub (HamzaMehboob).`
                        },
                        { role: 'user', content: message }
                    ],
                    max_tokens: 150,
                    temperature: 0.7
                },
                {
                    headers: {
                        'Authorization': 'Bearer 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', // Replace with your OpenRouter API key
                        'Content-Type': 'application/json',
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
            let errorText = 'Sorry, Lisa couldn’t respond. Please try again or contact Hamza via the Contact section.';
            if (error.response) {
                if (error.response.status === 401) {
                    errorText = 'Lisa’s API key is invalid. Please contact Hamza to fix this.';
                } else if (error.response.status === 429) {
                    errorText = 'Lisa’s request limit is reached. Try again later or contact Hamza.';
                } else if (error.response.status >= 500) {
                    errorText = 'Lisa’s model is currently unavailable. Try again later.';
                } else if (error.response.status === 400) {
                    errorText = 'Lisa received an invalid request. Please rephrase your query.';
                }
            } else if (error.code === 'ERR_NETWORK') {
                errorText = 'Network error: Lisa can’t connect to the server. Check your internet and try again.';
            }
            const errorMessage = document.createElement('div');
            errorMessage.className = 'chat-message bot';
            errorMessage.textContent = errorText;
            chatMessages.appendChild(errorMessage);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    }

    // Initial greeting
    const greeting = document.createElement('div');
    greeting.className = 'chat-message bot';
    greeting.textContent = 'Hi! I’m Lisa, Hamza’s AI Assistant. Ask me about his embedded systems, IoT, AI projects, or resume details!';
    chatMessages.appendChild(greeting);
});