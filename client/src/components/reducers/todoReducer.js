export const initialState = [
    {
      item: 'Learn about reducers',
      completed: false,
      id: 3892987589,
      doBy: 'September 10, 2019',
      tags: ['Coding'],
    },
    {
      item: 'Finish todo list',
      completed: false,
      id: 1568146979433,
      doBy: 'September 10, 2019',
      tags: ['Lambda'],
    },
    {
      item: `Prepare for tomorrow's lecture`,
      completed: false,
      id: 1568152250811,
      doBy: 'September 11, 2019',
      tags: ['Lambda'],
    },
  ];
  
  export const todoReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return [
          ...state,
          {
            item: action.payload.todo,
            completed: false,
            id: Date.now(),
            doBy: Date.now() + 604800000,
            tags: [action.payload.tag],
          },
        ];
      case 'TOGGLE_TODO':
        return state.map(todo => {
          return todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo;
        });
      case 'CLEAR_COMPLETED':
        return state.filter(todo => !todo.completed);
      default:
        return state;
    }
  };