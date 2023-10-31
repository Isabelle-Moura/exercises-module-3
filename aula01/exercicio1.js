const repository = []
let idCount = 0

// Crie uma funçao que adiciona um carro(Object) ao repository e retorna o objeto salvado
// Parametros: modelo(string), cor(string), ano(number)
// Returno(Objeto): id(string), modelo(string), cor(string), ano(number), createdAt(Date)
function createCar(modelo, cor, ano) {
    const newCar = {
        id: ++idCount,
        modelo,
        cor,
        ano,
        createdAt: new Date()
    }
    repository.push(newCar)
    return newCar
}

const carro1 = createCar('stepway', 'cinza', 2019)
const carro2 = createCar('stepway', 'cinza', 2019)

console.log("createCar = ", repository) //Output: respository[{...}, {...}]

// Crie uma funçao que recebe um id por parametro e retorna o objeto referente
// Parametros: id(string) 
// Returno(Objeto): id(string), modelo(string), cor(string), ano(number), createdAt(Date)
function findCarById(id) {
    const carId = repository.find(car => car.id === id)
    return carId
}

console.log("findCarById = ", findCarById(1)) //Output: {...}

// Crie uma funçao que retorna todos os carros
// Returno(Array): (id(string), modelo(string), cor(string), ano(number), createdAt(Date))[]
function findAllCars() {
    const allCars = repository
    return allCars
}

console.log("findAllCars = ", findAllCars()) //Output: respository[{...}, {...}]

// Crie uma funçao que atualiza um carro(Object) no repository e retorna o objeto atualizado
// Parametros: id(string), modelo(string), cor(string), ano(number)
// Returno(Objeto): id(string), modelo(string), cor(string), ano(number), createdAt(Date)
function updateCarById(id, modelo, cor, ano) {
    const carId = repository.find(car => car.id === id)
    carId.modelo = modelo
    carId.cor = cor
    carId.ano = ano
    return carId 
}

updateCarById(2, 'Sandero', 'Preto', 2015)
console.log("updateCarById = ", repository) //Output: respository[{...}, {...}]

// Crie uma funçao que remove um carro do repositorio
// Parametros: id(string)
function deleteCarById(id) {
    const carId = repository.find(car => car.id === id)
    repository.splice(carId, 1)
}

deleteCarById(2)
console.log("deleteCarById = ", repository) //Output: respository[{...}]