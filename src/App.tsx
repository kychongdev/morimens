import "./App.css";
import { useTheme } from "./components/theme-provider";
import { Switch } from "@/components/ui/switch";
import { CharacterPage } from "./pages/Character";
import { useEffect } from "react";

function App() {
  const { setTheme, theme } = useTheme();
  useEffect(() => {
    const root = document.querySelector(":root");
    if (theme == "light") {
      // @ts-ignore
      root.style.setProperty("color-scheme", "light");
    } else if (theme == "dark") {
      // @ts-ignore
      root.style.setProperty("color-scheme", "dark");
    }
  }, [theme]);

  return (
    <>
      <div className="flex justify-end mb-6">
        <Switch
          id="theme"
          onCheckedChange={() => {
            if (theme === "light") {
              setTheme("dark");
            } else if (theme === "dark") {
              setTheme("light");
            }
          }}
        />
      </div>
      <CharacterPage />
    </>
  );
}

export default App;
