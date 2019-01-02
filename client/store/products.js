import axios from 'axios'

const initialState = {
  productsList: [],
  selectedProduct: {}
}

// action types
export const SET_PRODUCTS = 'SET_PRODUCTS'
const SET_SELECTED_PRODUCT = 'SET_SELECTED_PRODUCT'

// action creators
const setProducts = productsList => ({type: SET_PRODUCTS, productsList})
const setSelectedProduct = selectedProduct => ({
  type: SET_SELECTED_PRODUCT,
  selectedProduct
})

// reducer
export default (state = initialState, action) => {
  let newState = {...state}
  switch (action.type) {
    case SET_PRODUCTS:
      newState.products = action.productsList
      return newState
    case SET_SELECTED_PRODUCT:
      newState.selectedProduct = action.selectedProduct
      return newState
    default:
      return newState
  }
}

// THUNK

export const getProducts = () => {
  return async dispatch => {
    try {
      const response = await axios.get('/api/products')
      const productsList = response.data
      dispatch(setProducts(productsList))
    } catch (error) {
      console.log(error)
    }
  }
}

export const getSelectedProduct = id => {
  return async dispatch => {
    try {
      const response = await axios.get(`/api/products${id}`)
      const selectedProduct = response.data
      dispatch(setSelectedProduct(selectedProduct))
    } catch (error) {
      console.log(error)
    }
  }
}
