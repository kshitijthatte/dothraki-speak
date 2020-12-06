var input = document.querySelector("#input");
var transalteBtn = document.querySelector("#transalte-btn");
var output = document.querySelector("#output");

var severURL = "https://api.funtranslations.com/translate/dothraki.json";
// var severURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

transalteBtn.addEventListener("click", translate);

function translate() {
  var translationURL = severURL + "?text=" + input.value;
  console.log(translationURL);
  fetch(translationURL)
    .then((res) => res.json())
    .then((json) => (output.innerText = json.contents.translated))
    .catch((err) => alert("An Error Occured !!"));
}
