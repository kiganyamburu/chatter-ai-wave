"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

// This component is for development purposes only
export function ThemeDebug() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Only show the component after mounting to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Return nothing on server-side
  }

  // This component is hidden in production
  if (process.env.NODE_ENV === "production") {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-background text-foreground p-4 rounded-lg shadow-lg border border-border z-50">
      <h3 className="text-md font-bold mb-2">Theme Debug</h3>
      <div className="space-y-2 text-sm">
        <p>Current theme: {theme || "Not set"}</p>
        <p>Resolved theme: {resolvedTheme || "Not resolved"}</p>
        <div className="flex space-x-2 mt-2">
          <button
            onClick={() => setTheme("light")}
            className="px-2 py-1 bg-primary text-primary-foreground rounded-md text-xs"
          >
            Force Light
          </button>
          <button
            onClick={() => setTheme("dark")}
            className="px-2 py-1 bg-primary text-primary-foreground rounded-md text-xs"
          >
            Force Dark
          </button>
        </div>
      </div>
    </div>
  );
}
