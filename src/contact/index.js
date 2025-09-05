import { AiFillHome } from "react-icons/ai";
import { FaCode, FaCodeBranch } from "react-icons/fa";
import { MdOutlineOndemandVideo } from "react-icons/md";

export const sidebarLinks = [
  {
    id: 1,
    text: "Bosh sahifa",
    icon: AiFillHome,
    href: "/",
  },
  {
    id: 2,
    text: "Kurslar",
    icon: MdOutlineOndemandVideo,
    href: "/courses",
  },
  {
    id: 3,
    text: "Loyihalar",
    icon: FaCodeBranch,
    href: "/projects",
  },
  {
    id: 4,
    text: "Kod manbasi",
    icon: FaCode,
    href: "/source-codes",
  },
];
export const courses = [
  {
    id:1,
    text:"Foundation",
    links:"/courses/foundation",
    img:"/Foundation.png"
  },
  {
    id:2,
    text:"JavaScript",
    links:"/courses/js",
    img:"/JavaScript.png"
  },
  {
    id:3,
    text:"TypeScript",
    links:"/courses/ts",
    img:"/TypeScript.png"
  },
  {
    id:4,
    text:"React.js",
    links:"/courses/react",
    img:"/React JS & Redux.png"
  },
  {
    id:5,
    text:"Vue.js",
    links:"/courses/vue",
    img:"/Vue Js & Vue X.png"
  },
  {
    id:6,
    text:"Angular",
    links:"/courses/angular",
    img:"/Angular.png"
  },
  
];
export const courses2 = [
    {
    id:0,
    text:"Foundation",
    links:"/courses/foundation",
    img:"/Foundation.png"
  },
  {
    id:1,
    text:"Angular",
    links:"/courses/angular",
    img:"/Angular.png"
  },
   {
    id:2,
    text:"JavaScript",
    links:"/courses/js",
    img:"/JavaScript.png"
  },
  {
    id:3,
    text:"TypeScript",
    links:"/courses/ts",
    img:"/TypeScript.png"
  },
    {
    id:4,
    text:"React JS & Redux",
    links:"/courses/react",
    img:"/React JS & Redux.png"
  },
  {
    id:5,
    text:"Vue JS & Vue X",
    links:"/courses/vue",
    img:"/Vue Js & Vue X.png"
  },

]
export const projects = [
  {
    id:1,
    text:"MERN Stack - Telegram clone",
    links:"/projects/telegram-clone",
    img:'/MERN Stack - Telegram clone.png'
  }, 
  {
    id:2,
    text:'Next.js - X clone',
    links: "/projects/x-clone",
    img:'/Next.js - X clone.png'
  },
  {
    id:3,
    text:"Next.js - Drive clone",
    links:'/projects/google-drive',
    img:'/public/Next.js - Drive clone.png',
  },
  {
    id:4,
    text:"Nuxt.js - Jira clone",
    links:'/projects/jira-clone',
    img:'/Nux.js - Jira clone.png'
  },
  {
    id:5,
    text:"Next.js - Notion clone",
    links:"/projects/notion-clone",
    img:"/Next-js - Notion clone.png",
  },
  {
    id:6,
    text:"Next.js - Netflix clone",
    links:'/projects/netflix-web',
    img:'/React Navite - Kinoteatr.png',
  }
]