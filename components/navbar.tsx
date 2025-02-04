"use client"

import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { motion } from "framer-motion"

export function Navbar() {
  return (
    <motion.header
      className="sticky top-4 z-50 w-11/12 mx-auto bg-black text-white rounded-full"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className="container flex h-16 items-center justify-between px-6">
        <Link href="/" className="flex items-center space-x-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black">
            <span className="text-xl font-bold">KS</span>
          </div>
          <span className="text-xl font-bold">Kadiri Success</span>
        </Link>
        <ThemeToggle />
      </div>
    </motion.header>
  )
}

