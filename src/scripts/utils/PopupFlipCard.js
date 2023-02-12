import { flipCardsData as flipCardsData } from '../utils/constants';

export default class PopupFlipCard {
    constructor() {
        this._popup = document.querySelector('.popup-flip-cards');
        this._flipCards = document.querySelectorAll('.flip-card');
        this._popupHeader = this._popup.querySelector('.popup-about__header');
        this._popupText = this._popup.querySelector('.popup-about__text');
        this._popupCloseButton = this._popup.querySelector('.popup-about__close-button');
        this._popupActionButton = this._popup.querySelector('.popup-about__button');
    }
    open = (flipcardId) => {
        const flipCard = flipCardsData.find(flipCard => flipCard.name === flipcardId);
        this._popupHeader.textContent = flipCard.header;
        this._popupText.textContent = flipCard.text;
        document.addEventListener('keydown', this._handleEscClose);
        this._popup.classList.add('popup_opened');
    }
    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }
    _handleEscClose = (e) => {
        if (e.key === 'Escape') {
            this.close();
        }
    }
    setEventListeners() {
        this._popup.addEventListener('mousedown', (evt) => {
            if (evt.target === evt.currentTarget || evt.target.classList.contains('popup-about__close-button')) {
                this.close();
            };
        }); // обработчик на кнопки закрытия поп-ап и темной области поп-ап
        this._popupActionButton.addEventListener('click', () => {
            location.href='#offers';
            this.close();
        });
    }
}
