class Custom extends HTMLElement {
    index = 0;

    constructor() {
        super();
        
        this.attachShadow({mode: 'open'});

        this.setAttribute('custom-button-group', 'custom-button');
        
        const increaseButton = document.createElement('button');
        increaseButton.classList.add('increase-button');
        increaseButton.textContent = 'Increase';

        const decreaseButton = document.createElement('button');
        decreaseButton.classList.add('decrease-button');
        decreaseButton.textContent = 'Decrease';

        this.shadowRoot.append(increaseButton, decreaseButton);

        this.display = document.createElement('p');
        this.display.textContent = `Current index: ${this.index}`;
        this.shadowRoot.append(this.display);

        this.increase();
        this.decrease();
    }

    increase() {
        this.shadowRoot.querySelector('.increase-button').addEventListener('click', () => {
            this.index++;
            this.display.textContent = `Current index: ${this.index}`;
        });
    }

    decrease() {
        this.shadowRoot.querySelector('.decrease-button').addEventListener('click', () => {
            this.index--;
            this.display.textContent = `Current index: ${this.index}`;
        });
    }
}

customElements.define('custom-button', Custom);
