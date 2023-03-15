import React from 'react'

const Course = (props) => {
  if(props.courseDetails.courseAvail){
    return(
        <div>
            <h1>{props.courseDetails.courseName}</h1>
            <h1>{props.courseDetails.courseDuration}</h1>
            <button style={{color:"green"}}>Available</button>
        </div>
    )
  }else{
    return(
        <div>
            <h1>{props.courseDetails.courseName}</h1>
            <h1>{props.courseDetails.courseDuration}</h1>
            <button style={{color:"red"}}>not Available</button>
        </div>
    )
  }
}

export default Course