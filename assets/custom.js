class Custom extends HTMLElement {
    index = 0;

    constructor() {
        super();
        
        this.setAttribute('custom-button-group', 'custom-button');
        this.append(increaseButton, decreaseButton);

        this.display = document.createElement('p');
        this.display.textContent = `Current index: ${this.index}`;
        this.append(this.display);

        this.increaseButton = this.querySelector('.increase-button');
        this.decreaseButton = this.querySelector('.decrease-button');
        this.index = index;

        this.increase();
        this.decrease();
        
        console.log(index);
    }

    increase() {
        this.increaseButton.addEventListener('click', () => {
            this.index++;
            this.display.textContent = `Current index: ${this.index}`;
            console.log("Increase ",this.index);

        });
    }

    decrease() {
        this.decreaseButton.addEventListener('click', () => {
            this.index--;
            this.display.textContent = `Current index: ${this.index}`;
            console.log("Decrease ",this.index);
        });
    }
}

customElements.define('custom-button', Custom);
