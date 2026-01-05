import { ProjectType } from "@/types";

export interface IAwardItem {
    id: string;
    title: string;
    issuer: string;
    date: string;
    description: string;
    url?: string;
    icon?: string;
}

const awards: IAwardItem[] = [
    {
        id: "1",
        title: "CompTIA Security+",
        issuer: "CompTIA",
        date: "2026",
        description: "",
        url: "https://drive.google.com/file/d/1gwXDQAfSwiunHNF0kAVJtXX_UbiV6Dzk/view?usp=sharing",
    },
    {
        id: "2",
        title: "SOC Level 1",
        issuer: "TryHackMe",
        date: "2024",
        description: "",
        url: "https://drive.google.com/file/d/1-AkBvqiaNyjDZDeSELl_y5AAQgFlUA7t/view?usp=sharing",
    },
    {
        id: "3",
        title: "Introduction to Vulnerability Management",
        issuer: "Security Blue Team",
        date: "2023",
        description: "",
        url: "https://drive.google.com/file/d/1A5aWBxXQHmnzfcRgetRT3QJMYWjS6Rm9/view?usp=sharing"
    },
];

export default awards;
