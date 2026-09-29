const inputEl = document.getElementById('user-name') as HTMLInputElement | null; 

//if(!inputEl){
   // throw new Error('Could not find user-name element');
//}


console.log(inputEl?.value);


