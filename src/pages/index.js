import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import Flag from "../components/Flag"
import BottomFlag from "../components/BottomFlag"
import "../global.css"
import "../styles/index.css"
import placeholder from "../images/placeholder-img.png"

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
  margin-right: auto;
  margin-left: auto;
  position: relative;
`
const Box = styled.div`
  width: 940px;
  height: 400px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 15px;
  display: block;
  background-color: #ffffff;
`

export default function Home() {
  return (
    <div>
      <Layout>
        <Flag />
        <Section>
          <Container>
            <Box>
              <div className="box-1">
                <div className="text-container-1">
                  <h3>The future of business is purpose</h3>
                  <div className="elementor-divider">
                    <span className="elementor-divider-seperator">
                      __________
                    </span>
                  </div>
                  <p>
                    The global economy has reached a tipping point. Emerging
                    markets have taken center stage. Mobile technology has
                    transformed business models into super-efficient platforms
                    that empower individuals, regardless of where they live. At
                    the same time, we are increasingly being confronted with the
                    consequences of an exhausted planet and an ever growing
                    divide between the haves and have- nots.{" "}
                  </p>
                  <p>
                    Now more than ever, organizations have the potential to
                    generate a financial return and have a positive impact on
                    society and the environment at the same time. They are two
                    sides of the same coin, for NGOs, funders, and businesses of
                    all sizes and sectors
                  </p>
                </div>
                <img
                  src={placeholder}
                  alt="placeholder"
                  width="376"
                  height="400"
                />
              </div>
            </Box>
            <Box>
              <div className="box-1">
                <div className="text-container-1">
                  <h3>How to flip the switch?</h3>
                  <div className="elementor-divider">
                    <span className="elementor-divider-seperator">
                      __________
                    </span>
                  </div>
                  <p>
                    Smeets Social Impact (SSI) helps organizations grow by
                    making social impact a core business:
                  </p>
                  <div className="ul-container">
                    <ul>
                      <li>
                        SSI helps <strong>businesses</strong> (re)define playing
                        fields & (re)design value propositions to increase
                        social and financial return.{" "}
                      </li>
                      <li>
                        SSI helps <strong>NGOs</strong> develop sustainable
                        business models and shift from executing donor programs
                        to servicing markets.
                      </li>
                      <li>
                        SSI helps <strong>investors</strong> shift from
                        financial return to double bottom line results, at
                        acceptable risk-return metrics.{" "}
                      </li>
                      <li>
                        SSI helps <strong>donors</strong> shift from funding
                        inputs to catalyzing impact, measured against the right
                        set of KPIs.
                      </li>
                    </ul>
                  </div>
                </div>
                <img
                  src={placeholder}
                  alt="placeholder"
                  width="376"
                  height="400"
                />
              </div>
            </Box>
            <Box />
          </Container>
        </Section>
        <BottomFlag />
      </Layout>
    </div>
  )
}
