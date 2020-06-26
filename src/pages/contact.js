import React from "react"
import Layout from "../components/Layout"
import indianWoman from "../images/indiase-vrouw-water-scaled.jpg"
import { css } from "emotion"

export default function Contact() {
  return (
    <Layout>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
      </style>
      <div
        className={css`
          display: flex;
          margin: 65px;
          line-height: 2.1em;
          color: #7A7979;
          font-family: "Roboto", open sans;
          font-size: 15px;

          img {
            margin-right: 125px;
          }

        `}
      >
        <div
          className={css`
            margin-right: 150px;
            margin-left: 25px;
          `}
        >
          <p>
            {/**Why is this strong tag not thicker? 
             * How to import widget icons for contact details? 
             * Already installed react-icons.
             * How to delete dependecies? */}
            <strong>Smeets Social Impact</strong> is based near Amsterdam, the
            Netherlands. Curious to meet? Let’s chat in person, on Zoom, phone
            or email. Just send a message and I will get back to you shortly.{" "}
          </p>
          <p>
            {" "}
            Dalweg 21B <br /> 1217 HX Hilversum
          </p>
          <p>
            info@smeetssocialimpact.com <br />
            +31(0)6 48798082 <br />
            Femke Smeets <br />
          </p>
          <p>
            KvK: 77420497 <br />
            VAT/BTW: NL003193353B2a
          </p>
        </div>
        <img
          src={indianWoman}
          alt="indian woman"
          width="299.25px"
          heigth="448.78px"
        />
      </div>
    </Layout>
  )
}
