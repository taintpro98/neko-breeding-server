import { BreedingNeko } from "models";
import { AnyQueryBuilder } from "objection";
import { Repository } from "./Repository";
import { BreedingNekoFilter } from "types/filters/BreedingNekoFilter";
import { EBreedingNekoStatus } from "constants/enums";
export class BreedingNekoRepository extends Repository<typeof BreedingNeko>{

    initializeModel(): typeof BreedingNeko {
        return BreedingNeko;
    }

    static queryFilter(query: AnyQueryBuilder, filter: BreedingNekoFilter): AnyQueryBuilder {
        if (filter?.status) {
            query = query.whereIn("breeding_nekos.status", filter.status);
        }
        return query;
    }

    async list(filter?: BreedingNekoFilter): Promise<typeof BreedingNeko["prototype"][]> {
        return BreedingNekoRepository.queryFilter(this.model.query(), filter);
    }
}