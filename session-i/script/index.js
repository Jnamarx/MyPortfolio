// var header = require("../header.html");
var header = "../header.html";
var jochebed = "Is a student";
var mainElement = document.getElementById("main-content");
// console.log(header);

console.log("jochebed===>", jochebed);
console.log("header===>", header);
console.log("main element", mainElement);

var age = "20";
var age = 20;

function fetchHeader() {
  fetch("../head.html")
    .then(function (response) {
      if (response.ok) {
        console.log("response");
        return response.text();
      }
      if (!response.ok) {
        console.log("hmmm, nothing happend");
      }
    })
    .then(function (text) {
      console.log(text);
    });
}

async function getPageData(pagePath) {
  try {
    const pageRes = await fetch(pagePath);
    return pageRes;
  } catch (error) {
    console.log({ error });
  }
}

async function appendDataUntoPage(path) {
  try {
    // function that fetches the page
    const sourcePage = await getPageData(path);
    //converts Response type to plain text
    const pageText = await sourcePage.text();

    //use query selectot to get Element from DOM
    const indexPage = document.querySelector("#main-content");
    //append data unto DOM
    indexPage.innerHTML = pageText + indexPage.innerHTML;
    //indexPage.innerText = pageText + indexPage.innerHTML;
  } catch (error) {
    console.log({ error });
  }
}

appendDataUntoPage("../head.html");

//innerhtml ===> is used when you want to append to an element, by setting its content to some html value
//innertext ===> is used when you want to append to an element, by setting its content to some text value
