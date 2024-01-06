"use client"

import "../app.scss"
import "../portfolio.scss"

import Image from "next/image"

import { IoArrowBack } from "react-icons/io5"
import { josefin_sans } from "../fonts"

export default function discolist() {
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
      <h2>DiscoList</h2>
      <p className="portfolio-detail-text">
        DiscoList is an application with which a user can enter the name of a
        record label, find a list of songs released by the label, then create a
        Spotify playlist that is added to their account. It combines the usage
        of the Discogs (a music database) and Spotify API to achieve this. See
        the video demonstration below.
        <br />
        <br />
        Notable features include:
        <ul>
          <li>Authorization</li>
          <li>Multiple APIs</li>
          <li>Responsive design (works on mobile, tablet, and desktop)</li>
        </ul>
        Technologies used:
        <ul>
          <li>React</li>
          <li>Bootstrap (UI elements)</li>
          <li>REST APIs</li>
        </ul>
      </p>

      <iframe
        width="420"
        height="315"
        src="https://www.youtube.com/watch?v=grQ_ANiDf3Y"
        style={{marginBottom:'2rem'}}
      ></iframe>

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
