let layout = document.getElementById("layout")
layout.addEventListener("mousedown",handleMouseDown)
layout.addEventListener("mouseup",handleMouseUp)
layout.addEventListener("mousemove",handleMouseMove)
var sidebarWidth = document.getElementById("sidebar").style.width.replace("px","")
let startX,startY,mousedownX,mousedownY

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

        let width = Math.abs(event.clientX - mousedownX)
        if(width < 100){
            div.style.width = 100 + "px"
        }else{
            div.style.width = width + "px"
        }

        let height = Math.abs(event.clientY - mousedownY)
        if(height < 100){
            div.style.height = 100 + "px"
        }else{
            div.style.height = height + "px"
        }

        div.style.borderWidth = "2px"
        div.style.borderColor = "black"
        div.style.borderStyle = "solid"
        div.style.borderRadius = 0
        div.style.position = "fixed"
        div.style.backgroundColor = "transparent"
        div.style.transition = "all 100ms linear"

        layout.appendChild(div)

        if(startY > event.clientY){
            div.style.marginTop = event.clientY + "px"
        }else{
            div.style.marginTop = startY + "px"
        }

        if(startX > event.clientX){
            div.style.marginLeft = event.clientX + "px"
        }else{
            div.style.marginLeft = startX + "px"
        }
        return div
    }


    function drawCircle(event){

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
        drawCircle(event)
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
    mousedownX = event.clientX
    startX = event.clientX - Number(sidebarWidth)
    mousedownY = event.clientY
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