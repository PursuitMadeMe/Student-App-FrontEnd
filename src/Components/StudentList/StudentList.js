import React, {useState,useEffect} from 'react'

function StudentList() {
// hooks - what do we want (list of students)
const [students, setStudents] = useState([]);


// functions - to populate the useState array with data 
useEffect(() => {

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
    <div>
    {/* iterate through the students array (25) and return student first name*/}
        {students.map(student => {
            return (
                <div>
                {student.firstName}
                </div>
            )
        })}
    </div>
  )
}

export default StudentList