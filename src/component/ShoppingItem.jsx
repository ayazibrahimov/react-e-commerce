import React from 'react'
import styles from './ShoppingItem.module.css'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';








function ShoppingItem({data}) {
  return (
    <li className={styles.shoppingItem}>
        <div className={styles.shoppingBox1}>
          <div className={styles.shopImageBox}><img src={ `${data.images[0]}` }  alt="" /> </div>
          <div className={styles.shoppingInfo}>
            <div>
                <b>{data.brand}</b>
               <span>{data.category}</span>
            </div>
            <div>In stock</div>
          </div>
        </div>

        <div className={styles.shoppingBox2}>
          <div className={styles.shoppingInfo}>
            <div>
                    <FormControl fullWidth>
                     <InputLabel variant="standard" htmlFor="uncontrolled-native">
                            Age
                        </InputLabel>
                        <NativeSelect
                          defaultValue={1}
                          inputProps={{
                            name: 'Mehsul sayı',
                            id: 'uncontrolled-native',
                          }}
                        >
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                        </NativeSelect>
                   </FormControl>
            </div>
            <div>
              <Button variant="outlined" startIcon={<DeleteIcon />}>
                  Delete
              </Button>
            </div>
          </div>

          <div>
            <b>$ {data.price}</b>
          </div>


        </div>
        
    </li>
  )
}

export default ShoppingItem