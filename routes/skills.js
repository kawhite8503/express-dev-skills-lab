import { Router } from 'express'
import * as skillsCtrl from '../controllers/skills.js'

const router = Router()

/* GET users listing. */
router.get('/', skillsCtrl.index) //when user requests this we call upon the skills index

//GET -- localhost:3000/skills/new
router.get('/new', skillsCtrl.new)

//POST -- localhost:3000/skills
router.post('/', skillsCtrl.create)

export {
  router
}
