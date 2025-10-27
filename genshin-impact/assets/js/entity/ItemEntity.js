import { Lang } from "../lang.js";
import { ItemMap } from "../collection/ItemList.js";
import { ItemData, ItemDataPrivate, ResumenTypes } from "./struct/ItemStruct.js"
export class ItemEntity {
    static last_id = -1;
    #data = new ItemData();
    #private = new ItemDataPrivate();

    /**
     * @param {String} name 
     * @param {number} rarity 
     * @param {String} type 
     * @param {string} resumenType
     */
    constructor(name, rarity = 1, type, resumenType = ResumenTypes.UNKNOWN) {
        this.#data.id          = ++ItemEntity.last_id;
        this.#data.basename    = name;
        this.#data.name        = Lang.getActive(`ITEM.${name}.NAME`);
        this.#data.type        = Lang.getActive(`ITEM_TYPE.${type}.NAME`);
        this.#data.rarity      = rarity;
        this.#data.description = Lang.getActive(`ITEM.${name}.DESCRIPTION`);
        this.#data.resumenType = resumenType;
        ItemMap.set(this.#data.id, name);
    }

    getData()        { return this.#data;    }
    getPrivate()     { return this.#private; }

}
