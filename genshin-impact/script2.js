const plannerList = document.getElementById("plannerList");
const addCharacterBtn = document.getElementById("addCharacterBtn");
const modal = document.getElementById("modal");

function openModal() {
    modal.showModal();
}
function closeModal() {
    if (modal.open) {
        modal.close();
    }
}
addCharacterBtn.addEventListener("click", () => {
    openModal()
});

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
