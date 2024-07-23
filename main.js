const username = prompt("ismingiz")
const userAge = +prompt("porilini kiriting")
console.log(username);
console.log(userAge);

alert(`
sizning ismingiz ${username} 
sizning parolingiz ${userAge} 
`)

  
alert("ismingiz va parolingizni yana kiriting ")  
const usename = prompt("ismingiz")
const useAge = +prompt("porilini kiriting")
  
console.log(usename);
console.log(useAge);  
let lowerText1 = username.toLowerCase();
let lowerText2 = usename.toLowerCase();

if (lowerText1 .includes(lowerText2 ) && userAge == useAge 
   ) {
    alert("malades :)  ")
  } else {
    alert("togri mas  ")
  } 
  
  
  
  

