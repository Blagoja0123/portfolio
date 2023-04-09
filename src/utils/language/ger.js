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
    index: "2",
    name: "German",
    icon: eng,
}
let nav = [
    {
        id: "about",
        title: "ÜBER MICH",
    },
    {
        id: "experience",
        title: "ERFAHRUNG",
    },
    {
        id: "contact",
        title: "KONTAKT",
    }
]
let hero = {
    intro: "Hallo ich bin ",
    name: "Blagoja",
    subtext: "Ich nehme an internationalen Wettbewerben teil und strebe danach, Softwareingenieur zu werden."
}
let about = {
    introduction: "Einführung",
    overview: "Überblick",
    content: "Ich bin ein Student und aufstrebender Softwareentwickler mit einer Erfolgsbilanz sowohl bei Wettbewerben als auch im beruflichen Umfeld. Ich habe an 13 internationalen Wettbewerben teilgenommen und mehrere Preise gewonnen, wodurch ich meine Fähigkeiten und Fertigkeiten unter Beweis gestellt habe. Neben meiner fachlichen Expertise habe ich mir durch meine Mitarbeit in internationalen Projekten wertvolle Team-, Führungs- und Kommunikationsfähigkeiten angeeignet. Ich habe ein Praktikum im Bereich Software Engineering absolviert und bin derzeit der Admin der Website meiner Schule. Mein Wissen über verschiedenste Technologien macht mich zu einem vielseitigen und kompetenten Problemlöser, der sich immer gerne neuen Herausforderungen stellt und sich auf die Zukunft vorbereitet.",
}
let work = {
    my_work: "meine Arbeit",
    proj: "Projekte.",
    content: "Die folgenden Projekte zeigen einen Teil meiner Fähigkeiten und Erfahrungen anhand von Beispielen meiner Arbeit. Jedes Projekt wird kurz beschrieben und hat einen Link zu seinem jeweiligen Repository. Diese spiegeln meine Fähigkeiten wider, Probleme zu lösen, mit verschiedenen Technologien zu arbeiten und die Projekte effektiv zu verwalten."
}
let services = [
    {
        title: "Teamspieler",
        icon: group, 
    },
    {
        title: "Full-stack",
        icon: code, 
    },
    {
        title: "Hartnäckig",
        icon: math, 
    },
    {
        title: "Preisgekrönter Konkurrent",
        icon: award, 
    },
]
let experience = [
    {
        title: "Wettbewerbe",
        icon: medal,
        points: [
            "Mathe Wettbewerbe",
            "Englische Wettbewerbe",
            "Programmierwettbewerbe",
            "13 Teilnahmen an internationalen Mathematikwettbewerben mit erreichten Auszeichnungen",
        ]
    },
    {
        title: "Internationale Projekte",
        icon: teamwork,
        points: [
            "Erasmus+ Projekte",
            "Teamfähigkeit",
            "Führungsfähigkeit",
            "Kommunikationsfähigkeit",
        ]
    },
    {
        title: "Praktikum",
        icon: codesymbol,
        points: [
            "Arbeiten im Team mit anderen an einer realen Anwendung",
            "Anleitung von Profis im Bereich Webentwicklung",
            "Erfahrung mit modernen Technologien",
            "Entwicklung von Problemlösungsfähigkeiten im Bereich der Webentwicklung",
        ]
    },
    {
        title: "Administrator der Schulwebsite",
        icon: admin,
        points: [
            "Administrator der Schulwebsite",
        ]
    },
    {
        title: "Persönliche Projekte & Interessen",
        icon: brain,
        points: [
            "C# API Entwicklung",
            "Maschinelles Lernen mit Python und Tensorflow",
            "Blog-App mit modernen Technologien",
            "Desktop App Entwicklung mit electron.js",
        ]
    },
]
let projects = [
    {
        name: "Lagerverwaltung",
        description: "Eine C# Anwendung, die das ASP.NET Webframework verwendet, um eine API zu erstellen, die es Benutzern ermöglicht, Produkte aufzulisten, und anderen, Bestellungen über ein persistentes Warenkorbsystem aufzugeben.",
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
        description: "Eine Full-Stack Anwendung, die einige moderne Technologien verwendet. Diese App ermöglicht es Benutzern, Konten zu registrieren und sie zu verwenden, um Blogs zu veröffentlichen und andere Blogs zu kommentieren.",
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
        description: "Diese Anwendung wurde entwickelt, um zu untersuchen, wie Datenbanken Bilder speichern, ohne Lösungen von Drittanbietern wie Firebase, AWS, Google Cloud usw. zu verwenden.",
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

    wid: "Was ich bisher gemacht habe",
    tech: "Technologien"
}
let contact = {
    git: "in Kontakt kommen",
    title: "Kontakt.",
    name: "Ihren Namen",
    wname: "Wie heißen Sie?",
    email: "Deine E-Mail",
    wemail: "Wie ist deine E-Mailadresse?",
    msg: "Ihre Nachricht",
    wmsg: "Was willst du sagen?",
    btn: "Senden",
    ibtn: "Senden..."   
}
export const gerLang = [
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