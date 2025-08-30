import { AiFillHome } from "react-icons/ai";
import { FaCode, FaCodeBranch } from "react-icons/fa";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { RiDashboard2Line } from "react-icons/ri";

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
