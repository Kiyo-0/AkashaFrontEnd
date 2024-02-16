let divs = {}

function changeToMove(button){
    if(button.classList.contains("active")){
        button.classList.remove("active")
    }else{
        button.classList.add("active")
    }
}

function copyHTML() {
    navigator.clipboard.writeText(document.getElementById("layout").innerHTML);
    document.getElementById('doneHTML').classList.remove('d-none')
}

function copyCSS() {
    function extractStyles() {
        let css = "";

        for(let id in divs){
            css += document.getElementById(`${id}Styles`).innerHTML
        }

        return css;
    }

    navigator.clipboard.writeText(extractStyles());
    document.getElementById('doneCSS').classList.remove('d-none')
}
