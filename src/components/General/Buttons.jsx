import React from 'react'
import add from './assets/Add.svg'



export const Button = ({color, text}) =>{
    return(
        <div className="add_student_button" style={{border:`2px solid ${color}`}}>
        <div className="add_student_button_circle" style={{backgroundColor:`${color}`}}>
            <img src={add} alt='Add Button'></img>
        </div>
        <p className="add_student_button_text" style={{color:`${color}`}}>{text}</p>     
        </div>
    )
}