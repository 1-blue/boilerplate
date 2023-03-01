import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// page component
import App from "@src/components/App";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </>
);
