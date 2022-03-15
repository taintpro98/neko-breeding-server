import express from 'express';

import BreedingQueueController from '../controllers/BreedingQueueController';

const BreedingQueueControllerInstance = new BreedingQueueController();
export function RegisterRoutes(app: express.Router){
    app.get("/", BreedingQueueControllerInstance.test.bind(BreedingQueueControllerInstance));
    
}