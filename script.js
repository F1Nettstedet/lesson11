const btn = document.getElementById('btn')
const text = document.getElementById('text')
const square  = document.getElementById('square')
const circle = document.getElementById('circle')
const inputRange = document.getElementById('range')
const spanRange = document.getElementById('range-span')
const ebtn = document.getElementById('e_btn')

addColor = function(){   
text.textContent = text.value
square.style.backgroundColor = text.textContent
}

btn.addEventListener('click',addColor)

ebtn.setAttribute('style', 'display:none')


slider = function(e){ 
    spanRange.innerHTML = e.target.value
    circle.style.width =  spanRange.innerHTML + '%'
    circle.style.height =  spanRange.innerHTML + '%'

}

inputRange.addEventListener('input',slider)
