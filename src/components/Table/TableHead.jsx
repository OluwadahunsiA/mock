import React from 'react'

export const TableHead = ({item})=>{
    return(
        <td title={item} className="table__head">
            <div className="table__head__content">
                    {item}
            </div>
           
            </td>
    )
}