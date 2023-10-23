import styles from './Nav.module.css'
import { Link } from "react-router-dom"
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useContext } from 'react';
import { ContextProvider } from '../usecontext/ProductContext';

function Nav() {

 const { productId,productList } = useContext(ContextProvider)

 


  return (
    <div className={styles.nav}>
       <div><p>Home Page</p></div>
       <div className={styles.basket}>
         <b>
             
             <Link to='shopping' className={styles.navLink}><ShoppingBasketIcon /> </Link>
             
             Səbət<span className={styles.count}>{productList.length}</span></b>
       </div>
    </div>
  )
}

export default Nav