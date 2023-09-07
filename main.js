const emailInput = document.getElementById("email");
const emailError = document.getElementById("emailError");
const emailForm = document.getElementById("emailForm");
const successMessage = document.getElementById("successMessage");

emailInput.addEventListener("input", function () {
    if (emailInput.validity.valid) {
        emailError.textContent = ""; // Clear the error message
    } else {
        showError();
    }
});

emailForm.addEventListener("submit", function (event) {
    if (!emailInput.validity.valid) {
        showError();
        event.preventDefault(); // Prevent form submission if there are errors
    } else {
        showSuccess();
        event.preventDefault(); // Prevent form submission for demonstration purposes
    }
});

function showError() {
    if (emailInput.validity.valueMissing) {
        emailError.textContent = "Email is required.";
    } else if (emailInput.validity.typeMismatch) {
        emailError.textContent = "Please enter a valid email address.";
    }
}

function showSuccess() {
    successMessage.textContent = "Form submitted successfully!";
}