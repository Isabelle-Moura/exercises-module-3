import Base from './Base.js'

export default class Posts extends Base {
    constructor(author, content, likes){
        super()
        this.author = author      
        this.content = content      
        this.likes = likes      
    }
}