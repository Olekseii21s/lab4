import { modal, modalImg, modalText } from "../modules/modal";
import { fetchPost } from "../modules/fetchPost";

export function initGallery(): void {
  const images = document.querySelectorAll<HTMLImageElement>(".gallery a img");

  images.forEach((img) => {
    img.addEventListener("click", async (e) => {
      e.preventDefault();

      const link = img.parentElement as HTMLAnchorElement;
      modalImg.src = link.href;

      modalText.innerHTML = "Loading...";
      const post = await fetchPost();
      modalText.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;

      modal.style.display = "flex";
    });
  });
}
