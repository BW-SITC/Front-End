import React from 'react'
import TodoList from './todos/TodoList'
import TodoClear from './todos/TodoClear'
import VolunteerList from './VolunteerList'





const HomeVolunteer = props => {


return (
<div className='todo.list'>
{/* <TodoList />
<TodoClear/> */}
<h1>Volunteer Home Page</h1>
<VolunteerList/>
</div>

)}

export default HomeVolunteer