import "./style.css";
import * as Header from "./modules/header";
import * as Contact from "./modules/contact";

const content = document.getElementById("content");

const cleanContent = () => {
  content.textContent = "";
};

Header.loadHeader();

Header.contactLi.addEventListener("click", () => {
  cleanContent();
  Contact.loadContact();
});
