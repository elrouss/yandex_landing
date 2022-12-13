import '../../pages/index.css';
import Card from "./Card.js";
import CardToList from "./CardToList.js";
import QuizCard from './quizCard';
import PopupFlipCard from "./PopupFlipCard";
import {
    initialQuizCards as initialQuizCards,
    initialCards as initialCards,
    programmingMentor as programmingMentor,
    programmingReviewers as programmingReviewers,
    analystMentor as analystMentor,
    analystReviewers as analystReviewers
} from './constants';

//------------------------------------- FLIP-CARD ----------------------------------------
const flipCards = document.querySelectorAll('.flip-card')
const popupFlipCard = new PopupFlipCard();
popupFlipCard.setEventListeners();

if (document.documentElement.clientWidth < 1171) {
    flipCards.forEach((flipcard) => {
        flipcard.addEventListener('click', () => {
            popupFlipCard.open(flipcard.id);
        })
    });
}
//----------------------------------------------------------------------------------------

const burgerButton = document.querySelector('.header__burger');
const burgerMenu = document.querySelector('.header__nav');
const body = document.querySelector('.page');
const header = document.querySelector('.header');

const cardList = document.querySelector('.offers__list');
const menuButtonsList = Array.from(document.querySelectorAll('.offers__menu-input'));
// const offerButtonsList = Array.from(cardList.querySelectorAll('.offers__list-input'));
const cardContainer = document.querySelector('.offers__card');
const prodrammingButton = document.querySelector('#button-programming');
const analystButton = document.querySelector('#button-analyst');
const mentorSwitcButton = document.querySelector('#button-mentor');
const reviewerSwitcButton = document.querySelector('#button-reviewer');
const popupButtonsList = document.querySelectorAll('.card__popup-title-button');
const popupText = document.querySelector('.card__popup-text');
const showMoreButton = document.querySelector('.offers__show-more-button');

const starQuizButton = document.querySelector('.mentor-or-reviewer-column__button');

const [mentorFrontend, mentorCPlusPlus, mentorAlgoritms, mentorAndroid] = programmingMentor;
const [mentorAnalyst, mentorAnalystPlus, mentorAnalystAlgoritm, mentorAnalystThree] = analystMentor;

// Находит и возвращает нажатую кнопку из массива кнопок
const findCheckedButton = buttonsList => {
    const checkedButton = buttonsList.find(item => {
        if (item.checked) {
            return item
        };
    });
};

// const checkedButton = menuButtons.find(item => {
//     if (item.checked) {
//         console.log(item);
//         return item
//     };
// });

// const showPopupText = () => {
//     popupText.closest.cardList.add
// }

showMoreButton.textContent = `Показать все ${programmingMentor.length} предложений`;

const createCardToList = (menuButton, programmsListMentor) => {
    if (menuButton.checked) {
        cardList.textContent = '';
        programmsListMentor.forEach(item => {
            const cardToList = new CardToList(item, '.template-card-to-list');

            cardList.append(cardToList.renderCard());
        });
    };
}

// Поиск карточки, которую нужно отрисовать
const renderDefaultCard = () => {
    const menuButton = findCheckedButton(menuButtonsList);
    const offerButtonsList = Array.from(cardList.querySelectorAll('.offers__list-input'));
    const offerButton = findCheckedButton(offerButtonsList);


}





// Функция создания и добавления в разметку экземпляра класса Card

const createCard = (offerData) => {
    const card = new Card(offerData, '.template-card');

    cardContainer.prepend(card.renderCard());
}





mentorSwitcButton.addEventListener('click', () => {

    createCardToList(prodrammingButton, programmingMentor);

});

reviewerSwitcButton.addEventListener('click', () => {

    createCardToList(prodrammingButton, programmingReviewers);
});




analystButton.addEventListener('click', () => {
    createCard(mentorAnalystThree);
    showMoreButton.classList.remove('offers__show-more-button_hide');

    mentorSwitcButton.checked = true;
    createCardToList(analystButton, analystMentor);

    mentorSwitcButton.addEventListener('click', () => {
        showMoreButton.classList.remove('offers__show-more-button_hide');
        createCardToList(analystButton, analystMentor);
    });

    reviewerSwitcButton.addEventListener('click', () => {
        showMoreButton.classList.remove('offers__show-more-button_hide');
        createCardToList(analystButton, analystReviewers);
    });
});



prodrammingButton.addEventListener('click', () => {
    createCard(mentorAndroid);
    showMoreButton.classList.remove('offers__show-more-button_hide');
    //Отрисовывается дефолтный массив
    mentorSwitcButton.checked = true;
    createCardToList(prodrammingButton, programmingMentor);

    //Запускается функция, которая навешивает обработчики событий на свитчи
    mentorSwitcButton.addEventListener('click', () => {
        createCardToList(prodrammingButton, programmingMentor);
    });

    reviewerSwitcButton.addEventListener('click', () => {
        createCardToList(prodrammingButton, programmingReviewers);
    });

    console.log(cardList);

});

// popupButtonsList.forEach(item => {
//     item.addEventListener('click', () => {
//         console.log(document.querySelector('.card__popup-text').classList);
//         document.querySelector('.card__popup-text').classList.toggle('card__popup-text_active');
//     });
// });

showMoreButton.addEventListener('click', () => {
    console.log(cardList);
    cardList.classList.toggle('offers__list_active');
    showMoreButton.classList.add('offers__show-more-button_hide');
});


createCardToList(prodrammingButton, programmingMentor);
renderDefaultCard();

createCard(mentorAndroid);


document.querySelectorAll("a[href^='#']").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        let href = this.getAttribute("href").substring(1);
        const scrollTarget = document.getElementById(href);
        const topOffset = document.querySelector(".header").offsetHeight;
        // const topOffset = 0; // если не нужен отступ сверху
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: "smooth"
        });
    });
});


burgerButton.addEventListener('click', () => {

    burgerButton.classList.toggle('active');
    burgerMenu.classList.toggle('active');
    body.classList.toggle('lock');
    // header.classList.toggle('active');

});


// ----------------------QUIZ------------------------------------
const [quetion1, quetion2, quetion3, quetion4] = initialQuizCards;

const createQuizCard = (quizData) => {
    const quizCard = new QuizCard(quizData, '.template-quiz');

    document.querySelector('.quiz-container').append(quizCard.renderCard());
}

// Вызываем квиз
starQuizButton.addEventListener('click', () => {
    starQuizButton.disabled = true;
    createQuizCard(quetion1);


})

// ----------------------QUIZ------------------------------------
