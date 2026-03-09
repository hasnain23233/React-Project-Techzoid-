import React from 'react'

const Student = ({name  , id , course}) => {
  return (
    <div>
      Student : {name}  <br />
      id : {id} <br />
      course : {course}
    </div>
  )
}

export default Student
