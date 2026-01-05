"use client";
import React from "react";
import projects from "@/data/projects";
import GlassCard from "./ui/GlassCard";
import CyberButton from "./ui/CyberButton";
import { Github, Globe, FolderGit2 } from "lucide-react";
import Link from "next/link";
import { ProjectType, RepoType } from "@/types";

const ProjectGrid = () => {
    return (
        <section id="projects" className="py-20 px-4 relative bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyber-blue/5 via-transparent to-transparent">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center gap-3 mb-12">
                    <FolderGit2 className="text-cyber-green w-8 h-8" />
                    <h2 className="text-3xl font-mono font-bold text-white">
                        <span className="text-cyber-blue">02.</span> TECHNICAL PROJECTS
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
                    {projects.map((project, idx) => (
                        <GlassCard
                            key={project.id}
                            className={`flex flex-col group hover:bg-cyber-dark-card/80 transition-all duration-300 ${idx === 0 ? "lg:col-span-2" : ""}`}
                            hoverEffect={true}
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 bg-cyber-blue/10 rounded-lg text-cyber-blue group-hover:text-cyber-green transition-colors">
                                    <FolderGit2 className="w-6 h-6" />
                                </div>
                                <div className="flex gap-2">
                                    {project.githubUrl && (
                                        <Link href={project.githubUrl} target="_blank">
                                            <Github className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
                                        </Link>
                                    )}
                                    {project.url && (
                                        <Link href={project.url} target="_blank">
                                            <Globe className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
                                        </Link>
                                    )}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyber-blue transition-colors">
                                {project.title}
                            </h3>

                            <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tags?.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-xs font-mono px-2 py-1 rounded bg-white/5 text-cyber-green border border-white/5"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectGrid;
