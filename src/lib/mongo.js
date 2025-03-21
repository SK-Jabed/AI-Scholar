import { MongoClient } from "mongodb";

const uri = process.env.DB_URL;
const options = {};

if (!uri) {
  throw new Error("Please define the DB_URL environment variable inside .env.local");
}

let clientPromise;

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    const client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  const client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

async function getDatabase() {
  const client = await clientPromise;

  return client.db(process.env.DATABASE_NAME);
}

export default getDatabase;
