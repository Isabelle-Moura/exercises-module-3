export default class PostsService {
    constructor(repository) {
        this.repository = repository
    }

    createPost(post) {
        return this.repository.createPost(post)
    }

    likeAnPost() {
        return this.repository.likeAnPost()
    }

    findPostsByAuthor(author) {
        return this.repository.findPostsByAuthor(author)
    }

    getPosts() {
        return this.repository.getPosts()
    }

    deletePost(id) {
        return this.repository.deletePost(id)
    }
}