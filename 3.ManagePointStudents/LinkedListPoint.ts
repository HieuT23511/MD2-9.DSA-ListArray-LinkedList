import {NodePoint} from "./NodePoint";

export class LinkedListPoint {
    head : NodePoint | null;
    tail: NodePoint | null;

    constructor() {
        this.head = null;
        this.tail = null;
    }
    insertFirst(name:string,score:number){
        let node = new NodePoint(name,score);
        node._next = this.head;
        this.head = node;
        if(!this.tail){
            this.tail = node;
        }
    }
    insertLast(name:string, score:number){
        if(!this.head){
            this.insertFirst(name, score)
        }
        else {
            let node = new NodePoint(name, score);
            if(this.tail){
                this.tail._next = node;
                this.tail = node;
            }
        }
    }
    showList():{name:string, score:number}[]{
        let arrayShowList:{name:string, score:number}[] = [];
        let currentNode = this.head;
        while (currentNode){
            arrayShowList.push(currentNode.getData());
            currentNode = currentNode._next;
        }
        return arrayShowList;
    }
    totalStudentsFail(){
        let countFail =0;
        this.showList().forEach(item=>{
            if(item.score <=5){
                countFail ++
            }
        })
        return countFail;
    }
    maxScore(){
        let listScore :number[]=[];
        this.showList().forEach(item =>{
            listScore.push(item.score);
        })
        return Math.max(...listScore);
    }
    listStudentMaxScore(){
        let listStudentMaxScore: string[] = [];
        this.showList().forEach(item => {
            if(item.score === this.maxScore()){
                listStudentMaxScore.push(item.name);
            }
        })
        return listStudentMaxScore;
    }
    findByName(name:string){
        let listName:{name:string, score:number}[] =[]
        this.showList().forEach(item=>{
            if(name === item.name){
                listName.push(item)
            }
        })
        return listName;
    }
}