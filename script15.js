class parent{
    constructor(name,age,gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
class child1 extends parent{
    constructor(name,age,gender){
        super(name,age,gender);
      
    }
}
class child2 extends parent{
    constructor(name,age,gender){
        super(name,age,gender);
     
    }
}
class child3 extends parent{
    constructor(name,age,gender){
        super(name,age,gender);
        
    }

}

const person1 = new child1("vatsal",12,"male");
const person2 = new child2('vijit',13,'male');
const person3 = new child3('verma',14,'female');

console.log(person1.name,person1.age,person1.gender);
console.log(person2.name,person2.age,person2.gender);
console.log(person3.name,person3.age,person3.gender);