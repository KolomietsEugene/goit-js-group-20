'use strict';

// eslint-disable-next-line import/extensions
import images from './gallery-items.js';

// Params

let currentImgIndex = 0;

// Main section elements

const galleryListElem = document.querySelector('ul.gallery.js-gallery');
const modalElem = document.querySelector('div.js-lightbox');

// Modal lightbox section elements

const lighBoxImgElem = modalElem.querySelector(
  '.lightbox__content .lightbox__image',
);
const lighBoxCloseBtnElem = modalElem.querySelector('button.lightbox__button');
const lightBoxOverlayElem = modalElem.querySelector('div.lightbox__content');

// Content generators

const generateGalleryList = () => {
  return images
    .map((image, index) => {
      return `<li class="gallery__item">
          <a
            class="gallery__link"
            href="${image.original}"
          >
            <img
              class="gallery__image"
              src="${image.preview}"
              data-source="${image.original}"
              data-index="${index}"
              alt="${image.description}"
            />
          </a>
        </li>`;
    })
    .join('');
};

// Rendering

const renderGalleryList = () => {
  galleryListElem.innerHTML = '';
  galleryListElem.insertAdjacentHTML('beforeend', generateGalleryList());
};

const renderModalImgAttrSet = (url, alt) => {
  lighBoxImgElem.setAttribute('src', url);
  lighBoxImgElem.setAttribute('alt', alt);
};

const renderOpenLightBox = (url, alt) => {
  renderModalImgAttrSet(url, alt);
  modalElem.classList.add('is-open');
};

const renderCloseLightBox = () => {
  renderModalImgAttrSet('', '');
  modalElem.classList.remove('is-open');
};

const renderChangeImg = index => {
  //   console.log(currentImgIndex);
  const newIndex =
    // eslint-disable-next-line no-nested-ternary
    index < 0 ? images.length - 1 : index > images.length - 1 ? 0 : index;
  renderModalImgAttrSet(
    images[newIndex].original,
    images[newIndex].description,
  );
  currentImgIndex = newIndex;
};

// Handlers

const handlerOpenClick = e => {
  e.preventDefault();
  renderOpenLightBox(e.target.dataset.source, e.target.getAttribute('alt'));
  currentImgIndex = Number(e.target.dataset.index);
};

const handlerCloseClick = e => {
  if (e.target.dataset.action === 'close-lightbox') {
    renderCloseLightBox();
  }
};

const handlerCloseByOverlay = e => {
  console.log(e.target);
  if (modalElem.classList.contains('is-open') && e.currentTarget === e.target) {
    renderCloseLightBox();
  }
};

const handlerKeyboardClick = e => {
  if (modalElem.classList.contains('is-open')) {
    // eslint-disable-next-line default-case
    switch (e.key) {
      case 'Escape':
        renderCloseLightBox();
        break;
      case 'ArrowLeft':
        console.log(currentImgIndex);
        renderChangeImg((currentImgIndex -= 1));
        break;
      case 'ArrowRight':
        renderChangeImg((currentImgIndex += 1));
        break;
    }
  }
};

// Main sript action

renderGalleryList();

galleryListElem.addEventListener('click', handlerOpenClick);

lighBoxCloseBtnElem.addEventListener('click', handlerCloseClick);

lightBoxOverlayElem.addEventListener('click', handlerCloseByOverlay);

document.addEventListener('keyup', handlerKeyboardClick);
