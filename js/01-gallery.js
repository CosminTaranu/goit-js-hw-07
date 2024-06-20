import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector ('.gallery');

const createItemMarkUp = ({ preview, original, description }) => {
    return `
    <li class="gallery__list">
    <a class="gallery__link" href="${original}"> <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
    </a>
    </li>
    `
}

const galleryMarkUp = galleryItems.map(createItemMarkUp).join('');
galleryContainer.innerHTML = galleryMarkUp;

galleryContainer.addEventListener('click', (event) => {
    event.preventDefault();
  
    if (event.target.nodeName !== 'IMG') {
      return;
    }
  
    const instance = basicLightbox.create(`
      <img src="${event.target.dataset.source}" width="800" height="600">
    `);
  
    instance.show();
  
    const onEscPress = (event) => {
      if (event.key === 'Escape') {
        instance.close();
       galleryContainer.removeEventListener('keydown', onEscPress);
      }
    };
  
    galleryContainer.addEventListener('keydown', onEscPress);
  });


console.log(galleryItems);

