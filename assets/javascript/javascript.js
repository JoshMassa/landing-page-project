// Script for button functionality 
document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("button");
    var modalWrapper = document.getElementByIId("modal");

    button.addEventListener("click", function() {
        modalWrapper.style.display = "block";
    });
});

function closeModal() {
    var modalWrapper = document.getElementById("modal");
    modalWrapper.style.display = "none";
    }
// Script End

// Script for removing/replacing placeholder text on focus/blur
function clearPlaceholder(input) {
    input.placeholder = "";
}

function restorePlaceholder(input) {
    if (input.value === "") {
        if (input.id === "name") {
            input.placeholder = "Enter Your Name";
        } else if (input.id === "email") {
            input.placeholder = "Enter Your Email";
        } else if (input.id === "phone") {
            input.placeholder = "Enter Your Phone #";
        }
    }
}
// Script End

// Script to log Contact Me form information to the console
var form = document.getElementById("form");
var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var phoneInput = document.getElementById("phone");
// Add the above var elements under your "document.addEventListener("DOMContentLoaded", function() {" in your HTML
console.log("Submitted Information:");
console.log("Name:", nameInput.value);
console.log("Email:", emailInput.value);
console.log("Phone:", phoneInput.value);
// Add the above console.log's under your "button.addEventListener("click", function() {" but before "modalWrapper.style.display = "block";" in your HTML to ensure the code executes in proper order