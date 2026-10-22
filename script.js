const menuToggle = document.querySelector(".menu-toggle");
const siteNavigation = document.querySelector("#site-navigation");

function setPanel(button, panel, open, label) {
  panel.hidden = !open;
  button.setAttribute("aria-expanded", String(open));
  button.setAttribute("aria-label", `${open ? "Close" : "Open"} ${label}`);
}

menuToggle.addEventListener("click", () => {
  const open = menuToggle.getAttribute("aria-expanded") !== "true";
  setPanel(menuToggle, siteNavigation, open, "menu");
});

document.querySelector(".newsletter-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  form.querySelector(".newsletter-message").textContent =
    "Thanks for your interest. This demo doesn't send or store email addresses.";
  form.reset();
});
