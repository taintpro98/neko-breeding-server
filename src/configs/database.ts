import Knex, { Knex as K } from "knex";
import { DBError } from "objection";
import path from "path";

import KnexLogger from "./knexLogging";
if (!process.env.DB_HOST) {
    require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });
}

const config: { [key: string]: K.Config} = {
    production: {
        client: "postgresql",
        connection: {
            host: process.env.DB_HOST,
            port: Number(process.env.DB_HOST),
            database: process.env.DB_DATABASE,
            user: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD
        },
        pool:{
            min: 2,
            max: 10
        },
        migrations:{
            tableName: "migrations",
            extension: "ts",
            directory: "../database/migrations/production"
        },
        seeds: {
            extension: "ts",
            directory: "../database/seeders/production"
        }
    }
}

// const db = process.env.APP_ENV !== "production" ? KnexLogger(Knex(config.production)) : Knex(config.production);
const db = Knex(config.production) 

export async function checkBreedingDatabaseConnection(){
    try{
        await db.raw("select 1+1 as result");
        console.log(
            "Connection has been established successfully. (breeding database)"
        )
        
    } catch (error){
        console.error("Unable to connect to the database: (breeding database)", error);
    }
}

export { db };
export default config;