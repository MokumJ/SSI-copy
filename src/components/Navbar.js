import React from 'react';
import styled from 'styled-components';

const StyledNavbar = styled.div`
border-bottom: 1px solid;
width: auto;
text-align: center;
padding-bottom: 50px;
`

export default function Navbar() {
  return (
    <StyledNavbar>this is the navbar</StyledNavbar>
  )
}