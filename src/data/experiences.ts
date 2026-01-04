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
      "Led a team to perform comprehensive vulnerability assessments, identifying and triaging 50+ risks across client infrastructure, resulting in a 25% reduction in critical vulnerabilities.",
      "Executed application-level security reviews and proactive threat modeling to anticipate and mitigate potential cyber threats and anomalous application behavior.",
      "Designed and assisted in the implementation of 10+ security controls, ensuring strict alignment with the ISO 27001:2022 standard to strengthen defense-in-depth principles.",
      "Advocated Security Development Lifecycle (SDLC) integration by actively collaborating with engineering teams, advising on secure design patterns and critical threat mitigation strategies.",
       
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
      "Accomplished bridging theoretical concepts with practical IoT implementation by creating and deploying 5+ Arduino-based projects, leading to hands-on operational experience.",
      "Enhanced awareness of IoT security risks by researching and identifying common vulnerabilities and possible exploitation methods.",
      "Contributed to improving IoT security posture by documenting findings and suggesting countermeasures, enriching internal knowledge bases.",
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
      "Researched and refined Incident Response (IR) frameworks and playbooks, improving IR efficiency by 20% and reducing simulated response times by 15%.",
      "Delivered actionable research on global security standards to improve adherence and cybersecurity readiness.",
      "Specifically enhanced playbooks for high-impact cyber threats, including web application compromise and data exfiltration scenarios.",
    ],
  },
];

export default experiences;
