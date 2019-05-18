import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ScrollButton from "../components/scrollbutton"
import HomeButton from "../components/homebutton"

// css
import "../styles/index.css"
import "../styles/main.scss"

function onScroll() {
    var scrollTop1 = document.getElementById("main").scrollTop;
    var height = document.getElementById("layouts").scrollHeight - document.getElementById("contact").clientHeight;
    if (scrollTop1 >= height - 10) {
        // alert(scrollTop1 + " " + height);
        document.getElementById("scrollButton").style.display = "none";
    } else {
        document.getElementById("scrollButton").style.display = "block";
    }
}

const IndexPage = () => {
    if (typeof window !== 'undefined') {
        window.addEventListener('scroll', onScroll, true);
    }

    return (<main id="main">
        <SEO title="Home" keywords={[`divit`, `sharma`, `divit sharma`]} />
        <div className="sticky">
            <HomeButton></HomeButton>
            <h3>Hello,</h3>
            <h1>I am</h1>
        </div>

        <ScrollButton id="scrollButton" className="scrollButton">

        </ScrollButton>

        <div className="layouts" id="layouts">
            <Layout sectionTitle="Divit Sharma." id="top">
                <p>I’m a software developer and designer currently studying Computer Science at the University of Waterloo.</p>
                {/* <p className="extraInfo">I'm also a big visual arts and design fanatic, and play cricket and badminton.</p> */}
                <p className="extraInfo">I'm currently looking for internship opportunities for September 2019.</p>
                <div className="links">
                    <a href="https://www.github.com/divitsharma" target="_blank" className="github" rel="noopener noreferrer" />
                    <a href="https://www.behance.net/divitsharma" target="_blank" className="behance" rel="noopener noreferrer" />
                    <a href="https://www.github.com/divitsharma" target="_blank" className="resume" rel="noopener noreferrer">RESUME</a>
                </div>
            </Layout>

            <div className="devBackground">
                <Layout sectionTitle="a developer." id="developer">
                    <p>I make apps and games across Linux, Windows and Android.</p>
                    <p>Past work experience includes <a target="_blank" href="https://www.bhvr.com" rel="noopener noreferrer">Behaviour Interactive</a>
                        , <a target="_blank" href="https://www.ford.ca/owners/technology/sync/" rel="noopener noreferrer">Ford Motor Company</a>,
                        and <a target="_blank" href="https://www.autonomoose.net" rel="noopener noreferrer">UWaterloo Autonomoose</a>.
                        </p>
                    <div className="links">
                        <a href="https://www.github.com/divitsharma" target="_blank" className="github" rel="noopener noreferrer" />
                        <a href="https://www.github.com/divitsharma" target="_blank" className="resume" rel="noopener noreferrer">RESUME</a>
                    </div>
                </Layout>
            </div>

            <div className="artistBackground">
                <Layout sectionTitle="an artist." id="artist">
                    <p>I like to dabble in visual arts and graphic design once in a while. Check out my profile for some of my works.</p>
                    <div className="links">
                        <a target="_blank" href="https://www.behance.net/divitsharma" className="resume" rel="noopener noreferrer">BEHANCE</a>
                    </div>
                </Layout>
            </div>

            <Layout sectionTitle="available at" id="contact">
                {/* <p>Don't hesitate to reach out!</p> */}
                <i className="material-icons">mail_outline</i><a href="mailto:dsharma5095@gmail.com">dsharma5095@gmail.com</a><br />
                <i className="fab fa-linkedin-in"></i><a href="https://www.linkedin.com/in/divitsharma/" target="_blank" rel="noopener noreferrer">linkedin.com/in/divitsharma</a><br />
                <i className="fab fa-github"></i><a href="https://www.github.com/divitsharma" target="_blank" rel="noopener noreferrer">github.com/divitsharma</a><br />
            </Layout>

            {/* <footer>
                © {new Date().getFullYear()}, Built with
            {` `}
                <a href="https://www.gatsbyjs.org">Gatsby</a>
            </footer> */}
        </div>
    </main>
    )
}

export default IndexPage
