import React, {useState,useEffect} from 'react'
import SearchBar from '../searchBar/SearchBar';
import StudentCard from '../studentCard/StudentCard';
import './StudentList.scss'


function StudentList() {
// hooks - what do we want (list of students)
const [students, setStudents] = useState([]);

// filter list of student with searchbar
const [searchTerm, setSearchTerm] = useState('')

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


// when search term is updated, this component will render 
// what to do on re render? Filter student list based on searchterm 
// *******FILTER FEATURE FOR SEARCHBAR*********

let filteredStudents = students

if(searchTerm) {
    filteredStudents = students.filter(student => {
        const fullName = `${student.firstName} ${student.lastName}`

        const fullNameToLowerCase = fullName.toLowerCase()

       const searchTermToLowerCase = searchTerm.toLowerCase()

       return fullNameToLowerCase.includes(searchTermToLowerCase)

    })
}

// return or JSX
  return (
    
    // makes a scrollable studentList container in the middle of the page
    <div className='studentList'>
    <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
    {/* iterate through the students array (25) and return StudentCard component with all the students*/}
    {/* add filteredStudents.map to search through ALL students*************************** */}
        {filteredStudents.map(student => {
            return (
                <div>

                {/* add StudentCard component - take student from the map and add ass a prop (student data) */}
                <StudentCard student={student}/>
                </div>
            )
        })}
        {filteredStudents.length === 0 &&  <div className='studentList__noResults'>No Results</div>}
    </div>
  )
}

export default StudentList