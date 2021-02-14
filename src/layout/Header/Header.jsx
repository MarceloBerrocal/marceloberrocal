import React from 'react'

const Header = () => {

    document.addEventListener("scroll", () => {
        if(window.scrollY > 1){
            document.querySelector("header").classList.add("headeractive")
        } else {
            document.querySelector("header").classList.remove("headeractive")

        }
    })

    const mostrarMenu = () =>{
        document.getElementById("menu").classList.toggle("menuActive")
    }

    return (
        <header>
            <nav className="wrapper">
                <div className="logo">[ Marcelo <span>Zair</span> ]</div>
                <ul className="menu" id="menu">
                    <li><a className="link">Inicio</a></li>
                    <li><a className="link">Skills</a></li>
                    <li><a className="link">Portafolio</a></li>
                    <li><a className="btn-bg" >Contatame</a></li>
                </ul>
                <div className="icon" onClick={mostrarMenu}>
                    <div className="icon-line"></div>
                    <div className="icon-line"></div>
                    <div className="icon-line"></div>
                </div>
            </nav>
        </header>
    )
}

export default Header
