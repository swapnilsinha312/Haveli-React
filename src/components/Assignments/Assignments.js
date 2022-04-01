import React from 'react'
import Assignment from './Assignment'
import { AssignmentData } from '../../DummyData/AssignmentData'

const Assignments = () => {
  return (
    <div>
        
        {AssignmentData.map((assignment,id)=>(
            <Assignment assignment={assignment} id={id}/>
        ))}

        {/* <Assignment/> */}
    </div>
  )
}

export default Assignments