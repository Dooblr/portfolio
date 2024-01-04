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
  BiLogoApple,
} from "react-icons/bi"
import { DiSwift } from "react-icons/di"
import { FaAndroid, FaWindows } from "react-icons/fa"
import { SiMacos } from "react-icons/si"

import { SiNextdotjs, SiExpress, SiPrisma } from "react-icons/si"
import { AiFillHtml5, AiFillGithub } from "react-icons/ai"
import Image from "next/image"
import profileImage from "../assets/profile.jpeg"
import { useWindowSize } from "@uidotdev/usehooks"
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

  // Typing text
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

  // Handle click outside modal
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
  }, [])

  const windowSize = useWindowSize()

  return (
    <>
      <section className="welcome-section">
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
            Web Developer
          </motion.h2>

          <DownIcon />
        </div>
      </section>
      <section className="about-section">
        <h2>About</h2>
        <div className={windowSize.width! > 768 ? "flex" : ""}>
          {windowSize.width! < 769 && (
            <Image
              src={profileImage}
              width={300}
              height={300}
              alt="Profile picture"
              className="profile-image"
            />
          )}
          <p style={{ marginRight: "1rem" }}>
            I began coding In 2015, during an audio and MIDI programming class
            at Berklee College of Music. <br />
            <br /> After graduating and moving to San Luis Obispo, California, I
            taught myself application development and within 3 months ported a
            proprietary Windows application to iOS and Android for the team that
            is now QSC's Cinema Division. <br />
            <br /> Since then, I've focused on honing my mobile and web
            application development skills and currently work as a freelance
            developer for local businesses and online clients in Talent, Oregon.{" "}
            <br />
            <br /> When I'm not behind a keyboard, I'm hanging out with my
            girlfriend Rosie and my dog Koji out in nature or a music festival!
            Click below to inquire about your project, pricing, or open
            developer position.
          </p>
          {windowSize.width! > 768 && (
            <Image
              src={profileImage}
              width={300}
              height={300}
              alt="Profile picture"
              className="profile-image"
              style={{ marginTop: "1.5rem" }}
            />
          )}
        </div>
      </section>
      <section className="projects-section">
        <h2>Projects</h2>

        <div className="projects-grid">
          <div className="projects-item">
            <div className="image-dummy"></div>
            <p>
              Bay Area Health Psychology <br /> Document Manager
            </p>
          </div>
          <div className="projects-item"></div>
          <div className="projects-item"></div>
          <div className="projects-item"></div>
          <div className="projects-item"></div>
          <div className="projects-item"></div>
        </div>
      </section>
      <section>
        <h2>Skills</h2>
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
          {/* <div className="skill-container">
            <BiLogoPostgresql className="skill-logo" />
            Postgres
          </div> */}
          {/* <div className="skill-container">
            <SiPrisma className="skill-logo" />
            Prisma
          </div> */}
          <div className="skill-container">
            <BiLogoFirebase className="skill-logo" />
            Firebase
          </div>
          <div className="skill-container">
            <AiFillGithub className="skill-logo" />
            Github
          </div>
          <div className="skill-container">
            <DiSwift className="skill-logo" />
            Swift
          </div>

          <div className="skill-container">
            <BiLogoApple className="skill-logo" />
            iOS
          </div>

          <div className="skill-container">
            <FaAndroid className="skill-logo" />
            Android
          </div>
          <div className="skill-container">
            <SiMacos className="skill-logo" />
            macOS
          </div>
          <div className="skill-container">
            <FaWindows className="skill-logo" />
            Windows
          </div>
        </div>
      </section>
      <section>
        <h2>Contact</h2>
      </section>
    </>
  )
}
