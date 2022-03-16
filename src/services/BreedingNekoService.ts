import { BreedingNekoRepository } from "repositories/BreedingNekoRepository";
import { SBreedingNeko } from "./types/SBreedingNeko";

export class BreedingNekoService {
    private breedingNekoRepository = new BreedingNekoRepository();
    async list(): Promise<SBreedingNeko[]> {
        try {
          return await this.breedingNekoRepository.list(filter);
        } catch (_err: any) {
          const logMessage: string = _err;
          throw new ApplicationError(400, logMessage);
        }
    }
}