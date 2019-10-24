import React,{useState, useEffect} from 'react'
import axios from 'axios'

const VolunteerList  = (props) => {

const [volunteers, setVolunteers] = useState([])    
    useEffect(() => {
    axios
    .get(`https://school-in-cloud.herokuapp.com/api/student/`)
    .then(res => setVolunteers( res.data) )
    .catch(err => console.error("Good data's gone bad here:",err.response))
    
    // console.log('get response', res);
},[])
return (
<div>
  {volunteers.map(volunteer=>{
     return (
     <div>
       <h3>Volunteer List</h3>
      <p>{volunteer.name}</p>
   
      </div>
  )})}

</div>
)


}

export default VolunteerList