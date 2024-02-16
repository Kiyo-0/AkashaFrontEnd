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

function changeClass(b) {
    let isButton = false

    let find = (attr) => {
        for (let list in styles) {
            let styleList = styles[list]
            for (let el in styleList) {
                if (styleList == styles["btnNormalStyles"] || styleList == styles["btnOutlineStyles"]) {
                    isButton = true
                }
                if (styleList[el] == attr) {
                    return styleList
                }
            }
        }
    }

    let styleList = find(b.classList[0])
    for (let i in styleList) {
        if (div.classList.contains(styleList[i])) {
            div.classList.remove(styleList[i])
        }
    }

    if (isButton) {
        div.classList.add(b.classList[0])
        div.classList.add(b.classList[1])
    } else {
        div.classList.add(b.classList[0])
    }
}


window.onresize = () => {
    if (window.outerWidth < 1400) {
        changetoSideBar()
    }

    if (window.outerWidth > 1400) {
        changeToPanel()
    }
}

function changetoSideBar() {
    nav.classList.remove("flex-lg-row")
    filesLink.innerHTML = "<img src='/Refrences/file.svg' class = 'fileicon me-2'>"
    stylesLink.innerHTML = "<img src='/Refrences/Stylesicon.svg' class = 'fileicon me-2'>"
    componentsLink.innerHTML = "<img src='/Refrences/componentsicon.svg' class = 'fileicon me-2'>"
    utilityLink.innerHTML = "<img src='/Refrences/utilityicon.svg' class = 'fileicon me-2'>"
    settingsLink.innerHTML = "<img src='/Refrences/settings.svg' class = 'fileicon me-2'>"
    profileLink.innerHTML = "<img src='/Refrences/profile.svg' class = 'fileicon me-2'>"

    fileTab.classList.remove("active")
    styleTab.classList.remove("active")
    componentsTab.classList.remove("active")
    utilityTab.classList.remove("active")
    document.getElementById("sidebar").style.width = "100px";
}

function changeToPanel() {
    filesLink.removeEventListener("click", changeToPanel)
    stylesLink.removeEventListener("click", changeToPanel)
    componentsLink.removeEventListener("click", changeToPanel)
    utilityLink.removeEventListener("click", changeToPanel)
    settingsLink.removeEventListener("click", changeToPanel)
    profileLink.removeEventListener("click", changeToPanel)

    nav.classList.add("flex-lg-row")
    filesLink.innerText = "Files"
    stylesLink.innerText = "Styles"
    componentsLink.innerText = "Components"
    utilityLink.innerHTML = "Utility"
    settingsLink.innerHTML = "<img src='/Refrences/settings.svg' class = 'fileicon me-2'>Settings"
    profileLink.innerHTML = "<img src='/Refrences/profile.svg' class = 'fileicon me-2'>Profile"

    let file = document.getElementById("file").classList
    file.remove("col-xxl-8")

    if (filesLink.classList.contains("active")) {
        fileTab.classList.add("active")
    } else if (stylesLink.classList.contains("active")) {
        styleTab.classList.add("active")
    } else if (componentsLink.classList.contains("active")) {
        componentsTab.classList.add("active")
    } else if (utilityLink.classList.contains("active")) {
        utilityTab.classList.add("active")
    }
    document.getElementById("sidebar").style.width = "350px";
}

function square() {
    document.getElementById("square").classList.add("active")
    document.getElementById("move").classList.add("btn-outline-secondary")
    document.getElementById("move").classList.remove("btn-success")
}

function writeToBar(d) {
    let div = document.createElement("div")
    div.style.margin = "2px"
    div.style.padding = "2px"
    div.style.fontSize = "1rem"
    div.style.fontWeight = "bold"
    div.style.transition = "all 500ms 100ms linear"

    function edit() {
        this.setAttribute("contenteditable", 'true')
    }

    div.addEventListener("dblclick", edit)
    div.innerHTML = `<div id = '${d.id}Input' class = ''>${d.id}</div>`
    tree.appendChild(div)
}

function createStyle() {

}