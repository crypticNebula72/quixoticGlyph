import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";

import { Files, Home } from "./pages";
import { File } from "./pages/files";
import { SidebarProvider } from "./contexts/SidebarContext";
import { HashRouter } from "react-router-dom"; // Import HashRouter

const App = () => {
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.add("light");
    }
  }, []);

  return (
    <SidebarProvider>
      <HashRouter basename="/"> {/* Use HashRouter */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/main" element={<Files />}>
            <Route index element={<File />} />
            <Route path="*" element={<File />} />
          </Route>
        </Routes>
      </HashRouter>
    </SidebarProvider>
  );
};

export default App;
