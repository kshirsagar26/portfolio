import { IExperienceItem } from "@/types";

const experiences: IExperienceItem[] = [
  {
    designation: "Intern - Cybersecurity Advisory Services",
    company: "AUJAS CYBERSECURITY LTD",
    startDate: "Jun 2023",
    endDate: "Dec 2023",
    isCurrentJob: false,
    location: "Mumbai, India",
    description: [
      "Strengthened the company’s ISMS by updating the ISO 27001:2013 framework to align with ISO 27001:2022 controls, achieving a 30% reduction in compliance gaps.",
      "Developed and maintained a comprehensive risk register, identifying 50+ risks and reducing vulnerabilities by 25%.", 
      "Conducted assessments on 15+ systems, identifying critical gaps and reducing exploitable vulnerabilities by 40%.",
      "Assisted in creating the SOA and implementing 10+ security controls, achieving a 95% success rate in data protection." ,
      "Collaborated with cross-functional teams to enhance security controls and ensure adherence to industry best practices."
    ],
  },
  {
    designation: "Cybersecurity Intern",
    company: "CYBER VIDYAPEETH FOUNDATION",
    startDate: "Jun 2022",
    endDate: "Jul 2022",
    isCurrentJob: false,
    location: "Haryana, India",
    description: [
      "Gained practical experience in IoT operations through hands-on tasks, enhancing understanding of IoT system functionality.",
      "Developed and executed small-scale IoT projects using Arduino technology, applying theoretical knowledge to real-world scenarios.", 
      "Conducted research on IoT security vulnerabilities, identifying potential weaknesses and methods of hacking.",
      "Developed and executed 5+ small-scale IoT projects, achieving 100% success and enhancing real-world application.",
      "Investigated the security implications of emerging technologies, particularly in IoT, to enhance understanding of potential risks and mitigation strategies."
    ],
  },
  {
    designation: "Summer Intern",
    company: "ERNST & YOUNG LLP",
    startDate: "Aug 2021",
    endDate: "Sept 2022",
    isCurrentJob: false,
    location: "Remote",
    description: [
      "Researched Incident Response (IR) frameworks, improving IR efficiency by 20% through actionable insights. Contributed to a project, enhancing cybersecurity readiness by 30% with structured frameworks.",
      "Presented findings that increased compliance with global security standards by 25%.",
      "Developed best practices for IR units, reducing response time by 15% during simulated incidents.", 
      "Contributed to a project, reinforcing the importance of structured frameworks in enhancing national cybersecurity readiness."
    ],
  },
];

export default experiences;
