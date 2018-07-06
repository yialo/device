var linkFeedback = document.querySelector('.feedback-link');
var modalFeedback = document.querySelector('.modal-feedback');
var linkMap = document.querySelector('.map-link');
var modalMap = document.querySelector('.modal-map');
var modalFeedbackClose = document.querySelector('.modal-feedback .modal-close-btn');
var modalMapClose = document.querySelector('.modal-map .modal-close-btn');
var modalOverlay = document.querySelector('.modal-overlay');
var modalUserName = modalFeedback.querySelector('[name="fullname"]');

linkFeedback.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalFeedback.classList.add('show');
  modalOverlay.classList.add('show');
  modalUserName.focus();
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
