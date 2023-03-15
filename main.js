let list = document.querySelector('#arguments')

// PART ONE

//1
function strike() {
    let firstLi = list.querySelector('li')
    firstLi.style.textDecoration = 'line-through'
}
//2
strike()

//3
function setImg(id, url) {
    let image = document.querySelector(`#${id}`)
    image.src = url
}
//4
setImg('image-1', 'https://images.pexels.com/photos/2129796/pexels-photo-2129796.png?auto=compress&cs=tinysrgb&w=800')
setImg('image-2', 'https://images.pexels.com/photos/2224861/pexels-photo-2224861.png?auto=compress&cs=tinysrgb&w=800')
setImg('image-3', 'https://images.pexels.com/photos/290386/pexels-photo-290386.jpeg?auto=compress&cs=tinysrgb&w=800')

//5
function removeFromArguments() {
    let li = list.querySelector('li')
    li.remove()
}
//6
removeFromArguments()
removeFromArguments()

//7
function changeFontSize(size, id) {
    let el = document.querySelector(`#${id}`)
    el.style.fontSize = size
}
//8
changeFontSize('160%', 'thing-2')





//  PART TWO

//1
function addToArguments(element) {
    let arguments = document.querySelector('#arguments')
    arguments.appendChild(element)
}
//2
let newImage = document.createElement('img')
addToArguments(newImage)

//3
function modufyImgHeight(imgEl) {
    imgEl.style.height = '30px'
}
//4
modufyImgHeight(document.querySelector('#image-1'))

//5
function giveInvisibleClass(el) {
    el.className = 'invisible'
}
//6
giveInvisibleClass(document.querySelector('#thing-c'))


//  PART THREE

//1
function addLiText(txt) {
    let li = document.createElement('li')
    li.innerText = txt
    return li
}
//2
let greet = addLiText('This is a greet line')
addToArguments(greet)

//3
function changeHeader(size, headerText) {
    let header = document.createElement(`h${size}`)
    header.style.fontSize = headerText
    return header
}
//4
changeHeader(5, 'New Header')