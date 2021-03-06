const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.put('/addCoins', async (req, res, next) => {
  const {coins} = req.body
  try {
    const user = await User.findById(req.session.passport.user)
    if (user) {
      const oldCoins = user.cakeCoins
      const newCoins = +oldCoins + +coins
      user.update({cakeCoins: newCoins})
    }
    res.send(user)
  } catch (error) {
    next(error)
  }
})
