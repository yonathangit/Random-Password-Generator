const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let message = document.getElementById("message");
function generate(){
    let input = document.getElementById("input_char").value;
    p1.textContent = "";
    p2.textContent = "";
    if(input){
        if(isNaN(input)){
            message.style.color = "red";
            message.textContent = "Error: Please enter a valid amount of number!";
        }

        else{
            for (let i = 0; i < input; i++){
                assignRandomPassword();
            }
            
            message.style.color = "#4ADF86";
            message.textContent = "Success: Two passwords of " + input + " characters generated!"; 
        }
        
    }

    else {
        for (let i = 0; i < 16; i++){
           assignRandomPassword();
           message.style.color = "#4ADF86";
           message.textContent = "Success: Two passwords of 16 characters generated!";
        }
    }    
}
    
function clearEverything() {
    p1.textContent = "";
    p2.textContent = "";
    message.textContent = "";
    clearInput();
}
function clearInput(){
     document.getElementById("input_char").value = "";
}

function assignRandomPassword(){
    let indexOne = Math.floor(Math.random()*characters.length);
    let indexTwo = Math.floor(Math.random()*characters.length);
    p1.textContent += characters[indexOne];
    p2.textContent += characters[indexTwo];
}




