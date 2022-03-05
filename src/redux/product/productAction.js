import { ADD_PRODUCT, REMOVE_PRODUCT } from "./productType";

export const addProduct = (id = '', title = 'aaa', qty = 1) => {
    return {
        type: ADD_PRODUCT,
        // payload: qty,
        item: {
            id: id,
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