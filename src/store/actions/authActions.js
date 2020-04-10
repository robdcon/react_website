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
}

export const register = (email, pass) => 
{
    return {
        type:'REGISTER',
        payload: {email, pass}
    }
}