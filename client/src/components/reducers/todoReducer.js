import React from 'react'
import {START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE, 
  START_EDIT, EDIT_SUCCESS, EDIT_FAILURE, START_POST,
POST_SUCCESS, POST_FAILURE} from '../actions/todoActions' 




export const initialState = [
    {
      item: 'Learn about reducers',
      completed: false,
      id: 3892987589,
     
    },
    {
      item: 'Finish todo list',
      completed: false,
      id: 1568146979433,
      
    },
  
  ];
  
  export const todoReducer = (state, action) => {
    switch (action.type) {
      case START_FETCHING:
        return {
          ...state,
          isFetching: true,
          error: ""
        };
      case FETCH_SUCCESS:
        return {
          ...state,
          isFetching: false,
          error: "",
          TodoList: action.payload
        };

      case FETCH_FAILURE:
        return {
          ...state,
          error: action.payload,
          isFetching: false
        };
      case START_EDIT:
        return {
          ...state,
          isFetching: true,
          error: ""
        };
      case EDIT_SUCCESS:
        return {
          ...state,
          isFetching: false,
          error: "",
          TodoList: action.payload
        };

      case EDIT_FAILURE:
        return {
          ...state,
          error: action.payload,
          isFetching: false
        };
      case START_POST:
        return {
          ...state,
          isFetching: true,
          error: ""
        };
      case POST_SUCCESS:
        return {
          ...state,
          isFetching: false,
          error: "",
          TodoList: action.payload
        };

      case POST_FAILURE:
        return {
          ...state,
          error: action.payload,
          isFetching: false
        };

      default:
        return state;
    }}