var content = document.querySelector('link[rel="import"]').import;
if(content !== undefined) {
    var navigation = content.querySelector('#menubar');
    document.querySelector('#site-header').appendChild(navigation.cloneNode(true));
} else {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", "fragments/navbar.html", true);
    rawFile.onreadystatechange = function () {
        if(rawFile.readyState === 4) {
            var allText = rawFile.responseText;
            document.querySelector('#site-header').innerHTML = allText;
        }
    };
    rawFile.send();
}

Array.from(document.getElementsByTagName("li")).forEach(function(item) {
    if(document.location.href.match(new RegExp(item.id,'i'))) {
        item.className += " active";
    }
});