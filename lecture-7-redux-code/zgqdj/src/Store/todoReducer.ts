import { actionTypes } from "./actionTypes";

const initialState = {
  money: 0
};

type Action =
  | { type: actionTypes.Deposit; payload: number }
  | { type: actionTypes.Bankrupt }
  | { type: actionTypes.Withdraw; amount: number };
const todoReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case actionTypes.Deposit:
      break;
    case actionTypes.Withdraw:
      break;
    case actionTypes.Bankrupt:
      break;
    default:
      return state;
  }
};

export default todoReducer;
