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
import mkd from '/assets/mkd.png';

let language = {
    index: "1",
    name: "Macedonian",
    icon: mkd,
}
let nav = [
    {
        id: "about",
        title: "ЗА МЕНЕ",
    },
    {
        id: "experience",
        title: "ИСКУСТВО",
    },
    {
        id: "contact",
        title: "КОНТАКТ",
    }
]
let hero = {
    intro: "Здраво, јас сум ",
    name: "Благоја",
    subtext: "Учествувам во меѓународни натпревари и се стремам да бидам софтверски инженер"
}
let about = {
    introduction: "вовед",
    overview: "Преглед",
    content: "Јас сум студент и аспирантен софтверски инженер со успешни резултати и на натпревари и на професионални поставувања. Учествував на 13 меѓународни натпревари и освоив повеќе награди, покажувајќи ги моите вештини и способности. Покрај мојата техничка способност, стекнав и вредни вештини како тимска работа, лидерство и комуникациски вештини преку моето учество во меѓународни проекти. Имам завршена пракса во веб-дизајн и моментално сум администратор на веб-страницата на моето училиште. Моето познавање на широк опсег на технологии ме прави разноврсен и способен решавач на проблеми и секогаш сум желен да преземам нови предизвици и да се подготвувам за иднината.",
}
let work = {
    my_work: "моите проекти",
    proj: "Проекти.",
    content: "Следниве проекти прикажуваат дел од моите вештини и искуство преку примери од мојата работа. Секој проект е накратко опишан и има врска до соодветното складиште. Тие ги одразуваат моите способности да решавам проблеми, да работам со различни технологии и ефикасно да управувам со проектите."
}
let services = [
    {
        title: "Тимски Играч",
        icon: group, 
    },
    {
        title: "Фул стек",
        icon: code, 
    },
    {
        title: "Упорен",
        icon: math, 
    },
    {
        title: "Награден Натпреварувач",
        icon: award, 
    },
]
let experience = [
    {
        title: "Натпревари",
        icon: medal,
        points: [
            "Натпревари по математика",
            "Натпревари по англиски јазик",
            "Натпревари за програмирање",
            "13 учества во меѓународни натпревари со освоени награди",
        ]
    },
    {
        title: "Интернацонални проекти",
        icon: teamwork,
        points: [
            "Erasmus+ проекти",
            "Вештини за работа во група",
            "Вештини за водење група",
            "Вештини за комуникација",
        ]
    },
    {
        title: "Пракса",
        icon: codesymbol,
        points: [
            "Работа на реална апликација во група",
            "Насочување од професионалци од областа на веб-дизајн",
            "Искуство со модерна технологија",
            "Унапредување вештини за решавање проблеми во областа на веб-дизајнот",
        ]
    },
    {
        title: "Админ на училишната веб-страница",
        icon: admin,
        points: [
            "Администратор на училишната веб-страница",
        ]
    },
    {
        title: "Лични проекти & интереси",
        icon: brain,
        points: [
            "Изработка на C# API",
            "Машинско учење python & tensorflow",
            "Блог апликација со употреба на модерни технологии",
            "Десктоп апликација со electron.js",
        ]
    },
]
let projects = [
    {
        name: "Менаџмент на стока",
        description: "C# апликација со употреба на ASP.NET web framework за да се направи API што дозволува корисници да додават продукти и други да прават нарачки употребувајќи систем на количка.",
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
        name: "Блог апликација",
        description: "Фул стек страница со употреба на модерна технологија. Оваа апликација дозволува корисниците да се регистрират, да објавуваат блогови и да коментират на други блогови.",
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
        name: "Апликација за автентикација",
        description: "Оваа апликација е направена со цел да се истражи како одредени алатки како: Firebase, AWS, Google Cloud, итн. ракуваат со датотеки.",
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

    wid: "Што сум направил до сега",
    tech: "Технологии"
}
let contact = {
    git: "стапи во контакт",
    title: "Контакт.",
    name: "Твоето Име",
    wname: "Кое е твоето име?",
    email: "Твојот е-мајл",
    wemail: "Кој е твојот е-мајл?",
    msg: "Твојата порака",
    wmsg: "Што сакаш да кажаш?",
    btn: "Испрати",
    ibtn: "Се испраќа..."   
}
export const mkdLang = [
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