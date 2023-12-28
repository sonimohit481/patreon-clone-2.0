import React from 'react'

export const Landingbottomcard = ({ props }) => {
    return (
        <div style={{padding:"2%"}}>
            <div style={{height:"180px"}}>
                <img src={props[0]} alt="" style={{height:"100%", width:"100%"}}/>
            </div>
            <div style={{fontSize:"21px", fontWeight:"700", marginTop:"2%"}}>
                {props[1]}
            </div>
            <div style={{fontSize:"17px",  marginTop:"3%"}}>
                {props[2]}
            </div>
        </div>
    )
}
