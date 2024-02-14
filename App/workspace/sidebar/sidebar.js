var filesLink = document.getElementById("fileslink")
var stylesLink = document.getElementById("styleslink")
var componentsLink = document.getElementById("componentslink")
var utilityLink = document.getElementById("utilitylink")
var settingsLink = document.getElementById("settingslink")
var profileLink = document.getElementById("profilelink")
var arrow = document.getElementById("arrow")
var nav = document.getElementById("nav")
var fileTab = document.getElementById("FilesTab")
var styleTab = document.getElementById("Stylestab")
var componentsTab = document.getElementById("ComponentsTab")
var utilityTab = document.getElementById("UtilityTab")
var tree = document.getElementById("tree")

var bgStyles = [
    "bg-primary",
    "bg-secondary",
    "bg-success",
    "bg-info",
    "bg-warning",
    "bg-danger",
    "bg-light",
    "bg-dark",
    "bg-transparent",
]

var textColorStyles = [
    "text-secondary",
    "text-success",
    "text-info",
    "text-warning",
    "text-danger",
    "text-light",
    "text-dark",
    "text-muted"
]

var textBgColorStyles = [
    "text-bg-primary",
    "text-bg-secondary",
    "text-bg-success",
    "text-bg-info",
    "text-bg-warning",
    "text-bg-danger",
    "text-bg-light",
    "text-bg-dark",
    "text-light",
    "text-white",
    "text-black"
]

var textAlignStyles = [
    "text-center",
    "text-start",
    "text-end"
]

var textTrasnformStyles = [
    "text-capitalize",
    "text-uppercase",
    "text-lowercase",
    "text-nowrap",
    "font-monospace"
]

var textDecorationsStyles = [
    "text-decoration-none",
    "text-decoration-underline",
    "text-decoration-line-through"
]

var fontWeightStyles = [
    "fw-normal",
    "fw-bold",
    "fw-bolder",
    "fw-light",
    "fw-lighter",
    "fw-medium",
    "fw-semibold"
]

var fontStyles = [
    "fst-normal",
    "fst-italic"
]

var fontSizes = [
    "fs-1",
    "fs-2",
    "fs-3",
    "fs-4",
    "fs-5",
    "fs-6"
]

var btnNormalStyles = [
    "btn btn-secondary",
    "btn btn-success",
    "btn btn-info",
    "btn btn-warning",
    "btn btn-danger",
    "btn btn-light",
    "btn btn-dark"
]

var btnOutlineStyles = [
    "btn btn-outline-secondary",
    "btn btn-outline-success",
    "btn btn-outline-info",
    "btn btn-outline-warning",
    "btn btn-outline-danger",
    "btn btn-outline-light",
    "btn btn-outline-dark"
]

var styles = {
    "Background" : bgStyles,
    "Text BgColor Styles" : textBgColorStyles,
    "Text Color Styles" : textColorStyles,
    "Text Align Styles" : textAlignStyles,
    "Text Trasnform Style" : textTrasnformStyles,
    "Text Decorations Styles" : textDecorationsStyles,
    "Font Styles" : fontStyles,
    "Font Weight Styles" : fontWeightStyles,
    "Font Sizes" : fontSizes,
    "Button Normal" : btnNormalStyles,
    "Button outlined" : btnOutlineStyles
}

function changeClass(b){
    let isButton = false
    let find = (attr) => {
        for (let list in styles) {
            let styleList = styles[list]
            for(let el in styleList){
                if(styleList == btnNormalStyles || styleList == btnOutlineStyles){
                    isButton = true
                }

                if(styleList[el] === attr){
                    return styleList
                }
            }
        }
    }

    let styleList = find(b.classList[0])
    for(let i in styleList){
        if(div.classList.contains(styleList[i])){
            div.classList.remove(styleList[i])
        }
    }

    if(isButton){
        console.log("hi")
        div.classList.add(b.classList[0])
        div.classList.add(b.classList[1])
    }else{
        div.classList.add(b.classList[0])
    }
}

for(let i in styles){
    let div = document.createElement("div")
    div.classList.add("dropend")
    div.innerHTML = `<img src="/Refrences/Stylesicon.svg" class = "fileicon me-2" alt=""> <button class=" btn btn-dark dropdown-toggle" data-bs-toggle="dropdown">${i}</button><ul id = "${i}" class="dropdown-menu dropdown-menu bg-dark-subtle"></ul>`;
    document.getElementById("styles").appendChild(div)
    let html = "";
    for(let j = 0;j < styles[i].length;j++){
        html += `<li class = "dropdown-item"><button class="${styles[i][j]}" onclick="changeClass(this)">${styles[i][j].split("-")[styles[i][j].split("-").length - 1]}</button></li>`
    }
    document.getElementById(`${i}`).innerHTML = html
}


window.onresize = () => {
    if(window.outerWidth < 1400){
        changetoSideBar()
    }

    if(window.outerWidth > 1400){
        changeToPanel()
    }
}

function changetoSideBar(){
    nav.classList.remove("flex-lg-row")
    filesLink.innerHTML = "<img src='/Refrences/file.svg' class = 'fileicon me-2'>"
    stylesLink.innerHTML = "<img src='/Refrences/Stylesicon.svg' class = 'fileicon me-2'>"
    componentsLink.innerHTML = "<img src='/Refrences/componentsicon.svg' class = 'fileicon me-2'>"
    utilityLink.innerHTML = "<img src='/Refrences/utilityicon.svg' class = 'fileicon me-2'>"
    settingsLink.innerHTML = "<img src='/Refrences/settings.svg' class = 'fileicon me-2'>"
    profileLink.innerHTML = "<img src='/Refrences/profile.svg' class = 'fileicon me-2'>"
    arrow.classList.add("d-none")
    arrow.innerHTML = "<img src='/Refrences/rightarrow.svg' class = 'fileicon'>"

    fileTab.classList.remove("active")
    styleTab.classList.remove("active")
    componentsTab.classList.remove("active")
    utilityTab.classList.remove("active")
}

function changeToPanel(){
    filesLink.removeEventListener("click",changeToPanel)
    stylesLink.removeEventListener("click",changeToPanel)
    componentsLink.removeEventListener("click",changeToPanel)
    utilityLink.removeEventListener("click",changeToPanel)
    settingsLink.removeEventListener("click",changeToPanel)
    profileLink.removeEventListener("click",changeToPanel)

    nav.classList.add("flex-lg-row")
    filesLink.innerText = "Files"
    stylesLink.innerText = "Styles"
    componentsLink.innerText = "Components"
    utilityLink.innerHTML = "Utility"
    settingsLink.innerHTML = "<img src='/Refrences/settings.svg' class = 'fileicon me-2'>Settings"
    profileLink.innerHTML = "<img src='/Refrences/profile.svg' class = 'fileicon me-2'>Profile"
    arrow.classList.remove("d-none")
    arrow.innerHTML = "<img src='/Refrences/leftarrow.svg' class = 'fileicon'>"

    let file = document.getElementById("file").classList
    file.remove("col-xxl-8")

    let sidebar = document.getElementById("sidebar").classList
    sidebar.add("col-lg-3")

    if(filesLink.classList.contains("active")){
        fileTab.classList.add("active")
    }else if(stylesLink.classList.contains("active")){
        styleTab.classList.add("active")
    }else if(componentsLink.classList.contains("active")){
        componentsTab.classList.add("active")
    }else if(utilityLink.classList.contains("active")){
        utilityTab.classList.add("active")
    }
}

function changeBar(){
    let b = document.getElementById("arrow").classList
    b.add("d-none")

    let sidebar = document.getElementById("sidebar").classList
    sidebar.remove("col-lg-3")
    nav.classList.remove("flex-lg-row")

    let file = document.getElementById("file").classList
    file.add("col-xxl-8")
    changetoSideBar()

    filesLink.addEventListener("click",changeToPanel)
    stylesLink.addEventListener("click",changeToPanel)
    componentsLink.addEventListener("click",changeToPanel)
    utilityLink.addEventListener("click",changeToPanel)
    settingsLink.addEventListener("click",changeToPanel)
    profileLink.addEventListener("click",changeToPanel)
}

function square(){
    document.getElementById("square").classList.add("active")
    document.getElementById("move").classList.add("btn-outline-secondary")
    document.getElementById("move").classList.remove("btn-success")
}


function writeToBar(d){
    let div = document.createElement("div")
    div.style.margin = "2px"
    div.style.padding = "2px"
    div.style.fontSize = "1rem"
    div.style.fontWeight = "bold"
    div.style.transition = "all 500ms 100ms linear"

    function edit(){
        this.setAttribute("contenteditable",'true')
    }

    div.addEventListener("dblclick",edit)
    div.innerHTML = `<div id = '${d.id}Input' class = ''>${d.id}</div>`
    tree.appendChild(div)
}
