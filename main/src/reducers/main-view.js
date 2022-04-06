const view_reducer = (state = "STATUS", action) => {
    switch (action.type) {
        case "SET_VIEW":
            return action.payload;
        default:
            return state;
    }
};

export default view_reducer;
