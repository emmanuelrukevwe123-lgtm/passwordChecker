const input = document.querySelector("input");
const button = document.querySelector("button");
const message = document.querySelector("#message");

function checkLength(password) {
  return password.length >= 8;
}
function hasUppercase(password) {
  return /[A-Z]/.test(password);
}
function hasLowercase(password) {
  return /[a-z]/.test(password);
}
function hasNumber(password) {
  return /[0-9]/.test(password);
}
function hasSymbol(password) {
  return /[^A-Za-z0-9]/.test(password);
}
function getscore(password) {
  let score = 0;
  if (hasUppercase(password)) score++;
  if (hasLowercase(password)) score++;
  if (hasNumber(password)) score++;
  if (hasSymbol(password)) score++;

  return score;
}
function getStrengthLabel(score) {
  if (score === 4) return "Strong";
  if (score === 3) return "Good";
  if (score === 2) return "Fair";
  return "Weak";
}

button.addEventListener("click", function () {
  const password = input.value;
  console.log(password);

  const isLongEnough = checkLength(password);
  const score = getscore(password);
  const label = getStrengthLabel(score);
  console.log(score, label);

  if (isLongEnough) {
    message.textContent = "Pass: password is long enough";
  } else {
    message.textContent = "Fail: password must be at least 8 characters";
  }
});
