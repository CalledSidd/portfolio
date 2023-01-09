var nameError = document.getElementById("name-error");
var emailError = document.getElementById("email-error");
var subjectError = document.getElementById("subject-error");
var msgError = document.getElementById("message-error");
var formError = document.getElementById("form-error");

function validateName() {
  var name = document.getElementById("name").value;

  if (name.length == 0) {
    document.getElementById("name-error").style.color = "red";
    nameError.innerHTML = "Name is Required";
    return false;
  }
  if (name.length < 3) {
    document.getElementById("name-error").style.color = "red";
    nameError.innerHTML = "Name contain atleast 3 character";
    return false;
  }
  if (name.length > 20) {
    document.getElementById("name-error").style.color = "red";
    nameError.innerHTML = "Exceeded maximum limit";
    return false;
  }
  if (!name.match(/^[A-Za-z\s]{3,}$/)) {
    document.getElementById("name-error").style.color = "red";
    nameError.innerHTML = "Can only contain letters";
    return false;
  }
  document.getElementById("name-error").style.color = "green";
  nameError.innerHTML = "✅";
  return true;
}

function validateEmail() {
  var email = document.getElementById("email").value;
  if (email.length == 0) {
    document.getElementById("email-error").style.color = "red";
    emailError.innerHTML = "Email is Required";
    return false;
  }
  if (!email.match(/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/)) {
    document.getElementById("email-error").style.color = "red";
    emailError.innerHTML = "Email Invalid";
    return false;
  }
  document.getElementById("email-error").style.color = "green";
  emailError.innerHTML = "✅";
  return true;
}

function validateMessage() {
  var msg = document.getElementById("message").value;
  if (msg.length == 0) {
    document.getElementById("message-error").style.color = "red";
    msgError.innerHTML = "Message is Required";
    return false;
  }
  if (msg.length < 20) {
    document.getElementById("message-error").style.color = "red";
    msgError.innerHTML = "Should contain atleast 20 characters";
    return false;
  }
  if (msg.length > 100) {
    document.getElementById("message-error").style.color = "red";
    msgError.innerHTML = "Give proper message";
    return false;
  }
  document.getElementById("message-error").style.color = "green";
  msgError.innerHTML = "✅";
  return true;
}

function validateSubject() {
  var sub = document.getElementById("subject").value;
  if (sub.length <= 3) {
    document.getElementById("subject-error").style.color = "red";
    subjectError.innerHTML = "Subject must atleast contain 4 words ";
    return false;
  }

  document.getElementById("subject-error").style.color = "green";
  subjectError.innerHTML = "✅";
  return true;
}

function validateForm() {
  if (
    !validateName() ||
    !validateEmail() ||
    !validateSubject() ||
    !validateMessage()
  ) {
    document.getElementById("form-error").style.color = "red";
    formError.innerHTML = "Please fill all the fields to submit";
    return false;
  } else {
    return true;
  }
}

$("submit-form").submit((e) => {
  if (validateForm(e)) {
    e.preventDefault();
    $.ajax({
      url: "https://script.google.com/macros/s/AKfycbx3_DQ5QMagNbKInAnyg5ZngsUKbzWdJsEXRJQGIg/exec",
      data: $("#submit-form").serialize(),
      method: "post",
      success: function (response) {
        document.getElementById("form-error").style.color = "green";
        formError.innerHTML = "Form Submitted Succesfully";
        setTimeout(() => {
          document.getElementById("name").value = "";
          document.getElementById("message").value = "";
          document.getElementById("email").value = "";
          document.getElementById("subject").value = "";
          formError.innerHTML = "";
          subjectError.innerHTML = "";
          phoneError.innerHTML = "";
          msgError.innerHTML = "";
          nameError.innerHTML = "";
          emailError.innerHTML = "";
        }, 500);
      },
      error: function (err) {
        e.preventDefault();
        document.getElementById("form-error").style.color = "red";
        formError.innerHTML = "Something Error---111111";
      },
    });
  }
});