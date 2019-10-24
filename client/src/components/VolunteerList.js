import React,{useState, useEffect} from 'react'
import axios from 'axios'

const VolunteerList  = () => {

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
     return <div>
      <p>{volunteer.name}</p>
      {/* <p>{volunteer.email}</p> */}
      </div>
    })}

</div>



)}

export default VolunteerList