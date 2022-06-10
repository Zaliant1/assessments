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
