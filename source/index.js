import randomComponent from "./randomButton.js";
import coolAnim from "./coolAnim";

let main = document.createElement("div");

main.appendChild(randomComponent);
main.appendChild(coolAnim);

document.body.appendChild(main);
