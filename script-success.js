$(document).ready(() => {
  let counter = $("#counter").html();
  setInterval(() => {
    counter -= 1;
    $("#counter").html(`${counter}`);
    if (counter === 0) {
      window.location.href = "/";
    }
  }, 1000);
});
