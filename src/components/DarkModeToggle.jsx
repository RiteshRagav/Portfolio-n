import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function DarkModeToggle() {
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
    return false;
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark((d) => !d)}
      className="ml-2 p-2 rounded-full bg-blue-900 dark:bg-blue-800 hover:bg-blue-700 dark:hover:bg-blue-700 transition-colors"
      aria-label="Toggle dark mode"
    >
      {dark ? <FaMoon className="w-5 h-5 text-blue-400" /> : <FaSun className="w-5 h-5 text-yellow-400" />}
    </button>
  );
}