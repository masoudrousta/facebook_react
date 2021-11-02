import { signInWithPopup } from '@firebase/auth'
import { useDispatch } from 'react-redux'
import { login } from '../features/userSlice'
import { auth, provider } from '../firebase'

function Login() {
  const dispatch = useDispatch()
  const signUserIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        dispatch(
          login({
            image: result.user.photoURL,
            name: result.user.displayName,
            email: result.user.email,
          })
        )
      })
      .catch((error) => {
        alert(error.message)
      })
  }
  return (
    <div className='grid place-items-center '>
      <img
        src='https://res.cloudinary.com/dmvktbxff/image/upload/v1634558489/facebook_next/Facebook-logo_pojr7r.png'
        className='object-contain'
        style={{ height: '400px', width: '400px' }}
      />
      <h1
        onClick={signUserIn}
        className='p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer hover:bg-blue-700 '
      >
        Login with Facebook
      </h1>
    </div>
  )
}

export default Login
