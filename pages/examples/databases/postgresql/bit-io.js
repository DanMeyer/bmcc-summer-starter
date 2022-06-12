import { Pool } from "pg";

/*

https://bit.io

https://docs.bit.io/docs/connecting-via-nodejs

https://node-postgres.com/features/connecting --> Programmatic
https://node-postgres.com/features/pooling
https://node-postgres.com/guides/async-express
*/

/*
  
Secrets (environment variables) you'll need to set, based on your bit.io dashboard:

BIT_IO_USERNAME
BIT_IO_PASSWORD

*/

    console.log(process.env);
const mySecret = process.env.BIT_IO_PASSWORD;
console.log(mySecret)


const pool = new Pool({
    user: process.env['BIT_IO_PASSWORD'],
    host: 'db.bit.io',
    database: 'dliden/2020_Census_Reapportionment', // public database from bit.io's docs: https://docs.bit.io/docs/connecting-via-nodejs
    password: process.env['BIT_IO_PASSWORD'],
    port: 5432,
    ssl: true,
})

export default function query(text, params) {
  return pool.query(text, params)
}

