console.log("hello world");

document
  .getElementById("img")
  .addEventListener("mouseover", () => alert("good job"));

function handleSubmit(evt) {
  evt.preventDefault();

  console.log("form submit");
  alert("form submitted");
}

let form = document.querySelector("#contact");

form.addEventListener("submit", handleSubmit);
