import { Characters } from "./database/characters.js";
import { Items } from "./database/items.js";
// import "./database/main.js";
let player_data = [];
const modal = document.getElementById("modal");

for(const character in Characters){
    const li = document.createElement("li");
    li.className = `character ${character}`
    li.innerHTML += `<img class="image" src="./images/character/AMBER.png">`;
    li.innerHTML += `<p class="name">${Characters.get(character).getBasename().replaceAll("_", " ")}</p>`;
    li.addEventListener("click", () => {
        addCharacter(character);
    })
    modal.querySelector(".list").appendChild(li)
}

for(const item in Items) {
    const li = document.createElement("li");
    switch (Items.get(item).get_rarity()) {
        case 0: li.classList.add("a"); break;
        case 1: li.classList.add("common"); break;
        case 2: li.classList.add("un-common"); break;
        case 3: li.classList.add("rare"); break;
        case 4: li.classList.add("epic"); break;
        case 5: li.classList.add("legendary"); break;
    }
    li.innerHTML += `<img class="image" src="./images/item/MORA.png">`;
    li.innerHTML += `<input min=0 type="number" value=0>`
    // li.innerHTML += `<p class="name">${Items.get(item).getBasename().replaceAll("_", " ")}</p>`;
    modal.querySelector(".list.items").appendChild(li)
}

function addCharacter(name) {
    const character = Characters.get(name);
    const item = document.createElement("div");
    item.className = `item character ${name}`
    let innerHTML = `
        <div class="head"><p class="name">${name}</p></div>
        <div class="body">
            <img src="./images/character/${name}.png" alt="">
            <div class="info">
                <p class="title">Niveles</p>
                <p class="level row"><span class="min">${character.get_data().level.min}</span><span class="arrow">></span><span class="max">${character.get_data().level.max}</span><spa class="desc">Nivel</spa></p>
                <p class="friendship row"><span class="min">${character.get_data().friendship.min}</span><span class="arrow">></span><span class="max">${character.get_data().friendship.max}</span><span class="desc">Niv. Amistad</span></p>
                <div class="elementsData"></div>
            </div>
        </div>
        <div class="foot"><div class="mats"></div></div>
    `;
    item.innerHTML = innerHTML;
    let active = 0;
    for(const element of character.get_data().elements){
        const elementData = document.createElement("div");
        elementData.className = "elementData";
        elementData.setAttribute("element-Id", active)
        elementData.style.display = active == 0 ? "block": "none";
        elementData.innerHTML += `<p class="constellations row"><span class="min">${element.constellation.min}</span><span class="arrow">></span><span class="max">${element.constellation.max}</span><span class="desc">Constelaciones</span></p>`;
        elementData.innerHTML += `<p class="element row"><span class="full">${element.element}</span><span class="desc">Elemento</span></p>`;
        elementData.innerHTML += `<p class="title">Talentos</p>`;
        elementData.innerHTML += `<p class="talent-0 row"><span class="min">${element.talents.normal_attack.min}</span><span class="arrow">></span><span class="max">${element.talents.normal_attack.max}</span><span class="desc">Ataque</span></p>`;
        elementData.innerHTML += `<p class="talent-1 row"><span class="min">${element.talents.elemental_skill.min}</span><span class="arrow">></span><span class="max">${element.talents.elemental_skill.max}</span><span class="desc">Hab. Elemental</span></p>`;
        elementData.innerHTML += `<p class="talent-2 row"><span class="min">${element.talents.elemental_burst.min}</span><span class="arrow">></span><span class="max">${element.talents.elemental_burst.max}</span><span class="desc">Hab. Definitiva</span></p>`;
        elementData.querySelector(".element.row .full").addEventListener("click", (event) => {
            event.target.parentElement.parentElement.style.display = "none"
            let current = parseInt(event.target.parentElement.parentElement.getAttribute("element-id")) + 1;
            console.log(current, character.get_data().elements.length)
            if(current >= character.get_data().elements.length){
                current = 0;
            }
            event.target.parentElement.parentElement.parentElement.getElementsByClassName("elementData")[parseInt(current)].style.display = "block";
        })
        item.querySelector(".elementsData").appendChild(elementData);
        active++;
    }

    for(const mat of Characters.get(name).get_materials()) {
        let bigAmount = mat.amount.toLocaleString("es-ES");
        let shortAmount;
        
        if (mat.amount >= 1_000_000) {
            shortAmount = "~"+(mat.amount / 1_000_000).toFixed(1).replace(".", ",") + "M";
        } else if (mat.amount >= 1_000) {
            shortAmount = "~"+(mat.amount / 1_000).toFixed(1).replace(".", ",") + "k";
        } else {
            shortAmount = mat.amount.toString();
        }
        
        item.querySelector(".foot .mats").innerHTML += `<p class="mat" title="${mat.item} x${bigAmount}"><span class="amount">${shortAmount}</span><img src="./images/item/MORA.png" alt="" class="item"></p>`;
    }

    plannerList.appendChild(item);
    closeModal();
    modal.querySelector(`.body .list.characters .character.${name}`).remove();
}