import React from 'react'

const Course = ({course}) => {
    return(
      <div>
        <h1> {course.name} </h1>
        {course.parts.map((part, ind) => {
          return(<p key = {ind}>
            {part.name} {part.exercises}
          </p>)
        })}
        <b> total of {course.parts.reduce((s,part) => s + part.exercises,0) } exercises </b>
      </div>
    )
  }
  
  const Courses = ({courses}) => courses.map((course, ind) => <Course course = {course} key = {ind}/>)
  
  export default Courses