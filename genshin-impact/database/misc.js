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
     * @type {string[]}
     */
    dest = [];
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
    static merge_materials(now_mats, new_mats) {
        const map = new Map();
    
        // Combinar materiales por item
        for (const mat of [...now_mats, ...new_mats]) {
            if(!("dest" in mat)) { mat.dest = []; }
            const key = mat.item;
            if (map.has(key)) {
                const existing = map.get(key);
                existing.amount += mat.amount;
                // Combinar dest sin duplicados
                existing.dest = Array.from(new Set([...existing.dest, ...mat.dest]));
            } else {
                // Clonar el objeto para evitar mutaciones externas
                map.set(key, { item: mat.item, amount: mat.amount, dest: [...mat.dest] });
            }
        }
    
        // Ordenar por ID del item
        const ordered = Array.from(map.values()).sort(
            (a, b) => Items.get(a.item).get_id() - Items.get(b.item).get_id()
        );
    
        return ordered;
    }
}