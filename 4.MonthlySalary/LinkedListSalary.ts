import {monthE, NodeSalary} from "./NodeSalary";

export class LinkedListSalary {
    head: NodeSalary | null;
    tail: NodeSalary | null;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertNode(month: monthE, money: number) {
        let nodeSalary = new NodeSalary(month, money);
        nodeSalary._next = this.head;
        this.head = nodeSalary;
        if (!this.tail) {
            this.tail = nodeSalary;
        }
    }

    showList() {
        let listInfo: { Month: monthE, Money: number }[] = [];
        let currentNode: NodeSalary | null = this.head;
        while (currentNode) {
            listInfo.push(currentNode.getData())
            currentNode = currentNode._next;
        }
        return listInfo
    }

    totalSalary(): string {
        let totalSalary: number = 0;
        let currentNode: NodeSalary | null = this.head;
        while (currentNode) {
            totalSalary += currentNode.getMoney();
            currentNode = currentNode._next
        }
        return `The total salary is: ${totalSalary}`;
    }

    findMaxSalary() {
        let arrayMaxSalaryMonth: number[] = [];
        this.showList().forEach(element => arrayMaxSalaryMonth.push(element.Money))
        return Math.max(...arrayMaxSalaryMonth);
    }

    findMonthMaxSalary() {
        this.showList().forEach(element => {
            if (element.Money === this.findMaxSalary()) {
                console.log(`The month ${element.Month} has the highest salary : ${element.Money}`)
            }
        })
    }
}