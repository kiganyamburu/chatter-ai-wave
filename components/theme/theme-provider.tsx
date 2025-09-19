"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = React.useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render a placeholder or a simplified version when not mounted
    return (
      <NextThemesProvider {...props}>
        <div style={{ visibility: "hidden" }}>{children}</div>
      </NextThemesProvider>
    );
  }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
