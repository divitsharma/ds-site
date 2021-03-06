/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 * Represents one full-page section
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Header from "../components/header"
// import { useStaticQuery, graphql } from "gatsby"

import layoutStyles from "./layout.module.scss"

function CalcVH() {
    var vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    // styleHeight = vH + "px";
    // document.getElementById("top").setAttribute("style", "height:" + vH + "px");
}

const Layout = ({ children, sectionTitle, id }) => {
    
    var styleHeight = '100vh'
    if (typeof document !== 'undefined') {
        CalcVH()
        window.addEventListener('resize', CalcVH, true);
    }
    return (
        <section id={id}>
            <div className={layoutStyles.content}>
                <Header title={sectionTitle} />
                <div className={layoutStyles.rule}></div>
                {children}
                
            </div>
        </section>
    )
}

// Layout.propTypes = {
//     children: PropTypes.node.isRequired,
// }

export default Layout
