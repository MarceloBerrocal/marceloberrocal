import React from 'react'
import img from "./../../image/img.png"

const Section = () => {
    return (
        <section className="section wrapper">
            <div className="info-section-1">

                <div className="textos">
                    <div className="title">Marcelo Berrocal Chuque</div>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni corrupti perspiciatis nostrum saepe odio quidem. Magnam voluptas dolorum fugit quae, sapiente deserunt aut omnis, voluptates cupiditate error non eos dolores, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, possimus sed beatae autem sequi accusantium perferendis reiciendis odit quam fuga labore, nisi debitis totam dolores neque inventore? Suscipit, laudantium et.
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
