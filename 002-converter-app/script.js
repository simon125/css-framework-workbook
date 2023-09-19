const $input = document.querySelector("#input");
const $units = document.querySelector("#units");
const $output = document.querySelector("#output");

const formula = {
  dm: (cm) => cm / 10,
  mm: (cm) => cm * 10,
  m: (cm) => cm / 100,
};

$input.addEventListener("input", ({ target }) => {
  if (!isNaN(target.value)) {
    if (formula[$units.value]) {
      $output.value = formula[$units.value](Number(target.value));
    }
  } else {
    alert("Nie wolno hakować systemu! Podaj liczbę a nie litere");
    target.value = "";
  }
});

$units.addEventListener("change", () => {
  if (!isNaN($input.value)) {
    if (formula[$units.value]) {
      $output.value = formula[$units.value](Number($input.value));
    }
  }
});
