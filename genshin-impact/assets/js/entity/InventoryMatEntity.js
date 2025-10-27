import { ItemEntity } from "./ItemEntity.js";

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
     * @param {ItemEntity} item 
     */
    setItem(item){
        this.item = item.getData().basename; 
    }
}