/* 
    - Criar post POST
    - Dar like ($inc:) PATCH
    - Encontrar posts pelo autor GET
    - Encontrar todos os posts GET
    - Deletar um post DELETE
*/

import { Router } from 'express'
import { database } from '../database/configDB.js'
import { MakePosts } from '../factory/PostFactory.js'

const routes = Router()
const controller = MakePosts.build(database)

routes.post('/posts', controller.createPost.bind(controller))

routes.patch('/posts/:content', controller.likeAnPost.bind(controller))

routes.get('/posts/:author', controller.findPostsByAuthor.bind(controller))

routes.get('/posts', controller.getPosts.bind(controller))

routes.delete('/posts/:id', controller.deletePost.bind(controller))

export { routes }
// http://localhost:3000/posts