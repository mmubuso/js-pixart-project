//Musiteli Mubuso
//Pix Art Challenge exercise


//Variables
const setColorButton = document.getElementById('set-color')
const textField = document.getElementById('color-field')
const brushBox = document.getElementsByClassName('brush')[0]

//Changes color of brush box depending on whats typed in
setColorButton.addEventListener('click', function(event){
   brushBox.style.backgroundColor = textField.value
   event.preventDefault()
})

//Create 20 divs with the class of square
for(let i = 0; i < 20; i++){
    let canvasBlock = document.createElement('div')
    document.body.appendChild(canvasBlock)
    canvasBlock.classList.add('square')
}

