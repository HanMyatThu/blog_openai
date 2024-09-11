import { MongoClient } from "mongodb";

// Connection URL
const url = process.env.DB_URL;

if (!url) {
  throw new Error('Invalid/Missing environment variable: "DB_URL"');
}

const client = new MongoClient(url);
const mongodb = client.connect();

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default mongodb;
