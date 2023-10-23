import axios from 'axios';
import { ProductContext } from './usecontext/ProductContext';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Products from './component/Products';
import Shopping from './component/Shopping';



function App() {


  return (
    <ProductContext>
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Products />} ></Route>
          <Route path='shopping' element={<Shopping />} ></Route>
        </Routes>
      </BrowserRouter>
    </ProductContext>
  )
}

export default App