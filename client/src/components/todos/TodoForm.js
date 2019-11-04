import React, { useState } from "react";



export default function TodoForm(props) {
  const [todo, setTodo] = useState("");
  const [username, setUserName] = useState("");
const [instructions, setInstructions] = useState("");

  return (
    <div className="input-bar">
      <input
        className="input"
        type="text"
        name={username}
        placeholder="Volunteer Name..."
        onChange={e => setTodo(e.target.value)}
      />

      <input
        className="input"
        type="text"
        name={instructions}
        placeholder="Instructions..."
        onChange={e => setTodo(e.target.value)}
      />

      <button
        onClick={() => {
          props.dispatch({
            type: "ADD_TODO",
            payload: { todo: username, instructions }
          });
          setTodo("");
        }}
      >
        Add
      </button>
    </div>
  );
}








// import React, { useState,useEffect } from "react";
// import { connect } from "react-redux";
// import { postTodos } from "../actions/todoActions";



// const TodoForm = (props) => {

//   const [todo, setTodo] = useState("");
//    const [user_name, setUser_name] = useState("");
//     const [instructions, setInstructions] = useState("");
//   useEffect(() => {
//     // props.fetchTodos()
//     postTodos();
//     // console.log('TodoForm 0   .js -> %cprops:', 'color: purple', props)
//   }, []);

//   return (
//     <div className="input-bar">
//       <input
//         type="text"
//         value={user_name}
//         placeholder="Volunteer Name..."
//         onChange={e => setTodo(e.target.value)}
//       />

//       <input
//         type="text"
//         value={instructions}
//         placeholder="Instructions..."
//         onChange={e => setTodo(e.target.value)}
//       />

//       <button
//         onClick={() => {
//           props.dispatch({
//             type: "START_POST",
//             payload: { todo: todo }
//           });
//           setTodo("");
//         }}
//       >
//         Add
//       </button>
//     </div>
//   );
// }
// const mapStatetoProps = state => {
//   return {
//     todoList: state.todoList,
//     isFetching: state.isFetching,
//     error: state.error
//   };
// };

// export default connect(
//   mapStatetoProps,
//   { postTodos }
// )(TodoForm);