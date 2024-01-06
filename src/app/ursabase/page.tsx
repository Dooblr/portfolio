"use client"

import "../app.scss"
import "../portfolio.scss"

import Image from "next/image"

import { IoArrowBack } from "react-icons/io5"
import { josefin_sans } from "../fonts"

export default function ursabase() {
  const imageCount = 7 // Total number of images
  const images = []

  for (let i = 1; i <= imageCount; i++) {
    images.push(require(`../../assets/ursabase/${i}.png`))
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
      <h2>Ursabase</h2>
      <p className="portfolio-detail-text">
        Ursabase is a custom-made landscaping machinery form manager for
        a local business in Southern Oregon. The app was developed while working
        closely with the owner and supervisor of the business to ensure it met all of
        their needs for documenting issues, images, and parts requirements.
        <br />
        <br />
        Notable features include:
        <ul>
          <li>Authorization</li>
          <li>Data storage and access</li>
          <li>Responsive design (works on mobile, tablet, and desktop)</li>
          <li>Complex forms</li>
        </ul>
        Technologies used:
        <ul>
          <li>React (with Vite bundler)</li>
          <li>
            Firebase (authorization, database, hosting, and serverless
            functions including daily backups)
          </li>
          <li>ChakraUI (UI elements)</li>
          <li>Formik (handles complex forms)</li>
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
      <button
        className="return-button"
        onClick={() => {
          history.back()
        }}
      >
        Return to projects
      </button>
    </section>
  )
}
