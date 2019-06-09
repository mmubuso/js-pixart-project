//Musiteli Mubuso
//Pix Art Challenge exercise


//Variables
const setColorButton = document.getElementById('set-color')
const textField = document.getElementById('color-field')
const brushBox = document.getElementsByClassName('brush')[0]

//Event listerners 
//Changes color of brush box depending on whats typed in
setColorButton.addEventListener('click', function(event){
   brushBox.style.backgroundColor = textField.value
   event.preventDefault()
})

// Change the color of the small div square to green when clicked on
document.body.addEventListener('click',event => {
    if(event.target.classList.value === "square"){
        event.target.style.backgroundColor = 'green'
    }
})


//Create 20 divs with the class of square
for(let i = 0; i < 20; i++){
    let canvasBlock = document.createElement('div')
    document.body.appendChild(canvasBlock)
    canvasBlock.classList.add('square')
}


