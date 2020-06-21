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

function time(id) {
    document.getElementById(id).className = "is-active";
    for(var i=5; i>id; i--)
      document.getElementById(i).className = "";
    for(var i=1; i<id; i++)
      document.getElementById(i).className = "is-complete";
  }
  
  function star(id) {
    document.getElementById(id).className = "is-active";
    for(var i=10; i>id; i--)
      document.getElementById(i).className = "";
    for(var i=6; i<id; i++)
      document.getElementById(i).className = "is-complete-star";
  }
  