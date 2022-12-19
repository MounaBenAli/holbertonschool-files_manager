import dbClient from '../utils/db';

const sha1 = require('sha1');

export const postNew = async (req, res) => {
  // POST /users
  const { email, password } = req.body;
  const hashedPassword = sha1(password);

  if (!email) return res.status(400).json({ error: 'Missing email' });
  if (!password) return res.status(400).json({ error: 'Missing password' });

  let user = await dbClient.findUser({ email });
  if (user) return res.status(400).json({ error: 'Already exist' });

  user = await dbClient.createUser(email, hashedPassword);

  return res.json(user, 201);
};

// export default postNew;
