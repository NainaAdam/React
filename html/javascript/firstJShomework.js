const body=document.querySelector('body');
const button=document.querySelector('button');

const colors=['green','blue','red','pink','yellow'];

body.style.backgroundColor='green';
button.addEventListener('click',function(){
    const colorIndex=parseInt(Math.random()*colors.length);
    body.style.backgroundColor=colors[colorIndex];
})