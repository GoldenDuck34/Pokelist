document.addEventListener("DOMContentLoaded", function () {
  // Search filter
  document.getElementById("searchBox").addEventListener("input", function () {
    const query = this.value.toLowerCase();
    document.querySelectorAll(".game-card").forEach((card) => {
      card.style.display = card.textContent.toLowerCase().includes(query)
        ? ""
        : "none";
    });
  });

  // Theme toggle logic
  const themeToggle = document.getElementById("themeToggle");
  const body = document.body;

  // Helper to set theme
  function setTheme(theme) {
    body.classList.remove("dark-mode", "light-mode");
    if (theme === "dark") {
      body.classList.add("dark-mode");
      themeToggle.textContent = "☀️";
      themeToggle.title = "Switch to light mode";
    } else if (theme === "light") {
      body.classList.add("light-mode");
      themeToggle.textContent = "🌙";
      themeToggle.title = "Switch to dark mode";
    } else {
      // Auto: follow system
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        body.classList.add("dark-mode");
      } else {
        body.classList.add("light-mode");
      }
      themeToggle.textContent = "🖥️";
      themeToggle.title = "Switch to system mode";
    }
  }

  // Load saved theme
  let theme = localStorage.getItem("theme") || "auto";
  setTheme(theme);

  themeToggle.addEventListener("click", () => {
    // Cycle: auto -> dark -> light -> auto ...
    let current = localStorage.getItem("theme") || "auto";
    let next;
    if (current === "auto") next = "dark";
    else if (current === "dark") next = "light";
    else next = "auto";
    localStorage.setItem("theme", next);
    setTheme(next);
  });
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js')
      .then(reg => console.log('Service Worker registered:', reg))
      .catch(err => console.log('Service Worker failed:', err));
  });
}
let deferredPrompt;
window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  deferredPrompt = e;
  document.getElementById('install-btn').style.display = 'block';
});

document.getElementById('install-btn').addEventListener('click', () => {
  deferredPrompt.prompt();
  deferredPrompt.userChoice.then(() => deferredPrompt = null);
});
