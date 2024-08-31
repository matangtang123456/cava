const bar =document.getElementById('bar');
const menu=document.querySelector(".menu");

if(bar){
    bar.addEventListener('click', ()  =>{
menu.classList.add('active')
    })
};

const close =document.getElementById('close');

if(close){
    close.addEventListener('click', ()  =>{
menu.classList.remove('active')
    })
}