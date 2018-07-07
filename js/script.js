var linkFeedback = document.querySelector('.feedback-link');
var modalFeedback = document.querySelector('.modal-feedback');
var modalFullName = modalFeedback.querySelector('.feedback-fullname');
var modalEmail = modalFeedback.querySelector('.feedback-email');
var modalForm = modalFeedback.querySelector('.feedback-form');
var modalFeedbackClose = document.querySelector('.modal-feedback .modal-close-btn');
var linkMap = document.querySelector('.map-link');
var modalMap = document.querySelector('.modal-map');
var modalMapClose = document.querySelector('.modal-map .modal-close-btn');
var modalOverlay = document.querySelector('.modal-overlay');

linkFeedback.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalFeedback.classList.add('show');
  modalOverlay.classList.add('show');
  modalFullName.focus();
});

modalFeedbackClose.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalFeedback.classList.remove('show');
  modalOverlay.classList.remove('show');
});

linkMap.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalMap.classList.add('show');
  modalOverlay.classList.add('show');
});

modalMapClose.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalMap.classList.remove('show');
  modalOverlay.classList.remove('show');
});

modalForm.addEventListener('submit', function(evt) {
  if (!modalFullName.value || !modalEmail.value) {
    evt.preventDefault();
    console.log('Пожалуйста, укажите имя и email');
  }
});

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    if (modalOverlay.classList.contains('show')) {
      evt.preventDefault();
      modalFeedback.classList.remove('show');
      modalMap.classList.remove('show');
      modalOverlay.classList.remove('show');
    }
  }
});
