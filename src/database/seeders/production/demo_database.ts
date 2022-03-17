import { Knex } from "knex";
import { v4 as uuidv4 } from "uuid";
import csv from 'csv-parser';
import fs from 'fs';
import path from "path";

let csvFile = path.resolve(__dirname, "demo.csv");
let breeding_nekos: any[] = [];

fs.createReadStream(csvFile)
  .pipe(csv())
  .on('data', (row: any) => {
    breeding_nekos.push({
        id: uuidv4(),
        name: "Neko-" + `${row.id}`,
        json_data: JSON.parse(row.trait_id_json),
        status: 'PENDING',
        file_path: ""
    });
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
  });

async function create_breeding_nekos(knex: Knex): Promise<void>{
    console.log("create breeding nekos table");
    await knex("breeding_nekos").del();
    return await knex("breeding_nekos").insert(breeding_nekos);
}

export async function seed(knex: Knex): Promise<void>{
    await create_breeding_nekos(knex);
}