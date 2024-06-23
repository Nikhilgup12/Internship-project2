import React from 'react'
import styles from "../styles/Landing.module.css"
import { FaInstagram } from "react-icons/fa";
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
          <ul className={styles['product-list-container']}>
            <li className={styles['product-list']}>
              <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1719056164/Rectangle_1_sijyin.svg" className={styles['product-image']}/> 
              <h1 className={styles['product-heading']}> Dress </h1> 
              <p className={styles['product-price']}> Rs. 35,000.00 </p>
            </li>
            <li className={styles['product-list']}>
              <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1719056164/Rectangle_1_sijyin.svg" className={styles['product-image']}/> 
              <h1 className={styles['product-heading']}> Dress </h1> 
              <p className={styles['product-price']}> Rs. 35,000.00 </p>
            </li>
            <li className={styles['product-list']}>
              <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1719056164/Rectangle_1_sijyin.svg" className={styles['product-image']}/> 
              <h1 className={styles['product-heading']}> Dress </h1> 
              <p className={styles['product-price']}> Rs. 35,000.00 </p>
            </li>
            <li className={styles['product-list']}>
              <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1719056164/Rectangle_1_sijyin.svg" className={styles['product-image']}/> 
              <h1 className={styles['product-heading']}> Dress </h1> 
              <p className={styles['product-price']}> Rs. 35,000.00 </p>
            </li>
            <li className={styles['product-list']}>
              <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1719056164/Rectangle_1_sijyin.svg" className={styles['product-image']}/> 
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
        <div className={styles['landing-collection-detail-container']}>
          <h1 className={styles['collection-heading']}> NEW IN COLLECTION</h1>
          <p className={styles['collection-para']}> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh  </p> 
          <p> Explore </p>
        </div>
        </div>
      </div>
      <div className={styles['follow-main-container']}>
        <div className={styles['follow-icon-container']}>
          <FaInstagram />
          <h1> FOLLOW US ON INSTAGRAM </h1>
          <p> @floe.life </p>
        </div>
        <div className={styles['follow-image-container']}>
          <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1719123016/Rectangle_3_slyyx6.svg" className={styles['follow-image']}/>
          <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1719123034/Rectangle_4_rlmcmj.svg" className={styles["follows-image"]}/> 
        </div>
        <div className={styles['landing-fotter-container']}>
          <div className={styles['landing-fotter-shop-container']}>
            <h1 className={styles['fotter-shop-heading']}> SHOP </h1>
            <ul>
              <li> Shop all </li>
              <li> New Arrivals </li>
              <li> Gift Card </li>
              <li> Wishlist </li>
            </ul>
          </div>
          <div className={styles['landing-fotter-shop-container']}>
            <h1 className={styles['fotter-shop-heading']}> CUSTOMER CARE </h1>
            <ul>
              <li> Shipping </li>
              <li> Return Policy</li>
              <li> Exchange </li>
              <li> Size Guide </li>
              <li> Terms and Conditions </li>
            </ul>
          </div>
          <div className={styles['landing-offer-main-container']}>
            <div className={styles['landing-offer-container']}>
              <h1> ENJOY 10% OFFYOUR FIRST ORDER </h1>
              <p> Sign up to our newsletter and receive exclusive access to new collections, promotions and events. </p>
              <p> Name </p>
              <p> Email </p>
              <button className={styles['offer-continue-button']}> CONTINUE </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default index

