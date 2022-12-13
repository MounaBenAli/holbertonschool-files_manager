/* eslint new-cap: "error" */
const { MongoClient } = require('mongodb');

const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_PORT = process.env.DB_PORT || 27017;
const DB_DATABASE = process.env.DB_DATABASE || 'files_manager';
const url = `mongodb://${DB_HOST}:${DB_PORT}`;

class DBClient {
  constructor() {
    MongoClient.connect(
      url,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      (error, mgclient) => {
        if (!error) {
          this.database = mgclient.db(DB_DATABASE);
          this.users = this.database.collection('users');
          this.files = this.database.collection('files');
        } else {
          this.database = false;
        }
      },
    );
  }

  isAlive() {
    if (this.database) return true;
    return false;
  }

  async nbUsers() {
    const countUsers = this.users.countDocuments();
    return countUsers;
  }

  async nbFiles() {
    const countFiles = this.files.countDocuments();
    return countFiles;
  }
}

const dbClient = new DBClient();
export default dbClient;
