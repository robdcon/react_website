import axios from 'axios';
const host = 'http://localhost:8080';

const Api = {
   
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
            console.log("Posts Res: ", res);
            success(res);
        })
    },
    addPost: (post, token, success) => {
        axios.post(`${host}/api/Posts?access_token=${token}`, post)
        .then((res) => {
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
        axios.get(`${host}/api/Posts/${id}?access_token=${token}`)
        .then(res => {
            success(res);
        })
    }
};

export default Api;