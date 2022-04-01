import React from 'react'

const Assignment = ({assignment,id}) => {
    // console.log(id);
  return (
    <div className='container' style={id%2===0?style1:style2}>
        <p>{assignment.Title}</p>
        <p>{assignment.Description}</p>
    </div>
  )
}

export default Assignment

const style1= {
    backgroundColor:'green',
    borderRadius:'10%',
    maxWidth:'80%',
    padding:'10%',
    margin:'10%',
};

const style2= {
    backgroundColor:'orange',
    borderRadius:'10%',
    maxWidth:'80%',
    padding:'10%',
    margin:'10%',
};