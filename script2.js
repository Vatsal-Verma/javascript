let a = 0;
document.getElementById('increase').onclick=function(){
    a++;
    document.getElementById('count').textContent=a;
}
document.getElementById('decrease').onclick=function(){
    a--;
    document.getElementById('count').textContent=a;
}
document.getElementById('reset').onclick=function(){

    document.getElementById('count').textContent=0;
}