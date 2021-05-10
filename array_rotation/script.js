const input = document.querySelector('.input-block')
const button = document.querySelector('button')
const output = document.querySelector('.output-block')

button.addEventListener('click',()=>{
 let array =input.value.replace(/[\[,\]]/g,'').split('')
output.innerHTML=array.slice(array[0]).concat(array.slice(0, array[0])).join('')
})