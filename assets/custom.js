class QuantitySelector extends HTMLElement {
    constructor() {
      super();
      this.quantity = 0;
      this.attachShadow({ mode: 'open' });
      this.render();
    }
  
    render() {
      const template = this.createElement('template');
      template.innerHTML = `
        <style>
          button {
            padding: 5px 10px;
            margin: 0 5px;
          }
        </style>
        <button id="decrease">-</button>
        <p id="quantity">0</p>
        <button id="increase">+</button>
      `;
      this.shadowRoot.appendChild(template.content.cloneNode(true));
  
      const decreaseBtn = this.shadowRoot.querySelector('#decrease');
      const increaseBtn = this.shadowRoot.querySelector('#increase');
      const quantityElement = this.shadowRoot.querySelector('#quantity');
  
      decreaseBtn.addEventListener('click', () => {
        if (this.quantity > 0) {
          this.quantity--;
          quantityElement.textContent = this.quantity;
        }
      });
  
      increaseBtn.addEventListener('click', () => {
        this.quantity++;
        quantityElement.textContent = this.quantity;
      });
    }
  }
  
  customElements.define('quantity-selector', QuantitySelector);