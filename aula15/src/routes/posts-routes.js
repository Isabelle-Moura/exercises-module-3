import { Router } from 'express'
import PostsService from '../service/PostsService'
import {database} from '../database/configDB'

const routes = Router()
const service = new PostsService(database)

routes.post('/posts', (req, res) => {
    
    
})

routes.get('/posts', (req, res) => {
    
})
