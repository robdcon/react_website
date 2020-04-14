import Api from '../../utils/api';

export const getUsers = (token) => {

    return (dispatch) => {

        Api.getUsers(token, (res) => {
            dispatch({
                type: 'GET_USERS',
                payload: res.data
            })
        })
    }
}

export const getPosts = (token) => {

    return (dispatch) => {

        Api.getPosts(token, (res) => {
            dispatch({
                type: 'GET_POSTS',
                payload: res.data
            })
        })
    }
}

export const addPost = (post, token) => {

    return (dispatch) => {

        Api.addPost(post, token, (res) => {
            dispatch({
                type: 'ADD_POST',
                payload: res.data
            })
        })
    }
}