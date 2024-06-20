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

const galleryImage = document.querySelectorAll(".gallery__image");

galleryImage.forEach ( image => {
    image.addEventListener ( 'click', event =>{
        event.preventDefault();
        const imageUrl=event.target.dateset.source;
        console.log(imageUrl);
    });
});

const openModal = (imageUrl) => {
    const instance = basicLightbox.create(`
        <img src="${imageUrl}" width="800" height="600">
    `);
    instance.show();
};

galleryContainer.addEventListener ('click', event =>{
    event.preventDefault();
    if(!event.target.classList.contains ('gallery__image'))
        return;
    const imageUrl = event.target.dataset.source;
    openModal(imageUrl);
})


console.log(galleryItems);

