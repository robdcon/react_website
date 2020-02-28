import axios from 'axios';
const host = 'http://localhost:8080';

const Api = {
   
    login: (email, password, success) => {
       
        axios.post(`${host}/api/users/login`, {email:email, password:password} )
        .then(res => {
             console.log("LOGIN RESPONSE: ", res);
            success(res);
        });
    }
};

export default Api;