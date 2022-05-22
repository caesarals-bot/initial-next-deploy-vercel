
import { ActiveLink } from './ActiveLink'
import styles from './Navbar.module.css'
import {menuItems} from './assets/menu'
import { PropsWithChildren } from 'react'

interface Props {

}

export const Navbar: React.FC<PropsWithChildren<Props>> = () => {
  return (

    <nav className={styles['menu-container']}>
      {menuItems.map(({text, href}) => (
        <ActiveLink key={text} text={text} href={href} />
      ))}
        
    </nav>
  )
}
