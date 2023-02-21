import { LOGINDATA } from './constant'

const initialState = {
  userlogin: [],
}

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGINDATA:
      return { ...state, userlogin: [...state.userlogin, action.payload] }

    default:
      return state
  }
}
