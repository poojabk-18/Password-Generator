
const passwordBox = document.getElementById("pass")

const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
 "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

 const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
 "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

 const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

 const symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', ';', ':', "'", '"', ',', '<',  '>', '/', '?' , '|',  '~']

 const allchar = [...uppercase , ...lowercase, ...symbols ,...numbers]


 function generatepass(){
    let password = "";
    let passlength = 10;
    password += uppercase[Math.floor(Math.random()* uppercase.length)]
    password += lowercase[Math.floor(Math.random()* lowercase.length)]
    password += numbers[Math.floor(Math.random()* numbers.length)]
    password += symbols[Math.floor(Math.random()* symbols.length)]
    
while(password.length < passlength){
    password += allchar[Math.floor(Math.random()* allchar.length)]
} 
passwordBox.value = password;
}
 


