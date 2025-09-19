"use client";

import React from "react";
// ThemeDebug removed

export function DevTools() {
  // Only show in development mode
  if (process.env.NODE_ENV !== "development") {
    return null;
  }

  // Theme Debug removed
  return null; // No dev tools are currently active
}
