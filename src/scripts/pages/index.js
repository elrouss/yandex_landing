import '../../pages/index.css';

import Card from "./Card.js";
import CardToList from "./CardToList.js";

const initialCards = [
    {
        faculty: 'prog',
        job: 'mentor',
        id: 'mentor-front',
        name: 'Наставник на курс «Мидл фронтенд-разработчик»',
        salary: 'от 35 000₽',
        whatTasks: 'Что делает наставник?',
        tasks: 'Наставник помогает студентам учиться: отвечает на вопросы и помогает с трудностями. Каждый наставник курирует группу из 50 студентов: общается с ними в Slack, проводит групповые звонки на протяжении 4 месяцев обучения и постоянно улучшает образовательный опыт',
    },
    {
        faculty: 'prog',
        job: 'mentor',
        id: 'mentor-cPlus',
        name: 'Наставник на курс «Разработчик C++»',
        salary: 'от 35 000₽',
        whatTasks: 'Что делает наставник?',
        tasks: 'Наставник помогает студентам учиться: отвечает на вопросы и помогает с трудностями. Каждый наставник курирует группу из 50 студентов: общается с ними в Slack, проводит групповые звонки на протяжении 4 месяцев обучения и постоянно улучшает образовательный опыт',
    },
    {
        faculty: 'prog',
        job: 'mentor',
        id: 'mentor-algoritms',
        name: 'Наставник на курс «Алгоритмы для разработчиков»',
        salary: 'от 35 000₽',
        whatTasks: 'Что делает наставник?',
        tasks: 'Наставник помогает студентам учиться: отвечает на вопросы и помогает с трудностями. Каждый наставник курирует группу из 50 студентов: общается с ними в Slack, проводит групповые звонки на протяжении 4 месяцев обучения и постоянно улучшает образовательный опыт',
    },
    {
        faculty: 'prog',
        job: 'mentor',
        id: 'mentor-android',
        name: 'Наставник на курс «Android-разработчик»',
        salary: 'от 35 000₽',
        whatTasks: 'Что делает наставник?',
        tasks: 'Наставник помогает студентам учиться: отвечает на вопросы и помогает с трудностями. Каждый наставник курирует группу из 50 студентов: общается с ними в Slack, проводит групповые звонки на протяжении 4 месяцев обучения и постоянно улучшает образовательный опыт',
    },
    {
        faculty: 'prog',
        job: 'reviewer',
        id: 'reviewer-front',
        name: 'Ревьюер на курс «Мидл фронтенд-разработчик»',
        salary: 'от 35 000₽',
        whatTasks: 'Что делает наставник?',
        tasks: 'Наставник помогает студентам учиться: отвечает на вопросы и помогает с трудностями. Каждый наставник курирует группу из 50 студентов: общается с ними в Slack, проводит групповые звонки на протяжении 4 месяцев обучения и постоянно улучшает образовательный опыт',
    },
    {
        faculty: 'prog',
        job: 'reviewer',
        id: 'reviewer-cPlus',
        name: 'Ревьюер на курс «Разработчик C++»',
        salary: 'от 35 000₽',
        whatTasks: 'Что делает наставник?',
        tasks: 'Наставник помогает студентам учиться: отвечает на вопросы и помогает с трудностями. Каждый наставник курирует группу из 50 студентов: общается с ними в Slack, проводит групповые звонки на протяжении 4 месяцев обучения и постоянно улучшает образовательный опыт',
    },
    {
        faculty: 'prog',
        job: 'reviewer',
        id: 'reviewer-algoritms',
        name: 'Ревьюер на курс «Алгоритмы для разработчиков»',
        salary: 'от 35 000₽',
        whatTasks: 'Что делает наставник?',
        tasks: 'Наставник помогает студентам учиться: отвечает на вопросы и помогает с трудностями. Каждый наставник курирует группу из 50 студентов: общается с ними в Slack, проводит групповые звонки на протяжении 4 месяцев обучения и постоянно улучшает образовательный опыт',
    },
    {
        faculty: 'prog',
        job: 'reviewer',
        id: 'reviewer-android',
        name: 'Ревьюер на курс «Мидл фронтенд-разработчик»',
        salary: 'от 35 000₽',
        whatTasks: 'Что делает наставник?',
        tasks: 'Наставник помогает студентам учиться: отвечает на вопросы и помогает с трудностями. Каждый наставник курирует группу из 50 студентов: общается с ними в Slack, проводит групповые звонки на протяжении 4 месяцев обучения и постоянно улучшает образовательный опыт',
    },
    {
        faculty: 'analyst',
        job: 'mentor',
        id: 'mentor-analyst',
        name: 'Наставник на курс «Аналитик данных»',
        salary: 'от 35 000₽',
        whatTasks: 'Что делает наставник?',
        tasks: 'Наставник помогает студентам учиться: отвечает на вопросы и помогает с трудностями. Каждый наставник курирует группу из 50 студентов: общается с ними в Slack, проводит групповые звонки на протяжении 4 месяцев обучения и постоянно улучшает образовательный опыт',
    },
    {
        faculty: 'analyst',
        job: 'mentor',
        id: 'mentor-analystPlus',
        name: 'Наставник на курс «Аналитик данных плюс»',
        salary: 'от 35 000₽',
        whatTasks: 'Что делает наставник?',
        tasks: 'Наставник помогает студентам учиться: отвечает на вопросы и помогает с трудностями. Каждый наставник курирует группу из 50 студентов: общается с ними в Slack, проводит групповые звонки на протяжении 4 месяцев обучения и постоянно улучшает образовательный опыт',
    },
    {
        faculty: 'analyst',
        job: 'mentor',
        id: 'mentor-analystAlgoritm',
        name: 'Наставник на курс «Алгоритмы для аналитиков»',
        salary: 'от 35 000₽',
        whatTasks: 'Что делает наставник?',
        tasks: 'Наставник помогает студентам учиться: отвечает на вопросы и помогает с трудностями. Каждый наставник курирует группу из 50 студентов: общается с ними в Slack, проводит групповые звонки на протяжении 4 месяцев обучения и постоянно улучшает образовательный опыт',
    },
    {
        faculty: 'analyst',
        job: 'mentor',
        id: 'mentor-analyst3000',
        name: 'Наставник на курс «Аналитик данных 3000»',
        salary: 'от 35 000₽',
        whatTasks: 'Что делает наставник?',
        tasks: 'Наставник помогает студентам учиться: отвечает на вопросы и помогает с трудностями. Каждый наставник курирует группу из 50 студентов: общается с ними в Slack, проводит групповые звонки на протяжении 4 месяцев обучения и постоянно улучшает образовательный опыт',
    },
    {
        faculty: 'analyst',
        job: 'reviewer',
        id: 'reviewer-analyst',
        name: 'Ревьюер на курс «Аналитик данных»',
        salary: 'от 35 000₽',
        whatTasks: 'Что делает наставник?',
        tasks: 'Ревьюер помогает студентам учиться: отвечает на вопросы и помогает с трудностями. Каждый наставник курирует группу из 50 студентов: общается с ними в Slack, проводит групповые звонки на протяжении 4 месяцев обучения и постоянно улучшает образовательный опыт',
    },
    {
        faculty: 'analyst',
        job: 'reviewer',
        id: 'reviewer-analystPlus',
        name: 'Ревьюер на курс «Аналитик данных плюс»',
        salary: 'от 35 000₽',
        whatTasks: 'Что делает наставник?',
        tasks: 'Ревьюер помогает студентам учиться: отвечает на вопросы и помогает с трудностями. Каждый наставник курирует группу из 50 студентов: общается с ними в Slack, проводит групповые звонки на протяжении 4 месяцев обучения и постоянно улучшает образовательный опыт',
    },
    {
        faculty: 'analyst',
        job: 'reviewer',
        id: 'reviewer-analystAlgoritm',
        name: 'Ревьюер на курс «Алгоритмы для аналитиков»',
        salary: 'от 35 000₽',
        whatTasks: 'Что делает наставник?',
        tasks: 'Ревьюер помогает студентам учиться: отвечает на вопросы и помогает с трудностями. Каждый наставник курирует группу из 50 студентов: общается с ними в Slack, проводит групповые звонки на протяжении 4 месяцев обучения и постоянно улучшает образовательный опыт',
    },
    {
        faculty: 'analyst',
        job: 'reviewer',
        id: 'reviewer-analyst3000',
        name: 'Ревьюер на курс «Аналитик данных 3000»',
        salary: 'от 35 000₽',
        whatTasks: 'Что делает наставник?',
        tasks: 'Ревьюер помогает студентам учиться: отвечает на вопросы и помогает с трудностями. Каждый наставник курирует группу из 50 студентов: общается с ними в Slack, проводит групповые звонки на протяжении 4 месяцев обучения и постоянно улучшает образовательный опыт',
    }
];
const programmingMentor = [
    {
        faculty: 'prog',
        job: 'mentor',
        id: 'mentor-front',
        name: 'Наставник на курс «Мидл фронтенд-разработчик»',
        salary: 'от 35 000₽',
        whatTasks: 'Что делает наставник?',
        tasks: 'Наставник помогает студентам учиться: отвечает на вопросы и помогает с трудностями. Каждый наставник курирует группу из 50 студентов: общается с ними в Slack, проводит групповые звонки на протяжении 4 месяцев обучения и постоянно улучшает образовательный опыт',
    },
    {
        faculty: 'prog',
        job: 'mentor',
        id: 'mentor-cPlus',
        name: 'Наставник на курс «Разработчик C++»',
        salary: 'от 35 000₽',
        whatTasks: 'Что делает наставник?',
        tasks: 'Наставник помогает студентам учиться: отвечает на вопросы и помогает с трудностями. Каждый наставник курирует группу из 50 студентов: общается с ними в Slack, проводит групповые звонки на протяжении 4 месяцев обучения и постоянно улучшает образовательный опыт',
    },
    {
        faculty: 'prog',
        job: 'mentor',
        id: 'mentor-algoritms',
        name: 'Наставник на курс «Алгоритмы для разработчиков»',
        salary: 'от 35 000₽',
        whatTasks: 'Что делает наставник?',
        tasks: 'Наставник помогает студентам учиться: отвечает на вопросы и помогает с трудностями. Каждый наставник курирует группу из 50 студентов: общается с ними в Slack, проводит групповые звонки на протяжении 4 месяцев обучения и постоянно улучшает образовательный опыт',
    },
    {
        faculty: 'prog',
        job: 'mentor',
        id: 'mentor-android',
        name: 'Наставник на курс «Android-разработчик»',
        salary: 'от 35 000₽',
        whatTasks: 'Что делает наставник?',
        tasks: 'Наставник помогает студентам учиться: отвечает на вопросы и помогает с трудностями. Каждый наставник курирует группу из 50 студентов: общается с ними в Slack, проводит групповые звонки на протяжении 4 месяцев обучения и постоянно улучшает образовательный опыт',
    },
    {
        faculty: 'prog',
        job: 'mentor',
        id: 'mentor-front',
        name: 'Наставник на курс «Мидл фронтенд-разработчик»',
        salary: 'от 35 000₽',
        whatTasks: 'Что делает наставник?',
        tasks: 'Наставник помогает студентам учиться: отвечает на вопросы и помогает с трудностями. Каждый наставник курирует группу из 50 студентов: общается с ними в Slack, проводит групповые звонки на протяжении 4 месяцев обучения и постоянно улучшает образовательный опыт',
    },
    {
        faculty: 'prog',
        job: 'mentor',
        id: 'mentor-cPlus',
        name: 'Наставник на курс «Разработчик C++»',
        salary: 'от 35 000₽',
        whatTasks: 'Что делает наставник?',
        tasks: 'Наставник помогает студентам учиться: отвечает на вопросы и помогает с трудностями. Каждый наставник курирует группу из 50 студентов: общается с ними в Slack, проводит групповые звонки на протяжении 4 месяцев обучения и постоянно улучшает образовательный опыт',
    },
    {
        faculty: 'prog',
        job: 'mentor',
        id: 'mentor-algoritms',
        name: 'Наставник на курс «Алгоритмы для разработчиков»',
        salary: 'от 35 000₽',
        whatTasks: 'Что делает наставник?',
        tasks: 'Наставник помогает студентам учиться: отвечает на вопросы и помогает с трудностями. Каждый наставник курирует группу из 50 студентов: общается с ними в Slack, проводит групповые звонки на протяжении 4 месяцев обучения и постоянно улучшает образовательный опыт',
    },
    {
        faculty: 'prog',
        job: 'mentor',
        id: 'mentor-android',
        name: 'Наставник на курс «Android-разработчик»',
        salary: 'от 35 000₽',
        whatTasks: 'Что делает наставник?',
        tasks: 'Наставник помогает студентам учиться: отвечает на вопросы и помогает с трудностями. Каждый наставник курирует группу из 50 студентов: общается с ними в Slack, проводит групповые звонки на протяжении 4 месяцев обучения и постоянно улучшает образовательный опыт',
    }
];
const programmingReviewers = [
    {
        faculty: 'prog',
        job: 'reviewer',
        id: 'reviewer-front',
        name: 'Ревьюер на курс «Мидл фронтенд-разработчик»',
        salary: 'от 35 000₽',
        whatTasks: 'Что делает наставник?',
        tasks: 'Наставник помогает студентам учиться: отвечает на вопросы и помогает с трудностями. Каждый наставник курирует группу из 50 студентов: общается с ними в Slack, проводит групповые звонки на протяжении 4 месяцев обучения и постоянно улучшает образовательный опыт',
    },
    {
        faculty: 'prog',
        job: 'reviewer',
        id: 'reviewer-cPlus',
        name: 'Ревьюер на курс «Разработчик C++»',
        salary: 'от 35 000₽',
        whatTasks: 'Что делает наставник?',
        tasks: 'Наставник помогает студентам учиться: отвечает на вопросы и помогает с трудностями. Каждый наставник курирует группу из 50 студентов: общается с ними в Slack, проводит групповые звонки на протяжении 4 месяцев обучения и постоянно улучшает образовательный опыт',
    },
    {
        faculty: 'prog',
        job: 'reviewer',
        id: 'reviewer-algoritms',
        name: 'Ревьюер на курс «Алгоритмы для разработчиков»',
        salary: 'от 35 000₽',
        whatTasks: 'Что делает наставник?',
        tasks: 'Наставник помогает студентам учиться: отвечает на вопросы и помогает с трудностями. Каждый наставник курирует группу из 50 студентов: общается с ними в Slack, проводит групповые звонки на протяжении 4 месяцев обучения и постоянно улучшает образовательный опыт',
    },
    {
        faculty: 'prog',
        job: 'reviewer',
        id: 'reviewer-android',
        name: 'Ревьюер на курс «Мидл фронтенд-разработчик»',
        salary: 'от 35 000₽',
        whatTasks: 'Что делает наставник?',
        tasks: 'Наставник помогает студентам учиться: отвечает на вопросы и помогает с трудностями. Каждый наставник курирует группу из 50 студентов: общается с ними в Slack, проводит групповые звонки на протяжении 4 месяцев обучения и постоянно улучшает образовательный опыт',
    }
];
const analystMentor = [
    {
        faculty: 'analyst',
        job: 'mentor',
        id: 'mentor-analyst',
        name: 'Наставник на курс «Аналитик данных»',
        salary: 'от 35 000₽',
        whatTasks: 'Что делает наставник?',
        tasks: 'Наставник помогает студентам учиться: отвечает на вопросы и помогает с трудностями. Каждый наставник курирует группу из 50 студентов: общается с ними в Slack, проводит групповые звонки на протяжении 4 месяцев обучения и постоянно улучшает образовательный опыт',
    },
    {
        faculty: 'analyst',
        job: 'mentor',
        id: 'mentor-analystPlus',
        name: 'Наставник на курс «Аналитик данных плюс»',
        salary: 'от 35 000₽',
        whatTasks: 'Что делает наставник?',
        tasks: 'Наставник помогает студентам учиться: отвечает на вопросы и помогает с трудностями. Каждый наставник курирует группу из 50 студентов: общается с ними в Slack, проводит групповые звонки на протяжении 4 месяцев обучения и постоянно улучшает образовательный опыт',
    },
    {
        faculty: 'analyst',
        job: 'mentor',
        id: 'mentor-analystAlgoritm',
        name: 'Наставник на курс «Алгоритмы для аналитиков»',
        salary: 'от 35 000₽',
        whatTasks: 'Что делает наставник?',
        tasks: 'Наставник помогает студентам учиться: отвечает на вопросы и помогает с трудностями. Каждый наставник курирует группу из 50 студентов: общается с ними в Slack, проводит групповые звонки на протяжении 4 месяцев обучения и постоянно улучшает образовательный опыт',
    },
    {
        faculty: 'analyst',
        job: 'mentor',
        id: 'mentor-analyst3000',
        name: 'Наставник на курс «Аналитик данных 3000»',
        salary: 'от 35 000₽',
        whatTasks: 'Что делает наставник?',
        tasks: 'Наставник помогает студентам учиться: отвечает на вопросы и помогает с трудностями. Каждый наставник курирует группу из 50 студентов: общается с ними в Slack, проводит групповые звонки на протяжении 4 месяцев обучения и постоянно улучшает образовательный опыт',
    }
];
const analystReviewers = [
    {
        faculty: 'analyst',
        job: 'reviewer',
        id: 'reviewer-analyst',
        name: 'Ревьюер на курс «Аналитик данных»',
        salary: 'от 35 000₽',
        whatTasks: 'Что делает наставник?',
        tasks: 'Ревьюер помогает студентам учиться: отвечает на вопросы и помогает с трудностями. Каждый наставник курирует группу из 50 студентов: общается с ними в Slack, проводит групповые звонки на протяжении 4 месяцев обучения и постоянно улучшает образовательный опыт',
    },
    {
        faculty: 'analyst',
        job: 'reviewer',
        id: 'reviewer-analystPlus',
        name: 'Ревьюер на курс «Аналитик данных плюс»',
        salary: 'от 35 000₽',
        whatTasks: 'Что делает наставник?',
        tasks: 'Ревьюер помогает студентам учиться: отвечает на вопросы и помогает с трудностями. Каждый наставник курирует группу из 50 студентов: общается с ними в Slack, проводит групповые звонки на протяжении 4 месяцев обучения и постоянно улучшает образовательный опыт',
    },
    {
        faculty: 'analyst',
        job: 'reviewer',
        id: 'reviewer-analystAlgoritm',
        name: 'Ревьюер на курс «Алгоритмы для аналитиков»',
        salary: 'от 35 000₽',
        whatTasks: 'Что делает наставник?',
        tasks: 'Ревьюер помогает студентам учиться: отвечает на вопросы и помогает с трудностями. Каждый наставник курирует группу из 50 студентов: общается с ними в Slack, проводит групповые звонки на протяжении 4 месяцев обучения и постоянно улучшает образовательный опыт',
    },
    {
        faculty: 'analyst',
        job: 'reviewer',
        id: 'reviewer-analyst3000',
        name: 'Ревьюер на курс «Аналитик данных 3000»',
        salary: 'от 35 000₽',
        whatTasks: 'Что делает наставник?',
        tasks: 'Ревьюер помогает студентам учиться: отвечает на вопросы и помогает с трудностями. Каждый наставник курирует группу из 50 студентов: общается с ними в Slack, проводит групповые звонки на протяжении 4 месяцев обучения и постоянно улучшает образовательный опыт',
    }
];


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


const [mentorFrontend, mentorCPlusPlus, mentorAlgoritms, mentorAndroid] = programmingMentor;


// Находит и возвращает нажатую кнопку из массива кнопок
const findCheckedButton = buttonsList => {
    const checkedButton = buttonsList.find(item => {
        if (item.checked) {
            return item
        };
    });

    console.log(checkedButton);
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






const createCardToList = (menuButton, programmsListMentor) => {
    if (menuButton.checked) {
        cardList.textContent = '';
        programmsListMentor.forEach(item => {
            const cardToList = new CardToList (item, '.template-card-to-list');

            cardList.prepend(cardToList.renderCard());
        });
    };
}


// Поиск карточки, которую нужно отрисовать
const renderDefaultCard = () => {
    const menuButton = findCheckedButton(menuButtonsList);
    const offerButtonsList = Array.from(cardList.querySelectorAll('.offers__list-input'));
    const offerButton = findCheckedButton(offerButtonsList);

    console.log(findCheckedButton(menuButtonsList));


}





// Функция создания и добавления в разметку экземпляра класса Card
const createCard = () => {
    const card = new Card (mentorFrontend, '.template-card');

    cardContainer.prepend(card.renderCard());
}





mentorSwitcButton.addEventListener('click', () => {

    createCardToList(prodrammingButton, programmingMentor);

});

reviewerSwitcButton.addEventListener('click', () => {

    createCardToList(prodrammingButton, programmingReviewers);
});




analystButton.addEventListener('click', () => {

    mentorSwitcButton.checked = true;
    createCardToList(analystButton, analystMentor);

    mentorSwitcButton.addEventListener('click', () => {
        createCardToList(analystButton, analystMentor);
    });

    reviewerSwitcButton.addEventListener('click', () => {
        createCardToList(analystButton, analystReviewers);
    });
});



prodrammingButton.addEventListener('click', () => {
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

popupButtonsList.forEach(item => {
    item.addEventListener('click', () => {
        console.log(document.querySelector('.card__popup-text').classList);
        document.querySelector('.card__popup-text').classList.toggle('card__popup-text_active');
    });
});

showMoreButton.addEventListener('click', () => {
    console.log(cardList);
    cardList.classList.toggle('offers__list_active');
});


createCardToList(prodrammingButton, programmingMentor);
renderDefaultCard();

createCard();



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


