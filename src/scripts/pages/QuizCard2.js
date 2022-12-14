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
    this.formBackButton = this._quizContainer.querySelector('.quiz__back-button');
    this.restartButton = this.quizResult.querySelector('.quiz-result__restart-button');
  }

  fillCard = (cardData) => {
    this._q1.textContent = cardData.mentorAnswer;
    this._q2.textContent = cardData.reviewerAnswer;
    this._quizPageNumber.textContent = `${cardData.index}/4`
  }

  show = (element, hiddenElementClass) => {
    // element.classList.remove('quiz_hidden');
    element.classList.remove(`${hiddenElementClass}`);
  }

  hide = (element, hiddenElementClass) => {
    // element.classList.add('quiz_hidden'); 
    element.classList.add(`${hiddenElementClass}`);
  }
  closeButtonAction = (closedElement, hiddenElementClass) => {
    this.hide(closedElement, hiddenElementClass);
    this.starQuizButton.removeAttribute('disabled');
    this.questionCount = 0;
    location.href = '#mentor-or-reviewer';
  }

  setEventListeners = () => {
    this._closeButtonForm.addEventListener('mousedown', () => this.closeButtonAction(this._form, 'quiz_hidden')); // обработчик на кнопкe закрытия квиза
    this._closeButtonResult.addEventListener('mousedown', () => this.closeButtonAction(this.quizResult, 'quiz_hidden')); // обработчик на кнопкe закрытия результата квиза
    this.formBackButton.addEventListener('mousedown', () => {
      this.questionCount--;
      this._form.reset();
      (this.questionCount < 1) ? this.hide(this.formBackButton, 'quiz__back-button_hidden') : this.show(this.formBackButton, 'quiz__back-button_hidden');
      this.fillCard(this.initialQuizCards[`${this.questionCount}`]);
    });
    this.restartButton.addEventListener('mousedown', () => {
      this.questionCount = 0;
      this.fillCard(this.initialQuizCards[`${this.questionCount}`]);
      (this.questionCount < 1) ? this.hide(this.formBackButton, 'quiz__back-button_hidden') : this.show(this.formBackButton, 'quiz__back-button_hidden');

      this.hide(this.quizResult, 'quiz_hidden');
      this.show(this._form, 'quiz_hidden');
      
    });
    this._form.addEventListener('change', (evt) => {
      if (evt.target.tagName == 'INPUT' && evt.target.getAttribute('type') == 'radio') {
        // Создаём событие "click" и запускаем его, применительно к элементу "next"
        setTimeout(() => {
          this._form.reset();
          this.questionCount++;
          if (this.questionCount < this.initialQuizCards.length) {
            this.fillCard(this.initialQuizCards[`${this.questionCount}`]);
            console.log(this.questionCount);
            (this.questionCount < 1) ? this.hide(this.formBackButton, 'quiz__back-button_hidden') : this.show(this.formBackButton, 'quiz__back-button_hidden');
          } else {
            this.hide(this._form, 'quiz_hidden');
            this.show(this.quizResult, 'quiz_hidden');
          }
        }, 500);
      }
    })
  }
}
