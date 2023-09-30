// Check if a style preference is stored in localStorage
const storedStyle = localStorage.getItem("preferredStyle");
const dynamicStyleLink = document.getElementById("dynamic-style");

if (storedStyle === "desktop") {
    dynamicStyleLink.href = "style-desktop.css";
} else if (storedStyle === "mobile") {
    dynamicStyleLink.href = "style-mobile.css";
}else {
    dynamicStyleLink.href = "style-desktop.css";
}