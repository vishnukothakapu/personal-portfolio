"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import { SiReact, SiNextdotjs, SiTailwindcss, SiMongodb, SiNodedotjs, SiHtml5, SiCss3, SiTypescript, SiExpress, SiExpo, SiShadcnui, SiPrisma, SiPostgresql, SiGo, SiDocker, SiApachekafka, SiSupabase, SiSolidity, SiEthereum, SiPolygon, SiWeb3Dotjs } from "react-icons/si";
import { FaHardHat } from "react-icons/fa";
import { LinkPreview } from "@/components/ui/link-preview";

const projects = [
    {
        title: "LinkID - Professional Identity Router",
        description: "Your professional identity, simplified. One username. Clean, predictable links for every platform. Platform routing, OAuth login, and real-time dashboard.",
        image: "/assets/images/linkid.png",
        tech: [
            { Icon: SiNextdotjs, color: "text-black dark:text-white" },
            { Icon: SiTypescript, color: "text-[#3178C6]" },
            { Icon: SiTailwindcss, color: "text-[#38BDF8]" },
            { Icon: SiPrisma, color: "text-black dark:text-white" },
            { Icon: SiPostgresql, color: "text-[#336791]" },
        ],
        link: "https://github.com/vishnukothakapu/linkid"
    },
    {
        title: "Atlas - Self Healing Distributed Cache",
        description: "A lightweight, distributed, in-memory key-value store built with Go. Features consistent hashing, partition replication, heartbeat-based failure detection, and automatic client read failovers.",
        image: "/assets/images/atlas.png",
        tech: [
            { Icon: SiGo, color: "text-[#00ADD8]" },
            { Icon: SiDocker, color: "text-[#2496ED]" },
            { Icon: SiApachekafka, color: "text-black dark:text-white" },
        ],
        link: "https://github.com/vishnukothakapu/Atlas"
    },
    {
        title: "ChitSetu - Decentralized Chit Fund",
        description: "A decentralized platform combining fintech workflows with blockchain-backed recording. Built during a hackathon in a team of 4. As a Web3 Developer, I worked on the Solidity smart contracts and blockchain integration.",
        image: "/assets/images/chitsetu.png",
        tech: [
            { Icon: SiSolidity, color: "text-[#363636] dark:text-white" },
            { Icon: SiEthereum, color: "text-[#3C3C3D] dark:text-[#ECF0F1]" },
            { Icon: SiPolygon, color: "text-[#8247E5]" },
            { Icon: FaHardHat, color: "text-[#FFF100]" },
            { Icon: SiGo, color: "text-[#00ADD8]" },
        ],
        link: "https://github.com/Jaisheesh-2006/ChitSetu"
    },
    {
        title: "HabitFlow - Habit Tracker App",
        description: "A mobile habit tracking application built with React Native and Expo. It allows users to track daily habits, view progress, and maintain streaks with a clean and intuitive user interface.",
        image: "/assets/images/habitflow.png",
        tech: [
            { Icon: SiReact, color: "text-[#61DAFB]" },
            { Icon: SiTypescript, color: "text-[#3178C6]" },
            { Icon: SiExpo, color: "text-black dark:text-white" },
            { Icon: SiSupabase, color: "text-[#3ECF8E]" },
            { Icon: SiTailwindcss, color: "text-[#38BDF8]" },
        ],
        link: "https://github.com/vishnukothakapu/habit-tracker-expo"
    }
];

const Projects = () => {
    return (
        <section className="py-16 md:py-24 bg-white dark:bg-black relative overflow-hidden" id="projects">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-black dark:from-neutral-50 dark:to-neutral-400 tracking-tight">
                    <LinkPreview url="https://github.com/vishnukothakapu">My Projects</LinkPreview>{" "}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
                    Some of my featured works
                </p>
            </div>

            <div className="max-w-6xl mx-auto px-6 mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <CardContainer key={index} className="inter-var">
                        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full rounded-xl p-6 border flex flex-col justify-between">
                            <CardItem
                                translateZ="50"
                                className="text-xl font-bold text-black dark:text-white"
                            >
                                {project.title}
                            </CardItem>

                            <CardItem
                                as="p"
                                translateZ="60"
                                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                            >
                                {project.description}
                            </CardItem>

                            <CardItem translateZ="100" className="w-full ">
                                <Image
                                    src={project.image}
                                    height="1000"
                                    width="1000"
                                    className="h-60 w-full object-contain rounded-xl group-hover/card:shadow-xl"
                                    alt={project.title}
                                />
                            </CardItem>

                            <div className="flex justify-between items-center sm:mt-8 w-full">
                                <div className="flex space-x-3">
                                    {project.tech.map(({ Icon, color }, i) => (
                                        <Icon key={i} className={`text-2xl ${color}`} />
                                    ))}
                                </div>

                                <CardItem
                                    translateZ={20}
                                    as={Link}
                                    href={project.link}
                                    target="__blank"
                                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                                >
                                    View →
                                </CardItem>
                            </div>
                        </CardBody>
                    </CardContainer>
                ))}
            </div>
        </section>
    );
};

export default Projects;
