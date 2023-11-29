// Import the 'dotenv' library to load environment variables from the .env file
require('dotenv').config({ path: '../../.env' });

console.log(process.env.MONGO_USER);
console.log(process.env.MONGO_PASSWORD);

const { MongoClient } = require('mongodb');

// Get environment variables
const mongoUser = process.env.MONGO_USER;
const mongoPassword = process.env.MONGO_PASSWORD;

// Create the connection string using environment variables
const connectionString = `mongodb+srv://${mongoUser}:${mongoPassword}@isadatabase.jgwrkwu.mongodb.net/`;

// Create an instance of the MongoDB client
const client = new MongoClient(connectionString);

// Connect to the database
client.connect()
  .then(() => {
    console.log('Connected to the database');
  })
  .catch(err => {
    console.error('Error connecting to the database', err);
  });

// Get a reference to the 'books' collection in the 'library' database
const database = client.db('car-dealership').collection('cars');

// Export the client and collection for use elsewhere
module.exports = { client, database };