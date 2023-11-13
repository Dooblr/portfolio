"use client"

import { DownIcon } from "@/icons/icons"
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState, useRef } from "react"
import {
  BiLogoReact,
  BiLogoPostgresql,
  BiLogoFirebase,
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoNodejs,
} from "react-icons/bi"
import { SiNextdotjs, SiExpress, SiPrisma } from "react-icons/si"
import { AiFillHtml5, AiFillGithub } from "react-icons/ai"
import "../icons/icons.scss"
import "./app.scss"
import "./utils.scss"

export default function Home() {
  const [typingHeader, setTypingHeader] = useState("")
  const [isTypingComplete, setIsTypingComplete] = useState(false) // State to track if typing is complete
  const [isModalOpen, setIsModalOpen] = useState(false)
  const headerText = "Dan Feinstein"

  const subheaderAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay: 1.5 },
  }

  useEffect(() => {
    let currentHeaderText = ""
    let i = 0

    const typeLetter = () => {
      if (i < headerText.length) {
        currentHeaderText += headerText[i]
        setTypingHeader(currentHeaderText)
        i++
        setTimeout(typeLetter, 85)
      } else {
        setIsTypingComplete(true) // Set typing complete to true when typing is done
      }
    }

    typeLetter()
  }, [])

  const modalRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsModalOpen(false) // Close the modal when clicked outside
      }
    }

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      // Remove event listener on cleanup
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, []) // Ensure this effect runs only once

  return (
    <>
      <section>
        <div>
          <h1>
            {typingHeader}
            <span
              className={
                isTypingComplete ? "typing-cursor blinking" : "typing-cursor"
              }
            ></span>
          </h1>
          <motion.h2
            initial={subheaderAnimation.initial}
            animate={subheaderAnimation.animate}
            transition={subheaderAnimation.transition}
          >
            Full-Stack Web Developer
          </motion.h2>

          <DownIcon />
        </div>
      </section>
      <section>
        <h2>User to Server, I have it covered.</h2>
        <div className="skills">
          <div className="skill-container">
            <AiFillHtml5 className="skill-logo" />
            HTML
          </div>
          <div className="skill-container">
            <BiLogoCss3 className="skill-logo" />
            CSS
          </div>
          <div className="skill-container">
            <BiLogoJavascript className="skill-logo" />
            JavaScript
          </div>
          <div className="skill-container">
            <BiLogoTypescript className="skill-logo" />
            TypeScript
          </div>
          <div className="skill-container">
            <BiLogoReact className="skill-logo" />
            React
          </div>
          <div className="skill-container">
            <SiNextdotjs className="skill-logo" />
            Next
          </div>
          <div className="skill-container">
            <BiLogoNodejs className="skill-logo" />
            Node
          </div>
          <div className="skill-container">
            <SiExpress className="skill-logo" />
            Express
          </div>
          <div className="skill-container">
            <BiLogoPostgresql className="skill-logo" />
            Postgres
          </div>
          <div className="skill-container">
            <SiPrisma className="skill-logo" />
            Prisma
          </div>
          <div className="skill-container">
            <BiLogoFirebase className="skill-logo" />
            Firebase
          </div>
          <div className="skill-container">
            <AiFillGithub className="skill-logo" />
            Github
          </div>
        </div>
      </section>
      <section className="skills-section">
        {/* Service detail modal */}
        <AnimatePresence>
          {isModalOpen && (
            <>
              <motion.div
                className="modal-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="modal"
                ref={modalRef}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <h3>Web</h3>
              </motion.div>
            </>
          )}
        </AnimatePresence>
        <h1 style={{ marginBlock: "0rem" }}>Services</h1>
        <h4>(Try clicking them)</h4>
        <h3
          className="skill-link"
          onClick={() => {
            setIsModalOpen(true)
          }}
        >
          Apps
        </h3>
        <h3
          className="skill-link"
          onClick={() => {
            setIsModalOpen(true)
          }}
        >
          Mobile
        </h3>
        <h3
          className="skill-link"
          onClick={() => {
            setIsModalOpen(true)
          }}
        >
          Audio
        </h3>
      </section>
    </>
  )
}
