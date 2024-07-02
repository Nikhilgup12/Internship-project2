import React from 'react'
import { FaInstagram } from "react-icons/fa";
import styles from "./Fotter.module.css"
const Fotter = () => {
  return (
    <div className={styles['follow-main-container']}>
    <div className={styles['follow-icon-container']}>
      <FaInstagram size={40}/>
      <h1 className={styles["follow-heading"]}> FOLLOW US ON INSTAGRAM </h1>
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
          <li className={styles["fotter-list"]}> Shop all </li>
          <li className={styles["fotter-list"]}> New Arrivals </li>
          <li className={styles["fotter-list"]}> Gift Card </li>
          <li className={styles["fotter-list"]}> Wishlist </li>
        </ul>
      </div>
      <div className={styles['landing-fotter-shop-container']}>
        <h1 className={styles['fotter-shop-heading']}> CUSTOMER CARE </h1>
        <ul>
          <li className={styles["fotter-list"]}> Shipping </li>
          <li className={styles["fotter-list"]}> Return Policy</li>
          <li className={styles["fotter-list"]}> Exchange </li>
          <li className={styles["fotter-list"]}> Size Guide </li>
          <li className={styles["fotter-list"]}> Terms and Conditions </li>
        </ul>
      </div>
      <div className={styles['landing-offer-main-container']}>
        <div className={styles['landing-offer-container']}>
          <h1 className={styles["fotter-offer-heading"]}> ENJOY 10% OFFYOUR FIRST ORDER </h1>
          <p className={styles["fotter-offer-desc"]}> Sign up to our newsletter and receive exclusive access to new collections, promotions and events. </p>
          <p className={styles["fotter-offer-form-name"]}> Name </p>
          <p className={styles["fotter-offer-form-name"]}> Email </p>
          <button className={styles['offer-continue-button']}> CONTINUE </button>
        </div>
      </div>
    </div>

  </div>
  )
}

export default Fotter