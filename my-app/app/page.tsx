"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Database,
  Server,
  Smartphone,
  ChevronDown,
  Menu,
  X,
  Send,
  Blocks,
  ArrowRight,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Vercel-style Background Grid
const BackgroundGrid = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/[0.02] to-transparent" />
  </div>
)

// Vercel-style Floating Orbs
const FloatingOrb = ({ delay = 0, duration = 20, size = 400, left = "10%", top = "20%" }) => (
  <div
    className="absolute pointer-events-none animate-float-vercel"
    style={{
      left,
      top,
      animationDelay: `${delay}s`,
      animationDuration: `${duration}s`,
    }}
  >
    <div
      className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
      style={{ width: size, height: size }}
    />
  </div>
)

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)

      const sections = ["home", "about", "skills", "projects", "experience", "contact"]
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  const skills = {
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    backend: ["Node.js","Express","REST APIs","JWT","WebSockets" ],
    database: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "MySQL"],
    blockchain: ["Solidity", "Web3.js", "Ethers.js", "Hardhat", "IPFS", "Smart Contracts"],
    tools: ["Docker", "AWS", "Vercel", "Git", "GCP"],
  }

  const projects = [
    {
      title: "DevTube",
      description:
        "A full-stack video-sharing platform built with real-time chat and Google OAuth login. Users can upload, play, like, and comment on videos, all managed via scalable REST APIs and WebSocket-based live chat.",
      tech: ["React", "Node.js", "MongoDB", "Socket.io", "Google OAuth"],
     image: "/images/dev.png",
      github: "https://github.com/Lakshya2099/DankTube",
      live: "#",
    },
    {
      title: "Token Marketplace",
      description:
        "A decentralized token launchpad simulating secure token creation and MetaMask-based wallet authentication. Users can launch and interact with tokens through an intuitive UI and Web3 integration.",
      tech: ["Solidity", "Web3.js", "React", "Node.js"],
      image: "/images/pump.jpeg",
      github: "https://github.com/Lakshya2099/pump.fun",
      live: "#",
    },
    {
      title: "Decentralized NFT Chat Platform",
      description:
        "A real-time communication platform gated by NFT ownership. Only verified users with specific NFTs can access exclusive chat and trading channels, ensuring decentralized and secure community interaction.",
      tech: ["Solidity", "Ethers.js", "Hardhat", "Node.js","Socket.io"],
      image: "/images/dapp.png",
      github: "https://github.com/Lakshya2099/Dapp",
      live: "#",
    },
    {
      title: "Java Web Server",
      description:
        "A functional HTTP server built from scratch using Java socket programming. Supports both single-threaded and multithreaded request handling, with manual HTTP parsing and static content serving.",
      tech: ["Java", "Multithreading", "Sockets"],
      image: "/images/server.png",
      github: "https://github.com/Lakshya2099/Server",
      live: "#",
    },
    {
      title: "CTF-Box",
      description:
        "ctf-box provides a customizable starter kit for building Capture The Flag (CTF) platforms. It is designed with performance, scalability, and simplicity in mind, making it suitable for cybersecurity enthusiasts, educators, and CTF organizers.",
      tech: ["Next.js", "Typescript"],
      image: "/images/ctf.png",
      github: "https://github.com/Lakshya2099/ctf-box",
      live: "https://v0-cybersecurity-web-app.vercel.app/",
    },
    {
      title: "VideoStream",
      description:
        "VideoChat is a web application that enables real-time video communication between users. Built with Node.js and Express, it leverages WebRTC technology to facilitate peer-to-peer video conferencing directly within web browsers",
      tech: ["Node.js", "Web Socket", "React"],
      image: "/images/chatterlive.png",
      github: "https://github.com/Lakshya2099/videochat",
      live: "#",
    },
  ]

  const experience = [
    {
      title: "Jr. Secretary",
      company: "OWASP TCET",
      period: "2024 - Jan 2025",
      description:
        "Represented OWASP TCET as Junior Secretary and led multiple technical initiatives on campus. Organized cybersecurity workshops and capture-the-flag (CTF) events to promote student engagement.",
    },
    {
      title: "Full Stack Developer",
      company: "Mars Ignition",
      period: "May 2025 - July 2025",
      description:
        "Built secure backend services using Node.js and Express.js, implementing JWT authentication, role-based access control, and RESTful APIs.",
    },
  ]

  return (
    <div className="min-h-screen bg-white relative">
      {/* Vercel-style Background */}
      <BackgroundGrid />

      {/* Floating Orbs */}
      <FloatingOrb delay={0} duration={25} size={600} left="-10%" top="-10%" />
      <FloatingOrb delay={8} duration={30} size={400} left="70%" top="20%" />
      <FloatingOrb delay={15} duration={35} size={500} left="20%" top="60%" />

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrollY > 50 ? "bg-white/80 backdrop-blur-xl border-b border-gray-200" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-black">{"<Dev />"}</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {["home", "about", "skills", "projects", "experience", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-all duration-300 text-sm font-medium ${
                    activeSection === item ? "text-black" : "text-gray-600 hover:text-black"
                  }`}
                >
                  {item}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-black text-white hover:bg-gray-800 transition-all duration-300 rounded-full px-6"
              >
                Contact
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-black" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200">
            <div className="px-4 py-4 space-y-2">
              {["home", "about", "skills", "projects", "experience", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-3 py-2 text-gray-600 hover:text-black capitalize transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-600 mb-8 animate-slide-up">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              Available for new opportunities
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-black mb-6 tracking-tight">
              Digital 
              <br />
              <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
                Forge
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Full-Stack & Blockchain Developer
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => scrollToSection("projects")}
                className="bg-black text-white hover:bg-gray-800 transition-all duration-300 px-8 py-4 text-lg rounded-full group"
              >
                View My Work
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="border-2 border-gray-300 text-gray-700 hover:border-black hover:text-black px-8 py-4 text-lg rounded-full transition-all duration-300"
              >
                Get In Touch
              </Button>
            </div>
          </div>
          <div className="mt-20 animate-bounce-slow">
            <ChevronDown className="mx-auto text-gray-400" size={32} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-black mb-6">About Me</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate about creating digital solutions that make a difference
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                Hey! I’m Lakshya Singh, a Full-Stack Developer and Blockchain enthusiast based in India. I specialize in building modern web applications using the MERN stack, and I’m deeply interested in the intersection of secure web systems and decentralized technologies.

Over the past year, I’ve worked on multiple real-world projects—from token launchpads to secure document systems—focusing on performance, security, and scalability. I'm also exploring DevOps and smart contract development to bridge the gap between traditional and decentralized infrastructures.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                When I’m not coding, I enjoy exploring tech communities, writing about development on X (Twitter), and staying updated with emerging trends in blockchain and cybersecurity.
              </p>
              <div className="flex space-x-6">
                <Link
                  href="https://github.com/Lakshya2099"
                  className="text-gray-600 hover:text-black transition-all duration-300 transform hover:scale-110"
                >
                  <Github size={28} />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/singhlakshya/"
                  className="text-gray-600 hover:text-black transition-all duration-300 transform hover:scale-110"
                >
                  <Linkedin size={28} />
                
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                <Image
                  src="/images/pfp.png"
                  alt="Profile"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-black mb-6">Skills & Technologies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tools and technologies I use to bring ideas to life
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            <Card className="group bg-white border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader className="pb-4">
                <Code
                  className="text-blue-600 mb-3 group-hover:scale-110 transition-transform duration-300"
                  size={32}
                />
                <CardTitle className="text-black text-lg">Frontend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.frontend.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="group bg-white border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader className="pb-4">
                <Server
                  className="text-green-600 mb-3 group-hover:scale-110 transition-transform duration-300"
                  size={32}
                />
                <CardTitle className="text-black text-lg">Backend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.backend.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-green-50 text-green-700 hover:bg-green-100 transition-colors text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="group bg-white border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader className="pb-4">
                <Database
                  className="text-purple-600 mb-3 group-hover:scale-110 transition-transform duration-300"
                  size={32}
                />
                <CardTitle className="text-black text-lg">Database</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.database.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-purple-50 text-purple-700 hover:bg-purple-100 transition-colors text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="group bg-white border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader className="pb-4">
                <Blocks
                  className="text-orange-600 mb-3 group-hover:scale-110 transition-transform duration-300"
                  size={32}
                />
                <CardTitle className="text-black text-lg">Blockchain</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.blockchain.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-orange-50 text-orange-700 hover:bg-orange-100 transition-colors text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="group bg-white border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader className="pb-4">
                <Smartphone
                  className="text-red-600 mb-3 group-hover:scale-110 transition-transform duration-300"
                  size={32}
                />
                <CardTitle className="text-black text-lg">Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-red-50 text-red-700 hover:bg-red-100 transition-colors text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-black mb-6">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">A showcase of my recent work and contributions</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group bg-white border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <Link
                      href={project.github}
                      className="p-2 bg-white/90 rounded-full text-gray-700 hover:text-black transition-colors shadow-lg"
                    >
                      <Github size={16} />
                    </Link>
                    <Link
                      href={project.live}
                      className="p-2 bg-white/90 rounded-full text-gray-700 hover:text-black transition-colors shadow-lg"
                    >
                      <ExternalLink size={16} />
                    </Link>
                  </div>
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-black text-xl group-hover:text-gray-700 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-gray-300 text-gray-600 hover:border-gray-400 hover:text-gray-800 transition-colors text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-black mb-6">Experience</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">My professional journey and key achievements</p>
          </div>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <Card
                key={index}
                className="bg-white border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <CardHeader className="pb-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-black text-xl mb-1">{exp.title}</CardTitle>
                      <CardDescription className="text-gray-600 text-lg font-medium">{exp.company}</CardDescription>
                    </div>
                    <Badge variant="outline" className="border-gray-300 text-gray-600 mt-2 md:mt-0 w-fit">
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-black mb-6">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to work together? Let's discuss your next project
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-black">Let's work together</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm always interested in new opportunities and exciting projects. Whether you have a question or just
                want to say hi, feel free to reach out!
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gray-100 rounded-full">
                    <Mail className="text-gray-600" size={20} />
                  </div>
                  <span className="text-gray-700 text-lg">beyondlakshya@gmail.com</span>
                </div>
                <div className="flex space-x-4">
                  <Link
                    href="https://github.com/Lakshya2099"
                    className="p-3 bg-gray-100 rounded-full text-gray-600 hover:text-black hover:bg-gray-200 transition-all duration-300 transform hover:scale-110"
                  >
                    <Github size={24} />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/singhlakshya/"
                    className="p-3 bg-gray-100 rounded-full text-gray-600 hover:text-black hover:bg-gray-200 transition-all duration-300 transform hover:scale-110"
                  >
                    <Linkedin size={24} />
                  </Link>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-200">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-600">
            © {new Date().getFullYear()} Full Stack | Blockchain Developer.
          </p>
        </div>
      </footer>
    </div>
  )
}
