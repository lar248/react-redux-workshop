import * as Redux from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';

const todo = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: false
            };
        case 'TOGGLE_TODO':
            if (state.id !== action.id) {
                return state;
            }
            return {
                ...state,
                completed: !state.completed
            };
        default:
            return state;
    }
};

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todo(undefined, action)
            ];
        case 'TOGGLE_TODO':
            return state.map(t => todo(t, action));
        default:
            return state;
    }
};

const visibilityFilter = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default:
            return state;
    }
};

const { combineReducers } = Redux;
const todoApp = combineReducers({
    todos,
    visibilityFilter
});

const { createStore } = Redux;
const store = createStore(todoApp);
const { Component } = React;

const FilterLink = ({
    filter,
    currentFilter,
    children,
    onClick
}) => {
    if (filter === currentFilter) {
        return <span>{children}</span>;
    }

    return (
        <a href="#"
            onClick={(e) => {
                e.preventDefault();
                onClick(filter);
            }}
        >
            {children}
        </a>
    );
};

const Footer = ({
    visibilityFilter,
    onFilterClick
}) => (
        <p>
            Show:
      {' '}
            <FilterLink
                filter='SHOW_ALL'
                currentFilter={visibilityFilter}
                onClick={onFilterClick}
            >
                All
      </FilterLink>
            {' '}
            <FilterLink
                filter='SHOW_ACTIVE'
                currentFilter={visibilityFilter}
                onClick={onFilterClick}
            >
                Active
      </FilterLink>
            {' '}
            <FilterLink
                filter='SHOW_COMPLETED'
                currentFilter={visibilityFilter}
                onClick={onFilterClick}
            >
                Completed
      </FilterLink>
        </p>
    );

const Todo = ({
    onClick,
    completed,
    text
}) => (
        <li
            onClick={onClick}
            style={{
                textDecoration:
                    completed ?
                        'line-through' :
                        'none'
            }}>
            {text}
        </li>
    );

const TodoList = ({
    todos,
    onTodoClick
}) => (
        <ul>
            {todos.map(todo =>
                <Todo
                    key={todo.id}
                    {...todo}
                    onClick={() => onTodoClick(todo.id)}
                />
            )}
        </ul>
    );

const AddTodo = ({
    onAddClick
}) => {
    // TODO: Add code here to implement
    return undefined;
};

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed);
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed);
    }
};

let nextTodoId = 0;

const TodoApp = ({
    todos,
    visibilityFilter
}) => (
        <div>
            <AddTodo
                // TODO: Add code here to implement
            />
            <TodoList
                // TODO: Add code here to implement
            />
            <Footer
                // TODO: Add code here to implement
            />
        </div>
    );



const render = () => {
    ReactDOM.render(
        <TodoApp
            {...store.getState()}
        />,
        document.getElementById('root')
    );
};

store.subscribe(render);
render();
