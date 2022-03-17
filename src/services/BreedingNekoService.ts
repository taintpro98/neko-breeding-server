import { BreedingNekoFilter } from 'types/filters/BreedingNekoFilter';
import { BreedingNekoRepository } from "repositories/BreedingNekoRepository";
import { SBreedingNeko } from "./types/SBreedingNeko";
import { EBreedingNekoStatus } from 'constants/enums';
import BreedingNeko from 'models/BreedingNeko';

export class BreedingNekoService {
    private breedingNekoRepository = new BreedingNekoRepository();
    async list(filter: BreedingNekoFilter): Promise<SBreedingNeko[]> {
        try {
            return await this.breedingNekoRepository.list(filter);
        } catch (_err: any) {
            const logMessage: string = _err;
        }
    }

    async getFirstPendingBreedingNeko(): Promise<SBreedingNeko> {
        const filter: BreedingNekoFilter = {
            status: [EBreedingNekoStatus.PENDING]
        }
        const pendingBreedingNekos = await this.list(filter);
        const pendingBreedingNeko = pendingBreedingNekos[0];
        const updatedStatusBreedingNeko = {
            ...pendingBreedingNeko,
            status: EBreedingNekoStatus.RENDERING
        }
        await this.breedingNekoRepository.updateById(pendingBreedingNeko.id, updatedStatusBreedingNeko);
        return pendingBreedingNeko;
    }
}