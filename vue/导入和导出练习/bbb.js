// 导入的{}的定义的变量
import { flag,sum } from "./aaa.js";
if(flag){
    console.log('小明是天才');
    console.log(sum(20,30))
}
// 导入export直接定义的变量
import { num1,height } from "./aaa.js";
console.log(num1);
console.log(height);

// 导入export的function/class
import { mul , Person} from "./aaa.js";
console.log(mul(30,50));
const p=new Person();
p.run();
// default导入的数据名字随便起，同一模块只用一个
import addr from "./aaa.js";
console.log(addr);
//统一全部导入
import * as aaa from "./aaa.js";
console.log(aaa.Person);