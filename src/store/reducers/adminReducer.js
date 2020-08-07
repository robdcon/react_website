import SwitchBase from "@material-ui/core/internal/SwitchBase"

const defaultState = {
    users: [],
    posts: [],
    post: {}
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
                posts: state.posts.concat(action.payload),
                post: action.payload
            }
         case 'UPDATED_POST':
            return {
                ...state,
                post: action.payload,
                posts: state.posts.map(p => {
                    if(p.id === action.payload.id) {
                        // Existing post in redux that has been updated
                        // and currently in action.payload
                        return {
                            ...p,
                            ...action.payload
                        }
                    } else {
                        return p
                    }
                })
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