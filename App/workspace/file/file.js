let layout = document.getElementById("layout")
layout.addEventListener("mousedown",handleMouseDown)
layout.addEventListener("mouseup",handleMouseUp)
var sidebarWidth = document.getElementById("sidebar").style.width.replace("px","")
let startX,startY,mousedownX,mousedownY

var div
var divCount = 0

function handleClick(){
    div = this
    getAttribues(div)
}

function handleDivMouseup(){
    layout.removeEventListener("mousemove",handleMouseMove)
}

function handleDivMouseDown(){
    layout.addEventListener("mousemove",handleMouseMove)
    this.addEventListener("mouseup",handleDivMouseup)
}

function handleMouseUp(event){
    if(document.getElementById("move").classList.contains("active")){
        document.getElementById("move").classList.remove("active")
    }else if(document.getElementById("square").classList.contains("active")){
        document.getElementById("square").classList.remove("active")
    }else if(document.getElementById("circle").classList.contains("active")){
        document.getElementById("circle").classList.remove("active")
    }
    layout.removeEventListener("mousemove",handleMouseMove)
}

function handleMouseMove(event){
    if(document.getElementById("move").classList.contains("active")){
        if(div != undefined && div != null){
            setX(div,Math.abs(event.clientX))
            setY(div,Math.abs(event.clientY))
            getAttribues(div)
        }else{
            console.error("Undefined")
        }
    }else if(document.getElementById("square").classList.contains("active")){
        if(div !== undefined){
            setWidth(div,Math.abs(event.clientX - mousedownX))
            setheight(div,Math.abs(event.clientY - mousedownY))
            getAttribues(div)
        }else{
            console.error("Undefined")
        }
    }else if(document.getElementById("circle").classList.contains("active")){
        if(div !== undefined){
            setWidth(div,Math.abs(event.clientX - mousedownX))
            setheight(div,Math.abs(event.clientY - mousedownY))
            getAttribues(div)
        }else{
            console.error("Undefined")
        }
    }
}

function getAttribues(div){
    document.getElementById("margin-left").value = divs[div.id]["styles"]["margin-left"].replace("px","")
    document.getElementById("margin-top").value = divs[div.id]["styles"]["margin-top"].replace("px","")
    document.getElementById("width").value = divs[div.id]["styles"]["width"].replace("px","")
    document.getElementById("height").value = divs[div.id]["styles"]["height"].replace("px","")
    document.getElementById("border-width").value = divs[div.id]["styles"]["border-width"].replace("px","")
    document.getElementById("border-radius").value = divs[div.id]["styles"]["border-radius"].replace("%","")
    document.getElementById("border-color").value = divs[div.id]["styles"]["border-color"]
    document.getElementById("background").value = divs[div.id]["styles"]["background"]
}

function setWidth(div,width){
    let divStyles = divs[div.id]["styles"]
    divStyles["width"] = `${width}px`;
    document.getElementById(`${div.id}Styles`).innerHTML = `#${div.id}${createCss(div)}`
}

function setheight(div,height){
    let divStyles = divs[div.id]["styles"]
    divStyles["height"] = `${height}px`;
    document.getElementById(`${div.id}Styles`).innerHTML = `#${div.id}${createCss(div)}`
}

function setX(div,x){
    let divStyles = divs[div.id]["styles"]
    divStyles["margin-left"] = `${(x - sidebarWidth)}px`;
    document.getElementById(`${div.id}Styles`).innerHTML = `#${div.id}${createCss(div)}`
}

function setY(div,y){
    let divStyles = divs[div.id]["styles"]
    divStyles["margin-top"] = `${(y)}px`;
    document.getElementById(`${div.id}Styles`).innerHTML = `#${div.id}${createCss(div)}`
}

function handleMouseDown(event){
    if(document.getElementById("square").classList.contains("active")){
        mousedownX = event.clientX
        startX = event.clientX - Number(sidebarWidth)
        mousedownY = event.clientY
        startY = event.clientY

        div = document.createElement("div")
        div.onclick = handleClick
        layout.appendChild(div)
        divCount += 1
        div.id = `div${divCount}`

        divs[div.id] = {
            "element" : div,
            "classList" : [],
            "styles" : {
                "position" : "fixed",
                "width" : "0px",
                "height" : "0px",
                "margin-left" : `${startX}px`,
                "margin-top" : `${event.clientY}px`,
                "border-width" : "2px",
                "border-color" : "black",
                "border-style" : "solid",
                "border-radius" : "0%",
                "background" : "transparent"
            }
        }

        let newStyleElement = document.createElement("style")
        newStyleElement.setAttribute("id",`${div.id}Styles`)

        newStyleElement.innerHTML = `#${div.id}${createCss(div)}`
        document.head.appendChild(newStyleElement)
        writeToBar(div)

        layout.addEventListener("mousemove",handleMouseMove)
    }

    if(document.getElementById("move").classList.contains("active")){
        layout.addEventListener("mousemove",handleMouseMove)
    }
}


function changeValue(button){
    divs[div.id]["styles"][button.id] = button.value
    document.getElementById(`${div.id}Styles`).innerHTML = createCss(divs[div.id]["styles"])
}

function createCss(div){
    let css =  `{\n`
    let cssStyles = divs[div.id]["styles"]

    for(let style in cssStyles){
        css += `\t${style} : ${cssStyles[style]};\n`
    }
    css += `}\n`
    return css
}