import {ArrayList} from "./ArrayList";

interface Post{
    title:string;
}
let arrList = new ArrayList<Post>();
arrList.add({title:'Lap trinh JS'});
arrList.add({title:'Lap trinh java'});
arrList.add({title:'Lap trinh python'});
arrList.remove();
console.log(arrList.container);