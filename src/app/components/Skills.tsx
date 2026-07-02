"use client";
import { motion } from "framer-motion";
import { IconType } from "react-icons";
import {
    SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, SiPython, SiPostgresql, SiDocker, SiKubernetes, 
    SiCplusplus, SiJavascript, SiExpress, SiMongodb, SiSolidity, SiWeb3Dotjs, SiPostman, SiExpo, 
    SiSupabase, SiFastapi, SiGo, SiGnubash, SiEjs, SiRedis, SiFirebase, SiMysql, SiAmazonwebservices, 
    SiDigitalocean, SiTerraform, SiJenkins, SiGithubactions, SiEthers, SiPolygon, SiPrometheus, 
    SiGit, SiLinux, SiEthereum
} from "react-icons/si";
import { FaDatabase } from "react-icons/fa";

type SkillType = {
    name: string;
    icon?: IconType;
};

type SkillCategory = {
    title: string;
    skills: SkillType[];
};

const skillCategories: SkillCategory[] = [
    {
        title: "Languages",
        skills: [
            { name: "Python", icon: SiPython },
            { name: "JavaScript", icon: SiJavascript },
            { name: "TypeScript", icon: SiTypescript },
            { name: "Go", icon: SiGo },
            { name: "C/C++", icon: SiCplusplus },
            { name: "SQL", icon: FaDatabase },
            { name: "Solidity", icon: SiSolidity },
            { name: "Bash", icon: SiGnubash },
        ]
    },
    {
        title: "Frameworks & Libraries",
        skills: [
            { name: "React.js", icon: SiReact },
            { name: "Next.js", icon: SiNextdotjs },
            { name: "Node.js", icon: SiNodedotjs },
            { name: "Express.js", icon: SiExpress },
            { name: "React Native", icon: SiReact },
            { name: "Expo", icon: SiExpo },
            { name: "FastAPI", icon: SiFastapi },
            { name: "EJS", icon: SiEjs },
        ]
    },
    {
        title: "Databases",
        skills: [
            { name: "PostgreSQL", icon: SiPostgresql },
            { name: "MongoDB", icon: SiMongodb },
            { name: "Redis", icon: SiRedis },
            { name: "Supabase", icon: SiSupabase },
            { name: "Firebase", icon: SiFirebase },
            { name: "MySQL", icon: SiMysql },
        ]
    },
    {
        title: "Cloud & DevOps",
        skills: [
            { name: "AWS", icon: SiAmazonwebservices },
            { name: "DigitalOcean", icon: SiDigitalocean },
            { name: "Docker", icon: SiDocker },
            { name: "Kubernetes", icon: SiKubernetes },
            { name: "Terraform", icon: SiTerraform },
            { name: "Jenkins", icon: SiJenkins },
            { name: "GitHub Actions", icon: SiGithubactions },
        ]
    },
    {
        title: "Blockchain",
        skills: [
            { name: "Solidity", icon: SiSolidity },
            { name: "Web3.js", icon: SiWeb3Dotjs },
            { name: "Ethers.js", icon: SiEthers },
            { name: "Foundry", icon: SiEthereum },
            { name: "Polygon Testnet", icon: SiPolygon },
        ]
    },
    {
        title: "Tools & Monitoring",
        skills: [
            { name: "Postman", icon: SiPostman },
            { name: "Prometheus", icon: SiPrometheus },
            { name: "Git", icon: SiGit },
            { name: "Linux", icon: SiLinux },
        ]
    }
];

const Skills = () => {
    return (
        <section className="py-24 bg-white dark:bg-black" id="skills">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-black dark:from-neutral-50 dark:to-neutral-400 tracking-tight">
                        Skills
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
                        Technologies and tools I work with
                    </p>
                </div>

                <div className="flex flex-col gap-10">
                    {skillCategories.map((category, idx) => (
                        <div key={idx} className="flex flex-col gap-4">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill) => (
                                    <motion.div
                                        key={skill.name}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex items-center gap-2 px-4 py-2 bg-transparent border border-gray-300 dark:border-gray-800 rounded-full cursor-default hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors shadow-sm"
                                    >
                                        {skill.icon && <skill.icon className="text-lg text-gray-800 dark:text-gray-300" />}
                                        <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                                            {skill.name}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
