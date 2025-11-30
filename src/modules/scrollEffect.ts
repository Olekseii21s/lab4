export function initScrollEffect(): void {
  window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (!header) return;

    if (window.scrollY > 120) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  });
}
