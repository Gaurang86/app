import { SINGUPDATA } from './constant'
const initialState = {
  user: [],
}

export const singReducer = (state = initialState, action) => {
  switch (action.type) {
    case SINGUPDATA:
      return {
        ...state,
        user: [...state.user, action.payload],
      }

    default:
      return state
  }
}
