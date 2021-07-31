import React from 'react'

export const TableRow = ({data,choice, setChoice,displayLessonDetail,setSelectedRow, lessonDetail,setLessonDetail}) =>{


function rowDetailHandler(value){
    // setSelectedRow(value)
    if (choice === 'grades'){
          setSelectedRow(data.id)
          setLessonDetail(!lessonDetail)
          setChoice("detail")
    }else{
        return
    }
   
}

    return(
        <tr className="main__table__row" onClick={rowDetailHandler}>
            { data.items.map((item,idx)=>{
              
                return <td key={idx} className="main__table__row__box" >
                    <div className="main__table__row__box__single">
                    {item}
                    </div>
                    </td>
            })} 
        </tr>

    )
}

// {choice === "grades" ? ()=>displayLessonDetail() : ()=>{}}
// ()=>setSelectedRow(data.id)
