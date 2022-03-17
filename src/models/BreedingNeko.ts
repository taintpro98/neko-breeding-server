import { db } from "configs/database";
import { Model } from "objection";
import { v4 as uuidv4 } from "uuid";

class BreedingNeko extends Model{
    id!: string;
    name!: string;
    json_data!: object;
    status!: string;
    file_path?: string;

    static tableName = "breeding_nekos";

    static jsonSchema = {
        type: "object",
        properties: {
            id: {type: "string", default: uuidv4()},
            name: {type: "string", minLength: 1, maxLength: 255},
            json_data: {type: "object"},
            status: {type: "string"},
            file_path: {type: "string"}
        }
    }
}

const BreedingNekoModel = BreedingNeko.bindKnex(db);

export default BreedingNekoModel;