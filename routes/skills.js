import { Router } from 'express'
import * as skillsCtrl from '../controllers/skills.js'

const router = Router()

/* GET users listing. */
router.get('/', skillsCtrl.index) //when user requests this we call upon the skills index

export {
  router
}
