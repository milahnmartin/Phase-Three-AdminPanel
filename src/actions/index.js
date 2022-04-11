export const SetView = (new_view) => {
    return {
        type: "SET_VIEW",
        payload: new_view,
    };
};

export const SetQuery = (username) => {
    return {
        type: "SET_QUERY",
        payload: username,
    };
};
