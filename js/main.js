$(window).load(function() {
    $(".loading").fadeOut();
});

function setValue(txt1, txt2) {
    window.location.href = "search.html?" + txt1 + "&" + txt2;
}

(function() {
    var parameters = (location.href.slice(location.href.indexOf('?') + 1)).split('&');

    for(var i=0; i<2; i++) {
        if (parameters[i]) {
            document.getElementById('txt').value = parameters[i];
        }
    }
})()