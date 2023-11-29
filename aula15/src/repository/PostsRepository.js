/* 
    - Criar post
    - Dar like ($inc:)
    - Encontrar posts pelo autor
    - Encontrar todos os posts
    - Deletar um post
*/

import { ObjectId } from 'mongodb'

export default class PostsRepository {
    constructor(collection){
        this.collection = collection
    }

    createPost(post){
        return this.collection.insertOne(post)        
    }

    likeAnPost(){
        return this.collection.updateOne({}, {$inc: {likes: 1}})
    }

    findPostsByAuthor(author){
        return this.collection.find({author}).toArray()
    }

    getPosts(){
        return this.collection.find({}).toArray()
    }

    deletePost(id){
        return this.collection.deleteOne({_id: new ObjectId(id)})
    }
}