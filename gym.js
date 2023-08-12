function home() {
    document.getElementById("homes").style.color="rgb(33, 249, 33)";
    document.getElementById("plans").style.color="white";
    document.getElementById("contacts").style.color="white";
    document.getElementById("blogs").style.color="white";
    document.getElementById("programs").style.color="white";
    
    
}
function program() {
    document.getElementById("homes").style.color="white";
    document.getElementById("plans").style.color="white";
    document.getElementById("contacts").stylr.color="white";
    document.getElementById("blogs").style.color="white";
    document.getElementById("programs").style.color="rgb(33, 249, 33)";
    
    
}
function blog() {
    document.getElementById("homes").style.color="white";
    document.getElementById("plans").style.color="white";
    document.getElementById("contacts").style.color="white";
    document.getElementById("blogs").style.color="rgb(33, 249, 33)";
    document.getElementById("programs").style.color="white";
    
    
}
function contact() {
    document.getElementById("homes").style.color="white";
    document.getElementById("plans").style.color="white";
    document.getElementById("contacts").style.color="rgb(33, 249, 33)";
    document.getElementById("blogs").style.color="white";
    document.getElementById("programs").style.color="white";
    
    
}
function plan() {
    document.getElementById("homes").style.color="white";
    document.getElementById("plans").style.color="rgb(33, 249, 33)";
    document.getElementById("contacts").style.color="white";
    document.getElementById("blogs").style.color="white";
    document.getElementById("programs").style.color="white";
    
    
}
function submit(){
    let name = document.getElementById("name") ;
    let number = document.getElementById("number") ;

    if(name.value == ""){
        alert("please Enter Name");
    }else if(number.value == ""){
        alert("please Enter Number");

    }
    else{
        alert("Thanks for Join : "+name.value)
    }
}
