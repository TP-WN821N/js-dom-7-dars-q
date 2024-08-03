let form1 = document.getElementById('form1')
let box1 = document.getElementById('box1')
form1.addEventListener('submit', (e) => {
  e.preventDefault()
  box1.style.width = form1.width.value + "px"
  box1.style.height = form1.height.value + "px"
  box1.style.borderRadius = form1.radius.value + "px"
  box1.style.backgroundColor = form1.color.value
})


let form2 = document.getElementById("form2")
let result2 = document.querySelector('.result2')
form2.addEventListener('submit', (e) => {
  e.preventDefault()
  let arr = form2.textarea_two.value.trim().split(" ").filter(item => item != "")
  result2.innerHTML = arr.length
})



let form3 = document.getElementById('form3')
let result3 = document.querySelector('.result3')
form3.addEventListener('submit', (e) => {
  e.preventDefault()
  let input = form3.strItem.value
  let arr = form3.textarea_three.value.trim().split(" ").filter(item => item != "")
  result3.innerHTML = arr.find(item => item == input) ? true : false
})





let result4 = document.querySelector('.result4')
function inputFile() {
  let file = document.getElementById('file')
  result4.innerHTML = (file.files[0].size / 1024).toFixed(2) + 'Kb'
}



let result5 = document.querySelector('.result5')
function taskFive(event) {
  let arr = event.target.value.trim().split("")
  let a = 0, b = 0
  arr.forEach(item => {
    if (item === '(') {
      a++
    } else if (item === ")") {
      b++
    }
  })

  result5.innerHTML = a === b ? true : false
}