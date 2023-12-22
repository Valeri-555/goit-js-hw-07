import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");

galleryList.insertAdjacentHTML("beforeend", createMarkup(galleryItems));
galleryList.addEventListener("click", handleClick);

function createMarkup(arr) {
    return arr.map(({ preview, original, description }) =>
       `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`
    ).join("");
}

function handleClick(event) {
    event.preventDefault()
  
    if (event.target === event.currentTarget) {
        return gallery.next();
    }
    

    let gallery = new SimpleLightbox('.gallery__item a', { captionsData: "alt", captionDelay: 250, overlayOpacity: 0.5 });
    gallery.on('show.simpleLightbox', function () {
        `
        <img class="gallery__image" src="${galleryItems.original}"  alt="${galleryItems.description}">
        `
    });
}