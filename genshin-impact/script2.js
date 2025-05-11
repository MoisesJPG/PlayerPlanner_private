const plannerList = document.getElementById("plannerList");
const addCharacterBtn = document.getElementById("addCharacterBtn");
const modal = document.getElementById("modal");

function openModal() {
    modal.showModal();
}
function openModal_addCharacters(){
    modal.querySelector(".body .list.characters").style.display = "";
    modal.querySelector(".body .list.items").style.display = "none";
    openModal();
}

function closeModal() {
    if (modal.open) {
        modal.close();
    }
}
addCharacterBtn.addEventListener("click", () => {
    openModal_addCharacters()
});

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
