import React from 'react'
import styles from "../styles/collection.module.css"
import Fotter from "../components/Fotter"
const collection = () => {
  return (
    <div className={styles["collection-main-container"]}>
        <div className={styles['landing-collection-main-container']}>
            <div className={styles['collection-container']}>
                <div className={styles['collection-image-container']}>
                    <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1719897533/Rectangle_5_pyd8ez.svg" className={styles['collection-image']} /> 
                </div>
                <div className={styles['collection-detail-container']}>
                    <h1 className={styles['collection-heading']}> COLLECTION NAME </h1>
                    <p className={styles['collection-para']}> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh  </p> 
                </div>
            </div>
        </div>
        <ul className={styles["collection-unorderList-container"]}>
            <li className={styles["collection-list-image-container"]}>
                <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1719056164/Rectangle_1_sijyin.svg" className={styles["collection-list-image"]}/> 
            </li>
            <li className={styles["collection-list-image-container"]}>
                <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1719056164/Rectangle_1_sijyin.svg" className={styles["collection-list-image"]}/> 
            </li>
            <li className={styles["collection-list-image-container"]}>
                <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1719056164/Rectangle_1_sijyin.svg" className={styles["collection-list-image"]}/> 
            </li>
            <li className={styles["collection-list-image-container"]}>
                <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1719056164/Rectangle_1_sijyin.svg" className={styles["collection-list-image"]}/> 
            </li>
            <li className={styles["collection-list-image-container"]}>
                <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1719056164/Rectangle_1_sijyin.svg" className={styles["collection-list-image"]}/> 
            </li>
            <li className={styles["collection-list-image-container"]}>
                <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1719056164/Rectangle_1_sijyin.svg" className={styles["collection-list-image"]}/> 
            </li>
            <li className={styles["collection-list-image-container"]}>
                <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1719056164/Rectangle_1_sijyin.svg" className={styles["collection-list-image"]}/> 
            </li>
            <li className={styles["collection-list-image-container"]}>
                <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1719056164/Rectangle_1_sijyin.svg" className={styles["collection-list-image"]}/> 
            </li>
            <li className={styles["collection-list-image-container"]}>
                <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1719056164/Rectangle_1_sijyin.svg" className={styles["collection-list-image"]}/> 
            </li>
            <li className={styles["collection-list-image-container"]}>
                <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1719056164/Rectangle_1_sijyin.svg" className={styles["collection-list-image"]}/> 
            </li>
        </ul>
        <Fotter /> 
    </div>
  )
}

export default collection