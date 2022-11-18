(function () {
    const onInit = function() {
        readTextFile('./web-list.json', onReadList);
    };

    const onReadList = function(webListRaw){
        const webListObj = JSON.parse(webListRaw);

        const webList = shuffleArray(webListObj.weblist);

        buildList(webList);
    }

    const shuffleArray = function(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }

        return array;
    }

    const buildList = function(webList){
        webList.forEach(buildWeb);
    }

    const buildWeb = function(web){
        const url = web.url.replace(/\s/g, '').toLowerCase();

        const article = buildWebElement(url, web.author);

        const webListElement = document.getElementById('web-list');

        webListElement.appendChild(article);
    }

    const buildWebElement = function(url, author){
        let article = document.createElement('article');
        article.className = 'web';
        
        article.innerHTML = 
        `<a href='${url}'>
            <img src='${url + '/screenshot.png'}' alt='Captura de pantalla de la web de ${author}'/>
        </a>
        <h3>${author}</h3>
        <a href='${url}' class='button'>Visítala</a>`
        ;

        return article;
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