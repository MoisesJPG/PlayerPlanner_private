import { Inventory } from "./InventoryEntity.js";
import { InventoryMat } from "./InventoryMatEntity.js";
import { Item } from "../collection/ItemList.js";
import { Lang } from "../lang.js";
import { CharacterMap } from "../collection/CharacterList.js";
import { CharacterConstructor, CharacterData, CharacterDataElement, CharacterDataElementTalentMaterials, CharacterLevelMap } from "./struct/CharacterStruct.js";

export class CharacterEntity {
    /** @type {Number}                     **/ static last_id = -1;
    /** @type {CharacterData}              **/ #data = new CharacterData();
    /** @param {CharacterConstructor} data **/
    constructor(data) {
        this.#data.id = ++CharacterEntity.last_id;
        this.#data.rarity = data.rarity;
        this.#data.basename = data.name;
        this.#data.name = Lang.getActive(`CHARACTER.${data.name}.NAME`);

        let baseMats = new CharacterDataElementTalentMaterials();
        for (const dataElement of data.elements) {
            const element = new CharacterDataElement();
            element.setElement(dataElement.element);
            for(const talentLevel in dataElement.materials) {
                for(const talentMaterial of dataElement.materials[talentLevel]) {                        
                    talentMaterial.item = talentMaterial.item.getData().basename;
                }
                const materials = Inventory.mergeMaterials(baseMats[talentLevel], dataElement.materials[talentLevel]);
                element.getTalent("normal_attack"  ).materials[talentLevel] = materials;
                element.getTalent("elemental_skill").materials[talentLevel] = materials;
                element.getTalent("elemental_burst").materials[talentLevel] = materials;
            }
            this.#data.getElements().push(element); 
        }

        this.#data.level.min = data.level_min || 1;
        this.#data.level.max = data.level_max || 1;

        for (const level in data.levelMaterials) {
            const materials = data.levelMaterials[level];
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
    
    getData() { return this.#data; }
    /**
     * @returns {InventoryMat[]}
     */
    getMaterials() {
        let mats = [];
        mats = Inventory.mergeMaterials(mats, this.#getLevelMaterials());
        mats = Inventory.mergeMaterials(mats, this.#getTalentMaterials());
        mats.sort((a, b) => {
            let item_a = Item.get(a.item);
            let item_b = Item.get(b.item);
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
            mats.push({item: Item["HERO'S_WIT"].getData().basename, amount: mat.amount / 20000});
            mats.push({item: Item["MORA"].getData().basename, amount: mat.amount / 20000 * 4000});
        }
        mats = Inventory.mergeMaterials([], mats)
        return mats;
    }
    /**
     * @returns {InventoryMat[]} 
     **/
    #getTalentMaterials(){
        let mats = [];
        for(const element of this.getData().getElements()) {
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