const clock = document.getElementsByClassName('clock')[0];

setInterval(function(){
    let date=new Date();
    clock.innerText=date.toLocaleTimeString();
    clock.style.color='Yellow';
},1000);