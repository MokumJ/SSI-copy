import React from "react"
import styled from "styled-components"
import "../styles/bottomflag.css"
import femke from "../images/Femke.jpg"

const StyledBottomFlag = styled.div`
  width: auto;
  background-color: #3a3a3a;
  margin-bottom: 60px;
`

export default function Flag() {
  return (
    <StyledBottomFlag>
      <div className="bf-container">
        <div className="bf-text-container">
          <div className="bf-oneline">
            We have the potential and the moral obligation to change business to
            a global force for good.
          </div>
          <div className="femke">
            <img src={femke} width="70px" height="70px" />
          </div>
          <div className="femke-name">
            <p>Femke Smeets</p>
          </div>
        </div>
      </div>
    </StyledBottomFlag>
  )
}
