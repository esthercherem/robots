import { combineReducers, createStore } from "redux";

const initialState = {
  searchTerm: "", // Set the initial state for searchTerm
};

function robotReducer(state = initialState, action) {
  switch (action.type) {
    case "SEARCH_ROBOT":
      return { ...state, searchTerm: action.payload };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  robotReducer: robotReducer
});

export const store = createStore(rootReducer);