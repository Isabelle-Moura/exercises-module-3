const ProductRepository = require('./repositories/productRepository');
const ProductService = require('./services/productService');
const {database, client} = require('./database/configDB');

const repository = new ProductRepository(database);
const service = new ProductService(repository);

;(async () => {
 // Example usage
  await service.createProduct('Product1', 'Description of Product 1', 50.0, 100, 'Electronics');
  const product = await service.findProductByName('Product1');
  console.log(product);

  await service.updateProduct(product._id, { price: 45.0 });

  const electronicsProducts = await service.findProductsByCategory('Electronics');
  console.log(electronicsProducts);

  await service.deleteProduct(product._id);
  await client.close()
})