let layout = document.getElementById("layout")
layout.addEventListener("mousedown",handleMouseDown)

let startX,startY

function handleMouseUp(event){
    function drawSquare(){
        let div = document.createElement("div")

        div.style.width = Math.abs(event.clientX - startX) + "px"
        div.style.height = Math.abs(event.clientY - startY) + "px"
        div.style.border = "2px solid black"
        div.addEventListener("click",() => {console.log("Hi")})
        div.style.position = "absolute"

        layout.appendChild(div)
        div.style.top = startY + "px"
        div.style.left = startX + "px"
    }

    if(document.getElementById("square").classList.contains("active")){
        drawSquare()
        document.getElementById("square").classList.remove("active")
    }else if(document.getElementById("circle").classList.contains("active")){
        // drawSquare()
        document.getElementById("circle").classList.remove("active")
    }
}

function handleMouseMove(event){
    layout.addEventListener("mouseup",handleMouseUp)
}

function handleMouseDown(event){
    startX = event.clientX
    startY = event.clientY
    layout.addEventListener("mousemove",handleMouseMove)
}
