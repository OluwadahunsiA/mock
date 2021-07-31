import React from 'react'
// import {data} from './people'

export const People = ({image,name,selected,active}) => {

    
  
    return(
        <div  className={active ? "single__person-active": "single__person"} onClick={selected}>
            <img className="single__person__image" src={image} alt="person"></img>
            <p style={{pointerEvents:'None'}}>{name}</p>
        </div>
    )
}