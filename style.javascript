// Get the form elements
var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var phoneInput = document.getElementById("phone");
var programSelect = document.getElementById("program");

// Add event listener to the submit button
document.getElementById("submit").addEventListener("click", function() {
    // Validate the form
    if (validateForm()) {
        // Send the form data to the server
        var formData = new FormData();
        formData.append("name", nameInput.value);
        formData.append("email", emailInput.value);
        formData.append("phone", phoneInput.value);
        formData.append("program", programSelect.value);
        fetch("/register", {
            method: "POST",
            body: formData
        })
        .then(function(response) {
            return response.text();
        })
        .then(function(data) {
            alert(data);
        })
        .catch(function(error) {
            alert("Error: " + error);
        });
    }
});

// Function to validate the form
function validateForm() {
    // Check if all fields are filled
    if (nameInput.value === "" || emailInput.value === "" || phoneInput.value === "" || programSelect.value === "") {
        alert("Please fill out all fields.");
        return false;
    }
    // Check if the email is valid
    if (!validateEmail(emailInput.value)) {
        alert("Invalid email address.");
        return false;
    }
    // Check if the phone number is valid
    if (!validatePhone(phoneInput.value)) {
        alert("Invalid phone number.");
        return false;
    }
    return true;
}

// Function to validate the email
function validateEmail(email) {
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

// Function to validate the phone number
function validatePhone(phone) {
    var phoneRegex = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
    return phoneRegex.test(phone);
}
