const {db, Product, User} = require('../server/db')
const products = require('./products')

const productLoad = async () => {
  try {
    const createdProducts = Product.bulkCreate(products, {returning: true})
  } catch (error) {
    console.log(error)
  }
}

const seed = async () => {
  await db.sync({force: true})
  await productLoad()
  console.log('seeing success')
}

try {
  seed()
  // db.close();
} catch (error) {
  console.error('Something went wrong!')
  console.error(error)
  // db.close();
}
