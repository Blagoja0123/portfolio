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
}
let work = {
    my_work: "my work",
    proj: "Projects.",
    content: "The following projects showcase a portion of my skills and experience through examples of my work. Each project is briefly described and has a link to it's respective repository. These reflect my abilities to solve problems, work with different technologies and manage the projects effectively."
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
                name: "c#",
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
                name: "c#",
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

    wid: "What I have done so far",
    tech: "Technologies"
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
]