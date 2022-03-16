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

    public makeModel(){
        this._model = this.initializeModel();
        if(!this._model){
            throw new Error("Not found model. Please set model by setModel method");
        }
    }
}