import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaNodeJs, FaGitAlt, FaGithub, FaChevronRight } from "react-icons/fa"
import { IoLogoJavascript, IoSparkles } from "react-icons/io5"
import { SiRedux, SiNextdotjs, SiExpress, SiMongodb, SiVite, SiNpm, SiPostman, SiTailwindcss, SiTypescript } from "react-icons/si"
import { GrMysql } from "react-icons/gr"
import { VscVscode } from "react-icons/vsc"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import useMobile from "@/hooks/use-mobile.js"
import SkillsOrbital from "./skills-orbital"
import SkillsFloating from "./skills-floating"
import { BiLogoTypescript } from "react-icons/bi"

// Skill data structure
const skillsData = [
    {
        category: "Front-end",
        icon: <IoSparkles className="h-5 w-5" />,
        skills: [
            {
                name: "React Js",
                icon: FaReact,
                skill: 90,
                color: "text-cyan-400",
                certificate:
                    "https://res.cloudinary.com/dmuz0dq5b/image/upload/v1727700779/GuviCertification_-_ReactJs_yznldy.png",
            },
            { name: "Tailwind", icon: SiTailwindcss, skill: 90, color: "text-teal-500", certificate: "" },
            {
                name: "HTML",
                icon: FaHtml5,
                skill: 90,
                color: "text-orange-600",
                certificate:
                    "https://res.cloudinary.com/dmuz0dq5b/image/upload/v1727700779/GuviCertification_-_HTML_ingx0m.png",
            },
            {
                name: "CSS",
                icon: FaCss3Alt,
                skill: 95,
                color: "text-blue-500",
                certificate: "https://res.cloudinary.com/dmuz0dq5b/image/upload/v1727700780/GuviCertification_-_CSS_dvlb7m.png",
            },
            {
                name: "JavaScript",
                icon: IoLogoJavascript,
                skill: 80,
                color: "text-yellow-400",
                certificate: "https://res.cloudinary.com/dmuz0dq5b/image/upload/v1727700779/GuviCertification_-_Js_b5kc6b.png",
            },
            {
                name: "Typescript",
                icon: BiLogoTypescript,
                skill: 25,
                color: "text-blue-500",
                certificate: "",
            },

            { name: "Next Js", icon: SiNextdotjs, skill: 40, color: "text-white", certificate: "" },
            { name: "Redux", icon: SiRedux, skill: 72, color: "text-purple-600", certificate: "" },
            {
                name: "Bootstrap",
                icon: FaBootstrap,
                skill: 85,
                color: "text-purple-500",
                certificate:
                    "https://res.cloudinary.com/dmuz0dq5b/image/upload/v1727700779/GuviCertification_-_Bootstrap_lvdwfx.png",
            },

        ],
    },
    {
        category: "Back-end",
        icon: <FaNodeJs className="h-5 w-5" />,
        skills: [
            {
                name: "NodeJs",
                icon: FaNodeJs,
                skill: 85,
                color: "text-green-600",
                certificate:
                    "https://res.cloudinary.com/dmuz0dq5b/image/upload/v1727700779/GuviCertification_-_NodeJs_r0aunb.png",
            },
            { name: "ExpressJs", icon: SiExpress, skill: 80, color: "text-gray-600", certificate: "" },
            {
                name: "MongoDB",
                icon: SiMongodb,
                skill: 85,
                color: "text-green-500",
                certificate:
                    "https://res.cloudinary.com/dmuz0dq5b/image/upload/v1727700779/GuviCertification_Mongodb_ddip9w.png",
            },
            {
                name: "MySQL",
                icon: GrMysql,
                skill: 60,
                color: "text-blue-600",
                certificate:
                    "https://res.cloudinary.com/dmuz0dq5b/image/upload/v1727700779/GuviCertification_-_MySQL_nxa4y0.png",
            },
        ],
    },
    {
        category: "Tools",
        icon: <VscVscode className="h-5 w-5" />,
        skills: [
            { name: "VsCode", icon: VscVscode, skill: 90, color: "text-blue-500", certificate: "" },
            { name: "ViteJs", icon: SiVite, skill: 75, color: "text-purple-400", certificate: "" },
            { name: "Git", icon: FaGitAlt, skill: 85, color: "text-orange-500", certificate: "" },
            { name: "GitHub", icon: FaGithub, skill: 90, color: "text-gray-800", certificate: "" },
            { name: "NPM", icon: SiNpm, skill: 60, color: "text-red-500", certificate: "" },
            { name: "Postman", icon: SiPostman, skill: 90, color: "text-orange-500", certificate: "" },
        ],
    },
]

// Flatten skills for visualization
const allSkills = skillsData.flatMap(category =>
    category.skills.map(skill => ({
        ...skill,
        category: category.category
    }))
)

export default function SkillsShowcase() {
    const [selectedSkill, setSelectedSkill] = useState(null)
    const [visualizationType, setVisualizationType] = useState("cards") // cards, orbital, floating
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    })

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
    const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100])

    console.log("Selected Skill", selectedSkill);


    return (
        <section
            ref={containerRef}
            className="relative py-24 overflow-hidden bg-secondary "
            id="skills"
        >
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5"></div>

            <motion.div style={{ opacity, y }} className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <Badge
                            variant="outline"
                            className="mb-3 text-emerald-400 border-emerald-400/30 bg-emerald-400/10 px-3 py-1"
                        >
                            My Expertise
                        </Badge>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Skills & Technologies</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto mb-6">
                            A showcase of my technical skills and proficiency levels across various technologies and tools
                        </p>

                        <div className="hidden flex flex-wrap justify-center gap-2 mb-8">
                            <Button
                                variant={visualizationType === "cards" ? "default" : "outline"}
                                onClick={() => setVisualizationType("cards")}
                                className={visualizationType !== "cards" ? "bg-slate-800 border-slate-700 hover:bg-slate-700 text-white" : ""}
                            >
                                Card View
                            </Button>
                            <Button
                                variant={visualizationType === "orbital" ? "default" : "outline"}
                                onClick={() => setVisualizationType("orbital")}
                                className={visualizationType !== "orbital" ? "bg-slate-800 border-slate-700 hover:bg-slate-700 text-white" : ""}
                            >
                                Orbital View
                            </Button>
                            <Button
                                variant={visualizationType === "floating" ? "default" : "outline"}
                                onClick={() => setVisualizationType("floating")}
                                className={visualizationType !== "floating" ? "bg-slate-800 border-slate-700 hover:bg-slate-700 text-white" : ""}
                            >
                                Floating View
                            </Button>
                        </div>
                    </motion.div>
                </div>

                {visualizationType === "cards" && (
                    <Tabs defaultValue="Front-end" className="w-full max-w-4xl mx-auto">
                        <div className="flex justify-center mb-8">
                            <TabsList className="bg-slate-800/50 backdrop-blur-sm border border-slate-700">
                                {skillsData.map((category) => (
                                    <TabsTrigger
                                        key={category.category}
                                        value={category.category}
                                        className="data-[state=active]:bg-slate-700 data-[state=active]:text-white"
                                    >
                                        <span className="flex items-center gap-2">
                                            {category.icon}
                                            {category.category}
                                        </span>
                                    </TabsTrigger>
                                ))}
                            </TabsList>
                        </div>

                        {skillsData.map((category) => (
                            <TabsContent key={category.category} value={category.category} className="mt-0">
                                <SkillsGrid skills={category.skills} setSelectedSkill={setSelectedSkill} />
                            </TabsContent>
                        ))}
                    </Tabs>
                )}

                {/* {visualizationType === "orbital" && <SkillsOrbital skills={allSkills} setSelectedSkill={setSelectedSkill} />}
        
        {visualizationType === "floating" && <SkillsFloating skills={allSkills} setSelectedSkill={setSelectedSkill} />} */}

                <SkillCertificateDialog selectedSkill={selectedSkill} setSelectedSkill={setSelectedSkill} />
            </motion.div>

            <SkillsOrbs />
        </section>
    )
}

function SkillsGrid({ skills, setSelectedSkill }) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {skills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} setSelectedSkill={setSelectedSkill} />
            ))}
        </div>
    )
}

function SkillCard({ skill, index, setSelectedSkill }) {
    const cardRef = useRef(null)
    const isInView = useInView(cardRef, { once: true, amount: 0.3 })

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
            }}
            whileHover={{
                y: -8,
                transition: { duration: 0.2 },
            }}
            className="group"
        >
            <div className="relative bg-slate-800/70 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 h-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800/0 to-slate-900/80 z-0"></div>

                {/* Skill content */}
                <div className="relative z-10 flex flex-col h-full">
                    <div className="mb-4 flex justify-between items-start">
                        <div className={cn("text-3xl md:text-4xl", skill.color)}>
                            <skill.icon />
                        </div>

                        {skill.certificate && (
                            <button
                                onClick={() => setSelectedSkill(skill)}
                                className="text-xs text-slate-400 hover:text-emerald-400 transition-colors"
                            >
                                <Badge variant="outline" className="text-xs px-2 py-0 h-5 border-slate-700 bg-slate-800/50">
                                    <span className="flex items-center gap-1">
                                        Certificate
                                        <FaChevronRight className="h-2 w-2" />
                                    </span>
                                </Badge>
                            </button>
                        )}
                    </div>

                    <h3 className="text-white font-medium mb-2">{skill.name}</h3>

                    <div className="mt-auto">
                        <div className="flex justify-between text-xs text-slate-400 mb-1">
                            {/* <span>Proficiency</span> */}
                            {/* <span>{skill.skill}%</span> */}
                        </div>
                        <div className="w-full h-1.5 bg-slate-700/50 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={isInView ? { width: `${skill.skill}%` } : {}}
                                transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                                className={cn("h-full rounded-full", getProgressColor(skill.skill))}
                            />
                        </div>
                    </div>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-emerald-500/30 rounded-xl transition-all duration-300"></div>
            </div>
        </motion.div>
    )
}

function SkillCertificateDialog({ selectedSkill, setSelectedSkill }) {
    return (
        <Dialog open={!!selectedSkill} onOpenChange={(open) => !open && setSelectedSkill(null)}>
            <AnimatePresence>
                {selectedSkill && (
                    <DialogContent
                        className="sm:max-w-[700px] p-0 border-slate-700 bg-slate-900"
                    >
                        <DialogHeader className="p-6 pb-0 flex items-center">
                            <DialogTitle className="flex items-center gap-2 text-white">
                                <span className={selectedSkill.color}>
                                    {selectedSkill.icon && <selectedSkill.icon className="inline-block mr-2" />}
                                </span>
                                {selectedSkill.name} Certificate
                            </DialogTitle>
                            <button
                                onClick={() => setSelectedSkill(null)}
                                className="ml-auto text-slate-400 hover:text-emerald-400"
                                aria-label="Close Certificate"
                            >
                                ✕
                            </button>
                        </DialogHeader>

                        <div className="p-6">
                            {selectedSkill.certificate ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-full rounded-lg overflow-hidden border border-slate-700"
                                >
                                    <img
                                        src={selectedSkill.certificate}
                                        alt={`${selectedSkill.name} Certificate`}
                                        loading="lazy"
                                        className="w-full h-auto"
                                    />
                                </motion.div>
                            ) : (
                                <div className="w-full text-center p-10 text-slate-400">
                                    <h3 className="text-xl font-medium">Certificate not yet available</h3>
                                </div>
                            )}
                        </div>
                    </DialogContent>
                )}
            </AnimatePresence>
        </Dialog>
    )
}


function SkillsOrbs() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/10 blur-xl"
                    style={{
                        width: Math.random() * 200 + 100,
                        height: Math.random() * 200 + 100,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        x: [0, Math.random() * 100 - 50],
                        y: [0, Math.random() * 100 - 50],
                    }}
                    transition={{
                        duration: Math.random() * 10 + 10,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    )
}

// Helper function to get progress bar color based on skill level
function getProgressColor(skillLevel) {
    if (skillLevel >= 90) return "bg-emerald-500"
    if (skillLevel >= 80) return "bg-teal-500"
    if (skillLevel >= 70) return "bg-cyan-500"
    if (skillLevel >= 60) return "bg-blue-500"
    return "bg-indigo-500"
}
