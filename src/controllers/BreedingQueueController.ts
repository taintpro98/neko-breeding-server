import { BreedingNekoService } from '@n-services';
import { Request, Response } from "express";

export class BreedingQueueController {
    private breedingNekoService = new BreedingNekoService();
    public async getFirstBreedingNeko(req: Request, res: Response) {
        const firstBreedingNeko = await this.breedingNekoService.getFirstBreedingNeko();
        if (firstBreedingNeko) {
            res.status(200).send({
                id: firstBreedingNeko.id,
                name: firstBreedingNeko.name,
                data: JSON.stringify(firstBreedingNeko.json_data)
            });
        }
        else res.status(400).send();
    }

    public async uploadImage(req: Request, res: Response) {
        await this.breedingNekoService.uploadImage(req.body.id);
        res.status(200).json(true);
    }
}