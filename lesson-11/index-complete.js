const deepFreeze = require('deep-freeze');
const expect = require('expect');

const todos = (state=[], action) => {
    switch(action.type) {
      case 'ADD_TODO':
        return [
          ...state,
          {
            id  : action.id,
            text: action.text,
            completed: false
          }
        ];
      break;
      default:
        return state;
    }
  };
  
  const testTodo = () => {
    const stateBefore = [];
    const action = {
      type: 'ADD_TODO',
      id  : 0,
      text: 'Learn Redux'
    };
    const stateAfter = [
      {
        id  : 0,
        text: 'Learn Redux',
        completed: false
      }
    ];
    
    deepFreeze(stateBefore);
    deepFreeze(action);
    
    expect(
      todos(stateBefore, action)
    ).toEqual(stateAfter);
  };
  
  
  testTodo();
  
  console.log('All tests passed!');