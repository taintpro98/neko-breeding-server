import { BreedingNekoService } from '../../src/services/BreedingNekoService';
import { expect } from "chai";

describe("BreedingNekoService", () => {
    it('getFirstPendingBreedingNeko', async () => {
        const breedingNekoService = new BreedingNekoService();
        const breedingNeko = await breedingNekoService.getFirstPendingBreedingNeko();
        console.log('breedingNeko', breedingNeko)
    })
})