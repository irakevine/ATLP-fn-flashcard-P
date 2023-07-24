'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import React from 'react'

const NavItem = ({name, link}:{name:string, link:string}) => {
    const pathname = usePathname()
  return (

    <Link href={link} className={`p-1 px-2 text-cyan-700 hover:bg-gray-200 ${pathname == link ? 'bg-gray-300' : 'bg-white' }`}>
        {name}
    </Link>
    

  )
}

export default NavItem