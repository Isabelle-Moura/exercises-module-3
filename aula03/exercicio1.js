const crypto = require('crypto')

const catalog = []

const productExample = {
  // id: crypto.randomUUID(),
  name: 'Abajour de Abóbora',
  price: 350,
  category: 'furniture',
  // createdAt: new Date()
}

function makeProduct(data) {
    return {
        id: crypto.randomUUID(),
        name: data.name,
        price: data.price,
        category: data.category,
        createdAt: new Date()
    }
}

// Exercício 1: Adicionar um novo produto
// Crie uma função chamada addProductToCatalog que recebe um objeto representando um produto (com campos como nome, preço, categoria, etc.) e adiciona esse produto ao catálogo.
function addProductToCatalog(item){
    const product = makeProduct(item)
    catalog.push(product)
    return product
}

function findProductByName(name) {
   return catalog.find(product => product.name === name)
}

// Exercício 2: Atualizar um produto existente
// Crie uma função chamada updateProductInCatalog que recebe o nome de um produto e um objeto com os novos dados para o produto. A função deve procurar o produto pelo nome no catálogo e atualizar seus dados com base no objeto fornecido.
function updateProductInCatalog(name, newData){
    const product = findProductByName(name)
    if (!product) {
        console.log("O nome do produto não foi encontrado :/")
    }
    Object.assign(product, newData)
}

// Exercício 3: Pesquisar produtos por categoria
// Crie uma função chamada findProductsByCategory que recebe o nome de uma categoria e retorna todos os produtos no catálogo que pertencem a essa categoria, no formato de uma lista.
function findProductsByCategory(category){
    const categoryFound = catalog.filter(product => product.category === category)
    return categoryFound
}

// Exercício 4: Pesquisar produtos por preço
// Crie uma função chamada findProductsByPriceRange que recebe um valor mínimo e um valor máximo e retorna todos os produtos no catálogo que estão dentro desse intervalo de preço, no formato de uma lista.
function findProductsByPriceRange(minPrice, maxPrice){
    const productsInRange = catalog.filter(product => product.price >= minPrice && product.price <= maxPrice)
    return productsInRange; 
}

// Exercício 5: Remover um produto do catálogo
// Crie uma função chamada removeProductFromCatalog que recebe o nome de um produto e remove esse produto do catálogo.
function removeProductFromCatalog(name){
    const product = findProductByName(name)
    if (!product) {
        console.log("O nome do produto não foi encontrado :/")
    }
    catalog.splice(product, 1)  
}

/////////

const product1 = {
    name: 'Mesa de Jantar',
    price: 500,
    category: 'furniture'
  }
  
  const product2 = {
    name: 'Luminária de Parede',
    price: 75,
    category: 'lighting'
  }
  
  const product3 = {
    name: 'Sofá de Couro',
    price: 800,
    category: 'furniture'
  }
  
  const product4 = {
    name: 'Cadeira de Escritório',
    price: 120,
    category: 'furniture'
  }
  
  const product5 = {
    name: 'Abajour de Mesa',
    price: 30,
    category: 'lighting'
  }

// Adicionar produtos ao catálogo
addProductToCatalog(product1)
addProductToCatalog(product2)
addProductToCatalog(product3)
addProductToCatalog(product4)
addProductToCatalog(product5)

console.log(catalog)

// Atualizar um produto
updateProductInCatalog('Mesa de Jantar', { price: 550 })
console.log(catalog)

// Pesquisar produtos por categoria
const furnitureProducts = findProductsByCategory('furniture')

// Pesquisar produtos por faixa de preço
const affordableProducts = findProductsByPriceRange(30, 100)

// Remover um produto do catálogo
removeProductFromCatalog('Abajour de Mesa')
