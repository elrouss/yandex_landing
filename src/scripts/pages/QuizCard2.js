export default class QuizCard2 {
  constructor(starQuizButton) {
    this.starQuizButton = starQuizButton;
    this._quizContainer = document.querySelector('.quiz-container').querySelector('.quiz');
    this._q1 = this._quizContainer.querySelector('.q1');
    this._q2 = this._quizContainer.querySelector('.q2');
    this._quizPageNumber = this._quizContainer.querySelector('.quiz__page-number');
    this._closeButton = this._quizContainer.querySelector('.quiz__close-button');
  }

  fillCard = (cardData) => {
    this._q1.textContent = cardData.mentorAnswer;
    this._q2.textContent = cardData.reviewerAnswer;
    this._quizPageNumber.textContent = `${cardData.index}/4`
  }

  open = () => {
    this._quizContainer.classList.add('quiz_visible');
  }
  close = () => {
    this._quizContainer.classList.remove('quiz_visible');
    this.starQuizButton.removeAttribute('disabled');
  }
  setEventListeners() {
    this._closeButton.addEventListener('mousedown', () => this.close()); // обработчик на кнопкe закрытия квиза
  }
}
