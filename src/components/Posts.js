import { useEffect, useState } from 'react'
import { collection, onSnapshot, orderBy, query } from '@firebase/firestore'
import { db } from '../firebase'
import { ChatAltIcon, ShareIcon, ThumbUpIcon } from '@heroicons/react/outline'

function Posts() {
  const [posts, setPosts] = useState([])

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
        (querySnapshot) => setPosts(Array.from(querySnapshot.docs))
      ),
    [db]
  )
  return (
    <div>
      {posts.map((post) => {
        const { image, name, message, userProfile, timestamp } = post.data()
        return (
          <div className='flex flex-col' key={post.id}>
            <div className='p-5 bg-white mt-5 rounded-t-2xl shadow-sm'>
              <div className='flex items-center space-x-2'>
                <img
                  className='rounded-full'
                  src={userProfile}
                  alt={name}
                  style={{ height: '40px', width: '40px' }}
                />
                <div className='text-xs text-gray-600'>
                  <p className='font-medium'>{name}</p>
                  <p className='text-xs text-gray-600'>
                    {new Date(timestamp?.toDate()).toLocaleString()}
                  </p>
                </div>
              </div>
              <p className='pt-4'>{message}</p>
            </div>
            {image && (
              <div className='relative h-56 md:h-96 bg-white flex justify-center'>
                <img src={image} alt='post' className='object-contain' />
              </div>
            )}
            <div className='flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t'>
              <div className='input-icon rounded-none rounded-bl-2xl hover:bg-gray-300'>
                <ThumbUpIcon className='h-4' />
                <p className='text-sm sm:text-base'>Like</p>
              </div>
              <div className='input-icon rounded-none hover:bg-gray-300'>
                <ChatAltIcon className='h-4' />
                <p className='text-sm sm:text-base'>Comment</p>
              </div>
              <div className='input-icon rounded-none rounded-br-2xl hover:bg-gray-300'>
                <ShareIcon className='h-4' />
                <p className='text-sm sm:text-base'>Share</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Posts
