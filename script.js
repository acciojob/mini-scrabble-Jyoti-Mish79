//your code here
let string = document.getElementById("string");
let length = document.getElementById("length");
string.addEventListener('keyup',()=>{
    let str = string.value;
    length.innerText = str.length;

})