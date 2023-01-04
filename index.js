const Input = document.getElementById("input");
const Button = document.querySelector(".btn");
const Message = document.querySelector(".response");

Button.addEventListener("click", () => {
    vowelCheck();
})

function vowelCheck(){
     let vowelCount = 0;
    const word = Input.value;
    let wordString = Input.value.toLowerCase();

    for(let i= 0; i < wordString.length; i++){
        let letter = wordString[i];
        if(letter.match(/([a,e,i,o,u])/)){
           vowelCount++;
    }
  }
  Message.innerHTML = `${word.toUpperCase()} has ${vowelCount} vowels.`
}














