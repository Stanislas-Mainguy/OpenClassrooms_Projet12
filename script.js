const nav = document.querySelector(".nav");
const navMenu = document.querySelector(".nav-items");
const btnToggleNav = document.querySelector(".menu-btn");
const workEls = document.querySelectorAll(".work-box");
const workImgs = document.querySelectorAll(".work-img");
const mainEl = document.querySelector("main");
const yearEl = document.querySelector(".footer-text span");
const languageToggle = document.getElementById("language-toggle");
const elementsToTranslate = document.querySelectorAll("[data-lang]");

const toggleNav = () => {
  nav.classList.toggle("hidden");

  // Prevent screen from scrolling when menu is opened
  document.body.classList.toggle("lock-screen");

  if (nav.classList.contains("hidden")) {
    btnToggleNav.textContent = translations[currentLanguage]["menuText"];
  } else {
    // When menu is opened after transition change text respectively
    setTimeout(() => {
      btnToggleNav.textContent = translations[currentLanguage]["closeMenu"];
    }, 475);
  }
  updateTextContent();
};

btnToggleNav.addEventListener("click", toggleNav);

navMenu.addEventListener("click", (e) => {
  if (e.target.localName === "a") {
    toggleNav();
  }
});

document.body.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !nav.classList.contains("hidden")) {
    toggleNav();
  }
});

// Animating work instances on scroll

workImgs.forEach((workImg) => workImg.classList.add("transform"));

let observer = new IntersectionObserver(
  (entries) => {
    const [entry] = entries;
    const [textbox, picture] = Array.from(entry.target.children);
    if (entry.isIntersecting) {
      picture.classList.remove("transform");
      Array.from(textbox.children).forEach(
        (el) => (el.style.animationPlayState = "running")
      );
    }
  },
  { threshold: 0.3 }
);

workEls.forEach((workEl) => {
  observer.observe(workEl);
});

// Toggle theme and store user preferred theme for future

const switchThemeEl = document.querySelector('input[type="checkbox"]');
const themeLabel = document.querySelector('.theme-switch span');
const storedTheme = localStorage.getItem("theme");

switchThemeEl.checked = storedTheme === "dark" || storedTheme === null;

switchThemeEl.addEventListener("click", () => {
  const isChecked = switchThemeEl.checked;

  if (!isChecked) {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
    themeLabel.setAttribute('data-lang', 'lightThemeText');
    localStorage.setItem("theme", "light");
    themeLabel.textContent = translations[currentLanguage]["lightThemeText"];
    switchThemeEl.checked = false;
  } else {
    document.body.classList.add("dark");
    themeLabel.setAttribute('data-lang', 'darkThemeText');
    document.body.classList.remove("light");
    localStorage.setItem("theme", "dark");
    themeLabel.textContent = translations[currentLanguage]["darkThemeText"];
  }
});

// Trap the tab when menu is opened

const lastFocusedEl = document.querySelector('a[data-focused="last-focused"]');

document.body.addEventListener("keydown", (e) => {
  if (e.key === "Tab" && document.activeElement === lastFocusedEl) {
    e.preventDefault();
    btnToggleNav.focus();
  }
});

// Section for language changing
let currentLanguage = "en";

const translations = {
    en: {
        // Page title
        pageTitle: "Stanislas Portfolio",
        // Nav section inside the menu
        menuText: "menu",
        closeMenu: "close",
        darkThemeText: "Dark Theme",
        lightThemeText: "Light Theme",
        navTextHome: "Home",
        navTextWork: "My Work",
        navTextSkills: "My Skills",
        navTextContact: "Contact",
        // Presentation text
         h1Text: "Hi, I'm Stanislas",
         headerText: "A Front-End Developer who builds rich accessible and performant websites.",
         hireText: "Hire me",
         seeMyWorkText: "See my work",
        // Works section
         h2TextWorks: "Selected Work",
         work1Text: "A site for finding hotel or B&B accommodation.",
         work2Text: "Menu reservation site by restaurant.",
         work3Text: "A site for finding B&B accommodation.",
         work4Text: "Portfolio of Nina Carducci, photographer.",
         workLinksText: "Explore this project",
        // Skills section
         h2SkillsText: "My Toolkit",
        // Contact section
         h2ContactText: "Send Message",
         indicatorText: "Available for hire",
         contactText: "As a Web integrator, I construct web interfaces and design systems with a special love for accessibility and the performance. I tend to code things from scratch and enjoy bringing ideas to life.",
         labelName: "Name",
         labelEmail: "Email",
         labelMessage: "How can I help you?",
         submitText: "Send",
        // Footer section
         footerText: "- Portfolio by",
    },
    fr: {
        // Page title
         pageTitle: "Portfolio de Stanislas",
        // Nav section inside the menu
         menuText: "menu",
         closeMenu: "fermer",
         darkThemeText: "Thème Sombre",
         lightThemeText: "Thème Clair",
         navTextHome: "Accueil",
         navTextWork: "Mon Travail",
         navTextSkills: "Mes Compétences",
         navTextContact: "Contact",
        // Presentation text
         h1Text: "Bonjour, je suis Stanislas",
         headerText: "Un intégrateur web qui crée des sites riches, accessibles et performants.",
         hireText: "Embauchez-moi",
         seeMyWorkText: "Voir mon travail",
        // Works section
         h2TextWorks: "Travaux Sélectionnés",
         work1Text: "Un site pour trouver un hôtel ou un Bed & Breakfast.",
         work2Text: "Site de réservation de menu par restaurant.",
         work3Text: "Un site pour trouver un Bed & Breakfast.",
         work4Text: "Portefolio de Nina Carducci, photographe.",
         workLinksText: "Explorer ce projet",
        // Skills section
         h2SkillsText: "Ma Boîte à Outils",
        // Contact section
         h2ContactText: "Envoyer un Message",
         indicatorText: "Disponible pour embauche",
         contactText: "En tant qu'intégrateur web, je construis des interfaces web et des systèmes de conception avec un amour particulier pour l'accessibilité et la performance. J'ai tendance à coder les choses à partir de zéro et j'aime donner vie aux idées.",
         labelName: "Nom",
         labelEmail: "E-mail",
         labelMessage: "Comment puis-je vous aider ?",
         submitText: "Envoyer",
        // Footer section
         footerText: "- Portfolio de",
    },
};

function updateTextContent() {
    elementsToTranslate.forEach((element) => {
      const key = element.getAttribute("data-lang");
      element.textContent = translations[currentLanguage][key];
    });
    btnToggleNav.textContent = nav.classList.contains("hidden")
    ? translations[currentLanguage]["menuText"]
    : translations[currentLanguage]["closeMenu"];
    themeLabel.textContent = switchThemeEl.checked
    ? translations[currentLanguage]["darkThemeText"]
    : translations[currentLanguage]["lightThemeText"];
};
  
languageToggle.addEventListener("click", () => {
    currentLanguage = currentLanguage === "en" ? "fr" : "en";
    updateTextContent();
});
  
updateTextContent();
