import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

// css
import "../styles/index.css"
import "../styles/main.scss"

const IndexPage = () => (
    <main>
        <SEO title="Home" keywords={[`divit`, `sharma`, `divit sharma`]} />
        <div className="sticky">
            <h3>Hello,</h3>
            <h1>I am</h1>
        </div>

        <div className="layouts">
            <Layout sectionTitle="Divit Sharma.">
                {/* <Header title={"Divit Sharma"} /> */}
                {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
                <Image />
            </div> */}
                <p>I’m an aspiring software developer and designer currently studying Computer Science at the University of Waterloo.</p>
                {/* <br/> */}
                <p>Away from school, I'm a big visual arts and design fanatic, and play cricket and badminton.</p>
            </Layout>

            <Layout sectionTitle="a developer.">
                {/* <Header title={"a developer"} /> */}
            </Layout>

            <Layout sectionTitle="an artist.">
            </Layout>

            <Layout sectionTitle="available at.">
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
