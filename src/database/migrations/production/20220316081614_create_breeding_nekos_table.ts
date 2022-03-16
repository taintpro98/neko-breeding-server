import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("breeding_nekos", (table)=> {
        table.uuid("id").notNullable().primary();
        table.string("name").notNullable();
        table.json("json_data").notNullable();
        table.integer("status").notNullable();
        table.string("file_path").notNullable();

        table.timestamp("created_at").defaultTo(knex.fn.now());
        table.timestamp("updated_at").defaultTo(knex.fn.now());
    })
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("breeding_nekos");
}

