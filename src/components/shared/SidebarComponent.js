import { Context } from '@/context/context'
import { IconChevronRight, IconX } from '@tabler/icons-react'
import Link from 'next/link'
import React from 'react'

export const SidebarComponent = ({ navIsOpen, setNavIsOpen, links = [] }) => {
  return (
    <Context.Consumer>
    {({ navIsOpen, setNavIsOpen, mobileNavIsOpen }) => (
        <div className={`${navIsOpen ? 'w-full md:w-1/3 lg:w-1/4' : 'w-1/4 md:w-[13%] lg:w-[7%]'} ${mobileNavIsOpen ? 'block' : 'md:relative md:left-0 absolute left-[-1000px] top-0'} border-r drop-shadow-xl p-5 transition-all bg-white dark:bg-slate-700`}>
            <div className='flex w-full justify-between items-center'>
                <h1 className='text-lg font-bold dark:text-white'>{navIsOpen ? 'MachHUB' : 'M'}</h1>
                {
                    navIsOpen ? (
                        <IconX size={20} className='cursor-pointer text-black dark:text-white' onClick={() => setNavIsOpen(!navIsOpen)} />
                    ) : (
                        <IconChevronRight size={20} className='cursor-pointer text-black dark:text-white' onClick={() => setNavIsOpen(!navIsOpen)} />
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
                                    <p className='ml-3 text-lg group-hover:text-white transition-all dark:text-white'>{x.title}</p>
                                )
                            }
                        </Link>
                    ))
                }
            </div>
        </div>
    )}
    </Context.Consumer>
  )
}
