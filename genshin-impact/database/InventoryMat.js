import { Item } from "./Item.js";

export class InventoryMat {
    /**
     * @type {string}
     */
    item;
    /**
     * @type {number}
     */
    amount = 0;
    /**
     * @type {number}
     */
    current = 0;
    /**
     * @type {string[]}
     */
    dest = [];
    /**
     * @param {Item} item 
     */
    setItem(item){
        this.item = item.getData().basename; 
    }
}