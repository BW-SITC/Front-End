import React,{useState, useEffect} from 'react'
import axios from 'axios'
import Volunteer from './Volunteer';

const VolunteerList  = (props) => {

const [volunteers, setVolunteers] = useState([])    
    useEffect(() => {
    axios
    .get(`https://school-in-cloud.herokuapp.com/api/student/`)
    .then(res => setVolunteers( res.data) )
    .catch(err => console.error("Good data's gone bad here:",err.response))
    
    // console.log('get response', res);
},[])
console.log("VolunteerList.js -> %cvolunteers:", "color: gold", volunteers);
 
return (
  <div className="volunteerList">
    {volunteers.map(volunteer => (
      <div>
        <Volunteer key={volunteer.id} volunteer={volunteer} />
        <h3>{volunteer.name}</h3>
        <p>{volunteer.days}</p>
        <p>{volunteer.availibleTime}</p>
        <p>{volunteer.country}</p>
      </div>
    ))}
  </div>
);


}

export default VolunteerList