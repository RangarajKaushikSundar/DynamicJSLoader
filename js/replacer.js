function replacer(version) {
  let elem = document.createElement("script");
  elem.src = `js/v${version}.0.js`;
  elem.id = "widget";
  elem.innerHTML = null;
  document.getElementById("output").innerHTML = "";
  document.getElementById("output").appendChild(elem);
}
let someValue;