"use client";

import { RepoType, type IProjectItem } from "@/types";
import { Balancer } from "react-wrap-balancer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import Column from "@/components/core/Column";
import Row from "@/components/core/Row";
import CardBox from "@/components/core/CardBox";

const ProjectItem = ({ project }: { project: IProjectItem }) => {
  return (
    <CardBox classNames="relative flex flex-col justify-between items-center w-full max-w-[28rem] p-6 gap-6 rounded-[1rem] border border-[rgba(255,255,255,0.1)] shadow-lg dark:bg-[var(--primaryColor5)] bg-[var(--primaryColor)] transition-transform hover:scale-[1.02] duration-300">
      
      {/* Project Icon */}
      <div className="w-24 h-24">
        <Image
          src={project.icon}
          alt={project.title}
          width={96}
          height={96}
          sizes="100%"
          loading="lazy"
          placeholder="blur"
          blurDataURL={project.icon}
          className="w-full h-full object-cover rounded-full"
        />
      </div>

      {/* Project Title */}
      <h2 className="text-lg font-semibold text-center mt-2">{project.title}</h2>

      {/* Repository Type */}
      <div
        className={`rounded-full px-3 py-1 text-xs font-semibold text-center ${
          project.repoType === RepoType.Private
            ? "text-[var(--errorColor)] bg-[var(--errorColor50)]"
            : "text-[var(--successColor)] bg-[var(--successColor50)]"
        }`}
      >
        {project.repoType === RepoType.Private ? "Private" : "Public"}
      </div>

      {/* Project Description */}
      <p className="text-sm text-center text-[var(--textColor)]">
        <Balancer>{project.description}</Balancer>
      </p>

      {/* Tags */}
      {project.tags && project.tags?.length > 0 && (
        <div className="flex flex-wrap justify-center gap-2 mt-2">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs text-[var(--textColor)] border border-[var(--textColor50)] rounded-full px-3 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Links */}
      <Row classNames="flex justify-center items-center gap-4 mt-4">
        {project.githubUrl && (
          <Link
            href={project.githubUrl}
            aria-label="GitHub Repository"
            target="_blank"
            className="flex items-center justify-center w-10 h-10 rounded-full border border-[var(--textColor)] hover:bg-[var(--textColor)] hover:text-[var(--primaryColor)] transition duration-300"
          >
            <FontAwesomeIcon icon={faGithub} className="text-lg" />
          </Link>
        )}
        {project.url && (
          <Link
            href={project.url}
            aria-label="Project Demo"
            target="_blank"
            className="flex items-center justify-center w-10 h-10 rounded-full border border-[var(--textColor)] hover:bg-[var(--textColor)] hover:text-[var(--primaryColor)] transition duration-300"
          >
            <FontAwesomeIcon icon={faEye} className="text-lg" />
          </Link>
        )}
      </Row>
    </CardBox>
  );
};

export default ProjectItem;
