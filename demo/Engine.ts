interface EngineInterface  {
    _color: string,
    _name: string,
    _job: string,
    _weightInTons: number
}

class Engine implements EngineInterface {
    _color: string;
    _name: string;
    _job: string;
    _weightInTons: number;
    constructor(public color: string, public name: string, public job: string, public weightInTons: number){
        this._color = color,
        this._name = name,
        this._job = job,
        this._weightInTons = weightInTons
    }

}