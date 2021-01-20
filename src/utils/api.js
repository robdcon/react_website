import axios from 'axios';
const host = 'http://localhost:8181';

const Api = {
    createFileUrl: (url, token) => {
        return host + url + '?access_token=' + token;
    },
    login: (email, password, success) => {
       
        axios.post(`${host}/api/users/login`, {email:email, password:password} )
        .then(res => {
             console.log("LOGIN RESPONSE: ", res);
            success(res);
        });
    },
    getUsers: (token, success) => {
        axios.get(`${host}/api/users?access_token=${token}`)
        .then((res) => {
            console.log(res);
            success(res);
        })
    },
    getPosts: (token, success) => {
        axios.get( `${host}/api/posts`)
        .then((res) => {
            success(res);
        })
    },
    addPost: (post, token, success) => {
        console.log(post)
        axios.post(`${host}/api/Posts?access_token=${token}`, post)
        .then((res) => {
            console.log("Res:",res)
            success(res);
        })
    },
    updatePost: (post, token, success) => {
        axios.patch(`${host}/api/Posts/${post.id}?access_token=${token}`, post)
            .then(res => {
                success(res);
            })
    },
    getSinglePost: (id, token, success) => {
        axios.get(`${host}/api/Posts/${id}?access_token=${token}`, {
            params: {
                filter: {
                    include: 'PostImage'
                }
            }
        })
        .then(res => {
            success(res);
        })
    },
    uploadImage: (data, token, postId, userId, success) => {
        axios.post(`${host}/api/PostImages/upload?post_id=${postId}&access_token=${token}&user_id=${userId}`, data)
        .then(res => {
            success(res);
        })
    }
};

export default Api;