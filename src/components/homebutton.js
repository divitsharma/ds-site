import React from "react"

import homeButtonStyles from "./homebutton.module.scss"

const HomeButton = ({ className }) => {
    return (
        <a className={className + ' ' + homeButtonStyles.homeButton} href="#top">
            
        </a>
    )
}

export default HomeButton