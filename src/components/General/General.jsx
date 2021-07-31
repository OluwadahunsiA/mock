import React from "react";
import './General.scss'
import {Button} from './Buttons'
import {People} from './People.jsx'
import {data} from './People.js'
import { Schedule } from "../Schedule";
import arrow from './assets/moreArrow.svg'



const PICTURESIZE= 105;

export const General = () => {

    const [student,setStudent] = React.useState(true)
    const [group, setGroup] = React.useState(false)
    const [people,setPeople] = React.useState([])
    const [scroll,setScroll] = React.useState(0)
    const [count,setCount] = React.useState(0)
    const[selectedPerson,setSelectedPerson] = React.useState(0)
    const [choice, setChoice] = React.useState("grades")
    const [lessonDetail, setLessonDetail] = React.useState(false)


    
    
   


    const mainScrollContainerRef = React.useRef()
    const subScrollContainerRef = React.useRef()
    
    // For the case of fetching the data
    React.useEffect(()=>{
        setPeople(data)
    },[])

  


// Determine the clicked subtitle (students or groups)

  function checkClick(event){
      if (event.target.className === 'student'){
        setGroup(false)
        setStudent(true)
      }else if(event.target.className === 'group'){
        setStudent(false)
        setGroup(true)
      }
  }



//  To show more students in the list upon 

  function moreClick(){
    const mainScroll =mainScrollContainerRef.current.getBoundingClientRect().width
    const subScroll = subScrollContainerRef.current.getBoundingClientRect().width
    
    const size = Math.round(mainScroll/PICTURESIZE)
  
    const slideProportion = Math.round(subScroll/mainScroll)

     setCount(prev =>prev+1)
  
    if (count < slideProportion){
        console.log(count< size)
         setScroll(prev=>prev+size)

    }else if (count >= slideProportion){
        setScroll(0)
        setCount(0)
    }    
  }

//   Function to highlight the selected student.

  function selectPerson(idx){
      setSelectedPerson(idx)
      setChoice("grades")
      setLessonDetail(false)
  }





  
    return(

        <div className="general__container">
        <div className="general__info">

            {/* Check the possibility of packing all in one function */}
            <div className="general__container__content">
            <div className = "general__container__content-title">
            <p>Мои ученики</p>
            </div>

            <div className="general__container__content-subtitle">
                <p className='student' onClick={checkClick} >Ученики</p>
                <p className='group' onClick={checkClick}>Группы</p>
            </div>
            <div className="general__container__content-borderline"></div>

            <div className="general__container__content-underline">

            {student ? <div className="general__container__content-underline-student"></div> : 
            <div className="general__container__content-underline-student" style={{border:"2px solid transparent",backgroundColor:'transparent'}}></div>}
           
            {group ? <div className="general__container__content-underline-group"></div>:
            <div className="general__container__content-underline-group"style={{border:"2px solid transparent",backgroundColor:'transparent'}}></div>}
            </div>

             <div className="general__container__content-classgroups">
                { student &&  <>
                <div className="general__container__content-classgroups-button">
                    <Button color={"#235390"} text={"Добавить ученика"}></Button>
                    <Button color={"#C200Af"} text={"Создать группу"}></Button>
                </div>
                
                <div ref = {mainScrollContainerRef} className="general__container__content-classgroups-people">
                    <div ref = {subScrollContainerRef} className="general__container__content-classgroups-people-scroll" style={{left:`${-PICTURESIZE * scroll}px `}}>

                    {people.map((person,idx)=>{
                        return <People key={idx} {...person} active={idx === selectedPerson}  selected={()=>selectPerson(idx)}></People>
                    })} 
                    </div> 
                </div>
                <img onClick={moreClick} src={arrow} alt="moreButton" className="general__container__content-classgroups-moreButton">
                </img>
                </>}
            </div>
            </div>
            {/* It ends here */}

            <Schedule lessonDetail={lessonDetail} setLessonDetail={setLessonDetail} person={selectedPerson} selected={selectPerson} people={people} choice={choice} setChoice = {setChoice} ></Schedule>
            


           

        </div>
        </div>
       
    )
}