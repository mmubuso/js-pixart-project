//Musiteli Mubuso
//Pix Art Challenge exercise


//Variables
const setColorButton = document.getElementById('set-color')
const textField = document.getElementById('color-field')
const brushBox = document.getElementsByClassName('brush')[0]
const resetButton = document.createElement('button')
const colorSwatches = new Array()
let squares 
let colorTracker = 0

//Event listerners 
//Changes color of brush box depending on whats typed in
setColorButton.addEventListener('click', function(event){
   brushBox.style.backgroundColor = textField.value
   event.preventDefault()
   trackColor()
})
// Change the color of the  div square to the text input color when you mouse over
document.body.addEventListener('mouseover',event => {
    if(event.target.classList.value === "square"){
        event.target.style.backgroundColor = textField.value
    }
})
//Clicking reset clears current painting 
resetButton.addEventListener('click',function(){
    squares = document.querySelectorAll('.square')
    for(let i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = "#E7E5DB"
    }
})


//Create 8000 divs with the class of square
for(let i = 0; i < 8000; i++){
    let canvasBlock = document.createElement('div')
    document.body.appendChild(canvasBlock)
    canvasBlock.classList.add('square')
}

//Create reset button
resetButton.setAttribute('type','button')
document.getElementsByTagName('form')[0].appendChild(resetButton)
resetButton.innerHTML = "Reset"

//Create 3 swatch boxes
for(let i = 0; i < 3; i++){
    swatchBoxes = document.createElement('div')
    document.getElementsByClassName('controls')[0].appendChild(swatchBoxes)
    swatchBoxes.classList.add('brush')
    colorSwatches.push(swatchBoxes)
}

//Store last color from main brush to swatch boxes
function trackColor(){
    if(colorTracker === 3){
        colorTracker = 0
        colorSwatches[colorTracker].style.backgroundColor = brushBox.style.backgroundColor
        colorTracker++
    }else{
        colorSwatches[colorTracker].style.backgroundColor = brushBox.style.backgroundColor
        colorTracker++
    }
}