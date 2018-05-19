import * as Redux from 'redux';

const counter = (state = 0, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return state + 1;
			break;
		case 'DECREMENT':
			return state - 1;
			break;
		default:
			return state;
	}
}

const { createStore } = Redux;
const store = createStore(counter);
const render = () => {
	document.body.innerText = store.getState();
}

store.subscribe(render);
render();

document.addEventListener('click', () => {
	store.dispatch({ type: 'INCREMENT' });
});