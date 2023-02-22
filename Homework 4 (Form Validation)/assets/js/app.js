function validate() {
  
    let email = document.getElementById("Email_inp").value;
    let email2 = document.getElementById("Email_inp");
    let simvollar = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (simvollar.test(email)) {
        alert("done");
        return true;
    }
    else {
        email2.style.border = "red solid 3px";
        return false;
    }
}
let myInput = document.getElementById("psw");
let letter = document.getElementById("letter");
let capital = document.getElementById("capital");
let number = document.getElementById("number");
let length = document.getElementById("length");
let length2 = document.getElementById("length2");


myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}
myInput.onkeyup = function() {
  let lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) { 
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
}
  let upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) { 
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }
  let numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) { 
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
  if(myInput.value.length <= 10) {
    length2.classList.remove("invalid");
    length2.classList.add("valid");
  } else {
    length2.classList.remove("valid");
    length2.classList.add("invalid");
  }
}

let username=document.getElementById('usrname');
let capitalusr = document.getElementById("capitalusr");
let lengthusr = document.getElementById("lengthusr");
  username.onfocus = function() {
    document.getElementById("message2").style.display = "block";
  }
  username.onblur = function() {
    document.getElementById("message2").style.display = "none";
  }
username.onkeyup = function() {
    let upperCaseLetters = /[A-Z]/g;
    if(myInput.value.match(upperCaseLetters)) { 
      capitalusr.classList.remove("invalid");
      capitalusr.classList.add("valid");
    } else {
      capitalusr.classList.remove("valid");
      capitalusr.classList.add("invalid");
    }
    let numbers = /[0-9]/g;
if(username.value.length >= 6) {
    lengthusr.classList.remove("invalid");
    lengthusr.classList.add("valid");
  } else {
    lengthusr.classList.remove("valid");
    lengthusr.classList.add("invalid");
  }
}



let numbers = [0, 45 , 2, 657, 10, 575, 30 ];
numbers.sort( function( a , b){
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
});
console.log(numbers);

let numbers2 = [0, 45 , 2, 657, 10, 575, 30 ];
numbers2.sort((a, b) => b - a);
console.log(numbers2);

