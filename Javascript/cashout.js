document.getElementById("withdraw-btn").addEventListener('click',function(){

//  get agentNumber
  const agentNumber=getValue('agent-number');
  console.log("Agent Number: ",agentNumber);
  if(agentNumber.length!=11){ 
    alert('Invalid Agent number');
    return;
  }

// // get amount 

const cashOutAmount=getValue('cashout');
  console.log("cashOutAmount: ",cashOutAmount);


  //current Balance

const currentInput=document.getElementById('currentBalance');
const current=currentInput.innerText;
  console.log("currentBalance: ",current);

// //set new Balance
  

const newBalance=Number(current)-Number(cashOutAmount);
  console.log("remainBalance: ",newBalance);
if(newBalance<0){
    alert('Invalid Amount');
    return;
}



// pin verify
const pin=getValue('input-pin');
if(pin==='1234'){
   currentInput.innerText=newBalance;
   alert("Cashout Successful")
}
else{
  alert("Invalid Pin");
  return;
}












})