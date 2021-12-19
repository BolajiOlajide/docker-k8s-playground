const express = require('express');
const redis = require('redis');
const { promisify } = require('util');

const app = express();
const client = redis.createClient({
  host: 'redis-server',
  port: 6379,
});

const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);

const VISITS_KEY = 'visits';
const PORT = '8080';

app.get('/', async (req, res) => {
  const visits = await getAsync(VISITS_KEY) || 0;
  setAsync(VISITS_KEY, parseInt(visits) + 1);
  res.send(`Number of visits: ${visits}`);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
