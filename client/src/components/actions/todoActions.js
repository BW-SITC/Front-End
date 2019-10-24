import React from "react";
import AxiosWithAuth from '../AxiosWithAuth'


export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = "FETCH_SUCCESS"
export const FETCH_FAILURE = 'FETCH_FAILURE' 
export const fetchTodos = () => dispatch =>{
	dispatch({type: START_FETCHING});

	AxiosWithAuth()
			.get('https://programming-quotes-api.herokuapp.com/quotes')
			.then(res => console.log(res))
			.then(res => dispatch({type: FETCH_SUCCESS, payload: res.data}))
			.catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }))
	
};

export const START_EDIT = "START_EDIT";
export const EDIT_SUCCESS = "EDIT_SUCCESS";
export const EDIT_FAILURE = "EDIT_FAILURE";

export const editTodos = id => dispatch => {
  dispatch({ type: START_EDIT });

  AxiosWithAuth
    .put("admin/${id}/todos") //Todo ID
    .then(res => console.log(res))
    .then(res => dispatch({ type: FETCH_SUCCESS, payload: res }))
    .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }));
};



export const START_POST = "START_EDIT";
export const POST_SUCCESS = "EDIT_SUCCESS";
export const POST_FAILURE = "EDIT_FAILURE";

export const postTodos = id => dispatch => {
  dispatch({ type: START_POST });

  AxiosWithAuth()
    .post("admin/${id}/todos")  //User ID
    .then(res => console.log(res))
    .then(res => dispatch({ type: FETCH_SUCCESS, payload: res }))
    .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }));
  };
  
  export const TOGGLE_TODO = "TOGGLE_TODO";
  export const CLEAR_COMPLETED = "CLEAR_COMPLETED";

  export const completeTodos = id => dispatch => {
  dispatch({ type: TOGGLE_TODO });
    dispatch({ type: CLEAR_COMPLETED })
  }