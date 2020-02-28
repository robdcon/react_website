import Api from '../../utils/api';

export const login = (email, pass) => 
{
    return (dispatch) => {
      
        Api.login(email, pass, res => {
            
            dispatch({
                type:'LOGIN',
                payload: {
                    email:email, 
                    token: res.data.id,
                    userId: res.data.user
                }
            })
        })
    }
    // return {
    //     type:'LOGIN',
    //     payload: {email, pass}
    // }
}

export const register = (email, pass) => 
{
    return {
        type:'REGISTER',
        payload: {email, pass}
    }
}