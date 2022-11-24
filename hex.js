let value = document.getElementById('value');
let clickbtn = document.getElementById('click-btn')

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

//add an event listener
clickbtn.addEventListener('click', function(){
let hexColor = '#';
//loop through 6 times
for(let i = 0; i < 6; i++){
    //add randomvalues to hex
    //use + to keep previous values
  hexColor += numbers[randomNumber()]
  //console.log(hexColor)
}
//edit on screen
value.innerText = hexColor;
document.body.style.backgroundColor = hexColor;
})
//randomnumber function
function randomNumber(){
    return Math.floor(Math.random() * numbers.length)
}