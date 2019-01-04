const User = require('./user')
const Product = require('./product')
const Order = require('./crder')
const OrderItem = require('./orderItem')
// VV associations VV
User.hasMany(Order)
Order.belongsTo(User)

Product.hasMany(OrderItem)
OrderItem.belongsTo(Product)

Order.hasMany(OrderItem)
OrderItem.belongsTo(Order)

module.exports = {
  User,
  Product,
  Order,
  OrderItem
}
