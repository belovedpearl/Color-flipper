let value = document.getElementById('value');
let clickbtn = document.getElementById('click-btn')


let color = ['red', 'green', 'rgb(240, 128, 128)', '#B8860B', 'rgb(64, 244 , 208)']

clickbtn.addEventListener('click', function(){
  let randomNumber = Math.floor( Math.random() * color.length )
  let randomColor = color[randomNumber]
  document.body.style.backgroundColor = randomColor
  value.innerText = randomColor
})