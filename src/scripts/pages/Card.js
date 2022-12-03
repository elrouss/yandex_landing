export default class Card {
  constructor (data, cardTemplateSelector) {
   this._data = data;
   this._cardTemplateSelector = cardTemplateSelector;
  }

  _getCardTemplate() {
   this._card = document
       .querySelector(this._cardTemplateSelector)
       .content
       .querySelector('.content')
       .cloneNode(true);

   return this._card;
   };

   renderCard() {
       this._cardElement = this._getCardTemplate();

       this._cardElement.querySelector('.card__title').textContent = this._data.name;
       this._cardElement.querySelector('.card__salary').textContent = this._data.salary;
       this._cardElement.querySelector('.card__popup-title-button').textContent = this._data.whatTasks;
       this._cardElement.querySelector('.card__popup-text').textContent = this._data.tasks;



       return this._cardElement;
   };
};

