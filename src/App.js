import Header from './components/Header'
import Login from './components/Login'
import Sidebar from './components/Sidebar'
import Feed from './components/Feed'
import Widgets from './components/Widgets'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout, selectUser } from './features/userSlice'
import { useEffect } from 'react'
import { onAuthStateChanged } from '@firebase/auth'
import { auth } from './firebase'
function App() {
  const user = useSelector(selectUser)

  const dispatch = useDispatch()
  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        dispatch(
          login({
            image: authUser.photoURL,
            name: authUser.displayName,
            email: authUser.email,
          })
        )
      } else {
        dispatch(logout())
      }
    })
  }, [])
  if (!user) return <Login />
  return (
    <div className='h-screen bg-gray-300 overflow-hidden'>
      {/* Header */}
      <Header />
      <main className='flex'>
        {/* Sidebar */}
        <Sidebar />
        {/* Feed */}
        <Feed />

        {/* Widgets */}
        <Widgets />
      </main>
    </div>
  )
}

export default App
