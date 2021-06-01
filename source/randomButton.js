import { v4 } from "uuid";

let button = document.createElement("button");
let text = document.createElement("p");
text.innerText = "Will Generate something random";
button.innerText = "random";
button.addEventListener("click", () => {
  text.innerText = v4();
});

let randomComponent = document.createElement("div");
randomComponent.appendChild(text);
randomComponent.appendChild(button);

export default randomComponent;
