let divs = []
let div

function getAttribues(d){
    div = d
    document.getElementById("x").value = d.style.left.replace("px","")
    document.getElementById("y").value = d.style.top.replace("px","")
    document.getElementById("width").value = d.style.width.replace("px","")
    document.getElementById("height").value = d.style.height.replace("px","")
    document.getElementById("borderSize").value = d.style.borderSize
    document.getElementById("borderRadius").value = d.style.borderRadius.replace("px","")
    document.getElementById("borderColor").value = d.style.borderColor
    document.getElementById("backgroundColor").value = d.style.backgroundColor

    if(divs.indexOf(div) == -1){
        divs.push(div)
        console.log("get")
    }
}

function changeToMove(){
    console.log("move")
    let b = document.getElementById("move")
    if(b.classList.contains("btn-outline-secondary")){
        b.classList.remove("btn-outline-secondary")
        b.classList.add("btn-success")

        for(let i in divs){
            divs[i].addEventListener('mousedown',handleDivMouseDown)
            console.log("addeddivmousedown")
        }
    }else{
        b.classList.add("btn-outline-secondary")
        b.classList.remove("btn-success")

        for(let i in divs){
            divs[i].removeEventListener('mousedown',handleDivMouseDown)
            console.log("addeddivmousedown")
        }
    }
}

function setWidth(width){
    div.style.width = width
}

function setheight(height){
    div.style.height = height
}

function setX(x){
    div.style.left = x + "px"
}

function setY(y){
    div.style.top = y + "px"
}


function copy() {
    var copyText = document.getElementById("layout");
    navigator.clipboard.writeText(copyText.innerHTML);
    document.getElementById('done').classList.remove('d-none')
}
