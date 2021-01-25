const initial = {
  isLogin: false,
  todos: []
};
const myReducer = (state = initial, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isLogin: action.payload
      };
    case "LOGOUT":
      return {
        ...state,
        isLogin: false
      };
    case "ADDTODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          { todo: action.payload, id: Math.ceil(Math.random() * 100) }
        ]
      };
    case "DELETETODO":
      return {
        ...state,
        todos: action.payload
      };
    default:
      return state;
  }
};
export default myReducer;
