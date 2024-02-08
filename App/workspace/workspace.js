function loadHTMLIntoDiv() {
    function loadSidebar(){
        fetch("sidebar/sidebar.html")
            .then(response => response.text())
            .then(data => {
                document.getElementById('sidebar').innerHTML = data;
            })
        .catch(error => console.error('Error loading HTML file:', error));

        fetch('sidebar/sidebar.css')
            .then(response => response.text())
            .then(data => {
                const myDiv = document.getElementById('sidebar');
                const scriptElement = document.createElement('style');
                scriptElement.innerHTML = data;
                myDiv.appendChild(scriptElement);
            })
        .catch(error => console.error('Error loading HTML file:', error));

        fetch('sidebar/sidebar.js')
            .then(response => response.text())
            .then(data => {
                const myDiv = document.getElementById('sidebar');
                const scriptElement = document.createElement('script');
                scriptElement.innerHTML = data;
                myDiv.appendChild(scriptElement);
            })
        .catch(error => console.error('Error loading HTML file:', error));
    }
    loadSidebar()

    function loadFile(){
        fetch("file/file.html")
            .then(response => response.text())
            .then(data => {
                document.getElementById('file').innerHTML = data;
            })
        .catch(error => console.error('Error loading HTML file:', error));

        fetch('file/file.css')
            .then(response => response.text())
            .then(data => {
                const myDiv = document.getElementById('file');
                const scriptElement = document.createElement('style');
                scriptElement.innerHTML = data;
                myDiv.appendChild(scriptElement);
            })
        .catch(error => console.error('Error loading HTML file:', error));

        fetch('file/file.js')
            .then(response => response.text())
            .then(data => {
                const myDiv = document.getElementById('file');
                const scriptElement = document.createElement('script');
                scriptElement.innerHTML = data;
                myDiv.appendChild(scriptElement);
            })
        .catch(error => console.error('Error loading HTML file:', error));
    }

    loadFile()
}

window.onload = loadHTMLIntoDiv