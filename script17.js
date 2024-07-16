class parent{
    constructor(age,name){
        this.age=age;
        this.name=name;
    }   
    display(){
        console.log(this.age,this.name);
    }
}
class child extends parent{
    constructor(age,name){
        this.age=age;
        this.name=name;
    }
    display(){
    super.display();
        console.log(this.age,this.name);
    }
}

const a = new parent(19,`vatsal`);
const b = new child(18,`vijit`);

b.display();

