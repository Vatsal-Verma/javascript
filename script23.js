function func1(callback){
    setTimeout(() => {
        console.log(`hey there this is nothing but something new to me`)
        callback();
    }, 3000);
    
    
}

function func2(){
    console.log('test 1 ');
    console.log('test2')
    console.log('test3')
}
func1(func2);