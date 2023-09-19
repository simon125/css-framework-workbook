const $output = document.querySelector("#output");
const $increment = document.querySelector("#increment");
const $decrement = document.querySelector("#decrement");

$increment.addEventListener("click", () => {
  $output.value = Number($output.value) + 1;
});
$decrement.addEventListener("click", () => {
  $output.value = Number($output.value) - 1;
});
