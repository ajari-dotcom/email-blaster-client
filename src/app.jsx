import React from "react";
import { createRoot } from "react-dom/client";
import ContactList from "./components/Contacts/ContactList";

const App = () => {
  return <ContactList />;
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
