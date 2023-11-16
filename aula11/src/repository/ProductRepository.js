class ProductRepository {
    constructor(collection) {
        this.collection = collection
    }
    async createProduct(product) {
        await this.collection.insertOne(product);
      }
    
      async findProductByName(name) {
        return await this.collection.findOne({ name });
      }
    
      async findProductsByCategory(category) {
        return await this.collection.find({ category }).toArray();
      }
    
      async updateProduct(id, newProduct) {
        await this.collection.updateOne({ _id: ObjectID(id) }, { $set: newProduct });
      }
    
      async deleteProduct(id) {
        await this.collection.deleteOne({ _id: ObjectID(id) });
      }
    }

module.exports = ProductRepository;