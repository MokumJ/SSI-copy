import React from "react"
import styled from "styled-components";
import Layout from "../components/Layout";
import Flag from "../components/Flag";

const Section = styled.div`
background-color: #eeeeee;
padding: 90px 0px 100px 0px;
position: relative;
display: block;
line-height: 1.85714285714286;
-webkit-font-smoothing: antialiased;
`

const Container = styled.div`
  display: block;
  display: flex;
  margin-right: auto;
  margin-left: auto;
  position: relative;
  display: flex;
`
const Box = styled.div`
  width: 940px;
  height: 400px;
  border: 2px solid;
  margin-right: auto;
  margin-left: auto;
`

export default function Home() {
  return <div>
    <Layout>
    <Flag />
    <Section >
      <Container>
        <Box />
      </Container>
    </Section>
    </Layout>
    </div>
}
