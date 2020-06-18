import React from 'react';
import styled from 'styled-components';

const StyledBottomFlag = styled.div`
  width: auto;
  min-height: 45vh;
  border: 2px solid;
  background-color: #444444;
  margin-bottom: 60px;
`

export default function Flag() {
  return (
    <StyledBottomFlag>This is a flag</StyledBottomFlag>
  )
}