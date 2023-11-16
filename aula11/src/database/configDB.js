const { MongoClient } = require('mongodb');

const client = new MongoClient('mongodb+srv://mourabisabelle:050404@cluster0.rwes2gi.mongodb.net/?retryWrites=true&w=majority');
const database = client.db('super-market').collection('products');

module.exports = { client, database }