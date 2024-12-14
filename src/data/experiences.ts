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
      "Strengthened the company’s ISMS by updating the ISO 27001:2013 framework to align with ISO 27001:2022 controls and improving compliance with NIST SP 800-53 and NIST CSF standards. ",
      "Developed and maintained a comprehensive risk register to identify, track, and mitigate organizational risks, enhancing risk management processes.",
      "Conducted vulnerability assessments to identify security gaps and recommended effective mitigation strategies.",
      "Assisted in creating the Statement of Applicability (SOA) and implementing security controls, gaining hands-on experience with DLP tools to prevent data breaches.",
      "Collaborated with cross-functional teams to enhance security controls and ensure adherence to industry best practices. "
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
      "Developed and executed small-scale IoT projects using Arduino technology, applying theoretical knowledge to real-world scenarios. ",
      "Conducted research on IoT security vulnerabilities, identifying potential weaknesses and methods of hacking.",
      "Investigated the security implications of emerging technologies, particularly in IoT, to enhance understanding of potential risks and mitigation strategies. ",
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
      "Researched Incident Response (IR) procedures to understand how organizations efficiently manage and address cybersecurity incidents.",
      "Analyzed accepted frameworks such as NIST and ISO to assess their practicality and effectiveness in real-world scenarios. ",
      "Emphasized best practices for establishing and managing an IR unit, contributing to the development of robust incident response strategies.",
      "Contributed to a project for defense forces, reinforcing the importance of structured frameworks in enhancing national cybersecurity readiness. ",
    ],
  },
];

export default experiences;
