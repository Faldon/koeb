var content = document.querySelector('link[rel="import"]').import;
var navigation = content.querySelector('#menubar');
document.querySelector('#site-header').appendChild(navigation.cloneNode(true));

Array.from(document.getElementsByTagName("li")).forEach(function(item) {
    if(document.location.href.match(new RegExp(item.id,'i'))) {
        item.className += " active";
    }
});