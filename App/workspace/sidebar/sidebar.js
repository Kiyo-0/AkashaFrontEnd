var filesLink = document.getElementById("fileslink");
var stylesLink = document.getElementById("styleslink");
var componentsLink = document.getElementById("componentslink");
var utilityLink = document.getElementById("utilitylink");
var settingsLink = document.getElementById("settingslink");
var profileLink = document.getElementById("profilelink");
var arrow = document.getElementById("arrow");
var nav = document.getElementById("nav");
var fileTab = document.getElementById("FilesTab");
var styleTab = document.getElementById("Stylestab");
var componentsTab = document.getElementById("ComponentsTab");
var utilityTab = document.getElementById("UtilityTab");
var tree = document.getElementById("tree");

function changeClass(button,styles) {
    let find = (newStyle) => {
        for (let catagory in styles) {
            if(styles[catagory].indexOf(newStyle) != -1){
                return styles[catagory];
            }
        }
    }

    let styleList = find(button.classList[0]);

    for(let style of styleList){
        if(div.classList.contains(style)){
            div.classList.remove(style);
        }
    }

    div.classList.add(button.classList[0]);
    if(button.classList[0] == "btn"){
        div.classList.add(button.classList[1]);
    }
}


window.onresize = () => {
    if (window.outerWidth < 1400) {
        changetoSideBar();
    }

    if (window.outerWidth > 1400) {
        changeToPanel();
    }
}

function changetoSideBar() {
    nav.classList.remove("flex-lg-row");
    filesLink.innerHTML = "<img src='/Refrences/file.svg' class = 'fileicon me-2'>";
    stylesLink.innerHTML = "<img src='/Refrences/Stylesicon.svg' class = 'fileicon me-2'>";
    componentsLink.innerHTML = "<img src='/Refrences/componentsicon.svg' class = 'fileicon me-2'>";
    utilityLink.innerHTML = "<img src='/Refrences/utilityicon.svg' class = 'fileicon me-2'>";
    settingsLink.innerHTML = "<img src='/Refrences/settings.svg' class = 'fileicon me-2'>";
    profileLink.innerHTML = "<img src='/Refrences/profile.svg' class = 'fileicon me-2'>";

    fileTab.classList.remove("active");
    styleTab.classList.remove("active");
    componentsTab.classList.remove("active");
    utilityTab.classList.remove("active");
    document.getElementById("sidebar").style.width = "100px";
}

function changeToPanel() {
    filesLink.removeEventListener("click", changeToPanel);
    stylesLink.removeEventListener("click", changeToPanel);
    componentsLink.removeEventListener("click", changeToPanel);
    utilityLink.removeEventListener("click", changeToPanel);
    settingsLink.removeEventListener("click", changeToPanel);
    profileLink.removeEventListener("click", changeToPanel);

    nav.classList.add("flex-lg-row");
    filesLink.innerText = "Files";
    stylesLink.innerText = "Styles";
    componentsLink.innerText = "Components";
    utilityLink.innerHTML = "Utility";
    settingsLink.innerHTML = "<img src='/Refrences/settings.svg' class = 'fileicon me-2'>Settings";
    profileLink.innerHTML = "<img src='/Refrences/profile.svg' class = 'fileicon me-2'>Profile";

    if (filesLink.classList.contains("active")) {
        fileTab.classList.add("active");
    } else if (stylesLink.classList.contains("active")) {
        styleTab.classList.add("active");
    } else if (componentsLink.classList.contains("active")) {
        componentsTab.classList.add("active");
    } else if (utilityLink.classList.contains("active")) {
        utilityTab.classList.add("active");
    }
    document.getElementById("sidebar").style.width = "350px";
}

function square() {
    if(document.getElementById("move").classList.contains("active")){
        document.getElementById("move").classList.remove("active");
    }
    document.getElementById("square").classList.add("active");
}

function circle(){
    document.getElementById("circle").classList.add("active");
    if(document.getElementById("move").classList.contains("active")){
        document.getElementById("move").classList.remove("active");
    }
}

function textbox(){
    document.getElementById("textbox").classList.add("active");
    if(document.getElementById("move").classList.contains("active")){
        document.getElementById("move").classList.remove("active");
    }
}

function writeToBar(el) {
    let div = document.createElement("div");
    div.id = `${el.id}Tree`;
    div.textContent = el.id;
    div.style.margin = "2px";
    div.style.padding = "2px";
    div.style.fontSize = "1rem";
    div.style.fontWeight = "bold";
    div.style.transition = "all 500ms 100ms linear";

    let originalValue = div.textContent;
    let valueChanged = false;

    div.addEventListener("dblclick",() => {
        div.contentEditable = "true";
    });

    div.addEventListener("keydown",(event) => {
        if(event.key == "Enter"){
            event.preventDefault();
            valueChanged = true;
            div.contentEditable = "false";
            el.id = div.textContent;
            
            divs[div.textContent] = divs[originalValue];
            delete divs[originalValue];
            let originalStyles = document.getElementById(`${originalValue}Styles`);
            originalStyles.setAttribute("id",`${div.textContent}Styles`);
            originalStyles.innerHTML = `#${div.textContent}${createCss(document.getElementById(div.textContent))}`;
        }else if(event.key == "Escape"){
            div.contentEditable = "false";
            div.textContent = originalValue;
        }
    });

    div.addEventListener("focusout",() => {
        if(!valueChanged){
            div.textContent = originalValue;
        }
        div.contentEditable = "false";
    });

    tree.appendChild(div);
}

function createStyle() {
    let userStyles = document.getElementById("userStyles");
    let button = document.getElementById("createStyleButton");
    button.classList.add("d-none");
    let styleInput = document.getElementById("styleName");
    styleInput.classList.remove("d-none");

    styleInput.addEventListener("change",() => {
        let newItem  = document.createElement("li");
        let newButton = document.createElement("button");
        newItem.classList.add("dropdown-item");
        newButton.className = div.className;
        newButton.textContent = styleInput.value;

        newButton.addEventListener("click",() => {
            for(let cls of newButton.className.split(" ")){
                div.classList.add(cls);
            }
            console.log(div);
        });
        newItem.appendChild(newButton);
        userStyles.appendChild(newItem);

        styleInput.classList.add("d-none");
        button.classList.remove("d-none");

        userStyles = users[userName]["styles"];
        userStyles[styleInput.value] = div.className;
    });
}