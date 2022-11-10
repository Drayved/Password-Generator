let currentPassword = true;

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let randomChars1 = document.getElementById("random-chars1")
let randomChars2 = document.getElementById("random-chars2")

function randomPassword() {
    if (currentPassword === true){
        randomChars1.textContent = ""
    }
    for (let i = 0; i < 13; i++){
        let randomize = Math.floor(Math.random() * characters.length)
        randomChars1.textContent += characters[randomize]
        
        
    }
}

function randomPassword2(){
    if (currentPassword === true){
        randomChars2.textContent = ""
    }
    for (let i = 0; i < 13; i++){
        let randomize = Math.floor(Math.random() * characters.length)
        randomChars2.textContent += characters[randomize]
    }
    
}
randomPassword()
randomPassword2()





