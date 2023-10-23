
import styles from './Shopping.module.css'
import ShoppingList from './ShoppingList'

function Shopping() {
  return (
    <div className={styles.shoppingCart}>
         <h2>Shopping Cart</h2>
         <ShoppingList />
    </div>
  )
}

export default Shopping