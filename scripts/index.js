import Card from "./components/Card.js";
import Section from "./components/Section.js";
import Popup from "./components/Popup.js";
import PopupWithImage from "./components/PopupWithImage.js";
import PopupWithForm from "./components/PopupWithForm.js";
import UserInfo from "./components/UserInfo.js";

// ======================================================
// 1. Datos iniciales
// ======================================================

const initialCards = [
{ link: "https://images.unsplash.com/photo-1506744038136-46273834b3fb", name: "Roma" },
{ link: "https://images.unsplash.com/photo-1555993539-1732b0258235", name: "Atenas" },
{ link: "https://images.unsplash.com/photo-1615811648503-479d06197ff3", name: "Petra" },
{ link: "https://plus.unsplash.com/premium_photo-1664304492320-8359efcaad38", name: "China" },
{ link: "https://images.unsplash.com/photo-1582554457597-e07633fba044", name: "Maya" },
{ link: "https://images.unsplash.com/photo-1720774401433-75815936bd4e", name: "Atenas" }
];

// ======================================================
// 2. Instancia de UserInfo (perfil del usuario)
// ======================================================

const userInfo = new UserInfo({
  nameSelector: ".profile__title",
  jobSelector: ".profile__description"
});

// ======================================================
// 3. Popup para editar perfil
// ======================================================

const popupEditProfile = new PopupWithForm(
  "#edit-popup",
  (formData) => {
    userInfo.setUserInfo({
      name: formData.name,
      job: formData.description
    });
    popupEditProfile.close();
  }
);

popupEditProfile.setEventListeners();

// Botón abrir popup editar perfil
document.querySelector(".profile__edit-button").addEventListener("click", () => {
  const currentUser = userInfo.getUserInfo();
  document.querySelector(".popup__input_type_name").value = currentUser.name;
  document.querySelector(".popup__input_type_description").value = currentUser.job;
  popupEditProfile.open();
});

// ======================================================
// 4. Popup de imagen grande
// ======================================================

const popupWithImage = new PopupWithImage("#image-popup");
popupWithImage.setEventListeners();

// ======================================================
// 5. Función para crear tarjetas
// ======================================================

function createCard(item) {
  const card = new Card(
    {
      name: item.name,
      link: item.link,
      handleCardClick: () => popupWithImage.open(item)
    },
    "#card-template"
  );

  return card.generateCard();
}

// ======================================================
// 6. Section: renderizar tarjetas iniciales
// ======================================================

const cardSection = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const cardElement = createCard(item);
      cardSection.addItem(cardElement);
    }
  },
  ".cards__list"
);

cardSection.renderItems();

// ======================================================
// 7. Popup para agregar nueva tarjeta
// ======================================================

const popupAddCard = new PopupWithForm(
  "#new-card-popup",
  (formData) => {
    const newCard = createCard({
      name: formData["card-name"],
      link: formData.url
    });

    cardSection.addItem(newCard);
    popupAddCard.close();
  }
);

popupAddCard.setEventListeners();

// Botón abrir popup agregar tarjeta
document.querySelector(".profile__add-button").addEventListener("click", () => {
  popupAddCard.open();
});