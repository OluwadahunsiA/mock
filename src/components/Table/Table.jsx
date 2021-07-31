import React from 'react'
import { TableHead } from './TableHead'
import {TableRow} from './TableRow'
import './Table.scss'
// import { studentData } from '../studentData'



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


// {Object.keys(schedule[0]).length ? schedule[0].grades.map((item)=><TableRow setSelectedRow = {setSelectedRow} choice={choice} key={schedule.id} data={item} value={schedule[0]} displayLessonDetail={()=>displayLessonDetail(schedule)} lessonDetail={lessonDetail} setLessonDetail={setLessonDetail}></TableRow>)
//                 : <div className="table__loading"><h1 >Loading...</h1></div>}


//  (choice === "grades" ? schedule[0].grades.map((item)=><TableRow setSelectedRow = {setSelectedRow} choice={choice} key={schedule.id} data={item} value={schedule[0]} displayLessonDetail={()=>displayLessonDetail(schedule)} lessonDetail={lessonDetail} setLessonDetail={setLessonDetail}></TableRow>) 
// : schedule[0].grades.detail[selectedRow - 1].map((item)=><TableRow setSelectedRow = {setSelectedRow} choice={choice} key={schedule.id} data={item} value={schedule[0]} displayLessonDetail={()=>displayLessonDetail(schedule)} lessonDetail={lessonDetail} setLessonDetail={setLessonDetail}></TableRow>))


// export const Table = ({theadData,person}) =>{

//      const [state, setState] = React.useState([{}])

//     React.useEffect(()=>{
//         // Fetch student data here

//       console.log('effect')
//       const currentStudent =studentData[person] 
//       setState([currentStudent])
//   },[person])

//   console.log('component has rerendered')

//     return(

//         <table className="main__table" cellspacing="0" >
//             <thead className="main__table__heading">
//                 <tr className="main__table__heading__row">
//                     {theadData.map(head=><TableHead key={head} item={head}></TableHead>)}
//                 </tr>
//             </thead>
//             <tbody className="main__table__body">
//                 {Object.keys(state[0]).length ?state[0].grades.map((item)=><TableRow key={state.id} data={item.items} value={state[0]}></TableRow>) : <div className="table__loading"><h1 >Loading...</h1></div>}
//             </tbody>

//         </table>
//     )
// }