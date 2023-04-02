import csharp from '/assets/csharp.png';
import cpp from '/assets/cpp.png';
import git from '/assets/git.png';
import htmlpic from '/assets/html.png';
import js from '/assets/js.png';
import mongo from '/assets/mongo.png';
import next from '/assets/next.png';
import nodejs from '/assets/nodejs.png';
import prisma from '/assets/prisma.png';
import python from '/assets/Python.png';
import sass from '/assets/sass.png';
import sql from '/assets/sql.png';
import tailwind from '/assets/tailwind.png';
import tf from '/assets/tf.png';
import trpc from '/assets/trpc.svg';
import ts from '/assets/ts.png';
import react from '/assets/react.png';
import css from '/assets/css.png';
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



const technologies = [
    {
        name: "csharp",
        icon: csharp,
    },
    {
        name: "cpp",
        icon: cpp,
    },
    {
        name: "js",
        icon: js,
    },
    {
        name: "html",
        icon: htmlpic,
    },
    {
        name: "css",
        icon: css,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "mongo",
        icon: mongo,
    },
    {
        name: "next",
        icon: next,
    },
    {
        name: "nodejs",
        icon: nodejs,
    },
    {
        name: "prisma",
        icon: prisma,
    },
    {
        name: "python",
        icon: python,
    },
    {
        name: "sass",
        icon: sass,
    },
    {
        name: "tailwind",
        icon: tailwind,
    },
    {
        name: "tf",
        icon: tf,
    },
    {
        name: "trpc",
        icon: trpc,
    },
    {
        name: "ts",
        icon: ts,
    },
    {
        name: "sql",
        icon: sql,
    },
    {
        name: "react",
        icon: react,
    },
];

export const services = [
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

export const experience = [
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

export const projects = [
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

export default technologies;