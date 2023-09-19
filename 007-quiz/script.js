const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const errors = [];
  const formData = new FormData(form);

  const answer1 = formData.get("answer1");
  if (answer1 !== "JS") {
    errors.push("pytanie1: JavaScript jest technologią programowania!");
  }

  const answer2 = formData.get("answer2");
  if (answer2 !== "tak") {
    errors.push("pytanie2: W CSS jest mozliwość utworzenia zmiennych!");
  }

  const answer3a = formData.get("answer3a");
  if (answer3a === null) {
    errors.push("pytanie3: Framework posiada gotowe kawałki kodu do użycia");
  }

  const answer3b = formData.get("answer3b");
  if (answer3b !== null) {
    errors.push("pytanie3: Framework nie zawsze jest open sourcowy");
  }

  const answer3c = formData.get("answer3c");
  if (answer3c === null) {
    errors.push("pytanie3: Framework wyznacza sposób na pisanie kodu");
  }

  const answer3d = formData.get("answer3d");
  if (answer3d !== null) {
    errors.push(
      "pytanie3: Framework nie jest zarezerwowanym słowem tylko dla technologi CSSowych"
    );
  }
  const answer3e = formData.get("answer3e");
  if (answer3e === null) {
    errors.push(
      "pytanie3: Ideą frameworków jest między innymi przypieszenie pracy developerskiej"
    );
  }
  const answer3f = formData.get("answer3f");
  if (answer3f !== null) {
    errors.push(
      "pytanie3: O ile zawsze można nadpisać kod dostarczony przez framework to z customizacją bywa różnie"
    );
  }
  const answer3g = formData.get("answer3g");
  if (answer3g !== null) {
    errors.push(
      "pytanie3: Grafiki dostarczone jako szablon są designami a nie frameworkami"
    );
  }

  const answer4 = formData.get("answer4");
  if (answer4 !== "nie") {
    errors.push(
      "pytanie4: JS nie jest potrzebny do podstawowego działania Bootstrapa"
    );
  }
  const answer5 = formData.get("answer5");
  if (answer5 !== "tak") {
    errors.push("pytanie4: JS jest potrzebny do pełnego działania Bootstrapa");
  }

  if (errors.length > 0) {
    alert(
      `Prawie :) spróbuj jeszcze raz! zobacz co poszło nie tak: ${errors.join(
        ", "
      )}`
    );
  } else {
    alert("Świetnie odpowiedziałeś/aś poprawnie na wszystkie pytania!");
  }

  form.reset();
});
