class CustomButton extends HTMLElement {
    constructor() {
      super();
  
      this.index = 0;
      this.display = document.createElement('p');
      this.display.textContent = `Current index: ${this.index}`;
      this.append(this.display);
  
      this.increaseButton = this.querySelector('.increase-button');
      this.decreaseButton = this.querySelector('.decrease-button');
  
      this.increaseButton.addEventListener('click', () => {
        this.index++;
        this.display.textContent = `Current index: ${this.index}`;
      });
  
      this.decreaseButton.addEventListener('click', () => {
        this.index--;
        this.display.textContent = `Current index: ${this.index}`;
      });
    }
  }
  
  customElements.define('custom-button', CustomButton);