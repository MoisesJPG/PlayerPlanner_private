import { Items,      ItemsToJson,      MISSING_ITEMS  } from "./items.js";
import { Elements,   ElementsToJson                   } from "./elements.js";
import { Characters, CharactersToJson                 } from "./characters.js";
import { Lang,       LangsToJson,      MISSING_KEYS, GeneratePreHTML } from "./lang.js";
import { Inventory } from "./misc.js";

function ToPreHTML(total_mats){
    for (const mat of total_mats) {
        const p = document.createElement("p");
        switch(Items.get(mat.item).get_rarity()){
            case 1: p.setAttribute(`class`, `common`); break;
            case 2: p.setAttribute(`class`, `un-common`); break;
            case 3: p.setAttribute(`class`, `rare`); break;
            case 4: p.setAttribute(`class`, `epic`); break;
            case 5: p.setAttribute(`class`, `legendary`); break;
        }
        let innerHTML = `<span>${"-".repeat(50-mat.item.length)}</span>${mat.item} x${mat.amount.toLocaleString("es-ES")}\n`;
        p.innerHTML += innerHTML;
        document.querySelector("main div").appendChild(p)
    }
}

ItemsToJson();
ElementsToJson();
CharactersToJson();
LangsToJson();

ToPreHTML(Characters.get_materials());
console.log(MISSING_ITEMS)
// GeneratePreHTML();