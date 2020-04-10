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
    }
};

export default Api;