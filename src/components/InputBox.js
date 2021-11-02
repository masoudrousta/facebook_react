import { EmojiHappyIcon } from '@heroicons/react/outline'
import { CameraIcon, VideoCameraIcon } from '@heroicons/react/solid'
import { useRef, useState } from 'react'
import { db, storage } from '../firebase'
import {
  collection,
  doc,
  addDoc,
  updateDoc,
  serverTimestamp,
} from '@firebase/firestore'
import { ref, uploadString, getDownloadURL } from '@firebase/storage'
import { selectUser } from '../features/userSlice'
import { useSelector } from 'react-redux'

const InputBox = () => {
  const [imageToPost, setImageToPost] = useState(null)
  const user = useSelector(selectUser)
  const inputRef = useRef(null)
  const filePickerRef = useRef(null)

  const sendPost = async (e) => {
    e.preventDefault()
    if (!inputRef.current.value) return

    const docRef = await addDoc(collection(db, 'posts'), {
      message: inputRef.current.value,
      name: user.name,
      email: user.email,
      userProfile: user.image,
      timestamp: serverTimestamp(),
    })

    inputRef.current.value = ''

    if (imageToPost) {
      const imageRef = ref(storage, `posts/${docRef.id}`)
      await uploadString(imageRef, imageToPost, 'data_url').then(
        async (snapshot) => {
          removeImage()
          const downloadURL = await getDownloadURL(imageRef)
          await updateDoc(doc(db, 'posts', docRef.id), {
            image: downloadURL,
          })
        }
      )
    }
  }

  const addImageToPost = (e) => {
    e.preventDefault()
    const reader = new FileReader()
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0])
    }

    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target.result)
    }
  }

  const removeImage = () => {
    setImageToPost(null)
  }
  return (
    <div className='bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6'>
      <div className='flex space-x-4 items-center mb-2'>
        <img
          className='rounded-full'
          src={user.image}
          style={{ height: '40px', width: '40px' }}
        />
        <form className='flex flex-1'>
          <input
            ref={inputRef}
            className='rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none'
            type='text'
            placeholder={`What's on your mind, ${user.name}?`}
          />
          <button hidden type='submit' onClick={sendPost}>
            Submit
          </button>
        </form>
        {imageToPost && (
          <div
            className='flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer'
            onClick={removeImage}
          >
            <img
              className='h-10 object-contain'
              src={imageToPost}
              alt='chosen'
            />
            <p className='text-xs text-red-500 text-center'>Remove</p>
          </div>
        )}
      </div>
      <div className='flex justify-evenly p-3 border-t'>
        <div className='input-icon'>
          <VideoCameraIcon className='h-7 text-red-500' />
          <p className='text-xs sm:text-sm xl:text-base'>Live Video</p>
        </div>
        <div
          className='input-icon'
          onClick={() => {
            filePickerRef.current.click()
          }}
        >
          <CameraIcon className='h-7 text-green-400' />
          <p className='text-xs sm:text-sm xl:text-base'>Photo/Video</p>
          <input
            ref={filePickerRef}
            type='file'
            hidden
            onChange={addImageToPost}
          />
        </div>
        <div className='input-icon'>
          <EmojiHappyIcon className='h-7 text-yellow-300' />
          <p className='text-xs sm:text-sm xl:text-base'>Feeling/Activity</p>
        </div>
      </div>
    </div>
  )
}

export default InputBox
