import { checkBreedingDatabaseConnection } from "./configs/database";
import BreedingServer from "./BreedingServer";

async function bootstrap() {
    checkBreedingDatabaseConnection();
}

function init() {
    const expressServer = new BreedingServer();
    expressServer.start();
}

bootstrap().then(() => {
    init();
})