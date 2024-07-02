import React from 'react'
import styles from "../styles/Landing.module.css"
// import Navbar from "../components/Navbar"
import Fotter from "../components/Fotter"
// import { FaInstagram } from "react-icons/fa";
const index = () => {
  return (
    <>
    {/* <Navbar />  */}
    <div className={styles["landing-main-container"]}>
      <div className={styles['landing-first-image-container']}>
        <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1719056168/Rectangle_lqkm6z.svg" className={`${styles['landing-image']} ${styles['fade-in']}`}/> 
      </div>

      <div className={styles['landing-product-list-main-container']}>
        <div className={styles['landing-product-list-container']}>
          <h1 className={styles['landing-product-list-heading']}> New Arrivals </h1>
          <hr className={styles['horizontal-line']}/> 
          <ul className={styles['product-list-container']}>
            <li className={`${styles['product-list']}`}>
              <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1719056164/Rectangle_1_sijyin.svg" className={`${styles['product-image']} ${styles['product-hover']}`}/> 
              <h1 className={styles['product-heading']}> Dress </h1> 
              <p className={styles['product-price']}> Rs. 35,000.00 </p>
            </li>
            <li className={styles['product-list']}>
              <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1719056164/Rectangle_1_sijyin.svg" className={`${styles['product-image']} ${styles['product-hover']}`}/> 
              <h1 className={styles['product-heading']}> Dress </h1> 
              <p className={styles['product-price']}> Rs. 35,000.00 </p>
            </li>
            <li className={styles['product-list']}>
              <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1719056164/Rectangle_1_sijyin.svg" className={`${styles['product-image']} ${styles['product-hover']}`}/> 
              <h1 className={styles['product-heading']}> Dress </h1> 
              <p className={styles['product-price']}> Rs. 35,000.00 </p>
            </li>
            <li className={styles['product-list']}>
              <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1719056164/Rectangle_1_sijyin.svg" className={`${styles['product-image']} ${styles['product-hover']}`}/> 
              <h1 className={styles['product-heading']}> Dress </h1> 
              <p className={styles['product-price']}> Rs. 35,000.00 </p>
            </li>
            <li className={styles['product-list']}>
              <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1719056164/Rectangle_1_sijyin.svg" className={`${styles['product-image']} ${styles['product-hover']}`}/> 
              <h1 className={styles['product-heading']}> Dress </h1> 
              <p className={styles['product-price']}> Rs. 35,000.00 </p>
            </li>
          </ul>
        </div>
        
      </div>
      <div className={styles['floe-main-container']}>
        <div className={styles['floe-container']}>
          <h> FLODE </h>
          <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh </p>
        </div>
      </div>
      <div className={styles['landing-collection-main-container']}>
        <div className={styles['landing-collection-container']}>
        <div className={styles['landing-collection-image-container']}>
          <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1719056153/Rectangle_2_xmpa30.svg" className={styles['collection-image']} /> 
        </div>
        <div className={`${styles['landing-collection-detail-container']} ${styles['slide-in']}`}>
          <h1 className={styles['collection-heading']}> NEW IN COLLECTION</h1>
          <p className={styles['collection-para']}> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh  </p> 
          <p> Explore </p>
        </div>
        </div>
      </div>
      <Fotter />
    </div>
    </>
  )
}

export default index

