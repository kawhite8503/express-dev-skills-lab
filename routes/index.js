import { Router } from 'express'


const router = Router()

/* GET home page. */
router.get('/', function(req, res) {
  res.render('groceries/index', {  
    groceries: groceries
  })
})

export { 
  router
}
