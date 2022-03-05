import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct } from '../redux';
import '../styles/inputProduct.css'
const InputProducts = () => {

  const productData = useSelector(state => state.product.qty)

  console.log(productData)

  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);
  const [title, setTitle] = useState("");

  return (
    <div className="mainInputContainer">
      <input type="text" name="" id="" placeholder='Enter a title' value={title} onChange={e => setTitle(e.target.value)} />
      <input type="text" name="" id="" placeholder='Enter a qty' value={qty} onChange={e => setQty(e.target.value)} />
      <button onClick={() => dispatch(addProduct(qty, title))} className="btnAddProduct">Add qty</button>
    </div>
  )
}

export default InputProducts