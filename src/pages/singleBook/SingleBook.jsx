import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';

const SingleBook = () => {
  const [book, setBook] = useState({})
  const { id } = useParams();
const navigate=useNavigate();

  const fetchSingleBook = async () => {
    const response = await axios.get(`http://localhost:3000/book/${id}`)
    if (response.status === 200) {
      setBook(response.data.data)
    }
  }

  useEffect(() => {
    fetchSingleBook();
  }, [])


  const deleteBook = async () => {
    const response = await axios.delete(`http://localhost:3000/book/${id}`)
    if (response.status === 200) {
      navigate('/')
    }
  }


  return (
    <>
      <Navbar />
      <div className='p-30 bg-gray-400'>

        <img className='w-full rounded-4xl ' src={book.image ? book.image : "https://image.slidesharecdn.com/myfavouritebook-150117160904-conversion-gate02/85/My-favourite-book-1-320.jpg"} />
        <div className='px-6 py-4' >
          <div className="font-bold text-3xl mb-2">{book.bookName} </div>
          <div className='font-bold text-black'>Rs.{book.bookPrice} </div>
          <p className='text-gray-300 font-bold text-justify'>Author Name:{book.authorName}"</p>
        </div>
        <div className='flex justify-between pb-3'>
         <Link to={`/edit/${book._id}`}><button className='bg-blue-400 px-10 rounded hover:text-white cursor-pointer '>Edit</button></Link> 
          <button onClick={deleteBook} className='bg-red-500 rounded px-10 hover:text-white'>Delete</button>

        </div>
      </div>


    </>
  )
}

export default SingleBook