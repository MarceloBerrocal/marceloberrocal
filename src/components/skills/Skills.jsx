import React from 'react'
import Box from '../box/box'
import js from "./../../image/js.svg"
import ts from "./../../image/ts.svg"
import boostrap from "./../../image/boostrap.svg"
import html from "./../../image/html.svg"
import react from "./../../image/react.svg"
import angular from "./../../image/angular.svg"

const Skills = () => {
    return (
        <div className="color">
            <section className="section wrapper">
                <div className="title center">Habilidades</div>
                <div className="boxes" >
                    <Box img={html} title="Html y Css"/>
                    <Box img={boostrap} title="JavaScript"/>
                    <Box img={js} title="JavaScript"/>
                    <Box img={ts} title="TypeScript"/>
                    <Box img={react} title="React JS"/>
                    <Box img={angular} title="Angular"/>
                </div>
            </section>
        </div>
            
    )
}

export default Skills
