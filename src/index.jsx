import React from "react";
import { createRoot } from "react-dom/client";
import NotesApp from "./component/NotesApp";

const root = createRoot(document.getElementById("root"));
root.render(<NotesApp />);