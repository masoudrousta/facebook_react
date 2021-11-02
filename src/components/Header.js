import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from '@heroicons/react/solid'
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline'
import HeaderIcon from './HeaderIcon'

import { logout, selectUser } from '../features/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from '../firebase'

function Header() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  const signUserOut = () => {
    dispatch(logout())
    auth.signOut()
  }
  return (
    <div className='sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md'>
      {/* Left */}
      <div className='flex items-center'>
        <img
          src='https://res.cloudinary.com/dmvktbxff/image/upload/v1634558489/facebook_next/Facebook-logo_pojr7r.png'
          style={{ width: '60px', height: '40px' }}
        />

        <div className='flex ml-2 items-center rounded-full bg-gray-200 p-2'>
          <SearchIcon className='h-6 text-gray-600' />
          <input
            type='text'
            placeholder='Search Facebook'
            className='flex flex-shrink hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500'
          />
        </div>
      </div>
      {/* Centre */}
      <div className='flex justify-center flex-grow'>
        <div className='flex  space-x-6 md:space-x-2'>
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>

      {/* Right */}
      <div className='flex items-center sm:space-x-2 justify-end'>
        {/* Profile Pic */}
        <img
          onClick={signUserOut}
          className='rounded-full cursor-pointer fixed'
          src={user.image}
          style={{ width: '40px', height: '40px' }}
        />
        <p className='hidden font-semibold pr-3 whitespace-nowrap'>
          {user.name}
        </p>
        <ViewGridIcon className='icon' />
        <ChatIcon className='icon' />
        <BellIcon className='icon' />
        <ChevronDownIcon className='icon' />
      </div>
    </div>
  )
}

export default Header
