import { db } from "configs/database";
import { Model } from "objection";
import { v4 as uuidv4 } from "uuid";

class BreedingNeko extends Model{
    id!: string;
    name!: string;
    json_data!: object;
    status!: number;
    file_path!: string;

    static tableName = "";

    static jsonSchema = {
        type: "object",
        properties: {
            id: {type: "string", default: uuidv4()},
            name: {type: "string", minLength: 1, maxLength: 255},
            json_data: {type: "object"},
            status: {type: "integer"},
            file_path: {type: "string", minLength: 1, maxLength: 255}
        }
    }
}

const BreedingNekoModel = BreedingNeko.bindKnex(db);