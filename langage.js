// Section for language changing
const languageToggle = document.getElementById("language-toggle");
const elementsToTranslate = document.querySelectorAll("[data-lang]");
let currentLanguage = "en";

const translations = {
    en: {
        // Page title
        pageTitle: "Stanislas Mainguy's Portfolio",
        // Nav section inside the menu
        menuText: "menu",
        themeText: "Dark Theme",
        navTextHome: "Home",
        navTextWork: "My Work",
        navTextSkills: "My Skills",
        navTextContact: "Contact",
        // Presentation text
         h1Text: "Hi, I'm Stanislas Mainguy Web integrator.",
         headerText: "A web integrator who builds rich accessible and performant websites.",
         hireText: "Hire me",
         seeMyWorkText: "See my work",
        // Works section
         h2TextWorks: "Selected Work",
         work1Text: "A site for finding hotel or B&B accommodation.",
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
    },
    fr: {
        // Page title
         pageTitle: "Portfolio de Stanislas Mainguy",
        // Nav section inside the menu
         menuText: "menu",
         themeText: "Thème sombre",
         navTextHome: "Accueil",
         navTextWork: "Mon Travail",
         navTextSkills: "Mes Compétences",
         navTextContact: "Contact",
        // Presentation text
         h1Text: "Bonjour, je suis Stanislas Mainguy, Intégrateur Web.",
         headerText: "Un intégrateur web qui crée des sites riches, accessibles et performants.",
         hireText: "Embauchez-moi",
         seeMyWorkText: "Voir mon travail",
        // Works section
         h2TextWorks: "Travaux Sélectionnés",
         work1Text: "Un site pour trouver un hôtel ou un Bed & Breakfast.",
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
    },
};

function updateTextContent() {
    elementsToTranslate.forEach((element) => {
      const key = element.getAttribute("data-lang");
      element.textContent = translations[currentLanguage][key];
    });
}
  
languageToggle.addEventListener("click", () => {
    currentLanguage = currentLanguage === "en" ? "fr" : "en";
    updateTextContent();
});
  
updateTextContent();
