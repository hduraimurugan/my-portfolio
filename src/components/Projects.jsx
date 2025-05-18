import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import zamazonImg from '../assets/zamazon.png'
import chessApiImg from '../assets/chessApi.png'
import routerDomImg from '../assets/routerDom.png'
import shipKartImg from '../assets/shipKart.png'
import LBMSImg from '../assets/LBMS.png'
import blogApp from '../assets/blogApp.png'
import reactImg from "../assets/reactQuiz.png"
import netflixImg from "../assets/netflix.png"
import UrlShortner from '../assets/URLShortner.png'
import JobPortal from '../assets/JobPortal.png'
import TwitterImg from '../assets/Twitter.png'
import ChatAppImg from '../assets/chatApp.png'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import Autoplay from "embla-carousel-autoplay"

const Projects = ({ RevealOnScroll }) => {
  const [activeCategory, setActiveCategory] = useState("all")

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      imgSrc: blogApp,
      title: "Blog App Fullstack",
      description: "InsightsHub - A full-stack blog application with rich content management features",
      liveLink: "https://blog-app-peach-xi.vercel.app",
      codeLink: "https://github.com/hduraimurugan/blog-FE",
      codesUsed: ["React Js", "Context API", "NodeJs", "MongoDB", "AWS S3"],
      category: "fullstack",
    },
    {
      imgSrc: JobPortal,
      title: "College Placement Portal",
      description: "A comprehensive MERN stack platform connecting students with job opportunities",
      liveLink: "https://cpp-frontend.vercel.app/",
      codeLink: "https://github.com/hduraimurugan/cpp_frontend/",
      codesUsed: ["React Js", "Redux", "NodeJs", "MongoDB"],
      category: "fullstack",
    },
    {
      imgSrc: TwitterImg,
      title: "X Clone App",
      description: "A feature-rich social media platform clone built with MERN stack",
      liveLink: "https://twitter-clone-app-fgba.onrender.com/",
      codeLink: "https://github.com/hduraimurugan/twitter-clone-app",
      codesUsed: ["React Js", "NodeJs", "MongoDB", "React Query"],
      category: "fullstack",
    },
    {
      imgSrc: ChatAppImg,
      title: "Chat App",
      description: "Real-time messaging application with Socket.io for instant communication",
      liveLink: "https://chat-app-jvvo.onrender.com/",
      codeLink: "https://github.com/hduraimurugan/chat-app",
      codesUsed: ["React Js", "NodeJs", "MongoDB", "Zustand", "Socket.io"],
      category: "fullstack",
    },
    {
      imgSrc: netflixImg,
      title: "Netflix Clone App",
      description: "Streaming platform clone with dynamic content and user authentication",
      liveLink: "https://dubbflix-clone-for-edu-purpose-durai.vercel.app/",
      codeLink: "https://github.com/hduraimurugan/netflix-clone",
      codesUsed: ["React Js", "Firebase"],
      category: "frontend",
    },
    {
      imgSrc: UrlShortner,
      title: "URL Shortener",
      description: "URL shortening service with user authentication and analytics",
      liveLink: "https://url-shortene.vercel.app//",
      codeLink: "https://github.com/hduraimurugan/Login_URL_Shortener_FE",
      codesUsed: ["React Js", "Node Js", "Mongo DB", "Express Js"],
      category: "fullstack",
    },
    {
      imgSrc: reactImg,
      title: "React Quiz App",
      description: "Interactive quiz application with dynamic questions and scoring",
      liveLink: "https://quiz-context-api.vercel.app/",
      codeLink: "https://github.com/hduraimurugan/quiz-ContextAPI-frontend",
      codesUsed: ["React Js", "Context API"],
      category: "frontend",
    },
    {
      imgSrc: shipKartImg,
      title: "Ship-Kart",
      description: "E-commerce platform with shopping cart functionality and product catalog",
      liveLink: "https://cart-context-api-pied.vercel.app/",
      codeLink: "https://github.com/hduraimurugan/cart-contextAPI",
      codesUsed: ["React Js", "Context API", "Tailwind CSS"],
      category: "frontend",
    },
    {
      imgSrc: chessApiImg,
      title: "Chess Leaderboard",
      description: "Interactive leaderboard for chess players with real-time rankings",
      liveLink: "https://ornate-nasturtium-89e860.netlify.app/",
      codeLink: "https://github.com/hduraimurugan/chess-leaderboard",
      codesUsed: ["HTML", "CSS", "Javascript", "Bootstrap"],
      category: "frontend",
    },
  ]

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "fullstack", label: "Full Stack" },
    { id: "frontend", label: "Frontend" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  return (
    <section className="bg-secondary py-24" id="projects">
      <RevealOnScroll>
        <div className="container mx-auto px-10 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-500">
                  Featured Projects
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto mb-6"></div>
              <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto">
                Explore my portfolio of web applications showcasing my skills in full-stack development
              </p>
            </motion.div>
          </div>

          <Tabs defaultValue="all" className="mb-12" onValueChange={setActiveCategory}>
            <div className="flex justify-center">
              <TabsList className="bg-slate-800/50 backdrop-blur-sm">
                {categories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id} className="text-sm md:text-emerald-400">
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <TabsContent value={activeCategory} className="mt-8">
              <div ref={ref}>
                {inView ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: index * 0.1 }}
                        className="h-full"
                      >
                        <Card className="overflow-hidden h-full bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10">
                          <div className="relative overflow-hidden aspect-video">
                            <img
                              src={project.imgSrc || "/placeholder.svg"}
                              alt={project.title}
                              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                              <div className="flex gap-3">
                                <a
                                  href={project.liveLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="bg-emerald-500 hover:bg-emerald-600 text-white p-2 rounded-full transition-all duration-200 hover:scale-110"
                                  aria-label="View live project"
                                >
                                  <ExternalLink size={18} />
                                </a>
                                <a
                                  href={project.codeLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="bg-slate-700 hover:bg-slate-600 text-white p-2 rounded-full transition-all duration-200 hover:scale-110"
                                  aria-label="View source code"
                                >
                                  <Github size={18} />
                                </a>
                              </div>
                            </div>
                          </div>
                          <CardContent className="p-6">
                            <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                            <p className="text-slate-300 mb-4 line-clamp-2">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mt-4">
                              {project.codesUsed.map((tech, idx) => (
                                <Badge
                                  key={idx}
                                  variant="outline"
                                  className="bg-slate-700/50 text-emerald-400 border-slate-600 hover:border-emerald-400"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </CardContent>
                          <CardFooter className="pt-0 px-6 pb-6">
                            <a
                              href={project.liveLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1 text-sm font-medium transition-colors"
                            >
                              View Project <ArrowRight size={16} className="ml-1" />
                            </a>
                          </CardFooter>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="h-96 flex items-center justify-center">
                    <div className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-16">
            <h3 className="text-2xl font-bold text-white text-center mb-8">Featured Highlights</h3>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 3000,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent>
                {projects.slice(0, 5).map((project, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                    <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 overflow-hidden">
                      <div className="relative aspect-video overflow-hidden">
                        <img
                          src={project.imgSrc || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent flex flex-col justify-end p-6">
                          <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
                          <div className="flex gap-2">
                            <a
                              href={project.liveLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-emerald-500 hover:bg-emerald-600 text-white px-3 py-1 rounded-md text-sm transition-colors"
                            >
                              Live Demo
                            </a>
                            <a
                              href={project.codeLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-slate-700 hover:bg-slate-600 text-white px-3 py-1 rounded-md text-sm transition-colors"
                            >
                              Code
                            </a>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-10 gap-2">
                <CarouselPrevious className="static bg-slate-800 hover:bg-slate-700 border-slate-700" />
                <CarouselNext className="static bg-slate-800 hover:bg-slate-700 border-slate-700" />
              </div>
            </Carousel>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  )
}

export default Projects
