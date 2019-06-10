import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

let mongoServer;

beforeAll(async () => {
  mongoServer = new MongoMemoryServer();
  const mongoUri = await mongoServer.getConnectionString();
  await mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true
  });
});

afterEach(() => {
  Object.keys(mongoose.connection.collections).forEach(collection => {
    mongoose.connection.collections[collection].deleteMany({}, () => {});
  });
});

afterAll(async () => {
  mongoose.disconnect();
  await mongoServer.stop();
});