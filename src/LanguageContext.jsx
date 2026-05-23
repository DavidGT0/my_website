import React, { createContext, useState, useContext, useEffect } from 'react';

const translations = {
    en: {
        // Nav
        logo: "Portfolio",
        navHome: "Home",
        navProjects: "Projects",
        navAbout: "About",
        navContact: "Contact",
        toggleLanguage: "עברית",

        // Home
        hello: "Hello, I'm ",
        name: "David Gazit",
        homeSubtitle: "Practical Software Engineering Student | Full Stack Developer",
        homeDesc1: "I build web applications, interactive projects, and hardware-integrated solutions.",
        homeDesc2: "Discover my projects and technical skills.",
        btnProjects: "My Projects",
        btnContact: "Contact Me",

        // About Me
        about1: "About ",
        about2: "Me",
        aboutSubtitle: "Practical Software Engineering Student",
        bio1: "I am a second-year Practical Software Engineering student with a strong passion for writing code and building meaningful projects. I enjoy turning ideas into working software and continuously improving my technical skills through hands-on development.",
        bio2: "Throughout my studies, I have developed several substantial projects that I am very proud of. These projects allowed me to gain practical experience in full stack development, hardware programming, and problem-solving beyond theoretical learning.",
        bio3: "Alongside my studies, I have a background in sales, which helped me develop strong communication skills, responsibility, and a results-oriented mindset. Today, I am actively pursuing a career transition into the software industry.",
        skills1: "My ",
        skills2: "Skills",

        // Contact
        contact1: "Contact ",
        contact2: "Me!",
        contactDesc: "Feel free to contact me! I'd love to hear from you.",
        linkedInProfile: "My LinkedIn Profile",

        // Projects
        projectsTitle: "My Projects",
        viewGithub: "View on GitHub",
        liveDemo: "Live Demo",

        proj1_title: "Portfolio Website",
        proj1_desc: "A personal portfolio website built with React and React Router.",

        proj2_title: "Pac Man Game",
        proj2_desc: "Interactive JavaScript-based game controlled by a wireless ESP32 remote.",

        proj3_title: "Simon Says",
        proj3_desc: "An embedded Simon Says memory game developed in C++ on Arduino, demonstrating hardware control, real-time input handling, and state-based game logic.",

        proj4_title: "To Do List",
        proj4_desc: "A full-stack To Do List application built using JavaScript and Node.js. The project implements RESTful APIs, CRUD operations, and database-backed persistence using phpMyAdmin.",

        proj5_title: "Memory Game",
        proj5_desc: "A simple memory game built using JavaScript and HTML.",

        proj6_title: "My Math App",
        proj6_desc: "Fun and responsive math game for kids – practice addition, subtraction, multiplication, and division.",

        proj7_title: "Escape Room IoT",
        proj7_desc: "A dual-ESP8266 IoT Escape Room system featuring synchronized sensory puzzles, real-time WiFi communication, and a central locking mechanism."
    },
    he: {
        // Nav
        logo: "פורטפוליו",
        navHome: "בית",
        navProjects: "פרויקטים",
        navAbout: "עלי",
        navContact: "יצירת קשר",
        toggleLanguage: "English",

        // Home
        hello: "שלום, אני ",
        name: "דוד גזית",
        homeSubtitle: "סטודנט להנדסת תוכנה (מה\"ט) | מפתח Full Stack",
        homeDesc1: "אני מפתח אפליקציות ווב, פרויקטים אינטראקטיביים ופתרונות משולבי חומרה (IoT).",
        homeDesc2: "מוזמנים לגלות את הפרויקטים והכישורים הטכניים שלי.",
        btnProjects: "הפרויקטים שלי",
        btnContact: "צור קשר",

        // About Me
        about1: "קצת ",
        about2: "עלי",
        aboutSubtitle: "סטודנט להנדסת תוכנה (מה\"ט)",
        bio1: "אני סטודנט שנה שנייה להנדסת תוכנה עם תשוקה עזה לכתיבת קוד ובניית פרויקטים משמעותיים. אני נהנה להפוך רעיונות לתוכנה עובדת ולשפר ללא הרף את הכישורים הטכניים שלי דרך פיתוח מעשי.",
        bio2: "במהלך הלימודים פיתחתי מספר פרויקטים משמעותיים שאני גאה בהם מאוד. פרויקטים אלו אפשרו לי לצבור ניסיון מעשי בפיתוח Full Stack, תכנות חומרה (IoT) ופתרון בעיות, הרבה מעבר ללמידה התיאורטית.",
        bio3: "לצד הלימודים, יש לי רקע במכירות שעזר לי לפתח כישורי תקשורת חזקים, אחריות וחשיבה מוכוונת תוצאות. כיום, אני פועל במרץ לקראת מעבר קריירה והשתלבות בתעשיית התוכנה.",
        skills1: "הכישורים ",
        skills2: "שלי",

        // Contact
        contact1: "צור ",
        contact2: "קשר!",
        contactDesc: "תרגישו חופשי ליצור איתי קשר! אשמח לשמוע מכם.",
        linkedInProfile: "פרופיל הלינקדאין שלי",

        // Projects
        projectsTitle: "הפרויקטים שלי",
        viewGithub: "צפייה ב-GitHub",
        liveDemo: "הדגמה חיה",

        proj1_title: "אתר פורטפוליו",
        proj1_desc: "אתר פורטפוליו אישי שנבנה באמצעות React ו-React Router.",

        proj2_title: "משחק פקמן",
        proj2_desc: "משחק אינטראקטיבי מבוסס JavaScript שנשלט על ידי שלט ESP32 אלחוטי.",

        proj3_title: "סיימון אמר",
        proj3_desc: "משחק זיכרון 'סיימון אמר' משולב חומרה, שפותח ב-C++ על גבי בקר ארדואינו. הפרויקט מדגים שליטה ברכיבי חומרה, ניהול קלטים בזמן אמת ולוגיקת משחק מבוססת-מצבים.",

        proj4_title: "רשימת מטלות (To-Do List)",
        proj4_desc: "אפליקציית Full-Stack לניהול מטלות שנבנתה עם JavaScript ו-Node.js. הפרויקט מיישם ממשקי RESTful API, פעולות CRUD ושמירת נתונים מול מסד נתונים באמצעות phpMyAdmin.",

        proj5_title: "משחק זיכרון",
        proj5_desc: "משחק זיכרון פשוט וקלאסי שנבנה באמצעות JavaScript ו-HTML.",

        proj6_title: "אפליקציית מתמטיקה",
        proj6_desc: "משחק מתמטיקה מהנה ורספונסיבי לילדים – לתרגול חיבור, חיסור, כפל וחילוק.",

        proj7_title: "חדר בריחה IoT",
        proj7_desc: "מערכת חדר בריחה IoT מבוססת שני בקרי ESP8266 הכוללת חידות חיישנים מסונכרנות, תקשורת WiFi בזמן אמת ומנגנון נעילה מרכזי."
    }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState(localStorage.getItem('siteLang') || 'en');

    const toggleLanguage = () => {
        setLang((prevLang) => (prevLang === 'en' ? 'he' : 'en'));
    };

    useEffect(() => {
        localStorage.setItem('siteLang', lang);
        document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr';
        document.documentElement.lang = lang;
    }, [lang]);

    const t = (key) => {
        return translations[lang][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => useContext(LanguageContext);