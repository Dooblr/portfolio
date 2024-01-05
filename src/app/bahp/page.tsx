"use client"

import "../app.scss"
import "../portfolio.scss"

import Image from "next/image"

import { IoArrowBack } from "react-icons/io5"
import { josefin_sans } from "../fonts"

export default function bahp() {
  const imageCount = 6 // Total number of images
  const images = []

  for (let i = 1; i <= imageCount; i++) {
    images.push(require(`../../assets/bahp/${i}.png`))
  }

  return (
    <section className={josefin_sans.className}>
      <button
        className="back-button"
        onClick={() => {
          history.back()
        }}
      >
        <IoArrowBack className="back-arrow-icon" />
      </button>
      <h2>
        Bay Area Health Psychology <br /> Document Manager
      </h2>
      <p className="portfolio-detail-text">
        Bay Area Health Psychology is a psychiatric health firm based out of
        Redwood City, CA. They came to me with this project in an attempt to
        remove the need for paper forms, scanning, faxing, etc.
        <br/><br/>
        Notable features include:
        <ul>
          <li>Authorization with multiple user roles</li>
          <li>Data storage and access</li>
          <li>Periodic email and text reminders to clients and providers</li>
          <li>Complex navigation routes</li>
          <li>Responsive design (works on mobile, tablet, and desktop)</li>
          <li>Complex forms</li>
          <li>HIPAA Compliance and strict data protection</li>
        </ul>
        Technologies used:
        <ul>
          <li>React (with Vite bundler)</li>
          <li>Firebase (authorization, database, hosting, and serverless functions)</li>
          <li>Mantine (UI elements)</li>
          <li>React-Hook-Form (handles complex forms)</li>
          <li>Tanstack Table (table display, sorting, and filtering)</li>
        </ul>
      </p>
      {images.map((img, index) => (
        <Image
          key={index}
          src={img}
          alt={""}
          width={500}
          className="portfolio-item-image"
        />
      ))}
      <button className="return-button" onClick={()=>{history.back()}}>Return to portfolio</button>
    </section>
  )
}
