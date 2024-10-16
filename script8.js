// example one
// hello(leave);


// function hello(callback){
//     console.log( `hello`);
//     callback();
// }

// function wait(){
//     console.log('wait');
// }
// function leave(){
//     console.log('leave');
// }

// function goodbye(){
//     console.log('goobye');
// }
sum(display, 1, 2 );

function sum(callback, x, y){
    let result = x + y;
    callback(result);
}
function display(result){
    console.log(result);
}