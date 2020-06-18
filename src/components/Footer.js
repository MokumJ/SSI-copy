import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
text-align: center;
padding-bottom: 100px;
border-top: 1px solid;
background-color: #444444;
`

export default function Footer() {
  return (
    <StyledFooter>This is the footer</StyledFooter>
  )
}