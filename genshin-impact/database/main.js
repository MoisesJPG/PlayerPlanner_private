import { Items,      ItemsToJson,      MISSING_ITEMS  } from "./items.js";
import { Elements,   ElementsToJson                   } from "./elements.js";
import { Characters, CharactersToJson                 } from "./characters.js";
import { Lang,       LangsToJson,      MISSING_KEYS, GeneratePreHTML } from "./lang.js";
import { Inventory } from "./misc.js";

function ToPreHTML(total_mats){
    for (const mat of total_mats) {
        const p = document.createElement("p");
        p.title = mat.dest;
        switch(Items.get(mat.item).get_rarity()){
            case 1: p.setAttribute(`class`, `common`); break;
            case 2: p.setAttribute(`class`, `un-common`); break;
            case 3: p.setAttribute(`class`, `rare`); break;
            case 4: p.setAttribute(`class`, `epic`); break;
            case 5: p.setAttribute(`class`, `legendary`); break;
        }
        let innerHTML = `<span>${mat.amount.toLocaleString("es-ES")}</span><span>${mat.item}</span>`;
        p.innerHTML += innerHTML;
        document.querySelector("main div").appendChild(p)
    }
}

ItemsToJson();
ElementsToJson();
CharactersToJson();
LangsToJson();
Characters.AMBER.get_data().level.min = 1;
Characters.AMBER.get_data().level.max = 90;
Characters.AMBER.get_data().elements[0].talents.normal_attack.min = 1;
Characters.AMBER.get_data().elements[0].talents.normal_attack.max = 10;
Characters.AMBER.get_data().elements[0].talents.elemental_skill.min = 1;
Characters.AMBER.get_data().elements[0].talents.elemental_skill.max = 10;
Characters.AMBER.get_data().elements[0].talents.elemental_burst.min = 1;
Characters.AMBER.get_data().elements[0].talents.elemental_burst.max = 10;
ToPreHTML(Characters.TRAVELER.get_materials());
// ToPreHTML(Characters.get_materials());
for(const MISSING_ITEM_id in MISSING_ITEMS){
    console.log(MISSING_ITEM_id, MISSING_ITEMS[MISSING_ITEM_id]);
}
// GeneratePreHTML();