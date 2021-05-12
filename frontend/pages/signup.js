import { useState } from "react";
import { useRouter } from "next/router";

const Signup = () => {
    const router = useRouter();

    const [inputValue, setInputValue] = useState({ name: "", email: "", password: "", cpassword: "" });

    const inputValueTracker = e => {
        const name = e.target.name;
        setInputValue({ ...inputValue, [name]: e.target.value });
    }

    const signupUser = async () => {
        try {
            const res = await fetch(`http://localhost:8000/signup`, {
                method: 'post',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: inputValue.name,
                    email: inputValue.email,
                    password: inputValue.password,
                    cpassword: inputValue.cpassword
                })
            })

            const data = await res.json();

            if (data.error) {
                return console.log(data.error);
            }

            console.log(data.message);
            router.push('/login');

        } catch (error) {
            console.log('Please check your internet connection.')
        }
    }

    // signup form handler
    const signupFormHandler = e => {
        e.preventDefault();
        signupUser()
    }

    return (
        <div>
            <h1>Signup Page</h1>
            <form onSubmit={signupFormHandler}>
                <input value={inputValue.name} onChange={inputValueTracker} type="text" name="name" placeholder="Name" />
                <input value={inputValue.email} onChange={inputValueTracker} type="email" name="email" placeholder="Email" />
                <input value={inputValue.password} onChange={inputValueTracker} type="password" name="password" placeholder="Password" />
                <input value={inputValue.cpassword} onChange={inputValueTracker} type="password" name="cpassword" placeholder="Confirm Password" />
                <button type="submit">Signup</button>
            </form>
        </div>
    )
}

export default Signup
