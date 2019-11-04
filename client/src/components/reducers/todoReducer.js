export const initialState = [
  {
    instructions: "Learn about reducers",
    completed: false,
    id: 3892987589,
  
  },
  {
    instructions: "Finish todo list",
    completed: false,
    id: 1568146979433,
   
  },
  {
    instructions: `Prepare for tomorrow's lecture`,
    completed: false,
    id: 1568152250811,
  
  }
];


export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          instructions: action.payload.todo,
          completed: false,
          id: Date.now(),
         
        }
      ];
    case "TOGGLE_TODO":
      return state.map(todo => {
        return todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo;
      });
    case "CLEAR_COMPLETED":
      return state.filter(todo => !todo.completed);
    default:
      return state;
  }
};
