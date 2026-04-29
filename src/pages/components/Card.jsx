import axios from 'axios';
import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const Card = ({ book }) => {




    return (

        <>

            <Link to={`/singlebook/${book._id}`}>
                <div className=' max-w-sm rounded w-80 h-80  shadow-lg' key={book._id}>
                    <img className='w-full' src={book.image} alt="books" />
                    <div className='px-6 py-4'>
                        <div className="font-bold text-xl mb-2">{book.bookName}</div>
                        <div className='font-bold text-black'>Rs.{book.bookPrice}</div>
                        <p className='text-gray-300 font-bold text-justify'>Author Name:{book.authorName ? book.authorName : "kushal rokaya"}</p>
                    </div>

                </div>
                    
            </Link >

        </>
    )
}

export default Card