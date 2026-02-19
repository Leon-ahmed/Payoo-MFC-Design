console.log("Hello javascript");

document.getElementById('Login-btn').addEventListener('click',function(){
    
const inputnum=document.getElementById('input-number');
const num= inputnum.value;
console.log(num)

const inputpin=document.getElementById('input-pin');
const pin= inputpin.value;
console.log(pin);

if(num=="01813318668"&&pin=="1234"){
    alert("login succesfull");
    window.location.assign("./homepage.html");

}
else{
    alert("login failed");
    return;
}




})