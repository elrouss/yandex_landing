export default class QuizCard2 {
  constructor(starQuizButton, initialQuizCards) {
    this.starQuizButton = starQuizButton;
    this.initialQuizCards = initialQuizCards;
    this._quizContainer = document.querySelector('.quiz-container');
    this._form = this._quizContainer.querySelector('.quiz-survey');
    this._q1 = this._quizContainer.querySelector('.q1');
    this._q2 = this._quizContainer.querySelector('.q2');
    this._quizPageNumber = this._quizContainer.querySelector('.quiz__page-number');
    this._closeButtonForm = this._quizContainer.querySelector('.quiz__close-button_form');
    this._closeButtonResult = this._quizContainer.querySelector('.quiz__close-button_result');
    this.questionCount = 0;
    this.radio1 = this._quizContainer.querySelector('.radio1');
    this.radio2 = this._quizContainer.querySelector('.radio2');
    this.quizResult = this._quizContainer.querySelector('.quiz-result');
  }

  fillCard = (cardData) => {
    this._q1.textContent = cardData.mentorAnswer;
    this._q2.textContent = cardData.reviewerAnswer;
    this._quizPageNumber.textContent = `${cardData.index}/4`
  }

  open = (element) => {
    element.classList.remove('quiz_hidden');  
  }

  close = (element) => {
    element.classList.add('quiz_hidden'); 
  }
  closeButtonAction = (closedElement) => {
    this.close(closedElement);
    this.starQuizButton.removeAttribute('disabled');
    this.questionCount = 0;
    location.href = '#mentor-or-reviewer';
  }

  setEventListeners = () => {
    this._closeButtonForm.addEventListener('mousedown', () => this.closeButtonAction(this._form)); // обработчик на кнопкe закрытия квиза
    this._closeButtonResult.addEventListener('mousedown', () => this.closeButtonAction(this.quizResult)); // обработчик на кнопкe закрытия результата квиза
    this._form.addEventListener('change', (evt) => {
      if (evt.target.tagName == 'INPUT' && evt.target.getAttribute('type') == 'radio') {
        // Создаём событие "click" и запускаем его, применительно к элементу "next"
        setTimeout(() => {
          this._form.reset();
          this.questionCount++;
          if (this.questionCount < 4) {
            this.fillCard(this.initialQuizCards[`${this.questionCount}`]);
            console.log(this.questionCount);
          } else {
            this.close(this._form);
            this.open(this.quizResult);
          }
          
        }, 500);
      }
    })
  }
}
