import group from '/assets/group.svg';
import award from '/assets/award.svg';
import math from '/assets/math.svg';
import code from '/assets/code.svg';
import codesymbol from '/assets/codesymbol.svg';
import admin from '/assets/admin.svg';
import brain from '/assets/brain.svg';
import medal from '/assets/medal.svg';
import teamwork from '/assets/teamwork.svg';
import stockmng from '/assets/stockmanagement.png';
import blogapp from '/assets/blogapp.png';
import authimg from '/assets/authimg.png';
import eng from '/assets/eng.png';

let language = {
    index: "0",
    name: "English",
    icon: eng,
}
let nav = [
    {
        id: "about",
        title: "ABOUT",
    },
    {
        id: "experience",
        title: "EXPERIENCE",
    },
    {
        id: "contact",
        title: "CONTACT",
    }
]
let hero = {
    intro: "Hi, I'm ",
    name: "Blagoja",
    subtext: "I compete in international competitions and aspire to be a software engineer."
}
let about = {
    introduction: "introduction",
    overview: "Overview",
    content: "I am a student and aspiring software engineer with a track record of success in both competitions and professional settings. I have participated in 13 international competitions and won several awards, demonstrating my skills and abilities. In addition to my technical expertise, I have also gained valuable teamwork, leadership, and communication skills through my participation in international projects. I have completed an internship in software engineering and am currently the admin of my school’s website. My knowledge of a wide range of technologies makes me a versatile and capable problem-solver, and I am always eager to take on new challenges and prepare for the future.",
    content1: "I am a student in SOU “Jane Sandanski” Strumica and for the past 4 years I’ve been on a journey trying my best to gain some experience and knowledge in the field I wish to pursue. 4 years ago my journey started by learning C++ and having a higher interest in subjects that support and go alongside the entire topic of computer science such as maths, programming and English. Since then I have been a part of numerous competitions, projects and an internship, which have all individually played their role in the progression of my overall skills and knowledge. Alongside the language I started my programming journey with I have learned many other programming languages and technologies such as: C#, ASP.NET, Python, Tensorflow, React.js, Next.js, Tailwind, CSS, HTML, JavaScript, TypeScript, THREE.js, tRPC, Prisma, SQL, MongoDB, Node.js, SASS, and a few more. I’ve always had a peaked interest in technology and its exponential improvement over the past few years which inspired me to one day contribute to the massively growing number of technologies available to us."
}
let work = {
    my_work: "my work",
    proj: "Projects.",
    content: "The following projects showcase a portion of my skills and experience through examples of my work. Each project is briefly described and has a link to it's respective repository. These reflect my abilities to solve problems, work with different technologies and manage the projects effectively.",
}   
let services = [
    {
        title: "Team player",
        icon: group, 
    },
    {
        title: "Full stack",
        icon: code, 
    },
    {
        title: "Persistent",
        icon: math, 
    },
    {
        title: "Awarded competitor",
        icon: award, 
    },
]
let experience = [
    {
        title: "Competitions",
        icon: medal,
        points: [
            "Math competitions",
            "English competitions",
            "Programming competitions",
            "13 participations in international math competitions with achieved awards",
        ]
    },
    {
        title: "International Projects",
        icon: teamwork,
        points: [
            "Erasmus+ projects",
            "Teamwork skills",
            "Leadership skills",
            "Communication skills",
        ]
    },
    {
        title: "Internship",
        icon: codesymbol,
        points: [
            "Work on a real application in a team with others",
            "Guidance from professionals in the field of web development",
            "Experience with modern technologies",
            "Evolving problem solving skills in the realm of web development",
        ]
    },
    {
        title: "School Website Admin",
        icon: admin,
        points: [
            "Administrator of the school website",
        ]
    },
    {
        title: "Personal Projects & Interests",
        icon: brain,
        points: [
            "C# API development",
            "Machine learning with python and tensorflow",
            "Blog app using modern technologies",
            "Desktop app development with electron.js",
        ]
    },
]
let projects = [
    {
        name: "Stock Management",
        description: "A C# application using the ASP.NET web framework to make an API that allows a users to list products and others to place orders using a persistent cart system.",
        tags: [
            {
                name: "csharp",
            },
            {
                name: "asp.net",
            },
            {
                name: "mysql",
            },
        ],
        image: stockmng,
        frontend: "https://github.com/Blagoja0123/Stock-Frontend-React",
        backend: "https://github.com/Blagoja0123/StockManagement",
    },
    {
        name: "Blog App",
        description: "A full stack application using some modern technologies. This app allows for people to register accounts and use them to post blogs and comment on other blogs.",
        tags: [
            {
                name: "nextjs",
            },
            {
                name: "mysql",
            },
            {
                name: "prisma",
            },
            {
                name: "trpc",
            },
            {
                name: "tailwind",
            },
        ],
        image: blogapp,
        frontend: "https://github.com/Blagoja0123/testNext",
        backend: "https://github.com/Blagoja0123/testNext",
    },
    {
        name: "Auth App",
        description: "This application is made to explore the way in which databases store images without using 3rd party solutions such as: Firebase, AWS, Google Cloud, etc.",
        tags: [
            {
                name: "csharp",
            },
            {
                name: "asp.net",
            },
            {
                name: "mysql",
            },
            {
                name: "react",
            },
        ],
        image: authimg,
        frontend: "https://github.com/Blagoja0123/AuthBPFront",
        backend: "https://github.com/Blagoja0123/AuthBPBackend",
    },
]
let content = {
    exp: "Experience.",
    wid: "What I have done so far",
    tech: "Technologies",
    others: "What others say",
    test: "Recommendations."
}
let contact = {
    git: "get in touch",
    title: "Contact.",
    name: "Your Name",
    wname: "What's your name?",
    email: "Your email",
    wemail: "What's your email?",
    msg: "Your message",
    wmsg: "What do you want to say?",
    btn: "Send",
    ibtn: "Sending..."   
}
let temp = "I have been Blagoja’s English teacher since September 2019. So far he has shown superior performance in my class, based on his grades, attendance and class participation. He is an active participant in class discussions, and he has shown his vast knowledge of various different topics.  His verbal and written language skills are on a truly high level, which is a pleasure for every teacher to encounter. I proudly confirm his participation in the local, regional and state competition of English language organized by ELTAM, as well as the international Best in English competition. Since group assignments are part of the class activities, it would be rightful to say that Blagoja has proved himself as an extraordinary team player because he flawlessly completes the tasks given to him and he has no difficulty in meeting deadlines. When given the role of a leader, he has proved to possess fantastic organizational skills, taking initiatives and providing the best results for the problem. Blagoja is a reliable, trustworthy, good – humored and open – minded student who is always willing to support the others in and out of the classroom."
let testimonials = [
    {
        testimonial: temp,
        role: 'Teacher at SOU "Jane Sandanski"',
        name: "Zorica Vitanova",
        contact: " +389 75 320 833 or zorica_peceva@yahoo.co.uk"
    },
]

let philosophy = {
    phil: "Philosophy",
    content: " I believe there is no task that is too difficult, simply a task that I do not yet fully understand. With this I aim to fully understand everything I do and learn to allow me to excel in my future."
}

let awards = {
    aw: "Awards.",
    content: "A collection of awards from competitions and certificates from projects I've participated in"
}

export const engLang = [
    language,
    nav,
    hero,
    about,
    work,
    services,
    experience,
    projects,
    content,
    contact,
    testimonials,
    philosophy,
    awards
]