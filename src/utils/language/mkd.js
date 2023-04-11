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
    content: "Јас сум студент и аспирантен софтверски инженер со успешни резултати и на натпревари и на професионални поставувања. Учествував на 13 меѓународни натпревари и освоив повеќе награди, покажувајќи ги моите вештини и способности. Покрај мојата техничка способност, стекнав и вредни вештини како тимска работа, лидерство и комуникациски вештини преку моето учество во меѓународни проекти. Имам завршена пракса во веб-дизајн и моментално сум администратор на веб-страницата на моето училиште. Моето познавање на широк опсег на технологии ме прави способен да решавам голем број проблеми и секогаш сум желен да преземам нови предизвици и да се подготвувам за иднината.",
    content1: "Јас сум ученик во СОУ „Јане Сандански“ Струмица и изминативе 4 години сум на патување обидувајќи се максимално да стекнам искуство и знаење од областа што сакам да ја работам. Пред 4 години моето т. н. „патување“ започна со учење на C++ и со поголем интерес во предмети кои ја поддржуваат и одат заедно со темата компјутерски науки како што се математиката, програмирањето и англискиот јазик. Оттогаш бев дел од бројни натпревари, проекти и пракса, кои поединечно одиграа своја улога во напредокот на моите севкупни вештини и знаења. Покрај јазикот со кој го започнав моето програмско патување, научив и многу други програмски јазици и технологии како што се: C#, ASP.NET, Python, Tensorflow, React.js, Next.js, Tailwind, CSS, HTML, JavaScript, TypeScript, THREE .js, tRPC, Prisma, SQL, MongoDB, Node.js, SASS и уште неколку. Отсекогаш сум имал најголем интерес за технологијата и нејзиното експоненцијално подобрување во текот на изминатите неколку години, што ме инспирираше еден ден да придонесам за масовно растечкиот број технологии што ни се достапни."
}
let work = {
    my_work: "моите проекти",
    proj: "Проекти",
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
            "CV",
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
    wid: "Што сум направил до сега",
    tech: "Технологии",
    exp: "Искуство",
    contact: "Контакт",
    others: "Што велат другите",
    test: "Препораки",
    techcontent: "Ова е делумна листа на технологии со кои сум запознаен, за да видите повеќе од она со што сум работил, одете на мојот профил на github што се наоѓа во делот за контакт",
}
let contact = {
    git: "стапете во контакт",
    title: "Контакт",
    name: "Вашето Име",
    wname: "Кое е вашето име?",
    email: "Вашиот е-мајл",
    wemail: "Кој е вашиот е-мајл?",
    msg: "Вашата порака",
    wmsg: "Што сакате да кажете?",
    btn: "Испрати",
    ibtn: "Се испраќа...",
    techsub: "технологија со која сум запознаен",  
}

let temp = "Благоја е мој ученик од септември 2019 година. За него можам да кажам дека е ученик кој покажува особен интерес и успех по мојот предмет. Можам да кажам дека постигнува исклучителни резултати врз база на неговите оцени, присутност и учество на часот. Тој активно учевствува во сите дискусии и дебати, неговото познавање од различни теми е широко. Неговите вербални и јазични вештини во пишување се на навистина високо ниво, што секако е задоволство за секој наставник. Можам да додадам дека има земено учество и во повеќе натпревари, како што е општинскиот, регионалниот и државниот натпревар по англиски јазик организиран од ЕЛТАМ  во 2021 година, како и меѓународниот онлајн натпревар Best in English кој се одржа во ноември 2022. Како дел од наставните активности се сметаат и задачи во група, па со право можам да кажам дека Благоја одлично се има покажано во таков вид активности затоа што беспрекорно ги завршува сите задачи кои му се дадени и нема проблем сето тоа да го постигне во зададениот рок. Кога е тој лидер на групата до израз доаѓаат нековите фантастични организациски способности, преземањето иницијатива и обезбедување на најефикасен начин за постигање позитивни резултати. Благоја е доверлив, лојален, позитивен и отворен ученик, кој секогаш е подготвен да ги поддржи другите во и надвор од училницата."
let testimonials = [
    {
        testimonial: temp,
        role: 'Професорка во СОУ „Јане Сандански“',
        name: "Зорица Витанова",
        contact: " +389 75 320 833 или zorica_peceva@yahoo.co.uk"
    },
    {
        testimonial: "Имав задоволство да го предавам Благоја за време на неговото време на мојот час по математичка анализа, и можам со сигурност да кажам дека тој е еден од најталентираните и највредните студенти на кои сум имал задоволство да предавам. Во текот на целиот семестар, Благоја покажа извонредна способност да ги сфати сложените математички концепти и да ги применува за решавање предизвикувачки проблеми. Тој постојано постигнуваше високи оценки на тестовите, покажувајќи исклучително ниво на посветеност на студиите. Она што го издвојува Благоја од неговите врсници не се само неговите силни математички вештини, туку и неговата способност да размислува критички и самостојно.",
        role: 'Професорка во СОУ „Јане Сандански“',
        name: "Божана Лазарова",
        contact: "lazarovabozana@yahoo.com"
    },
    {
        testimonial: "За време на часовите ученикот е секогаш позитивен,  пријателски расположен и подготвен да создаде добро работно опкружување. Неговите интелектуални способности отскокнуваат од повеќето негови врсници, а тоа го прави способен како за самостојно извршување на работните задачи, така и за тимска работа.  Тој е вреден, енергичен и полн со иницијатива. Предизвиците го инспирираат, а тоа се гледа и по неговите постигнувања на многу натпревари, но и учество во проекти од различен вид. За Благоја не постои нерешлив проблем, напротив, сѐ му е предизвик. Со својата трудољубивост, решителност, креативност и амбициозност успева и нерешливото да го направи решливо. Лидерскиот дух и комуникациските способности кои ги поседува ги искористува за активирање на целото негово опкружување. Затоа успешно ја води веб-страницата на училиштето, со што се покажува како успешен информатичар, успешен новинар и одличен познавач на мајчиниот, но и на странските јазици. ",
        role: 'Професорка во СОУ „Јане Сандански“',
        name: "Елена Лазарева",
        contact: "elenalazareva35@yahoo.com"
    },
    // {
    //     testimonial: "Како професор и ментор на Благоја, особено задоволство ми беше да ја напишам оваа препорака, бидејќи со него имаме посебна соработка, која за мене е едно ново и прекрасно искуство. Сметам дека е пријатен, дарежлив, пред сé лојален и амбициозен млад човек кој успешно би се справил со сите деловни предизвици во иднина. Благоја е способен, независен тинејџер со одлични комуникациски вештини, пријатна и прилагодлива личност која ги извршува секојдневните задачи со неверојатна леснотија и во која секогаш може да верувате, вистински тимски играч (што го докажуваат и неговите дебати, работилници, учествата и наградите освоени од различните домашни и меѓународни натпревари). Тој е вистински пример за ученик кој секогаш е подготвен да им помогне на другите. За време на неговата четиригодишна работа како администратор на училишната web страна, Благоја даде исклучителен придонес за зголемување на ефикасноста и квалитетот на нашето секојдневно работење. Во извршувањето на овие работни обврски пристапи одговорно и секогаш е редовен. Односот кон учениците, забележителната самодоверба, педантноста во извршувањето на обврските, ми даваат право да нагласам дека треба да му биде овозможено лично да ги докаже своите способности, вештини и знаења.",
    //     role: 'Професорка во СОУ „Јане Сандански“',
    //     name: "Гордана Василева Вукашиновиќ'",
    //     contact: "gordana_vasileva@yahoo.com"
    // },
    // {
    //     testimonial: "Задоволство ми е да го напишам ова писмо со препорака за Благоја Џорлев. Во изминатите четири години го предавав Благоја на голем број курсеви по информатика каде што се истакна. Врз основа на моето искуство со Благоја, без никакво двоумење можам да кажам дека тој е еден од највредните и природно најталентираните студенти во областа на програмските јазици. Тој е исклучително добро подготвен да премине на факултетско ниво и јасно ми е дека има многу светла иднина во областа на компјутерските науки и математиката. Благоја е многу зрел за своите години и многу сериозно пристапува кон своите задачи. Тој има многу високо ниво на разбирање когнитивни и апстрактни концепти, со намера да ги применува во нови ситуации и проекти. За време на првиот час покажа голема креативност во решавање на проблеми и изнаоѓање уникатни алгоритми во програмските јазици, што резултираше со малку награди на државни и меѓународни натпревари (како индивидуален, но и како тимски член). Благоја носи природна љубопитност и бара нов предизвик за да го подобри својот талент и вештини. Покрај неговите програмски вештини, тој покажа интерес за веб дизајн, дизајн на игри. Четири години Благоја беше уредник на официјалната веб-страница на училиштето, а слободното време го користеше за популаризација на училиштето. Исто така, тој учествуваше во неколку Еразмус проекти, како дел од мобилност во Португалија, и активно учествуваше во сите активности во странство, а исто така и за време на мобилноста во Струмица, како домаќин на студент и организатор на проектот. Сè на сè, Благоја е неверојатно добро подготвен и вешт ученик. Освен когнитивната способност на Благоја, важно е да се спомене и неговата работна етика и неговото присуство во училницата. Благоја никогаш не се задоволува со второто најдобро време и го користи времето на час на продуктивно и решително. Поради ваквиот пристап Благоја брзо стана пример за своите врсници во сите мои класови. Учениците ја набљудуваа посветеноста на Благоја на креативниот процес и се трудеа да напредуваат како и тој. Што е најважно, Благоја е секогаш подготвен да им помогне на своите соученици додека решаваат вежби. Тој им нуди и техничка и концептуална поддршка на своите врсници на љубезен и грижлив начин што зборува за трпението на Благоја и неговото разбирање за важноста на заедничкото учење. Како средношколец од малиот град во Македонија, Благоја постигна многу повеќе од очекуваното. Гледајќи напред кон факултетските години на Благоја, сигурен сум дека тој е подготвен да се справи со ригорозната и предизвикувачка наставна програма на вашето факултетско ниво. Благоја нема да тргне по патот на најмал отпор, туку ќе се турка себеси да продолжи да расте и да се развива како иновативен мислител. Тој ќе се нурне во својата нова заедница и ќе ја сподели својата енергија, ентузијазам, посветеност и талент со своите врсници и со своите професори. Бидејќи Благоја е исклучителен кандидат и со најголема доверба ви го препорачувам, знаејќи ја неговата голема желба да стане дел од вашиот високо оценет универзитет. Ве молиме не двоумете се да ме контактирате доколку имате дополнителни прашања.",
    //     role: 'Професорка во СОУ „Јане Сандански“',
    //     name: "Софија Тошева",
    //     contact: "sofijatosheva@yahoo.com"
    // },
]

let philosophy = {
    subtext: "мојата филозофија",
    phil: "Филозофија",
    content: "Верувам дека не постои задача што е премногу тешка, едноставно задача што сè уште не ја разбирам целосно. Со ова имам за цел целосно да разберам сè што правам и учам за да бидам подобар во иднината."
}

let awards = {
    subtext: "моите награди и сертификати",
    aw: "Награди",
    content: "Збирка на награди од натпревари и сертификати од проекти во кои сум учествувал"
}

let future = {
    subtext: "Мојата иднина",
    headtext: "Иднина",
    content: "Во следните 5 години планирам да започнам и да го завршам универзитетот, дипломирајќи во областа компјутерски науки и подготвен да создадам софтвер што го води нашиот секојдневен живот.",
}

let outside = {
    subtext: "вон училишни активности",
    headtext: "Надвор од училиштето",
    categories: [
        {
            title: "Филмови и серии кои ми се допаѓат",
            contents: [
                "Django Unchained",
                "Breaking Bad",
                "Inglorious Basterds"
            ]
        },
        {
            title: "Хоби",
            contents: [
                "Oдење во теретана",
                "Програмирање",
                "Излегување со пријатели"
            ]
        },
        {
            title: "Музика што ми се допаѓа",
            contents: [
                "Logic - Under Pressure",
                "Eminem - Till I collapse",
                "Connor Price - Drop"
            ]
        }
    ]
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
    testimonials,
    philosophy,
    awards,
    future,
    outside
]