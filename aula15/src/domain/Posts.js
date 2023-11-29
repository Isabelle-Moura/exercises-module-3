import Base from './Base.js'

export class Posts extends Base {
    constructor(author, content){
        super()
        this.author = author      
        this.content = content    
        this.likes = 0  
    }
}