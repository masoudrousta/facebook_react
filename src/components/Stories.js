import StoryCard from './StoryCard'

const stories = [
  {
    name: 'John Doe',
    src: 'https://res.cloudinary.com/dmvktbxff/image/upload/v1634603522/facebook_next/randomperson_renscw.jpg',
    profile:
      'https://res.cloudinary.com/dmvktbxff/image/upload/v1634603522/facebook_next/randomperson_renscw.jpg',
  },
  {
    name: 'Elon Musk',
    src: 'https://res.cloudinary.com/dmvktbxff/image/upload/v1634603400/facebook_next/ElonMusk_zkddlh.jpg',
    profile:
      'https://res.cloudinary.com/dmvktbxff/image/upload/v1634603400/facebook_next/ElonMusk2_fger9k.jpg',
  },
  {
    name: 'Jeff Bezos',
    src: 'https://res.cloudinary.com/dmvktbxff/image/upload/v1634603400/facebook_next/JeffBezos_kc99oc.jpg',
    profile:
      'https://res.cloudinary.com/dmvktbxff/image/upload/v1634603400/facebook_next/JeffBezos2_oknkpt.jpg',
  },
  {
    name: 'Bill Gates',
    src: 'https://res.cloudinary.com/dmvktbxff/image/upload/v1634603400/facebook_next/BillGates_rxyaip.jpg',
    profile:
      'https://res.cloudinary.com/dmvktbxff/image/upload/v1634603400/facebook_next/BillGates2_vcqfav.jpg',
  },
  {
    name: 'Mark Zuckerberg',
    src: 'https://res.cloudinary.com/dmvktbxff/image/upload/v1634603401/facebook_next/MarkZuckerberg_ldgyta.jpg',
    profile:
      'https://res.cloudinary.com/dmvktbxff/image/upload/v1634603400/facebook_next/MarkZuckerberg2_l70jnh.jpg',
  },
]
function Stories() {
  return (
    <div className='flex justify-center space-x-3 mx-auto'>
      {stories.map((stroy) => (
        <StoryCard
          key={stroy.src}
          name={stroy.name}
          src={stroy.src}
          profile={stroy.profile}
        />
      ))}
    </div>
  )
}

export default Stories
