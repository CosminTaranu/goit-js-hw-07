import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector ('.gallery');

const createItemMarkUp = ({ preview, original, description }) => {
    return `
    <li class="gallery__list">
    <a class="gallery__link" href="${original}"> <img class="gallery__image" src="${preview}"  alt="${description}" />
    </a>
    </li>
    `
}

const galleryMarkUp = galleryItems.map(createItemMarkUp).join('');
galleryContainer.innerHTML = galleryMarkUp;

var lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
  });
console.log(galleryItems);
