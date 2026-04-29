import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
  const navigate = useNavigate();
  const [bookName, setBookName] = useState('')
  const [authorName, setAuthorName] = useState('')
  const [isbnNumber, setIsbnNumber] = useState(null)
  const [bookPrice, setBookPrice] = useState('')
  const [publishedAt, setPublishedAt] = useState('')
  const [image, setImage] = useState(null)
  
  // const [data, setData] = useState({
  //   bookName:'',
  //   authorName:'',
  //   bookPrice:'',
  //   isbnNumber:'',
  //   publishedAt:'',
  //   image:''

  // })
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setData({
  //     ...data,
  //     [name]: name === 'image' ? req.file.files[0] : value
  //   })
  // }



  const submitBook = async (e) => {
    e.preventDefault();
    // const response = await axios.post('http://localhost:3000/book', {
    //   bookName,
    //   authorName,
    //   bookPrice,
    //   isbnNumber,
    //   publishedAt,
    //   image
    // },
    //   {

    //     headers:
    //     {
    //       "Content-Type": "multipart/form-data"
    //     }
    //   }
    // )

    const formData = new FormData();
    formData.append('bookName',bookName)
    formData.append('authorName', authorName)
    formData.append('bookPrice', bookPrice)
    formData.append('isbnNumber', isbnNumber)
    formData.append('publishedAt', publishedAt)
    formData.append('image', image)


    const response = await axios.post('http://localhost:3000/book', formData)
    if (response.status === 201)
      navigate('/')


  }



  return (
    <>

      <div className='p-5'>

        <form onSubmit={submitBook} className="max-w-sm mx-auto mt-10">
          <h1 className='text-4xl text-center'>Create a Book</h1>
          <div className="mb-5">
            <label htmlFor="bookName" className="block mb-2.5 text-sm font-medium text-heading">Book Name</label>
            <input onChange={(e)=>setBookName(e.target.value)} type="text" name='bookName' id="bookName" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="Book Name" />
          </div>

          <div className="mb-5">
            <label htmlFor="authorName" className="block mb-2.5 text-sm font-medium text-heading">Author Name</label>
            <input onChange={(e)=>setAuthorName(e.target.value)} type="text" name='authorName' id="authorName" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="author name" />
          </div>

          <div className="mb-5">
            <label htmlFor="bookPrice" className="block mb-2.5 text-sm font-medium text-heading">Book Price</label>
            <input onChange={(e)=>setBookPrice(e.target.value)} type="number" name='bookPrice' id="bookPrice" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="Rs." />
          </div>
          <div className="mb-5">
            <label htmlFor="isbnNumber" className="block mb-2.5 text-sm font-medium text-heading">ISBN Number</label>
            <input onChange={(e)=>setIsbnNumber(e.target.value)} type="number" name='isbnNumber' id="isbnNumber" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="isbnNumber" />
          </div>
          <div className="mb-5">
            <label htmlFor="image" className="block mb-2.5 text-sm font-medium text-heading">image</label>
            <input onChange={(e)=>setImage(e.target.files[0])} type="file" name='image' id="image" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="upload image of book" />
          </div>
          <div className="mb-5">
            <label htmlFor="publishedAt" className="block mb-2.5 text-sm font-medium text-heading">publishedDate</label>
            <input onChange={(e)=>setPublishedAt(e.target.value)} type="date" name='publishedAt' id="publishedAt" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="publishedDate" />
          </div>



          <button type="submit" className="text-black text-center bg-blue-500 w-full box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Submit</button>
        </form>
      </div>

    </>
  )
}

export default AddBook