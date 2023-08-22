import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div className='m-5'>
      <Link href='/ReactBlog' >
      <div className='rounded bg-gray-800 p-3'><h1 className='text-gray-200 text-5xl  sm:text-7xl'>Blog</h1>
      <br/>
        <h1 className='text-gray-200 text-3xl  sm:text-5xl'>The Power of react</h1>
        <br/>
        <p className='text-gray-200 text-xl  sm:text-2xl font-extralight'>In the realm of web development, creating dynamic, responsive, and
        user-friendly applications is the ultimate goal. Enter React, a
        JavaScript library that has taken the developer community by storm.</p>
      </div>
      </Link>
    </div>
  )
}
