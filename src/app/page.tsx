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
import { FaAndroid, FaWindows, FaPaw, FaWifi } from "react-icons/fa"
import { SiMacos } from "react-icons/si"
import { TbVinyl } from "react-icons/tb"

import { SiNextdotjs, SiExpress, SiPrisma } from "react-icons/si"
import { AiFillHtml5, AiFillGithub } from "react-icons/ai"
import { GiMineExplosion, GiMermaid } from "react-icons/gi"

import Image from "next/image"
import profileImage from "../assets/profile.jpeg"
import bahpImage from "../assets/bahp.svg"
import { useWindowSize } from "@uidotdev/usehooks"
import "../icons/icons.scss"
import "./app.scss"
import "./contact.scss"
import { josefin_sans } from "./fonts"

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

  const submitContactForm = (event: any) => {
    event.preventDefault() // Prevent the default form submission behavior

    // Your form handling logic goes here
    // For example, validate inputs, send data to server, etc.
  }

  // Handler for the custom submit button click
  const handleSubmit = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.preventDefault() // Prevent the default click behavior

    // Find and click the real submit button
    const submitButton = document.getElementById(
      "real-submit-button"
    ) as HTMLButtonElement
    submitButton.click()
  }

  return (
    <div className={josefin_sans.className}>
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
            {/* I began coding In 2015, during an audio and MIDI programming class
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
            developer position. */}
            Hey there! My name is Dan. I'm a Web Developer based out of Southern
            Oregon and I love to design and build websites and applications.
            <br />
            <br />
            My interest for development began in college class in 2015, where I
            built audio and MIDI applications using the C language, and was
            immediately hooked.
            <br />
            <br />
            After graduating, I worked as a QA engineer and mobile developer at
            QSC's Cinema department until 2019. After a career shift for a few
            years, I started focusing on web development in 2022, and began
            building websites and applications using React.
            <br />
            <br />
            My goal is twofold-- to build exceptional products for clients and
            secure a position as a developer doing the same. If you are seeking
            a developer with both an eye for design and a mind for code, please
            contact me using the form at the bottom of the page.
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

      {/* Projects ======================================================= */}
      <section className="projects-section">
        <h2>Projects</h2>

        <div className="projects-grid">
          <div
            className="projects-item"
            onClick={() => {
              window.location.pathname = "/bahp"
            }}
          >
            <Image
              src={bahpImage}
              alt={"Bay Area Health Psychology Document Manager"}
              className="project-image"
              id="bahp-image"
            />
            <div className="project-label-spacer"></div>
            <p style={{ lineHeight: "1rem" }}>
              Bay Area Health Psychology <br /> Document Manager
            </p>
          </div>

          <div
            className="projects-item"
            onClick={() => {
              window.location.pathname = "/ursabase"
            }}
          >
            <FaPaw
              className="project-image project-icon"
              color="rgb(16, 191, 174)"
            />
            <div className="project-label-spacer"></div>
            <p>Ursabase</p>
          </div>

          <div
            className="projects-item"
            onClick={() => {
              window.location.pathname = "/discolist"
            }}
          >
            <TbVinyl className="project-image project-icon" color="black" />
            <div className="project-label-spacer"></div>
            <p>DiscoList</p>
          </div>

          <div className="projects-item">
            <GiMineExplosion
              className="project-image project-icon"
              color="orange"
            />
            <div className="project-label-spacer"></div>
            <p>ReactSweeper</p>
          </div>

          <div className="projects-item">
            <GiMermaid className="project-image project-icon" color="blue" />
            <div className="project-label-spacer"></div>
            <p>Mermaid Morro Bay</p>
          </div>

          <div className="projects-item">
            <FaWifi className="project-image project-icon" color="black" />
            <div className="project-label-spacer"></div>
            <p>Ethernet Device Discoverer (iOS)</p>
          </div>
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
            Git
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

        <form onSubmit={submitContactForm} id="contact-form" style={{maxWidth:'90vw'}}>
          <div className="field-container">
            <label>Name</label>
            <input
              id="name"
              name="name"
              className={josefin_sans.className}
              required
            />
          </div>

          <div className="field-container">
            <label>Email</label>
            <input
              id="email"
              name="email"
              className={josefin_sans.className}
              required
            />
          </div>

          <div className="field-container">
            <label>Phone (optional)</label>
            <input
              id="email"
              name="email"
              type="tel"
              className={josefin_sans.className}
            />
          </div>

          {/* Real submit button, hidden via CSS */}
          <button
            type="submit"
            id="real-submit-button"
            style={{ display: "none" }}
          >
            Submit
          </button>

          {/* Custom submit button */}
          <div
            id="contact-submit"
            className={josefin_sans.className}
            onClick={handleSubmit}
          >
            <p>Submit</p>
          </div>
          {/* <button type="submit" className={josefin_sans.className} id="contact-submit">Submit</button> */}
        </form>
      </section>
    </div>
  )
}
