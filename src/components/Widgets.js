import { SearchIcon } from '@heroicons/react/outline'
import { DotsHorizontalIcon, VideoCameraIcon } from '@heroicons/react/solid'
import Contact from './Contact'
const contacts = [
  {
    src: 'https://res.cloudinary.com/dmvktbxff/image/upload/v1634603522/facebook_next/randomperson_renscw.jpg',
    name: 'John Doe',
  },
  {
    src: 'https://res.cloudinary.com/dmvktbxff/image/upload/v1634603401/facebook_next/MarkZuckerberg_ldgyta.jpg',
    name: 'Mark Zuckerberg',
  },
  {
    src: 'https://res.cloudinary.com/dmvktbxff/image/upload/v1634603400/facebook_next/ElonMusk_zkddlh.jpg',
    name: 'Elon Musk',
  },
  {
    src: 'https://res.cloudinary.com/dmvktbxff/image/upload/v1634603400/facebook_next/JeffBezos_kc99oc.jpg',
    name: 'Jeff Bezos',
  },
  {
    src: 'https://res.cloudinary.com/dmvktbxff/image/upload/v1634603400/facebook_next/BillGates_rxyaip.jpg',
    name: 'Bill Gates',
  },
  {
    src: 'https://res.cloudinary.com/dmvktbxff/image/upload/v1634654466/facebook_next/QueenElizabethII_kkbkz5.jpg',
    name: 'Queen Elizabeth II',
  },
  {
    src: 'https://res.cloudinary.com/dmvktbxff/image/upload/v1634654523/facebook_next/SteveJobs_j1fjkk.jpg',
    name: 'Steve Jobs',
  },
  {
    src: 'https://res.cloudinary.com/dmvktbxff/image/upload/v1634654594/facebook_next/SteveWozniak_ccx31q.jpg',
    name: 'Steve Wozniak',
  },
  {
    src: 'https://res.cloudinary.com/dmvktbxff/image/upload/v1634654654/facebook_next/DennisRitchie_hexsf4.jpg',
    name: 'Dennis Ritchie',
  },
]
function Widgets() {
  return (
    <div className='hidden lg:flex flex-col w-60 p-2 mt-5'>
      <div className='flex justify-between items-center text-gray-500 mb-5'>
        <h2 className='text-xl'>Contacts</h2>
        <div className='flex space-x-2'>
          <VideoCameraIcon className='h-6' />
          <SearchIcon className='h-6' />
          <DotsHorizontalIcon className='h-6' />
        </div>
      </div>
      {contacts.map((contact) => (
        <Contact key={contact.src} src={contact.src} name={contact.name} />
      ))}
    </div>
  )
}

export default Widgets
