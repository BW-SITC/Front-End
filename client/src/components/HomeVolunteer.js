import React from 'react'
import TodoList from './todos/TodoList'
import TodoClear from './todos/TodoClear'
import VolunteerList from './VolunteerList'





const HomeVolunteer = props => {


return (
<div className='todo.list'>
<TodoList />
<TodoClear/>
<VolunteerList/>
</div>

)}

export default HomeVolunteer