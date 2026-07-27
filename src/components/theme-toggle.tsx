"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/ui";
import { cn } from "@/lib/cn";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    setTheme(document.documentElement.classList.contains("dark") ? "dark" : "light");
  }, []);

  function choose(next: "light" | "dark") {
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
  }

  return (
    <div className="flex items-center gap-0.5 rounded-full border border-border bg-card p-1">
      <button
        type="button"
        title="Tema claro"
        onClick={() => choose("light")}
        className={cn(
          "flex items-center rounded-full p-1.5",
          theme === "light" ? "bg-foreground text-background" : "text-muted-foreground",
        )}
      >
        <Icon name="sun" size={14} />
      </button>
      <button
        type="button"
        title="Tema escuro"
        onClick={() => choose("dark")}
        className={cn(
          "flex items-center rounded-full p-1.5",
          theme === "dark" ? "bg-foreground text-background" : "text-muted-foreground",
        )}
      >
        <Icon name="moon" size={14} />
      </button>
    </div>
  );
}
