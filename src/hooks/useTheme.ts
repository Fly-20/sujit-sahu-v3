import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export function useTheme(): [Theme, (theme: Theme) => void] {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    // On mount, check localStorage or system preference
    const stored = typeof window !== "undefined" ? localStorage.getItem("theme-mode") : null;
    if (stored === "dark" || stored === "light") {
      setTheme(stored);
      document.documentElement.classList.toggle("dark", stored === "dark");
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  const changeTheme = (mode: Theme) => {
    setTheme(mode);
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    if (typeof window !== "undefined") {
      localStorage.setItem("theme-mode", mode);
    }
  };

  return [theme, changeTheme];
}
