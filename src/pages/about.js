import React from "react"
import Layout from "../components/Layout"
import femke from "../images/femke-portrait.jpg"
import "../styles/about.css"

export default function About() {
  return (
    <Layout>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
      </style>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
      </style>
      <div className="intro-topLevel-wrapper">
        <div className="intro-container">
          <div className="intro-text">
            <h3 className="intro-header">ABOUT SMEETS SOCIAL IMPACT </h3>
            <p>
              I am Femke Smeets. I have spent more than 15 years connecting the
              dots to find solutions for the challenges our societies face
              today. In public service (Ministry of Economic and Foreign
              Affairs), in public private partnership development (Netherlands
              Water Partnership), as Head of Business Development in global
              health (PharmAccess Group), and in business development in the
              impact investing space (Medical Credit Fund) and (fin) tech, I
              have been inspired by ground breaking solutions that are born out
              of unconventional partnerships.
            </p>
            <p>
              This multidisciplinary expertise combined with a go-get mentality
              has enabled me to holistically approach development challenges,
              raise millions of funds for social impact projects, contribute to
              thriving local businesses and (public-private) partnerships, and
              generate global exposure for the causes I have worked for. But
              most importantly, it has allowed me to travel, see innovative
              solutions on the ground and learn, every day, from the inspiring
              people I have met.{" "}
            </p>
            <p>
              I am convinced that our generation can solve today’s global
              challenges if we apply the right mix of business acumen, purpose,
              optimism and an open mind. And that partnerships and technology
              are the enablers for reaching scale and sustainability, and hence
              a lasting change. Now I am eager to use what I have learned to
              help other organizations grow, by making social impact core
              business.{" "}
            </p>
          </div>
          <img src={femke} alt="femke portrait" />
        </div>
      </div>
    </Layout>
  )
}
