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
                <img
                class="gallery__image"
                src="${preview}"
                data-source="large-image.jpg"
                alt="${description}"
                />
            </a>
        </li>`
    ).join("");
}

function handleClick(event) {
  event.preventDefault();
  
  if (event.target === event.currentTarget) {
    return;
  }

  const modalImg = event.target.closest(".gallery__link").href;
  console.log(modalImg);

  const instance = basicLightbox.create(`
    <img class="gallery__image" src="${modalImg}" 
                alt="${modalImg.description}" width="800" height="600"/>`)
  instance.show();
 
}
 
// const instance = basicLightbox.create(`
//     <h1>Dynamic Content</h1>
//     <p>You can set the content of the lightbox with JS.</p>
// `)
// console.log(instance);
// instance.show();