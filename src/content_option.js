const logotext = "KyoSook";
const meta = {
    title: "KyoSook Shin",
    description: "I’m KyoSook Shin Embedded Software Enginner, Full-Stack Developer, Front-End Developer, Back-End Developer, currently available in Austin",
};

const introdata = {
    title: "I’m KyoSook Shin",
    animated: {
        first: "I love software",        
        second: "Embedded Software Engineer",
        third: "Full-Stack Developer",
    },
    description: "software engineer with 10+ years of experience",
    your_img_url: "https://rms.koenig-solutions.com/Sync_data/CCE_Logo/2341-SoftwareDeveloperJobDescription.jpegL.jpg",
};

const dataabout = {
    title: "abit about my self",
    aboutme: "Hi, my name is KyoSook Shin.  I came to the US in 2017 from South Korea. I've been away from professional arena to raise my child, but my mind has been always there.  After long preparation, now I'm ready to jump and work for you.",
    work: "Embedded Software Engineer | Full-stack Developer | Back-End Develper | Front-End Developer",
};
const worktimeline = [{
        jobtitle: "Dicom PACS Software Development",
        where: "Dimedi Korea",
        date: "June 2013 - Aug 2014",
        logo: "/images/dimedi.png",
        url: "https://www.dimedi.co.kr/"
    },
    {
        jobtitle: "Software System Engineering",
        where: "Samsung Electronics",
        date: "Jan 2009 - Sep 2012",
        logo: "/images/samsung.jpg",
        url: "https://www.samsung.com/us/about-us/our-business/it-and-mobile-communications/"
    },
    {
        jobtitle: "WCDMA/HSDPA Modem Software/Firmware Development",
        where: "Samsung Electronics",
        date: "Sep 2002 - Dec 2008",
        logo: "/images/samsung.jpg",
        url: "https://www.samsung.com/us/about-us/our-business/it-and-mobile-communications/"
    },
];

const education = [{
    course: "Certificate of Web Programming",
    where: "UT Austin Boot Camp",
    date: "July 2023 - Jan 2024",
    logo: "/images/bootcamp.png",
    url: "https://techbootcamps.utexas.edu/coding/"
},
{
    course: "Associate Degree at Art of Science",
    where: "Austin Community College",
    date: "Jan 2020 - Dec 2023",
    logo: "/images/acc.jpg",
    url: "https://www.austincc.edu/"
},
{
    course: "Bachelor's Degree at Electronic Engineering",
    where: "Yonsei University",
    date: "",
    logo: "/images/yonsei.jpg",
    url: "https://www.yonsei.ac.kr/en_sc/index.jsp"
},
];




const programming_languages = [{
        name: "Python",
        value: 90,
    },
    {
        name: "Djano",
        value: 85,
    },
    {
        name: "Javascript",
        value: 80,
    },
    {
        name: "React",
        value: 60,
    },
    {
        name: "Jquery",
        value: 85,
    },
];

const web_skills = [
    {
        title: "Front-End Web Development",
        description: "HTML, CSS, Javascript, RESTful-APIs, JQuery, React, Redux",
    },
    {
        title: "Back-End Web Development",
        description: "Node.js, OOP Programming, Test-Driven Development (Jest), Express.js, MVC pattern, MERN stack",
    },
    {
        title: "Database",
        description: "SQL, ORM (Sequalize, Mongoose), GraphQL",
    },
    {
        title: "Version Control & Resource Management",
        description: "Git, Gist, Slack",
    },
    {
        title: "Configuration",
        description: "Webpack, Vite",
    },
    {
        title: "Deployment",
        description: "Heroku, Render, Netlify",
    },
];


const embedded_skills = [
    {
        title: "SDLC (Software Development Life Cycle)",
        description: "Requirement Analysis, Testcase Automation, Unit Test, Integration Test, High-level Design, Detailed-level Design, Implementation, Delivery, Deployment, On-Site Maintenance",
    },
    {
        title: "Low Level Languages",
        description: "C/C++, ARM/PowerPC Assembler",
    },
    {
        title: "Application Level Languages",
        description: "C++/C#, Python",
    },
    {
        title: "CPU/MCU Control",
        description: "ARM, PowerPC, Raspberry Pi, Beagle bone, Atmel",
    },
    {
        title: "BSP (Board Support Package) & Bare Metal bringup",
        description: "Kernel initialization, OS Porting/integration, IRQ, Device Driver",
    },
    {
        title: "Peripheral Device Control",
        description: "TCP/IP, ATM, Frame Relay, Circut voice/data, WCDMA/HSDPA control/data plane control",
    },
    {
        title: "Embedded OS",
        description: "Linux/Ubuntu, Necleus, VxWorks, Tiny OS, No OS",
    },

];

const dataportfolio = [
    {    
        img: "/images/projects/quoteme.png",
        description: "Quote Generation depending on emotional state, social media to share quotes, personal emotion trace",
        link: "https://quoteme-1b7p.onrender.com/",
        repo: "https://github.com/charleshuurman/QuoteMe"
    },
    {
        img: "/images/projects/book_search.png",
        description: "MERN Stack to search for new books, RESTful API/GraphQL Google Book API",
        link: "https://book-search-engine-etjd.onrender.com/",
        repo: "https://github.com/alla0810/book-search-engine"                
    },
    {
        img: "/images/projects/jate.png",
        description: "installable/cacheable PWA based on Webpack",
        link: "https://j-a-t-e-8d4l.onrender.com/",
        repo: "https://github.com/alla0810/pwa-text-editor"        
    },
    {
        img: "/images/projects/project2.png",
        description: "Project Management Tool, Developed statistics page using Chart.js library",
        link: "https://mysterious-sands-89389-6bcd1486e90b.herokuapp.com/stats",
        repo: "https://github.com/whatnameshouldiuse/UTFSB-Project2-Group8"        
    },
    {
        img: "/images/projects/tech_blog.png",
        description: "Developed front-end/back-end application using MVC architecture and Sequalize",
        link: "https://cool-tech-blog-c417147650ea.herokuapp.com/",
        repo: "https://github.com/alla0810/tech-blog"                
    },
    {
        img: "/images/projects/amazon.png",
        description: "Simple Price/Review Viewer, Developed third-party Amazon API fetch application",
        link: "https://alla0810.github.io/AmazonNavigator/",
        repo: "https://github.com/alla0810/AmazonNavigator"                
    },
    {
        img: "/images/projects/note-taker.gif",
        description: "Daily Note Management Program using Express.js Back-End Program",
        link: "https://note-taker-for-you-081d407650f3.herokuapp.com/",
        repo: "https://github.com/alla0810/note_taker"                
    },

    {
        img: "/images/projects/weather_dashboard.png",
        description: "Five Days weather forecast for multiple cities, Server-Side API, Persistent localStorage",
        link: "https://alla0810.github.io/weatherDashboard/",
        repo: "https://github.com/alla0810/weatherDashboard"                
    },
    {
        img: "/images/projects/work-scheduler.gif",
        description: "Daily Planner based on Dynamically Updated HTML and CSS using jQuery and Day.js library",
        link: "https://alla0810.github.io/workScheduler/",
        repo: "https://github.com/alla0810/workScheduler"                
    },
    {
        img: "/images/projects/code_quiz.gif",
        description: "Timed JavaScript Quiz that stores high scores, Dynamically Updated HTML and CSS using javaScript",
        link: "https://alla0810.github.io/javascriptQuiz/",
        repo: "https://github.com/alla0810/javascriptQuiz"                
    },
    {
        img: "/images/projects/e-commerce.gif",
        description: "Product Management Program using Sequalize ORM based on MySQL database",
        link: "https://github.com/alla0810/e-commerce",
        repo: "https://github.com/alla0810/e-commerce"                
    },
];

const contactConfig = {
    YOUR_EMAIL: "kyosook.shin@gmail.com",
//    YOUR_FONE: "(515)844-4068",
    description: "Please register to https://www.emailjs.com to securely email me.",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_msla5c9",
    YOUR_TEMPLATE_ID: "template_fc0hc5a",
    YOUR_USER_ID: "JEmp-25WPNMthnPuy",
};

const socialprofils = {
    email: "mailto:kyosook.shin@gmail.com",    
    github: "https://github.com/alla0810",
    linkedin: "https://www.linkedin.com/in/kyosook-shin/",
    gist: "https://gist.github.com/alla0810",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    education,
    web_skills,
    embedded_skills,
    programming_languages,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};