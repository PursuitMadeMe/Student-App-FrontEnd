import React from 'react'
import './StudentCard.scss'

function StudentCard({student}) {

    // what data do we want from the list of students - Array(25)
    const {pic,firstName, lastName, email, company, skill, grades } = student


    // calculate the average of the grades - grades is an array of numbers
    const calculateAverage = (grades) => {
        // let sum = 0;

        // grades.map(grade => {
        //     sum += Number(grade)
        // })
        // return sum / grades.length


        // add all the number of the grades array , starting at 0 divided by the length of the grades array
        let sum = grades.reduce((sum, val) => sum + Number(val), 0) / grades.length
        return sum
    }

    // <div> section off the web page
  return (
    <div className='studentCard'>
        <div className='studentCard__profilePic'>
             <img src={pic}/>
        </div>
        <div className='studentCard__info'>
            <div className='studentCard__name'>
                {`${firstName} ${lastName}`}
            </div>
            <div className='studentCard__infoLine'> 
                Email: {email}
            </div>
            <div className='studentCard__infoLine'>
                Company: {company}
            </div>
            <div className='studentCard__infoLine'>
                Skill: {skill}
            </div>
            <div className='studentCard__infoLine'>
                Average: {calculateAverage(grades)} %
            </div>
        </div>
    </div>
  )

}

export default StudentCard