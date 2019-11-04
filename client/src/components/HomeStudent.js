import React from 'react'
import VolunteerList from './VolunteerList'
import { Link } from "react-router-dom";





const HomeStudent = props => {


return (
  <form>
    <div className="todo.list">
      <VolunteerList />
    </div>
    <Link to="/">
      <button>Home</button>
    </Link>
  </form>
);}

export default HomeStudent

