import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
text-align: center;
padding-top: 30px;
border-top: 1px solid;
`

export default function Footer() {
  return (
    <StyledFooter>This is the footer</StyledFooter>
  )
}