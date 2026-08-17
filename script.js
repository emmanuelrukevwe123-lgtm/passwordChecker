const input = document.querySelector("input");
const button = document.querySelector("button");
const message = document.querySelector("#message");

function checkLength(password) {
  return password.length >= 8;
}

button.addEventListener("click", function () {
  const password = input.value;
  console.log(password);

  const isLongEnough = checkLength(password);

  if (isLongEnough) {
    message.textContent = "Pass: password is long enough";
  } else {
    message.textContent = "Fail: password must be at least 8 characters";
  }
});
