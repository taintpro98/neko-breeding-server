import express, { Request, Response } from "express";

export default class BreedingQueueController {
    public async test(req: Request, res: Response) {
        // res.status(200).send("success");
        return "test";
    }
}