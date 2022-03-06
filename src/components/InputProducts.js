import React, { useState } from 'react';
import {  useDispatch } from 'react-redux';
import { addProduct } from '../redux';
import '../styles/inputProduct.css';
import '../styles/global.css';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
const InputProducts = () => {

  
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);
  const [title, setTitle] = useState("");

  const add = () => {
    if (title === "" || title.length < 3) {
      alert("Product name cannot be empty");
    }
    else if (qty < 0 ) {
      alert("Please enter a valid quantity");
    }
    else {
      dispatch(addProduct(title, qty))
    }

  }

  return (
    <div className="mainInputContainer">
      <div className="innerContainer">
        <input type="text" name="" id=""
          placeholder='Product name'
          value={title} onChange={e => setTitle(e.target.value)}
          className="inputBox"
        />
        <input type="text" name="" id=""
          placeholder='Product quantity'
          value={qty} onChange={e => setQty(e.target.value)}
          className="inputBox"
        />



        <button
          className="btnAddProduct"
          onClick={add} >
          <div>
            <AddShoppingCartIcon className="iconAdd" />
            Add product
          </div>

        </button>

      </div>

    </div>
  )
}

export default InputProducts