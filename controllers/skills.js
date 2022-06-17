import { Skills } from "../data/skill-data.js"

function index(req, res) {
  res.render('skills/index', {
    Skills: Skills
  })
}

export {
  index
}