import ScrollSuave from "./modules/scroll-suave.js";
import ScrollAnima from "./modules/scroll-anima.js";
import SlideNav from "./modules/slide.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
console.log(scrollSuave);
scrollSuave.init();

const scrollAnima = new ScrollAnima('[data-anime="scroll"]');
scrollAnima.init();

const slide = new SlideNav(".slide", ".slide-wrapper");
slide.init();
slide.addControl(".custom-controls");

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault(); // Impede o comportamento padrão do link

    const targetId = this.getAttribute("href").substring(1); // Remove o '#'
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // Rolagem suave até a seção
      targetElement.scrollIntoView({ behavior: "smooth" });

      // Atualiza a URL removendo o fragmento
      history.pushState(null, null, window.location.pathname);
    }
  });
});
