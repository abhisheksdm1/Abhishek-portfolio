import Link from 'next/link'
import React from 'react'
export default function Header() {
  return (
    <div className=' flex text-gray-200 p-5  sm:text-2xl '>
        <Link href="/"><div className=' hidden  sm:flex w-5 w-1 rounded-full bg-gray-200 b_radius'></div></Link>
        <div className='flex w-full justify-between sm:justify-end'>
        <Link href="/Experience" className='sm:pl-5'><span>About</span></Link>
        <Link href="/BlogList" className='sm:pl-5'><span>Blog</span></Link>
         <Link href='https://github.com/abhisheksdm1'><span className='sm:pl-5'>Project</span></Link>
         </div>
    </div>
  )
}
