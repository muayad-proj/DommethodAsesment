let bodyElement = document.querySelector("body")
let newDiv = document.createElement('div')
newDiv.append("hello")
bodyElement.append(newDiv)
let buttonElement = document.createElement('button')
buttonElement.append('Remove')
bodyElement.append(buttonElement)
let ImagElement = document.createElement('img')
ImagElement.src = 'https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg'
bodyElement.append(ImagElement)


buttonElement.addEventListener("click", function () {
   // console.log("REmove")
ImagElement.remove()
})

