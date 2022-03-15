import express, { Request, Response } from "express";

const data = {
    "body":493,
    "background":502,
    "ear":510,
    "nose":512,
    "eye":518,
    "eyebrow":522,
    "medal":525,
    "necklaces":533,
    "top":541,
    "front face":548,
    "arms":556,
    "accessories":564,
    "back":570,
    "side face":576
}

const name = "14380"

export default class BreedingQueueController {
    public async test(req: Request, res: Response) {
        res.status(200).send({name: name, data:JSON.stringify(data)});
    }

    public async uploadImage(){
        
    }
}