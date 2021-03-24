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

const App = () => {

  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return <Course course={course} />
}

export default App