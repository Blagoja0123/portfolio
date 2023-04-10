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
            "CV",
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
    contact: "Contact",
    exp: "Experience",
    wid: "What I have done so far",
    tech: "Technologies",
    others: "What others say",
    test: "Recommendations"
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
    {
        testimonial: "I had the pleasure of teaching Blagoja during his time in my calculus class, and I can confidently say that he is one of the most talented and hardworking students I have had the pleasure of teaching. Throughout the semester, Blagoja demonstrated an outstanding ability to grasp complex mathematical concepts and apply them to solve challenging problems. He consistently achieved high marks on exams, displaying an exceptional level of dedication to his studies. What sets Blagoja apart from his peers is not only his strong mathematical skills but also his ability to think critically and independently.",
        role: 'Teacher at SOU "Jane Sandanski"',
        name: "Bozhana Lazarova",
        contact: "lazarovabozana@yahoo.com"
    },
    {
        testimonial: "During the lessons, the student is always positive, friendly and ready to create a good working environment. His intellectual abilities surpass those of most of his peers, and this makes him capable of both independent performance of work tasks and teamwork. He is diligent, energetic and full of initiative. Challenges inspire him, and this can be seen from his achievements in many competitions, as well as participation in projects of various kinds. For Blagoja, there is no unsolvable problem, on the contrary, everything is a challenge for him. With his diligence, determination, creativity and ambition, he manages to make the unsolvable solvable. He uses his leadership spirit and communication skills to activate his entire environment. That's why he successfully runs the school's website, which shows himself to be a successful informatics expert, a successful journalist and an excellent connoisseur of his native and foreign languages.",
        role: 'Teacher at SOU "Jane Sandanski"',
        name: "Elena Lazareva",
        contact: "elenalazareva35@yahoo.com"
    },
    {
        testimonial: "As Blagoja's professor and mentor, I was especially pleased to write this recommendation, because we have a special collaboration with him, which for me is a new and wonderful experience. I find him to be a pleasant, generous, above all loyal and ambitious young man who would successfully cope with all business challenges in the future. Blagoja is a capable, independent teenager with excellent communication skills, a pleasant and adaptable person who performs everyday tasks with incredible ease and in whom you can always trust, a real team player (as evidenced by his debates, workshops, participations and awards won by the various domestic and international competitions). He is a true example of a student who is always ready to help others. During his four-year work as an administrator of the school website, Blagoja made an exceptional contribution to increasing the efficiency and quality of our daily work. In the performance of these work duties, he approaches responsibly and is always regular. The attitude towards students, remarkable self-confidence, meticulousness in the performance of duties, give me the right to emphasize that he should be given the opportunity to personally prove his abilities, skills and knowledge.",
        role: 'Teacher at SOU "Jane Sandanski"',
        name: "Gordana Vasileva Vukashinovic'",
        contact: "gordana_vasileva@yahoo.com"
    },
    {
        testimonial: "It is a great pleasure  to  write this letter of recommendation for Blagoja Dzorlev. In the past four years,  I have taught Blagoja in a number of computer science courses where he has excelled. Based on my experience with Blagoja, I can say without any hesitation that he is one of the most hardworking and naturally talented students in the field of  programming languages. He is exceptionally well prepared to move onto the collegiate level, and it is clear to me that he has a very bright future in the field of  Computer Sciences and Math . Blagoja is very mature for his age and he approaches very seriously to his tasks. He  has very high level of understanding cognitive and abstract concepts, intending to apply them in new situations and projects. During the first class he showed great creativity  in solving problems and finding out unique algorithms  in programming languages, resulting with few prizes on National and International competitions (as individual and also as a team member). Blagoja bears  natural curiosity and he  looks for a new challenge in order to improve his talent and skills. Beside his programming skills, he showed interest in Web design, Game design . Four years Blagoja was editor of the official school web site, and used  his free time for popularization of the school. Also he participated in a few Erasmus projects, being part of a mobility in Portugal, and actively participated in all activities abroad, and also during mobility in Strumica, as host of a student, and organizer of the project. All in all, Blagoja is an incredibly well prepared and skilled student. Aside from Blagoja's cognitive ability, it is important to mention his work ethic and his presence in the classroom setting. Blagoja never settles for second best and he utilizes class time in a productive and determined manner.  Due to this approach, Blagoja quickly became a role model for his peers in all my classes. Students observed Blagoja's commitment to the creative process and they strived to excel as he did. Most importantly, Blagoja is always willing to help his classmates while they solve exercises. He offers both technical and conceptual support to his peers in a kind and caring manner that speaks of  Blagoja's patience and his understanding of the importance of collaborative learning. As a high school student from small town in Macedonia, Blagoja accomplished much more than expected. Looking ahead to Blagoja's college years, I am certain that he is ready to tackle the rigorous and challenging curriculum of your collegiate level. Blagoja will not take the path of least resistance, rather, he will push himself to continue to grow and develop as a innovative thinker. He will immerse himself in his  new community and he will share his energy, enthusiasm, commitment and talent with his peers and his professors. As Blagoja  is an exceptional candidate and it is with the utmost confidence that I recommend him to you,  knowing his great wish to become part of your highly rated university. Please do not hesitate to contact me if you have any further questions.",
        role: 'Teacher at SOU "Jane Sandanski"',
        name: "Sofija Tosheva",
        contact: "sofijatosheva@yahoo.com"
    },
]

let philosophy = {
    phil: "Philosophy",
    content: "I believe there is no task that is too difficult, simply a task that I do not yet fully understand. With this I aim to fully understand everything I do and learn to allow me to excel in my future."
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