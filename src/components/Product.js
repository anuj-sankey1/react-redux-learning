import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { removeProduct } from '../redux';
import '../styles/product.css'


const Product = () => {
  const productsList = useSelector(state => state.product.productsList)
  const dispatch = useDispatch();

  console.log("asjakak", productsList)
  return (
    <div className= "mainContainer">
      {productsList.map((item) =>
        <div className  = "cardContainer">

          <h2>Product title {item.title}</h2>
          <h2> Product qty{item.qty}</h2>
          <button onClick={()=> dispatch(removeProduct(item.id))}>Remove</button>

        </div>
      )}

    </div>
  )
}

export default Product