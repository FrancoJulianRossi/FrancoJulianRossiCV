console.log("Curriculum Web cargado");

function toggleTheme() {
  document.body.classList.toggle("light");
}

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      sec.classList.add("visible");
    }
  });
});

const lightBtn = document.getElementById("lightBtn");
const darkBtn = document.getElementById("darkBtn");

// activar modo claro
lightBtn.addEventListener("click", () => {
  document.body.classList.add("light");
});

// activar modo oscuro
darkBtn.addEventListener("click", () => {
  document.body.classList.remove("light");
});

function updateActiveMode() {
  if (document.body.classList.contains("light")) {
    lightBtn.style.opacity = "1";
    darkBtn.style.opacity = "0.4";
  } else {
    darkBtn.style.opacity = "1";
    lightBtn.style.opacity = "0.4";
  }
}

lightBtn.addEventListener("click", () => {
  document.body.classList.add("light");
  updateActiveMode();
});

darkBtn.addEventListener("click", () => {
  document.body.classList.remove("light");
  updateActiveMode();
});

// inicial
updateActiveMode();