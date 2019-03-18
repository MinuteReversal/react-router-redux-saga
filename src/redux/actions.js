export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export const add = payload => ({
    type: INCREMENT,
    payload
});

export const remove = payload => ({
    type: DECREMENT,
    payload
});
