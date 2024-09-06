class MarComNav extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const wrapper = document.createElement('nav');
    wrapper.setAttribute('class', 'marcom-nav-container');

    const text = document.createElement('p');
    text.textContent = '...';

    wrapper.appendChild(text);
    shadow.appendChild(wrapper);

    const style = document.createElement('style');
    style.textContent = `
      .marcom-nav-container {
        color: red;
      }
    `;
    shadow.appendChild(style);
  }
}

customElements.define('marcom-nav', MarComNav);
