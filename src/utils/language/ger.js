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
            "CV",
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

    wid: "Was ich bisher gemacht habe",
    tech: "Technologien",
    exp: "Erfahrung",
    contact: "Kontakt",
    others: "Was andere sagen",
    test: "Empfehlungen",
    techcontent: "Dies ist eine unvollständige Liste von Technologien, mit denen ich vertraut bin. Um mehr darüber zu sehen, womit ich gearbeitet habe, besuchen Sie mein Github-Profil im Kontaktbereich",
    techsub: "Technologie, mit der ich vertraut bin",
}
let contact = {
    git: "in Kontakt kommen",
    title: "Kontakt",
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
    // {
    //     testimonial: "Als Professor und Mentor von Blagoja habe ich mich besonders gefreut, diese Empfehlung zu schreiben, da wir eine besondere Zusammenarbeit mit ihm haben, was für mich eine neue und wunderbare Erfahrung ist. Ich empfinde ihn als sympathischen, großzügigen, vor allem loyalen und ehrgeizigen jungen Mann, der auch in Zukunft alle unternehmerischen Herausforderungen erfolgreich meistern wird. Blagoja ist ein fähiger, unabhängiger Teenager mit hervorragenden Kommunikationsfähigkeiten, eine angenehme und anpassungsfähige Person, die alltägliche Aufgaben mit unglaublicher Leichtigkeit bewältigt und auf die man sich immer verlassen kann, ein echter Teamplayer (wie seine Debatten, Workshops, Teilnahmen und Auszeichnungen beweisen, die von die verschiedenen nationalen und internationalen Wettbewerbe). Er ist ein wahres Beispiel für einen Studenten, der immer bereit ist, anderen zu helfen. Während seiner vierjährigen Tätigkeit als Administrator der Schulwebsite hat Blagoja einen außergewöhnlichen Beitrag zur Steigerung der Effizienz und Qualität unserer täglichen Arbeit geleistet. Bei der Erfüllung dieser Arbeitspflichten geht er verantwortungsbewusst vor und ist immer regelmäßig. Die Einstellung gegenüber Studenten, bemerkenswertes Selbstbewusstsein, Akribie bei der Erfüllung der Aufgaben geben mir das Recht zu betonen, dass ihm die Möglichkeit gegeben werden sollte, seine Fähigkeiten, Fertigkeiten und Kenntnisse persönlich unter Beweis zu stellen.",
    //     role: 'Lehrerin bei SOU "Jane Sandanski"',
    //     name: "Gordana Vasileva Vukashinovic'",
    //     contact: "gordana_vasileva@yahoo.com"
    // },
    // {
    //     testimonial: "Es ist mir eine große Freude, dieses Empfehlungsschreiben für Blagoja Dzorlev zu verfassen. In den letzten vier Jahren habe ich Blagoja in einer Reihe von Informatikkursen unterrichtet, in denen er sich hervorgetan hat. Aufgrund meiner Erfahrung mit Blagoja kann ich ohne zu zögern sagen, dass er einer der fleißigsten und naturbegabtesten Studenten im Bereich Programmiersprachen ist. Er ist hervorragend vorbereitet, um auf die Hochschulebene zu wechseln, und für mich ist klar, dass er im Bereich Informatik und Mathematik eine sehr gute Zukunft hat. Blagoja ist für sein Alter sehr reif und geht sehr ernsthaft an seine Aufgaben heran. Er hat ein sehr hohes Maß an Verständnis für kognitive und abstrakte Konzepte und beabsichtigt, sie in neuen Situationen und Projekten anzuwenden. Während der ersten Klasse zeigte er große Kreativität bei der Lösung von Problemen und dem Erfinden einzigartiger Algorithmen in Programmiersprachen, was zu wenigen Preisen bei nationalen und internationalen Wettbewerben führte (als Einzelperson und auch als Teammitglied). Blagoja ist von Natur aus neugierig und sucht nach einer neuen Herausforderung, um sein Talent und seine Fähigkeiten zu verbessern. Neben seinen Programmierkenntnissen zeigte er Interesse an Webdesign, Gamedesign. Vier Jahre lang war Blagoja Redakteur der offiziellen Schulwebsite und nutzte seine Freizeit für die Popularisierung der Schule. Er nahm auch an einigen Erasmus-Projekten teil, war Teil einer Mobilität in Portugal und nahm aktiv an allen Aktivitäten im Ausland teil, sowie während der Mobilität in Strumica als Gastgeber eines Studenten und Organisator des Projekts. Alles in allem ist Blagoja eine unglaublich gut vorbereitete und fähige Schülerin. Abgesehen von Blagojas kognitiven Fähigkeiten ist es wichtig, seine Arbeitsmoral und seine Präsenz im Klassenzimmer zu erwähnen. Blagoja gibt sich nie mit dem Zweitbesten zufrieden und nutzt die Unterrichtszeit produktiv und entschlossen. Aufgrund dieser Herangehensweise wurde Blagoja schnell zu einem Vorbild für seine Mitschüler in allen meinen Klassen. Die Schüler beobachteten Blagojas Engagement für den kreativen Prozess und strebten danach, sich so zu übertreffen wie er. Am wichtigsten ist, dass Blagoja immer bereit ist, seinen Klassenkameraden beim Lösen von Aufgaben zu helfen. Er bietet seinen Kollegen sowohl technische als auch konzeptionelle Unterstützung auf eine freundliche und fürsorgliche Weise, die von Blagojas Geduld und seinem Verständnis für die Bedeutung des kollaborativen Lernens spricht. Als Gymnasiast aus einer kleinen Stadt in Mazedonien hat Blagoja viel mehr erreicht als erwartet. Mit Blick auf Blagojas College-Jahre bin ich sicher, dass er bereit ist, den strengen und herausfordernden Lehrplan Ihres College-Levels anzugehen. Blagoja wird nicht den Weg des geringsten Widerstands gehen, sondern sich selbst dazu zwingen, weiter zu wachsen und sich als innovativer Denker weiterzuentwickeln. Er wird in seine neue Gemeinschaft eintauchen und seine Energie, seinen Enthusiasmus, sein Engagement und sein Talent mit seinen Kollegen und seinen Professoren teilen. Da Blagoja ein außergewöhnlicher Kandidat ist, empfehle ich ihn Ihnen mit größter Zuversicht, da ich seinen großen Wunsch kenne, Teil Ihrer hoch bewerteten Universität zu werden. Bitte zögern Sie nicht, mich zu kontaktieren, wenn Sie weitere Fragen haben.",
    //     role: 'Lehrerin bei SOU "Jane Sandanski"',
    //     name: "Sofija Tosheva",
    //     contact: "sofijatosheva@yahoo.com"
    // },
]

let philosophy = {
    subtext: "meine Philosophie",
    phil: "Philosophie",
    content: "Ich glaube, es gibt keine Aufgabe, die zu schwierig ist, einfach eine Aufgabe, die ich noch nicht vollständig verstehe. Damit möchte ich alles, was ich tue, vollständig verstehen und lernen, damit ich mich in meiner Zukunft auszeichnen kann."
}

let awards = {
    subtext: "meine Auszeichnungen und Zertifikate",
    aw: "Auszeichnungen",
    content: "Eine Sammlung von Auszeichnungen von Wettbewerben und Zertifikaten von Projekten, an denen ich teilgenommen habe"
}

let future = {
    subtext: "meine Zukunft",
    headtext: "Zukunft",
    content: "Innerhalb der nächsten 5 Jahre plane ich, die Universität zu beginnen und zu beenden, einen Bachelor-Abschluss im Bereich Informatik zu machen und bereit, die Software zu entwickeln, die unser tägliches Leben steuert.",
}

let outside = {
    subtext: "außerschulische Aktivitäten",
    headtext: "Außerhalb der Schule",
    categories: [
        {
            title: "Filme und Serien, die mir gefallen",
            contents: [
                "Django Unchained",
                "Breaking Bad",
                "Inglorious Basterds"
            ]
        },
        {
            title: "Hobbys",
            contents: [
                "Ins Fitnessstudio gehen",
                "Programmieren",
                "Mit Freunden ausgehen"
            ]
        },
        {
            title: "Musik, die mir Spaß macht",
            contents: [
                "Logic - Under Pressure",
                "Eminem - Till I collapse",
                "Connor Price - Drop"
            ]
        }
    ]
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