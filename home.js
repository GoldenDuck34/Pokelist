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
      themeToggle.textContent = "🖥️";
      themeToggle.title = "Switch to light mode";
    } else if (theme === "light") {
      body.classList.add("light-mode");
      themeToggle.textContent = "☀️";
      themeToggle.title = "Switch to dark mode";
    } else {
      // Auto: follow system
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        body.classList.add("dark-mode");
      } else {
        body.classList.add("light-mode");
      }
      themeToggle.textContent = "🌙";
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

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./service-worker.js")
      .then((reg) => console.log("Service Worker registered:", reg))
      .catch((err) => console.log("Service Worker failed:", err));
  });
}
let deferredPrompt;

// Listen for the install prompt event
window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;

  // Create the install button dynamically
  const installBtn = document.createElement("button");
  installBtn.id = "install-btn";
  installBtn.textContent = "Install App";
  installBtn.style.position = "fixed";
  installBtn.style.bottom = "20px";
  installBtn.style.left = "20px";
  installBtn.style.padding = "10px 20px";
  installBtn.style.fontSize = "16px";
  installBtn.style.zIndex = "1000";

  document.body.appendChild(installBtn);

  // Show the button when the app can be installed
  installBtn.style.display = "block";

  // Handle button click
  installBtn.addEventListener("click", () => {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(() => {
      deferredPrompt = null;
      installBtn.style.display = "none"; // Hide after install
    });
  });
});
