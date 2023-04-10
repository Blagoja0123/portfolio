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
    content1: "Ich bin ein Student an der SOU „Jane Sandanski“ Strumica und war in den letzten 4 Jahren auf einer Reise, auf der ich mein Bestes gab, um einige Erfahrungen und Kenntnisse in dem Bereich zu sammeln, den ich verfolgen möchte. Vor 4 Jahren begann meine Reise mit dem Erlernen von C++ und einem höheren Interesse an Fächern, die das gesamte Thema der Informatik unterstützen und begleiten, wie Mathematik, Programmierung und Englisch. Seitdem habe ich an zahlreichen Wettbewerben, Projekten und einem Praktikum teilgenommen, die alle individuell ihre Rolle bei der Weiterentwicklung meiner gesamten Fähigkeiten und Kenntnisse gespielt haben. Neben der Sprache, mit der ich meine Programmierreise begonnen habe, habe ich viele andere Programmiersprachen und Technologien gelernt, wie zum Beispiel: C#, ASP.NET, Python, Tensorflow, React.js, Next.js, Tailwind, CSS, HTML, JavaScript, TypeScript, THREE .js, tRPC, Prisma, SQL, MongoDB, Node.js, SASS und einige mehr. Ich hatte schon immer ein großes Interesse an Technologie und ihrer exponentiellen Verbesserung in den letzten Jahren, was mich dazu inspirierte, eines Tages zu der massiv wachsenden Anzahl von Technologien beizutragen, die uns zur Verfügung stehen.",
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
    tech: "Technologien",
    exp: "Erfahrung.",
    contact: "Kontakt",
    others: "Was andere sagen",
    test: "Empfehlungen."
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

let temp = "Ich bin Blagojas Englischlehrer seit September 2019. Bisher hat er in meiner Klasse hervorragende Leistungen gezeigt, basierend auf seinen Noten, seiner Anwesenheit und seiner Teilnahme am Unterricht. Er beteiligt sich aktiv an Unterrichtsdiskussionen und hat sein umfangreiches Wissen zu verschiedenen Themen unter Beweis gestellt. Seine mündlichen und schriftlichen Sprachkenntnisse sind auf einem wirklich hohen Niveau, was für jeden Lehrer eine Freude ist. Mit Stolz bestätige ich seine Teilnahme am lokalen, regionalen und staatlichen Wettbewerb der englischen Sprache, der von ELTAM organisiert wird, sowie am internationalen Wettbewerb „Best in English“. Da Gruppenaufgaben Teil der Unterrichtsaktivitäten sind, kann man sagen, dass Blagoja sich als außergewöhnlicher Teamplayer erwiesen hat, weil er die ihm übertragenen Aufgaben fehlerlos erledigt und keine Schwierigkeiten hat, Fristen einzuhalten. Wenn ihm die Rolle eines Leiters übertragen wird, hat er bewiesen, dass er über fantastische organisatorische Fähigkeiten verfügt, Initiativen ergreift und die besten Ergebnisse für das Problem liefert. Blagoja ist eine zuverlässige, vertrauenswürdige, gut gelaunte und aufgeschlossene Schülerin, die immer bereit ist, die anderen innerhalb und außerhalb des Klassenzimmers zu unterstützen."
let testimonials = [
    {
        testimonial: temp,
        role: 'Lehrerin bei SOU "Jane Sandanski"',
        name: "Zorica Vitanova",
        contact: " +389 75 320 833 oder zorica_peceva@yahoo.co.uk"
    },
    {
        testimonial: "Ich hatte das Vergnügen, Blagoja während seiner Zeit in meiner Analysis-Klasse zu unterrichten, und ich kann mit Zuversicht sagen, dass er einer der talentiertesten und fleißigsten Schüler ist, die ich je zu unterrichten hatte. Während des gesamten Semesters zeigte Blagoja eine herausragende Fähigkeit, komplexe mathematische Konzepte zu erfassen und sie zur Lösung anspruchsvoller Probleme anzuwenden. Er erzielte bei Prüfungen durchweg gute Noten und zeigte ein außergewöhnliches Maß an Engagement für sein Studium. Was Blagoja von seinen Kollegen unterscheidet, sind nicht nur seine starken mathematischen Fähigkeiten, sondern auch seine Fähigkeit, kritisch und unabhängig zu denken.",
        role: 'Lehrerin bei SOU "Jane Sandanski"',
        name: "Bozhana Lazarova",
        contact: "lazarovabozana@yahoo.com"
    },
    {
        testimonial: "Während des Unterrichts ist der Schüler immer positiv, freundlich und bereit, ein gutes Arbeitsumfeld zu schaffen. Seine intellektuellen Fähigkeiten übertreffen die der meisten seiner Altersgenossen, was ihn sowohl zur unabhängigen Ausführung von Arbeitsaufgaben als auch zur Teamarbeit befähigt. Er ist fleißig, energisch und voller Initiative. Herausforderungen spornen ihn an, was sich an seinen Erfolgen bei vielen Wettbewerben sowie der Teilnahme an Projekten unterschiedlichster Art ablesen lässt. Für Blagoja gibt es kein unlösbares Problem, im Gegenteil, für ihn ist alles eine Herausforderung. Mit Fleiß, Zielstrebigkeit, Kreativität und Ehrgeiz schafft er es, das Unlösbare lösbar zu machen. Er nutzt seinen Führungsgeist und seine Kommunikationsfähigkeit, um sein gesamtes Umfeld zu aktivieren. Deshalb betreibt er erfolgreich die Website der Schule, die sich als erfolgreicher Informatiker, erfolgreicher Journalist und ausgezeichneter Kenner seiner Mutter- und Fremdsprachen zeigt.",
        role: 'Lehrerin bei SOU "Jane Sandanski"',
        name: "Elena Lazareva",
        contact: "elenalazareva35@yahoo.com"
    },
]

let philosophy = {
    phil: "Philosophie",
    content: " Ich glaube, es gibt keine Aufgabe, die zu schwierig ist, einfach eine Aufgabe, die ich noch nicht vollständig verstehe. Damit möchte ich alles, was ich tue, vollständig verstehen und lernen, damit ich mich in meiner Zukunft auszeichnen kann."
}

let awards = {
    aw: "Auszeichnungen.",
    content: "Eine Sammlung von Auszeichnungen von Wettbewerben und Zertifikaten von Projekten, an denen ich teilgenommen habe"
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
    testimonials,
    philosophy,
    awards
]