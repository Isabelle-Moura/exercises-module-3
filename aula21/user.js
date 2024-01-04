  // Função para buscar um usuário por e-mail no banco de dados
    function findUserByEmail(email, database) {
        return database.find(item => item.email === email);
    }
  
  // Função para atualizar um usuário no banco de dados
   function updateUser(userId, newData, database) {
    const existingUserIndex = database.findIndex(item => item.id === userId);
  
    if (existingUserIndex === -1) {
      return "User not found";
    }
  
    database[existingUserIndex] = { ...database[existingUserIndex], ...newData };
    return "User updated successfully";
  }
  
  // Função para excluir um usuário do banco de dados
   function deleteUser(userId, database) {
    const existingUserIndex = database.findIndex(item => item.id === userId);
  
    if (existingUserIndex === -1) {
      return "User not found";
    }
  
    database.splice(existingUserIndex, 1);
    return "User deleted successfully";
  }

module.exports = {
    findUserByEmail,
    updateUser,
    deleteUser}