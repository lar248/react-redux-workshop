const deepFreeze = require('deep-freeze');
const expect = require('expect');

const toggleTodo = (todo) => {
	return {
		...todo,
		completed: !todo.completed
	};
};

const testToggleTodo = () => {
	const todoBefore = {
		id: 0,
		text: 'Learn Redux',
		completed: false
	};
	const todoAfter = {
		id: 0,
		text: 'Learn Redux',
		completed: true
	};

	deepFreeze(todoBefore);

	expect(
		toggleTodo(todoBefore)
	).toEqual(todoAfter);
};

testToggleTodo();

console.log('All Test Passed');