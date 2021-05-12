import Cookies from 'js-cookie'

export const authenticator = async () => {
    try {

        // token variable
        let token;

        // check if token is available in cookies
        if (Cookies.get('token')) {
            token = Cookies.get('token');
        }


        // auth checker request
        const res = await fetch('http://localhost:8000/authenticate', {
            method: 'get',
            headers: {
                Authorization: token,
            }
        })

        const data = await res.json()

        // validate data if any error is here
        if (data.error || data === undefined || data === null) {
            Cookies.remove('token');
            localStorage.removeItem('userInfo')
        }

        // send the response
        return data;


    } catch (error) {
        console.log(error)
    }
}