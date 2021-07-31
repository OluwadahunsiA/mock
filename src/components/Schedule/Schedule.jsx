import React from 'react'
import {Table} from '../Table/Table'
import downArrow from '../General/assets/Arrow__down.svg'
import rightArrow from '../General/assets/right__Arrow.svg'
import upArrow from '../General/assets/up__Arrow.svg'
import { studentData } from '../studentData'



const theadData = 
["№", "Название урока", "Упражнения в уроке","Упражнений выполнено",
"Ошибок","Неточности","Потраченное время","Заработано террикоинов" ];

const theadLessonDetail = ["№", "Название упражнения", "Ползовался решением","Брал подсказку",
"Ошибок","Неточности","Потраченное время","Заработано террикоинов" ];




export const Schedule = ({person,people,choice, setChoice,lessonDetail,setLessonDetail,selected}) => {
        const student = people[person]
        const [plan,setPlan] = React.useState(false)
        const [result,setResult] = React.useState(true)
        
        const [studentResult, setStudentResult] = React.useState([{}])
        const [selectedRow,setSelectedRow] = React.useState("")
        const [showExpand, setShowExpand] = React.useState(false)
        const [taskExpand,setTaskExpand] = React.useState(false)


        // const [scores,setScores] = React.useState([])

        // const getStudentData = studentData[person]

        // Fetch student data here

  React.useEffect(()=>{
      const currentStudent =studentData[person] 
      setStudentResult([currentStudent])
      setSelectedRow("")
  },[person])



  // To show more about a student's lesson

    function displayLessonDetail(student){
      console.log(student)
      // setLessonDetail(!lessonDetail)

    }

    function handleClick(event){

      if (event.target.className === 'result'){
        setPlan(false)
        setResult(true)
        setLessonDetail(false)
        setChoice('grades')
        setTaskExpand(false)
        setStudentResult([studentData[person]])
      }else if(event.target.className === 'plan'){
        setResult(false)
        setPlan(true)
        setLessonDetail(false)
        setTaskExpand(false)
      }

    }


    function expandHandler(){
      setShowExpand(!showExpand)
    }

  


    return(
          <div className="student__schedule__container">
            <div className="student__schedule__container__main">
              <div className = "student__schedule__container__heading">
                  <div className="student__schedule__container__heading-subtitle">
                            <p className='plan' onClick={handleClick}>Расписание</p>
                            <p className='result' onClick={handleClick}>Успеваемость</p>
                            {lessonDetail && <p className="lesson__detail">Урок {selectedRow}</p> }
                            {lessonDetail &&  <div className="lesson__detail__pointer">
                               <img src={rightArrow}  alt="rightArrow"></img>
                            </div>}
                            {lessonDetail && <div className="lesson__detail__options task__detail" onClick={()=>setTaskExpand(!taskExpand)}>
                                <div className="detail__Arrow" >
                                <img src={downArrow} alt="arrowUp"></img>
                              </div>
                              
                              <div className="lesson__detail__options__content">
                                <div className="lesson__detail__options__content__bluecircle"></div>
                                <p>Домашние упражнения</p>
                              
                              </div>
                            </div>}
                            { (taskExpand && lessonDetail) && (<div className="lesson__detail__options">
                              <div className="detail__Arrow" onClick={()=>setTaskExpand(!taskExpand)}>
                                <img src={upArrow} alt="arrowUp"></img>
                              </div>
                              
                              <div className="lesson__detail__options__content">
                                <div className="lesson__detail__options__content__bluecircle"></div>
                                <p>Домашние упражнения</p>
                              
                              </div>
                              <div className="lesson__detail__options__content">
                                <div className="lesson__detail__options__content__orangecircle"></div>
                                <p>Все упражнения</p>
                              
                              </div>
                              <div className="lesson__detail__options__content">
                                <div className="lesson__detail__options__content__greencircle"></div>
                                <p>Классные упражнения</p>
                              
                              </div>
                              <div className="lesson__detail__options__content">
                                <div className="lesson__detail__options__content__bluecircle"></div>
                                <p>Домашние упражнения</p>
                              
                              </div>
                            </div>)}
                                     
                           
                  </div>
                <div className = "student__schedule__container__heading-info">
                      <img src={student? student.image : ""} alt="student"></img>
                      <p>{student? student.name : ""}</p>
                </div>
                    <img className="down__arrow" src={downArrow} alt="moreButton" onClick={expandHandler} ></img> 

                 { showExpand && <div className="student__name__detail">
                    <div className="detail__Arrow student__name__detail__arrow" onClick={()=>setShowExpand(false)}>
                        <img src={upArrow} alt="arrowUp"></img>
                    </div>

                    
                    <div className="student__name__detail__people">
                      {people.map((student,idx)=>{
                          return(<div className = {`student__schedule__container__heading-info student__list ${idx === person ? "add__color" : "" }`} onClick={()=>selected(idx)} >
                            <img src={student.image} alt="student"></img>
                            <p>{student.name}</p>
                          </div>)
                      })}
                    </div>
                    
                  </div> }

              </div>
                <div className="student__schedule__container__main__underline">
                {plan ?<div className="student__schedule__container__main__underline-plan"></div> : <div className="student__schedule__container__main__underline-plan" style={{border:"1px solid transparent",backgroundColor:'transparent'}}></div>  }
                {result? <div className="student__schedule__container__main__underline-result"></div> : <div className="student__schedule__container__main__underline-result" style={{border:"1px solid transparent",backgroundColor:'transparent'}}></div> }
                </div>
            </div>
            
           { result && <div className="table__container">

              { <Table choice={choice} setChoice={setChoice} lessonDetail={lessonDetail} setLessonDetail = {setLessonDetail}  selectedRow={selectedRow}  setSelectedRow={setSelectedRow} theadData={choice === "grades" ? theadData : theadLessonDetail } schedule={studentResult} displayLessonDetail={()=>{displayLessonDetail(studentResult)}}></Table>}
            </div>}
         </div>

    )
}


