import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { withdraw, deposit, bankrupt } from "./Store/actionCreators";
import { actionTypes } from "./Store/actionTypes";
import { State } from "./Store/rootReducer";
// const Banking = (props) => {
//   const dispatch = useDispatch();
//   const banking = useSelector((state: State) => state.banking);
//   return (
//     <div>
//       Value is {banking.money}
//       <br />
//       <button
//         onClick={() => {
//           dispatch(deposit(2000));
//         }}
//       >
//         Deposit
//       </button>
//       <button
//         onClick={() => {
//           dispatch(withdraw(1000));
//         }}
//       >
//         Withdraw
//       </button>
//       <button
//         onClick={() => {
//           dispatch(bankrupt());
//         }}
//       >
//         Bankrupt
//       </button>
//     </div>
//   );
// };
// function mapStateToProps(state) {
//   return {
//     banking: state.banking,
//     todo: state.todo
//   };
// }
// export default connect(mapStateToProps)(Banking); // 1st way of connecting our component with redux
// export default Banking;
// connect & withRouter both are HOC's
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
const Banking = () => {
  const [banking, dispatch] = React.useReducer(bankingReducer, initialState);
  // console.log("print money", money, dispatch);
  return (
    <div>
      Value is {banking.money}
      <br />
      <button
        onClick={() => {
          dispatch({ type: actionTypes.Deposit, payload: 2000 });
        }}
      >
        Deposit
      </button>
      <button
        onClick={() => {
          dispatch({ type: actionTypes.Withdraw, payload: 2000 });
        }}
      >
        Withdraw
      </button>
      <button
        onClick={() => {
          dispatch({ type: actionTypes.Bankrupt, payload: 2000 });
        }}
      >
        Bankrupt
      </button>
    </div>
  );
};
export default Banking;
