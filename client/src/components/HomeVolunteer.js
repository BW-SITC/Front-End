import React from 'react'
import TodoList from './todos/TodoList'
import TodoClear from './todos/TodoClear'
import VolunteerList from './VolunteerList'
import {Link} from 'react-router-dom';




const HomeVolunteer = props => {
    const logout=() => {
    localStorage.removeItem('token')

}

return (
  <div className="todo.list">
    {/* <TodoList />
<TodoClear/> */}
    <h1>Volunteer Home Page</h1>
    <VolunteerList />
    <div>
     <Link to = "/"><button onClick={logout}>x
      </button>
    </Link>      
</div>
  </div>
);}

    
export default HomeVolunteer


