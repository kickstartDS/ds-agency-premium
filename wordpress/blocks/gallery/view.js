/**
 * Gallery block view script - Interactivity API for lightbox
 */
import { store } from '@wordpress/interactivity';

store('dsa/gallery', {
  state: {
    isOpen: false,
    currentIndex: 0,
    images: [],
    get lightboxClass() {
      return `dsa-gallery__lightbox ${this.isOpen ? 'dsa-gallery__lightbox--open' : ''}`;
    },
    get currentImageSrc() {
      return this.images[this.currentIndex]?.src || '';
    },
    get currentImageAlt() {
      return this.images[this.currentIndex]?.alt || '';
    },
    get currentCaption() {
      return this.images[this.currentIndex]?.caption || '';
    },
  },
  actions: {
    openLightbox(event) {
      const { state } = store('dsa/gallery');
      const item = event.target.closest('.dsa-gallery__item');
      const gallery = item.closest('.dsa-gallery');
      const index = parseInt(item.dataset.index, 10);

      // Collect images from the gallery
      const items = gallery.querySelectorAll('.dsa-gallery__item');
      state.images = Array.from(items).map((el) => ({
        src: el.querySelector('img').src,
        alt: el.querySelector('img').alt,
        caption: el.querySelector('.dsa-gallery__caption')?.textContent || '',
      }));

      state.currentIndex = index;
      state.isOpen = true;
      document.body.style.overflow = 'hidden';
    },
    closeLightbox(event) {
      const { state } = store('dsa/gallery');
      // Only close if clicking the backdrop, not the image
      if (
        event.target.classList.contains('dsa-gallery__lightbox') ||
        event.target.classList.contains('dsa-gallery__lightbox-close')
      ) {
        state.isOpen = false;
        document.body.style.overflow = '';
      }
    },
    prevImage(event) {
      event.stopPropagation();
      const { state } = store('dsa/gallery');
      state.currentIndex =
        state.currentIndex > 0 ? state.currentIndex - 1 : state.images.length - 1;
    },
    nextImage(event) {
      event.stopPropagation();
      const { state } = store('dsa/gallery');
      state.currentIndex =
        state.currentIndex < state.images.length - 1 ? state.currentIndex + 1 : 0;
    },
    handleKeydown(event) {
      const { state, actions } = store('dsa/gallery');
      if (!state.isOpen) return;

      switch (event.key) {
        case 'Escape':
          state.isOpen = false;
          document.body.style.overflow = '';
          break;
        case 'ArrowLeft':
          actions.prevImage(event);
          break;
        case 'ArrowRight':
          actions.nextImage(event);
          break;
      }
    },
  },
});
