import Card from "./Card.js";

export default class CardToList extends Card {
    constructor (data, cardTemplateSelector) {
        super(data, cardTemplateSelector);
    };

    renderCard() {
        this._cardElement = this._getCardTemplate();

        this._cardElement.querySelector('.offers__menu-label').textContent = this._data.name;

        this._cardElement.querySelector('#list-button').id = `button-${this._data.id}`;
        this._cardElement.querySelector('.offers__menu-label').setAttribute('for', `button-${this._data.id}`);

        this.setEventListeners();

        return this._cardElement;
    };

    createBigCard() {
        const card = new Card (this._data, '.template-card');

            console.log(document.querySelector('.card__content'));

            document.querySelector('.card__content').textContent = '';

            document.querySelector('.offers__card').prepend(card.renderCard());
    }

    setEventListeners() {
        this._cardElement.addEventListener('click', () => {
            this.createBigCard();
        });
    };


}
