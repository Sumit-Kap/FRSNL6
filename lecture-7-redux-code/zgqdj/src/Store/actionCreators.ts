import { actionTypes } from "./actionTypes";

export const deposit = (amount: number) => {
  return {
    type: actionTypes.Deposit,
    payload: amount
  };
};

export const withdraw = (amount: number) => {
  return {
    type: actionTypes.Withdraw,
    payload: amount
  };
};

export const bankrupt = () => {
  return {
    type: actionTypes.Bankrupt
  };
};
