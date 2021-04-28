

const toggleColorMode = e => {
  const isChecked = e.target.checked;
  if (isChecked) {
    document.documentElement.setAttribute("color-mode", "light");
    localStorage.setItem("color-mode", "light");
    return;
  }
  document.documentElement.setAttribute("color-mode", "dark");
  localStorage.setItem("color-mode", "dark");
}

const toggleColorButtons = document.querySelectorAll(".mode-toggle-btn");
toggleColorButtons.forEach(btn => {
  btn.addEventListener("input", toggleColorMode);
});

// Gallery Scripts
