import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { removeProduct } from '../redux';
import '../styles/product.css'
import '../styles/global.css';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


const Product = () => {


  const productsList = useSelector(state => state.product.productsList)
  const dispatch = useDispatch();

  const remove = (id) => {
    dispatch(removeProduct(id))
  }

  return (
    <div className="mainContainer">
      {productsList.map((item) =>
        <div className="cardContainer">
          <div className="topContainer">
            <div className="imageContainer">
              <img src="https://i.pinimg.com/originals/a3/6b/42/a36b422bb2bebcbd77bba846b83ddf5d.png" alt="Product" />
            </div>
            <div className="infoContainer">

              <div className="bottomInfo">
                <h4>Product details</h4>
                <h4>{item.title}</h4>
                <h4>Quantity:{item.qty}</h4>
              </div>



            </div>
          </div>
          <div className="buttonContainer">
            <button className="btnDeleteProduct" onClick={() => remove(item.id)}>
              <div>
                <DeleteForeverIcon className="icon" />
                Delete product
              </div>
            </button>
          </div>








        </div>
      )}

    </div>
  )
}

export default Product