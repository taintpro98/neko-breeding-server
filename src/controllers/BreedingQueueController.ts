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
    public async getFirstPendingBreedingNeko(req: Request, res: Response) {
        const firstPendingBreedingNeko = await this.breedingNekoService.getFirstPendingBreedingNeko();
        res.status(200).send({name: firstPendingBreedingNeko.name, data:JSON.stringify(firstPendingBreedingNeko.json_data)});
    }

    public async uploadImage(req: Request, res: Response){
        console.log(req.file, req.body);
        res.status(200).json(true);
    }
}