import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "1",
    title: "Malware Analysis Sandbox",
    description:
      "Malware Analysis Sandbox: A secure, isolated environment for analyzing malware using both static and dynamic techniques. ",
    icon: "/skills/flutter.svg",
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
      "Decentralized Capital : A blockchain driven Web Application for banking systems.",
    icon: "/skills/react.svg",
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
      "A proof-of-concept malware developed in C++ for educational purposes to demonstrate persistence, obfuscation, and anti-debugging techniques.",
    icon: "/skills/flutter.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/kshirsagar26/Cocktail",
    url: "",
    tags: ["C++", "UPX", "Encryption"],
  },
  {
    id: "4",
    title: "Railway Reservation System",
    description:
      "An efficient and user-friendly Railway Reservation System that automates ticket booking, seat management, and payment processing.",
    icon: "/skills/nestjs.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/kshirsagar26/Railway-Reservation-System",
    tags: ["HTML", "CSS", "PHP", "SQL"],
  },
];
export default projects;
