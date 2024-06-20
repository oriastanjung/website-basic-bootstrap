function validateFullname() {
  let fullnameValue = $("#fullname").val();
  if (fullnameValue === "") {
    $("#fullnameCheck").show();
    $("#fullnameCheck").html("Fullname must not be empty!");
    return true;
  } else if (
    (fullnameValue.length < 8 || fullnameValue.length > 16) &&
    fullnameValue !== ""
  ) {
    $("#fullnameCheck").show();
    $("#fullnameCheck").html("Fullname must in betweeen 8 and 16 chars");
    return true;
  } else {
    $("#fullnameCheck").hide();
    return false;
  }
}

function validateEmail() {
  // syarat nya ****@****.***
  let email = $("#email").val();
  const patternEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (patternEmail.test(email)) {
    return true;
  } else {
    return false;
  }
}

function validatePassword() {
  // syarat nya 1 huruf kapital 1 huruf normal 1 symbol 1 angka minimal 8 char
  let passwordValue = $("#password").val();
  let pattern =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*_?&])[A-Za-z\d@$!%*_?&]{8,}$/;

  if (pattern.test(passwordValue)) {
    $("#passwordCheck").hide();
    return true;
  } else {
    $("#passwordCheck").show();
    return false;
  }
}

function validatePhoneNumber() {
  let phoneValue = $("#phone").val();
  const pattern = /^\+?[1-9]\d{1,14}$/;
  if (pattern.test(phoneValue)) {
    $("#phoneCheck").hide();
    return true;
  } else {
    $("#phoneCheck").show();

    return false;
  }
}

$(document).ready(function () {
  console.log("document is ready");
  // sembunyikan error dlu
  $("#fullnameCheck").hide();
  //   $("#emailCheck").hide();
  $("#passwordCheck").hide();
  $("#phoneCheck").hide();

  // muncul setelah di ketik
  $("#fullname").keyup(function () {
    validateFullname();
  });

  let email = document.getElementById("email");
  let emailError = true;
  email.addEventListener("blur", () => {
    console.log("first");
    const patternEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let emailValue = email.value;
    if (patternEmail.test(emailValue)) {
      email.classList.remove("is-invalid");
      emailError = false;
    } else {
      email.classList.add("is-invalid");
      emailError = true;
    }
  });

  $("#password").keyup(() => {
    validatePassword();
  });

  $("#phone").keyup(() => {
    validatePhoneNumber();
  });

  $("#form-contactUs").submit(function (e) {
    e.preventDefault();
    fullnameError = validateFullname();
    passwordError = validatePassword();
    phoneError = validatePhoneNumber();
    if (fullnameError && emailError && passwordError && phoneError) {
      alert("Fill All The Form Required!")
    } else {
      window.location.href ="/form-success";
    }
  });
});
