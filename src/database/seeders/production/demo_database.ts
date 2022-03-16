import { Knex } from "knex";
import { v4 as uuidv4 } from "uuid";

let csvFile = "./demo.csv";

async function create_breeding_nekos(knex: Knex): Promise<void>{
    console.log("create breeding nekos table");
    await knex("breeding_nekos").del();
    return await knex("breeding_nekos").insert([
        {id: 1, name: "Neko-1", json_data: {
            "body":493,
            "background":502,
            "ear":510,
            "nose":512,
            "eye":518,
            "eyebrow":522,
            "medal":525,
            "necklaces":533,
            "top":541,
            "front face":548,
            "arms":556,
            "accessories":564,
            "back":570,
            "side face":576
        }}
    ])
}

export async function seed(knex: Knex): Promise<void>{

}