import { Item, Items, ItemsToJson, MISSING_ITEMS } from "./items.js";
import { Elements, ElementsToJson } from "./elements.js";
import { Character, Characters, CharactersToJson } from "./characters.js";
import { Lang, LangsToJson, MISSING_KEYS, GeneratePreHTML } from "./lang.js";
import { Inventory } from "./misc.js";

const totalMaterialList = document.querySelector("main div");

function UpdateHTML(mats) {
    let rarityNames = [ `COMMON`, `UN-COMMON`, `RARE`, `EPIC`, `LEGENDARY` ];

    function insertarOrdenado(contenedor, nuevoParrafo) {
        const nuevoId = parseInt(nuevoParrafo.getAttribute('item-id'));
        const parrafos = Array.from(contenedor.querySelectorAll('p'));

        for (let i = 0; i < parrafos.length; i++) {
            const actualId = parseInt(parrafos[i].getAttribute('item-id'));
            if (nuevoId < actualId) {
                contenedor.insertBefore(nuevoParrafo, parrafos[i]);
                return;
            }
        }
        contenedor.appendChild(nuevoParrafo);
    }

    for (const mat of mats) {
        let elementMat = totalMaterialList.querySelector(`p[item-name="${mat.item}"]`);

        if (elementMat === null) {
            const item = Items.get(mat.item);
            const nuevoP = document.createElement('p');
            nuevoP.setAttribute('item-id', item.get_id());
            nuevoP.setAttribute('item-name', mat.item);
            nuevoP.setAttribute('title', mat.dest);
            nuevoP.className = rarityNames[item.get_rarity() - 1];

            const span = document.createElement('span');
            span.textContent = mat.amount.toLocaleString('es-ES');

            const img = document.createElement('img');
            img.alt = mat.item;
            img.src = `./images/item/${mat.item}.png`;

            nuevoP.appendChild(span);
            nuevoP.appendChild(img);

            insertarOrdenado(totalMaterialList, nuevoP);
            elementMat = nuevoP;
        }

        elementMat.setAttribute('title', mat.dest);
        elementMat.querySelector('span').textContent = mat.amount.toLocaleString('es-ES');
    }
}

/**
 * @param {Character} ch 
 * @param {*} data 
 */
function name(ch, data) {
    const character = Characters.get(ch.get_base_name());
    console.log(data)
    character.get_data().level.min = data.level[0];
    character.get_data().level.max = data.level[1];
    for(let i = 0; i < data.element.length; i++) {
        character.get_data().elements[i].constellation.min           = data.element[i].constellation[0];
        character.get_data().elements[i].constellation.max           = data.element[i].constellation[1];
        character.get_data().elements[i].talents.normal_attack.min   = data.element[i].normal[0];
        character.get_data().elements[i].talents.normal_attack.max   = data.element[i].normal[1];
        character.get_data().elements[i].talents.elemental_skill.min = data.element[i].skill[0];
        character.get_data().elements[i].talents.elemental_skill.max = data.element[i].skill[1];
        character.get_data().elements[i].talents.elemental_burst.min = data.element[i].burst[0];
        character.get_data().elements[i].talents.elemental_burst.max = data.element[i].burst[1];
    }
}
/*
const data = `
    Character.AMBER.level.min = 1 = 1
    Character.AMBER.level.max=90
`;
let jsonData = {}
console.log("// === DATA === //")
for(const row of data.split("\n")){
    const line = row.trim();
    if(line === "") { continue; }
    const lineSplit = line.split("=")
    const keySplit = lineSplit[0].split(".")
    const value = lineSplit.slice(1, lineSplit.length).join('=').trim();
    let path = jsonData;
    for(let i = 0; i < keySplit.length; i++){
        const key = keySplit[i].trim();
        if(i === keySplit.length - 1) { path[key] = value; continue; }
        if(!(key in path)) { path[key] = {}; }
        path = path[key]
    }
    console.log(line)
}
console.log(jsonData)
*/
// ========================================== //
/* name(Characters.TRAVELER,  { level: [ 1, 90 ], element: [
    { constellation: [0, 6], normal: [1, 10], skill: [1, 10 ], burst: [ 1, 10 ]},
    { constellation: [0, 6], normal: [1, 10], skill: [1, 10 ], burst: [ 1, 10 ]},
    { constellation: [0, 6], normal: [1, 10], skill: [1, 10 ], burst: [ 1, 10 ]},
    { constellation: [0, 6], normal: [1, 10], skill: [1, 10 ], burst: [ 1, 10 ]},
    { constellation: [0, 6], normal: [1, 10], skill: [1, 10 ], burst: [ 1, 10 ]},
    { constellation: [0, 6], normal: [1, 10], skill: [1, 10 ], burst: [ 1, 10 ]},
    { constellation: [0, 6], normal: [1, 10], skill: [1, 10 ], burst: [ 1, 10 ]}
]}); */
name(Characters.AMBER,  { level: [ 1, 90 ], element: [{ constellation: [0, 6], normal: [1, 10], skill: [1, 10 ], burst: [ 1, 10 ]}]});
// name(Characters.ALBEDO, { level: [ 1, 90 ], element: [{ constellation: [0, 6], normal: [1, 10], skill: [1, 10 ], burst: [ 1, 10 ]}]});
// name(Characters.VARESA, { level: [ 1, 90 ], element: [{ constellation: [0, 6], normal: [1, 10], skill: [1, 10 ], burst: [ 1, 10 ]}]});
// name(Characters.FURINA, { level: [ 1, 90 ], element: [{ constellation: [0, 6], normal: [1, 10], skill: [1, 10 ], burst: [ 1, 10 ]}]});
let temp_mats = Characters.get_materials();
UpdateHTML(temp_mats);
let loop = 1;
for(const key of Object.keys(Characters)){
    setTimeout(() => {
        name(Characters.get(loop),  { level: [ 1, 90 ], element: [{ constellation: [0, 6], normal: [1, 10], skill: [1, 10 ], burst: [ 1, 10 ]}]});
        temp_mats = Characters.get_materials();
        UpdateHTML(temp_mats);
    }, 1000 * loop)
    loop++;
}
// ToPreHTML(Characters.get_materials());
for (const MISSING_ITEM_id in MISSING_ITEMS) {
    console.log(MISSING_ITEM_id, MISSING_ITEMS[MISSING_ITEM_id]);
}
// GeneratePreHTML();