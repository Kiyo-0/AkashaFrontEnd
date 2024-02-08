var removed = []
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
}