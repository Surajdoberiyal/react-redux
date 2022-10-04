const initialState = 1;

const multiply = (state = initialState, action) => {
    switch (action.type) {
        case "MULTIPLY" : return state * action.payload;
        default: return state;
    }
}

export default multiply;    