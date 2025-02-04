"use client"

import Image from "next/image"
import Link from "next/link"
import { Twitter, Linkedin, Github, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProjectCard from "../components/project-card"
import TechStack from "../components/tech-stack"
import ContactForm from "../components/contact-form"
import { Navbar } from "@/components/navbar"
import { projects } from "../data/project"
import { motion } from "framer-motion"
import { AboutModal } from "../components/about-modal"
import { Toaster } from "@/components/ui/toaster"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-8">
          {/* Left Sidebar */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Profile Header */}
            <div className="flex items-center gap-4">
              <Image
                src="https://res.cloudinary.com/your-cloud-name/image/upload/v1234567890/your-image-path"
                alt="Profile"
                width={80}
                height={80}
                className="rounded-full"
              />
              <div>
                <h1 className="text-3xl font-bold">Kadiri Success</h1>
                <p className="text-muted-foreground">FULL STACK DEVELOPER</p>
              </div>
            </div>

            {/* Bio */}
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                I specialize in building robust and scalable web applications. With a passion for clean code and
                user-centric design, I create innovative solutions that bridge the gap between complex backend systems
                and intuitive frontend experiences.
              </p>
              <AboutModal />
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" asChild>
                  <Link href="#">
                    <Github className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <Link href="#">
                    <Twitter className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <Link href="#">
                    <Linkedin className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <Link href="#">
                    <Mail className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <div className="space-y-12">
            {/* Projects Section */}
            <motion.section
              id="projects"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold">My Projects</h2>
                <Button variant="ghost" size="sm">
                  View all <span className="ml-2">→</span>
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <ProjectCard {...project} />
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Stack Section */}
            <motion.section
              id="stack"
              className="bg-primary text-primary-foreground rounded-xl p-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold mb-6">My Stack</h2>
              <TechStack />
            </motion.section>

            {/* Contact Section */}
            <motion.section
              id="contact"
              className="bg-muted rounded-xl p-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
              <ContactForm />
            </motion.section>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 py-6 bg-muted">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2024 Kadiri Success. All rights reserved.</p>
          <div className="mt-2">
            <Link href="#" className="hover:text-foreground mr-4">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-foreground">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
      <Toaster />
    </div>
  )
}

