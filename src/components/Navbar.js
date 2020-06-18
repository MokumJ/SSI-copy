import React from "react"
import styled from "styled-components"
import Link from "gatsby-link"
import logo from "../images/SSI-logo.jpg"
import "../styles/navbar.css"

const StyledNavbar = styled.div`
  border-bottom: 1px solid;
  width: auto;
  text-align: center;
`

const MainNav = styled.div`
  margin-left: auto;
  height: 100%;
  display: block;
  padding-left: 15px;
  vertical-align: top;
  text-align: center;
  display: flex;
`

export default function Navbar() {
  return (
    <StyledNavbar>
      <div className="nav-container">
        <img src={logo} alt="logo" widht="215" height="88" />
        <nav className="menu">
          <ul>
            <li>
              <Link to="/" activeStyle={{color: '#0ea47c'}}>HOME</Link>
            </li>
            <li>
              <Link to="#" activeStyle={{color: '#0ea47c'}}>ABOUT</Link>
            </li>
            <li>
              <Link to="#" activeStyle={{color: '#0ea47c'}}>CONTACT</Link>
            </li>
          </ul>
        </nav>
      </div>
    </StyledNavbar>
  )
}
