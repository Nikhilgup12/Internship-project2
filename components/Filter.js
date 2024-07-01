import React from 'react'
import styles from "./Filter.module.css"

const categoryOptions = [
  {
    name: 'Bottoms (14)',
    categoryId: '1',
  },
  {
    name: 'Co-Ord Set (28)',
    categoryId: '2',
  },
  {
    name: 'Dresses (92)',
    categoryId: '3',
  },
  {
    name: 'Jackets (4)',
    categoryId: '4',
  },
  {
    name: 'Jumpsuits (2)',
    categoryId: '5',
  },
  {
    name: 'Overlays (13)',
    categoryId: '6',
  },
  {
    name: 'JPants (2)',
    categoryId: '7',
  },
  {
    name: 'Shirts (13)',
    categoryId: '8',
  },
  {
    name: 'Skirt (3)',
    categoryId: '9',
  },
  {
    name: 'Tops (19)',
    categoryId: '10',
  },
  {
    name: 'Tunic (6)',
    categoryId: '11',
  },
]

const fabricOptions = [
  {
    name:"Corduroy (12)",
    fabricId:"1"
  },
  {
    name:"Cotton (140)",
    fabricId:"2"
  },
  {
    name:"Denim (2)",
    fabricId:"3"
  },
  {
    name:"Linen (55)",
    fabricId:"4"
  },
  {
    name:"Rayon (23)",
    fabricId:"5"
  },
  {
    name:"Poplin (23)",
    fabricId:"6"
  },
  {
    name:"Rayon Flex (2)",
    fabricId:"7"
  },  
  {
    name:"Satin (1)",
    fabricId:"8"
  },  
  {
    name:"Twill (1)",
    fabricId:"9"
  },
  {
    name:"Wool (1)",
    fabricId:"10"
  },
]

const colorOptions = [
  {
    name:"Beige",
    colorId:"1"
  },
  {
    name:"Black",
    colorId:"2"
  },
  {
    name:"Blue",
    colorId:"3"
  },
  {
    name:"Brown",
    colorId:"4"
  },
  {
    name:"Cherry",
    colorId:"5"
  },
  {
    name:"Green",
    colorId:"6"
  },
  {
    name:"Ivory",
    colorId:"7"
  },
  {
    name:"Navy",
    colorId:"8"
  },
  {
    name:"Red",
    colorId:"9"
  },
]

const Filter = () => {

  const renderProductCategory = ()=>{
    return (
      <>
      <div className={styles["categoryOptions-main-container"]}>
      <h1 className={styles["category-heading"]}> CATEGORY  </h1>
       <ul className={styles["category-unorderedList-container"]}>
        {
          categoryOptions.map((each)=>(
            <li key={each.categoryId} onClick={()=>onCategory(each.categoryId)} className={styles["category-list"]}> {each.name} </li>
          ))
        }
       </ul>
      </div>

      </>
    )
  }

  const renderProductFabric =()=>{
    return (
      <>
       <div className={styles["categoryOptions-main-container"]}>
      <h1 className={styles["fabric-heading"]}> FABRIC </h1>
       <ul className={styles["category-unorderedList-container"]}>
        {
          fabricOptions.map((each)=>(
            <li key={each.categoryId} onClick={()=>onFabric(each.fabricId)} className={styles["category-list"]}> {each.name} </li>
          ))
        }
       </ul>
      </div>
      </>
    )
  }
  
  const renderProductColor =()=>{
    return (
      <>
      <div className={styles["categoryOptions-main-container"]}>
      <h1 className={styles["fabric-heading"]}> COLOR </h1>
       <ul className={styles["category-unorderedList-container"]}>
        {
          colorOptions.map((each)=>(
            <li key={each.categoryId} onClick={()=>onColor(each.colorId)} className={styles["category-list"]}> {each.name} </li>
          ))
        }
       </ul>
      </div>
      </>
    )
  }
  return (
    <div className={styles["filter-main-container"]}>
      {renderProductCategory()}
      {renderProductFabric()}
      {renderProductColor()}
    </div>
  )
}

export default Filter