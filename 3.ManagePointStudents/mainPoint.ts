import {LinkedListPoint} from "./LinkedListPoint";

let listPoint = new LinkedListPoint();
listPoint.insertFirst('hieut',5);
listPoint.insertFirst('hieuc',10);
listPoint.insertFirst('hieuc',8);
listPoint.insertFirst('tu',10);
listPoint.insertLast('toan',7);
listPoint.insertLast('thuan',2);

console.table(listPoint.showList());
console.log(listPoint.totalStudentsFail());
console.table(listPoint.listStudentMaxScore());
console.table(listPoint.findByName('hieuc'))