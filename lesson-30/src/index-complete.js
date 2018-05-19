import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

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

let nextTodoId = 0;
const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text
    };
};

const setVisibilityFilter = (filter) => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    };
};

const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id
    };
};

const { Component } = React;
const { connect } = ReactRedux;
const Link = ({
    active,
    children,
    onClick
}) => {
    if (active) {
        return <span>{children}</span>;
    }

    return (
        <a href="#"
            onClick={(e) => {
                e.preventDefault();
                onClick();
            }}
        >
            {children}
        </a>
    );
};

const mapStateToLinkProps = (
    state,
    ownProps
) => {
    return {
        active: ownProps.filter ===
            state.visibilityFilter
    };
};

const mapDispatchToLinkProps = (
    dispatch,
    ownProps
) => {
    return {
        onClick: () => {
            dispatch(
                setVisibilityFilter(ownProps.filter)
            );
        }
    };
};

const FilterLink = connect(
    mapStateToLinkProps,
    mapDispatchToLinkProps
)(Link);

const Footer = () => (
    <p>
        Show:
        {' '}
        <FilterLink
            filter='SHOW_ALL'
        >
            All
        </FilterLink>
        {' '}
        <FilterLink
            filter='SHOW_ACTIVE'
        >
            Active
        </FilterLink>
        {' '}
        <FilterLink
            filter='SHOW_COMPLETED'
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

let AddTodo = ({ dispatch }) => {
    let input;
    return (
        <div>
            <input ref={node => {
                input = node
            }} />
            <button onClick={() => {
                dispatch(addTodo(input.value))
                input.value = '';
            }}>
                Add Todo
            </button>
        </div>
    );
};
AddTodo = connect()(AddTodo);

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

const mapStateToTodoListProps = (state) => {
    return {
        todos: getVisibleTodos(
            state.todos,
            state.visibilityFilter
        )
    };
};

const mapDispatchToTodoListProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id));
        }
    };
};

const VisbilityTodoList = connect(
    mapStateToTodoListProps,
    mapDispatchToTodoListProps
)(TodoList);

const TodoApp = () => (
    <div>
        <AddTodo />
        <VisbilityTodoList />
        <Footer />
    </div>
);

class Provider extends Component {
    getChildContext() {
        return {
            store: this.props.store
        };
    }
    render() {
        return this.props.children;
    }
};

Provider.childContextTypes = {
    store: PropTypes.object
};

const { createStore } = Redux;

ReactDOM.render(
    <Provider store={createStore(todoApp)}>
        <TodoApp />
    </Provider>,
    document.getElementById('root')
);
