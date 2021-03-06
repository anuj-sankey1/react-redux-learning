import { ADD_PRODUCT, REMOVE_PRODUCT } from "./productType";

const initialState = {
    productsList: [
        { title: 'Samsung Galaxy A2', qty: 10 },
        { title: 'Nokia A2', qty: 12 },
        { title: 'HP M1 Pro', qty: 1 },

    ],

}

const productReducer = (state = initialState, action) => {
    console.log("qty", state.qty)
    console.log("prolis", state.productsList)

    switch (action.type) {

        case ADD_PRODUCT:
            return {
                ...state,
                // qty: Number(state.qty) + Number(action.item.qty),
                // qty: action.item.qty,
                productsList: [...state.productsList, action.item]
            }
        case REMOVE_PRODUCT:
            let newProductList = [...state.productsList]
            const index = state.productsList.findIndex(

                (productsListItem) => productsListItem.id === action.id

            )

            if (index >= 0) {
                newProductList.splice(index, 1)
            }

            return {
                ...state,
                productsList: newProductList

            }
        default: return state
    }
}
export default productReducer;