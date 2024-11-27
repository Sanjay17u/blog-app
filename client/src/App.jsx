/* eslint-disable no-unused-vars */
import './App.css'
import React from 'react'
import NavBar from './components/NavBar'

function App() {

  return (
    <>
      <div className='bg-gray-950 min-h-screen text-white flex flex-col'>
        <NavBar/>
        <div className='flex-1 flex justify-center items-center'>
          <div className='text-center'>
            <h1 className="text-4xl font-bold">Welcome to the Blog-App!</h1>
            <p className="mt-4 text-lg font-medium">I am Sanjay Solanki writing and reading your own blogs Now..!</p> 
          </div>
        </div>
      </div>
    </>
  )
}

export default App
