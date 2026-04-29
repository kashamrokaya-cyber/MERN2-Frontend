import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import axios from 'axios'


const Home = () => {
  const [books, setBooks] = useState([]) //uta api ko data array ma xa so

  const fetchBooks = async () => {
    const response = await axios.get('http://localhost:3000/books');
    if (response.status === 200) {

      setBooks(response.data.data);
    }
  }



  useEffect(() => {
    fetchBooks();
  }, [])
 

  return (
    <>
      <Navbar />
      <div className='flex gap-3.5 flex-wrap justify-evenly mt-10'>
        {
          books.length > 0 && books.map((book, k) => {
            return (
              <Card key={k} book={book} />
            )

          })
        }

      </div>
    </>
  )
}

export default Home