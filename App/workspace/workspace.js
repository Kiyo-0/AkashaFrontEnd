var userName = "Aman8740";

var styles = {};
var userStyles = {};

let layout = document.getElementById("layout");
layout.addEventListener("mousedown",handleMouseDown);
layout.addEventListener("mouseup",handleMouseUp);
var sidebarWidth = document.getElementById("sidebar").style.width.replace("px","");
let startX,startY,mousedownX,mousedownY;

var div;
var divCount = 0;

function handleClick(){
    div = this;
    getAttribues(div);
}

function handleDivMouseup(){
    if(document.getElementById("move").classList.contains("active")){
        document.getElementById("move").classList.remove("active");
    }
    layout.removeEventListener("mousemove",handleMouseMove);
}

function handleDivMouseDown(){;
    layout.addEventListener("mousemove",handleMouseMove);
    this.addEventListener("mouseup",handleDivMouseup);
}

function handleMouseUp(event){
    if(document.getElementById("square").classList.contains("active")){
        document.getElementById("square").classList.remove("active");
    }else if(document.getElementById("circle").classList.contains("active")){
        document.getElementById("circle").classList.remove("active");
    }else if(document.getElementById("textbox").classList.contains("active")){
        document.getElementById("textbox").classList.remove("active");
    }
    layout.removeEventListener("mousemove",handleMouseMove);
}

function handleMouseMove(event){
    if(document.getElementById("move").classList.contains("active")){
        if(div != undefined && div != null){
            setX(div,Math.abs(event.clientX));
            setY(div,Math.abs(event.clientY));
            getAttribues(div);
        }else{
            console.error("Undefined");
        }
    }else if(document.getElementById("square").classList.contains("active")){
        if(div !== undefined){
            setWidth(div,Math.abs(event.clientX - mousedownX));
            setheight(div,Math.abs(event.clientY - mousedownY));
            getAttribues(div);
        }else{
            console.error("Undefined");
        }
    }else if(document.getElementById("circle").classList.contains("active")){
        if(div !== undefined){
            setWidth(div,Math.abs(event.clientX - mousedownX));
            setheight(div,Math.abs(event.clientY - mousedownY));
            getAttribues(div);
        }else{
            console.error("Undefined");
        }
    }else if(document.getElementById("textbox").classList.contains("active")){
        if(div !== undefined){
            setWidth(div,Math.abs(event.clientX - mousedownX));
            setheight(div,Math.abs(event.clientY - mousedownY));
            getAttribues(div);
        }else{
            console.error("Undefined");
        }
    }
}

function getAttribues(div){
    document.getElementById("margin-left").value = divs[div.id]["styles"]["margin-left"].replace("px","");
    document.getElementById("margin-top").value = divs[div.id]["styles"]["margin-top"].replace("px","");
    document.getElementById("width").value = divs[div.id]["styles"]["width"].replace("px","");
    document.getElementById("height").value = divs[div.id]["styles"]["height"].replace("px","");
    document.getElementById("border-width").value = divs[div.id]["styles"]["border-width"].replace("px","");
    document.getElementById("border-radius").value = divs[div.id]["styles"]["border-radius"].replace("%","");
    document.getElementById("border-color").value = divs[div.id]["styles"]["border-color"];
    document.getElementById("background").value = divs[div.id]["styles"]["background"];
}

function setWidth(div,width){
    changeValue("width",`${width}px`);
    document.getElementById(`${div.id}Styles`).innerHTML = `#${div.id}${createCss(div)}`;
}

function setheight(div,height){
    changeValue("height",`${height}px`);
    document.getElementById(`${div.id}Styles`).innerHTML = `#${div.id}${createCss(div)}`;
}

function setX(div,x){
    changeValue("margin-left",`${(x - sidebarWidth)}px`);
    document.getElementById(`${div.id}Styles`).innerHTML = `#${div.id}${createCss(div)}`;
}

function setY(div,y){
    changeValue("margin-top",`${(y)}px`);
    document.getElementById(`${div.id}Styles`).innerHTML = `#${div.id}${createCss(div)}`;
}

function handleMouseDown(event){
    let isDrawing = (document.getElementById("square").classList.contains("active") || document.getElementById("circle").classList.contains("active") || document.getElementById("textbox").classList.contains("active"));
    let isCircle = document.getElementById("circle").classList.contains("active");
    let isTextbox = document.getElementById("textbox").classList.contains("active");

    if(isDrawing){
        mousedownX = event.clientX;
        startX = event.clientX - Number(sidebarWidth);
        mousedownY = event.clientY;
        startY = event.clientY;

        div = document.createElement("div");
        div.onclick = handleClick;
        layout.appendChild(div);
        divCount += 1;

        if(isTextbox){
            div.addEventListener("dblclick", () => {
                if(document.getElementById("move").classList.contains("active")){
                    document.getElementById("move").classList.remove("active");
                }

                div.setAttribute("contenteditable","true");
            });

            div.addEventListener("keydown",(event) => {
                if(event.key == "Escape"){
                    div.setAttribute("contenteditable","false");
                    div.removeEventListener("dblclick",() => div.setAttribute("contenteditable","true"));
                }
            });

            div.addEventListener("focusout",() => {
                div.setAttribute("contenteditable","false");
                div.removeEventListener("dblclick",() => div.setAttribute("contenteditable","true"));
            });
        }
        div.id = `element${divCount}`;

        divs[div.id] = {
            "element" : div,
            "styles" : {
                "position" : "fixed",
                "width" : "0px",
                "height" : "0px",
                "margin-left" : `${startX}px`,
                "margin-top" : `${event.clientY}px`,
                "border-width" : "2px",
                "border-color" : "black",
                "border-style" : "solid",
                "border-radius" : isCircle ? "50%" : "0%",
                "background" : "transparent"
            }
        };

        let newStyleElement = document.createElement("style");
        newStyleElement.setAttribute("id",`${div.id}Styles`);

        newStyleElement.innerHTML = `#${div.id}${createCss(div)}`;
        document.head.appendChild(newStyleElement);
        writeToBar(div);

        layout.addEventListener("mousemove",handleMouseMove);
    }

    if(document.getElementById("move").classList.contains("active")){
        layout.addEventListener("mousemove",handleMouseMove);
    }
}

function changeValue(property,newValue){
    divs[div.id]["styles"][property] = newValue;
    document.getElementById(`${div.id}Styles`).innerHTML = `#${div.id}${createCss(divs[div.id]["element"])}`;
}

function getPropertyValue(div,property){
    return divs[div.id]["styles"][property];
}
function createCss(div){
    let css =  `{\n`;
    let cssStyles = divs[div.id]["styles"];

    for(let style in cssStyles){
        css += `\t${style} : ${cssStyles[style]};\n`;
    }
    css += `}\n`;
    return css;
}

async function loadJSON () {
    let data = await fetch("/Refrences/builtInStyles.json");
    styles = await data.json();
    for (let i in styles) {
        let div = document.createElement("div");
        div.classList.add("dropend");
        div.innerHTML = `<img src="/Refrences/Stylesicon.svg" class = "fileicon me-2" alt=""> <button class=" btn btn-dark dropdown-toggle" data-bs-toggle="dropdown">${i}</button><ul id = "${i}" class="dropdown-menu dropdown-menu dropdown-menu-dark"></ul>`;
        document.getElementById("styles").appendChild(div);
        let html = "";
        for (let j = 0; j < styles[i].length; j++) {
            html += `<li class = "dropdown-item"><div class="${styles[i][j]}" onclick="changeClass(this,styles)">${styles[i][j].split("-")[styles[i][j].split("-").length - 1]}</div></li>`;
        }
        document.getElementById(`${i}`).innerHTML = html;
    }

    data = await fetch("/Refrences/userStyles.json");
    userStyles = await data.json();
    userStyles = userStyles[userName]["Styles"];
    let userStylesList = document.getElementById("userStyles");
    let html = "";
    for (let i in userStyles) {
        html += `<li class = "dropdown-item"><button class="${userStyles[i]}" onclick="changeClass(this,userStyles)">${i}</button></li>`;
    }
    userStylesList.innerHTML = html;
}

async function loadHtml(htmlPath,divId){
    const htmlResponse = await fetch(htmlPath);
    const html = await htmlResponse.text();
    document.getElementById(divId).innerHTML = html;
}

async function loadCss(cssPath){
    const cssResponse = await fetch(cssPath);
    const css = await cssResponse.text();
    const styleElement = document.createElement('style');
    styleElement.textContent = css;
    document.head.appendChild(styleElement);
}

async function loadJs(jsPath){
    const jsResponse = await fetch(jsPath);
    const js = await jsResponse.text();
    const scriptElemet = document.createElement('script');
    scriptElemet.textContent = js;
    scriptElemet.setAttribute("id",jsPath.split("/")[jsPath.split("/").length - 1]);
    document.getElementById("scripts").appendChild(scriptElemet);
}

async function loadResources(htmlPath,cssPath,jsPath,divId) {
    try {
        loadHtml(htmlPath,divId);
        loadCss(cssPath);
        loadJs(jsPath);
    } catch (error) {
        console.error('Error loading resources:', error);
    }
}

window.onload = () => {
    loadResources("sidebar/sidebar.html","sidebar/sidebar.css","sidebar/sidebar.js","sidebar");
    loadResources("attributes/attributes.html","attributes/attributes.css","attributes/attributes.js","attr");
    loadJSON();
};