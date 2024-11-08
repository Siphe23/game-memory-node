// src/redux/reducer.js

import { combineReducers } from 'redux';

// Example reducer (you can replace this with your actual reducer)
const initialState = {
    data: []
};

const exampleReducer = (state = initialState, action) => {
    switch (action.type) {
        // Add case statements for actions here
        default:
            return state;
    }
};

// Combine reducers (you can add more reducers here)
const rootReducer = combineReducers({
    example: exampleReducer
});

export default rootReducer;
