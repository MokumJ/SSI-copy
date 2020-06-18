import React from 'react';
import styled from 'styled-components';

const StyledFlag = styled.div`
  width: auto;
  min-height: 38vh;
  border: 2px solid;
  margin-top: 35px;
`

export default function Flag() {
  return (
    <StyledFlag>This is a flag</StyledFlag>
  )
}