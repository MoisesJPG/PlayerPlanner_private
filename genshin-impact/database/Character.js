import { CharacterConstructor } from "./CharacterConstructor.js";
import { CharacterData, CharacterDataElement, CharacterDataElementTalentMaterials } from "./CharacterData.js";
import { CharacterLevelMap } from "./CharacterLevelMap.js";
import { CharacterMap } from "./CharacterMap.js";
import { Elements } from "./elements.js"
import { Inventory } from "./Inventory.js";
import { InventoryMat } from "./InventoryMat.js";
import { Items } from "./ItemList.js";
import { Lang } from "./Lang.js";

export class Character {
    /**
     * @type {Number}
     */
    static last_id = -1;
    /**
     * @type {CharacterData}
     */
    #data = new CharacterData();
    /**
     * @param {CharacterConstructor} data
     */
    constructor(data) {
        this.#data.id = ++Character.last_id;
        this.#data.rarity = data.rarity;
        this.#data.basename = data.name;
        this.#data.name = Lang.getActive(`CHARACTER.${data.name}.NAME`);

        let baseMats = new CharacterDataElementTalentMaterials();
        for (const dataElement of data.elements) {
            let element = new CharacterDataElement();
            element.setElement(dataElement.element);
            for(const talentName in dataElement.talents){
                const materials = dataElement.talents[talentName].materials;
                for(const level in materials){
                    const mats = materials[level];
                    for(const mat of mats) {
                        mat.item = mat.item.getData().basename;
                    }
                    element.getTalent(talentName).materials[level] = Inventory.mergeMaterials(baseMats[level],  dataElement.talents[talentName].materials[level]);
                }
            }
            this.#data.elements.push(element); 
        }

        this.#data.level.min = data.level.min || 1;
        this.#data.level.max = data.level.max || 1;

        for (const level in data.level.materials) {
            const materials = data.level.materials[level];
            for(const mat of materials) {
                mat.item = mat.item.getData().basename;
            }
            if (level in this.#data.level.materials) {
                this.#data.level.materials[level] = Inventory.mergeMaterials(this.#data.level.materials[level], materials);
            } else {
                this.#data.level.materials[level] = Inventory.mergeMaterials([], materials);
            }
        }

        CharacterMap.set(this.#data.id, this.#data.basename);
    }
    
    getId() { return this.#data.id; }
    getRarity() { return this.#data.rarity; }
    getData() { return this.#data; }
    getName() { return this.#data.name; }
    getBasename(){ return this.#data.basename; }
    getElement(id = 0) { return Elements.get(this.elements[id].element); }
    /**
     * @returns {InventoryMat[]}
     */
    getMaterials() {
        let mats = [];
        mats = Inventory.mergeMaterials(mats, this.#getLevelMaterials());
        mats = Inventory.mergeMaterials(mats, this.#getTalentMaterials());
        mats.sort((a, b) => {
            let item_a = Items.get(a.item);
            let item_b = Items.get(b.item);
            return item_a.getData().id > item_b.getData().id;
        });
        return mats;
    }
    #getLevelMaterials(){
        let mats_exp = [[],[],[],[],[],[],[]];
        /**
         * @type {InventoryMat[]}
         */
        let mats = [];
        let min_level_key = CharacterLevelMap.getKey(this.#data.level.min)
        let max_level_key = CharacterLevelMap.getKey(this.#data.level.max)
        for (let cur_level_key = min_level_key + 1; cur_level_key <= max_level_key; cur_level_key++) {
            const cur_level_value = CharacterLevelMap.getValue(cur_level_key);
            for(const mat of this.#data.level.materials[cur_level_value]){
                if(mat.item === "EXP"){
                    if(cur_level_key >=  0 && cur_level_key <= 19) mats_exp[0].push(mat);
                    if(cur_level_key >= 21 && cur_level_key <= 40) mats_exp[1].push(mat);
                    if(cur_level_key >= 42 && cur_level_key <= 51) mats_exp[2].push(mat);
                    if(cur_level_key >= 53 && cur_level_key <= 62) mats_exp[3].push(mat);
                    if(cur_level_key >= 64 && cur_level_key <= 73) mats_exp[4].push(mat);
                    if(cur_level_key >= 75 && cur_level_key <= 84) mats_exp[5].push(mat);
                    if(cur_level_key >= 86 && cur_level_key <= 95) mats_exp[6].push(mat);
                } else {    
                    mats.push(mat)
                }
            }
        }
        for(const mat_exp of mats_exp){
            const mat = Inventory.mergeMaterials([], mat_exp)[0];
            if(mat === undefined) continue;
            mat.amount = mat.amount % 20000 > 0 ? mat.amount + 20000 - mat.amount % 20000: mat.amount;
            mats.push({item: Items["HERO'S_WIT"].getData().basename, amount: mat.amount / 20000});
            mats.push({item: Items["MORA"].getData().basename, amount: mat.amount / 20000 * 4000});
        }
        mats = Inventory.mergeMaterials([], mats)
        return mats;
    }
    /**
     * @returns {InventoryMat[]} 
     **/
    #getTalentMaterials(){
        let mats = [];
        for(const element of this.#data.elements){
            for(const talentName in element.getTalents()) {
                const talent = element.getTalent(talentName);
                for (let level = talent.min + 1; level <= talent.max; level++) {
                    for(const mat of talent.materials[level]){
                        mats.push(mat)
                    }
                }
            }
        }
        return mats;
    }

}