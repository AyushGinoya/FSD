import { ADD, DELETE, EDIT } from "./actionType";

const reducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        {
          id: action.id,
          todo: action.todoText,
          status: false,
        },
      ];
    case EDIT: {
      return state.map((current) => {
        if (current.id === action.id) {
          return { ...current, todo: action.todoText };
        } else {
          return current;
        }
      });
    }
    case DELETE: {
      return state.filter((current) => current.id !== action.id);
    }

    default:
      return state;
  }
};

export default reducer;
