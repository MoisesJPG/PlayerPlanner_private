import { Item, Items } from "./items.js";

export class InventoryMat {
    /**
     * @type {string}
     */
    item;
    /**
     * @type {number}
     */
    amount;
    /**
     * @param {Item} item 
     */
    set_item(item){
        this.item = item.get_base_name(); 
    }
    /**
     * @param {number} amount 
     */
    set_amount(amount){
        this.amount = amount; 
    }
}

export class Inventory {
    /**
     * @param   {InventoryMat[]} now_mats
     * @param   {InventoryMat[]} new_mats
     * @returns {InventoryMat[]}
     */
    static merge_materials(now_mats, new_mats){
        // let start_ms = performance.now()
        const map = new Map();
        if(now_mats.length > 0){
            for (const mat of now_mats) {
                map.set(mat.item, (map.get(mat.item) || 0) + mat.amount);
            }
        }
        for (const mat of new_mats) {
            map.set(mat.item, (map.get(mat.item) || 0) + mat.amount);
        }
        let order_map = Array.from(map, ([item, amount]) => ({ item, amount })).sort((a, b) => Items.get(a.item).get_id() - Items.get(b.item).get_id());
        // let end_ms = performance.now()
        // console.log("start ms:",start_ms, "end ms:", end_ms, "total ms:", end_ms - start_ms)
        return order_map;
    }
}