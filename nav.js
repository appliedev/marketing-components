class MarComNav extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    const wrapper = document.createElement("nav");
    wrapper.setAttribute("class", "marcom-nav-container");

    const text = document.createElement("p");
    text.textContent = "...";

    wrapper.appendChild(text);
    shadow.appendChild(wrapper);

    // Load external CSS
    const linkElem = document.createElement("link");
    linkElem.setAttribute("rel", "stylesheet");
    linkElem.setAttribute("href", "nav.css");
    shadow.appendChild(linkElem);
  }
}

customElements.define("marcom-nav", MarComNav);
