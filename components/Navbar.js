import Link from "next/link"
import styles from "./Navbar.module.css"
import {GiHamburgerMenu} from 'react-icons/gi'
const Navbar = () => {
  return ( 
    <>
    <nav className={styles['nav-container']}>
        <div className={styles['nav-content']}> 
            <ul className={styles['nav-content-list-container']}>
                <li className={styles['nav-item']}> New Arrivals </li>
                <li className={styles['nav-item']}> Shop </li>
                <li className={styles['nav-item']}> Collections </li>
                <li className={styles['nav-item']}> OurWorld </li>
            </ul>
            <div className={styles['nav-logo']}>
                <h1  className={styles['nav-logo-icon']}> FLOE </h1>
            </div>
            <div className={styles['nav-logo-mobile']}>
                <h1  className={styles['nav-logo-icon']}> FLOE </h1>
            </div>
            <ul className={styles['nav-cart-icon-list']}>
                <li> <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1719043123/Vector_1_nsszvt.svg" /> </li> 
                <li> <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1719043131/Vector_2_de8syk.svg" /> </li> 
                <li> <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1719043162/Vector_3_x77usa.svg" /> </li> 
                <li className={styles['nav-user-icon']}> <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1719043164/Vector_4_weitli.svg" /> </li> 
                <li className={styles['nav-hamburger-icon']}> <GiHamburgerMenu size={20}/>  </li> 
            </ul>
        </div>
    </nav>
    </>
  )
}

export default Navbar