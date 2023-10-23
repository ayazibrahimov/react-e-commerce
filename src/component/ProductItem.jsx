import styles from './ProductItem.module.css'
import Button from '@mui/material/Button';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from 'react';
import { ContextProvider } from '../usecontext/ProductContext';


function ProductItem({data}) {

  const {setProductId} = useContext(ContextProvider)


  function handleAddChange(id){
    setProductId(id);
  }




  return (
    
         <div className={`${styles.item} col-md-3 col-sm-6`}>
         <div className={styles.itemImage}><img src={data.images[0]} alt="" /></div>
         <div>
            <p>Rating....</p>
         </div>
         <div className={styles.productName}>
             <p>{data.brand}</p>
             <b>{data.price} AZN</b>
         </div>
         <div className={styles.btn}>
         <Button onClick={()=>handleAddChange(data.id)} variant="text">Add to Card <span className={styles.arrow}><ArrowRightAltIcon /></span></Button>
         </div>
       </div>
 
  )
}

export default ProductItem