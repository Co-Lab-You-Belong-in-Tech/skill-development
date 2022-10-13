export interface Career {
    title: string;
    id: number;
    }

export const career: Career[] = [
    {
        id: 1,
        title: 'Web Developer',

    },
    {
        id: 2,
        title: 'Software Engineer',

    },
    {
        id: 3,
        title: 'Data Scientist',
    },
];



export const skills = [
    {
        id: 1,
        skill: 'HTML',
        career: [1,2],
        info: 'HTML is the standard markup language for creating Web pages.'
    },
    {
        id: 2,
        skill: 'CSS',
        career: [1,2],
        info: 'CSS is the language we use to style an HTML document.'
    },
    {
        id: 3,
        skill: 'JavaScript',
        career: [1,2],
        info: 'JavaScript is the programming language of HTML and the Web.'
    },
    {
        id: 4,
        skill: 'Python',
        career: [2, 3],
        info: 'Python is an interpreted, high-level, general-purpose programming language.'
    },
    {
        id: 5,
        skill: 'Java',
        career: [2,3],
        info: 'Java is a general-purpose programming language that is class-based, object-oriented, and designed to have as few implementation dependencies as possible.'

    },
    {
        id: 6,
        skill: 'C++',
        career: [2, 3],
        info: 'C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or "C with Classes".'
    },
    {
        id: 7,
        skill: 'C#',
        career: [1,2],
        info: 'C# is a general-purpose, multi-paradigm programming language encompassing strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented, and component-oriented programming disciplines.'
    },
    {
        id: 8,
        skill: 'C',
        career: [1,3],
        info: 'C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system.'
    },
    {
        id: 9,
        skill: 'R',
        career: [2,3],
        info: 'R is a programming language and free software environment for statistical computing and graphics supported by the R Foundation for Statistical Computing.'
    },
    {
        id: 10,
        skill: 'SQL',
        career: [1,2,3],
        info: 'SQL is a domain-specific language used in programming and designed for managing data held in a relational database management system, or for stream processing in a relational data stream management system.'
    },
];