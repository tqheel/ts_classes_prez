interface IEngine  {
    color: string,
    name: string,
    job: string,
    weightInTons: number
}

class Engine implements IEngine {
    // _color: string;
    // _name: string;
    // _job: string;
    // _weightInTons: number;
    constructor(public color: string, public name: string, public job: string, public weightInTons: number){
        this.color = color,
        this.name = name,
        this.job = job,
        this.weightInTons = weightInTons
    }

}