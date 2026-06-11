import { renderOverview } from "./pages/overview.js";
import { renderFeatures } from "./pages/features.js";
import { renderTimeline } from "./pages/timeline.js";
import { renderTeam } from "./pages/team.js";
import { renderPrivacy } from "./pages/privacy.js";
import { renderTerms } from "./pages/terms.js";
import { renderContact } from "./pages/contact.js";
import { renderGallery } from "./pages/gallery.js";

// Global stylesheet import
import "./index.css";

const appContainer = document.getElementById("app");
const header = document.querySelector("header");

// Router definition
const routes = {
  "#/overview": renderOverview,
  "#/features": renderFeatures,
  "#/timeline": renderTimeline,
  "#/team": renderTeam,
  "#/privacy": renderPrivacy,
  "#/terms": renderTerms,
  "#/contact": renderContact,
  "#/gallery": renderGallery,
};

function router() {
  const hash = window.location.hash || "#/overview";
  const renderFn = routes[hash] || renderOverview;

  // Clear previous content
  appContainer.innerHTML = "";

  // Render new view
  const pageElement = renderFn();
  appContainer.appendChild(pageElement);

  // Update navigation active states
  updateNavLinks(hash);

  // Scroll to top on navigation
  window.scrollTo(0, 0);
}

function updateNavLinks(activeHash) {
  // Update desktop links
  const desktopLinks = document.querySelectorAll("nav a");
  desktopLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === activeHash) {
      link.classList.add("active", "text-primary");
      link.classList.remove("text-on-surface-variant");
    } else {
      link.classList.remove("active", "text-primary");
      link.classList.add("text-on-surface-variant");
    }
  });

  // Update mobile links
  const mobileLinks = document.querySelectorAll("#mobile-menu a");
  mobileLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === activeHash) {
      link.classList.add("active", "text-primary");
      link.classList.remove("text-on-surface-variant");
    } else {
      link.classList.remove("active", "text-primary");
      link.classList.add("text-on-surface-variant");
    }
  });
}

// Sticky Header Scrolled State
window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    header.classList.add("shadow-md", "py-4");
    header.classList.remove("py-5");
  } else {
    header.classList.remove("shadow-md", "py-4");
    header.classList.add("py-5");
  }
});

// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuToggle.addEventListener("click", () => {
  const isHidden = mobileMenu.classList.contains("hidden");
  if (isHidden) {
    mobileMenu.classList.remove("hidden");
    mobileMenuToggle.innerHTML = `<span class="material-symbols-outlined text-2xl">close</span>`;
  } else {
    mobileMenu.classList.add("hidden");
    mobileMenuToggle.innerHTML = `<span class="material-symbols-outlined text-2xl">menu</span>`;
  }
});

// Close mobile menu when a link is clicked
document.querySelectorAll("#mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
    mobileMenuToggle.innerHTML = `<span class="material-symbols-outlined text-2xl">menu</span>`;
  });
});

// Bind scroll behavior to Get Started buttons
function handleGetStartedClick() {
  if (window.location.hash !== "#/overview") {
    window.location.hash = "#/overview";
    setTimeout(() => {
      const chatSim = document.getElementById("chat-simulator");
      if (chatSim) chatSim.scrollIntoView({ behavior: "smooth" });
    }, 150);
  } else {
    const chatSim = document.getElementById("chat-simulator");
    if (chatSim) chatSim.scrollIntoView({ behavior: "smooth" });
  }
}

// Bind events after elements are in DOM
window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#header-get-started, #mobile-get-started").forEach(btn => {
    btn.addEventListener("click", handleGetStartedClick);
  });
});

// Listen to hash changes and initial page load
window.addEventListener("hashchange", router);
window.addEventListener("DOMContentLoaded", router);
