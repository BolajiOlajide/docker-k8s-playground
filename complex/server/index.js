const express = require('express');
const redis = require('redis');
const { Pool } = require('pg');
const bodyParser = require('body-parser');
const cors = require('cors');
const { promisify } = require('util');

const keys = require('./keys');

const { postgres, redis: redisKeys } = keys;

const app = express();

app.use(cors());
app.use(bodyParser.json());

const pgClient = new Pool({
  user: postgres.user,
  host: postgres.host,
  database: postgres.name,
  port: postgres.port,
  password: postgres.password
});

console.log('pg credentials ====>> ', {
  user: postgres.user,
  host: postgres.host,
  database: postgres.name,
  port: postgres.port,
  password: postgres.password
});

pgClient.on('error', () => console.log('lost pg connection. please check again'));

pgClient.on('connect', (client) => {
  client
    .query('CREATE TABLE IF NOT EXISTS values (number INT)')
    .catch((err) => console.error(err));
});

const redisClient = redis.createClient({
  host: redisKeys.host,
  port: redisKeys.port,
  retry_strategy: () => 1000
});

const hgetAllAsync = promisify(redisClient.hgetall).bind(redisClient);
const hsetAsync = promisify(redisClient.hset).bind(redisClient);

const pub = redisClient.duplicate();

app.get('/', (req, res) => {
  return res.send('Hi')
});

app.get('/values', async (req, res) => {
  const values = await pgClient.query('SELECT * from values');

  return res.send(values.rows);
});

app.get('/values/current', async (req, res) => {
  const currentValues = await hgetAllAsync('values');

  return res.send(currentValues);
});

app.post('/values', async (req, res) => {
  const { index } = req.body;
  console.log(JSON.stringify({ index }, null, 2), '<====', req.body);

  const numericIdx = parseInt(index);

  if (numericIdx > 40) {
    return res.status(422).send('index too high');
  }

  await hsetAsync('values', index, 'Nothing yet!');
  pub.publish('insert', index);
  pgClient.query('INSERT INTO values(number) VALUES($1)', [index]);

  return res.send({ working: true });
});

app.listen(5000, () => {
  console.log('listening')
});