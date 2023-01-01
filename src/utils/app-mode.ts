export function setMode(mode: "dark" | "light") {
  localStorage.setItem("mode", mode);
}

export function isDark(): boolean {
  return localStorage.getItem("mode") === "dark";
}
