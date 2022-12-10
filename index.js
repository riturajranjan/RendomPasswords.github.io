const UpperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "1234567890";
const symboleSet = "!@#$%^&*()+=-[]\\\';,./{}|\":<>?";

const passBox = document.getElementById("pass-box");
const totalChar = document.getElementById("total-char");
const upperInput = document.getElementById("Upper-case");
const lowerInput = document.getElementById("lower-case");
const numberInput = document.getElementById("number");
const symboleInput = document.getElementById("symbole");


const getRendomData = (dataset)=>{
    return dataset[Math.floor(Math.random()* dataset.length)];

}

const generatePassword = (passwords="")=>{
    if(upperInput.checked){
        passwords += getRendomData(UpperSet)
    }
    if(lowerInput.checked){
        passwords += getRendomData(LowerSet)
    }
    if(numberInput.checked){
        passwords += getRendomData(numberSet)
    }
    if(symboleInput.checked){
        passwords += getRendomData(symboleSet)
    }
    if(passwords.length<= totalChar.value){
        return generatePassword(passwords)
    }
    passBox.innerText = truncateString(passwords, totalChar.value)
    // console.log(truncateString(passwords, totalChar.value));
}


document.getElementById("btn").addEventListener("click", function(){

    generatePassword();
})


function truncateString(str, num){
    if(str.length > num){
        let subStr = str.substring(0, num);
        return subStr;
    }else{
        return str;
    }
}