import React from 'react'
// import './StudentCard.scss'

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
    <div>
        <img src={pic}/>
    </div>
    <div className='studentCard__name'>
    {`${firstName} ${lastName}`}
    </div>
    <div>
        Email: {email}
    </div>
    <div>
        Company: {company}
    </div>
    <div>
        Skill: {skill}
    </div>
    <div>
        Average: {calculateAverage(grades)} %
    </div>
    </div>
  )

}

export default StudentCard