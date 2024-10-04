import { setupCounter } from "./counter";
import "./assets/styles/style.css";

document.querySelector("#app").innerHTML = `
  <div></div>
`;

setupCounter(document.querySelector("#counter"));
