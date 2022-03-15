import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import {RegisterRoutes} from './routes/routes';

dotenv.config();

export default class BreedingServer{
    private app: express.Application;
    private readonly port: number;
    constructor(port: number = Number(process.env.PORT)){
        this.app = express();
        this.port = port;

        this.initializeMiddlewares();
        this.initializeRoutes();
    }

    private initializeMiddlewares(){
        this.app.use(cors());
        this.app.use(express.json());
    }

    private initializeRoutes(){
        RegisterRoutes(this.app);
    }

    public start(){
        const server = this.app.listen(this.port, () => {
            console.log("Breeding Server listen at: " + this.port);
        });
    }
}