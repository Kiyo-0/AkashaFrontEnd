var userName = "Aman8740"

var styles = {}
var userStyles = {}

async function loadJSON () {
    let data = await fetch("/Refrences/builtInStyles.json")
    styles = await data.json()
    for (let i in styles) {
        let div = document.createElement("div")
        div.classList.add("dropend")
        div.innerHTML = `<img src="/Refrences/Stylesicon.svg" class = "fileicon me-2" alt=""> <button class=" btn btn-dark dropdown-toggle" data-bs-toggle="dropdown">${i}</button><ul id = "${i}" class="dropdown-menu dropdown-menu bg-dark-subtle"></ul>`;
        document.getElementById("styles").appendChild(div)
        let html = "";
        for (let j = 0; j < styles[i].length; j++) {
            html += `<li class = "dropdown-item"><button class="${styles[i][j]}" onclick="changeClass(this)">${styles[i][j].split("-")[styles[i][j].split("-").length - 1]}</button></li>`
        }
        document.getElementById(`${i}`).innerHTML = html
    }

    data = await fetch("/Refrences/userStyles.json")
    userStyles = await data.json()
    userStyles = userStyles[userName]["Styles"]
    let userStylesList = document.getElementById("userStyles")
    let html = "";
    for (let i in userStyles) {
        html += `<li class = "dropdown-item"><button class="${userStyles[i]}" onclick="changeClass(this)">${i}</button></li>`
    }
    userStylesList.innerHTML = html
}

async function loadResources(htmlPath,cssPath,jsPath,divId) {
    try {
        const [htmlResponse, cssResponse, jsResponse, jsonResponse] = await Promise.all([
            fetch(htmlPath),
            fetch(cssPath),
            fetch(jsPath)
        ]);

        const html = await htmlResponse.text();
        const css = await cssResponse.text();
        const js = await jsResponse.text();

        document.getElementById(divId).innerHTML = html;

        const styleElement = document.createElement('style');
        styleElement.textContent = css;
        document.head.appendChild(styleElement);

        const scriptElemet = document.createElement('script');
        scriptElemet.textContent = js;
        scriptElemet.setAttribute("id",jsPath.split("/")[jsPath.split("/").length - 1])
        document.getElementById("scripts").appendChild(scriptElemet);
    } catch (error) {
        console.error('Error loading resources:', error);
    }
}

window.onload = () => {
    loadResources("sidebar/sidebar.html","sidebar/sidebar.css","sidebar/sidebar.js","sidebar")
    loadResources("file/file.html","file/file.css","file/file.js","file")
    loadResources("attributes/attributes.html","attributes/attributes.css","attributes/attributes.js","attr")
    loadJSON()
}