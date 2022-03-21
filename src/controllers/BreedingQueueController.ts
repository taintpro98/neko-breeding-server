import { BreedingNekoService } from './../services/BreedingNekoService';
import express, { Request, Response } from "express";

// const data = {
//     "body":493,
//     "background":502,
//     "ear":510,
//     "nose":512,
//     "eye":518,
//     "eyebrow":522,
//     "medal":525,
//     "necklaces":533,
//     "top":541,
//     "front face":548,
//     "arms":556,
//     "accessories":564,
//     "back":570,
//     "side face":576
// }

// const name = "14380"

export default class BreedingQueueController {
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