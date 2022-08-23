import express from 'express'

import {login} from '../controllers/auth.js'
import {updateChanelData,getAllChanels} from '../controllers/chanel.js'



const routes = express.Router();

routes.post('/login',login)
routes.patch('/update/:id',updateChanelData)
routes.get('/getAllChanels',getAllChanels)

export default routes;
