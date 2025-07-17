"use client";

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const navitms=[
    {label:'Learning Companions' , href:'/companions'},
    {label:'My Journey' , href:'/my-journey'}
]

const Navitems = () => {
    const pathname=usePathname();
  return (
    <div className='flex items-center gap-2.5'>{navitms.map(({href,label})=>(
        <Link href={href} key={label} className={cn(pathname === href && 'text-primary font-semibold')}>{label}</Link>

    ))}</div>
  )
}

export default Navitems;
