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
    name: "English",
    icon: eng,
}
let nav =[
    "ABOUT",
    "EXPERIENCE",
    "CONTACT",
]
let hero = {
    intro: "Hi, I'm ",
    name: "Blagoja",
    subtext: "I compete in international competitions and aspire to be a software engineer."
}
let about = {
    introduction: "introduction",
    overview: "Overview",
    content: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
}
let work = {
    my_work: "my work",
    proj: "Projects.",
    content: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
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
export const engLang = [
    language,
    nav,
    hero,
    about,
    work,
    services,
    experience,
    projects,
    content
]