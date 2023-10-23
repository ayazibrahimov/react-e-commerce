import React, { useContext } from 'react'
import styles from './ProductList.module.css'
import ProductItem from './ProductItem'
import { ContextProvider } from '../usecontext/ProductContext'


function ProductList() {

    const {productData}= useContext(ContextProvider)

    // console.log(productData);


  return (
    <div className={styles['list-data']}>
       
       {
        (!productData) ? (
            <p>Error</p>
        ) : (

         <ul className= { `${styles.nav} row` } >
          {
            productData.map((data,i)=>(
                <ProductItem key={i} data={data}/>
            ))
          }
         </ul>

        )
       }

    </div>
  )
}

export default ProductList