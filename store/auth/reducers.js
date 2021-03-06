import { DECREMENT, INCREMENT } from "../types";
const inititiaState = {
  counter: 0
};

const counterReducer = (state = inititiaState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      };
    case DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      };
    default:
      return state;
  }
};

export default counterReducer;
