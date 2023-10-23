import axios from 'axios';
import { createContext } from 'react'
import { useEffect, useState } from 'react';


const ContextProvider = createContext()





function ProductContext({children}) {
  
  const [productData, setProductData] = useState(null)
  const [productId, setProductId] = useState(0)
  const [productList, setProductList] = useState([])
  


  const fetchData = async () =>{
    const product = await axios('https://dummyjson.com/products')
    setProductData(product.data.products)
  }


  useEffect(()=>{
    fetchData()
  }, [])


  useEffect(()=>{
      if(productId !== 0){
        let data = productData.filter(data=>data.id === productId)
        setProductList(products=>{
          return [...data,...products]
        })
      }


  }, [productId])



  return (
    <ContextProvider.Provider value={{productData,productId,setProductId,productList}}>
        { children }
    </ContextProvider.Provider>
  )
}

export {ProductContext, ContextProvider};