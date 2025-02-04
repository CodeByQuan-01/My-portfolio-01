"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function AboutModal() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="rounded-full">
          More about Me
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>About Kadiri Success</DialogTitle>
          <DialogDescription>
            Full Stack Developer with a passion for creating innovative web solutions.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <p>
            With over 5 years of experience in web development, I specialize in building scalable and efficient
            applications using modern technologies.
          </p>
          <p>My expertise includes:</p>
          <ul className="list-disc list-inside">
            <li>Front-end development with React and Next.js</li>
            <li>Back-end development with Node.js and Python</li>
            <li>Database design and management</li>
            <li>Cloud infrastructure and DevOps</li>
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  )
}

