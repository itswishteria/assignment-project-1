import { createApp } from "https://unpkg.com/petite-vue?module";
import k from "./src/modules/state.js";
import "./style.css";

const components = "./src/components/";
const views = "./src/views/";

const header = components + "MainHeader.html";
const landing = views + "MainLanding.html";

const headerData = () => {
  fetch(header)
    .then((response) => response.text())
    .then((text) => (document.getElementById("navbar").innerHTML = text));
};

const routing = () => {
  fetch(landing)
    .then((response) => response.text())
    .then((text) => (document.getElementById("app").innerHTML = text));
};

headerData();
routing();

createApp().mount();

/* source 

https://github.com/vuejs/petite-vue

https://stackoverflow.com/questions/17636528/how-do-i-load-an-html-page-in-a-div-using-javascript
*/
