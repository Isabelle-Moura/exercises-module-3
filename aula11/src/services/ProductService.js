const Product = require('../models/Product')

class ProductService {
    constructor(productRepository) {
      this.productRepository = productRepository;
    }
  
    async createProduct(name, description, price, stock, category) {
      const product = new Product(name, description, price, stock, category);
      await this.productRepository.createProduct(product);
    }
  
    async findProductByName(name) {
      return await this.productRepository.findProductByName(name);
    }
  
    async findProductsByCategory(category) {
      return await this.productRepository.findProductsByCategory(category);
    }
  
    async updateProduct(id, newProduct) {
      await this.productRepository.updateProduct(id, newProduct);
    }
  
    async deleteProduct(id) {
      await this.productRepository.deleteProduct(id);
    }
  }
  
  module.exports = ProductService;