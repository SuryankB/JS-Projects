let btn=document.getElementById("submit");

let randomNumber=Math.floor(Math.random() * 100) + 1;

btn.addEventListener("click",function(event){
    event.preventDefault();
    console.log(randomNumber);
    console.log("Button clicked");
    let a=document.getElementById("guess").value;
    console.log(a);

    let attempts=0;
    let maxAttempts=3;
    
    attempts++;
    if (a == randomNumber) {
        alert(" Congratulations! You guessed correctly: " + randomNumber);
        return;
    } 
    else if (a!= randomNumber && attempts < maxAttempts) {
        alert(" Incorrect guess, try again. Attempts left: " + (maxAttempts - attempts));
    }
    else if( attempts >= maxAttempts) {
        alert(" Sorry, you ran out of tries. The correct number was: " + randomNumber);
    }
    else {
        alert(" Sorry, you ran out of tries. The correct number was: " + randomNumber);
}

})