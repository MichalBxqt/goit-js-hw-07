import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryContainer = document.querySelector(".gallery");

for (const imgList of galleryItems) {
  const imgEl = 
  `<div class="gallery__item">
    <a class="gallery__link" href="${imgList.original}">
      <img
        class="gallery__image"
        src="${imgList.preview}"
        data-source="${imgList.original}"
        alt="${imgList.description}"
      />
    </a>
</div>`;
  galleryContainer.insertAdjacentHTML("beforeend", imgEl);
}

galleryContainer.addEventListener("click", (event) => {
  event.preventDefault();
  const imgOriginal = basicLightbox.create(`<img src=${event.target.dataset.source}>`);

  document.onkeydown = function(imgOriginalCloseEsc) {
    let isEscape = false;
      if ( "key" in imgOriginalCloseEsc ) {
        isEscape = ( imgOriginalCloseEsc.key === "Escape" || imgOriginalCloseEsc.key === "Esc" );
    } 
      if ( isEscape ) {
      imgOriginal.close();
    }
};
  imgOriginal.show()
});


