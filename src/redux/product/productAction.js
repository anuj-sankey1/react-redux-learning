import { ADD_PRODUCT, REMOVE_PRODUCT } from "./productType";

export const addProduct = (title = '', qty =1) => {
    console.log("add qty",qty);
    return {
        type: ADD_PRODUCT,
        // payload: qty,
        item: {
    
            title: title,
            qty: qty
        }
    }

}

export const removeProduct = (id)=>{
    return {
        type:REMOVE_PRODUCT,
        id:id
    }
}