const page = document.querySelector(".page");

// GALLERY
const gallery = page.querySelector(".gallery");
const buttonlandButton = gallery.querySelector("#buttonland-btn");

function handleOpenApp(app) {
  app.classList.add("app_open");
  gallery.classList.remove("gallery_open");
}

function handleCloseApp(app) {
  app.classList.remove("app_open");
  gallery.classList.add("gallery_open");
}

buttonlandButton.addEventListener("click", () => {
  handleOpenApp(buttonlandApp);
});

// BUTTONLAND APP
const buttonlandApp = page.querySelector(".buttonland");
const colorFormElement = buttonlandApp.querySelector("#color-modal");
const colorSubmitButton = buttonlandApp.querySelector(".modal__submit-btn");
const colorInput = buttonlandApp.querySelector("#color");
const renameFormElement = buttonlandApp.querySelector("#rename-modal");
const headerTitleElement = buttonlandApp.querySelector(".header__title");
const nameInput = buttonlandApp.querySelector("#rename");

const renameButton = buttonlandApp.querySelector("#rename-btn");

const colorButton = buttonlandApp.querySelector("#color-btn");

const flipButton = buttonlandApp.querySelector("#flip-btn");

const hideButton = buttonlandApp.querySelector("#hide-btn");

const resetButton = buttonlandApp.querySelector("#reset-btn");

const closeButton = buttonlandApp.querySelector("#close-btn");

const buttonsToHide = [
  colorButton,
  renameButton,
  flipButton,
  resetButton,
  closeButton,
];

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
  buttonlandApp.setAttribute("style", `background-color: ${colorInput.value}`);
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
  buttonlandApp.classList.remove("buttonland_flip");
  buttonlandApp.setAttribute("style", `background-color: ${"default"}`);
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
  buttonlandApp.classList.toggle("buttonland_flip");
});

hideButton.addEventListener("click", handleHideButtons);

resetButton.addEventListener("click", handleReset);

closeButton.addEventListener("click", () => {
  handleCloseApp(buttonlandApp);
  handleReset();
});
