import {LinkedListSalary} from "./LinkedListSalary";

let employee1 = new LinkedListSalary();
employee1.insertNode(1,150);
employee1.insertNode(2,250);
employee1.insertNode(3,350);
console.log(employee1.showList());
console.log(employee1.totalSalary());
// console.log(employee1.findMonthMaxSalary());
employee1.findMonthMaxSalary();