import { Posts } from '../domain/Posts.js'

export class PostsController {
    constructor(service) {
        this.service = service;
    }

    async createPost(req, res) {
        try {
            const { body } = req 
            const newPost = new Posts(body.author, body.content)
            const result = await this.service.createPost(newPost)
            res.status(201).json(result)
        } catch (error) {
            console.log("There was an error in createPost at controller", error);
        }
    }

    async likeAnPost(req, res) {
        try {
            const { content } = req.params
            const result = await this.service.likeAnPost(content)
            res.status(200).json(result)
        } catch (error) {
            console.log("There was an error in likeAnPost at controller", error);
        }
    }

    async findPostsByAuthor(req, res) {
        try {
            const { author } = req.params
            const result = await this.service.findPostsByAuthor(author)
            res.status(200).json(result)
        } catch (error) {
            console.log("There was an error in findPostsByAuthor at controller", error);
        }
    }

    async getPosts(req, res) {
        try {
            const result = await this.service.getPosts()
            res.status(200).json(result)
        } catch (error) {
            console.log("There was an error in getPosts at controller", error);
        }
    }

    async deletePost(req, res) {
        try {
            const { id } = req.params
            const result = await this.service.deletePost(id)
            res.status(200).json(result)
        } catch (error) {
            console.log("There was an error in deletePost at controller", error);
        }
    }
}