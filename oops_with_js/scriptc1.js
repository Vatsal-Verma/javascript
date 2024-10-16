class Hello{
    Message(){
        console.log("I'm built different");
    }
    constructor(name){
        this.name=name;
        console.log("this is something like a joke");
        console.log(this.name);
    }
}
let a = new Hello("vatsal");

a.Message();