const colorlist=document.querySelectorAll('.colorlist');
const body=document.querySelector('body');

const bodycolordefault=body.style.backgroundColor;

colorlist.forEach(function(colorlist){
    console.log(colorlist);
    colorlist.addEventListener('click',function(event){
        if(event.target.textContent==="Default"){
            body.style.backgroundColor=bodycolordefault;
        }
        console.log(event.target);
        body.style.backgroundColor=event.target.textContent;

    });

})