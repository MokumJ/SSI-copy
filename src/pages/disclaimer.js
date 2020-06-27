import React from "react"
import Layout from "../components/Layout"
import { css } from "emotion"

export default function Disclaimer() {
  return (
    <Layout>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;300;500&display=swap');
      </style>
      <div
        className={css`
          background-color: #f7f7f7;
          line-height: 1.85714285714286;
          padding: 50px;
        `}
      >
        <div
          className={css`
            margin: auto;
            max-width: 1080px;
            padding: 30px;
          `}
        >
          <div
            className={css`
              padding: 5.34em 6.67em;
              background-color: white;

              h3 {
                font-family: "Raleway", sans-serif;
                font-size: 30px;
                color: #0ea47c;
                font-weight: 350;
              }
            `}
          >
            <h3>Disclaimer</h3>
            <div
              className={css`
                font-weight: 100;
              `}
            >
              <p>
                Het zich toegang verschaffen tot en het gebruiken van deze site,
                betekent dat de gebruiker kennis heeft genomen van onderstaande
                voorwaarden, deze te begrijpen, daarmee in te stemmen en daaraan
                gebonden te zijn:
              </p>
              <p>
                <strong>Informatie op deze website</strong> <br />
                Smeets Social Impact besteedt de uiterste zorg aan de
                betrouwbaarheid en actualiteit van de gegevens op deze website.
                Onjuistheden en onvolledigheden in de getoonde gegevens kunnen
                echter voorkomen. Smeets Social Impact wijst iedere vorm van
                aansprakelijkheid van de hand voor onvolkomenheden dan wel
                onjuistheden in de op of via deze site weergegeven informatie.
                Smeets Social Impact behoudt zich het recht voor de inhoud van
                de informatie op de website te wijzigen.
              </p>
              <p>
                <strong>Verwijzingen en hyperlinks</strong> <br />
                Verwijzingen naar of hyperlinks met andere websites dienen
                alleen ter informatie van de gebruiker. Smeets Social Impact
                aanvaardt geen verantwoordelijkheid voor de inhoud van
                internetsites waarnaar of waarvan met een hyperlink of
                anderszins wordt verwezen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
