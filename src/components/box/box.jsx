import React from 'react'

const Box = (props) => {
    return (
        <div className="box">
            <img src={props.img} alt=""/>
            <p>{props.title}</p>
        </div>
    )
}

export default Box
