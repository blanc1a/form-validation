const form = document.getElementById("form");
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");
const messageContainer = document.getElementById("message-container");
const message = document.getElementById("message");

let isValid = false; //bc by default we do not have a valid form
let passwordMatch = false;

function validateForm() {
  //using Constraint API
  isValid = form.checkValidity(); //this method on the form will return a boolean value
  //style main message for error
  if (!isValid) {
    message.textContent = "Please fill out all fields.";
    message.style.color = "darkred";
    messageContainer.style.borderColor = "darkred";
    return; //break out of the function and stop validating
  }
  //check to see if passwords match
  if (password1.value === password2.value) {
    passwordMatch = true;
    password1.style.borderColor = "darkgreen";
    password2.style.borderColor = "darkgreen";
  } else {
    passwordMatch = false;
    message.textContent = "Make sure passwords match";
    message.style.color = "darkred";
    messageContainer.style.borderColor = "darkred";
    password1.style.borderColor = "darkred";
    password2.style.borderColor = "darkred";
    return;
  }
  //if form is valid and passwords match
  if (isValid && passwordMatch) {
    message.textContent = "Successfully Registered!";
    message.style.color = "darkgreen";
    messageContainer.style.borderColor = "darkgreen";
  }
}

function storeFormData() {
  const user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    website: form.website.value,
    password: form.password.value,
  };

  console.log(user);
}

function processFormData(event) {
  event.preventDefault(); //prevents from refreshing instantly
  //validate form
  validateForm();
  //submit data if valid
  if (isValid && passwordMatch) {
    storeFormData();
  }
}

//eventListener on the form even though we press the button to submit the data => means that the event happens with the click of the button but it fires on the form
form.addEventListener("submit", processFormData);
