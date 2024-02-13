let divs = []
let div

function getAttribues(d){
    div = d
    document.getElementById("x").value = d.style.left.replace("px","")
    document.getElementById("y").value = d.style.top.replace("px","")
    document.getElementById("width").value = d.style.width.replace("px","")
    document.getElementById("height").value = d.style.height.replace("px","")
    document.getElementById("borderWidth").value = d.style.borderWidth.replace("px","")
    document.getElementById("borderRadius").value = d.style.borderRadius.replace("px","")
    document.getElementById("borderColor").value = d.style.borderColor
    document.getElementById("backgroundColor").value = d.style.backgroundColor

    if(divs.indexOf(div) == -1){
        divs.push(div)
        div.id = "div" + divs.length
        writeToBar(div)
        document.getElementById("type").innerText = "div"
    }
}

function changeToMove(){
    let b = document.getElementById("move")
    if(b.classList.contains("btn-outline-secondary")){
        b.classList.remove("btn-outline-secondary")
        b.classList.add("btn-success")

        for(let i in divs){
            divs[i].addEventListener('mousedown',handleDivMouseDown)
        }
    }else{
        b.classList.add("btn-outline-secondary")
        b.classList.remove("btn-success")

        for(let i in divs){
            divs[i].removeEventListener('mousedown',handleDivMouseDown)
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


function copyHTML() {
    navigator.clipboard.writeText(document.getElementById("layout").innerHTML);
    document.getElementById('doneHTML').classList.remove('d-none')
}

function copyCSS() {
    function extractStyles() {
        let css = "";

        divs.forEach((element) => {
            const style = element.style
            let cssText = `#${element.id}{\n`;
            for (let i = 0; i < style.length; i++) {
                cssText += `\t ${style[i]} : ${style[style[i]]};\n`;
            }
            cssText += "}"
            css += cssText + "\n"
        })

        return css;
    }

    navigator.clipboard.writeText(extractStyles());
    document.getElementById('doneCSS').classList.remove('d-none')
}
