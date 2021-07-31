import React from 'react'
import { TableHead } from './TableHead'
import {TableRow} from './TableRow'
import './Table.scss'




export const Table = ({theadData,schedule,displayLessonDetail,choice,setChoice,selectedRow,setSelectedRow,lessonDetail,setLessonDetail}) =>{


  function renderRow(){
      if (Object.keys(schedule[0]).length && choice === 'grades'){

          return schedule[0].grades.map((item)=><TableRow setSelectedRow = {setSelectedRow} setChoice={setChoice} choice={choice} key={schedule.id} data={item} value={schedule[0]} displayLessonDetail={()=>displayLessonDetail(schedule)} lessonDetail={lessonDetail} setLessonDetail={setLessonDetail}></TableRow>)

      } else if (Object.keys(schedule[0]).length && choice === 'detail'){

          return schedule[0].grades[selectedRow-1].detail.map((item)=><TableRow setSelectedRow = {setSelectedRow} setChoice={setChoice} choice={choice} key={schedule.id} data={item} value={schedule[0]} displayLessonDetail={()=>displayLessonDetail(schedule)} lessonDetail={lessonDetail} setLessonDetail={setLessonDetail}></TableRow>)
      }

  }

    return(

        <table className="main__table" cellspacing="0" >
            <thead className="main__table__heading">
                <tr className="main__table__heading__row">
                    {theadData.map(head=><TableHead key={head} item={head}></TableHead>)}
                </tr>
            </thead>
            <tbody className="main__table__body">
                {renderRow()}
            </tbody>

        </table>
    )
}

