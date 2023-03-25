var flag=1;
var ex1=document.getElementById("one");
var ex2=document.getElementById("two");
var ex3=document.getElementById("three");
var ex4=document.getElementById("four");
var ex5=document.getElementById("five");
var ex6=document.getElementById("six");
var ex7=document.getElementById("seven");
var ex8=document.getElementById("eight");
var ex9=document.getElementById("nine");
var main=document.getElementById("main");
var popup=document.getElementById("container-2");
var result=document.getElementById("result");
function onclick1(){
  if(flag==1){
  ex1.value="X";
  ex1.disabled=true;
  ex1.style.border="2px solid red";
  ex1.style.color="red";
  document.getElementById("status").innerHTML="O TURN";
  flag--;
  }
  else{
  ex1.value="O";
  ex1.disabled=true;
  ex1.style.border="2px solid skyblue";
  ex1.style.color="skyblue";
  document.getElementById("status").innerHTML="X TURN";
  flag++;
  }
}
function onclick2(){
  if(flag==1){
  ex2.value="X";
  ex2.disabled=true;
  ex2.style.border="2px solid red";
  ex2.style.color="red";
  document.getElementById("status").innerHTML="O TURN";
  flag--;
  
  }
  else{
  ex2.value="O";
  ex2.disabled=true;
  ex2.style.border="2px solid skyblue";
  ex2.style.color="skyblue";
  document.getElementById("status").innerHTML="X TURN";
  flag++;
  
  }
}
function onclick3(){
  if(flag==1){
  ex3.value="X";
  ex3.disabled=true;
  ex3.style.border="2px solid red";
  ex3.style.color="red";
  document.getElementById("status").innerHTML="O TURN";
  flag--;
  }
  else{
  ex3.value="O";
  ex3.disabled=true;
  ex3.style.border="2px solid skyblue";
  ex3.style.color="skyblue";
  document.getElementById("status").innerHTML="X TURN";
  flag++;
  }
}
function onclick4(){
  if(flag==1){
  ex4.value="X";
  ex4.disabled=true;
  ex4.style.border="2px solid red";
  ex4.style.color="red";
  document.getElementById("status").innerHTML="O TURN";
  flag--;
  }
  else{
  ex4.value="O";
  ex4.disabled=true;
  ex4.style.border="2px solid skyblue";
  ex4.style.color="skyblue";
  document.getElementById("status").innerHTML="X TURN";
  flag++;
  }
}
function onclick5(){
  if(flag==1){
  ex5.value="X";
  ex5.disabled=true;
  ex5.style.border="2px solid red";
  ex5.style.color="red";
  document.getElementById("status").innerHTML="O TURN";
  flag--;
  }
  else{
  ex5.value="O";
  ex5.disabled=true;
  ex5.style.border="2px solid skyblue";
  ex5.style.color="skyblue";
  document.getElementById("status").innerHTML="X TURN";
  flag++;
  }
}
function onclick6(){
  if(flag==1){
  ex6.value="X";
  ex6.disabled=true;
  ex6.style.border="2px solid red";
  ex6.style.color="red";
  document.getElementById("status").innerHTML="O TURN";
  flag--;
  }
  else{
  ex6.value="O";
  ex6.disabled=true;
  ex6.style.border="2px solid skyblue";
  ex6.style.color="skyblue";
  document.getElementById("status").innerHTML="X TURN";
  flag++;
  }
}
function onclick7(){
  if(flag==1){
  ex7.value="X";
  ex7.disabled=true;
  ex7.style.border="2px solid red";
  ex7.style.color="red";
  document.getElementById("status").innerHTML="O TURN";
  flag--;
  }
  else{
  ex7.value="O";
  ex7.disabled=true;
  ex7.style.border="2px solid skyblue";
  ex7.style.color="skyblue";
  document.getElementById("status").innerHTML="X TURN";
  flag++;
  }
}
function onclick8(){
  if(flag==1){
  ex8.value="X";
  ex8.disabled=true;
  ex8.style.border="2px solid red";
  ex8.style.color="red";
  document.getElementById("status").innerHTML="O TURN";
  flag--;
  }
  else{
  ex8.value="O";
  ex8.disabled=true;
  ex8.style.border="2px solid skyblue";
  ex8.style.color="skyblue";
  document.getElementById("status").innerHTML="X TURN";
  flag++;
  }
}function onclick9(){
  if(flag==1){
  ex9.value="X";
  ex9.disabled=true;
  ex9.style.border="2px solid red";
  ex9.style.color="red";
  document.getElementById("status").innerHTML="O TURN";
  flag--;
  }
  else{
  ex9.value="O";
  ex9.disabled=true;
  ex9.style.border="2px solid skyblue";
  ex9.style.color="skyblue";
  document.getElementById("status").innerHTML="X TURN";
  flag++;
  }
}
function reset(){
  flag=1;
  document.getElementById("status").innerHTML="START PLAYING";
  ex1.value="";
  ex1.disabled=false;
  ex1.style.border="2px solid gray";
  ex2.value="";
  ex2.disabled=false;
  ex2.style.border="2px solid gray";
  ex3.value="";
  ex3.disabled=false;
  ex3.style.border="2px solid gray";
  ex4.value="";
  ex4.disabled=false;
  ex4.style.border="2px solid gray";
  ex5.value="";
  ex5.disabled=false;
  ex5.style.border="2px solid gray";
  ex6.value="";
  ex6.disabled=false;
  ex6.style.border="2px solid gray";
  ex7.value="";
  ex7.disabled=false;
  ex7.style.border="2px solid gray";
  ex8.value="";
  ex8.disabled=false;
  ex8.style.border="2px solid gray";
  ex9.value="";
  ex9.disabled=false;
  ex9.style.border="2px solid gray";
  
  main.style.display="grid";
popup.style.display="none";
}
function statuscheck() {
  v1=document.getElementById("one").value;
  v2=document.getElementById("two").value;
  v3=document.getElementById("three").value;
  v4=document.getElementById("four").value;
  v5=document.getElementById("five").value;
  v6=document.getElementById("six").value;
  v7=document.getElementById("seven").value;
  v8=document.getElementById("eight").value;
  v9=document.getElementById("nine").value;
  if(v1=="X" && v2=="X" && v3=="X") {
    document.getElementById("status").innerHTML="X player won";
    result.innerHTML="X player won";
    main.style.display="none";
    popup.style.display="block";
  }
  else if(v4=="X" && v5=="X" && v6=="X"){
    document.getElementById("status").innerHTML="X player won";
    result.innerHTML="X player won";
    main.style.display="none";
    popup.style.display="block";
    
  }
   else if(v7=="X"&&v8=="X"&&v9=="X"){
    document.getElementById("status").innerHTML="X player won";
    result.innerHTML="X player won";
    main.style.display="none";
    popup.style.display="block";
  }
    else if(v1=="X"&&v4=="X"&&v7=="X"){
    document.getElementById("status").innerHTML="O player won";
    result.innerHTML="X player won";
    main.style.display="none";
    popup.style.display="block";
  }
  else if(v2=="X"&&v5=="X"&&v8=="X"){
    document.getElementById("status").innerHTML="O player won";
    result.innerHTML="X player won";
    main.style.display="none";
    popup.style.display="block";
  }
  else if(v3=="X"&&v6=="X"&&v9=="X"){
    document.getElementById("status").innerHTML="O player won";
    result.innerHTML="X player won";
    main.style.display="none";
    popup.style.display="block";
  }
  else if(v1=="X"&&v5=="X"&&v9=="X"){
    document.getElementById("status").innerHTML="X player won";
    result.innerHTML="X player won";
    main.style.display="none";
    popup.style.display="block";
    
  }
  else if(v3=="X"&&v5=="X"&&v7=="X"){
    document.getElementById("status").innerHTML="X player won";
    result.innerHTML="X player won";
    main.style.display="none";
    popup.style.display="block";
  }
  else if(v1=="O"&&v2=="O"&&v3=="O"){
    document.getElementById("status").innerHTML="O player won";
    result.innerHTML="O player won";
    main.style.display="none";
    popup.style.display="block";
  }
  else if(v4=="O"&&v5=="O"&&v6=="O"){
    document.getElementById("status").innerHTML="O player won";
    result.innerHTML="O player won";
    main.style.display="none";
    popup.style.display="block";
  }
   else if(v7=="O" && v8=="O" && v9=="O"){
    document.getElementById("status").innerHTML="O player won";
    result.innerHTML="O player won";
    main.style.display="none";
    popup.style.display="block";
  }
  else if(v1=="O"&&v4=="O"&&v7=="O"){
    document.getElementById("status").innerHTML="O player won";
    result.innerHTML="O player won";
    main.style.display="none";
    popup.style.display="block";
  }
  else if(v2=="O"&&v5=="O"&&v8=="O"){
    document.getElementById("status").innerHTML="O player won";
    result.innerHTML="O player won";
    main.style.display="none";
    popup.style.display="block";
  }
  else if(v3=="O"&&v6=="O"&&v9=="O"){
    document.getElementById("status").innerHTML="O player won";
    result.innerHTML="O player won";
    main.style.display="none";
    popup.style.display="block";
  }
  else if(v1=="O"&&v5=="O"&&v9=="O"){
    document.getElementById("status").innerHTML="O player won";
    result.innerHTML="O player won";
    main.style.display="none";
    popup.style.display="block";
  }
  else if(v3=="O" && v5=="O" && v7=="O"){
    document.getElementById("status").innerHTML="O player won";
    result.innerHTML="O player won";
    main.style.display="none";
    popup.style.display="block";
  }
 else if((v1=="X" || v1=="O")&&(v2=="X" || v2=="O")&&(v3=="X" || v3=="O")&&(v4=="X" || v4=="O")&&(v5=="X" || v5=="O")&&(v6=="X" || v6=="O")&&(v7=="X" || v7=="O")&&(v8=="X" || v8=="O")&&(v9=="X" || v9=="O"))
 {
    document.getElementById("status").innerHTML="MATCH DRAW";
    result.innerHTML="MATCH DRAW";
    main.style.display="none";
    popup.style.display="block";
 
 }
}