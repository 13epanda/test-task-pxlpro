import {sendData} from './api.js';
import {initPhoneMask, initJsPhoneMask} from './phone-mask.js';
import {initTextArea} from './input-textares.js';
import {initRange, resetRange} from './input-range.js';
import {modals} from './../init-modals.js';
import {initSelect, resetSelect} from './select.js';


const modal = document.querySelector('.modal-registration');
const formRegistration = modal.querySelector('.modal-registrationn__form');
const select = formRegistration.querySelector('.input-select__select');

const clearForm = () => {
    formRegistration.reset();
    resetRange();
    resetSelect();
    modal.querySelector('.modal-registration__button').setAttribute("disabled", "");
};

const checkValidity = (event) => {
    const formNode = event.target.form;
    let isValid = formNode.checkValidity();
    formNode.querySelector('button').disabled = !isValid
}

const toggleLoader = () => {
    const loader = formRegistration.querySelector('.loader');
    const submitButton = formRegistration.querySelector('.modal-registration__button');
    submitButton.classList.toggle('visually-hidden');
    loader.classList.toggle('visually-hidden');
}

const serializeForm = (formNode) => {
    const { elements } = formNode;

    const data = new FormData();

    Array.from(elements)
        .filter((item) => !!item.name)
        .map((element) => {
            const { name, value } = element
            data.append(name, value);
    });
    console.log(Array.from(data.entries()))
    return data;    
}

const onFormSuccessSent = () => {
    clearForm();
    modals.close();
    modals.open('modal-registration-successful');
}

const onFormErrorSent = () => {
    alert("Возникла ошибка при попытки отправки!");
}


const handleFormSubmit = (event) => {
    event.preventDefault();

    serializeForm(formRegistration);
    toggleLoader();
    /*
    sendData(
        onFormSuccessSent,
        onFormErrorSent,
        serializeForm(formRegistration),
    );
    */
    setTimeout(toggleLoader, 1000);
    setTimeout (onFormSuccessSent , 1000);
}

const initForm = () => {
    initSelect();
    initTextArea();
    initPhoneMask();
    initJsPhoneMask();
    initRange();
    formRegistration.addEventListener('change', checkValidity);
    formRegistration.addEventListener('submit', handleFormSubmit);
}

export {initForm};