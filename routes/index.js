import { Router } from 'express'


const router = Router()

/* GET home page. */
router.get('/', function(req, res) {
  res.render('skills/index', {  
    skills: skills
  })
})

export { 
  router
}
