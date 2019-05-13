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

const Layout = ({ children, sectionTitle }) => {

    // const data = useStaticQuery(graphql`
    //     query {
    //         site {
    //             siteMetadata {
    //                 title
    //             }
    //         }
    //     }
    // `)
    
    var styleHeight = `${window.innerHeight}px`
    return (
        <section style={{height: styleHeight}}>
            <div className={layoutStyles.content}>
                <Header title={sectionTitle} />
                <div className={layoutStyles.rule}></div>
                {children}
            </div>
        </section>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
