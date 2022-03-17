import { Model } from "objection";

export abstract class Repository<T extends typeof Model> {
    private _model: T;
    constructor(){
        this.makeModel();
    }

    get model(): T{
        return this._model;
    }

    abstract initializeModel(): T;

    static queryFilter(query: any, filter: any): any{
        return query;
    }

    public makeModel(){
        this._model = this.initializeModel();
        if(!this._model){
            throw new Error("Not found model. Please set model by setModel method");
        }
    }

    async updateById(id: number | string, data: any): Promise<T["prototype"]> {
        const result = await this.model.query().updateAndFetchById(id, data);
        return result;
    }
}