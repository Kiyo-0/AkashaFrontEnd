let divs = {};

function copyHTML() {
    navigator.clipboard.writeText(document.getElementById("layout").innerHTML);
    document.getElementById('doneHTML').classList.remove('d-none');
}

function setType(type){
    document.getElementById('type').innerText = type;
    let elementOfType = document.createElement(type);
    elementOfType.id = div.id;
    layout.appendChild(elementOfType);
    layout.removeChild(div);
}

function copyCSS() {
    function extractStyles() {
        let css = "";

        for(let id in divs){
            css += document.getElementById(`${id}Styles`).innerHTML;
        }

        return css;
    }

    navigator.clipboard.writeText(extractStyles());
    document.getElementById('doneCSS').classList.remove('d-none');
}
