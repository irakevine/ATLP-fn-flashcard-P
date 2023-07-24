import React from 'react'
import NavItem from '../components/NavItem'
import Link from 'next/link'

const QuestionsLayout = ({children}: {
    children:React.ReactNode
}) => {
  return (
        <section className='h-screen bg-gray-200 w-screen flex flex-col items-center '>
            <nav className='w-screen bg-cyan-700 p-2 flex gap-4 justify-center text-white text-3xl'>
           <NavItem name='FlashCard App' link='/quiz'/>
            </nav>
            <div className='text-2xl text-cyan-700 pt-24'>
                Score: 0
            </div>
<div className='flex justify-center flex-wrap flex-auto'>
    <div className='flex justify-center items-center'>
    {children}
    </div>
</div>

<Link href ='/quiz'>
     <button  className='bg-cyan-700 text-white rounded m-4 py-4 px-4 border-solid border-4 border-gray-600'>Next Question</button>
     </Link>
        </section>
   
  )
}

export default QuestionsLayout