export interface Career {

    title: string;
  id: number;
}

export const career: Career[] = [
  {
    id: 1,
    title: "Product Marketer",
  },
  {
    id: 2,
    title: "Project Manager",
  },
  {
    id: 3,
    title: "Business Analyst",
  },
  {
    id: 4,
    title: "Human Resource",
  },
  {
    id: 5,
    title: "Market research analysts",
  },
  {
    id: 6,
    title: "Content managers",
  },
  {
    id: 7,
    title: "Finance Manager",
  },
    {
    id: 8,
    title: "Customer Support Specialist",
  },
      {
    id: 9,
    title: "Brand Specialist",
  },
        {
    id: 10,
    title: "Library Assistant",
  },
];

// career.map((item) => {}
export const skills = [
  {
    id: 1,
    skill: "HTML",
    career: [2,4,8,9],
    info: "",
  },
  {
    id: 2,
    skill: "Adobe",
    career: [2, 3,9],
    info: "",
  },
  {
    id: 3,
    skill: "Report Writing",
    career: [1, 2,3,5,6,10],
    info: "",
  },
  {
    id: 4,
    skill: "Python",
    career: [3,7],
    info: "",
  },
  {
    id: 5,
    skill: "MsExcel",
    career: [2, 3,5,4,7,8,10],
    info: "",
  },
  {
    id: 6,
    skill: "Problem Solving",
    career: [1,2, 3,8],
    info: '',
  },
  {
    id: 7,
    skill: "Data Analysis",
    career: [ 2, 3,5],
    info: "",
  },
  {
    id: 8,
    skill: "Content Writing",
    career: [1,6],
    info: "",
  },
  {
    id: 9,
    skill: "Digital Marketing",
    career: [1, 2,5,9],
    info: "",
  },
  {
    id: 10,
    skill: "Attention to Detail",
    career: [1, 2, 3,4,5,6,7,8,9,10],
    info: "",
  },
];

export const jobs = [
  {
    id: 1,
    name: "Full-stack Developer",
    skills: [1, 4,6],
    career: [1, 2],
    info: "https://www.coursera.org/articles/full-stack-developer",
  },
  {
    id: 2,
    name: "UX-UI Designer",
    skills: [2, 3, 4, 5],
    career: [4,5,10],
    info: "https://www.coursera.org/articles/ui-vs-ux-design",
  },
  {
    id: 3,
    name: "Game Developer",
    skills: [1, 2, 3, 4, 5],
    career: [3, 2],
    info: "https://www.coursera.org/articles/game-developer",
  },
  {
    id: 4,
    name: "Product Manager",
    skills: [1, 2, 3, 4, 5, 8, 9],
    career: [1, 2,10],
    info: "https://www.coursera.org/articles/what-does-a-product-manager-do?=&trk_ref=search-bar-autorecs",
  },
  {
    id: 5,
    name: "Database Engineer",
    skills: [1, 2, 3, 4, 5],
    career: [1, 2, 3,5],
    info: "https://www.coursera.org/professional-certificates/meta-database-engineer",
  },
  {
    id: 6,
    name: "Digital Assistant",
    skills: [1, 2, 3, 4, 5],
    career: [1, 2,3,4],
    info: "https://www.coursera.org/articles/how-to-become-a-virtual-assistant",
  },
  {
    id: 7,
    name: "UX Writer",
    skills: [1, 2, 3, 4, 5],
    career: [1, 2,6],
    info: "https://www.coursera.org/articles/whats-a-ux-writer",
  },
  {
    id: 8,
    name: "Software Engineer",
    skills: [1, 2, 3, 4, 5],
    career: [3, 2,5,7,8],
    info: "https://www.coursera.org/articles/software-engineer",
  },
  {
    id: 9,
    name: "Data Scientist",
    skills: [1, 2, 3, 4, 5],
    career: [3, 2,],
    info: "https://www.coursera.org/articles/what-is-a-data-scientist",
  },
  {
    id: 10,
    name: "Content Writer",
    skills: [1, 2, 3, 4, 5],
    career: [1, 2,3,4,5,6,7,9,10],
    info: "https://www.coursera.org/articles/content-strategy",
  },
];
