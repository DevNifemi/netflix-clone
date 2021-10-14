const INITIAL_STATE = {
    userImage: null
}

const userReducer = ( state = INITIAL_STATE, action) => {
    switch (action.type){
        case 'SET_ACTIVE_PROFILE':
            return{ ...state, userImage: action.payload }


        default:
            return state
    }
}

export default userReducer;