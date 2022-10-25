const openPopupButton = document.querySelector(".button-open");
const closePopupButton = document.querySelector(".modal-close-button");
const popup = document.querySelector(".modal-container");

openPopupButton.addEventListener("click", function () {
  popup.classList.remove("visually-hidden");
});

closePopupButton.addEventListener("click", function () {
  popup.classList.add("visually-hidden");
})

document.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    popup.classList.add("visually-hidden");
  }
});
