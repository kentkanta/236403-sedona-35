const openPopupButton = document.querySelector(".button-open");
const closePopupButton = document.querySelector(".modal-close-button");
const popup = document.querySelector(".modal-container");

openPopupButton.addEventListener("click", function () {
  popup.classList.remove("modal-closed");
});

closePopupButton.addEventListener("click", function () {
  popup.classList.add("modal-closed");
})

document.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    popup.classList.add("modal-closed");
  }
});
