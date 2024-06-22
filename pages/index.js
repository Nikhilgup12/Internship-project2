import React from 'react'
import styles from "../styles/Landing.module.css"
const index = () => {
  return (
    <div className={styles["landing-main-container"]}>
      <div className={styles['landing-first-image-container']}>
        <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1719056168/Rectangle_lqkm6z.svg" className={styles['landing-image']}/> 
      </div>

      <div className={styles['landing-product-list-main-container']}>
        <div className={styles['landing-product-list-container']}>
          <h1 className={styles['landing-product-list-heading']}> New Arrivals </h1>
          <hr className={styles['horizontal-line']}/> 
          <div className={styles['product-list-container']}>
            <div className={styles['product-list']}>
              <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1719056164/Rectangle_1_sijyin.svg" className={styles['product-image']}/> 
              <h1 className={styles['product-heading']}> Dress </h1> 
              <p className={styles['product-price']}> Rs. 35,000.00 </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default index

