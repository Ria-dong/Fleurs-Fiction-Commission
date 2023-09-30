 // Check if a style preference is stored in localStorage
 const storedStyle = localStorage.getItem("preferredStyle");
 if (storedStyle === "desktop") {
     document.getElementById("desktop-style").disabled = false;
     document.getElementById("mobile-style").disabled = true;
 } else if (storedStyle === "mobile") {
     document.getElementById("desktop-style").disabled = true;
     document.getElementById("mobile-style").disabled = false;
 }
 
 function changeStyles_mobile() {
     document.getElementById("desktop-style").disabled = true;
     document.getElementById("mobile-style").disabled = false;
     localStorage.setItem("preferredStyle", "mobile"); // Store the preference in localStorage
 }
 
 function changeStyles_computer() {
     document.getElementById("desktop-style").disabled = false;
     document.getElementById("mobile-style").disabled = true;
     localStorage.setItem("preferredStyle", "desktop"); // Store the preference in localStorage
 }