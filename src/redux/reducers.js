const initialState = {
    count: 0
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case "save":
            return { ...state, ...payload };
        default:
            return state;
    }
};
