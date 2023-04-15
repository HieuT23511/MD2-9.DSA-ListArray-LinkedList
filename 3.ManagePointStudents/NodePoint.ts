export class NodePoint{
    _name : string;
    _score : number;
    _next : NodePoint | null
    constructor(name:string, score:number) {
        this._name = name;
        this._score = score;
        this._next = null;
    }
    getName(){
        return this._name;
    }
    getScore(){
        return this._score;
    }
    getData():{name:string,score:number}{
        return {name: this._name, score: this._score};
    }
}