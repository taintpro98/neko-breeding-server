import express from 'express';

import BreedingQueueController from '../controllers/BreedingQueueController';
import { upload } from 'constants/images';

const BreedingQueueControllerInstance = new BreedingQueueController();
export function RegisterRoutes(app: express.Router){
    app.get("/get", BreedingQueueControllerInstance.getFirstPendingBreedingNeko.bind(BreedingQueueControllerInstance));
    app.post("/upload", upload.single('neko'), BreedingQueueControllerInstance.uploadImage.bind(BreedingQueueControllerInstance));
}