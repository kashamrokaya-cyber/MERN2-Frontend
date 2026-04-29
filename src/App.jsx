import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import EditBook from './pages/editBook/EditBook'
import AddBook from './pages/addBook/AddBook'
import SingleBook from './pages/singleBook/SingleBook'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/edit/:id' element={<EditBook />} />
          <Route path='/addbook' element={<AddBook />} />
          <Route path='/singlebook/:id' element={<SingleBook/>}/>
          <Route />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
