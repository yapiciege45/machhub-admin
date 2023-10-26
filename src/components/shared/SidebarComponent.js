import { IconChevronLeft, IconChevronRight, IconSettings, IconX } from '@tabler/icons-react'
import Link from 'next/link'
import React from 'react'

export const SidebarComponent = ({ navIsOpen, setNavIsOpen, links = [
    {
        title: 'Settings',
        icon: <IconSettings size={24} className='text-black group-hover:text-white transition-all' />,
        link: '/'
    }
] }) => {
  return (
    <div className={`${navIsOpen ? 'w-1/2 md:w-1/3 lg:w-1/4' : 'w-[13%] lg:w-[7%]'} border-r drop-shadow-xl p-5 transition-all`}>
        <div className='flex w-full justify-between items-center'>
            <h1 className='text-lg font-bold'>{navIsOpen ? 'MachHUB' : 'M'}</h1>
            {
                navIsOpen ? (
                    <IconX size={20} color='black' className='cursor-pointer' onClick={() => setNavIsOpen(!navIsOpen)} />
                ) : (
                    <IconChevronRight size={20} color='black' className='cursor-pointer' onClick={() => setNavIsOpen(!navIsOpen)} />
                )
            }
        </div>
        <div className='mt-5 w-full flex flex-col items-center'>
            {
                links.map(x => (
                    <Link href={x.link} className={`p-3 ${navIsOpen && 'w-full'} flex mt-5 items-center rounded-lg hover:bg-blue-400 group transition-all`}>
                        {x.icon}
                        {
                            navIsOpen && (
                                <p className='ml-3 text-lg group-hover:text-white transition-all'>{x.title}</p>
                            )
                        }
                    </Link>
                ))
            }
        </div>
    </div>
  )
}
