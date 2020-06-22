import React from "react"
import styled from "styled-components"
import "../styles/bottomflag.css"

const StyledBottomFlag = styled.div`
  width: auto;
  min-height: 45vh;
  border: 2px solid;
  background-color: #444444;
  margin-bottom: 60px;
`

export default function Flag() {
  return (
    <StyledBottomFlag>
      <div className="bf-container">
        <div className="bf-oneline">
          We have the potential and the moral obligation to change business to a
          global force for good.
        </div>
      </div>
    </StyledBottomFlag>
  )
}
