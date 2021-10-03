
import fitty from "fitty"
import "index.scss"
// Import all javascript files from src/_components
const componentsContext = require.context("bridgetownComponents", true, /.js$/)
componentsContext.keys().forEach(componentsContext)


fitty('.subtitle', {
    minSize: 30,
    maxSize: 300,
});

window.onload = (event) => {
    window.scrollTo(0, 0);
    const img = document.querySelector(".img__mobile")
    const imgDisplay = window.getComputedStyle(img).display
    const main = document.querySelector("main")
    const mainHeight = parseInt(window.getComputedStyle(main).height)
    if (imgDisplay == "block" && mainHeight <= window.innerHeight) {
        console.log("higher");
        img.classList.add("mobile-fixed")
    }
  };