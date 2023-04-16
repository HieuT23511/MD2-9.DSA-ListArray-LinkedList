export enum monthE {
    JAN = 1,
    FEB,
    MAR,
    APR,
    MAY,
    JUN,
    JUL,
    AUG,
    SEP,
    OCT,
    NOV,
    DEC
}

export class NodeSalary {
    _month: monthE;
    _money: number;
    _next: NodeSalary | null;

    constructor(month: monthE, money: number) {
        this._month = month;
        this._money = money;
        this._next = null;
    }

    getMonth(): monthE {
        return this._month;
    }

    getMoney(): number {
        return this._money;
    }
    getData():{Month: monthE, Money: number}{
        return {Month: this._month, Money: this._money}
    }
}