import { randomHexColor } from "random-hex-color-generator";
import "./style.css";

let component = document.createElement("div");

let animContainer = document.createElement("div");
let animationBall = document.createElement("div");
let button = document.createElement("button");

button.addEventListener("click", () => {
  animationBall.style.backgroundColor = randomHexColor();
});
button.innerText = "change ball color";

button.classList.add("color-button");
animationBall.classList.add("anim-ball");
animContainer.classList.add("anim-container");

animContainer.appendChild(animationBall);
component.appendChild(animContainer);
component.appendChild(button);

export default component;
