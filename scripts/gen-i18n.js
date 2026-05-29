const fs = require('fs');
const path = require('path');

const en = {
  logo_text: "Hamza's Portfolio",
  nav_home: 'Home',
  nav_about: 'About',
  nav_technologies: 'Technologies',
  nav_experience: 'Experience',
  nav_education: 'Education',
  nav_projects: 'Projects',
  nav_contact: 'Contact',
  hero_title: "Hi, I'm Hamza Mehboob",
  hero_subtitle:
    'AI-Powered Embedded Software Engineer | IoT | Firmware | TinyML<br>Linux | RTOS | Yocto | Buildroot | Kernel Drivers | QT<br>RAG/MCP | Automation | Full Stack',
  hero_cta: 'Connect with Me',
  hero_welcome:
    'Welcome to my portfolio! Explore my projects and experience in embedded systems, IoT, and firmware development. <br>Or ask LISA, my AI assistant, anything about my professional career.',
  section_about: 'About Me',
  section_technologies: 'Technologies',
  section_experience: 'Experience',
  section_education: 'Education',
  section_projects: 'Projects',
  section_contact: 'Contact',
  about_text:
    "I'm an AI-powered Senior Embedded Software Engineer with 10+ years of experience across embedded systems, IoT products, and software development. I build end-to-end solutions spanning RTOS and bare-metal firmware, Linux (Yocto/Buildroot), desktop apps (QT/wxWidgets), web tools, and secure cloud-connected workflows. At Innovative Systems, I lead Smart RTU development for SCADA integrations across IEC 60870, DNP3, and Modbus, while also driving AI-assisted engineering workflows using RAG/MCP, Claude, Copilot, and Cursor. I hold an M.Sc. in Electrical Engineering from UET Lahore and focus on secure, scalable, and production-ready systems.",
  tech_1: 'Embedded C/C++/RUST, MISRA C, bare-metal',
  tech_2: 'Software: QT, wxWidgets, Python, Java, C#, Node.js, React.js, Linux/Windows/Android apps',
  tech_3: 'RTOS (FreeRTOS, TI-RTOS, Micrium)',
  tech_4: 'Linux (Yocto, Buildroot, Device Tree, U-Boot, Kernel Drivers)',
  tech_5: 'AI/ML (TensorFlow, Keras, TinyML, Edge Impulse)',
  tech_6: 'AI-Powered Development (RAG/MCP, Copilot, Claude, Cursor, prompt engineering)',
  tech_7: 'IoT Protocols (MQTT, Modbus, DNP3, IEC 60870-5-101/104, IEC 61850)',
  tech_8: 'Interfaces (UART, SPI, I2C, CAN, Ethernet)',
  tech_9: 'Connectivity (Wi-Fi, Ethernet, Bluetooth, Zigbee, Cellular, NFC)',
  tech_10: 'DevOps (Git, Jira, CI/CD, Jenkins, Docker, Kubernetes, Pytest)',
  tech_11: 'UI/UX (Qt, wxWidgets, WPF, Android Studio)',
  tech_12: 'Hardware (STM32, TI, Microchip, PIC, Raspberry Pi, SoC, SoM, PCB Design)',
  tech_13: 'Security (TLS, SHA Cryptography, Secure Boot)',
  tech_14: 'Automation (n8n, Node-RED, ThingsBoard)',
  exp_1_title: 'Firmware Engineer',
  exp_1_company:
    '<a href="https://www.isys.sa/isys/index.asp" target="_blank">Innovative Systems</a>, Riyadh, Saudi Arabia',
  exp_1_date: 'Sep 2023 - Present',
  exp_1_desc:
    'Leading Smart RTU development for grid station monitoring from requirements to deployment. Managing a 5-person team and delivering Linux-based STM32MP13X/SAM9X60 systems connected with digital/analog I/O cards and communication modules. Implemented 12 SCADA communication paths across IEC 60870-5-101/104, DNP3, and Modbus (serial and Ethernet), developed multi-threaded C++ applications, and maintained Yocto/Buildroot images. Built QT tools (simulator/configurator), HTTPD web UI, kernel/driver support, and AI-enabled R&D workflows using local RAG/MCP and n8n-based automation agents.',
  exp_2_title: 'Senior Specialist Engineer',
  exp_2_company: '<a href="https://www.u-blox.com/" target="_blank">u-blox</a>, Remote',
  exp_2_date: 'Jan 2021 - Aug 2023',
  exp_2_desc:
    'Developed cross-platform C++ desktop applications using wxWidgets for AT command automation. Automated GUI testing with Selenium, WinAppDriver, and Pytest. Implemented 3GPP 27.10 Mux protocol stack for modem communication and optimized log analysis for 3G/4G chipsets using Python and Wireshark.',
  exp_3_title: 'Embedded Systems Engineer',
  exp_3_company:
    '<a href="https://www.powersoft19.com/" target="_blank">PowerSoft19</a>, Lahore, Pakistan',
  exp_3_date: 'Jun 2018 - Dec 2020',
  exp_3_desc:
    'Developed IoT gateways and cellular-connected devices for <a href="https://www.indsci.com/" target="_blank">Industrial Scientific</a> (RGX Gateway) and Aware360. Implemented FOTA systems and cellular stack tests using FreeRTOS and Micrium RTOS on Linux gateways (TGX Gateway). Designed SHA-256 encrypted Wi-Fi/Ethernet web interfaces and tested Telit HE910/LE910 modems. Led Jira-based agile workflows and collaborated with international clients.',
  exp_4_title: 'Firmware Design Engineer',
  exp_4_company: '<a href="https://kbk.com.pk/" target="_blank">KBK Electronics</a>, Lahore, Pakistan',
  exp_4_date: 'Feb 2016 - Jun 2018',
  exp_4_desc:
    'Engineered firmware for 3-phase Smart Energy Meters (71M6543G SoC), handling metering, billing, and power management. Developed WPF-based Windows software for meter communication over optical ports. Ensured IEC 62056/DLMS compliance and participated in hardware design reviews.',
  exp_5_title: 'Application Engineer',
  exp_5_company: 'Hunch Automation, Lahore',
  exp_5_date: 'Nov 2015 - Jan 2016',
  exp_5_desc:
    'Developed Android apps and Windows tools for Modbus-based energy monitoring systems. Built firmware using PIC16/PIC24, integrating RS232/RS485 communications with Delta PLC/HMI systems.',
  edu_1:
    '<strong>M.Sc. in Electrical Engineering (Computer Major)</strong><br>UET Lahore | 2017 - 2019 | CGPA: 3.6/4.0',
  edu_2:
    '<strong>B.Sc. in Electrical Engineering</strong><br>UET Lahore | 2011 - 2015 | CGPA: 3.3/4.0',
  proj_1_title: 'RGX Gateway for Industrial Scientific',
  proj_1_desc:
    'Developed firmware for the RGX Gateway, a wireless cloud-connected device for real-time gas monitoring in hazardous locations. Implemented secure IoT communication using FreeRTOS and LENS Wireless, with SHA-256 encrypted Wi-Fi/Ethernet interfaces. Technologies used: Embedded C, FreeRTOS, Linux, MQTT, SHA-256. <a href="https://www.indsci.com/en/gas-detectors/wireless/rgxtm" target="_blank">Learn more</a>.',
  proj_2_title: 'TGX Gateway for Industrial Scientific',
  proj_2_desc:
    'Designed and implemented firmware for the TGX Gateway, a vehicle-installed IoT device for remote gas monitoring using cellular and satellite connectivity. Built Linux-based gateways with FOTA capabilities and tested Telit HE910/LE910 modems. Technologies used: Embedded C, Linux, Micrium RTOS, Cellular (3G/4G). <a href="https://www.indsci.com/en/gas-detectors/wireless/tgxtm" target="_blank">Learn more</a>.',
  proj_3_title: 'Smart RTU for Grid Management',
  proj_3_desc:
    'Led the development of a Smart Remote Terminal Unit for grid management, integrating IEC 60870-5-104 protocol and secure communication. Built Yocto/Buildroot-based Linux images and a Qt configurator with HTTPD web UI. Technologies used: Embedded C++, Linux, Qt, IEC 60870, HTTPD.',
  proj_4_title: '3-phase Smart Energy Meter Firmware',
  proj_4_desc:
    'Engineered firmware for 3-phase Smart Energy Meters using the 71M6543G SoC, ensuring IEC 62056/DLMS compliance. Developed WPF-based Windows software for meter communication. Technologies used: Embedded C, WPF, IEC 62056, Optical Communication.',
  proj_5_title: 'Single Phase Smart Energy Meter Firmware',
  proj_5_desc:
    'Engineered firmware for Single Phase Smart Energy Meters. Worked on basic drivers, communication protocols, and ensured compliance with industry standards.',
  proj_6_title: 'm-center software for u-blox modules',
  proj_6_desc:
    'Developed m-center software for u-blox modules, enabling seamless integration and management of IoT devices. Implemented features for device configuration, monitoring, and firmware updates. Technologies used: Embedded C, u-blox APIs, MQTT.',
  btn_view_project: 'View Project',
  btn_learn_more: 'Learn more',
  btn_show_details: 'Show Details',
  btn_hide_details: 'Hide Details',
  contact_email: 'Email:',
  contact_linkedin: 'LinkedIn:',
  contact_github: 'GitHub:',
  footer_copyright: '© 2025 Hamza Mehboob. All rights reserved.',
  chat_title: "Lisa, Hamza's AI Assistant",
  chat_placeholder: 'Ask Lisa about my embedded software, AI workflows, IoT, or resume updates...',
  chat_send: 'Send',
  meta_title: "Hamza's Portfolio",
  meta_description: "Hamza's - AI-Powered Senior Embedded Software Engineer Portfolio",
  aria_language: 'Select language',
  aria_palette: 'Select color palette',
  aria_dark_mode: 'Toggle dark mode'
};

const LOCALE_NAMES = {
  en: 'English',
  de: 'Deutsch',
  fr: 'Français',
  es: 'Español',
  it: 'Italiano',
  pt: 'Português',
  nl: 'Nederlands',
  pl: 'Polski',
  sv: 'Svenska',
  da: 'Dansk',
  fi: 'Suomi',
  no: 'Norsk',
  cs: 'Čeština',
  sk: 'Slovenčina',
  hu: 'Magyar',
  ro: 'Română',
  bg: 'Български',
  hr: 'Hrvatski',
  sl: 'Slovenščina',
  sr: 'Српски',
  bs: 'Bosanski',
  mk: 'Македонски',
  sq: 'Shqip',
  el: 'Ελληνικά',
  tr: 'Türkçe',
  ru: 'Русский',
  uk: 'Українська',
  be: 'Беларуская',
  lt: 'Lietuvių',
  lv: 'Latviešu',
  et: 'Eesti',
  is: 'Íslenska',
  ga: 'Gaeilge',
  mt: 'Malti',
  ca: 'Català',
  eu: 'Euskara',
  gl: 'Galego',
  cy: 'Cymraeg',
  lb: 'Lëtzebuergesch',
  rm: 'Rumantsch'
};

const UI_OVERRIDES = {
  de: {
    nav_home: 'Startseite',
    nav_about: 'Über mich',
    nav_technologies: 'Technologien',
    nav_experience: 'Erfahrung',
    nav_education: 'Ausbildung',
    nav_projects: 'Projekte',
    nav_contact: 'Kontakt',
    hero_title: 'Hallo, ich bin Hamza Mehboob',
    hero_cta: 'Kontakt aufnehmen',
    hero_welcome:
      'Willkommen in meinem Portfolio! Entdecken Sie meine Projekte und Erfahrungen in Embedded Systems, IoT und Firmware-Entwicklung. <br>Oder fragen Sie LISA, meine KI-Assistentin, alles über meine berufliche Laufbahn.',
    section_about: 'Über mich',
    section_technologies: 'Technologien',
    section_experience: 'Erfahrung',
    section_education: 'Ausbildung',
    section_projects: 'Projekte',
    section_contact: 'Kontakt',
    btn_view_project: 'Projekt ansehen',
    btn_learn_more: 'Mehr erfahren',
    btn_show_details: 'Details anzeigen',
    btn_hide_details: 'Details ausblenden',
    contact_email: 'E-Mail:',
    chat_send: 'Senden',
    footer_copyright: '© 2025 Hamza Mehboob. Alle Rechte vorbehalten.',
    meta_title: 'Hamzas Portfolio',
    meta_description: 'Hamzas Portfolio – KI-gestützter Senior Embedded Software Engineer',
    aria_language: 'Sprache wählen',
    aria_palette: 'Farbpalette wählen',
    aria_dark_mode: 'Dunkelmodus umschalten'
  },
  fr: {
    nav_home: 'Accueil',
    nav_about: 'À propos',
    nav_technologies: 'Technologies',
    nav_experience: 'Expérience',
    nav_education: 'Formation',
    nav_projects: 'Projets',
    nav_contact: 'Contact',
    hero_title: 'Bonjour, je suis Hamza Mehboob',
    hero_cta: 'Me contacter',
    hero_welcome:
      'Bienvenue sur mon portfolio ! Explorez mes projets et mon expérience en systèmes embarqués, IoT et développement firmware. <br>Ou demandez à LISA, mon assistante IA, tout sur ma carrière professionnelle.',
    section_about: 'À propos',
    section_technologies: 'Technologies',
    section_experience: 'Expérience',
    section_education: 'Formation',
    section_projects: 'Projets',
    section_contact: 'Contact',
    btn_view_project: 'Voir le projet',
    btn_learn_more: 'En savoir plus',
    btn_show_details: 'Afficher les détails',
    btn_hide_details: 'Masquer les détails',
    contact_email: 'E-mail :',
    chat_send: 'Envoyer',
    footer_copyright: '© 2025 Hamza Mehboob. Tous droits réservés.',
    meta_title: 'Portfolio de Hamza',
    meta_description: 'Portfolio de Hamza – Ingénieur logiciel embarqué senior propulsé par l’IA',
    aria_language: 'Choisir la langue',
    aria_palette: 'Choisir la palette',
    aria_dark_mode: 'Basculer le mode sombre'
  },
  es: {
    nav_home: 'Inicio',
    nav_about: 'Sobre mí',
    nav_technologies: 'Tecnologías',
    nav_experience: 'Experiencia',
    nav_education: 'Educación',
    nav_projects: 'Proyectos',
    nav_contact: 'Contacto',
    hero_title: 'Hola, soy Hamza Mehboob',
    hero_cta: 'Conectar conmigo',
    hero_welcome:
      '¡Bienvenido a mi portfolio! Explore mis proyectos y experiencia en sistemas embebidos, IoT y desarrollo de firmware. <br>O pregunte a LISA, mi asistente de IA, sobre mi carrera profesional.',
    section_about: 'Sobre mí',
    section_technologies: 'Tecnologías',
    section_experience: 'Experiencia',
    section_education: 'Educación',
    section_projects: 'Proyectos',
    section_contact: 'Contacto',
    btn_view_project: 'Ver proyecto',
    btn_learn_more: 'Saber más',
    btn_show_details: 'Mostrar detalles',
    btn_hide_details: 'Ocultar detalles',
    contact_email: 'Correo:',
    chat_send: 'Enviar',
    footer_copyright: '© 2025 Hamza Mehboob. Todos los derechos reservados.',
    meta_title: 'Portfolio de Hamza',
    meta_description: 'Portfolio de Hamza – Ingeniero senior de software embebido con IA',
    aria_language: 'Seleccionar idioma',
    aria_palette: 'Seleccionar paleta',
    aria_dark_mode: 'Alternar modo oscuro'
  },
  it: {
    nav_home: 'Home',
    nav_about: 'Chi sono',
    nav_technologies: 'Tecnologie',
    nav_experience: 'Esperienza',
    nav_education: 'Formazione',
    nav_projects: 'Progetti',
    nav_contact: 'Contatti',
    hero_title: 'Ciao, sono Hamza Mehboob',
    hero_cta: 'Contattami',
    section_about: 'Chi sono',
    section_technologies: 'Tecnologie',
    section_experience: 'Esperienza',
    section_education: 'Formazione',
    section_projects: 'Progetti',
    section_contact: 'Contatti',
    btn_view_project: 'Vedi progetto',
    btn_learn_more: 'Scopri di più',
    btn_show_details: 'Mostra dettagli',
    btn_hide_details: 'Nascondi dettagli',
    chat_send: 'Invia',
    aria_language: 'Seleziona lingua',
    aria_palette: 'Seleziona palette',
    aria_dark_mode: 'Attiva/disattiva modalità scura'
  },
  pt: {
    nav_home: 'Início',
    nav_about: 'Sobre',
    nav_technologies: 'Tecnologias',
    nav_experience: 'Experiência',
    nav_education: 'Educação',
    nav_projects: 'Projetos',
    nav_contact: 'Contacto',
    hero_title: 'Olá, sou Hamza Mehboob',
    hero_cta: 'Contacte-me',
    section_about: 'Sobre mim',
    section_technologies: 'Tecnologias',
    section_experience: 'Experiência',
    section_education: 'Educação',
    section_projects: 'Projetos',
    section_contact: 'Contacto',
    btn_view_project: 'Ver projeto',
    btn_learn_more: 'Saber mais',
    btn_show_details: 'Mostrar detalhes',
    btn_hide_details: 'Ocultar detalhes',
    chat_send: 'Enviar',
    aria_language: 'Selecionar idioma',
    aria_palette: 'Selecionar paleta',
    aria_dark_mode: 'Alternar modo escuro'
  },
  nl: {
    nav_home: 'Home',
    nav_about: 'Over mij',
    nav_technologies: 'Technologieën',
    nav_experience: 'Ervaring',
    nav_education: 'Opleiding',
    nav_projects: 'Projecten',
    nav_contact: 'Contact',
    hero_title: 'Hallo, ik ben Hamza Mehboob',
    hero_cta: 'Neem contact op',
    section_about: 'Over mij',
    section_technologies: 'Technologieën',
    section_experience: 'Ervaring',
    section_education: 'Opleiding',
    section_projects: 'Projecten',
    section_contact: 'Contact',
    btn_view_project: 'Bekijk project',
    btn_learn_more: 'Meer info',
    btn_show_details: 'Details tonen',
    btn_hide_details: 'Details verbergen',
    chat_send: 'Versturen',
    aria_language: 'Taal kiezen',
    aria_palette: 'Kleurenpalet kiezen',
    aria_dark_mode: 'Donkere modus wisselen'
  },
  pl: {
    nav_home: 'Strona główna',
    nav_about: 'O mnie',
    nav_technologies: 'Technologie',
    nav_experience: 'Doświadczenie',
    nav_education: 'Edukacja',
    nav_projects: 'Projekty',
    nav_contact: 'Kontakt',
    hero_title: 'Cześć, jestem Hamza Mehboob',
    hero_cta: 'Skontaktuj się',
    section_about: 'O mnie',
    btn_view_project: 'Zobacz projekt',
    btn_learn_more: 'Dowiedz się więcej',
    btn_show_details: 'Pokaż szczegóły',
    btn_hide_details: 'Ukryj szczegóły',
    chat_send: 'Wyślij',
    aria_language: 'Wybierz język',
    aria_palette: 'Wybierz paletę',
    aria_dark_mode: 'Przełącz tryb ciemny'
  },
  ru: {
    nav_home: 'Главная',
    nav_about: 'Обо мне',
    nav_technologies: 'Технологии',
    nav_experience: 'Опыт',
    nav_education: 'Образование',
    nav_projects: 'Проекты',
    nav_contact: 'Контакты',
    hero_title: 'Привет, я Hamza Mehboob',
    hero_cta: 'Связаться',
    section_about: 'Обо мне',
    btn_view_project: 'Смотреть проект',
    btn_learn_more: 'Подробнее',
    btn_show_details: 'Показать детали',
    btn_hide_details: 'Скрыть детали',
    chat_send: 'Отправить',
    aria_language: 'Выбрать язык',
    aria_palette: 'Выбрать палитру',
    aria_dark_mode: 'Переключить тёмный режим'
  },
  uk: {
    nav_home: 'Головна',
    nav_about: 'Про мене',
    nav_technologies: 'Технології',
    nav_experience: 'Досвід',
    nav_education: 'Освіта',
    nav_projects: 'Проєкти',
    nav_contact: 'Контакти',
    hero_title: 'Привіт, я Hamza Mehboob',
    hero_cta: "Зв'язатися",
    section_about: 'Про мене',
    btn_view_project: 'Переглянути проєкт',
    btn_show_details: 'Показати деталі',
    btn_hide_details: 'Приховати деталі',
    chat_send: 'Надіслати',
    aria_language: 'Обрати мову',
    aria_palette: 'Обрати палітру',
    aria_dark_mode: 'Перемкнути темний режим'
  },
  el: {
    nav_home: 'Αρχική',
    nav_about: 'Σχετικά',
    nav_technologies: 'Τεχνολογίες',
    nav_experience: 'Εμπειρία',
    nav_education: 'Εκπαίδευση',
    nav_projects: 'Έργα',
    nav_contact: 'Επικοινωνία',
    hero_title: 'Γεια, είμαι ο Hamza Mehboob',
    hero_cta: 'Επικοινωνήστε μαζί μου',
    section_about: 'Σχετικά με εμένα',
    btn_view_project: 'Προβολή έργου',
    btn_show_details: 'Εμφάνιση λεπτομερειών',
    btn_hide_details: 'Απόκρυψη λεπτομερειών',
    chat_send: 'Αποστολή',
    aria_language: 'Επιλογή γλώσσας',
    aria_palette: 'Επιλογή παλέτας',
    aria_dark_mode: 'Εναλλαγή σκοτεινής λειτουργίας'
  },
  tr: {
    nav_home: 'Ana Sayfa',
    nav_about: 'Hakkımda',
    nav_technologies: 'Teknolojiler',
    nav_experience: 'Deneyim',
    nav_education: 'Eğitim',
    nav_projects: 'Projeler',
    nav_contact: 'İletişim',
    hero_title: 'Merhaba, ben Hamza Mehboob',
    hero_cta: 'Benimle iletişime geçin',
    section_about: 'Hakkımda',
    btn_view_project: 'Projeyi görüntüle',
    btn_show_details: 'Detayları göster',
    btn_hide_details: 'Detayları gizle',
    chat_send: 'Gönder',
    aria_language: 'Dil seç',
    aria_palette: 'Palet seç',
    aria_dark_mode: 'Karanlık modu değiştir'
  }
};

const FALLBACK_UI = {
  sv: { nav_home: 'Hem', nav_about: 'Om mig', nav_technologies: 'Teknik', nav_experience: 'Erfarenhet', nav_education: 'Utbildning', nav_projects: 'Projekt', nav_contact: 'Kontakt', section_about: 'Om mig', section_technologies: 'Teknik', section_experience: 'Erfarenhet', section_education: 'Utbildning', section_projects: 'Projekt', section_contact: 'Kontakt', btn_view_project: 'Visa projekt', btn_show_details: 'Visa detaljer', btn_hide_details: 'Dölj detaljer', chat_send: 'Skicka' },
  da: { nav_home: 'Hjem', nav_about: 'Om mig', nav_technologies: 'Teknologier', nav_experience: 'Erfaring', nav_education: 'Uddannelse', nav_projects: 'Projekter', nav_contact: 'Kontakt', section_about: 'Om mig', btn_view_project: 'Se projekt', btn_show_details: 'Vis detaljer', btn_hide_details: 'Skjul detaljer', chat_send: 'Send' },
  fi: { nav_home: 'Etusivu', nav_about: 'Tietoa', nav_technologies: 'Teknologiat', nav_experience: 'Kokemus', nav_education: 'Koulutus', nav_projects: 'Projektit', nav_contact: 'Yhteystiedot', btn_view_project: 'Näytä projekti', btn_show_details: 'Näytä tiedot', btn_hide_details: 'Piilota tiedot', chat_send: 'Lähetä' },
  no: { nav_home: 'Hjem', nav_about: 'Om meg', nav_technologies: 'Teknologier', nav_experience: 'Erfaring', nav_education: 'Utdanning', nav_projects: 'Prosjekter', nav_contact: 'Kontakt', btn_view_project: 'Vis prosjekt', btn_show_details: 'Vis detaljer', btn_hide_details: 'Skjul detaljer', chat_send: 'Send' },
  cs: { nav_home: 'Domů', nav_about: 'O mně', nav_technologies: 'Technologie', nav_experience: 'Zkušenosti', nav_education: 'Vzdělání', nav_projects: 'Projekty', nav_contact: 'Kontakt', btn_view_project: 'Zobrazit projekt', btn_show_details: 'Zobrazit podrobnosti', btn_hide_details: 'Skrýt podrobnosti', chat_send: 'Odeslat' },
  sk: { nav_home: 'Domov', nav_about: 'O mne', nav_technologies: 'Technológie', nav_experience: 'Skúsenosti', nav_education: 'Vzdelanie', nav_projects: 'Projekty', nav_contact: 'Kontakt', btn_view_project: 'Zobraziť projekt', btn_show_details: 'Zobraziť podrobnosti', btn_hide_details: 'Skryť podrobnosti', chat_send: 'Odoslať' },
  hu: { nav_home: 'Kezdőlap', nav_about: 'Rólam', nav_technologies: 'Technológiák', nav_experience: 'Tapasztalat', nav_education: 'Tanulmányok', nav_projects: 'Projektek', nav_contact: 'Kapcsolat', btn_view_project: 'Projekt megtekintése', btn_show_details: 'Részletek', btn_hide_details: 'Részletek elrejtése', chat_send: 'Küldés' },
  ro: { nav_home: 'Acasă', nav_about: 'Despre mine', nav_technologies: 'Tehnologii', nav_experience: 'Experiență', nav_education: 'Educație', nav_projects: 'Proiecte', nav_contact: 'Contact', btn_view_project: 'Vezi proiectul', btn_show_details: 'Arată detalii', btn_hide_details: 'Ascunde detalii', chat_send: 'Trimite' },
  bg: { nav_home: 'Начало', nav_about: 'За мен', nav_technologies: 'Технологии', nav_experience: 'Опит', nav_education: 'Образование', nav_projects: 'Проекти', nav_contact: 'Контакт', btn_view_project: 'Виж проекта', btn_show_details: 'Покажи детайли', btn_hide_details: 'Скрий детайли', chat_send: 'Изпрати' },
  hr: { nav_home: 'Početna', nav_about: 'O meni', nav_technologies: 'Tehnologije', nav_experience: 'Iskustvo', nav_education: 'Obrazovanje', nav_projects: 'Projekti', nav_contact: 'Kontakt', btn_view_project: 'Pogledaj projekt', btn_show_details: 'Prikaži detalje', btn_hide_details: 'Sakrij detalje', chat_send: 'Pošalji' },
  sl: { nav_home: 'Domov', nav_about: 'O meni', nav_technologies: 'Tehnologije', nav_experience: 'Izkušnje', nav_education: 'Izobrazba', nav_projects: 'Projekti', nav_contact: 'Kontakt', btn_view_project: 'Ogled projekta', btn_show_details: 'Prikaži podrobnosti', btn_hide_details: 'Skrij podrobnosti', chat_send: 'Pošlji' },
  sr: { nav_home: 'Почетна', nav_about: 'О мени', nav_technologies: 'Технологије', nav_experience: 'Искуство', nav_education: 'Образовање', nav_projects: 'Пројекти', nav_contact: 'Контакт', btn_view_project: 'Погледај пројекат', btn_show_details: 'Прикажи детаље', btn_hide_details: 'Сакrij детаље', chat_send: 'Пошаљи' },
  bs: { nav_home: 'Početna', nav_about: 'O meni', nav_technologies: 'Tehnologije', nav_experience: 'Iskustvo', nav_education: 'Obrazovanje', nav_projects: 'Projekti', nav_contact: 'Kontakt', btn_view_project: 'Pogledaj projekt', btn_show_details: 'Prikaži detalje', btn_hide_details: 'Sakrij detalje', chat_send: 'Pošalji' },
  mk: { nav_home: 'Почетна', nav_about: 'За мене', nav_technologies: 'Технологии', nav_experience: 'Искуство', nav_education: 'Образование', nav_projects: 'Проекти', nav_contact: 'Контакт', btn_view_project: 'Види проект', btn_show_details: 'Прикажи детали', btn_hide_details: 'Сокrij детали', chat_send: 'Испрати' },
  sq: { nav_home: 'Kryefaqja', nav_about: 'Rreth meje', nav_technologies: 'Teknologjitë', nav_experience: 'Përvoja', nav_education: 'Arsimi', nav_projects: 'Projektet', nav_contact: 'Kontakt', btn_view_project: 'Shiko projektin', btn_show_details: 'Shfaq detajet', btn_hide_details: 'Fshih detajet', chat_send: 'Dërgo' },
  be: { nav_home: 'Галоўная', nav_about: 'Пра мяне', nav_technologies: 'Тэхналогіі', nav_experience: 'Досвед', nav_education: 'Адукацыя', nav_projects: 'Праекты', nav_contact: 'Кантакт', btn_view_project: 'Глядзець праект', btn_show_details: 'Паказаць дэталі', btn_hide_details: 'Схаваць дэталі', chat_send: 'Адправіць' },
  lt: { nav_home: 'Pradžia', nav_about: 'Apie mane', nav_technologies: 'Technologijos', nav_experience: 'Patirtis', nav_education: 'Išsilavinimas', nav_projects: 'Projektai', nav_contact: 'Kontaktai', btn_view_project: 'Peržiūrėti projektą', btn_show_details: 'Rodyti detales', btn_hide_details: 'Slėpti detales', chat_send: 'Siųsti' },
  lv: { nav_home: 'Sākums', nav_about: 'Par mani', nav_technologies: 'Tehnoloģijas', nav_experience: 'Pieredze', nav_education: 'Izglītība', nav_projects: 'Projekti', nav_contact: 'Kontakti', btn_view_project: 'Skatīt projektu', btn_show_details: 'Rādīt detaļas', btn_hide_details: 'Paslēpt detaļas', chat_send: 'Sūtīt' },
  et: { nav_home: 'Avaleht', nav_about: 'Minust', nav_technologies: 'Tehnoloogiad', nav_experience: 'Kogemus', nav_education: 'Haridus', nav_projects: 'Projektid', nav_contact: 'Kontakt', btn_view_project: 'Vaata projekti', btn_show_details: 'Näita üksikasju', btn_hide_details: 'Peida üksikasjad', chat_send: 'Saada' },
  is: { nav_home: 'Heim', nav_about: 'Um mig', nav_technologies: 'Tækni', nav_experience: 'Reynsla', nav_education: 'Menntun', nav_projects: 'Verkefni', nav_contact: 'Samband', btn_view_project: 'Skoða verkefni', btn_show_details: 'Sýna nánar', btn_hide_details: 'Fela nánar', chat_send: 'Senda' },
  ga: { nav_home: 'Baile', nav_about: 'Fúmsa', nav_technologies: 'Teicneolaíochtaí', nav_experience: 'Taithí', nav_education: 'Oideachas', nav_projects: 'Tionscadail', nav_contact: 'Teagmháil', btn_view_project: 'Féach ar an tionscadal', btn_show_details: 'Taispeáin mionsonraí', btn_hide_details: 'Folaigh mionsonraí', chat_send: 'Seol' },
  mt: { nav_home: 'Home', nav_about: 'Dwar', nav_technologies: 'Teknoloġiji', nav_experience: 'Esperjenza', nav_education: 'Edukazzjoni', nav_projects: 'Proġetti', nav_contact: 'Kuntatt', btn_view_project: 'Ara l-proġett', btn_show_details: 'Uri dettalji', btn_hide_details: 'Aħbi dettalji', chat_send: 'Ibgħat' },
  ca: { nav_home: 'Inici', nav_about: 'Sobre mi', nav_technologies: 'Tecnologies', nav_experience: 'Experiència', nav_education: 'Educació', nav_projects: 'Projectes', nav_contact: 'Contacte', btn_view_project: 'Veure projecte', btn_show_details: 'Mostrar detalls', btn_hide_details: 'Amagar detalls', chat_send: 'Enviar' },
  eu: { nav_home: 'Hasiera', nav_about: 'Niri buruz', nav_technologies: 'Teknologiak', nav_experience: 'Esperientzia', nav_education: 'Hezkuntza', nav_projects: 'Proiektuak', nav_contact: 'Kontaktua', btn_view_project: 'Ikusi proiektua', btn_show_details: 'Xehetasunak erakutsi', btn_hide_details: 'Xehetasunak ezkutatu', chat_send: 'Bidali' },
  gl: { nav_home: 'Inicio', nav_about: 'Sobre min', nav_technologies: 'Tecnoloxías', nav_experience: 'Experiencia', nav_education: 'Educación', nav_projects: 'Proxectos', nav_contact: 'Contacto', btn_view_project: 'Ver proxecto', btn_show_details: 'Mostrar detalles', btn_hide_details: 'Ocultar detalles', chat_send: 'Enviar' },
  cy: { nav_home: 'Hafan', nav_about: 'Amdanaf i', nav_technologies: 'Technolegau', nav_experience: 'Profiad', nav_education: 'Addysg', nav_projects: 'Prosiectau', nav_contact: 'Cysylltu', btn_view_project: 'Gweld prosiect', btn_show_details: 'Dangos manylion', btn_hide_details: 'Cuddio manylion', chat_send: 'Anfon' },
  lb: { nav_home: 'Heem', nav_about: 'Iwwer mech', nav_technologies: 'Technologien', nav_experience: 'Erfarung', nav_education: 'Ausbildung', nav_projects: 'Projeten', nav_contact: 'Kontakt', btn_view_project: 'Projet kucken', btn_show_details: 'Detailer weisen', btn_hide_details: 'Detailer verstoppen', chat_send: 'Schécken' },
  rm: { nav_home: 'Chasa', nav_about: 'Davart mai', nav_technologies: 'Tecnologias', nav_experience: 'Experiennza', nav_education: 'Furmaziun', nav_projects: 'Projects', nav_contact: 'Contact', btn_view_project: 'Mussar project', btn_show_details: 'Mussar detagls', btn_hide_details: 'Zuppar detagls', chat_send: 'Trametter' }
};

Object.assign(UI_OVERRIDES, FALLBACK_UI);

const SUPPORTED_LOCALES = Object.keys(LOCALE_NAMES);
const translations = { en };

for (const loc of SUPPORTED_LOCALES) {
  if (loc === 'en') continue;
  translations[loc] = Object.assign({}, en, UI_OVERRIDES[loc] || {});
}

const out = `/**
 * Portfolio i18n — ${SUPPORTED_LOCALES.length} European locales
 */
(function () {
  const LOCALE_NAMES = ${JSON.stringify(LOCALE_NAMES, null, 4)};

  const SUPPORTED_LOCALES = ${JSON.stringify(SUPPORTED_LOCALES)};

  const translations = ${JSON.stringify(translations, null, 4)};

  let currentLocale = 'en';

  function t(key) {
    const pack = translations[currentLocale] || translations.en;
    return pack[key] || translations.en[key] || key;
  }

  function setLanguage(locale) {
    const code = (locale || 'en').split('-')[0].toLowerCase();
    currentLocale = SUPPORTED_LOCALES.includes(code) ? code : 'en';
    localStorage.setItem('portfolioLanguage', currentLocale);
    document.documentElement.lang = currentLocale;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      if (key) el.textContent = t(key);
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      const key = el.getAttribute('data-i18n-html');
      if (key) el.innerHTML = t(key);
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      const key = el.getAttribute('data-i18n-placeholder');
      if (key) el.placeholder = t(key);
    });

    document.title = t('meta_title');
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.content = t('meta_description');

    const langSelect = document.getElementById('languageSelect');
    if (langSelect) {
      langSelect.value = currentLocale;
      langSelect.setAttribute('aria-label', t('aria_language'));
    }

    const paletteSelect = document.getElementById('paletteSelect');
    if (paletteSelect) paletteSelect.setAttribute('aria-label', t('aria_palette'));

    const darkBtn = document.getElementById('darkModeToggle');
    if (darkBtn) darkBtn.setAttribute('aria-label', t('aria_dark_mode'));

    document.querySelectorAll('.toggle-btn').forEach(function (btn) {
      const header = btn.closest('.timeline-header');
      const content = header && header.nextElementSibling;
      if (content) {
        btn.textContent = content.classList.contains('active')
          ? t('btn_hide_details')
          : t('btn_show_details');
      }
    });

    if (typeof refreshPaletteLabels === 'function') {
      refreshPaletteLabels(currentLocale);
    }
  }

  function initI18n() {
    const stored = localStorage.getItem('portfolioLanguage');
    const browser = (navigator.language || 'en').split('-')[0].toLowerCase();
    const locale = stored || (SUPPORTED_LOCALES.includes(browser) ? browser : 'en');
    populateLanguageSelect();
    setLanguage(locale);
  }

  function populateLanguageSelect() {
    const sel = document.getElementById('languageSelect');
    if (!sel || sel.options.length) return;
    SUPPORTED_LOCALES.forEach(function (code) {
      const opt = document.createElement('option');
      opt.value = code;
      opt.textContent = LOCALE_NAMES[code] || code;
      sel.appendChild(opt);
    });
    sel.addEventListener('change', function () {
      setLanguage(sel.value);
    });
  }

  window.t = t;
  window.setLanguage = setLanguage;
  window.initI18n = initI18n;
  window.getCurrentLocale = function () {
    return currentLocale;
  };
})();
`;

fs.writeFileSync(path.join(__dirname, '..', 'js', 'i18n.js'), out);
console.log('Generated i18n.js with', SUPPORTED_LOCALES.length, 'locales');
