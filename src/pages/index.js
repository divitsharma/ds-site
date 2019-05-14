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
                {/* <Header title={"Divit Sharma"} /> */}
                {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
                <Image />
            </div> */}
                <p>I’m a software developer and designer currently studying Computer Science at the University of Waterloo.</p>
                {/* <br/> */}
                <p className="extraInfo">I'm also a big visual arts and design fanatic, and play cricket and badminton.</p>
                <div className="links">
                    <a href="https://www.github.com/divitsharma" className="github" />
                    <a href="https://www.behance.net/divitsharma" className="behance" />
                    <a href="https://www.github.com/divitsharma" className="resume">RESUME</a>
                </div>
            </Layout>

            <Layout sectionTitle="a developer.">
                {/* <Header title={"a developer"} /> */}
            </Layout>

            <Layout sectionTitle="an artist.">
            </Layout>

            <Layout sectionTitle="available at">
            </Layout>

            <footer>
                © {new Date().getFullYear()}, Built with
            {` `}
                <a href="https://www.gatsbyjs.org">Gatsby</a>
            </footer>
        </div>
    </main>
)

export default IndexPage
