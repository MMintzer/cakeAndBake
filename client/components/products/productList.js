import React, {Component} from 'react'
import {connect} from 'react-redux'
import ProductCard from './productCard'
import {getProducts} from '../../store/products'

class ProductsList extends Component {
  async componentDidMount() {
    try {
      await this.props.getProducts()
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const {productsList} = this.props
    return (
      <div className="products-list">
        <h1>THAR BE PRODUCTS HERE! /{productsList.length}</h1>
        {productsList.map(product => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    )
  }
}

const mapState = state => ({
  productsList: state.products.productsList
})

const mapDispatch = dispatch => ({
  getProducts: () => {
    dispatch(getProducts())
  }
})

export default connect(mapState, mapDispatch)(ProductsList)
