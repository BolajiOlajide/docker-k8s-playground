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

const pool = new Pool({
  user: postgres.user,
  host: postgres.host,
  database: postgres.name,
  port: postgres.port,
  password: postgres.password,
  connectionTimeoutMillis: 20000
});

pool.on('error', () => console.log('lost pg connection. please check again'));

pool.on('connect', async (client) => {
  try {
    console.log('connecting....')
    await client.query('CREATE TABLE IF NOT EXISTS values (number INT)');
    console.log('<=== done with table setup');
  } catch (error) {
    console.log(JSON.stringify({ message: error.message, stack: error.stack }, null, 2));
    console.error(error);
  }
});

// ;(async function() {
//   const client = await pool.connect()
//   await client.query('SELECT NOW()')
//   client.release()
// })()

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
  const values = await pool.query('SELECT * from values');

  return res.send(values.rows);
});

app.get('/values/current', async (req, res) => {
  const currentValues = await hgetAllAsync('values');

  return res.send(currentValues);
});

app.post('/values', async (req, res) => {
  const { index } = req.body;

  const numericIdx = parseInt(index);

  if (numericIdx > 40) {
    return res.status(422).send('index too high');
  }

  await hsetAsync('values', index, 'Nothing yet!');
  pub.publish('insert', index);
  pool.query('INSERT INTO values(number) VALUES($1)', [index]);

  return res.send({ working: true });
});

app.listen(5000, () => {
  console.log('listening')
});