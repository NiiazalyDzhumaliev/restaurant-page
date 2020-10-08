import "./style.css";
import * as Header from "./modules/header";
import * as Contact from "./modules/contact";

const content = document.getElementById("content");

Header.loadHeader();

Contact.loadContact();

