import { SAVING_IMAGES_FOLDER } from './../constants/images';
import { BreedingNekoFilter } from 'types/filters/BreedingNekoFilter';
import { BreedingNekoRepository } from "repositories/BreedingNekoRepository";
import { SBreedingNeko } from "./types/SBreedingNeko";
import { EBreedingNekoStatus } from 'constants/enums';
import BreedingNeko from 'models/BreedingNeko';
import path from "path";

export class BreedingNekoService {
    private breedingNekoRepository = new BreedingNekoRepository();
    async list(filter: BreedingNekoFilter): Promise<SBreedingNeko[]> {
        try {
            return await this.breedingNekoRepository.list(filter);
        } catch (_err: any) {
            const logMessage: string = _err;
        }
    }

    async findById(id: number | string): Promise<SBreedingNeko> {
        try {
            return await this.breedingNekoRepository.findById(id);
        } catch (_err: any) {
            const logMessage: string = _err;
        }
    }

    async getFirstBreedingNeko(): Promise<SBreedingNeko> {
        const renderingFilter: BreedingNekoFilter = {
            status: [EBreedingNekoStatus.RENDERING]
        }
        const renderingBreedingNekos = await this.list(renderingFilter);
        if (renderingBreedingNekos.length === 0) {
            const pendingFilter: BreedingNekoFilter = {
                status: [EBreedingNekoStatus.PENDING]
            }
            const pendingBreedingNekos = await this.list(pendingFilter);
            if (pendingBreedingNekos.length === 0) return null;

            const pendingBreedingNeko = pendingBreedingNekos[0];
            const updatedStatusBreedingNeko = {
                ...pendingBreedingNeko,
                status: EBreedingNekoStatus.RENDERING
            }
            await this.breedingNekoRepository.updateById(pendingBreedingNeko.id, updatedStatusBreedingNeko);
            return pendingBreedingNeko;
        }
        return renderingBreedingNekos[0];
    }

    async uploadImage(id: string): Promise<any> {
        let modifiedBreedingNeko = await this.findById(id);
        const renderedBreedingNeko = {
            ...modifiedBreedingNeko,
            status: EBreedingNekoStatus.RENDERED,
            file_path: path.resolve(SAVING_IMAGES_FOLDER, id + '.png')
        }
        await this.breedingNekoRepository.updateById(id, renderedBreedingNeko);
    }
}