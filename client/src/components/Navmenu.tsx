import { MenuItem, Menu } from '../Types'

type Props = {
    menu: Menu
    
}

const Navmenu = ({menu}: Props) => {
  return (
    <>
        {menu.menuItems.map((menuItem: MenuItem, ) => (
            <a key={menuItem.id} href={menuItem.link} className='md:flex justify-start items-center hover:brightness-75 w-full md:w-auto border-t md:border-none border-t-gray-500 py-2 md:py-0'>
                <span>{menuItem.name}</span>
            </a>
        ))}
    </>
  )
}

export default Navmenu
