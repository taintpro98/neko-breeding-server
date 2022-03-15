import express from 'express';
import multer from 'multer';

import BreedingQueueController from '../controllers/BreedingQueueController';
import { upload } from 'constants/images';

const BreedingQueueControllerInstance = new BreedingQueueController();
export function RegisterRoutes(app: express.Router){
    app.get("/", BreedingQueueControllerInstance.test.bind(BreedingQueueControllerInstance));
    app.post("/upload", upload.single('neko'), (req, res, next) => {
        console.log(req.file, req.body)
    });
}