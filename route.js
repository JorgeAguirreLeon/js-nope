document.getElementById('top-caption').addEventListener("keypress", update_url);
document.getElementById('top-caption').addEventListener("keydown", update_url);
document.getElementById('top-caption').addEventListener("keyup", update_url);

document.getElementById('bottom-caption').addEventListener("keypress", update_url);
document.getElementById('bottom-caption').addEventListener("keydown", update_url);
document.getElementById('bottom-caption').addEventListener("keyup", update_url);

function update_url() {
  var top = document.getElementById('top-caption');
  var bottom = document.getElementById('bottom-caption');
  var top_value = top.value;
  var bottom_value = bottom.value;
  if (top_value == "") top_value = "HOLA BEBÉ";
  if (bottom_value == "") bottom_value = "QUE TE JODAN";
  var top_value = encode(top_value);
  var bottom_value = encode(bottom_value);

  var base_url = "http://jorgeaguirreleon.github.io/js-nope/";
  base_url += "?top=" + top_value + "&bottom=" + bottom_value;
  document.getElementById('result-caption').value = base_url;
  document.getElementById('result-caption-link').href = base_url;
}

function encode(text) {
  return encodeURIComponent(text).replace(/'/g,"%27").replace(/"/g,"%22");
}
