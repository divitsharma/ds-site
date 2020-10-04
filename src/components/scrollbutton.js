import React from "react"
import scrollStyles from "./scrollbutton.module.scss"

function ScrollPage(e) {
    if (window !== 'undefined') {
        if (document.documentElement.style.getPropertyValue('--scrollButtonVisible') !== 'none') {
            if (typeof document.getElementById("main").scrollBy !== 'undefined')
            {
                document.getElementById("main").scrollBy({
                top: Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
                behavior: 'smooth'
                });
            } else {
                document.getElementById("main").scrollTop = document.getElementById("main").scrollTop + window.innerHeight;

            }
        } else {
            document.getElementById("main").scrollTop = 0;

        }
        // window.scrollBy(0, );
        // window.scrollBy(0, 100);
    }
}

const ScrollButton = ({ className, id }) => {
    return (
        <a id={id} className={className + ' ' + scrollStyles.scrollButton} onClick={ScrollPage} href="JavaScript:Void(0)">
            {/* <i className="material-icons">keyboard_arrow_down</i> */}
            <div/>
            <span>NEXT PAGE</span>
        </a>
    )
}

export default ScrollButton