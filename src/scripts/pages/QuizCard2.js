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
    this.quizResultHeader = this.quizResult.querySelector('.quiz-result__header_accent');
    this.formBackButton = this._quizContainer.querySelector('.quiz__back-button');
    this.restartButton = this.quizResult.querySelector('.quiz-result__restart-button');
    this.answers = [];
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
    this.answers = [];
    location.href = '#mentor-or-reviewer';
  }

  setEventListeners = () => {
    this._closeButtonForm.addEventListener('mousedown', () => this.closeButtonAction(this._form, 'quiz_hidden')); // обработчик на кнопкe закрытия квиза
    this._closeButtonResult.addEventListener('mousedown', () => this.closeButtonAction(this.quizResult, 'quiz_hidden')); // обработчик на кнопкe закрытия результата квиза
    this.formBackButton.addEventListener('mousedown', () => {
      this.questionCount--;
      this.answers.pop();
      this._form.reset();
      (this.questionCount < 1) ? this.hide(this.formBackButton, 'quiz__back-button_hidden') : this.show(this.formBackButton, 'quiz__back-button_hidden');
      this.fillCard(this.initialQuizCards[`${this.questionCount}`]);
    });
    this.restartButton.addEventListener('mousedown', () => {
      this.questionCount = 0;
      this.answers = [];
      this.fillCard(this.initialQuizCards[`${this.questionCount}`]);
      (this.questionCount < 1) ? this.hide(this.formBackButton, 'quiz__back-button_hidden') : this.show(this.formBackButton, 'quiz__back-button_hidden');

      this.hide(this.quizResult, 'quiz_hidden');
      this.show(this._form, 'quiz_hidden');
      
    });
    this._form.addEventListener('change', (evt) => {
      if (evt.target.tagName == 'INPUT' && evt.target.getAttribute('type') == 'radio') {
        if (evt.target.id == 'radio1') {
          this.answers[`${this.questionCount}`] = 'mentorAnswer';
          console.log(this.answers);
        } else if (evt.target.id == 'radio2') {
          this.answers[`${this.questionCount}`] = 'reviewerAnswer';
          console.log(this.answers);
        }
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
            // прописать заполнение карточки результата
            const resultReviewerScore = this.answers.filter(answer => answer == 'reviewerAnswer').length;
            if (resultReviewerScore == 0) {
              this.quizResultHeader.textContent = 'Вы на 100% наставник';
            } else if (resultReviewerScore == 1) {
              this.quizResultHeader.textContent = 'Вы на 3/4 наставник';
            } else if (resultReviewerScore == 2) {
              this.quizResultHeader.textContent = 'Вам подойдут обе позиции';
            } else if (resultReviewerScore == 3) {
              this.quizResultHeader.textContent = 'Вы на 3/4 ревьюер';
            } else if (resultReviewerScore == 4) {
              this.quizResultHeader.textContent = 'Вы на 100% ревьюер';
            }
            this.show(this.quizResult, 'quiz_hidden');
          }
        }, 500);
      }
    })
  }
}
