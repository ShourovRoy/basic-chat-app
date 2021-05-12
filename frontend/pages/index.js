import { useEffect, useState } from "react"
import { authenticator } from "../controllers/helpers/authHelper"
import { useDispatch } from 'react-redux'
import { set_token } from "../redux/reducers/authReducer";
import { useRouter } from "next/router";
import Cookies from 'js-cookie';
import { io } from 'socket.io-client';

//TODO: socket connection
const socket = io("http://localhost:8000");

const Home = ({ serverData }) => {

  // page actions state
  const [isLoading, setisLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // message input state
  const [messageInput, setmessageInput] = useState("");
  const [messages, setmessages] = useState(serverData?.allMessages);

  const dispatch = useDispatch();

  const router = useRouter();

  // authenticator middleware
  const resAuth = async () => {

    const res = await authenticator()

    if (res.error) {
      // error message
      console.log(res.error)

      // removing token from state
      dispatch(set_token(null))
      return router.push('/login')
    }

    setisLoading(false);
    setIsAuthenticated(true);

    // authenticated message
    console.log(res.message);

  }

  useEffect(() => {
    resAuth()
  }, [])

  

  // set messages to all messages
  socket.on('serverMessageRes', messageData => {
    setmessages([...messages, messageData])
  })


  // send message all logics starts from here.

  // send message
  const sendMessage = async () => {
    try {

      const res = await fetch('http://localhost:8000/sendMessage', {
        method: 'post',
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          Authorization: Cookies.get('token'),
        },
        body: JSON.stringify({
          message: messageInput,
        })
      })

      const data = await res.json();

      if (data.error) {
        return console.log(data.error);
      }

      console.log(data.message);


    } catch (error) {
      console.log('Please check your internet connection');
    }
  }

  // message Form handler
  const messageFormHandler = e => {
    e.preventDefault();
    sendMessage();

    setmessageInput('')
  }






  return (
    <>
      {isLoading && !isAuthenticated ? (
        <h1>Loading</h1>
      )
        : (
          <div>
            <form method="post" onSubmit={messageFormHandler}>
              <input value={messageInput} onChange={e => setmessageInput(e.target.value)} type="text" placeholder="Enter message" />
              <button type="submit">Send message</button>
            </form>

            <div>
              {messages.map((message, index) => (
                <h3 key={message._id || index}>{message.message}</h3>
              ))}
            </div>
          </div>
        )}
    </>
  )
}

export default Home


// get serverSideProps
export async function getServerSideProps(context) {

  const res = await fetch('http://localhost:8000/messages');

  const serverData = await res.json();

  return {
    props: { serverData },
  }
}
