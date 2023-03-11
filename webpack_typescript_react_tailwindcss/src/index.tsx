import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// css
import "@src/style/tailwind.css";

// page component
import App from "@src/components/App";

const container = document.getElementById("root");

if (container instanceof HTMLElement) {
  const root = createRoot(container);

  root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>,
  );
}
