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
    color?: string;
};

type SkillCategory = {
    title: string;
    skills: SkillType[];
};

const skillCategories: SkillCategory[] = [
    {
        title: "Languages",
        skills: [
            { name: "Python", icon: SiPython, color: "#3776AB" },
            { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
            { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
            { name: "Go", icon: SiGo, color: "#00ADD8" },
            { name: "C/C++", icon: SiCplusplus, color: "#00599C" },
            { name: "SQL", icon: FaDatabase, color: "#336791" },
            { name: "Solidity", icon: SiSolidity, color: "#363636" },
            { name: "Bash", icon: SiGnubash, color: "#4EAA25" },
        ]
    },
    {
        title: "Frameworks & Libraries",
        skills: [
            { name: "React.js", icon: SiReact, color: "#61DAFB" },
            { name: "Next.js", icon: SiNextdotjs },
            { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
            { name: "Express.js", icon: SiExpress },
            { name: "React Native", icon: SiReact, color: "#61DAFB" },
            { name: "Expo", icon: SiExpo },
            { name: "FastAPI", icon: SiFastapi, color: "#009688" },
            { name: "EJS", icon: SiEjs, color: "#B4CA65" },
        ]
    },
    {
        title: "Databases",
        skills: [
            { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
            { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
            { name: "Redis", icon: SiRedis, color: "#DC382D" },
            { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
            { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
            { name: "MySQL", icon: SiMysql, color: "#4479A1" },
        ]
    },
    {
        title: "Cloud & DevOps",
        skills: [
            { name: "AWS", icon: SiAmazonwebservices, color: "#FF9900" },
            { name: "DigitalOcean", icon: SiDigitalocean, color: "#0080FF" },
            { name: "Docker", icon: SiDocker, color: "#2496ED" },
            { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
            { name: "Terraform", icon: SiTerraform, color: "#7B42BC" },
            { name: "Jenkins", icon: SiJenkins, color: "#D24939" },
            { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
        ]
    },
    {
        title: "Blockchain",
        skills: [
            { name: "Solidity", icon: SiSolidity, color: "#363636" },
            { name: "Web3.js", icon: SiWeb3Dotjs, color: "#F16822" },
            { name: "Ethers.js", icon: SiEthers, color: "#2535A0" },
            { name: "Foundry", icon: SiEthereum, color: "#3C3C3D" },
            { name: "Polygon Testnet", icon: SiPolygon, color: "#8247E5" },
        ]
    },
    {
        title: "Tools & Monitoring",
        skills: [
            { name: "Postman", icon: SiPostman, color: "#FF6C37" },
            { name: "Prometheus", icon: SiPrometheus, color: "#E6522C" },
            { name: "Git", icon: SiGit, color: "#F05032" },
            { name: "Linux", icon: SiLinux, color: "#FCC624" },
        ]
    }
];

const Skills = () => {
    return (
        <section className="py-8 md:py-24 bg-white dark:bg-black" id="skills">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-3xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-black dark:from-neutral-50 dark:to-neutral-400 tracking-tight">
                        Skills
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
                        Technologies and tools I work with
                    </p>
                </div>

                <div className="flex flex-col gap-6 md:gap-10">
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
                                        {skill.icon && <skill.icon className={`text-lg ${skill.color ? '' : 'text-gray-800 dark:text-gray-300'}`} style={skill.color ? { color: skill.color } : {}} />}
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
