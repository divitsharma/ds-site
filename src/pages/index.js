import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ScrollButton from "../components/scrollbutton"
import HomeButton from "../components/homebutton"

// css
import "../styles/index.css"
import "../styles/main.scss"

const IndexPage = () => (
    <main id="main">
        <SEO title="Home" keywords={[`divit`, `sharma`, `divit sharma`]} />
        <div className="sticky">
            <HomeButton></HomeButton>
            <h3>Hello,</h3>
            <h1>I am</h1>
        </div>

        <ScrollButton className="scrollButton">

        </ScrollButton>

        <div className="layouts">
            <Layout sectionTitle="Divit Sharma." id="top">
                <p>I’m a software developer and designer currently studying Computer Science at the University of Waterloo.</p>
                {/* <p className="extraInfo">I'm also a big visual arts and design fanatic, and play cricket and badminton.</p> */}
                <p className="extraInfo">I'm currently looking for internship opportunities for September 2019.</p>
                <div className="links">
                    <a href="https://www.github.com/divitsharma" className="github" />
                    <a href="https://www.behance.net/divitsharma" className="behance" />
                    <a href="https://www.github.com/divitsharma" className="resume">RESUME</a>
                </div>
            </Layout>

            <div class="devBackground">
                <Layout sectionTitle="a developer." id="developer">
                    <p>I make apps and games across Linux, Windows and Android.</p>
                    <p>Past work experience includes Behaviour Interactive, Ford Motor Company, and UWaterloo Autonomoose. You can help by expanding this list.</p>
                    <div className="links">
                        <a href="https://www.github.com/divitsharma" className="github" />
                        <a href="https://www.github.com/divitsharma" className="resume">RESUME</a>
                    </div>
                </Layout>
            </div>

            <div className="artistBackground">
                <Layout sectionTitle="an artist." id="artist">
                    <p>I like to dabble in visual arts and graphic design once in a while. Check out my profile for some of my works.</p>
                    <div className="links">
                        <a href="https://www.behance.net/divitsharma" className="resume">BEHANCE</a>
                    </div>
                </Layout>
            </div>

            <Layout sectionTitle="available at">
            </Layout>

            {/* <footer>
                © {new Date().getFullYear()}, Built with
            {` `}
                <a href="https://www.gatsbyjs.org">Gatsby</a>
            </footer> */}
        </div>
    </main>
)

export default IndexPage
