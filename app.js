document.addEventListener("DOMContentLoaded", () => {
  const menu    = document.getElementById("menu-ejercicio");
  const visor   = document.getElementById("visor");
  const openNew = document.getElementById("open-new");

  function setActive(link) {
    document.querySelectorAll(".tab-link").forEach(a => a.classList.remove("active"));
    if (link) link.classList.add("active");
  }

  function loadExercise(link) {
    if (!link) return;
    const href = link.dataset.href;
    if (!href) return;
    visor.src   = href;
    openNew.href= href;
    setActive(link);
    history.replaceState(null, "", link.getAttribute("href"));
  }

  menu.addEventListener("click", (e) => {
    const a = e.target.closest(".tab-link");
    if (!a) return;
    e.preventDefault();
    loadExercise(a);
  });

  const initial =
    document.querySelector(`.tab-link[href="${location.hash}"]`) ||
    document.querySelector(".tab-link");
  loadExercise(initial);
});
