const colorButton = document.querySelector(".buttons__color-btn");
const page = document.querySelector(".page");
const colorFormElement = page.querySelector("#color-modal");
const colorSubmitButton = page.querySelector(".modal__submit-btn");
const colorInput = page.querySelector("#color");

const renameButton = page.querySelector(".buttons__name-btn");
const renameFormElement = page.querySelector("#rename-modal");
const headerTitleElement = page.querySelector(".header__title");
const nameInput = page.querySelector("#rename");

const flipButton = page.querySelector(".buttons__flip-btn");

const hideButton = page.querySelector(".buttons__hide-btn");

const resetButton = page.querySelector(".buttons__reset-btn");

const buttonsToHide = [colorButton, renameButton, flipButton, resetButton];

const modals = [colorFormElement, renameFormElement];

function handleOpenModal(modal) {
  modals.forEach((modal) => {
    if (modal.classList[1] === "modal_opened") {
      modal.classList.remove("modal_opened");
    }
  });
  modal.classList.add("modal_opened");
  if (modal === colorFormElement) {
    colorInput.value = "";
  }
  if (modal === renameFormElement) {
    nameInput.value = "";
  }
}

function handleCloseModal(modal) {
  modal.classList.remove("modal_opened");
}

function handleSubmitColor(evt) {
  page.setAttribute("style", `background-color: ${colorInput.value}`);
  handleCloseModal(colorFormElement);
  evt.preventDefault();
}

function handleSubmitName(evt) {
  if (nameInput.value) {
    headerTitleElement.textContent = nameInput.value;
  }
  handleCloseModal(renameFormElement);
  evt.preventDefault();
}

function handleHideButtons() {
  buttonsToHide.forEach((button) => {
    button.classList.toggle("hide");
  });
  if (colorButton.classList[1] === "hide") {
    hideButton.textContent = "UNHIDE";
  } else {
    hideButton.textContent = "HIDE";
  }
}

function handleReset() {
  headerTitleElement.textContent = "WELCOME TO BUTTONLAND";
  page.classList.remove("page_flip");
  page.setAttribute("style", `background-color: ${"default"}`);
  modals.forEach((modal) => {
    modal.classList.remove("modal_opened");
  });
}

colorButton.addEventListener("click", () => {
  handleOpenModal(colorFormElement);
});

colorFormElement.addEventListener("submit", handleSubmitColor);

renameButton.addEventListener("click", () => {
  handleOpenModal(renameFormElement);
});

renameFormElement.addEventListener("submit", handleSubmitName);

flipButton.addEventListener("click", () => {
  page.classList.toggle("page_flip");
});

hideButton.addEventListener("click", handleHideButtons);

resetButton.addEventListener("click", handleReset);
