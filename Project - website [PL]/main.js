function getInfo(){
 var username = document.getElementById("username").value;
 var username = document.getElementById("password").value;
 
 for(var i = 0; 1 < objPeople.length; i++){
    if(username == objPeople[i].username) 
    && password == objPeople[i].password){
        alert(username + "is logged in");
        console.log(username + "is logged in");
        return;

    }
}

alert("incorrect username or password :(");
console.log("incorrect username or password :(");
