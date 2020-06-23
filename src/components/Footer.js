import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
text-align: center;
padding-bottom: 70px;
padding-top: 35px;
border-top: 1px solid;
background-color: #3a3a3a;
color: #fff;
`

export default function Footer() {
  return (
    <StyledFooter>© 2020 Smeets Social Impact | Disclaimer</StyledFooter>
  )
}