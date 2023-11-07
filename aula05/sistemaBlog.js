// Sistema Blog
// OBS: Crie o sistema utilizando as camadas Entities/Repositories

// Entidade
// User { id: string nickname: string email: string password: string posts: array createdAt: string }

// Post { id: string content: string createdAt: string }

// Casos de uso
// Deve ser possível criar um usuário, passando: email, password, nickname
// Deve ser possível atualizar um usuário
// Deve ser possível busca um usuário
// Deve ser possível buscar um usuário pelo id
// Deve ser possível buscar um usuário pelo email
// Deve ser possível criar um post relacionado a um usuário, passando: content
const crypto = require('crypto')

class User {
    id = crypto.randomUUID()
    nickname
    email
    password
    posts = []
    createdAt = new Date()

    constructor(nickname, email, password) {
        this.nickname = nickname
        this.email = email
        this.password = password        
    }
}

class Post {
    id = crypto.randomUUID()
    content
    createdAt = new Date()
    constructor(content) {
        this.content = content
    }
}

class Repository {
    constructor(database) {
        this.db = database
    }
    findByName(name) {
        return this.db.find(user => user.nickname === name)        
    }
    findById(id) {
        return this.db.find(user => user.id === id)         
    }
    findByEmail(email) {
        return this.db.find(user => user.email === email)        
    }
    createUser(data) {
        const user = new User(data.nickname, data.email, data.password)
        this.db.push(user)
        return user        
    }
    updateUser(id, data) {
        const user = this.findById(id)
        Object.assign(user, data)
        return user
    }
    createPost(data) {
        const post = new Post(data.content)
        this.db.push(post)
        return post
    }
}

// Testando...
const database = []
const repository = new Repository(database)

const userData = {
    nickname: "Isabelle Moura",
    email: "isamoura@example.com",
    password: "hamsterdafoto",
  };
  
  const newUser = repository.createUser(userData);
  console.log("New user created:", newUser);
  
  const postContent = "This is a sample post.";
  const newPost = repository.createPost({ content: postContent }, newUser.id);
  console.log("New post created:", newPost);
  
  const updatedUserData = {
    nickname: "Não é a Isabelle Moura",
    email: "isamouranova@gmail.com",
    password: "hamsterdeoculosebiscoito",
  };
  
  const updatedUser = repository.updateUser(newUser.id, updatedUserData);
  console.log("User updated:", updatedUser);
  
  const foundUserByName = repository.findByName(newUser.nickname);
  console.log("User found by name:", foundUserByName); 
  
  const foundUserById = repository.findById(newUser.id);
  console.log("User found by id:", foundUserById); 
  
  const foundUserByEmail = repository.findByEmail(newUser.email);
  console.log("User found by email:", foundUserByEmail);