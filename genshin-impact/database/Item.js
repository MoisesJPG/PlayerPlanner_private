import ItemMap from "./ItemMap.js";
import { Lang } from "./lang.js";
import ResumenTypes from "./ResumenTypes.js";

class ItemData {
    /**
     * @type {number}
     */
    id;
    /**
     * @type {String}
     */
    basename;
    /**
     * @type {String}
     */
    resumenType = ResumenTypes.UNKNOWN;
    /**
     * @type {String}
     */
    name;
    /**
     * @type {string}
     */
    type;
    /**
     * @type {number}
     */
    rarity;
    /**
     * @type {String}
     */
    description;

}
class ItemDataPrivate {
    // === CAMPOS === //
    amount = { 
        current: 0, 
        required: 0,
        remaining: 0
    };
    calculateRequired() {
        this.amount.required = 0;
        for (const c of this.characters) {
            this.amount.required += c[1];
        }
        this.calculate_remaining();
    }
    calculate_remaining() {
        this.amount.remaining = this.amount.required - this.amount.current;
    }

    /**
     * @type {Map<string, number>}
     */
    characters = new Map();

}
export class Item {
    static last_id = -1;
    #data = new ItemData();
    #private = new ItemDataPrivate();

    /**
     * @param {String} name 
     * @param {number} rarity 
     * @param {String} type 
     */
    constructor(name, rarity = 1, type, resumenType = ResumenTypes.UNKNOWN) {
        this.#data.id          = ++Item.last_id;
        this.#data.basename    = name;
        this.#data.name        = Lang.get_active(`ITEM.${name}.NAME`);
        this.#data.type        = Lang.get_active(`ITEM_TYPE.${type}.NAME`);
        this.#data.rarity      = rarity;
        this.#data.description = Lang.get_active(`ITEM.${name}.DESCRIPTION`);
        this.#data.resumenType = resumenType;
        ItemMap.set(this.#data.id, name);
    }

    getData()        { return this.#data;             }
    getPrivate()     { 
        return this.#private;
    }

}
