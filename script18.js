// class test{
//     constructor(height,width){
//         this.width=width;
//         this.height=height
//     }
//     set width(newwidth){
//         if(newwidth > 0){
//             this._width=newwidth;
//         }
//         else
//         console.error(`please enter a positive width`);
//     }

//     set height(newheight){
//         if(newheight > 0){
//             this._height=newheight;
//         }
//         else
//         console.error( `please enter  a valid height`)
// }
// get height(){
//     return this._height;
// }
//     get width(){
//         return this._width;
//     }
//     get area(){
//         return this._width*this._height;
//     }
// }

// const a = new test(100,12);

// console.log(a.height,a.width);




// exmaple 2

class person{
    constructor(firstname,lastname,age){
        this.firstname=firstname
        this.lastname=lastname
        this.age=age
    }
    set firstname(newfirstname){
        if(newfirstname.length>0 && typeof newfirstname === "string"){
            this._firstname=newfirstname
        }
        else{
            console.error(`give arguements correctly`)
        }
    }
    set lastname(newlastname){
        if(newlastname.length > 0 && typeof newlastname === "string"){
            this._lastname=newlastname
        }
        else{
            console.error(`give the proper arguments ie correct value`);
        }
    }
    set age(newage){
        if(newage>0 && typeof newage === "number"){
            this._age=newage;
        }
        else{
            console.error(`age must be a non negative number`)
        }
    }
    get age(){
        return this._age;
    }
    get lastname(){
        return this._lastname;
    }
    get firstname(){
        return this._firstname;
    }
    get fullname(){
        return this._firstname + " " + this._lastname
    }

}

const p = new person('vatsal','verma',12)

console.log(p.firstname,p.lastname,p.age,p.fullname)

