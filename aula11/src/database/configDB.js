// Import the 'dotenv' library to load environment variables from the .env file
require('dotenv').config({ path: '../../.env' });

import { MongoClient } from 'mongodb'

// Get environment variable
const url = process.env.DATABASE_URL;

// Create an instance of the MongoDB client
const client = new MongoClient(url);

// Connect to the database
client.connect()
  .then(() => {
    console.log('Connected to the database!');
  })
  .catch(err => {
    console.error('Error connecting to the database', err);
  });

// Get a reference to the 'books' collection in the 'library' database
const database = client.db('super-market').collection('products');

// Export the client and collection for use elsewhere
module.exports = { client, database };