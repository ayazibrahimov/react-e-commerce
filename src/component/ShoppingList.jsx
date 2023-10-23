import React, { useContext } from 'react'
import styles from './ShoppingList.module.css'
import ShoppingItem from './ShoppingItem'
import { ContextProvider } from '../usecontext/ProductContext'

function ShoppingList() {

  const { productList } = useContext(ContextProvider)


  

  return (
    <div>
        <ul className={styles.shopList}>

            {
              productList.map((data)=>(
                <ShoppingItem  data={data} key={data.id}/>
              ))
            }

        </ul>
    </div>
  )
}

export default ShoppingList