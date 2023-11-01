// crie uma função factory que gera um Student
// Parametros: name, class, status, document
// Retorno {
//   code: 'uuid',
//   name: ''Victor,
//   class: '401B',
//   status: 'matriculado' || 'pendente,
//   document: '123.123.123-00',
//   createdAt: '2015-04-12' tipo Date
// }

const crypto = require("crypto")

let studentCount = 0

function makeStudent(data) {
    return {
        code: crypto.randomUUID(),
        name: data.name,
        className: data.className,
        status: data.status,
        document: data.document,
        createdAt: new Date()
    }
}

// Crie as funçoes para manipular a constante repository
// Deve ser possível:
// - Criar;
// - Editar por código;
// - Buscar por código;
// - Buscar por Turma;
// - Deletar.

const repository = []

function createStudentRepository(data) {
    const student = makeStudent(data)
    repository.push(student)
    return student
}
function findStudentByCodeRepository(code) {
   return repository.find(student => student.code === code)
}

function updateStudentRepository(code, data) {
    const student = findStudentByCodeRepository(code)
    if (!student) {
        console.log("Código do estudante não foi encontrado :/")
    }
    Object.assign(student, data)
}

function findStudentByClassRepository(className) {
    return repository.find(student => student.className === className)
}

function deleteStudentByCode(code) {
    const student = findStudentByCodeRepository(code)
    if (!student) {
        console.log("Código do estudante não foi encontrado :/")
    }
    repository.splice(student, 1)
}

const student1 = createStudentRepository({
    name: 'Jubileu',
    className: 'Turma 3',
    document: '123.123.123-00',
    status: 'matriculado'
});

const student2 = createStudentRepository({
    name: 'Ciclano',
    className: 'Turma 4',
    document: '124.124.124-00',
    status: 'pendente'
});

updateStudentRepository(student2.code, {
  name: 'Fulano',
  className: 'Turma 3',
  document: '223.223.223-00',
  status: 'matriculado'
})

deleteStudentByCode(student1.code)

console.log(repository)