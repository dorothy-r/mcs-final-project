//Hamburger Menu

function expandMenu() {
    let x = document.getElementById("topnavMenu");
    if (x.className === "topnav") {
        x.className += "responsive";
    } else {
        x.className = "topnav";
    }
}

//Accordion
let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");   
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}


//Contact Form
let fields = {};

document.addEventListener("DOMContentLoaded", function() {
    fields.service = document.getElementById('service');
    fields.name = document.getElementById('name');
    fields.email = document.getElementById('email');
    fields.message = document.getElementById('message');
})

function isNotEmpty(value) {
    if (value == null || typeof value == 'undefined') return false;

    return (value.length > 0)
}

function isEmail(email) {
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(String(email).toLowerCase());
}

function fieldValidation(field, validationFunction) {
    if (field == null) return false;

    let isFieldValid = validationFunction(field.value)
    if (!isFieldValid) {
        field.className = 'placeholderRed';
    } else {
        field.className = '';
    }

    return isFieldValid;
}

function isValid() {
    let valid = true;

    valid &= fieldValidation(fields.service, isNotEmpty);
    valid &= fieldValidation(fields.name, isNotEmpty);
    valid &= fieldValidation(fields.email, isEmail);
    valid &= fieldValidation(fields.message, isNotEmpty);

    return valid;
}

class User {
    constructor(service, name, email, message) {
        this.service = service;
        this.name = name;
        this.email = email;
        this.message = message;
    }
}

function sendContact() {
    if (isValid()) {
        let usr = new User(service.value, name.value, email.value, message.value);

        alert('Thanks for getting in touch with me! I will reply within two business days. Have a great day!')
    } else {
        alert("There was an error in your form. Please try again.")
    }
}