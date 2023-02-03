export default class QuizCard {
  constructor (data, cardTemplateSelector) {
    this._data = data;
    this._cardTemplateSelector = cardTemplateSelector;
  }

  _getCardTemplate() {
    this._card = document
        .querySelector(this._cardTemplateSelector)
        .content
        .querySelector('.quiz')
        .cloneNode(true);

    return this._card;
    };

    renderCard() {
      this._cardElement = this._getCardTemplate();

      console.log(this._data.mentorAnswer);

      this._cardElement.querySelector('#q1').textContent = this._data.mentorAnswer;
      this._cardElement.querySelector('#q2').textContent = this._data.reviewerAnswer;

      return this._cardElement;
  };

  moveToNextQuestion () {
    this._nextButton = this._cardElement.querySelector('.radio-container__radio');
    this._nextButton.addEventListener('click', () => {

    this._cardElement.remove();
    this.renderCard();
    
    });
  }

}
