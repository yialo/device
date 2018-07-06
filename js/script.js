var linkFeedback = document.querySelector('.feedback-link');
var modalFeedback = document.querySelector('.modal-feedback');
var linkMap = document.querySelector('.map-link');
var modalMap = document.querySelector('.modal-map');
var modalFeedbackClose = document.querySelector('.modal-feedback .modal-close-btn');
var modalMapClose = document.querySelector('.modal-map .modal-close-btn');

linkFeedback.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalFeedback.classList.add('modal-show');
});

modalFeedbackClose.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalFeedback.classList.remove('modal-show');
});

linkMap.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalMap.classList.add('modal-show');
});

modalMapClose.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalMap.classList.remove('modal-show');
});
