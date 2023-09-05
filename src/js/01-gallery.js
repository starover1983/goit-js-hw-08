// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

const galleryList = document.querySelector('.gallery');

const markup = galleryItems.map(({ preview: smallImage, original: largeImage, description: alt }) =>
    `<div class="gallery__item">
  <a class="gallery__link" href="${ largeImage}">
    <img
      class="gallery__image"
      src="${smallImage}"
      alt="${alt}"
    />
  </a>
</div> `).join('')
galleryList.insertAdjacentHTML("beforeend", markup)

let lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250, showCounter:false,captionsData:'alt'});