import React from 'react'

const Footer = () => {

    document.addEventListener("scroll", () => {
        if(window.scrollY > 40 ){
            document.getElementById("footer").classList.add("footeractive")
        } else {
            document.getElementById("footer").classList.remove("footeractive")

        }
    })


    return (
        <div className="footer" id="footer">
            <footer className="wrapper">
                <p>Marcelo Zair Berrocal Chuque - 2020</p>
                <div className="redes">
                    <a target="_blank" href="https://www.facebook.com/marcelozair.berrocal/">
                        <i className="fab fa-facebook-square"></i>
                    </a>
                    <a target="_blank" href="https://www.youtube.com/channel/UCJuiMzXtUyADkwihLTR6qZg">
                        <i className="fab fa-youtube"></i>
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/marcelo-zair-berrocal-chuque-4643741b9/">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </div>
            </footer>
        </div>
    )
}

export default Footer;