import React from "react"

import scrollStyles from "./scrollbutton.module.scss"

function ScrollPage(e) {
    if (window !== 'undefined') {
        document.getElementById("main").scrollBy({
            top: Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
            behavior: 'smooth'
        });
        // window.scrollBy(0, );
        // window.scrollBy(0, 100);
    }
}

const ScrollButton = ({className}) => {
    return (
        <a className={className + ' ' + scrollStyles.scrollButton} onClick={ScrollPage}>
            Next Page
        </a>
    )
}

export default ScrollButton