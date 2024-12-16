import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "1",
    title: "Malware Analysis Sandbox",
    description:
      "Malware Analysis Sandbox: A secure, isolated environment for cybersecurity professionals to analyze malware using static and dynamic techniques, gaining insights into behavior without risking system integrity. ",
    icon: "/projects/malware.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/kshirsagar26/Malware-Analysis-Sandbox",
    url: "",
    tags: ["HTML", "CSS", "VirustTotal", "Cuckoo Sandbox", "Javascript"],
  },
  {
    id: "2",
    title: "DeCap",
    description:
      "Decentralized Capital is a blockchain-based app for banking, allowing users to securely manage deposits, request loans, and pay debts through a seamless, user-friendly interface for transparent finances.",
    icon: "/projects/decap.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/kshirsagar26/DeCap",
    url: "",
    tags: ["Javascript", "Solidity", "HTML", "CSS", "MongoDB"],
  },
  {
    id: "3",
    title: "Cocktail.exe",
    description:
      "A C++ proof-of-concept malware project created for educational purposes, demonstrating persistence, obfuscation, packing, and advanced anti-debugging techniques to showcase key concepts in malware development, evasion techniques, and comprehensive security.",
    icon: "/projects/cocktail.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/kshirsagar26/Cocktail",
    url: "",
    tags: ["C++", "UPX", "Encryption", "SHA256"],
  },
  {
    id: "4",
    title: "Railway Reservation System",
    description:
      "A user-friendly and efficient Railway Reservation System that automates ticket booking, seat availability management, and secure payment processing, ensuring seamless and hassle-free travel reservations for all users.",
    icon: "/projects/railway.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/kshirsagar26/Railway-Reservation-System",
    tags: ["HTML", "CSS", "PHP", "SQL"],
  },
];
export default projects;
