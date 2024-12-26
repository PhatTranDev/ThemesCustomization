class Custom extends HTMLElement {
    index = 0;

    constructor() {
        super();
        
        this.setAttribute('custom-button-group', 'custom-button');
        this.append(increaseButton, decreaseButton);

        this.display = document.createElement('p');
        this.display.textContent = `Current index: ${this.index}`;
        this.append(this.display);

        console.log(increaseButton);
        console.log(decreaseButton);

        this.increase();
        this.decrease();
    }

    increase() {
        this.querySelector('.increase-button').addEventListener('click', () => {
            this.index++;
            this.display.textContent = `Current index: ${this.index}`;
        });
    }

    decrease() {
        this.querySelector('.decrease-button').addEventListener('click', () => {
            this.index--;
            this.display.textContent = `Current index: ${this.index}`;
        });
    }
}

customElements.define('custom-button', Custom);
