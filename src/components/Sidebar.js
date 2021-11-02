import {
  ChevronDownIcon,
  UserGroupIcon,
  ShoppingBagIcon,
} from '@heroicons/react/outline'
import {
  CalendarIcon,
  ClockIcon,
  DesktopComputerIcon,
  UsersIcon,
} from '@heroicons/react/solid'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import SidebarRow from './SidebarRow'

function Sidebar() {
  const user = useSelector(selectUser)

  return (
    <div className='p-2 mt-5 max-w[600px] xl:min-w-[300px]'>
      <SidebarRow src={user.image} title={user.name} />
      <SidebarRow Icon={UsersIcon} title='Friends' />
      <SidebarRow Icon={UserGroupIcon} title='Groups' />
      <SidebarRow Icon={ShoppingBagIcon} title='Marketplace' />
      <SidebarRow Icon={DesktopComputerIcon} title='Watch' />
      <SidebarRow Icon={CalendarIcon} title='Events' />
      <SidebarRow Icon={ClockIcon} title='Memories' />
      <SidebarRow Icon={ChevronDownIcon} title='See More' />
    </div>
  )
}

export default Sidebar
