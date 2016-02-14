(function() {
  var query = location.search;
  query = query.substring(1); //Remove initial '?'
  var params = query.split("&"); //Split into different things
  var top = "Hola bebé";
  var bottom = "Que te jodan";
  for (i=0; i<params.length; i++) {
    var value = params[i].split("=");
    if (value[0] === "top") top = decodeURIComponent(value[1]);
    else if (value[0] === "bottom") bottom = decodeURIComponent(value[1]);
  }
  document.getElementById("top-caption").innerText = top;
  document.getElementById("bottom-caption").innerText = bottom;
  document.getElementById("video").play()
  video.addEventListener('click',function(){
    video.play();
  },false);;
})();
