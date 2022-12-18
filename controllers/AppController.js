import redisClient from '../utils/redis';
import dbClient from '../utils/db';

export const getStatus = (req, res) => {
  // GET /status
  const redis = redisClient.isAlive();
  const db = dbClient.isAlive();

  return res.send({ redis, db });
};

export const getStats = async (req, res) => {
  // GET /stats
  const usersCount = await dbClient.nbUsers();
  const filesCount = await dbClient.nbFiles();
  return res.send(`{ "users": ${usersCount}, "files": ${filesCount} }`);
};
