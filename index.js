const texts = document.querySelector(".texts");

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();
console.log(recognition);
recognition.interimResults = true;

let p = document.createElement("p");

recognition.addEventListener("result", (e) => {
  const text = Array.from(e.results)
    .map((result) => {
      result[0];
    })
    .map((result) => {
      result[0].transcript;
    })
    .join("");
  //   const text = e.results[0][0].transcript;
  p.innerText = text;
  texts.appendChild(p);
  if (e.results[0].isFinal) {
    if (text.includes("hello")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "Hi";
      texts.appendChild(p);
    }
    if (
      text.includes("what is your name") ||
      text.includes("what's your name")
    ) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText =
        "My name is Sam 2.0 and I know your name cos you created me!";
      texts.appendChild(p);
    }
    if (text.includes("open my Instagram account")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "Opening your Instagram account";
      texts.appendChild(p);
      window.open("https://www.instagram.com/mr_alakowe/");
    }
    p = document.createElement("p");
  }
  console.log(e.results[0][0].transcript);
});

recognition.addEventListener("end", () => {
  recognition.start();
});

recognition.start();
