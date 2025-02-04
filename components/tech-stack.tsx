"use client"

import { motion } from "framer-motion"
import { FaReact, FaNodeJs, FaPython, FaDocker, FaAws } from "react-icons/fa"
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb, SiPostgresql } from "react-icons/si"

const technologies = [
  { name: "React", icon: FaReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Python", icon: FaPython },
  { name: "TailwindCSS", icon: SiTailwindcss },
  { name: "MongoDB", icon: SiMongodb },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Docker", icon: FaDocker },
  { name: "AWS", icon: FaAws },
]

export default function TechStack() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
      {technologies.map((tech, index) => (
        <motion.div
          key={tech.name}
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.1 }}
        >
          <tech.icon className="text-4xl mb-2" />
          <span className="text-sm">{tech.name}</span>
        </motion.div>
      ))}
    </div>
  )
}

