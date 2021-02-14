import React from 'react'
import img from "./../../image/img.png"

const Section = () => {
    return (
        <section className="section wrapper">
            <div className="info-section-1">

                <div className="textos">
                    <div className="title">Marcelo Berrocal Chuque</div>
                    <p>
                        Hola, me llamo Marcelo Zair y soy un joven con una gran pasicion por la tecnología.
                    </p>
                </div>
                <div className="imgs">
                    <img src={img} alt=""/>
                </div>
            </div>
        </section>
    )
}

export default Section
