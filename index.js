(function () {
    const onInit = function() {
        readTextFile('./web-list.json', onReadList);
    };

    const onReadList = function(webListRaw){
        const webListObj = JSON.parse(webListRaw);

        const webList = webListObj.weblist;

        buildList(webList);
    }

    const buildList = function(webList){
        webList.forEach(buildWeb);
    }

    const buildWeb = function(web){
        const webElement = `
        <article class='web'>
            
        </article>`;

        let article = document.createElement('article');
        article.className = 'web';

        const url = web.url.replace(/\s/g, '').toLowerCase();

        article.innerHTML = 
        `<a href='${url}'>
            <img src='${url + '/screenshot.png'}' alt='Captura de pantalla de la web de ${web.author}'/>
        </a>
        <h3>${web.author}</h3>`;

        const webListElement = document.getElementById('web-list');

        webListElement.appendChild(article);
    }

    const readTextFile = function (file, callback) {
        var rawFile = new XMLHttpRequest();
        rawFile.open("GET", file, false);
        rawFile.onreadystatechange = function () {
            if (rawFile.readyState === 4) {
                if (rawFile.status === 200 || rawFile.status == 0) {
                    var allText = rawFile.responseText;
                    callback(allText);
                }
            }
        }
        rawFile.send(null);
    };

    document.addEventListener("DOMContentLoaded", function () {
        onInit();
    });
})();