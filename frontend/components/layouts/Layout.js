import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux'
import Cookies from 'js-cookie'
import { set_token } from '../../redux/reducers/authReducer';
import { useEffect } from 'react';
import { useRouter } from 'next/router';


const Layout = ({ children }) => {
    const dispatch = useDispatch()

    const router = useRouter();

    // check token and setup the token if available
    const getToken = async () => {
        if (Cookies.get('token')) {
            return dispatch(set_token(Cookies.get('token')))
        }

        // else remove token from global state
         return dispatch(set_token(null));
    }

    useEffect(() => {
        getToken();
    }, [Cookies.get('token')])

    const { token } = useSelector(state => state.authToken)


    // Logout user
    const logoutUser = async () => {
        try {
            const res = await fetch('http://localhost:8000/logout', {
                method: 'delete',
                headers: {
                    Authorization: Cookies.get('token'),
                }
            })

            const data = res.json()

            if (data.error) {
                return console.log(data.error);
            }

            // logout success
            console.log(data.message);

            // removing and logout user
            Cookies.remove('token');
            localStorage.removeItem('userInfo')
            dispatch(set_token(null));

            // redirecting to login
            router.push('/login');

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <ul>
                {token && (
                    <>
                        <li>
                            <Link href='/' >Home</Link>
                        </li>
                        <li>
                            <Link href='/about' >About</Link>
                        </li>
                    </>
                )}

                <li>
                    <Link href='/contact' >Contact</Link>
                </li>

                {token && (
                    <li>
                        <a onClick={logoutUser} >Logout</a>
                    </li>
                )}

                {!token && (
                    <>
                        <li>
                            <Link href='/login' >Login</Link>
                        </li>
                        <li>
                            <Link href='/signup' >Signup</Link>
                        </li>
                    </>
                )}
            </ul>

            {children}
        </div>
    )
}

export default Layout
