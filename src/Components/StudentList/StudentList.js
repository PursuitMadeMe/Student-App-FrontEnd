import React, {useState,useEffect} from 'react'
import StudentCard from '../studentCard/StudentCard';
import './StudentList.scss'





function StudentList() {
// hooks - what do we want (list of students)
const [students, setStudents] = useState([]);


// functions - to populate the useState array with data 
useEffect(() => {

    // BACKEND URL route to data 
    const url = 'http://localhost:3003/students'

    // reach out to the backend
    fetch(url)      //instead of axios
    .then(response => response.json())
    .then(data => {
        console.log(data)
        setStudents(data.students)
    })
    // get our students
    // update our student hook with the new data 

}, []); // empty array means run StudentList on mount 


// return or JSX
  return (
    
    // makes a scrollable studentList container in the middle of the page
    <div className='studentList'>

    {/* iterate through the students array (25) and return StudentCard component with all the students*/}
        {students.map(student => {
            return (
                <div>

                {/* add StudentCard component - take student from the map and add ass a prop (student data) */}
                <StudentCard student={student}/>
                </div>
            )
        })}
    </div>
  )
}

export default StudentList