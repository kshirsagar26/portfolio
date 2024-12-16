import { IServiceItem } from "@/types";

const services: IServiceItem[] = [
  {
    id: 1,
    title: "Vulnerability Assessment and Penetration Testing",
    icons: ["/VAPT/ethical-hacking.png",
            "/VAPT/penetration-testing.png",
            "/VAPT/virus.png",
            "/VAPT/security.png",
            "/VAPT/plus.png"
    ],
    shortDescription:
      "",
    description:
      "I identify and address vulnerabilities in your systems through comprehensive assessments and ethical hacking techniques. By simulating real-world attacks, I ensure your applications, networks, and infrastructure remain secure against evolving threats. Build resilience with detailed security insights and risk mitigation strategies.",
  },
  {
    id: 2,
    title: "Compliance & Audit",
    icons: [
      "/compliance/1.png",
      "/compliance/2.png",
      "/compliance/3.webp",
      "/compliance/4.png",
      "/compliance/5.svg",
    ],
    shortDescription: "",
    description:
      "I ensure your organization adheres to industry regulations and frameworks such as GDPR, HIPAA, ISO 27001, and NIST. Through thorough audits and gap assessments, I identify compliance issues, recommend corrective actions, and help you achieve certification, reducing legal and operational risks.",
  },
];

export default services;
