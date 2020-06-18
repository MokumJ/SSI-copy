import React from "react"
import styled from "styled-components"
import flagImg from "../images/SSI-LOGO-site-wit.png"
import "../styles/flag.css"

const StyledFlag = styled.div`
  width: auto;
  min-height: 38vh;
  margin-top: 67px;
  background-color: #0ea47c;
  text-align: center;
`

export default function Flag() {
  return (
    <StyledFlag>
      <img src={flagImg} alt="flag-image" className="flag-img"/>
    </StyledFlag>
  )
}
