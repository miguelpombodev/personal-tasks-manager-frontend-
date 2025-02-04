export const theme = {
  colors: {
    primary: "#3498db",
    secondary: "#2ecc71",
    background: "#f4f4f4",
    cancel: "#ce4638",
    text: "#333",
    white: "#ffffff",
    black: "#0000",
    gray: "#7f8c8d",
    lightPrimary: "#77c2f5",
    priorityLow: "#27ae60",
    priorityMedium: "#f39c12",
    priorityHigh: "#e74c3c",
    priorityCritical: "#8e44ad",
    priorityNone: "#34495e",
  },
  fonts: {
    primary: "Roboto, sans-serif",
  },
  spacing: {
    small: "8px",
    medium: "16px",
    large: "24px",
  },
  borderRadius: {
    small: "4px",
    medium: "8px",
    large: "12px",
  },
};

export type Theme = typeof theme;
