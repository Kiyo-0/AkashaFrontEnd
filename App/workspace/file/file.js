let layout = document.getElementById("layout")
layout.addEventListener("mousedown",handleMouseDown)
layout.addEventListener("mouseup",handleMouseUp)
layout.addEventListener("mousemove",handleMouseMove)

let startX,startY

function handleClick(){
    getAttribues(this)
}

function handleDivMouseup(){
    document.getElementById("move").classList.remove("active")
}

function handleDivMouseDown(event){
    document.getElementById("move").classList.add("active")
    this.addEventListener("mouseup",handleDivMouseup)
}

function handleMouseUp(event){
    if(document.getElementById("move").classList.contains("active")){
        document.getElementById("move").classList.remove("active")
    }

    function drawSquare(event){
        let div = document.createElement("div")

        let width = Math.abs(event.clientX - startX)
        if(width < 100){
            div.style.width = 100 + "px"
        }else{
            div.style.width = width + "px"
        }

        let height = Math.abs(event.clientY - startY)
        if(height < 100){
            div.style.height = 100 + "px"
        }else{
            div.style.height = height + "px"
        }

        div.style.borderWidth = "2px"
        div.style.borderColor = "black"
        div.style.borderStyle = "solid"
        div.style.borderRadius = 0
        div.style.backgroundColor = "transparent"
        div.style.position = "absolute"
        div.style.transition = "all 100ms linear"

        layout.appendChild(div)

        if(startY > event.clientY){
            div.style.top = event.clientY + "px"
        }else{
            div.style.top = startY + "px"
        }

        if(startX > event.clientX){
            div.style.left = event.clientX + "px"
        }else{
            div.style.left = startX + "px"
        }
        return div
    }

    if(document.getElementById("square").classList.contains("active")){
        let newDiv = drawSquare(event)
        newDiv.addEventListener("click",handleClick)
        getAttribues(newDiv)
        newDiv.addEventListener("mousedown",show)
        newDiv.addEventListener("mouseup",hide)
        newDiv.setAttribute("type","div")
        document.getElementById("square").classList.remove("active")
    }else if(document.getElementById("circle").classList.contains("active")){
        // drawSquare()
        document.getElementById("circle").classList.remove("active")
    }
}

function handleMouseMove(event){
    if(document.getElementById("move").classList.contains("active")){
        setX(Math.abs(event.clientX))
        setY(Math.abs(event.clientY))
        getAttribues(div)
    }
}

function handleMouseDown(event){
    startX = event.clientX
    startY = event.clientY
}

function show(){
    document.getElementById(this.id + "Input").style.background = "skyblue"
    document.getElementById(this.id + "Input").style.color = "black"
}

function hide(){
    document.getElementById(this.id + "Input").style.background = "transparent"
    document.getElementById(this.id + "Input").style.color = "white"
}