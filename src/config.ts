import path from "path";
import * as dotenv from "dotenv";

dotenv.config();
dotenv.config({path:__dirname + '../.env'});

const database = process.env.DB_DATABASE;
const port = process.env.DB_PORT;
const user = process.env.DB_USER;
const pass = process.env.DB_PASS;
const host = process.env.DB_HOST;
const dburl = 'mongodb://'+user+':'+pass+'@'+host+':'+port+'/'+database;
console.log(dburl);

export const DB_URL = dburl;