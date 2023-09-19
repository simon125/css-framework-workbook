const $number1 = document.querySelector("#number1");
const $operation = document.querySelector("#operation");
const $number2 = document.querySelector("#number2");
const $output = document.querySelector("#output");
const $submit = document.querySelector("#submit");

const N = Number;

const calculator = {
  "+": (a, b) => N(a) + N(b),
  "-": (a, b) => N(a) - N(b),
  "*": (a, b) => N(a) * N(b),
  "/": (a, b) => N(a) / N(b),
};

$submit.addEventListener("click", () => {
  if (isNaN($number1.value)) {
    alert("Nie wpisano poprawnej liczby 1");
    return;
  }

  if (isNaN($number2.value)) {
    alert("Nie wpisano poprawnej liczby 2");
    return;
  }

  if (!calculator[$operation.value]) {
    alert("Nie wybrano operacji");
    return;
  }

  $output.value = calculator[$operation.value]($number1.value, $number2.value);
});
