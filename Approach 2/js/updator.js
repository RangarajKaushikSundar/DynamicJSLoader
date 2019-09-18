function updator(){
  const version = getLatest();
  replacer(version)
}

function getLatest() {
  return "v1.0"
}

function replacer(version) {
  let elem = document.createElement("script");
  elem.src = `js/${version}.js`;
  elem.id = "widget";
  elem.innerHTML = null;
  document.getElementById("scriptContainer").innerHTML = "";
  document.getElementById("scriptContainer").appendChild(elem);
}

updator();