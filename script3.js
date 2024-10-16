document.getElementById('btn').onclick = function(){
    var name = document.getElementById('name').value;
    var password = document.getElementById('password').value;
    var email = document.getElementById('email').value;
    var valid = true;

        if(name == ''){
            alert('name field is required')
            valid  = false;
        }
        if(name<10){
            alert('name is less than 10 characters')
            valid  = false;
        }
        if(password == ''){
            alert('password is required')
            valid  = false;
        }
        if(email == ''){
            alert('email is required')
            valid  = false;
        }
        if(email.endsWith("@gmail.com")==false){
            alert('email is incorrect')
            valid  = false;
        }
        if(password.includes('@')==false || password.includes('#' || password.includes('&'))){
            alert('use speacial symbols like @ # !')
            valid  = false;
        }
        if(valid==true){
            window.location.href="2stopwatch.html";
        }
    
   
}