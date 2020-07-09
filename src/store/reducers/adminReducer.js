import SwitchBase from "@material-ui/core/internal/SwitchBase"

const defaultState = {
    users: [],
    posts: []
}

const admin = (state = defaultState, action) => {
    switch(action.type) {
        case 'GET_USERS':
            return {
                ...state,
                users: action.payload
            }
        case 'GET_POSTS':
            return {
                ...state,
                posts: action.payload
            }
        case 'ADD_POST':
            return {
                ...state,
                posts: state.posts.concat(action.payload)
            }
        case 'GOT_SINGLE_POST':
            return {
                ...state,
                post: action.payload
            }
        default: 
        return state;
    }
}

export default admin;