// class parent{
//     display(){
//         console.log(`this is parent`);
//     }
// }
// class child1 extends parent{
//     display2(){
//         console.log(`this is child`)
//     }
// }
// class child2 extends parent{
//     display3(){
//         console.log(`this is another child`)
//     }
// }
// const a = new child1();
// const b = new child2();
// a.display2();
// b.display3();
// b.display();


class parent{
    constructor(age,name){
        this.age=age;
        this.name=name;
    }
}
class child1 extends parent{
    constructor(age,name){
        super(age,name);
    }
}
class child2 extends parent{
    constructor(age , name){
       super(age,name);
    }
}

const a = new child2(18,"vatsal");
const b = new child1(10,`shivam`);
console.log(a.age,a.name);
console.log(b.age,b.name);
