import { BUY_CHOCOLATE } from "./chocolateTypes";

const initialState = {
  numOfChocolate: 50
};

const chocolateReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CHOCOLATE:
      return {
        ...state,
        numOfChocolate: state.numOfChocolate - 1
      };
    default:
      return state;
  }
};

export default chocolateReducer;
