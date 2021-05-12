import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from 'react-redux'
import { set_token } from "../redux/reducers/authReducer";
import Cookies from 'js-cookie'
import ms from 'ms'


const Login = () => {

    const dispatch = useDispatch();

    const router = useRouter();

    const [inputValue, setInputValue] = useState({ email: "", password: "" });

    const inputValueTracker = e => {
        const name = e.target.name;
        setInputValue({ ...inputValue, [name]: e.target.value });
    }

    const signinUser = async () => {
        try {

            // login request
            const res = await fetch(`http://localhost:8000/signin`, {
                method: 'post',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: inputValue.email,
                    password: inputValue.password,
                })
            })

            const data = await res.json();

            // checking login errors
            if (data.error) {
                return console.log(data.error);
            }

            // message here
            console.log(data.message);

            // set token
            
            await Cookies.set('token', data.token, {
                expires: new Date(Date.now() + ms('1h'))
            });

            dispatch(set_token(data.token));

            // set user info to localstorage
            localStorage.setItem('userInfo', JSON.stringify(data?.userInfo));

            // redurect to the main page
            router.push('/');

        } catch (error) {
            console.log('Please check your internet connection.')
        }
    }

    // signup form handler
    const signinFormHandler = e => {
        e.preventDefault();
        signinUser()
    }


    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={signinFormHandler}>
                <input value={inputValue.email} onChange={inputValueTracker} type="email" name="email" placeholder="Email" />
                <input value={inputValue.password} onChange={inputValueTracker} type="password" name="password" placeholder="Password" />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login
