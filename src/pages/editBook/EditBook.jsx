import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa6";
import axios from 'axios';
import { useEffect } from 'react';
const EditBook = () => {
  // const { id } = useParams();
  // const navigate = useNavigate();
  // const [bookName, setBookName] = useState('')
  // const [authorName, setAuthorName] = useState('')
  // const [isbnNumber, setIsbnNumber] = useState('')
  // const [bookPrice, setBookPrice] = useState('')
  // const [publishedAt, setPublishedAt] = useState('')
  // const [image, setImage] = useState(null)


  // const EditBook = async (e) => {
  //   e.preventDefault();


  //   const formData = new FormData();
  //   formData.append('bookName', bookName)
  //   formData.append('authorName', authorName)
  //   // formData.append('bookPrice', bookPrice)
  //   // formData.append('isbnNumber', isbnNumber)
  //   formData.append('publishedAt', publishedAt)
  //   // formData.append('image', image)
  //   if (bookPrice) {
  //     formData.append('bookPrice', Number(bookPrice));
  //   }

  //   if (isbnNumber) {
  //     formData.append('isbnNumber', Number(isbnNumber));
  //   }

  //   if (image) {
  //     formData.append('image', image);
  //   }


  //   const response = await axios.patch('http://localhost:3000/book/' + id, formData)
  //   if (response.status === 200) {

  //     navigate('/book' + id)
  //   } else {
  //     alert("something went wrong")
  //   }


  // }
  const { id } = useParams()
  const navigate = useNavigate()
  const [data, setData] = useState({
    bookName: '',
    bookPrice: '',
    isbnNumber: null,
    authorName: '',
    publishedAt: ''
  })
  const [image, setImage] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setData({
      ...data,
      [name]: name === 'image' ? e.target.files[0] : value
    })

  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()

    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value)
    })
    formData.append('image', image)

    const response = await axios.patch("http://localhost:3000/book/" + id, formData)
    if (response.status === 200) {
      navigate("/singlebook/" + id)
    } else {
      alert("Something went wrong")
    }

  }



  const fetchBook = async () => {
    const response = await axios.get("http://localhost:3000/book/" + id)
    if (response.status === 200) {

      setData(response.data.data)
    }
  }
  useEffect(() => {
    fetchBook()
  }, [])

  return (
    <>
      <div className='p-5'>

        <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-10">
          <Link to='/'><FaArrowLeft className='inline' /> Home</Link>
          <h1 className='text-4xl text-center'>Edit a Book</h1>
          <div className="mb-5">
            <label htmlFor="bookName" className="block mb-2.5 text-sm font-medium text-heading">Book Name</label>
            <input onChange={handleChange} value={data.bookName} type="text" name='bookName' id="bookName" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="Book Name" />
          </div>

          <div className="mb-5">
            <label htmlFor="authorName" className="block mb-2.5 text-sm font-medium text-heading">Author Name</label>
            <input onChange={handleChange} value={data.authorName} type="text" name='authorName' id="authorName" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="author name" />
          </div>

          <div className="mb-5">
            <label htmlFor="bookPrice" className="block mb-2.5 text-sm font-medium text-heading">Book Price</label>
            <input onChange={handleChange} value={data.bookPrice} type="number" name='bookPrice' id="bookPrice" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="Rs." />
          </div>
          <div className="mb-5">
            <label htmlFor="isbnNumber" className="block mb-2.5 text-sm font-medium text-heading">ISBN Number</label>
            <input onChange={handleChange} value={data.isbnNumber} type="number" name='isbnNumber' id="isbnNumber" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="isbnNumber" />
          </div>
          <div className="mb-5">
            <label htmlFor="image" className="block mb-2.5 text-sm font-medium text-heading">image</label>
            <input onChange={handleChange} type="file" name='image' id="image" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="upload image of book" />
          </div>
          <div className="mb-5">
            <label htmlFor="publishedAt" className="block mb-2.5 text-sm font-medium text-heading">publishedDate</label>
            <input onChange={handleChange} value={data.publishedAt} type="date" name='publishedAt' id="publishedAt" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="publishedDate" />
          </div>



          <button type="submit" className="text-black text-center bg-blue-500 w-full box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Edit book</button>
        </form>
      </div>
    </>
  )
}

export default EditBook