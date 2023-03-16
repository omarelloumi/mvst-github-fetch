import githubLogo from '../assets/github.svg'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Menu } from '../Types'
import { useState } from 'react'
import Navmenu from './Navmenu'
import LoginButton from './LoginButton'

const menu: Menu = {
    menuItems: [
        { id : 1, name: 'Pulls', link: '/' },
        { id : 2, name: 'Issues', link: '/' },
        { id : 3, name: 'Codespaces', link: '/' },
        { id : 4, name: 'Marketplace', link: '/' },
        { id : 5, name: 'Explore', link: '/' }
    ]
}

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<Boolean>(false)
    const menuClass = "overflow-hidden mt-4 w-full flex md:hidden flex-col transition-[max-height] duration-300"+(isMenuOpen ? ' max-h-[300px] mb-2' : ' max-h-0')

    const toggleMenu = () => {
        setIsMenuOpen((open: Boolean) => !open)
    }

  return (
    <div className='flex flex-col justify-start items-center bg-[rgb(36,41,47)] px-4 md:px-6 pt-4 md:pb-4 text-white font-semibold tracking-wide'>
        <div className='w-full flex justify-between items-center relative'>
            <div className='md:hidden cursor-pointer flex justify-center items-center h-8 w-8' onClick={toggleMenu}>
                <FontAwesomeIcon icon={faBars} className='w-6 h-6'/>
            </div>
            <div className='hidden md:flex justify-center items-center gap-4'>
                <a href='https://github.com/' className='hidden md:flex justify-start items-center hover:brightness-75'>
                    <img src={githubLogo} className='h-8 w-8'/>
                </a>
                <Navmenu menu={menu}/>
            </div>
            <a href='https://github.com/' className='md:hidden absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] hover:brightness-75'>
                <img src={githubLogo} className='h-8 w-8'/>
            </a>
            <div className='flex justify-center items-center hover:brightness-75 cursor-pointer h-8'>
                <LoginButton/>
            </div>
        </div>
        <div className={menuClass}>
            <Navmenu menu={menu}/>
        </div>
    </div>

  )
}
export default Navbar
