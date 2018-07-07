var linkFeedback = document.querySelector('.feedback-link');
var modalFeedback = document.querySelector('.modal-feedback');
var modalFullName = modalFeedback.querySelector('.feedback-fullname');
var modalEmail = modalFeedback.querySelector('.feedback-email');
var modalMessage = modalFeedback.querySelector('.feedback-textarea');
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
  modalFeedback.classList.remove('modal-error');
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
  if (!modalFullName.value || !modalEmail.value || !modalMessage.value) {
    evt.preventDefault();
    modalFeedback.classList.remove('modal-error');
    modalFeedback.offsetWidth = modalFeedback.offsetWidth;
    modalFeedback.classList.add('modal-error');
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
