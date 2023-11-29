export class PostsService {
   constructor(repository) {
      this.repository = repository;
   }

   async createPost(post) {
      try {
         return await this.repository.createPost(post);
      } catch (error) {
         console.log("There was an error in createPost at service", error);
      }
   }

   async likeAnPost(content) {
      try {
         return await this.repository.likeAnPost(content);
      } catch (error) {
         console.log("There was an error in likeAnPost at service", error);
      }
   }

   async findPostsByAuthor(author) {
      try {
         return await this.repository.findPostsByAuthor(author);
      } catch (error) {
         console.log("There was an error in findPostsByAuthor at service", error);
      }
   }

   async getPosts() {
      try {
         return await this.repository.getPosts();
      } catch (error) {
         console.log("There was an error in getPosts at service", error);
      }
   }

   async deletePost(id) {
      try {
         return await this.repository.deletePost(id);
      } catch (error) {
         console.log(" There was an error in deletePost at service", error);
      }
   }
}
