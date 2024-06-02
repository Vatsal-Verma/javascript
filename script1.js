document.getElementById('butt').onclick = function(){
    var a = document.getElementById('name').value;
   if(a.startsWith("v")){
      document.alert("you are useless piece of shit")
   }
    document.getElementById('change').textContent=`hello ${a}`;
}