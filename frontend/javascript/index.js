
import fitty from "fitty"
import "index.scss"
// Import all javascript files from src/_components
const componentsContext = require.context("bridgetownComponents", true, /.js$/)
componentsContext.keys().forEach(componentsContext)


fitty('.subtitle', {
    minSize: 30,
    maxSize: 300,
});