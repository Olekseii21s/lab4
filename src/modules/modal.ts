export const modal = document.createElement("div");
modal.style.position = "fixed";
modal.style.top = "0";
modal.style.left = "0";
modal.style.width = "100%";
modal.style.height = "100%";
modal.style.background = "rgba(0,0,0,0.8)";
modal.style.display = "none";
modal.style.flexDirection = "column";
modal.style.justifyContent = "center";
modal.style.alignItems = "center";
modal.style.padding = "20px";
modal.style.boxSizing = "border-box";
modal.style.overflowY = "auto";
modal.style.zIndex = "9999";

export const modalImg = document.createElement("img");
modalImg.style.maxWidth = "80%";
modalImg.style.maxHeight = "60%";
modalImg.style.marginBottom = "20px";

export const modalText = document.createElement("div");
modalText.style.color = "white";
modalText.style.textAlign = "center";
modalText.style.maxWidth = "80%";
modalText.style.background = "rgba(0,0,0,0.5)";
modalText.style.padding = "10px";
modalText.style.borderRadius = "8px";

modal.appendChild(modalImg);
modal.appendChild(modalText);
document.body.appendChild(modal);

export function closeModalOnClick(): void {
  modal.addEventListener("click", () => {
    modal.style.display = "none";
  });
}
