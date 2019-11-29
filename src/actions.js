export const CLEAR_JOKES = "CLEAR_JOKES";
export const ADD_JOKE = "ADD_JOKE";

export const addJoke = joke => ({
    type: 'ADD_JOKE',
    joke
})

export const clearJokes = () => ({
    type: 'CLEAR_JOKES'
})