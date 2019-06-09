/* ### Commit 2

* When I click the "Set Color" button, it should change the color of the "brush" box to the color I specify in the input field.
* You can use `document.querySelector` (or another document method) to select the element, then add an event listener. */

//Variables
const setColorButton = document.getElementById('set-color')
const textField = document.getElementById('color-field')
const brushBox = document.getElementsByClassName('brush')[0]


//EventListernes

//Changes color of brush box depending on whats typed in
setColorButton.addEventListener('click', function(event){
   brushBox.style.backgroundColor = textField.value
   event.preventDefault()
})

