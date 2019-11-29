import { ADD_JOKE, CLEAR_JOKES } from './actions'

const initialState = {
    jokes: []
}

export function homeReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_JOKE: return { jokes: [...state.jokes, action.joke] }
        case CLEAR_JOKES: return { jokes: [] }
    }
    return state
}