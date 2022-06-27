const formSubmit = document.getElementById("interest-form-submit");
const formSubmitClass = document.querySelector("#interest-form-submit");

const buttonGetter = (str) => {
  if (str === "color") {
    return document.getElementById("color");
  } else if (str === "place") {
    return document.getElementById("place");
  } else if (str === "ritual") {
    return document.getElementById("ritual");
  }
};

const buttonAlert = (buttonParam, str) =>
  buttonGetter(buttonParam).addEventListener("click", () => alert(str));

buttonAlert("color", "my favorite color is blue");
buttonAlert("place", "my favorite place is home");
buttonAlert("ritual", "my favorite ritual is drinking water");

const changeButtonBackground = () =>
  formSubmitClass.addEventListener(
    "mouseover",
    (e) => (
      (e.target.style.backgroundColor = "black"),
      (e.target.style.color = "white")
    )
  );

changeButtonBackground();

const interestAppend = (e) => {
  e.preventDefault();
  let li = document.createElement("li");
  li.textContent = document.getElementById("interest-form-input").value;

  document.getElementById("interests-list").appendChild(li);
};

formSubmit.addEventListener("click", interestAppend);
