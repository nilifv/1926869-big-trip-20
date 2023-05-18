import {createElement} from '../../render.js';

function createInfoTemplate() {
  return `<div class="trip-main">
  <section class="trip-main__trip-info  trip-info">
  </section>`;
}

export default class Info {
  getTemplate() {
    return createInfoTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
