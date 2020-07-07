import React from "react"
import styled from "styled-components"
import flagImg from "../images/SSI-LOGO-site-wit.png"
import grassImg from "../images/grass_jason.jpg"
import "../styles/flag.css"
import { Parallax } from "react-parallax"

const StyledBannerImg = styled(Parallax)`
  width: auto;
  min-height: 38vh;
  margin-top: 67px;
  text-align: center;
`

export default function Flag() {
  return (
    <StyledBannerImg bgImage={grassImg} bgImageAlt="grass" strength={500}>
      <img src={flagImg} alt="flag" className="flag-img" />
    </StyledBannerImg>
  )
}
