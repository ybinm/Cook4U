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