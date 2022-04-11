const query_reducer = (state = "", action) => {
    switch (action.type) {
        case "SET_QUERY":
            return action.payload;
        default:
            return state;
    }
};

export default query_reducer;
