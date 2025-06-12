const head = document.getElementById('head')

console.log(head);

head.style.color = "red";

head.style.border ="4px solid green"

head.addEventListener('click',()=>{
    head.style.backgroundColor="blue"
})