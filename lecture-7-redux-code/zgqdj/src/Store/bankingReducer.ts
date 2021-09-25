import { actionTypes } from "./actionTypes";

const initialState = {
  money: 0
};

type Action =
  | { type: actionTypes.Deposit; payload: number }
  | { type: actionTypes.Bankrupt }
  | { type: actionTypes.Withdraw; payload: number };
const bankingReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case actionTypes.Deposit:
      return {
        ...state,
        money: state.money + action.payload
      };
    case actionTypes.Withdraw:
      return {
        ...state,
        money: state.money - action.payload
      };
    case actionTypes.Bankrupt:
      return {
        ...state,
        money: 0
      };
    default:
      return state;
  }
};

export default bankingReducer;
