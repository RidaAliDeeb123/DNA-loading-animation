// Trigger fade-in when the page loads
window.addEventListener("DOMContentLoaded", () => {
  const loadingScreen = document.getElementById("loading-screen");

  // Ensure fade-in class is applied
  loadingScreen.classList.add("fade-in");

  // After 3 seconds, fade out the loading screen
  setTimeout(() => {
    loadingScreen.classList.add("fade-out");

    setTimeout(() => {
      loadingScreen.style.display = "none";
      document.getElementById("main-app").style.display = "flex";
    }, 1000); // Matches transition time
  }, 3000);
});

// Update slider values live
document.getElementById("age").addEventListener("input", function () {
  document.getElementById("age-value").textContent = this.value;
});

document.getElementById("dose").addEventListener("input", function () {
  document.getElementById("dose-value").textContent = this.value;
});
