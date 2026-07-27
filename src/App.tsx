import { ThemeProvider } from "@/components/theme-provider";
import { Home } from "@/pages/Home";
import { Contact } from "@/pages/Contact";
import { ChatButton } from "@/components/globals/ChatButton";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotFound } from "@/pages/NotFound";

export function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="mercapecas-theme">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ChatButton />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
