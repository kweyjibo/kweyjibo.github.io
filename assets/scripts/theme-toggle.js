const root = document.documentElement;
const button = document.querySelector("#theme-toggle");

button.addEventListener("click", () => {
  const isDark = getComputedStyle(root).colorScheme === "dark";
  const theme = isDark ? "light" : "dark";

  root.dataset.theme = theme;
  localStorage.setItem("theme", theme);
});
