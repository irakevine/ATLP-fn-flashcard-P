import Head from 'next/head';
import Link from 'next/link';
import React from 'react'

 const  Home =()=> {
  return (

    <div className='h-screen bg-gray-200 w-screen flex flex-col items-center py-40        text-cyan-700 text-3xl'>
     FlashCard App
      <div>
<Link href ='/quiz'>
     <button  className='bg-cyan-700 text-white rounded m-10 py-4 px-10 text-lg'>Start Quiz</button>
     </Link>
      </div>
    </div>
    
   
   
  )
}
export default Home;
