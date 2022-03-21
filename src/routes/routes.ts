import express from 'express';
import { BreedingQueueController } from '@n-controllers';
import { upload } from '@n-constants/images';

const BreedingQueueControllerInstance = new BreedingQueueController();
export function RegisterRoutes(app: express.Router) {
    app.get("/get", BreedingQueueControllerInstance.getFirstBreedingNeko.bind(BreedingQueueControllerInstance));
    app.post("/upload", upload.single('neko'), BreedingQueueControllerInstance.uploadImage.bind(BreedingQueueControllerInstance));
}