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

export const getSinglePost = (id, token) => {

    return dispatch => {
        Api.getSinglePost(id, token, res => {
            dispatch({
                type: 'GOT_SINGLE_POST',
                payload: res.data
            })
        })
    }
}

export const updatePost = (post, token) => {
    return dispatch => {
        Api.updatePost(post, token, res => {
            dispatch({
                type: 'UPDATED_POST',
                payload: res.data
            })
        })
    }
}

export const uploadImage = (data, token, postId, userId) => {
    return dispatch => {
        Api.uploadImage(data, token, postId, userId, res => {
            dispatch({
                type: 'UPLOAD_IMAGE',
                payload: res.data
            })
        })
    }
}