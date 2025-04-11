import { Element, Elements } from "./elements.js"
import { Items } from "./items.js"
import { Lang } from "./lang.js";
import { Inventory, InventoryMat } from "./misc.js";

class CharacterLevelMap  {
    static #map = [ 
         1,  2,  3,  4,  5,  6,  7,  8,  9, 10,
        11, 12, 13, 14, 15, 16, 17, 18, 19, 20, "20+",
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
        31, 32, 33, 34, 35, 36, 37, 38, 39, 40, "40+",
        41, 42, 43, 44, 45, 46, 47, 48, 49, 50, "50+",
        51, 52, 53, 54, 55, 56, 57, 58, 59, 60, "60+",
        61, 62, 63, 64, 65, 66, 67, 68, 69, 70, "70+",
        71, 72, 73, 74, 75, 76, 77, 78, 79, 80, "80+",
        81, 82, 83, 84, 85, 86, 87, 88, 89, 90
    ]
    static get_key(value){
        for(let key in this.#map){
            if(`${this.#map[key]}` === `${value}`){
                return parseInt(key);
            }
        }
    }
    static get_value(key){
        return this.#map[key];
    }
}
export class CharacterMap {
    /**
     * @type {Map<number,string>}
     */
    static #map = new Map();
    /**
     * @param {string} key 
     * @returns {string}
     */
    static get(key){ return CharacterMap.#map.get(key); }
    /**
     * @param {number} key 
     * @param {string} value 
     */
    static set(key, value){ CharacterMap.#map.set(key, value); }
}
class CharacterDataElementTalentMaterials {
    /**
     * @type {InventoryMat[]}
     */
    2  = [{ item: Items.MORA.get_base_name(), amount:  12500 }];
    /**
     * @type {InventoryMat[]}
     */
    3  = [{ item: Items.MORA.get_base_name(), amount:  17500 }];
    /**
     * @type {InventoryMat[]}
     */
    4  = [{ item: Items.MORA.get_base_name(), amount:  25500 }];
    /**
     * @type {InventoryMat[]}
     */
    5  = [{ item: Items.MORA.get_base_name(), amount:  30000 }];
    /**
     * @type {InventoryMat[]}
     */
    6  = [{ item: Items.MORA.get_base_name(), amount:  37500 }];
    /**
     * @type {InventoryMat[]}
     */
    7  = [{ item: Items.MORA.get_base_name(), amount: 120000 }];
    /**
     * @type {InventoryMat[]}
     */
    8  = [{ item: Items.MORA.get_base_name(), amount: 260000 }];
    /**
     * @type {InventoryMat[]}
     */
    9  = [{ item: Items.MORA.get_base_name(), amount: 450000 }];
    /**
     * @type {InventoryMat[]}
     */
    10 = [{ item: Items.MORA.get_base_name(), amount: 700000 }, { item: Items.CROWN_OF_INSIGHT.get_base_name(), amount: 1 }];
}
class CharacterDataElementTalent {
    /**
     * @type {number}
     */
    min = 1;
    /**
     * @type {number}
     */
    max = 10;
    /**
     * @type {CharacterDataElementTalentMaterials}
     */
    materials = new CharacterDataElementTalentMaterials();
}
class CharacterDataElementTalents {
    /**
     * @type {CharacterDataElementTalent}
     */
    normal_attack = new CharacterDataElementTalent();
    /**
     * @type {CharacterDataElementTalent}
     */
    elemental_skill = new CharacterDataElementTalent();
    /**
     * @type {CharacterDataElementTalent}
     */
    elemental_burst = new CharacterDataElementTalent();
}
class CharacterDataElementConstellation {
    static min = 0;
    static max = 6;
    /**
     * @type {number}
     */
    min = 0;
    /**
     * @type {number}
     */
    max = 6;
    fix() {
        if(!(
            (max <= CharacterDataElementConstellation.max) && 
            (min >= CharacterDataElementConstellation.min)
        )) {
            console.warn("Class CharacterDataElementConstellation: Value out of limits.")
        }
    }
}
class CharacterDataElement {
    /**
     * @type {Element|string}
     */
    element;
    /**
     * @type {CharacterDataElementConstellation}
     */
    constellation = new CharacterDataElementConstellation();
    /**
     * @param {Element} element 
     */
    set_element(element) { this.element = element.get_base_name(); }
    /**
     * @type {CharacterDataElementTalents}
     */
    talents = new CharacterDataElementTalents();
}
class CharacterDataFriendship {
    /**
     * @type {number}
     */
    min = 1;
    /**
     * @type {number}
     */
    max = 10;
}
class CharacterDataLevelMaterials {
    "2"   = [{ item: Items.EXP.get_base_name(), amount:   1000 }];
    "3"   = [{ item: Items.EXP.get_base_name(), amount:   1325 }];
    "4"   = [{ item: Items.EXP.get_base_name(), amount:   1700 }];
    "5"   = [{ item: Items.EXP.get_base_name(), amount:   2150 }];
    "6"   = [{ item: Items.EXP.get_base_name(), amount:   2625 }];
    "7"   = [{ item: Items.EXP.get_base_name(), amount:   3150 }];
    "8"   = [{ item: Items.EXP.get_base_name(), amount:   3725 }];
    "9"   = [{ item: Items.EXP.get_base_name(), amount:   4350 }];
    "10"  = [{ item: Items.EXP.get_base_name(), amount:   5000 }];
    "11"  = [{ item: Items.EXP.get_base_name(), amount:   5700 }];
    "12"  = [{ item: Items.EXP.get_base_name(), amount:   6450 }];
    "13"  = [{ item: Items.EXP.get_base_name(), amount:   7225 }];
    "14"  = [{ item: Items.EXP.get_base_name(), amount:   8050 }];
    "15"  = [{ item: Items.EXP.get_base_name(), amount:   8925 }];
    "16"  = [{ item: Items.EXP.get_base_name(), amount:   9825 }];
    "17"  = [{ item: Items.EXP.get_base_name(), amount:  10750 }];
    "18"  = [{ item: Items.EXP.get_base_name(), amount:  11725 }];
    "19"  = [{ item: Items.EXP.get_base_name(), amount:  12725 }];
    "20"  = [{ item: Items.EXP.get_base_name(), amount:  13775 }];
    "20+" = [{ item: Items.EXP.get_base_name(), amount:      0 }, { item: Items.MORA.get_base_name(), amount:  20000 }];
    "21"  = [{ item: Items.EXP.get_base_name(), amount:  14875 }];
    "22"  = [{ item: Items.EXP.get_base_name(), amount:  16800 }];
    "23"  = [{ item: Items.EXP.get_base_name(), amount:  18000 }];
    "24"  = [{ item: Items.EXP.get_base_name(), amount:  19250 }];
    "25"  = [{ item: Items.EXP.get_base_name(), amount:  20550 }];
    "26"  = [{ item: Items.EXP.get_base_name(), amount:  21875 }];
    "27"  = [{ item: Items.EXP.get_base_name(), amount:  23250 }];
    "28"  = [{ item: Items.EXP.get_base_name(), amount:  24650 }];
    "29"  = [{ item: Items.EXP.get_base_name(), amount:  26100 }];
    "30"  = [{ item: Items.EXP.get_base_name(), amount:  27575 }];
    "31"  = [{ item: Items.EXP.get_base_name(), amount:  29100 }];
    "32"  = [{ item: Items.EXP.get_base_name(), amount:  30650 }];
    "33"  = [{ item: Items.EXP.get_base_name(), amount:  32250 }];
    "34"  = [{ item: Items.EXP.get_base_name(), amount:  33875 }];
    "35"  = [{ item: Items.EXP.get_base_name(), amount:  35550 }];
    "36"  = [{ item: Items.EXP.get_base_name(), amount:  37250 }];
    "37"  = [{ item: Items.EXP.get_base_name(), amount:  38975 }];
    "38"  = [{ item: Items.EXP.get_base_name(), amount:  40750 }];
    "39"  = [{ item: Items.EXP.get_base_name(), amount:  42575 }];
    "40"  = [{ item: Items.EXP.get_base_name(), amount:  44425 }];
    "40+" = [{ item: Items.EXP.get_base_name(), amount:      0 }, { item: Items.MORA.get_base_name(), amount:  40000 }];
    "41"  = [{ item: Items.EXP.get_base_name(), amount:  46300 }];
    "42"  = [{ item: Items.EXP.get_base_name(), amount:  50625 }];
    "43"  = [{ item: Items.EXP.get_base_name(), amount:  52700 }];
    "44"  = [{ item: Items.EXP.get_base_name(), amount:  54775 }];
    "45"  = [{ item: Items.EXP.get_base_name(), amount:  56900 }];
    "46"  = [{ item: Items.EXP.get_base_name(), amount:  59075 }];
    "47"  = [{ item: Items.EXP.get_base_name(), amount:  61275 }];
    "48"  = [{ item: Items.EXP.get_base_name(), amount:  63525 }];
    "49"  = [{ item: Items.EXP.get_base_name(), amount:  65800 }];
    "50"  = [{ item: Items.EXP.get_base_name(), amount:  68125 }];
    "50+" = [{ item: Items.EXP.get_base_name(), amount:      0 }, { item: Items.MORA.get_base_name(), amount:  60000 }];
    "51"  = [{ item: Items.EXP.get_base_name(), amount:  70475 }];
    "52"  = [{ item: Items.EXP.get_base_name(), amount:  76500 }];
    "53"  = [{ item: Items.EXP.get_base_name(), amount:  79050 }];
    "54"  = [{ item: Items.EXP.get_base_name(), amount:  81650 }];
    "55"  = [{ item: Items.EXP.get_base_name(), amount:  84275 }];
    "56"  = [{ item: Items.EXP.get_base_name(), amount:  86950 }];
    "57"  = [{ item: Items.EXP.get_base_name(), amount:  89650 }];
    "58"  = [{ item: Items.EXP.get_base_name(), amount:  92400 }];
    "59"  = [{ item: Items.EXP.get_base_name(), amount:  95175 }];
    "60"  = [{ item: Items.EXP.get_base_name(), amount:  98000 }];
    "60+" = [{ item: Items.EXP.get_base_name(), amount:      0 }, { item: Items.MORA.get_base_name(), amount:  80000 }];
    "61"  = [{ item: Items.EXP.get_base_name(), amount: 100875 }];
    "62"  = [{ item: Items.EXP.get_base_name(), amount: 108950 }];
    "63"  = [{ item: Items.EXP.get_base_name(), amount: 112050 }];
    "64"  = [{ item: Items.EXP.get_base_name(), amount: 115175 }];
    "65"  = [{ item: Items.EXP.get_base_name(), amount: 118325 }];
    "66"  = [{ item: Items.EXP.get_base_name(), amount: 121525 }];
    "67"  = [{ item: Items.EXP.get_base_name(), amount: 124775 }];
    "68"  = [{ item: Items.EXP.get_base_name(), amount: 128075 }];
    "69"  = [{ item: Items.EXP.get_base_name(), amount: 131400 }];
    "70"  = [{ item: Items.EXP.get_base_name(), amount: 134775 }];
    "70+" = [{ item: Items.EXP.get_base_name(), amount:      0 }, { item: Items.MORA.get_base_name(), amount: 100000 }];
    "71"  = [{ item: Items.EXP.get_base_name(), amount: 138175 }];
    "72"  = [{ item: Items.EXP.get_base_name(), amount: 148700 }];
    "73"  = [{ item: Items.EXP.get_base_name(), amount: 152375 }];
    "74"  = [{ item: Items.EXP.get_base_name(), amount: 156075 }];
    "75"  = [{ item: Items.EXP.get_base_name(), amount: 159825 }];
    "76"  = [{ item: Items.EXP.get_base_name(), amount: 163600 }];
    "77"  = [{ item: Items.EXP.get_base_name(), amount: 167425 }];
    "78"  = [{ item: Items.EXP.get_base_name(), amount: 171300 }];
    "79"  = [{ item: Items.EXP.get_base_name(), amount: 175225 }];
    "80"  = [{ item: Items.EXP.get_base_name(), amount: 179175 }];
    "80+" = [{ item: Items.EXP.get_base_name(), amount:      0 }, { item: Items.MORA.get_base_name(), amount: 120000 }];
    "81"  = [{ item: Items.EXP.get_base_name(), amount: 183175 }];
    "82"  = [{ item: Items.EXP.get_base_name(), amount: 216225 }];
    "83"  = [{ item: Items.EXP.get_base_name(), amount: 243025 }];
    "84"  = [{ item: Items.EXP.get_base_name(), amount: 273100 }];
    "85"  = [{ item: Items.EXP.get_base_name(), amount: 306800 }];
    "86"  = [{ item: Items.EXP.get_base_name(), amount: 344600 }];
    "87"  = [{ item: Items.EXP.get_base_name(), amount: 386950 }];
    "88"  = [{ item: Items.EXP.get_base_name(), amount: 434425 }];
    "89"  = [{ item: Items.EXP.get_base_name(), amount: 487625 }];
    "90"  = [{ item: Items.EXP.get_base_name(), amount: 547200 }];
}
class CharacterDataLevel {
    /**
     * @type {number}
     */
    min = 1;
    /**
     * @type {number}
     */
    max = 90;
    /**
     * @type {CharacterDataLevelMaterials}
     */
    materials = new CharacterDataLevelMaterials();
}
class CharacterData {
    /**
     * @type {number}
     */
    id;
    /**
     * @type {String}
     */
    base_name;
    /**
     * @type {String}
    */
    name;
    /**
     * @type {CharacterDataElement[]}
     */
    elements = [];
    /**
     * @type {CharacterDataLevel}
     */
    level = new CharacterDataLevel();
    /**
     * @type {CharacterDataFriendship}
     */
    friendship = new CharacterDataFriendship();
}
export class Character {
    static last_id = -1;
    #data = new CharacterData();

    /**
     * @param {CharacterData} data
     */
    constructor(data) {
        this.#data.id = ++Character.last_id;
        this.#data.base_name = data.name;
        this.#data.name = Lang.get_active(`CHARACTER.${data.name}.NAME`);

        let base_mats = new CharacterDataElementTalentMaterials();
        for (const data_element of data.elements) {
            let element = new CharacterDataElement();
            element.set_element(data_element.element);
            for(const talent_name in data_element.talents){
                const materials = data_element.talents[talent_name].materials;
                for(const level in materials){
                    const mats = materials[level];
                    for(const mat of mats) {
                        mat.item = mat.item.get_base_name();
                    }
                    element.talents[talent_name].materials[level] = Inventory.merge_materials(base_mats[level],  data_element.talents[talent_name].materials[level]);
                }
            }
            this.#data.elements.push(element); 
        }

        this.#data.level.min = data.level.min || 1;
        this.#data.level.max = data.level.max || 90;
        for (const level in data.level.materials) {
            const materials = data.level.materials[level];
            for(const mat of materials){
                mat.item = mat.item.get_base_name();
            }
            if (level in this.#data.level.materials) {
                this.#data.level.materials[level] = Inventory.merge_materials(this.#data.level.materials[level], materials);
            } else {
                this.#data.level.materials[level] = Inventory.merge_materials([], materials);
            }
        }

        CharacterMap.set(this.#data.id, this.#data.base_name);
    }
    
    get_data() { return this.#data; }
    get_name(){ return this.#data.name; }
    get_base_name(){ return this.#data.base_name; }
    get_element(id = 0) { return Elements.get(this.elements[id].element); }

    /**
     * @returns {InventoryMat[]}
     */
    get_materials() {
        let mats = [];
        mats = Inventory.merge_materials(mats, this.#get_level_materials());
        mats = Inventory.merge_materials(mats, this.#get_talent_materials());
        return mats;
    }
    #get_level_materials(){
        let mats_exp = [[],[],[],[],[],[],[]];
        let mats = [];

        let min_level_key = CharacterLevelMap.get_key(this.#data.level.min)
        let max_level_key = CharacterLevelMap.get_key(this.#data.level.max)
        for (let cur_level_key = min_level_key + 1; cur_level_key <= max_level_key; cur_level_key++) {
            const cur_level_value = CharacterLevelMap.get_value(cur_level_key);
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
            let mat = Inventory.merge_materials([], mat_exp)[0];
            if(mat === undefined) continue;
            mat.amount = mat.amount % 20000 > 0 ? mat.amount + 20000 - mat.amount % 20000: mat.amount;
            mats.push({item: Items["HERO'S_WIT"].get_base_name(), amount: mat.amount / 20000 })
            mats.push({item: Items.MORA.get_base_name(), amount: mat.amount / 20000 * 4000 })
        }
        mats = Inventory.merge_materials([], mats)
        return mats;
    }
    #get_talent_materials(){
        let mats = [];
        for(const element of this.#data.elements){
            for(const talent_name in element.talents){
                const talent = element.talents[talent_name];
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
export class CharacterList {
    
    //#region "LIST"
    static TRAVELER           = new Character({ name: "TRAVELER",           /*  */
        level: { materials: {
            "20+": [{ item: Items.BRILLIANT_DIAMOND_SLIVER,   amount: 1 }, { item: Items.WINDWHEEL_ASTER, amount:  3 }, { item: Items.DAMAGED_MASK, amount:  3 }],
            "40+": [{ item: Items.BRILLIANT_DIAMOND_FRAGMENT, amount: 3 }, { item: Items.WINDWHEEL_ASTER, amount: 10 }, { item: Items.DAMAGED_MASK, amount: 15 }],
            "50+": [{ item: Items.BRILLIANT_DIAMOND_FRAGMENT, amount: 6 }, { item: Items.WINDWHEEL_ASTER, amount: 20 }, { item: Items.STAINED_MASK, amount: 12 }],
            "60+": [{ item: Items.BRILLIANT_DIAMOND_CHUNK,    amount: 3 }, { item: Items.WINDWHEEL_ASTER, amount: 30 }, { item: Items.STAINED_MASK, amount: 18 }],
            "70+": [{ item: Items.BRILLIANT_DIAMOND_CHUNK,    amount: 6 }, { item: Items.WINDWHEEL_ASTER, amount: 45 }, { item: Items.OMINOUS_MASK, amount: 12 }],
            "80+": [{ item: Items.BRILLIANT_DIAMOND_GEMSTONE, amount: 6 }, { item: Items.WINDWHEEL_ASTER, amount: 60 }, { item: Items.OMINOUS_MASK, amount: 24 }],
        }},
        elements: [
            { element: Elements.ANEMO, talents: {
                normal_attack: { min: 1, max: 10, materials: {
                    2: [{ item: Items.TEACHINGS_OF_FREEDOM,       amount:  3 }, { item: Items.DIVINING_SCROLL,        amount:  6 }],
                    3: [{ item: Items.GUIDE_TO_RESISTANCE,        amount:  2 }, { item: Items.SEALED_SCROLL,          amount:  3 }],
                    4: [{ item: Items.GUIDE_TO_BALLAD,            amount:  4 }, { item: Items.SEALED_SCROLL,          amount:  4 }],
                    5: [{ item: Items.GUIDE_TO_FREEDOM,           amount:  6 }, { item: Items.SEALED_SCROLL,          amount:  6 }],
                    6: [{ item: Items.GUIDE_TO_RESISTANCE,        amount:  9 }, { item: Items.SEALED_SCROLL,          amount:  9 }],
                    7: [{ item: Items.PHILOSOPHIES_OF_BALLAD,     amount:  4 }, { item: Items.FORBIDDEN_CURSE_SCROLL, amount:  4 }, { item: Items["DVALIN'S_SIGH"], amount: 1 }],
                    8: [{ item: Items.PHILOSOPHIES_OF_FREEDOM,    amount:  6 }, { item: Items.FORBIDDEN_CURSE_SCROLL, amount:  6 }, { item: Items["DVALIN'S_SIGH"], amount: 1 }],
                    9: [{ item: Items.PHILOSOPHIES_OF_RESISTANCE, amount: 12 }, { item: Items.FORBIDDEN_CURSE_SCROLL, amount:  9 }, { item: Items["DVALIN'S_SIGH"], amount: 2 }],
                   10: [{ item: Items.PHILOSOPHIES_OF_BALLAD,     amount: 16 }, { item: Items.FORBIDDEN_CURSE_SCROLL, amount: 12 }, { item: Items["DVALIN'S_SIGH"], amount: 2 }]
                }},
                elemental_skill: { min: 1, max: 10, materials: {
                    2: [{ item: Items.TEACHINGS_OF_FREEDOM,       amount:  3 }, { item: Items.DIVINING_SCROLL,        amount:  6 }],
                    3: [{ item: Items.GUIDE_TO_RESISTANCE,        amount:  2 }, { item: Items.SEALED_SCROLL,          amount:  3 }],
                    4: [{ item: Items.GUIDE_TO_BALLAD,            amount:  4 }, { item: Items.SEALED_SCROLL,          amount:  4 }],
                    5: [{ item: Items.GUIDE_TO_FREEDOM,           amount:  6 }, { item: Items.SEALED_SCROLL,          amount:  6 }],
                    6: [{ item: Items.GUIDE_TO_RESISTANCE,        amount:  9 }, { item: Items.SEALED_SCROLL,          amount:  9 }],
                    7: [{ item: Items.PHILOSOPHIES_OF_BALLAD,     amount:  4 }, { item: Items.FORBIDDEN_CURSE_SCROLL, amount:  4 }, { item: Items["DVALIN'S_SIGH"], amount: 1 }],
                    8: [{ item: Items.PHILOSOPHIES_OF_FREEDOM,    amount:  6 }, { item: Items.FORBIDDEN_CURSE_SCROLL, amount:  6 }, { item: Items["DVALIN'S_SIGH"], amount: 1 }],
                    9: [{ item: Items.PHILOSOPHIES_OF_RESISTANCE, amount: 12 }, { item: Items.FORBIDDEN_CURSE_SCROLL, amount:  9 }, { item: Items["DVALIN'S_SIGH"], amount: 2 }],
                   10: [{ item: Items.PHILOSOPHIES_OF_BALLAD,     amount: 16 }, { item: Items.FORBIDDEN_CURSE_SCROLL, amount: 12 }, { item: Items["DVALIN'S_SIGH"], amount: 2 }]
                }},
                elemental_burst: { min: 1, max: 10, materials: {
                    2: [{ item: Items.TEACHINGS_OF_FREEDOM,       amount:  3 }, { item: Items.DIVINING_SCROLL,        amount:  6 }],
                    3: [{ item: Items.GUIDE_TO_RESISTANCE,        amount:  2 }, { item: Items.SEALED_SCROLL,          amount:  3 }],
                    4: [{ item: Items.GUIDE_TO_BALLAD,            amount:  4 }, { item: Items.SEALED_SCROLL,          amount:  4 }],
                    5: [{ item: Items.GUIDE_TO_FREEDOM,           amount:  6 }, { item: Items.SEALED_SCROLL,          amount:  6 }],
                    6: [{ item: Items.GUIDE_TO_RESISTANCE,        amount:  9 }, { item: Items.SEALED_SCROLL,          amount:  9 }],
                    7: [{ item: Items.PHILOSOPHIES_OF_BALLAD,     amount:  4 }, { item: Items.FORBIDDEN_CURSE_SCROLL, amount:  4 }, { item: Items["DVALIN'S_SIGH"], amount: 1 }],
                    8: [{ item: Items.PHILOSOPHIES_OF_FREEDOM,    amount:  6 }, { item: Items.FORBIDDEN_CURSE_SCROLL, amount:  6 }, { item: Items["DVALIN'S_SIGH"], amount: 1 }],
                    9: [{ item: Items.PHILOSOPHIES_OF_RESISTANCE, amount: 12 }, { item: Items.FORBIDDEN_CURSE_SCROLL, amount:  9 }, { item: Items["DVALIN'S_SIGH"], amount: 2 }],
                   10: [{ item: Items.PHILOSOPHIES_OF_BALLAD,     amount: 16 }, { item: Items.FORBIDDEN_CURSE_SCROLL, amount: 12 }, { item: Items["DVALIN'S_SIGH"], amount: 2 }]
               }}
            }},
            { element: Elements.GEO, talents: {
                normal_attack: { min: 1, max: 10, materials: {
                    2: [{ item: Items.TEACHINGS_OF_FREEDOM,       amount:  3 }, { item: Items.DIVINING_SCROLL,        amount:  6 }],
                    3: [{ item: Items.GUIDE_TO_RESISTANCE,        amount:  2 }, { item: Items.SEALED_SCROLL,          amount:  3 }],
                    4: [{ item: Items.GUIDE_TO_BALLAD,            amount:  4 }, { item: Items.SEALED_SCROLL,          amount:  4 }],
                    5: [{ item: Items.GUIDE_TO_FREEDOM,           amount:  6 }, { item: Items.SEALED_SCROLL,          amount:  6 }],
                    6: [{ item: Items.GUIDE_TO_RESISTANCE,        amount:  9 }, { item: Items.SEALED_SCROLL,          amount:  9 }],
                    7: [{ item: Items.PHILOSOPHIES_OF_BALLAD,     amount:  4 }, { item: Items.FORBIDDEN_CURSE_SCROLL, amount:  4 }, { item: Items["DVALIN'S_SIGH"], amount: 1 }],
                    8: [{ item: Items.PHILOSOPHIES_OF_FREEDOM,    amount:  6 }, { item: Items.FORBIDDEN_CURSE_SCROLL, amount:  6 }, { item: Items["DVALIN'S_SIGH"], amount: 1 }],
                    9: [{ item: Items.PHILOSOPHIES_OF_RESISTANCE, amount: 12 }, { item: Items.FORBIDDEN_CURSE_SCROLL, amount:  9 }, { item: Items["DVALIN'S_SIGH"], amount: 2 }],
                   10: [{ item: Items.PHILOSOPHIES_OF_BALLAD,     amount: 16 }, { item: Items.FORBIDDEN_CURSE_SCROLL, amount: 12 }, { item: Items["DVALIN'S_SIGH"], amount: 2 }]
                }},
                elemental_skill: { min: 1, max: 10, materials: {
                    2: [{ item: Items.TEACHINGS_OF_FREEDOM,       amount:  3 }, { item: Items.DIVINING_SCROLL,        amount:  6 }],
                    3: [{ item: Items.GUIDE_TO_RESISTANCE,        amount:  2 }, { item: Items.SEALED_SCROLL,          amount:  3 }],
                    4: [{ item: Items.GUIDE_TO_BALLAD,            amount:  4 }, { item: Items.SEALED_SCROLL,          amount:  4 }],
                    5: [{ item: Items.GUIDE_TO_FREEDOM,           amount:  6 }, { item: Items.SEALED_SCROLL,          amount:  6 }],
                    6: [{ item: Items.GUIDE_TO_RESISTANCE,        amount:  9 }, { item: Items.SEALED_SCROLL,          amount:  9 }],
                    7: [{ item: Items.PHILOSOPHIES_OF_BALLAD,     amount:  4 }, { item: Items.FORBIDDEN_CURSE_SCROLL, amount:  4 }, { item: Items["DVALIN'S_SIGH"], amount: 1 }],
                    8: [{ item: Items.PHILOSOPHIES_OF_FREEDOM,    amount:  6 }, { item: Items.FORBIDDEN_CURSE_SCROLL, amount:  6 }, { item: Items["DVALIN'S_SIGH"], amount: 1 }],
                    9: [{ item: Items.PHILOSOPHIES_OF_RESISTANCE, amount: 12 }, { item: Items.FORBIDDEN_CURSE_SCROLL, amount:  9 }, { item: Items["DVALIN'S_SIGH"], amount: 2 }],
                   10: [{ item: Items.PHILOSOPHIES_OF_BALLAD,     amount: 16 }, { item: Items.FORBIDDEN_CURSE_SCROLL, amount: 12 }, { item: Items["DVALIN'S_SIGH"], amount: 2 }]
                }},
                elemental_burst: { min: 1, max: 10, materials: {
                    2: [{ item: Items.TEACHINGS_OF_FREEDOM,       amount:  3 }, { item: Items.DIVINING_SCROLL,        amount:  6 }],
                    3: [{ item: Items.GUIDE_TO_RESISTANCE,        amount:  2 }, { item: Items.SEALED_SCROLL,          amount:  3 }],
                    4: [{ item: Items.GUIDE_TO_BALLAD,            amount:  4 }, { item: Items.SEALED_SCROLL,          amount:  4 }],
                    5: [{ item: Items.GUIDE_TO_FREEDOM,           amount:  6 }, { item: Items.SEALED_SCROLL,          amount:  6 }],
                    6: [{ item: Items.GUIDE_TO_RESISTANCE,        amount:  9 }, { item: Items.SEALED_SCROLL,          amount:  9 }],
                    7: [{ item: Items.PHILOSOPHIES_OF_BALLAD,     amount:  4 }, { item: Items.FORBIDDEN_CURSE_SCROLL, amount:  4 }, { item: Items["DVALIN'S_SIGH"], amount: 1 }],
                    8: [{ item: Items.PHILOSOPHIES_OF_FREEDOM,    amount:  6 }, { item: Items.FORBIDDEN_CURSE_SCROLL, amount:  6 }, { item: Items["DVALIN'S_SIGH"], amount: 1 }],
                    9: [{ item: Items.PHILOSOPHIES_OF_RESISTANCE, amount: 12 }, { item: Items.FORBIDDEN_CURSE_SCROLL, amount:  9 }, { item: Items["DVALIN'S_SIGH"], amount: 2 }],
                   10: [{ item: Items.PHILOSOPHIES_OF_BALLAD,     amount: 16 }, { item: Items.FORBIDDEN_CURSE_SCROLL, amount: 12 }, { item: Items["DVALIN'S_SIGH"], amount: 2 }]
               }}
            }},
            { element: Elements.ELECTRO, talents: {
                normal_attack: { min: 1, max: 10, materials: {
                    2: [{ item: Items.TEACHINGS_OF_TRANSIENCE,    amount:  3 }, { item: Items.OLD_HANDGUARD,      amount:  6 }],
                    3: [{ item: Items.GUIDE_TO_ELEGANCE,          amount:  2 }, { item: Items.KAGEUCHI_HANDGUARD, amount:  3 }],
                    4: [{ item: Items.GUIDE_TO_LIGHT,             amount:  4 }, { item: Items.KAGEUCHI_HANDGUARD, amount:  4 }],
                    5: [{ item: Items.GUIDE_TO_TRANSIENCE,        amount:  6 }, { item: Items.KAGEUCHI_HANDGUARD, amount:  6 }],
                    6: [{ item: Items.GUIDE_TO_ELEGANCE,          amount:  9 }, { item: Items.KAGEUCHI_HANDGUARD, amount:  9 }],
                    7: [{ item: Items.PHILOSOPHIES_OF_LIGHT,      amount:  4 }, { item: Items.FAMED_HANDGUARD,    amount:  4 }, { item: Items["DRAGON_LORD'S_CROWN"], amount: 1 }],
                    8: [{ item: Items.PHILOSOPHIES_OF_TRANSIENCE, amount:  6 }, { item: Items.FAMED_HANDGUARD,    amount:  6 }, { item: Items["DRAGON_LORD'S_CROWN"], amount: 1 }],
                    9: [{ item: Items.PHILOSOPHIES_OF_ELEGANCE,   amount: 12 }, { item: Items.FAMED_HANDGUARD,    amount:  9 }, { item: Items["DRAGON_LORD'S_CROWN"], amount: 2 }],
                   10: [{ item: Items.PHILOSOPHIES_OF_LIGHT,      amount: 16 }, { item: Items.FAMED_HANDGUARD,    amount: 12 }, { item: Items["DRAGON_LORD'S_CROWN"], amount: 2 }]
                }},
                elemental_skill: { min: 1, max: 10, materials: {
                    2: [{ item: Items.TEACHINGS_OF_TRANSIENCE,    amount:  3 }, { item: Items.OLD_HANDGUARD,      amount:  6 }],
                    3: [{ item: Items.GUIDE_TO_ELEGANCE,          amount:  2 }, { item: Items.KAGEUCHI_HANDGUARD, amount:  3 }],
                    4: [{ item: Items.GUIDE_TO_LIGHT,             amount:  4 }, { item: Items.KAGEUCHI_HANDGUARD, amount:  4 }],
                    5: [{ item: Items.GUIDE_TO_TRANSIENCE,        amount:  6 }, { item: Items.KAGEUCHI_HANDGUARD, amount:  6 }],
                    6: [{ item: Items.GUIDE_TO_ELEGANCE,          amount:  9 }, { item: Items.KAGEUCHI_HANDGUARD, amount:  9 }],
                    7: [{ item: Items.PHILOSOPHIES_OF_LIGHT,      amount:  4 }, { item: Items.FAMED_HANDGUARD,    amount:  4 }, { item: Items["DRAGON_LORD'S_CROWN"], amount: 1 }],
                    8: [{ item: Items.PHILOSOPHIES_OF_TRANSIENCE, amount:  6 }, { item: Items.FAMED_HANDGUARD,    amount:  6 }, { item: Items["DRAGON_LORD'S_CROWN"], amount: 1 }],
                    9: [{ item: Items.PHILOSOPHIES_OF_ELEGANCE,   amount: 12 }, { item: Items.FAMED_HANDGUARD,    amount:  9 }, { item: Items["DRAGON_LORD'S_CROWN"], amount: 2 }],
                   10: [{ item: Items.PHILOSOPHIES_OF_LIGHT,      amount: 16 }, { item: Items.FAMED_HANDGUARD,    amount: 12 }, { item: Items["DRAGON_LORD'S_CROWN"], amount: 2 }]
                }},
                elemental_burst: { min: 1, max: 10, materials: {
                    2: [{ item: Items.TEACHINGS_OF_TRANSIENCE,    amount:  3 }, { item: Items.OLD_HANDGUARD,      amount:  6 }],
                    3: [{ item: Items.GUIDE_TO_ELEGANCE,          amount:  2 }, { item: Items.KAGEUCHI_HANDGUARD, amount:  3 }],
                    4: [{ item: Items.GUIDE_TO_LIGHT,             amount:  4 }, { item: Items.KAGEUCHI_HANDGUARD, amount:  4 }],
                    5: [{ item: Items.GUIDE_TO_TRANSIENCE,        amount:  6 }, { item: Items.KAGEUCHI_HANDGUARD, amount:  6 }],
                    6: [{ item: Items.GUIDE_TO_ELEGANCE,          amount:  9 }, { item: Items.KAGEUCHI_HANDGUARD, amount:  9 }],
                    7: [{ item: Items.PHILOSOPHIES_OF_LIGHT,      amount:  4 }, { item: Items.FAMED_HANDGUARD,    amount:  4 }, { item: Items["DRAGON_LORD'S_CROWN"], amount: 1 }],
                    8: [{ item: Items.PHILOSOPHIES_OF_TRANSIENCE, amount:  6 }, { item: Items.FAMED_HANDGUARD,    amount:  6 }, { item: Items["DRAGON_LORD'S_CROWN"], amount: 1 }],
                    9: [{ item: Items.PHILOSOPHIES_OF_ELEGANCE,   amount: 12 }, { item: Items.FAMED_HANDGUARD,    amount:  9 }, { item: Items["DRAGON_LORD'S_CROWN"], amount: 2 }],
                   10: [{ item: Items.PHILOSOPHIES_OF_LIGHT,      amount: 16 }, { item: Items.FAMED_HANDGUARD,    amount: 12 }, { item: Items["DRAGON_LORD'S_CROWN"], amount: 2 }]
               }}
            }},
            { element: Elements.DENDRO, talents: {
                normal_attack: { min: 1, max: 10, materials: {
                    2: [{ item: Items.TEACHINGS_OF_ADMONITION,    amount:  3 }, { item: Items.FUNGAL_SPORES,         amount:  6 }],
                    3: [{ item: Items.GUIDE_TO_INGENUITY,         amount:  2 }, { item: Items.LUMINESCENT_POLLEN,    amount:  3 }],
                    4: [{ item: Items.GUIDE_TO_PRAXIS,            amount:  4 }, { item: Items.LUMINESCENT_POLLEN,    amount:  4 }],
                    5: [{ item: Items.GUIDE_TO_ADMONITION,        amount:  6 }, { item: Items.LUMINESCENT_POLLEN,    amount:  6 }],
                    6: [{ item: Items.GUIDE_TO_INGENUITY,         amount:  9 }, { item: Items.LUMINESCENT_POLLEN,    amount:  9 }],
                    7: [{ item: Items.PHILOSOPHIES_OF_PRAXIS,     amount:  4 }, { item: Items.CRYSTALLINE_CYST_DUST, amount:  4 }, { item: Items.MUDRA_OF_THE_MALEFIC_GENERAL, amount: 1 }],
                    8: [{ item: Items.PHILOSOPHIES_OF_ADMONITION, amount:  6 }, { item: Items.CRYSTALLINE_CYST_DUST, amount:  6 }, { item: Items.MUDRA_OF_THE_MALEFIC_GENERAL, amount: 1 }],
                    9: [{ item: Items.PHILOSOPHIES_OF_INGENUITY,  amount: 12 }, { item: Items.CRYSTALLINE_CYST_DUST, amount:  9 }, { item: Items.MUDRA_OF_THE_MALEFIC_GENERAL, amount: 2 }],
                   10: [{ item: Items.PHILOSOPHIES_OF_PRAXIS,     amount: 16 }, { item: Items.CRYSTALLINE_CYST_DUST, amount: 12 }, { item: Items.MUDRA_OF_THE_MALEFIC_GENERAL, amount: 2 }]
                }},
                elemental_skill: { min: 1, max: 10, materials: {
                    2: [{ item: Items.TEACHINGS_OF_ADMONITION,    amount:  3 }, { item: Items.FUNGAL_SPORES,         amount:  6 }],
                    3: [{ item: Items.GUIDE_TO_INGENUITY,         amount:  2 }, { item: Items.LUMINESCENT_POLLEN,    amount:  3 }],
                    4: [{ item: Items.GUIDE_TO_PRAXIS,            amount:  4 }, { item: Items.LUMINESCENT_POLLEN,    amount:  4 }],
                    5: [{ item: Items.GUIDE_TO_ADMONITION,        amount:  6 }, { item: Items.LUMINESCENT_POLLEN,    amount:  6 }],
                    6: [{ item: Items.GUIDE_TO_INGENUITY,         amount:  9 }, { item: Items.LUMINESCENT_POLLEN,    amount:  9 }],
                    7: [{ item: Items.PHILOSOPHIES_OF_PRAXIS,     amount:  4 }, { item: Items.CRYSTALLINE_CYST_DUST, amount:  4 }, { item: Items.MUDRA_OF_THE_MALEFIC_GENERAL, amount: 1 }],
                    8: [{ item: Items.PHILOSOPHIES_OF_ADMONITION, amount:  6 }, { item: Items.CRYSTALLINE_CYST_DUST, amount:  6 }, { item: Items.MUDRA_OF_THE_MALEFIC_GENERAL, amount: 1 }],
                    9: [{ item: Items.PHILOSOPHIES_OF_INGENUITY,  amount: 12 }, { item: Items.CRYSTALLINE_CYST_DUST, amount:  9 }, { item: Items.MUDRA_OF_THE_MALEFIC_GENERAL, amount: 2 }],
                   10: [{ item: Items.PHILOSOPHIES_OF_PRAXIS,     amount: 16 }, { item: Items.CRYSTALLINE_CYST_DUST, amount: 12 }, { item: Items.MUDRA_OF_THE_MALEFIC_GENERAL, amount: 2 }]
                }},
                elemental_burst: { min: 1, max: 10, materials: {
                    2: [{ item: Items.TEACHINGS_OF_ADMONITION,    amount:  3 }, { item: Items.FUNGAL_SPORES,         amount:  6 }],
                    3: [{ item: Items.GUIDE_TO_INGENUITY,         amount:  2 }, { item: Items.LUMINESCENT_POLLEN,    amount:  3 }],
                    4: [{ item: Items.GUIDE_TO_PRAXIS,            amount:  4 }, { item: Items.LUMINESCENT_POLLEN,    amount:  4 }],
                    5: [{ item: Items.GUIDE_TO_ADMONITION,        amount:  6 }, { item: Items.LUMINESCENT_POLLEN,    amount:  6 }],
                    6: [{ item: Items.GUIDE_TO_INGENUITY,         amount:  9 }, { item: Items.LUMINESCENT_POLLEN,    amount:  9 }],
                    7: [{ item: Items.PHILOSOPHIES_OF_PRAXIS,     amount:  4 }, { item: Items.CRYSTALLINE_CYST_DUST, amount:  4 }, { item: Items.MUDRA_OF_THE_MALEFIC_GENERAL, amount: 1 }],
                    8: [{ item: Items.PHILOSOPHIES_OF_ADMONITION, amount:  6 }, { item: Items.CRYSTALLINE_CYST_DUST, amount:  6 }, { item: Items.MUDRA_OF_THE_MALEFIC_GENERAL, amount: 1 }],
                    9: [{ item: Items.PHILOSOPHIES_OF_INGENUITY,  amount: 12 }, { item: Items.CRYSTALLINE_CYST_DUST, amount:  9 }, { item: Items.MUDRA_OF_THE_MALEFIC_GENERAL, amount: 2 }],
                   10: [{ item: Items.PHILOSOPHIES_OF_PRAXIS,     amount: 16 }, { item: Items.CRYSTALLINE_CYST_DUST, amount: 12 }, { item: Items.MUDRA_OF_THE_MALEFIC_GENERAL, amount: 2 }]
               }}
            }},
            { element: Elements.HYDRO, talents: {
                normal_attack: { min: 1, max: 10, materials: {
                    2: [{ item: Items.TEACHINGS_OF_EQUITY,     amount:  3 }, { item: Items.TRANSOCEANIC_PEARL,    amount:  6 }],
                    3: [{ item: Items.GUIDE_TO_JUSTICE,        amount:  2 }, { item: Items.TRANSOCEANIC_CHUNK,    amount:  3 }],
                    4: [{ item: Items.GUIDE_TO_ORDER,          amount:  4 }, { item: Items.TRANSOCEANIC_CHUNK,    amount:  4 }],
                    5: [{ item: Items.GUIDE_TO_EQUITY,         amount:  6 }, { item: Items.TRANSOCEANIC_CHUNK,    amount:  6 }],
                    6: [{ item: Items.GUIDE_TO_JUSTICE,        amount:  9 }, { item: Items.TRANSOCEANIC_CHUNK,    amount:  9 }],
                    7: [{ item: Items.PHILOSOPHIES_OF_ORDER,   amount:  4 }, { item: Items.XENOCHROMATIC_CRYSTAL, amount:  4 }, { item: Items.WORLDSPAN_FERN, amount: 1 }],
                    8: [{ item: Items.PHILOSOPHIES_OF_EQUITY,  amount:  6 }, { item: Items.XENOCHROMATIC_CRYSTAL, amount:  6 }, { item: Items.WORLDSPAN_FERN, amount: 1 }],
                    9: [{ item: Items.PHILOSOPHIES_OF_JUSTICE, amount: 12 }, { item: Items.XENOCHROMATIC_CRYSTAL, amount:  9 }, { item: Items.WORLDSPAN_FERN, amount: 2 }],
                   10: [{ item: Items.PHILOSOPHIES_OF_ORDER,   amount: 16 }, { item: Items.XENOCHROMATIC_CRYSTAL, amount: 12 }, { item: Items.WORLDSPAN_FERN, amount: 2 }]
                }},
                elemental_skill: { min: 1, max: 10, materials: {
                    2: [{ item: Items.TEACHINGS_OF_EQUITY,     amount:  3 }, { item: Items.TRANSOCEANIC_PEARL,    amount:  6 }],
                    3: [{ item: Items.GUIDE_TO_JUSTICE,        amount:  2 }, { item: Items.TRANSOCEANIC_CHUNK,    amount:  3 }],
                    4: [{ item: Items.GUIDE_TO_ORDER,          amount:  4 }, { item: Items.TRANSOCEANIC_CHUNK,    amount:  4 }],
                    5: [{ item: Items.GUIDE_TO_EQUITY,         amount:  6 }, { item: Items.TRANSOCEANIC_CHUNK,    amount:  6 }],
                    6: [{ item: Items.GUIDE_TO_JUSTICE,        amount:  9 }, { item: Items.TRANSOCEANIC_CHUNK,    amount:  9 }],
                    7: [{ item: Items.PHILOSOPHIES_OF_ORDER,   amount:  4 }, { item: Items.XENOCHROMATIC_CRYSTAL, amount:  4 }, { item: Items.WORLDSPAN_FERN, amount: 1 }],
                    8: [{ item: Items.PHILOSOPHIES_OF_EQUITY,  amount:  6 }, { item: Items.XENOCHROMATIC_CRYSTAL, amount:  6 }, { item: Items.WORLDSPAN_FERN, amount: 1 }],
                    9: [{ item: Items.PHILOSOPHIES_OF_JUSTICE, amount: 12 }, { item: Items.XENOCHROMATIC_CRYSTAL, amount:  9 }, { item: Items.WORLDSPAN_FERN, amount: 2 }],
                   10: [{ item: Items.PHILOSOPHIES_OF_ORDER,   amount: 16 }, { item: Items.XENOCHROMATIC_CRYSTAL, amount: 12 }, { item: Items.WORLDSPAN_FERN, amount: 2 }]
                }},
                elemental_burst: { min: 1, max: 10, materials: {
                    2: [{ item: Items.TEACHINGS_OF_EQUITY,     amount:  3 }, { item: Items.TRANSOCEANIC_PEARL,    amount:  6 }],
                    3: [{ item: Items.GUIDE_TO_JUSTICE,        amount:  2 }, { item: Items.TRANSOCEANIC_CHUNK,    amount:  3 }],
                    4: [{ item: Items.GUIDE_TO_ORDER,          amount:  4 }, { item: Items.TRANSOCEANIC_CHUNK,    amount:  4 }],
                    5: [{ item: Items.GUIDE_TO_EQUITY,         amount:  6 }, { item: Items.TRANSOCEANIC_CHUNK,    amount:  6 }],
                    6: [{ item: Items.GUIDE_TO_JUSTICE,        amount:  9 }, { item: Items.TRANSOCEANIC_CHUNK,    amount:  9 }],
                    7: [{ item: Items.PHILOSOPHIES_OF_ORDER,   amount:  4 }, { item: Items.XENOCHROMATIC_CRYSTAL, amount:  4 }, { item: Items.WORLDSPAN_FERN, amount: 1 }],
                    8: [{ item: Items.PHILOSOPHIES_OF_EQUITY,  amount:  6 }, { item: Items.XENOCHROMATIC_CRYSTAL, amount:  6 }, { item: Items.WORLDSPAN_FERN, amount: 1 }],
                    9: [{ item: Items.PHILOSOPHIES_OF_JUSTICE, amount: 12 }, { item: Items.XENOCHROMATIC_CRYSTAL, amount:  9 }, { item: Items.WORLDSPAN_FERN, amount: 2 }],
                   10: [{ item: Items.PHILOSOPHIES_OF_ORDER,   amount: 16 }, { item: Items.XENOCHROMATIC_CRYSTAL, amount: 12 }, { item: Items.WORLDSPAN_FERN, amount: 2 }]
               }}
            }},
            { element: Elements.PYRO, talents: {
                normal_attack: { min: 1, max: 10, materials: {
                    2: [{ item: Items.TEACHINGS_OF_CONTENTION,    amount:  3 }, { item: Items["SENTY'S_WOODEN_WHISTLE"],                   amount:  6 }],
                    3: [{ item: Items.GUIDE_TO_KINDLING,          amount:  2 }, { item: Items["WARRIOR'S_METAL_WHISTLE"],                  amount:  3 }],
                    4: [{ item: Items.GUIDE_TO_CONFLICT,          amount:  4 }, { item: Items["WARRIOR'S_METAL_WHISTLE"],                  amount:  4 }],
                    5: [{ item: Items.GUIDE_TO_CONTENTION,        amount:  6 }, { item: Items["WARRIOR'S_METAL_WHISTLE"],                  amount:  6 }],
                    6: [{ item: Items.GUIDE_TO_KINDLING,          amount:  9 }, { item: Items["WARRIOR'S_METAL_WHISTLE"],                  amount:  9 }],
                    7: [{ item: Items.PHILOSOPHIES_OF_CONFLICT,   amount:  4 }, { item: Items["SAURIAN-CROWNED_WARRIOR'S_GOLDEN_WHISTLE"], amount:  4 }, { item: Items.THE_CORNERSTONE_OF_STARS_AND_FLAMES, amount: 1 }],
                    8: [{ item: Items.PHILOSOPHIES_OF_CONTENTION, amount:  6 }, { item: Items["SAURIAN-CROWNED_WARRIOR'S_GOLDEN_WHISTLE"], amount:  6 }, { item: Items.THE_CORNERSTONE_OF_STARS_AND_FLAMES, amount: 1 }],
                    9: [{ item: Items.PHILOSOPHIES_OF_KINDLING,   amount: 12 }, { item: Items["SAURIAN-CROWNED_WARRIOR'S_GOLDEN_WHISTLE"], amount:  9 }, { item: Items.THE_CORNERSTONE_OF_STARS_AND_FLAMES, amount: 2 }],
                   10: [{ item: Items.PHILOSOPHIES_OF_CONFLICT,   amount: 16 }, { item: Items["SAURIAN-CROWNED_WARRIOR'S_GOLDEN_WHISTLE"], amount: 12 }, { item: Items.THE_CORNERSTONE_OF_STARS_AND_FLAMES, amount: 2 }]
                }},
                elemental_skill: { min: 1, max: 10, materials: {
                    2: [{ item: Items.TEACHINGS_OF_CONTENTION,    amount:  3 }, { item: Items["SENTY'S_WOODEN_WHISTLE"],                   amount:  6 }],
                    3: [{ item: Items.GUIDE_TO_KINDLING,          amount:  2 }, { item: Items["WARRIOR'S_METAL_WHISTLE"],                  amount:  3 }],
                    4: [{ item: Items.GUIDE_TO_CONFLICT,          amount:  4 }, { item: Items["WARRIOR'S_METAL_WHISTLE"],                  amount:  4 }],
                    5: [{ item: Items.GUIDE_TO_CONTENTION,        amount:  6 }, { item: Items["WARRIOR'S_METAL_WHISTLE"],                  amount:  6 }],
                    6: [{ item: Items.GUIDE_TO_KINDLING,          amount:  9 }, { item: Items["WARRIOR'S_METAL_WHISTLE"],                  amount:  9 }],
                    7: [{ item: Items.PHILOSOPHIES_OF_CONFLICT,   amount:  4 }, { item: Items["SAURIAN-CROWNED_WARRIOR'S_GOLDEN_WHISTLE"], amount:  4 }, { item: Items.THE_CORNERSTONE_OF_STARS_AND_FLAMES, amount: 1 }],
                    8: [{ item: Items.PHILOSOPHIES_OF_CONTENTION, amount:  6 }, { item: Items["SAURIAN-CROWNED_WARRIOR'S_GOLDEN_WHISTLE"], amount:  6 }, { item: Items.THE_CORNERSTONE_OF_STARS_AND_FLAMES, amount: 1 }],
                    9: [{ item: Items.PHILOSOPHIES_OF_KINDLING,   amount: 12 }, { item: Items["SAURIAN-CROWNED_WARRIOR'S_GOLDEN_WHISTLE"], amount:  9 }, { item: Items.THE_CORNERSTONE_OF_STARS_AND_FLAMES, amount: 2 }],
                   10: [{ item: Items.PHILOSOPHIES_OF_CONFLICT,   amount: 16 }, { item: Items["SAURIAN-CROWNED_WARRIOR'S_GOLDEN_WHISTLE"], amount: 12 }, { item: Items.THE_CORNERSTONE_OF_STARS_AND_FLAMES, amount: 2 }]
                }},
                elemental_burst: { min: 1, max: 10, materials: {
                    2: [{ item: Items.TEACHINGS_OF_CONTENTION,    amount:  3 }, { item: Items["SENTY'S_WOODEN_WHISTLE"],                   amount:  6 }],
                    3: [{ item: Items.GUIDE_TO_KINDLING,          amount:  2 }, { item: Items["WARRIOR'S_METAL_WHISTLE"],                  amount:  3 }],
                    4: [{ item: Items.GUIDE_TO_CONFLICT,          amount:  4 }, { item: Items["WARRIOR'S_METAL_WHISTLE"],                  amount:  4 }],
                    5: [{ item: Items.GUIDE_TO_CONTENTION,        amount:  6 }, { item: Items["WARRIOR'S_METAL_WHISTLE"],                  amount:  6 }],
                    6: [{ item: Items.GUIDE_TO_KINDLING,          amount:  9 }, { item: Items["WARRIOR'S_METAL_WHISTLE"],                  amount:  9 }],
                    7: [{ item: Items.PHILOSOPHIES_OF_CONFLICT,   amount:  4 }, { item: Items["SAURIAN-CROWNED_WARRIOR'S_GOLDEN_WHISTLE"], amount:  4 }, { item: Items.THE_CORNERSTONE_OF_STARS_AND_FLAMES, amount: 1 }],
                    8: [{ item: Items.PHILOSOPHIES_OF_CONTENTION, amount:  6 }, { item: Items["SAURIAN-CROWNED_WARRIOR'S_GOLDEN_WHISTLE"], amount:  6 }, { item: Items.THE_CORNERSTONE_OF_STARS_AND_FLAMES, amount: 1 }],
                    9: [{ item: Items.PHILOSOPHIES_OF_KINDLING,   amount: 12 }, { item: Items["SAURIAN-CROWNED_WARRIOR'S_GOLDEN_WHISTLE"], amount:  9 }, { item: Items.THE_CORNERSTONE_OF_STARS_AND_FLAMES, amount: 2 }],
                   10: [{ item: Items.PHILOSOPHIES_OF_CONFLICT,   amount: 16 }, { item: Items["SAURIAN-CROWNED_WARRIOR'S_GOLDEN_WHISTLE"], amount: 12 }, { item: Items.THE_CORNERSTONE_OF_STARS_AND_FLAMES, amount: 2 }]
               }}
            }},
            { element: Elements.CRYO, talents: {
                normal_attack: { min: 1, max: 10, materials: {
                     2: [],
                     3: [],
                     4: [],
                     5: [],
                     6: [],
                     7: [],
                     8: [],
                     9: [],
                    10: []
                }},
                elemental_skill: { min: 1, max: 10, materials: {
                     2: [],
                     3: [],
                     4: [],
                     5: [],
                     6: [],
                     7: [],
                     8: [],
                     9: [],
                    10: []
                }},
                elemental_burst: { min: 1, max: 10, materials: {
                     2: [],
                     3: [],
                     4: [],
                     5: [],
                     6: [],
                     7: [],
                     8: [],
                     9: [],
                    10: []
                }}
            }}
        ]
    });
    static AMBER              = new Character({ name: "AMBER",              /* FINISHED */ 
        level: { min: 1, max: 90, materials: {
            "20+": [{ item: Items.AGNIDUS_AGATE_SLIVER,   amount: 1 },                                             { item: Items.SMALL_LAMP_GRASS, amount:  3 }, { item: Items.FIRM_ARROWHEAD,     amount:  3 }],
            "40+": [{ item: Items.AGNIDUS_AGATE_FRAGMENT, amount: 3 },                                             { item: Items.SMALL_LAMP_GRASS, amount: 10 }, { item: Items.FIRM_ARROWHEAD,     amount: 15 }],
            "50+": [{ item: Items.AGNIDUS_AGATE_FRAGMENT, amount: 6 }, { item: Items.EVERFLAME_SEED, amount:  4 }, { item: Items.SMALL_LAMP_GRASS, amount: 20 }, { item: Items.SHARP_ARROWHEAD,    amount: 12 }],
            "60+": [{ item: Items.AGNIDUS_AGATE_CHUNK,    amount: 3 }, { item: Items.EVERFLAME_SEED, amount:  8 }, { item: Items.SMALL_LAMP_GRASS, amount: 30 }, { item: Items.SHARP_ARROWHEAD,    amount: 18 }],
            "70+": [{ item: Items.AGNIDUS_AGATE_CHUNK,    amount: 6 }, { item: Items.EVERFLAME_SEED, amount: 12 }, { item: Items.SMALL_LAMP_GRASS, amount: 45 }, { item: Items.WATHERED_ARROWHEAD, amount: 12 }],
            "80+": [{ item: Items.AGNIDUS_AGATE_GEMSTONE, amount: 6 }, { item: Items.EVERFLAME_SEED, amount: 20 }, { item: Items.SMALL_LAMP_GRASS, amount: 60 }, { item: Items.WATHERED_ARROWHEAD, amount: 24 }],
        }},
        elements: [
            { element: Elements.PYRO, talents: {
                normal_attack: { min: 1, max: 10, materials: {
                    2:  [{ item: Items.TEACHINGS_OF_FREEDOM,    amount:  3 }, { item: Items.FIRM_ARROWHEAD,     amount:  6 }],
                    3:  [{ item: Items.GUIDE_TO_FREEDOM,        amount:  2 }, { item: Items.SHARP_ARROWHEAD,    amount:  3 }],
                    4:  [{ item: Items.GUIDE_TO_FREEDOM,        amount:  4 }, { item: Items.SHARP_ARROWHEAD,    amount:  4 }],
                    5:  [{ item: Items.GUIDE_TO_FREEDOM,        amount:  6 }, { item: Items.SHARP_ARROWHEAD,    amount:  6 }],
                    6:  [{ item: Items.GUIDE_TO_FREEDOM,        amount:  9 }, { item: Items.SHARP_ARROWHEAD,    amount:  9 }],
                    7:  [{ item: Items.PHILOSOPHIES_OF_FREEDOM, amount:  4 }, { item: Items.WATHERED_ARROWHEAD, amount:  4 }, { item: Items["DVALIN'S_SIGH"], amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_FREEDOM, amount:  6 }, { item: Items.WATHERED_ARROWHEAD, amount:  6 }, { item: Items["DVALIN'S_SIGH"], amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_FREEDOM, amount: 12 }, { item: Items.WATHERED_ARROWHEAD, amount:  9 }, { item: Items["DVALIN'S_SIGH"], amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_FREEDOM, amount: 16 }, { item: Items.WATHERED_ARROWHEAD, amount: 12 }, { item: Items["DVALIN'S_SIGH"], amount: 2 }],
                }},
                elemental_skill: { min: 1, max: 10, materials: {
                    2:  [{ item: Items.TEACHINGS_OF_FREEDOM,    amount:  3 }, { item: Items.FIRM_ARROWHEAD,     amount:  6 }],
                    3:  [{ item: Items.GUIDE_TO_FREEDOM,        amount:  2 }, { item: Items.SHARP_ARROWHEAD,    amount:  3 }],
                    4:  [{ item: Items.GUIDE_TO_FREEDOM,        amount:  4 }, { item: Items.SHARP_ARROWHEAD,    amount:  4 }],
                    5:  [{ item: Items.GUIDE_TO_FREEDOM,        amount:  6 }, { item: Items.SHARP_ARROWHEAD,    amount:  6 }],
                    6:  [{ item: Items.GUIDE_TO_FREEDOM,        amount:  9 }, { item: Items.SHARP_ARROWHEAD,    amount:  9 }],
                    7:  [{ item: Items.PHILOSOPHIES_OF_FREEDOM, amount:  4 }, { item: Items.WATHERED_ARROWHEAD, amount:  4 }, { item: Items["DVALIN'S_SIGH"], amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_FREEDOM, amount:  6 }, { item: Items.WATHERED_ARROWHEAD, amount:  6 }, { item: Items["DVALIN'S_SIGH"], amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_FREEDOM, amount: 12 }, { item: Items.WATHERED_ARROWHEAD, amount:  9 }, { item: Items["DVALIN'S_SIGH"], amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_FREEDOM, amount: 16 }, { item: Items.WATHERED_ARROWHEAD, amount: 12 }, { item: Items["DVALIN'S_SIGH"], amount: 2 }],
                }},
                elemental_burst: { min: 1, max: 10, materials: {
                    2:  [{ item: Items.TEACHINGS_OF_FREEDOM,    amount:  3 }, { item: Items.FIRM_ARROWHEAD,     amount:  6 }],
                    3:  [{ item: Items.GUIDE_TO_FREEDOM,        amount:  2 }, { item: Items.SHARP_ARROWHEAD,    amount:  3 }],
                    4:  [{ item: Items.GUIDE_TO_FREEDOM,        amount:  4 }, { item: Items.SHARP_ARROWHEAD,    amount:  4 }],
                    5:  [{ item: Items.GUIDE_TO_FREEDOM,        amount:  6 }, { item: Items.SHARP_ARROWHEAD,    amount:  6 }],
                    6:  [{ item: Items.GUIDE_TO_FREEDOM,        amount:  9 }, { item: Items.SHARP_ARROWHEAD,    amount:  9 }],
                    7:  [{ item: Items.PHILOSOPHIES_OF_FREEDOM, amount:  4 }, { item: Items.WATHERED_ARROWHEAD, amount:  4 }, { item: Items["DVALIN'S_SIGH"], amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_FREEDOM, amount:  6 }, { item: Items.WATHERED_ARROWHEAD, amount:  6 }, { item: Items["DVALIN'S_SIGH"], amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_FREEDOM, amount: 12 }, { item: Items.WATHERED_ARROWHEAD, amount:  9 }, { item: Items["DVALIN'S_SIGH"], amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_FREEDOM, amount: 16 }, { item: Items.WATHERED_ARROWHEAD, amount: 12 }, { item: Items["DVALIN'S_SIGH"], amount: 2 }],
                }}
            }
        }]
    });
    static KAEYA              = new Character({ name: "KAEYA",              /* FINISHED */ 
        level: { materials: { 
            "20+": [{ item: Items.SHIVADA_JADE_SLIVER,   amount: 1 },                                             { item: Items.CALLA_LILY, amount:  3 }, { item: Items.TREASURE_HOARDER_INSIGNIA, amount:  3 }], 
            "40+": [{ item: Items.SHIVADA_JADE_FRAGMENT, amount: 3 }, { item: Items.HOARFROST_CORE, amount:  2 }, { item: Items.CALLA_LILY, amount: 10 }, { item: Items.TREASURE_HOARDER_INSIGNIA, amount: 15 }], 
            "50+": [{ item: Items.SHIVADA_JADE_FRAGMENT, amount: 6 }, { item: Items.HOARFROST_CORE, amount:  4 }, { item: Items.CALLA_LILY, amount: 20 }, { item: Items.SILVER_RAVEN_INSIGNIA,     amount: 12 }], 
            "60+": [{ item: Items.SHIVADA_JADE_CHUNK,    amount: 3 }, { item: Items.HOARFROST_CORE, amount:  8 }, { item: Items.CALLA_LILY, amount: 30 }, { item: Items.SILVER_RAVEN_INSIGNIA,     amount: 18 }], 
            "70+": [{ item: Items.SHIVADA_JADE_CHUNK,    amount: 6 }, { item: Items.HOARFROST_CORE, amount: 12 }, { item: Items.CALLA_LILY, amount: 45 }, { item: Items.GOLDEN_RAVEN_INSIGNIA,     amount: 12 }], 
            "80+": [{ item: Items.SHIVADA_JADE_GEMSTONE, amount: 6 }, { item: Items.HOARFROST_CORE, amount: 20 }, { item: Items.CALLA_LILY, amount: 60 }, { item: Items.GOLDEN_RAVEN_INSIGNIA,     amount: 24 }]
        }}, 
        elements: [
            { element: Elements.CRYO, talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_BALLAD,    amount:  3 }, {item: Items.TREASURE_HOARDER_INSIGNIA, amount:  6 }], 
                    3:  [{ item: Items.GUIDE_TO_BALLAD,        amount:  2 }, {item: Items.SILVER_RAVEN_INSIGNIA,     amount:  3 }], 
                    4:  [{ item: Items.GUIDE_TO_BALLAD,        amount:  4 }, {item: Items.SILVER_RAVEN_INSIGNIA,     amount:  4 }], 
                    5:  [{ item: Items.GUIDE_TO_BALLAD,        amount:  6 }, {item: Items.SILVER_RAVEN_INSIGNIA,     amount:  6 }],
                    6:  [{ item: Items.GUIDE_TO_BALLAD,        amount:  9 }, {item: Items.SILVER_RAVEN_INSIGNIA,     amount:  9 }],
                    7:  [{ item: Items.PHILOSOPHIES_OF_BALLAD, amount:  4 }, {item: Items.GOLDEN_RAVEN_INSIGNIA,     amount:  4 }, { item: Items.SPIRIT_LOCKET_OF_BOREAS, amount: 1 }], 
                    8:  [{ item: Items.PHILOSOPHIES_OF_BALLAD, amount:  6 }, {item: Items.GOLDEN_RAVEN_INSIGNIA,     amount:  6 }, { item: Items.SPIRIT_LOCKET_OF_BOREAS, amount: 1 }], 
                    9:  [{ item: Items.PHILOSOPHIES_OF_BALLAD, amount: 12 }, {item: Items.GOLDEN_RAVEN_INSIGNIA,     amount:  9 }, { item: Items.SPIRIT_LOCKET_OF_BOREAS, amount: 2 }], 
                    10: [{ item: Items.PHILOSOPHIES_OF_BALLAD, amount: 16 }, {item: Items.GOLDEN_RAVEN_INSIGNIA,     amount: 12 }, { item: Items.SPIRIT_LOCKET_OF_BOREAS, amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_BALLAD,    amount:  3 }, {item: Items.TREASURE_HOARDER_INSIGNIA, amount:  6 }], 
                    3:  [{ item: Items.GUIDE_TO_BALLAD,        amount:  2 }, {item: Items.SILVER_RAVEN_INSIGNIA,     amount:  3 }], 
                    4:  [{ item: Items.GUIDE_TO_BALLAD,        amount:  4 }, {item: Items.SILVER_RAVEN_INSIGNIA,     amount:  4 }], 
                    5:  [{ item: Items.GUIDE_TO_BALLAD,        amount:  6 }, {item: Items.SILVER_RAVEN_INSIGNIA,     amount:  6 }],
                    6:  [{ item: Items.GUIDE_TO_BALLAD,        amount:  9 }, {item: Items.SILVER_RAVEN_INSIGNIA,     amount:  9 }],
                    7:  [{ item: Items.PHILOSOPHIES_OF_BALLAD, amount:  4 }, {item: Items.GOLDEN_RAVEN_INSIGNIA,     amount:  4 }, { item: Items.SPIRIT_LOCKET_OF_BOREAS, amount: 1 }], 
                    8:  [{ item: Items.PHILOSOPHIES_OF_BALLAD, amount:  6 }, {item: Items.GOLDEN_RAVEN_INSIGNIA,     amount:  6 }, { item: Items.SPIRIT_LOCKET_OF_BOREAS, amount: 1 }], 
                    9:  [{ item: Items.PHILOSOPHIES_OF_BALLAD, amount: 12 }, {item: Items.GOLDEN_RAVEN_INSIGNIA,     amount:  9 }, { item: Items.SPIRIT_LOCKET_OF_BOREAS, amount: 2 }], 
                    10: [{ item: Items.PHILOSOPHIES_OF_BALLAD, amount: 16 }, {item: Items.GOLDEN_RAVEN_INSIGNIA,     amount: 12 }, { item: Items.SPIRIT_LOCKET_OF_BOREAS, amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_BALLAD,    amount:  3 }, {item: Items.TREASURE_HOARDER_INSIGNIA, amount:  6 }], 
                    3:  [{ item: Items.GUIDE_TO_BALLAD,        amount:  2 }, {item: Items.SILVER_RAVEN_INSIGNIA,     amount:  3 }], 
                    4:  [{ item: Items.GUIDE_TO_BALLAD,        amount:  4 }, {item: Items.SILVER_RAVEN_INSIGNIA,     amount:  4 }], 
                    5:  [{ item: Items.GUIDE_TO_BALLAD,        amount:  6 }, {item: Items.SILVER_RAVEN_INSIGNIA,     amount:  6 }],
                    6:  [{ item: Items.GUIDE_TO_BALLAD,        amount:  9 }, {item: Items.SILVER_RAVEN_INSIGNIA,     amount:  9 }],
                    7:  [{ item: Items.PHILOSOPHIES_OF_BALLAD, amount:  4 }, {item: Items.GOLDEN_RAVEN_INSIGNIA,     amount:  4 }, { item: Items.SPIRIT_LOCKET_OF_BOREAS, amount: 1 }], 
                    8:  [{ item: Items.PHILOSOPHIES_OF_BALLAD, amount:  6 }, {item: Items.GOLDEN_RAVEN_INSIGNIA,     amount:  6 }, { item: Items.SPIRIT_LOCKET_OF_BOREAS, amount: 1 }], 
                    9:  [{ item: Items.PHILOSOPHIES_OF_BALLAD, amount: 12 }, {item: Items.GOLDEN_RAVEN_INSIGNIA,     amount:  9 }, { item: Items.SPIRIT_LOCKET_OF_BOREAS, amount: 2 }], 
                    10: [{ item: Items.PHILOSOPHIES_OF_BALLAD, amount: 16 }, {item: Items.GOLDEN_RAVEN_INSIGNIA,     amount: 12 }, { item: Items.SPIRIT_LOCKET_OF_BOREAS, amount: 2 }] 
                }}
            }
        }]
    });
    static LISA               = new Character({ name: "LISA",               /* FINISHED */ 
        level: { materials: { 
            "20+": [{ item: Items.VAJRADA_AMETHYST_SLIVER,   amount: 1 },                                              { item: Items.VALBERRY, amount:  3 }, { item: Items.SLIME_CONDENSATE,  amount:  3 }], 
            "40+": [{ item: Items.VAJRADA_AMETHYST_FRAGMENT, amount: 3 }, { item: Items.LIGHTNING_PRISM, amount:  2 }, { item: Items.VALBERRY, amount: 10 }, { item: Items.SLIME_CONDENSATE,  amount: 15 }], 
            "50+": [{ item: Items.VAJRADA_AMETHYST_FRAGMENT, amount: 6 }, { item: Items.LIGHTNING_PRISM, amount:  4 }, { item: Items.VALBERRY, amount: 20 }, { item: Items.SLIME_SECRETIONS,  amount: 12 }], 
            "60+": [{ item: Items.VAJRADA_AMETHYST_CHUNK,    amount: 3 }, { item: Items.LIGHTNING_PRISM, amount:  8 }, { item: Items.VALBERRY, amount: 30 }, { item: Items.SLIME_SECRETIONS,  amount: 18 }], 
            "70+": [{ item: Items.VAJRADA_AMETHYST_CHUNK,    amount: 6 }, { item: Items.LIGHTNING_PRISM, amount: 12 }, { item: Items.VALBERRY, amount: 45 }, { item: Items.SLIME_CONCENTRATE, amount: 12 }], 
            "80+": [{ item: Items.VAJRADA_AMETHYST_GEMSTONE, amount: 6 }, { item: Items.LIGHTNING_PRISM, amount: 20 }, { item: Items.VALBERRY, amount: 60 }, { item: Items.SLIME_CONCENTRATE, amount: 24 }]
        }}, 
        elements: [
            { element: Elements.ELECTRO, talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_BALLAD,    amount:  3 }, {item: Items.SLIME_CONDENSATE,      amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_BALLAD,        amount:  2 }, {item: Items.SLIME_SECRETIONS,      amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_BALLAD,        amount:  4 }, {item: Items.SLIME_SECRETIONS,      amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_BALLAD,        amount:  6 }, {item: Items.SLIME_SECRETIONS,      amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_BALLAD,        amount:  9 }, {item: Items.SLIME_SECRETIONS,      amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_BALLAD, amount:  4 }, {item: Items.SLIME_CONCENTRATE,     amount:  4 }, { item: Items["DVALIN'S_CLAW"], amount: 1 }], 
                    8:  [{ item: Items.PHILOSOPHIES_OF_BALLAD, amount:  6 }, {item: Items.SLIME_CONCENTRATE,     amount:  6 }, { item: Items["DVALIN'S_CLAW"], amount: 1 }], 
                    9:  [{ item: Items.PHILOSOPHIES_OF_BALLAD, amount: 12 }, {item: Items.SLIME_CONCENTRATE,     amount:  9 }, { item: Items["DVALIN'S_CLAW"], amount: 2 }], 
                    10: [{ item: Items.PHILOSOPHIES_OF_BALLAD, amount: 16 }, {item: Items.SLIME_CONCENTRATE,     amount: 12 }, { item: Items["DVALIN'S_CLAW"], amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_BALLAD,    amount:  3 }, {item: Items.SLIME_CONDENSATE,      amount:  6 }], 
                    3:  [{ item: Items.GUIDE_TO_BALLAD,        amount:  2 }, {item: Items.SLIME_SECRETIONS,      amount:  3 }], 
                    4:  [{ item: Items.GUIDE_TO_BALLAD,        amount:  4 }, {item: Items.SLIME_SECRETIONS,      amount:  4 }], 
                    5:  [{ item: Items.GUIDE_TO_BALLAD,        amount:  6 }, {item: Items.SLIME_SECRETIONS,      amount:  6 }],
                    6:  [{ item: Items.GUIDE_TO_BALLAD,        amount:  9 }, {item: Items.SLIME_SECRETIONS,      amount:  9 }],
                    7:  [{ item: Items.PHILOSOPHIES_OF_BALLAD, amount:  4 }, {item: Items.SLIME_CONCENTRATE,     amount:  4 }, { item: Items["DVALIN'S_CLAW"], amount: 1 }], 
                    8:  [{ item: Items.PHILOSOPHIES_OF_BALLAD, amount:  6 }, {item: Items.SLIME_CONCENTRATE,     amount:  6 }, { item: Items["DVALIN'S_CLAW"], amount: 1 }], 
                    9:  [{ item: Items.PHILOSOPHIES_OF_BALLAD, amount: 12 }, {item: Items.SLIME_CONCENTRATE,     amount:  9 }, { item: Items["DVALIN'S_CLAW"], amount: 2 }], 
                    10: [{ item: Items.PHILOSOPHIES_OF_BALLAD, amount: 16 }, {item: Items.SLIME_CONCENTRATE,     amount: 12 }, { item: Items["DVALIN'S_CLAW"], amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_BALLAD,    amount:  3 }, {item: Items.SLIME_CONDENSATE,      amount:  6 }], 
                    3:  [{ item: Items.GUIDE_TO_BALLAD,        amount:  2 }, {item: Items.SLIME_SECRETIONS,      amount:  3 }], 
                    4:  [{ item: Items.GUIDE_TO_BALLAD,        amount:  4 }, {item: Items.SLIME_SECRETIONS,      amount:  4 }], 
                    5:  [{ item: Items.GUIDE_TO_BALLAD,        amount:  6 }, {item: Items.SLIME_SECRETIONS,      amount:  6 }],
                    6:  [{ item: Items.GUIDE_TO_BALLAD,        amount:  9 }, {item: Items.SLIME_SECRETIONS,      amount:  9 }],
                    7:  [{ item: Items.PHILOSOPHIES_OF_BALLAD, amount:  4 }, {item: Items.SLIME_CONCENTRATE,     amount:  4 }, { item: Items["DVALIN'S_CLAW"], amount: 1 }], 
                    8:  [{ item: Items.PHILOSOPHIES_OF_BALLAD, amount:  6 }, {item: Items.SLIME_CONCENTRATE,     amount:  6 }, { item: Items["DVALIN'S_CLAW"], amount: 1 }], 
                    9:  [{ item: Items.PHILOSOPHIES_OF_BALLAD, amount: 12 }, {item: Items.SLIME_CONCENTRATE,     amount:  9 }, { item: Items["DVALIN'S_CLAW"], amount: 2 }], 
                    10: [{ item: Items.PHILOSOPHIES_OF_BALLAD, amount: 16 }, {item: Items.SLIME_CONCENTRATE,     amount: 12 }, { item: Items["DVALIN'S_CLAW"], amount: 2 }] 
                }
            }}
        }]
    });
    static BARBARA            = new Character({ name: "BARBARA",            /* FINISHED */ 
        level: { materials: { 
            "20+": [{ item: Items.VARUNADA_LAZURITE_SLIVER,   amount: 1 },                                              { item: Items.PHILANEMO_MUSHROOM, amount:  3 }, { item: Items.DIVINING_SCROLL,        amount:  3 }], 
            "40+": [{ item: Items.VARUNADA_LAZURITE_FRAGMENT, amount: 3 }, { item: Items.CLEANSING_HEART, amount:  2 }, { item: Items.PHILANEMO_MUSHROOM, amount: 10 }, { item: Items.DIVINING_SCROLL,        amount: 15 }], 
            "50+": [{ item: Items.VARUNADA_LAZURITE_FRAGMENT, amount: 6 }, { item: Items.CLEANSING_HEART, amount:  4 }, { item: Items.PHILANEMO_MUSHROOM, amount: 20 }, { item: Items.SEALED_SCROLL,          amount: 12 }], 
            "60+": [{ item: Items.VARUNADA_LAZURITE_CHUNK,    amount: 3 }, { item: Items.CLEANSING_HEART, amount:  8 }, { item: Items.PHILANEMO_MUSHROOM, amount: 30 }, { item: Items.SEALED_SCROLL,          amount: 18 }], 
            "70+": [{ item: Items.VARUNADA_LAZURITE_CHUNK,    amount: 9 }, { item: Items.CLEANSING_HEART, amount: 12 }, { item: Items.PHILANEMO_MUSHROOM, amount: 45 }, { item: Items.FORBIDDEN_CURSE_SCROLL, amount: 12 }], 
            "80+": [{ item: Items.VARUNADA_LAZURITE_GEMSTONE, amount: 6 }, { item: Items.CLEANSING_HEART, amount: 20 }, { item: Items.PHILANEMO_MUSHROOM, amount: 60 }, { item: Items.FORBIDDEN_CURSE_SCROLL, amount: 24 }]
        }}, 
        elements: [
            { element: Elements.HYDRO, talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_FREEDOM,    amount:  3 }, {item: Items.DIVINING_SCROLL,        amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_FREEDOM,        amount:  2 }, {item: Items.SEALED_SCROLL,          amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_FREEDOM,        amount:  4 }, {item: Items.SEALED_SCROLL,          amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_FREEDOM,        amount:  6 }, {item: Items.SEALED_SCROLL,          amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_FREEDOM,        amount:  9 }, {item: Items.SEALED_SCROLL,          amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_FREEDOM, amount:  4 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount:  4 }, { item: Items.RING_OF_BOREAS, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_FREEDOM, amount:  6 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount:  6 }, { item: Items.RING_OF_BOREAS, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_FREEDOM, amount: 12 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount:  9 }, { item: Items.RING_OF_BOREAS, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_FREEDOM, amount: 16 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount: 12 }, { item: Items.RING_OF_BOREAS, amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_FREEDOM,    amount:  3 }, {item: Items.DIVINING_SCROLL,        amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_FREEDOM,        amount:  2 }, {item: Items.SEALED_SCROLL,          amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_FREEDOM,        amount:  4 }, {item: Items.SEALED_SCROLL,          amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_FREEDOM,        amount:  6 }, {item: Items.SEALED_SCROLL,          amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_FREEDOM,        amount:  9 }, {item: Items.SEALED_SCROLL,          amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_FREEDOM, amount:  4 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount:  4 }, { item: Items.RING_OF_BOREAS, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_FREEDOM, amount:  6 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount:  6 }, { item: Items.RING_OF_BOREAS, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_FREEDOM, amount: 12 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount:  9 }, { item: Items.RING_OF_BOREAS, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_FREEDOM, amount: 16 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount: 12 }, { item: Items.RING_OF_BOREAS, amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_FREEDOM,    amount:  3 }, {item: Items.DIVINING_SCROLL,        amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_FREEDOM,        amount:  2 }, {item: Items.SEALED_SCROLL,          amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_FREEDOM,        amount:  4 }, {item: Items.SEALED_SCROLL,          amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_FREEDOM,        amount:  6 }, {item: Items.SEALED_SCROLL,          amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_FREEDOM,        amount:  9 }, {item: Items.SEALED_SCROLL,          amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_FREEDOM, amount:  4 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount:  4 }, { item: Items.RING_OF_BOREAS, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_FREEDOM, amount:  6 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount:  6 }, { item: Items.RING_OF_BOREAS, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_FREEDOM, amount: 12 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount:  9 }, { item: Items.RING_OF_BOREAS, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_FREEDOM, amount: 16 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount: 12 }, { item: Items.RING_OF_BOREAS, amount: 2 }] 
                }}
            }
        }]
    });
    static RAZOR              = new Character({ name: "RAZOR",              /* FINISHED */ 
        level: { materials: { 
            "20+": [{ item: Items.VAJRADA_AMETHYST_SLIVER,   amount: 1 },                                              { item: Items.WOLFHOOK, amount:  3 }, { item: Items.DAMAGED_MASK, amount:  3 }], 
            "40+": [{ item: Items.VAJRADA_AMETHYST_FRAGMENT, amount: 3 }, { item: Items.LIGHTNING_PRISM, amount:  2 }, { item: Items.WOLFHOOK, amount: 10 }, { item: Items.DAMAGED_MASK, amount: 15 }], 
            "50+": [{ item: Items.VAJRADA_AMETHYST_FRAGMENT, amount: 6 }, { item: Items.LIGHTNING_PRISM, amount:  4 }, { item: Items.WOLFHOOK, amount: 20 }, { item: Items.STAINED_MASK, amount: 12 }], 
            "60+": [{ item: Items.VAJRADA_AMETHYST_CHUNK,    amount: 3 }, { item: Items.LIGHTNING_PRISM, amount:  8 }, { item: Items.WOLFHOOK, amount: 30 }, { item: Items.STAINED_MASK, amount: 18 }], 
            "70+": [{ item: Items.VAJRADA_AMETHYST_CHUNK,    amount: 6 }, { item: Items.LIGHTNING_PRISM, amount: 12 }, { item: Items.WOLFHOOK, amount: 45 }, { item: Items.OMINOUS_MASK, amount: 12 }], 
            "80+": [{ item: Items.VAJRADA_AMETHYST_GEMSTONE, amount: 6 }, { item: Items.LIGHTNING_PRISM, amount: 20 }, { item: Items.WOLFHOOK, amount: 60 }, { item: Items.OMINOUS_MASK, amount: 24 }]
        }}, 
        elements: [
            { element: Elements.ELECTRO, talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_RESISTANCE   , amount:  3 }, {item: Items.DAMAGED_MASK, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_RESISTANCE       , amount:  2 }, {item: Items.STAINED_MASK, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_RESISTANCE       , amount:  4 }, {item: Items.STAINED_MASK, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_RESISTANCE       , amount:  6 }, {item: Items.STAINED_MASK, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_RESISTANCE       , amount:  9 }, {item: Items.STAINED_MASK, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_RESISTANCE, amount:  4 }, {item: Items.OMINOUS_MASK, amount:  4 }, { item: Items["DVALIN'S_CLAW"], amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_RESISTANCE, amount:  6 }, {item: Items.OMINOUS_MASK, amount:  6 }, { item: Items["DVALIN'S_CLAW"], amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_RESISTANCE, amount: 12 }, {item: Items.OMINOUS_MASK, amount:  9 }, { item: Items["DVALIN'S_CLAW"], amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_RESISTANCE, amount: 16 }, {item: Items.OMINOUS_MASK, amount: 12 }, { item: Items["DVALIN'S_CLAW"], amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_RESISTANCE   , amount:  3 }, {item: Items.DAMAGED_MASK, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_RESISTANCE       , amount:  2 }, {item: Items.STAINED_MASK, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_RESISTANCE       , amount:  4 }, {item: Items.STAINED_MASK, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_RESISTANCE       , amount:  6 }, {item: Items.STAINED_MASK, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_RESISTANCE       , amount:  9 }, {item: Items.STAINED_MASK, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_RESISTANCE, amount:  4 }, {item: Items.OMINOUS_MASK, amount:  4 }, { item: Items["DVALIN'S_CLAW"], amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_RESISTANCE, amount:  6 }, {item: Items.OMINOUS_MASK, amount:  6 }, { item: Items["DVALIN'S_CLAW"], amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_RESISTANCE, amount: 12 }, {item: Items.OMINOUS_MASK, amount:  9 }, { item: Items["DVALIN'S_CLAW"], amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_RESISTANCE, amount: 16 }, {item: Items.OMINOUS_MASK, amount: 12 }, { item: Items["DVALIN'S_CLAW"], amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_RESISTANCE   , amount:  3 }, {item: Items.DAMAGED_MASK, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_RESISTANCE       , amount:  2 }, {item: Items.STAINED_MASK, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_RESISTANCE       , amount:  4 }, {item: Items.STAINED_MASK, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_RESISTANCE       , amount:  6 }, {item: Items.STAINED_MASK, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_RESISTANCE       , amount:  9 }, {item: Items.STAINED_MASK, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_RESISTANCE, amount:  4 }, {item: Items.OMINOUS_MASK, amount:  4 }, { item: Items["DVALIN'S_CLAW"], amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_RESISTANCE, amount:  6 }, {item: Items.OMINOUS_MASK, amount:  6 }, { item: Items["DVALIN'S_CLAW"], amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_RESISTANCE, amount: 12 }, {item: Items.OMINOUS_MASK, amount:  9 }, { item: Items["DVALIN'S_CLAW"], amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_RESISTANCE, amount: 16 }, {item: Items.OMINOUS_MASK, amount: 12 }, { item: Items["DVALIN'S_CLAW"], amount: 2 }] 
                }}
            }
        }]
    });
    static XIANGLING          = new Character({ name: "XIANGLING",          /* FINISHED */ 
        level: { materials: { 
            "20+": [{ item: Items.AGNIDUS_AGATE_SLIVER,   amount: 1 },                                             { item: Items.JUEYUN_CHILI, amount:  3 }, { item: Items.SLIME_CONDENSATE,  amount:  3 }], 
            "40+": [{ item: Items.AGNIDUS_AGATE_FRAGMENT, amount: 3 }, { item: Items.EVERFLAME_SEED, amount:  2 }, { item: Items.JUEYUN_CHILI, amount: 10 }, { item: Items.SLIME_CONDENSATE,  amount: 15 }], 
            "50+": [{ item: Items.AGNIDUS_AGATE_FRAGMENT, amount: 6 }, { item: Items.EVERFLAME_SEED, amount:  4 }, { item: Items.JUEYUN_CHILI, amount: 20 }, { item: Items.SLIME_SECRETIONS,  amount: 12 }], 
            "60+": [{ item: Items.AGNIDUS_AGATE_CHUNK,    amount: 3 }, { item: Items.EVERFLAME_SEED, amount:  8 }, { item: Items.JUEYUN_CHILI, amount: 30 }, { item: Items.SLIME_SECRETIONS,  amount: 18 }], 
            "70+": [{ item: Items.AGNIDUS_AGATE_CHUNK,    amount: 6 }, { item: Items.EVERFLAME_SEED, amount: 12 }, { item: Items.JUEYUN_CHILI, amount: 45 }, { item: Items.SLIME_CONCENTRATE, amount: 12 }], 
            "80+": [{ item: Items.AGNIDUS_AGATE_GEMSTONE, amount: 6 }, { item: Items.EVERFLAME_SEED, amount: 20 }, { item: Items.JUEYUN_CHILI, amount: 60 }, { item: Items.SLIME_CONCENTRATE, amount: 24 }]
        }}, 
        elements: [
            { element: Elements.PYRO, talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_DILIGENCE   , amount:  3 }, {item: Items.SLIME_CONDENSATE,  amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_DILIGENCE       , amount:  2 }, {item: Items.SLIME_SECRETIONS,  amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_DILIGENCE       , amount:  4 }, {item: Items.SLIME_SECRETIONS,  amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_DILIGENCE       , amount:  6 }, {item: Items.SLIME_SECRETIONS,  amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_DILIGENCE       , amount:  9 }, {item: Items.SLIME_SECRETIONS,  amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_DILIGENCE, amount:  4 }, {item: Items.SLIME_CONCENTRATE, amount:  4 }, { item: Items["DVALIN'S_CLAW"], amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_DILIGENCE, amount:  6 }, {item: Items.SLIME_CONCENTRATE, amount:  6 }, { item: Items["DVALIN'S_CLAW"], amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_DILIGENCE, amount: 12 }, {item: Items.SLIME_CONCENTRATE, amount:  9 }, { item: Items["DVALIN'S_CLAW"], amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_DILIGENCE, amount: 16 }, {item: Items.SLIME_CONCENTRATE, amount: 12 }, { item: Items["DVALIN'S_CLAW"], amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_DILIGENCE   , amount:  3 }, {item: Items.SLIME_CONDENSATE,  amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_DILIGENCE       , amount:  2 }, {item: Items.SLIME_SECRETIONS,  amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_DILIGENCE       , amount:  4 }, {item: Items.SLIME_SECRETIONS,  amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_DILIGENCE       , amount:  6 }, {item: Items.SLIME_SECRETIONS,  amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_DILIGENCE       , amount:  9 }, {item: Items.SLIME_SECRETIONS,  amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_DILIGENCE, amount:  4 }, {item: Items.SLIME_CONCENTRATE, amount:  4 }, { item: Items["DVALIN'S_CLAW"], amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_DILIGENCE, amount:  6 }, {item: Items.SLIME_CONCENTRATE, amount:  6 }, { item: Items["DVALIN'S_CLAW"], amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_DILIGENCE, amount: 12 }, {item: Items.SLIME_CONCENTRATE, amount:  9 }, { item: Items["DVALIN'S_CLAW"], amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_DILIGENCE, amount: 16 }, {item: Items.SLIME_CONCENTRATE, amount: 12 }, { item: Items["DVALIN'S_CLAW"], amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_DILIGENCE   , amount:  3 }, {item: Items.SLIME_CONDENSATE,  amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_DILIGENCE       , amount:  2 }, {item: Items.SLIME_SECRETIONS,  amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_DILIGENCE       , amount:  4 }, {item: Items.SLIME_SECRETIONS,  amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_DILIGENCE       , amount:  6 }, {item: Items.SLIME_SECRETIONS,  amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_DILIGENCE       , amount:  9 }, {item: Items.SLIME_SECRETIONS,  amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_DILIGENCE, amount:  4 }, {item: Items.SLIME_CONCENTRATE, amount:  4 }, { item: Items["DVALIN'S_CLAW"], amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_DILIGENCE, amount:  6 }, {item: Items.SLIME_CONCENTRATE, amount:  6 }, { item: Items["DVALIN'S_CLAW"], amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_DILIGENCE, amount: 12 }, {item: Items.SLIME_CONCENTRATE, amount:  9 }, { item: Items["DVALIN'S_CLAW"], amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_DILIGENCE, amount: 16 }, {item: Items.SLIME_CONCENTRATE, amount: 12 }, { item: Items["DVALIN'S_CLAW"], amount: 2 }] 
                }}
            }
        }]
    });
    static BEIDOU             = new Character({ name: "BEIDOU",             /* FINISHED */ 
        level: { materials: { 
            "20+": [{ item: Items.VAJRADA_AMETHYST_SLIVER,   amount: 1 },                                              { item: Items.NOCTILUCOUS_JADE, amount:  3 }, { item: Items.TREASURE_HOARDER_INSIGNIA, amount:  3 }], 
            "40+": [{ item: Items.VAJRADA_AMETHYST_FRAGMENT, amount: 3 }, { item: Items.LIGHTNING_PRISM, amount:  2 }, { item: Items.NOCTILUCOUS_JADE, amount: 10 }, { item: Items.TREASURE_HOARDER_INSIGNIA, amount: 15 }], 
            "50+": [{ item: Items.VAJRADA_AMETHYST_FRAGMENT, amount: 6 }, { item: Items.LIGHTNING_PRISM, amount:  4 }, { item: Items.NOCTILUCOUS_JADE, amount: 20 }, { item: Items.SILVER_RAVEN_INSIGNIA,     amount: 12 }], 
            "60+": [{ item: Items.VAJRADA_AMETHYST_CHUNK,    amount: 3 }, { item: Items.LIGHTNING_PRISM, amount:  8 }, { item: Items.NOCTILUCOUS_JADE, amount: 30 }, { item: Items.SILVER_RAVEN_INSIGNIA,     amount: 18 }], 
            "70+": [{ item: Items.VAJRADA_AMETHYST_CHUNK,    amount: 6 }, { item: Items.LIGHTNING_PRISM, amount: 12 }, { item: Items.NOCTILUCOUS_JADE, amount: 45 }, { item: Items.GOLDEN_RAVEN_INSIGNIA,     amount: 12 }], 
            "80+": [{ item: Items.VAJRADA_AMETHYST_GEMSTONE, amount: 6 }, { item: Items.LIGHTNING_PRISM, amount: 20 }, { item: Items.NOCTILUCOUS_JADE, amount: 60 }, { item: Items.GOLDEN_RAVEN_INSIGNIA,     amount: 24 }]
        }}, 
        elements: [
            { element: Elements.ELECTRO, talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_GOLD,    amount:  3 }, {item: Items.TREASURE_HOARDER_INSIGNIA, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_GOLD,        amount:  2 }, {item: Items.SILVER_RAVEN_INSIGNIA,     amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_GOLD,        amount:  4 }, {item: Items.SILVER_RAVEN_INSIGNIA,     amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_GOLD,        amount:  6 }, {item: Items.SILVER_RAVEN_INSIGNIA,     amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_GOLD,        amount:  9 }, {item: Items.SILVER_RAVEN_INSIGNIA,     amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_GOLD, amount:  4 }, {item: Items.GOLDEN_RAVEN_INSIGNIA,     amount:  4 }, { item: Items["DVALIN'S_SIGH"], amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_GOLD, amount:  6 }, {item: Items.GOLDEN_RAVEN_INSIGNIA,     amount:  6 }, { item: Items["DVALIN'S_SIGH"], amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_GOLD, amount: 12 }, {item: Items.GOLDEN_RAVEN_INSIGNIA,     amount:  9 }, { item: Items["DVALIN'S_SIGH"], amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_GOLD, amount: 16 }, {item: Items.GOLDEN_RAVEN_INSIGNIA,     amount: 12 }, { item: Items["DVALIN'S_SIGH"], amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_GOLD,    amount:  3 }, {item: Items.TREASURE_HOARDER_INSIGNIA, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_GOLD,        amount:  2 }, {item: Items.SILVER_RAVEN_INSIGNIA,     amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_GOLD,        amount:  4 }, {item: Items.SILVER_RAVEN_INSIGNIA,     amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_GOLD,        amount:  6 }, {item: Items.SILVER_RAVEN_INSIGNIA,     amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_GOLD,        amount:  9 }, {item: Items.SILVER_RAVEN_INSIGNIA,     amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_GOLD, amount:  4 }, {item: Items.GOLDEN_RAVEN_INSIGNIA,     amount:  4 }, { item: Items["DVALIN'S_SIGH"], amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_GOLD, amount:  6 }, {item: Items.GOLDEN_RAVEN_INSIGNIA,     amount:  6 }, { item: Items["DVALIN'S_SIGH"], amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_GOLD, amount: 12 }, {item: Items.GOLDEN_RAVEN_INSIGNIA,     amount:  9 }, { item: Items["DVALIN'S_SIGH"], amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_GOLD, amount: 16 }, {item: Items.GOLDEN_RAVEN_INSIGNIA,     amount: 12 }, { item: Items["DVALIN'S_SIGH"], amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_GOLD,    amount:  3 }, {item: Items.TREASURE_HOARDER_INSIGNIA, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_GOLD,        amount:  2 }, {item: Items.SILVER_RAVEN_INSIGNIA,     amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_GOLD,        amount:  4 }, {item: Items.SILVER_RAVEN_INSIGNIA,     amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_GOLD,        amount:  6 }, {item: Items.SILVER_RAVEN_INSIGNIA,     amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_GOLD,        amount:  9 }, {item: Items.SILVER_RAVEN_INSIGNIA,     amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_GOLD, amount:  4 }, {item: Items.GOLDEN_RAVEN_INSIGNIA,     amount:  4 }, { item: Items["DVALIN'S_SIGH"], amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_GOLD, amount:  6 }, {item: Items.GOLDEN_RAVEN_INSIGNIA,     amount:  6 }, { item: Items["DVALIN'S_SIGH"], amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_GOLD, amount: 12 }, {item: Items.GOLDEN_RAVEN_INSIGNIA,     amount:  9 }, { item: Items["DVALIN'S_SIGH"], amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_GOLD, amount: 16 }, {item: Items.GOLDEN_RAVEN_INSIGNIA,     amount: 12 }, { item: Items["DVALIN'S_SIGH"], amount: 2 }] 
                }}
            }
        }]
    });
    static XINGQIU            = new Character({ name: "XINGQIU",            /* FINISHED */ 
        level: { materials: { 
            "20+": [{ item: Items.VARUNADA_LAZURITE_SLIVER,   amount: 1 },                                              { item: Items.SILK_FLOWER, amount:  3 }, { item: Items.DAMAGED_MASK, amount:  3 }], 
            "40+": [{ item: Items.VARUNADA_LAZURITE_FRAGMENT, amount: 3 }, { item: Items.CLEANSING_HEART, amount:  2 }, { item: Items.SILK_FLOWER, amount: 10 }, { item: Items.DAMAGED_MASK, amount: 15 }], 
            "50+": [{ item: Items.VARUNADA_LAZURITE_FRAGMENT, amount: 6 }, { item: Items.CLEANSING_HEART, amount:  4 }, { item: Items.SILK_FLOWER, amount: 20 }, { item: Items.STAINED_MASK, amount: 12 }], 
            "60+": [{ item: Items.VARUNADA_LAZURITE_CHUNK,    amount: 3 }, { item: Items.CLEANSING_HEART, amount:  8 }, { item: Items.SILK_FLOWER, amount: 30 }, { item: Items.STAINED_MASK, amount: 18 }], 
            "70+": [{ item: Items.VARUNADA_LAZURITE_CHUNK,    amount: 9 }, { item: Items.CLEANSING_HEART, amount: 12 }, { item: Items.SILK_FLOWER, amount: 45 }, { item: Items.OMINOUS_MASK, amount: 12 }], 
            "80+": [{ item: Items.VARUNADA_LAZURITE_GEMSTONE, amount: 6 }, { item: Items.CLEANSING_HEART, amount: 20 }, { item: Items.SILK_FLOWER, amount: 60 }, { item: Items.OMINOUS_MASK, amount: 24 }]
        }}, 
        elements: [
            { element: Elements.HYDRO, talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_GOLD,    amount:  3 }, {item: Items.DAMAGED_MASK, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_GOLD,        amount:  2 }, {item: Items.STAINED_MASK, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_GOLD,        amount:  4 }, {item: Items.STAINED_MASK, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_GOLD,        amount:  6 }, {item: Items.STAINED_MASK, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_GOLD,        amount:  9 }, {item: Items.STAINED_MASK, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_GOLD, amount:  4 }, {item: Items.OMINOUS_MASK, amount:  4 }, { item: Items.TAIL_OF_BOREAS, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_GOLD, amount:  6 }, {item: Items.OMINOUS_MASK, amount:  6 }, { item: Items.TAIL_OF_BOREAS, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_GOLD, amount: 12 }, {item: Items.OMINOUS_MASK, amount:  9 }, { item: Items.TAIL_OF_BOREAS, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_GOLD, amount: 16 }, {item: Items.OMINOUS_MASK, amount: 12 }, { item: Items.TAIL_OF_BOREAS, amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_GOLD,    amount:  3 }, {item: Items.DAMAGED_MASK, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_GOLD,        amount:  2 }, {item: Items.STAINED_MASK, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_GOLD,        amount:  4 }, {item: Items.STAINED_MASK, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_GOLD,        amount:  6 }, {item: Items.STAINED_MASK, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_GOLD,        amount:  9 }, {item: Items.STAINED_MASK, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_GOLD, amount:  4 }, {item: Items.OMINOUS_MASK, amount:  4 }, { item: Items.TAIL_OF_BOREAS, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_GOLD, amount:  6 }, {item: Items.OMINOUS_MASK, amount:  6 }, { item: Items.TAIL_OF_BOREAS, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_GOLD, amount: 12 }, {item: Items.OMINOUS_MASK, amount:  9 }, { item: Items.TAIL_OF_BOREAS, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_GOLD, amount: 16 }, {item: Items.OMINOUS_MASK, amount: 12 }, { item: Items.TAIL_OF_BOREAS, amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_GOLD,    amount:  3 }, {item: Items.DAMAGED_MASK, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_GOLD,        amount:  2 }, {item: Items.STAINED_MASK, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_GOLD,        amount:  4 }, {item: Items.STAINED_MASK, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_GOLD,        amount:  6 }, {item: Items.STAINED_MASK, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_GOLD,        amount:  9 }, {item: Items.STAINED_MASK, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_GOLD, amount:  4 }, {item: Items.OMINOUS_MASK, amount:  4 }, { item: Items.TAIL_OF_BOREAS, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_GOLD, amount:  6 }, {item: Items.OMINOUS_MASK, amount:  6 }, { item: Items.TAIL_OF_BOREAS, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_GOLD, amount: 12 }, {item: Items.OMINOUS_MASK, amount:  9 }, { item: Items.TAIL_OF_BOREAS, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_GOLD, amount: 16 }, {item: Items.OMINOUS_MASK, amount: 12 }, { item: Items.TAIL_OF_BOREAS, amount: 2 }] 
                }}
            }
        }]
    });
    static NINGGUANG          = new Character({ name: "NINGGUANG",          /* FINISHED */ 
        level: { materials: { 
            "20+": [{ item: Items.PRITHIVA_TOPAZ_SLIVER,   amount: 1 },                                            { item: Items.GLAZE_LILY, amount:  3 }, { item: Items["RECRUIT'S_INSIGNIA"],    amount:  3 }], 
            "40+": [{ item: Items.PRITHIVA_TOPAZ_FRAGMENT, amount: 3 }, { item: Items.BASALT_PILLAR, amount:  2 }, { item: Items.GLAZE_LILY, amount: 10 }, { item: Items["RECRUIT'S_INSIGNIA"],    amount: 15 }], 
            "50+": [{ item: Items.PRITHIVA_TOPAZ_FRAGMENT, amount: 6 }, { item: Items.BASALT_PILLAR, amount:  4 }, { item: Items.GLAZE_LILY, amount: 20 }, { item: Items["SEARGENT'S_INSIGNIA"],   amount: 12 }], 
            "60+": [{ item: Items.PRITHIVA_TOPAZ_CHUNK,    amount: 3 }, { item: Items.BASALT_PILLAR, amount:  8 }, { item: Items.GLAZE_LILY, amount: 30 }, { item: Items["SEARGENT'S_INSIGNIA"],   amount: 18 }], 
            "70+": [{ item: Items.PRITHIVA_TOPAZ_CHUNK,    amount: 9 }, { item: Items.BASALT_PILLAR, amount: 12 }, { item: Items.GLAZE_LILY, amount: 45 }, { item: Items["LIEUTENANT'S_INSIGNIA"], amount: 12 }], 
            "80+": [{ item: Items.PRITHIVA_TOPAZ_GEMSTONE, amount: 6 }, { item: Items.BASALT_PILLAR, amount: 20 }, { item: Items.GLAZE_LILY, amount: 60 }, { item: Items["LIEUTENANT'S_INSIGNIA"], amount: 24 }]
        }}, 
        elements: [
            { element: Elements.GEO, talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_PROSPERITY,    amount:  3 }, {item: Items["RECRUIT'S_INSIGNIA"],    amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_PROSPERITY,        amount:  2 }, {item: Items["SEARGENT'S_INSIGNIA"],   amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_PROSPERITY,        amount:  4 }, {item: Items["SEARGENT'S_INSIGNIA"],   amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_PROSPERITY,        amount:  6 }, {item: Items["SEARGENT'S_INSIGNIA"],   amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_PROSPERITY,        amount:  9 }, {item: Items["SEARGENT'S_INSIGNIA"],   amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_PROSPERITY, amount:  4 }, {item: Items["LIEUTENANT'S_INSIGNIA"], amount:  4 }, { item: Items.SPIRIT_LOCKET_OF_BOREAS, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_PROSPERITY, amount:  6 }, {item: Items["LIEUTENANT'S_INSIGNIA"], amount:  6 }, { item: Items.SPIRIT_LOCKET_OF_BOREAS, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_PROSPERITY, amount: 12 }, {item: Items["LIEUTENANT'S_INSIGNIA"], amount:  9 }, { item: Items.SPIRIT_LOCKET_OF_BOREAS, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_PROSPERITY, amount: 16 }, {item: Items["LIEUTENANT'S_INSIGNIA"], amount: 12 }, { item: Items.SPIRIT_LOCKET_OF_BOREAS, amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_PROSPERITY,    amount:  3 }, {item: Items["RECRUIT'S_INSIGNIA"],    amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_PROSPERITY,        amount:  2 }, {item: Items["SEARGENT'S_INSIGNIA"],   amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_PROSPERITY,        amount:  4 }, {item: Items["SEARGENT'S_INSIGNIA"],   amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_PROSPERITY,        amount:  6 }, {item: Items["SEARGENT'S_INSIGNIA"],   amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_PROSPERITY,        amount:  9 }, {item: Items["SEARGENT'S_INSIGNIA"],   amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_PROSPERITY, amount:  4 }, {item: Items["LIEUTENANT'S_INSIGNIA"], amount:  4 }, { item: Items.SPIRIT_LOCKET_OF_BOREAS, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_PROSPERITY, amount:  6 }, {item: Items["LIEUTENANT'S_INSIGNIA"], amount:  6 }, { item: Items.SPIRIT_LOCKET_OF_BOREAS, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_PROSPERITY, amount: 12 }, {item: Items["LIEUTENANT'S_INSIGNIA"], amount:  9 }, { item: Items.SPIRIT_LOCKET_OF_BOREAS, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_PROSPERITY, amount: 16 }, {item: Items["LIEUTENANT'S_INSIGNIA"], amount: 12 }, { item: Items.SPIRIT_LOCKET_OF_BOREAS, amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_PROSPERITY,    amount:  3 }, {item: Items["RECRUIT'S_INSIGNIA"],    amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_PROSPERITY,        amount:  2 }, {item: Items["SEARGENT'S_INSIGNIA"],   amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_PROSPERITY,        amount:  4 }, {item: Items["SEARGENT'S_INSIGNIA"],   amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_PROSPERITY,        amount:  6 }, {item: Items["SEARGENT'S_INSIGNIA"],   amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_PROSPERITY,        amount:  9 }, {item: Items["SEARGENT'S_INSIGNIA"],   amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_PROSPERITY, amount:  4 }, {item: Items["LIEUTENANT'S_INSIGNIA"], amount:  4 }, { item: Items.SPIRIT_LOCKET_OF_BOREAS, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_PROSPERITY, amount:  6 }, {item: Items["LIEUTENANT'S_INSIGNIA"], amount:  6 }, { item: Items.SPIRIT_LOCKET_OF_BOREAS, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_PROSPERITY, amount: 12 }, {item: Items["LIEUTENANT'S_INSIGNIA"], amount:  9 }, { item: Items.SPIRIT_LOCKET_OF_BOREAS, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_PROSPERITY, amount: 16 }, {item: Items["LIEUTENANT'S_INSIGNIA"], amount: 12 }, { item: Items.SPIRIT_LOCKET_OF_BOREAS, amount: 2 }] 
                }}
            }
        }]
    });
    static FISCHL             = new Character({ name: "FISCHL",             /* FINISHED */ 
        level: { materials: { 
            "20+": [{ item: Items.VAJRADA_AMETHYST_SLIVER,   amount: 1 },                                              { item: Items.SMALL_LAMP_GRASS, amount:  3 }, { item: Items.FIRM_ARROWHEAD,     amount:  3 }], 
            "40+": [{ item: Items.VAJRADA_AMETHYST_FRAGMENT, amount: 3 }, { item: Items.LIGHTNING_PRISM, amount:  2 }, { item: Items.SMALL_LAMP_GRASS, amount: 10 }, { item: Items.FIRM_ARROWHEAD,     amount: 15 }], 
            "50+": [{ item: Items.VAJRADA_AMETHYST_FRAGMENT, amount: 6 }, { item: Items.LIGHTNING_PRISM, amount:  4 }, { item: Items.SMALL_LAMP_GRASS, amount: 20 }, { item: Items.SHARP_ARROWHEAD,    amount: 12 }], 
            "60+": [{ item: Items.VAJRADA_AMETHYST_CHUNK,    amount: 3 }, { item: Items.LIGHTNING_PRISM, amount:  8 }, { item: Items.SMALL_LAMP_GRASS, amount: 30 }, { item: Items.SHARP_ARROWHEAD,    amount: 18 }], 
            "70+": [{ item: Items.VAJRADA_AMETHYST_CHUNK,    amount: 6 }, { item: Items.LIGHTNING_PRISM, amount: 12 }, { item: Items.SMALL_LAMP_GRASS, amount: 45 }, { item: Items.WATHERED_ARROWHEAD, amount: 12 }], 
            "80+": [{ item: Items.VAJRADA_AMETHYST_GEMSTONE, amount: 6 }, { item: Items.LIGHTNING_PRISM, amount: 20 }, { item: Items.SMALL_LAMP_GRASS, amount: 60 }, { item: Items.WATHERED_ARROWHEAD, amount: 24 }]
        }}, 
        elements: [
            { element: Elements.ELECTRO, talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_BALLAD,    amount:  3 }, {item: Items.FIRM_ARROWHEAD,     amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_BALLAD,        amount:  2 }, {item: Items.SHARP_ARROWHEAD,    amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_BALLAD,        amount:  4 }, {item: Items.SHARP_ARROWHEAD,    amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_BALLAD,        amount:  6 }, {item: Items.SHARP_ARROWHEAD,    amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_BALLAD,        amount:  9 }, {item: Items.SHARP_ARROWHEAD,    amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_BALLAD, amount:  4 }, {item: Items.WATHERED_ARROWHEAD, amount:  4 }, { item: Items.SPIRIT_LOCKET_OF_BOREAS, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_BALLAD, amount:  6 }, {item: Items.WATHERED_ARROWHEAD, amount:  6 }, { item: Items.SPIRIT_LOCKET_OF_BOREAS, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_BALLAD, amount: 12 }, {item: Items.WATHERED_ARROWHEAD, amount:  9 }, { item: Items.SPIRIT_LOCKET_OF_BOREAS, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_BALLAD, amount: 16 }, {item: Items.WATHERED_ARROWHEAD, amount: 12 }, { item: Items.SPIRIT_LOCKET_OF_BOREAS, amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_BALLAD,    amount:  3 }, {item: Items.FIRM_ARROWHEAD,     amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_BALLAD,        amount:  2 }, {item: Items.SHARP_ARROWHEAD,    amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_BALLAD,        amount:  4 }, {item: Items.SHARP_ARROWHEAD,    amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_BALLAD,        amount:  6 }, {item: Items.SHARP_ARROWHEAD,    amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_BALLAD,        amount:  9 }, {item: Items.SHARP_ARROWHEAD,    amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_BALLAD, amount:  4 }, {item: Items.WATHERED_ARROWHEAD, amount:  4 }, { item: Items.SPIRIT_LOCKET_OF_BOREAS, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_BALLAD, amount:  6 }, {item: Items.WATHERED_ARROWHEAD, amount:  6 }, { item: Items.SPIRIT_LOCKET_OF_BOREAS, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_BALLAD, amount: 12 }, {item: Items.WATHERED_ARROWHEAD, amount:  9 }, { item: Items.SPIRIT_LOCKET_OF_BOREAS, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_BALLAD, amount: 16 }, {item: Items.WATHERED_ARROWHEAD, amount: 12 }, { item: Items.SPIRIT_LOCKET_OF_BOREAS, amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_BALLAD,    amount:  3 }, {item: Items.FIRM_ARROWHEAD,     amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_BALLAD,        amount:  2 }, {item: Items.SHARP_ARROWHEAD,    amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_BALLAD,        amount:  4 }, {item: Items.SHARP_ARROWHEAD,    amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_BALLAD,        amount:  6 }, {item: Items.SHARP_ARROWHEAD,    amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_BALLAD,        amount:  9 }, {item: Items.SHARP_ARROWHEAD,    amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_BALLAD, amount:  4 }, {item: Items.WATHERED_ARROWHEAD, amount:  4 }, { item: Items.SPIRIT_LOCKET_OF_BOREAS, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_BALLAD, amount:  6 }, {item: Items.WATHERED_ARROWHEAD, amount:  6 }, { item: Items.SPIRIT_LOCKET_OF_BOREAS, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_BALLAD, amount: 12 }, {item: Items.WATHERED_ARROWHEAD, amount:  9 }, { item: Items.SPIRIT_LOCKET_OF_BOREAS, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_BALLAD, amount: 16 }, {item: Items.WATHERED_ARROWHEAD, amount: 12 }, { item: Items.SPIRIT_LOCKET_OF_BOREAS, amount: 2 }] 
                }}
            }
        }]
    });
    static BENNETT            = new Character({ name: "BENNETT",            /* FINISHED */ 
        level: { materials: { 
            "20+": [{ item: Items.AGNIDUS_AGATE_SLIVER,   amount: 1 },                                             { item: Items.WINDWHEEL_ASTER, amount:  3 }, { item: Items.TREASURE_HOARDER_INSIGNIA, amount:  3 }], 
            "40+": [{ item: Items.AGNIDUS_AGATE_FRAGMENT, amount: 3 }, { item: Items.EVERFLAME_SEED, amount:  2 }, { item: Items.WINDWHEEL_ASTER, amount: 10 }, { item: Items.TREASURE_HOARDER_INSIGNIA, amount: 15 }], 
            "50+": [{ item: Items.AGNIDUS_AGATE_FRAGMENT, amount: 6 }, { item: Items.EVERFLAME_SEED, amount:  4 }, { item: Items.WINDWHEEL_ASTER, amount: 20 }, { item: Items.SILVER_RAVEN_INSIGNIA,     amount: 12 }], 
            "60+": [{ item: Items.AGNIDUS_AGATE_CHUNK,    amount: 3 }, { item: Items.EVERFLAME_SEED, amount:  8 }, { item: Items.WINDWHEEL_ASTER, amount: 30 }, { item: Items.SILVER_RAVEN_INSIGNIA,     amount: 18 }], 
            "70+": [{ item: Items.AGNIDUS_AGATE_CHUNK,    amount: 6 }, { item: Items.EVERFLAME_SEED, amount: 12 }, { item: Items.WINDWHEEL_ASTER, amount: 45 }, { item: Items.GOLDEN_RAVEN_INSIGNIA,     amount: 12 }], 
            "80+": [{ item: Items.AGNIDUS_AGATE_GEMSTONE, amount: 6 }, { item: Items.EVERFLAME_SEED, amount: 20 }, { item: Items.WINDWHEEL_ASTER, amount: 60 }, { item: Items.GOLDEN_RAVEN_INSIGNIA,     amount: 24 }]
        }}, 
        elements: [
            { element: Elements.PYRO, talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_RESISTANCE,    amount:  3 }, {item: Items.TREASURE_HOARDER_INSIGNIA, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_RESISTANCE,        amount:  2 }, {item: Items.SILVER_RAVEN_INSIGNIA,     amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_RESISTANCE,        amount:  4 }, {item: Items.SILVER_RAVEN_INSIGNIA,     amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_RESISTANCE,        amount:  6 }, {item: Items.SILVER_RAVEN_INSIGNIA,     amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_RESISTANCE,        amount:  9 }, {item: Items.SILVER_RAVEN_INSIGNIA,     amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_RESISTANCE, amount:  4 }, {item: Items.GOLDEN_RAVEN_INSIGNIA,     amount:  4 }, { item: Items["DVALIN'S_PLUME"], amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_RESISTANCE, amount:  6 }, {item: Items.GOLDEN_RAVEN_INSIGNIA,     amount:  6 }, { item: Items["DVALIN'S_PLUME"], amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_RESISTANCE, amount: 12 }, {item: Items.GOLDEN_RAVEN_INSIGNIA,     amount:  9 }, { item: Items["DVALIN'S_PLUME"], amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_RESISTANCE, amount: 16 }, {item: Items.GOLDEN_RAVEN_INSIGNIA,     amount: 12 }, { item: Items["DVALIN'S_PLUME"], amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_RESISTANCE,    amount:  3 }, {item: Items.TREASURE_HOARDER_INSIGNIA, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_RESISTANCE,        amount:  2 }, {item: Items.SILVER_RAVEN_INSIGNIA,     amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_RESISTANCE,        amount:  4 }, {item: Items.SILVER_RAVEN_INSIGNIA,     amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_RESISTANCE,        amount:  6 }, {item: Items.SILVER_RAVEN_INSIGNIA,     amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_RESISTANCE,        amount:  9 }, {item: Items.SILVER_RAVEN_INSIGNIA,     amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_RESISTANCE, amount:  4 }, {item: Items.GOLDEN_RAVEN_INSIGNIA,     amount:  4 }, { item: Items["DVALIN'S_PLUME"], amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_RESISTANCE, amount:  6 }, {item: Items.GOLDEN_RAVEN_INSIGNIA,     amount:  6 }, { item: Items["DVALIN'S_PLUME"], amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_RESISTANCE, amount: 12 }, {item: Items.GOLDEN_RAVEN_INSIGNIA,     amount:  9 }, { item: Items["DVALIN'S_PLUME"], amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_RESISTANCE, amount: 16 }, {item: Items.GOLDEN_RAVEN_INSIGNIA,     amount: 12 }, { item: Items["DVALIN'S_PLUME"], amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_RESISTANCE,    amount:  3 }, {item: Items.TREASURE_HOARDER_INSIGNIA, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_RESISTANCE,        amount:  2 }, {item: Items.SILVER_RAVEN_INSIGNIA,     amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_RESISTANCE,        amount:  4 }, {item: Items.SILVER_RAVEN_INSIGNIA,     amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_RESISTANCE,        amount:  6 }, {item: Items.SILVER_RAVEN_INSIGNIA,     amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_RESISTANCE,        amount:  9 }, {item: Items.SILVER_RAVEN_INSIGNIA,     amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_RESISTANCE, amount:  4 }, {item: Items.GOLDEN_RAVEN_INSIGNIA,     amount:  4 }, { item: Items["DVALIN'S_PLUME"], amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_RESISTANCE, amount:  6 }, {item: Items.GOLDEN_RAVEN_INSIGNIA,     amount:  6 }, { item: Items["DVALIN'S_PLUME"], amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_RESISTANCE, amount: 12 }, {item: Items.GOLDEN_RAVEN_INSIGNIA,     amount:  9 }, { item: Items["DVALIN'S_PLUME"], amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_RESISTANCE, amount: 16 }, {item: Items.GOLDEN_RAVEN_INSIGNIA,     amount: 12 }, { item: Items["DVALIN'S_PLUME"], amount: 2 }] 
                }}
            }}
        ]
    });
    static NOELLE             = new Character({ name: "NOELLE",             /* FINISHED */ 
        level: { materials: { 
            "20+": [{ item: Items.PRITHIVA_TOPAZ_SLIVER,   amount: 1 },                                            { item: Items.VALBERRY, amount:  3 }, { item: Items.DAMAGED_MASK, amount:  3 }], 
            "40+": [{ item: Items.PRITHIVA_TOPAZ_FRAGMENT, amount: 3 }, { item: Items.BASALT_PILLAR, amount:  2 }, { item: Items.VALBERRY, amount: 10 }, { item: Items.DAMAGED_MASK, amount: 15 }], 
            "50+": [{ item: Items.PRITHIVA_TOPAZ_FRAGMENT, amount: 6 }, { item: Items.BASALT_PILLAR, amount:  4 }, { item: Items.VALBERRY, amount: 20 }, { item: Items.STAINED_MASK, amount: 12 }], 
            "60+": [{ item: Items.PRITHIVA_TOPAZ_CHUNK,    amount: 3 }, { item: Items.BASALT_PILLAR, amount:  8 }, { item: Items.VALBERRY, amount: 30 }, { item: Items.STAINED_MASK, amount: 18 }], 
            "70+": [{ item: Items.PRITHIVA_TOPAZ_CHUNK,    amount: 6 }, { item: Items.BASALT_PILLAR, amount: 12 }, { item: Items.VALBERRY, amount: 45 }, { item: Items.OMINOUS_MASK, amount: 12 }], 
            "80+": [{ item: Items.PRITHIVA_TOPAZ_GEMSTONE, amount: 6 }, { item: Items.BASALT_PILLAR, amount: 20 }, { item: Items.VALBERRY, amount: 60 }, { item: Items.OMINOUS_MASK, amount: 24 }]
        }}, 
        elements: [
            { element: Elements.GEO, talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_RESISTANCE,    amount:  3 }, {item: Items.DAMAGED_MASK, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_RESISTANCE,        amount:  2 }, {item: Items.STAINED_MASK, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_RESISTANCE,        amount:  4 }, {item: Items.STAINED_MASK, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_RESISTANCE,        amount:  6 }, {item: Items.STAINED_MASK, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_RESISTANCE,        amount:  9 }, {item: Items.STAINED_MASK, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_RESISTANCE, amount:  4 }, {item: Items.OMINOUS_MASK, amount:  4 }, { item: Items["DVALIN'S_CLAW"], amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_RESISTANCE, amount:  6 }, {item: Items.OMINOUS_MASK, amount:  6 }, { item: Items["DVALIN'S_CLAW"], amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_RESISTANCE, amount: 12 }, {item: Items.OMINOUS_MASK, amount:  9 }, { item: Items["DVALIN'S_CLAW"], amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_RESISTANCE, amount: 16 }, {item: Items.OMINOUS_MASK, amount: 12 }, { item: Items["DVALIN'S_CLAW"], amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_RESISTANCE,    amount:  3 }, {item: Items.DAMAGED_MASK, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_RESISTANCE,        amount:  2 }, {item: Items.STAINED_MASK, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_RESISTANCE,        amount:  4 }, {item: Items.STAINED_MASK, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_RESISTANCE,        amount:  6 }, {item: Items.STAINED_MASK, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_RESISTANCE,        amount:  9 }, {item: Items.STAINED_MASK, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_RESISTANCE, amount:  4 }, {item: Items.OMINOUS_MASK, amount:  4 }, { item: Items["DVALIN'S_CLAW"], amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_RESISTANCE, amount:  6 }, {item: Items.OMINOUS_MASK, amount:  6 }, { item: Items["DVALIN'S_CLAW"], amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_RESISTANCE, amount: 12 }, {item: Items.OMINOUS_MASK, amount:  9 }, { item: Items["DVALIN'S_CLAW"], amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_RESISTANCE, amount: 16 }, {item: Items.OMINOUS_MASK, amount: 12 }, { item: Items["DVALIN'S_CLAW"], amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_RESISTANCE,    amount:  3 }, {item: Items.DAMAGED_MASK, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_RESISTANCE,        amount:  2 }, {item: Items.STAINED_MASK, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_RESISTANCE,        amount:  4 }, {item: Items.STAINED_MASK, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_RESISTANCE,        amount:  6 }, {item: Items.STAINED_MASK, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_RESISTANCE,        amount:  9 }, {item: Items.STAINED_MASK, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_RESISTANCE, amount:  4 }, {item: Items.OMINOUS_MASK, amount:  4 }, { item: Items["DVALIN'S_CLAW"], amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_RESISTANCE, amount:  6 }, {item: Items.OMINOUS_MASK, amount:  6 }, { item: Items["DVALIN'S_CLAW"], amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_RESISTANCE, amount: 12 }, {item: Items.OMINOUS_MASK, amount:  9 }, { item: Items["DVALIN'S_CLAW"], amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_RESISTANCE, amount: 16 }, {item: Items.OMINOUS_MASK, amount: 12 }, { item: Items["DVALIN'S_CLAW"], amount: 2 }] 
                }}
            }}
        ]
    });
    static CHONGYUN           = new Character({ name: "CHONGYUN",           /* FINISHED */ 
        level: { materials: { 
            "20+": [{ item: Items.SHIVADA_JADE_SLIVER,   amount: 1 },                                             { item: Items.COR_LAPIS, amount:  3 }, { item: Items.DAMAGED_MASK, amount:  3 }], 
            "40+": [{ item: Items.SHIVADA_JADE_FRAGMENT, amount: 3 }, { item: Items.HOARFROST_CORE, amount:  2 }, { item: Items.COR_LAPIS, amount: 10 }, { item: Items.DAMAGED_MASK, amount: 15 }], 
            "50+": [{ item: Items.SHIVADA_JADE_FRAGMENT, amount: 6 }, { item: Items.HOARFROST_CORE, amount:  4 }, { item: Items.COR_LAPIS, amount: 20 }, { item: Items.STAINED_MASK, amount: 12 }], 
            "60+": [{ item: Items.SHIVADA_JADE_CHUNK,    amount: 3 }, { item: Items.HOARFROST_CORE, amount:  8 }, { item: Items.COR_LAPIS, amount: 30 }, { item: Items.STAINED_MASK, amount: 18 }], 
            "70+": [{ item: Items.SHIVADA_JADE_CHUNK,    amount: 6 }, { item: Items.HOARFROST_CORE, amount: 12 }, { item: Items.COR_LAPIS, amount: 45 }, { item: Items.OMINOUS_MASK, amount: 12 }], 
            "80+": [{ item: Items.SHIVADA_JADE_GEMSTONE, amount: 6 }, { item: Items.HOARFROST_CORE, amount: 20 }, { item: Items.COR_LAPIS, amount: 60 }, { item: Items.OMINOUS_MASK, amount: 24 }]
        }}, 
        elements: [
            { element: Elements.CRYO, talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_DILIGENCE,    amount:  3 }, {item: Items.DAMAGED_MASK, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_DILIGENCE,        amount:  2 }, {item: Items.STAINED_MASK, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_DILIGENCE,        amount:  4 }, {item: Items.STAINED_MASK, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_DILIGENCE,        amount:  6 }, {item: Items.STAINED_MASK, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_DILIGENCE,        amount:  9 }, {item: Items.STAINED_MASK, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_DILIGENCE, amount:  4 }, {item: Items.OMINOUS_MASK, amount:  4 }, { item: Items["DVALIN'S_SIGH"], amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_DILIGENCE, amount:  6 }, {item: Items.OMINOUS_MASK, amount:  6 }, { item: Items["DVALIN'S_SIGH"], amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_DILIGENCE, amount: 12 }, {item: Items.OMINOUS_MASK, amount:  9 }, { item: Items["DVALIN'S_SIGH"], amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_DILIGENCE, amount: 16 }, {item: Items.OMINOUS_MASK, amount: 12 }, { item: Items["DVALIN'S_SIGH"], amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_DILIGENCE,    amount:  3 }, {item: Items.DAMAGED_MASK, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_DILIGENCE,        amount:  2 }, {item: Items.STAINED_MASK, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_DILIGENCE,        amount:  4 }, {item: Items.STAINED_MASK, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_DILIGENCE,        amount:  6 }, {item: Items.STAINED_MASK, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_DILIGENCE,        amount:  9 }, {item: Items.STAINED_MASK, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_DILIGENCE, amount:  4 }, {item: Items.OMINOUS_MASK, amount:  4 }, { item: Items["DVALIN'S_SIGH"], amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_DILIGENCE, amount:  6 }, {item: Items.OMINOUS_MASK, amount:  6 }, { item: Items["DVALIN'S_SIGH"], amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_DILIGENCE, amount: 12 }, {item: Items.OMINOUS_MASK, amount:  9 }, { item: Items["DVALIN'S_SIGH"], amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_DILIGENCE, amount: 16 }, {item: Items.OMINOUS_MASK, amount: 12 }, { item: Items["DVALIN'S_SIGH"], amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_DILIGENCE,    amount:  3 }, {item: Items.DAMAGED_MASK, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_DILIGENCE,        amount:  2 }, {item: Items.STAINED_MASK, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_DILIGENCE,        amount:  4 }, {item: Items.STAINED_MASK, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_DILIGENCE,        amount:  6 }, {item: Items.STAINED_MASK, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_DILIGENCE,        amount:  9 }, {item: Items.STAINED_MASK, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_DILIGENCE, amount:  4 }, {item: Items.OMINOUS_MASK, amount:  4 }, { item: Items["DVALIN'S_SIGH"], amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_DILIGENCE, amount:  6 }, {item: Items.OMINOUS_MASK, amount:  6 }, { item: Items["DVALIN'S_SIGH"], amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_DILIGENCE, amount: 12 }, {item: Items.OMINOUS_MASK, amount:  9 }, { item: Items["DVALIN'S_SIGH"], amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_DILIGENCE, amount: 16 }, {item: Items.OMINOUS_MASK, amount: 12 }, { item: Items["DVALIN'S_SIGH"], amount: 2 }] 
                }}
            }}
        ]
    });
    static SUCROSE            = new Character({ name: "SUCROSE",            /* FINISHED */ 
        level: { materials: { 
            "20+": [{ item: Items.VAYUDA_TURQUOISE_SLIVER,   amount: 1 },                                             { item: Items.WINDWHEEL_ASTER, amount:  3 }, { item: Items.WHOPPERFLOWER_NECTAR, amount:  3 }], 
            "40+": [{ item: Items.VAYUDA_TURQUOISE_FRAGMENT, amount: 3 }, { item: Items.HURRICANE_SEED, amount:  2 }, { item: Items.WINDWHEEL_ASTER, amount: 10 }, { item: Items.WHOPPERFLOWER_NECTAR, amount: 15 }], 
            "50+": [{ item: Items.VAYUDA_TURQUOISE_FRAGMENT, amount: 6 }, { item: Items.HURRICANE_SEED, amount:  4 }, { item: Items.WINDWHEEL_ASTER, amount: 20 }, { item: Items.SHIMMERING_NECTAR,    amount: 12 }], 
            "60+": [{ item: Items.VAYUDA_TURQUOISE_CHUNK,    amount: 3 }, { item: Items.HURRICANE_SEED, amount:  8 }, { item: Items.WINDWHEEL_ASTER, amount: 30 }, { item: Items.SHIMMERING_NECTAR,    amount: 18 }], 
            "70+": [{ item: Items.VAYUDA_TURQUOISE_CHUNK,    amount: 6 }, { item: Items.HURRICANE_SEED, amount: 12 }, { item: Items.WINDWHEEL_ASTER, amount: 45 }, { item: Items.ENERGY_NECTAR,        amount: 12 }], 
            "80+": [{ item: Items.VAYUDA_TURQUOISE_GEMSTONE, amount: 6 }, { item: Items.HURRICANE_SEED, amount: 20 }, { item: Items.WINDWHEEL_ASTER, amount: 60 }, { item: Items.ENERGY_NECTAR,        amount: 24 }]
        }}, 
        elements: [
            { element: Elements.ANEMO, talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_FREEDOM,    amount:  3 }, {item: Items.WHOPPERFLOWER_NECTAR, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_FREEDOM,        amount:  2 }, {item: Items.SHIMMERING_NECTAR,    amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_FREEDOM,        amount:  4 }, {item: Items.SHIMMERING_NECTAR,    amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_FREEDOM,        amount:  6 }, {item: Items.SHIMMERING_NECTAR,    amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_FREEDOM,        amount:  9 }, {item: Items.SHIMMERING_NECTAR,    amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_FREEDOM, amount:  4 }, {item: Items.ENERGY_NECTAR,        amount:  4 }, { item: Items.SPIRIT_LOCKET_OF_BOREAS, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_FREEDOM, amount:  6 }, {item: Items.ENERGY_NECTAR,        amount:  6 }, { item: Items.SPIRIT_LOCKET_OF_BOREAS, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_FREEDOM, amount: 12 }, {item: Items.ENERGY_NECTAR,        amount:  9 }, { item: Items.SPIRIT_LOCKET_OF_BOREAS, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_FREEDOM, amount: 16 }, {item: Items.ENERGY_NECTAR,        amount: 12 }, { item: Items.SPIRIT_LOCKET_OF_BOREAS, amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_FREEDOM,    amount:  3 }, {item: Items.WHOPPERFLOWER_NECTAR, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_FREEDOM,        amount:  2 }, {item: Items.SHIMMERING_NECTAR,    amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_FREEDOM,        amount:  4 }, {item: Items.SHIMMERING_NECTAR,    amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_FREEDOM,        amount:  6 }, {item: Items.SHIMMERING_NECTAR,    amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_FREEDOM,        amount:  9 }, {item: Items.SHIMMERING_NECTAR,    amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_FREEDOM, amount:  4 }, {item: Items.ENERGY_NECTAR,        amount:  4 }, { item: Items.SPIRIT_LOCKET_OF_BOREAS, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_FREEDOM, amount:  6 }, {item: Items.ENERGY_NECTAR,        amount:  6 }, { item: Items.SPIRIT_LOCKET_OF_BOREAS, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_FREEDOM, amount: 12 }, {item: Items.ENERGY_NECTAR,        amount:  9 }, { item: Items.SPIRIT_LOCKET_OF_BOREAS, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_FREEDOM, amount: 16 }, {item: Items.ENERGY_NECTAR,        amount: 12 }, { item: Items.SPIRIT_LOCKET_OF_BOREAS, amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_FREEDOM,    amount:  3 }, {item: Items.WHOPPERFLOWER_NECTAR, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_FREEDOM,        amount:  2 }, {item: Items.SHIMMERING_NECTAR,    amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_FREEDOM,        amount:  4 }, {item: Items.SHIMMERING_NECTAR,    amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_FREEDOM,        amount:  6 }, {item: Items.SHIMMERING_NECTAR,    amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_FREEDOM,        amount:  9 }, {item: Items.SHIMMERING_NECTAR,    amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_FREEDOM, amount:  4 }, {item: Items.ENERGY_NECTAR,        amount:  4 }, { item: Items.SPIRIT_LOCKET_OF_BOREAS, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_FREEDOM, amount:  6 }, {item: Items.ENERGY_NECTAR,        amount:  6 }, { item: Items.SPIRIT_LOCKET_OF_BOREAS, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_FREEDOM, amount: 12 }, {item: Items.ENERGY_NECTAR,        amount:  9 }, { item: Items.SPIRIT_LOCKET_OF_BOREAS, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_FREEDOM, amount: 16 }, {item: Items.ENERGY_NECTAR,        amount: 12 }, { item: Items.SPIRIT_LOCKET_OF_BOREAS, amount: 2 }] 
                }}
            }}
        ]
    });
    static JEAN               = new Character({ name: "JEAN",               /* FINISHED */
        level: { materials: { 
            "20+": [{ item: Items.VAYUDA_TURQUOISE_SLIVER,   amount: 1 },                                             { item: Items.DANDELION_SEED, amount:  3 }, { item: Items.DAMAGED_MASK, amount:  3 }], 
            "40+": [{ item: Items.VAYUDA_TURQUOISE_FRAGMENT, amount: 3 }, { item: Items.HURRICANE_SEED, amount:  2 }, { item: Items.DANDELION_SEED, amount: 10 }, { item: Items.DAMAGED_MASK, amount: 15 }], 
            "50+": [{ item: Items.VAYUDA_TURQUOISE_FRAGMENT, amount: 6 }, { item: Items.HURRICANE_SEED, amount:  4 }, { item: Items.DANDELION_SEED, amount: 20 }, { item: Items.STAINED_MASK, amount: 12 }], 
            "60+": [{ item: Items.VAYUDA_TURQUOISE_CHUNK,    amount: 3 }, { item: Items.HURRICANE_SEED, amount:  8 }, { item: Items.DANDELION_SEED, amount: 30 }, { item: Items.STAINED_MASK, amount: 18 }], 
            "70+": [{ item: Items.VAYUDA_TURQUOISE_CHUNK,    amount: 6 }, { item: Items.HURRICANE_SEED, amount: 12 }, { item: Items.DANDELION_SEED, amount: 45 }, { item: Items.OMINOUS_MASK, amount: 12 }], 
            "80+": [{ item: Items.VAYUDA_TURQUOISE_GEMSTONE, amount: 6 }, { item: Items.HURRICANE_SEED, amount: 20 }, { item: Items.DANDELION_SEED, amount: 60 }, { item: Items.OMINOUS_MASK, amount: 24 }]
        }}, 
        elements: [
            { element: Elements.ANEMO, talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_RESISTANCE,    amount:  3 }, {item: Items.DAMAGED_MASK, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_RESISTANCE,        amount:  2 }, {item: Items.STAINED_MASK, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_RESISTANCE,        amount:  4 }, {item: Items.STAINED_MASK, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_RESISTANCE,        amount:  6 }, {item: Items.STAINED_MASK, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_RESISTANCE,        amount:  9 }, {item: Items.STAINED_MASK, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_RESISTANCE, amount:  4 }, {item: Items.OMINOUS_MASK, amount:  4 }, { item: Items["DVALIN'S_PLUME"], amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_RESISTANCE, amount:  6 }, {item: Items.OMINOUS_MASK, amount:  6 }, { item: Items["DVALIN'S_PLUME"], amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_RESISTANCE, amount: 12 }, {item: Items.OMINOUS_MASK, amount:  9 }, { item: Items["DVALIN'S_PLUME"], amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_RESISTANCE, amount: 16 }, {item: Items.OMINOUS_MASK, amount: 12 }, { item: Items["DVALIN'S_PLUME"], amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_RESISTANCE,    amount:  3 }, {item: Items.DAMAGED_MASK, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_RESISTANCE,        amount:  2 }, {item: Items.STAINED_MASK, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_RESISTANCE,        amount:  4 }, {item: Items.STAINED_MASK, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_RESISTANCE,        amount:  6 }, {item: Items.STAINED_MASK, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_RESISTANCE,        amount:  9 }, {item: Items.STAINED_MASK, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_RESISTANCE, amount:  4 }, {item: Items.OMINOUS_MASK, amount:  4 }, { item: Items["DVALIN'S_PLUME"], amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_RESISTANCE, amount:  6 }, {item: Items.OMINOUS_MASK, amount:  6 }, { item: Items["DVALIN'S_PLUME"], amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_RESISTANCE, amount: 12 }, {item: Items.OMINOUS_MASK, amount:  9 }, { item: Items["DVALIN'S_PLUME"], amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_RESISTANCE, amount: 16 }, {item: Items.OMINOUS_MASK, amount: 12 }, { item: Items["DVALIN'S_PLUME"], amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_RESISTANCE,    amount:  3 }, {item: Items.DAMAGED_MASK, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_RESISTANCE,        amount:  2 }, {item: Items.STAINED_MASK, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_RESISTANCE,        amount:  4 }, {item: Items.STAINED_MASK, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_RESISTANCE,        amount:  6 }, {item: Items.STAINED_MASK, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_RESISTANCE,        amount:  9 }, {item: Items.STAINED_MASK, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_RESISTANCE, amount:  4 }, {item: Items.OMINOUS_MASK, amount:  4 }, { item: Items["DVALIN'S_PLUME"], amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_RESISTANCE, amount:  6 }, {item: Items.OMINOUS_MASK, amount:  6 }, { item: Items["DVALIN'S_PLUME"], amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_RESISTANCE, amount: 12 }, {item: Items.OMINOUS_MASK, amount:  9 }, { item: Items["DVALIN'S_PLUME"], amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_RESISTANCE, amount: 16 }, {item: Items.OMINOUS_MASK, amount: 12 }, { item: Items["DVALIN'S_PLUME"], amount: 2 }] 
                }}
            }}
        ]
    });
    static DILUC              = new Character({ name: "DILUC",              /* FINISHED */
        level: { materials: { 
            "20+": [{ item: Items.AGNIDUS_AGATE_SLIVER,   amount: 1 },                                             { item: Items.SMALL_LAMP_GRASS, amount:  3 }, { item: Items["RECRUIT'S_INSIGNIA"], amount:  3 }], 
            "40+": [{ item: Items.AGNIDUS_AGATE_FRAGMENT, amount: 3 }, { item: Items.EVERFLAME_SEED, amount:  2 }, { item: Items.SMALL_LAMP_GRASS, amount: 10 }, { item: Items["RECRUIT'S_INSIGNIA"], amount: 15 }], 
            "50+": [{ item: Items.AGNIDUS_AGATE_FRAGMENT, amount: 6 }, { item: Items.EVERFLAME_SEED, amount:  4 }, { item: Items.SMALL_LAMP_GRASS, amount: 20 }, { item: Items["SEARGENT'S_INSIGNIA"], amount: 12 }], 
            "60+": [{ item: Items.AGNIDUS_AGATE_CHUNK,    amount: 3 }, { item: Items.EVERFLAME_SEED, amount:  8 }, { item: Items.SMALL_LAMP_GRASS, amount: 30 }, { item: Items["SEARGENT'S_INSIGNIA"], amount: 18 }], 
            "70+": [{ item: Items.AGNIDUS_AGATE_CHUNK,    amount: 6 }, { item: Items.EVERFLAME_SEED, amount: 12 }, { item: Items.SMALL_LAMP_GRASS, amount: 45 }, { item: Items["LIEUTENANT'S_INSIGNIA"], amount: 12 }], 
            "80+": [{ item: Items.AGNIDUS_AGATE_GEMSTONE, amount: 6 }, { item: Items.EVERFLAME_SEED, amount: 20 }, { item: Items.SMALL_LAMP_GRASS, amount: 60 }, { item: Items["LIEUTENANT'S_INSIGNIA"], amount: 24 }]
        }}, 
        elements: [
            { element: Elements.PYRO, talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_RESISTANCE,    amount:  3 }, {item: Items["RECRUIT'S_INSIGNIA"],    amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_RESISTANCE,        amount:  2 }, {item: Items["SEARGENT'S_INSIGNIA"],   amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_RESISTANCE,        amount:  4 }, {item: Items["SEARGENT'S_INSIGNIA"],   amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_RESISTANCE,        amount:  6 }, {item: Items["SEARGENT'S_INSIGNIA"],   amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_RESISTANCE,        amount:  9 }, {item: Items["SEARGENT'S_INSIGNIA"],   amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_RESISTANCE, amount:  4 }, {item: Items["LIEUTENANT'S_INSIGNIA"], amount:  4 }, { item: Items["DVALIN'S_PLUME"], amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_RESISTANCE, amount:  6 }, {item: Items["LIEUTENANT'S_INSIGNIA"], amount:  6 }, { item: Items["DVALIN'S_PLUME"], amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_RESISTANCE, amount: 12 }, {item: Items["LIEUTENANT'S_INSIGNIA"], amount:  9 }, { item: Items["DVALIN'S_PLUME"], amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_RESISTANCE, amount: 16 }, {item: Items["LIEUTENANT'S_INSIGNIA"], amount: 12 }, { item: Items["DVALIN'S_PLUME"], amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_RESISTANCE,    amount:  3 }, {item: Items["RECRUIT'S_INSIGNIA"],    amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_RESISTANCE,        amount:  2 }, {item: Items["SEARGENT'S_INSIGNIA"],   amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_RESISTANCE,        amount:  4 }, {item: Items["SEARGENT'S_INSIGNIA"],   amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_RESISTANCE,        amount:  6 }, {item: Items["SEARGENT'S_INSIGNIA"],   amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_RESISTANCE,        amount:  9 }, {item: Items["SEARGENT'S_INSIGNIA"],   amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_RESISTANCE, amount:  4 }, {item: Items["LIEUTENANT'S_INSIGNIA"], amount:  4 }, { item: Items["DVALIN'S_PLUME"], amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_RESISTANCE, amount:  6 }, {item: Items["LIEUTENANT'S_INSIGNIA"], amount:  6 }, { item: Items["DVALIN'S_PLUME"], amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_RESISTANCE, amount: 12 }, {item: Items["LIEUTENANT'S_INSIGNIA"], amount:  9 }, { item: Items["DVALIN'S_PLUME"], amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_RESISTANCE, amount: 16 }, {item: Items["LIEUTENANT'S_INSIGNIA"], amount: 12 }, { item: Items["DVALIN'S_PLUME"], amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_RESISTANCE,    amount:  3 }, {item: Items["RECRUIT'S_INSIGNIA"],    amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_RESISTANCE,        amount:  2 }, {item: Items["SEARGENT'S_INSIGNIA"],   amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_RESISTANCE,        amount:  4 }, {item: Items["SEARGENT'S_INSIGNIA"],   amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_RESISTANCE,        amount:  6 }, {item: Items["SEARGENT'S_INSIGNIA"],   amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_RESISTANCE,        amount:  9 }, {item: Items["SEARGENT'S_INSIGNIA"],   amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_RESISTANCE, amount:  4 }, {item: Items["LIEUTENANT'S_INSIGNIA"], amount:  4 }, { item: Items["DVALIN'S_PLUME"], amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_RESISTANCE, amount:  6 }, {item: Items["LIEUTENANT'S_INSIGNIA"], amount:  6 }, { item: Items["DVALIN'S_PLUME"], amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_RESISTANCE, amount: 12 }, {item: Items["LIEUTENANT'S_INSIGNIA"], amount:  9 }, { item: Items["DVALIN'S_PLUME"], amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_RESISTANCE, amount: 16 }, {item: Items["LIEUTENANT'S_INSIGNIA"], amount: 12 }, { item: Items["DVALIN'S_PLUME"], amount: 2 }] 
                }}
            }}
        ]
    });
    static QIQI               = new Character({ name: "QIQI",               /* FINISHED */
        level: { materials: { 
            "20+": [{ item: Items.SHIVADA_JADE_SLIVER,   amount: 1 },                                             { item: Items.VIOLETGRASS, amount:  3 }, { item: Items.DIVINING_SCROLL,        amount:  3 }], 
            "40+": [{ item: Items.SHIVADA_JADE_FRAGMENT, amount: 3 }, { item: Items.HOARFROST_CORE, amount:  2 }, { item: Items.VIOLETGRASS, amount: 10 }, { item: Items.DIVINING_SCROLL,        amount: 15 }], 
            "50+": [{ item: Items.SHIVADA_JADE_FRAGMENT, amount: 6 }, { item: Items.HOARFROST_CORE, amount:  4 }, { item: Items.VIOLETGRASS, amount: 20 }, { item: Items.SEALED_SCROLL,          amount: 12 }], 
            "60+": [{ item: Items.SHIVADA_JADE_CHUNK,    amount: 3 }, { item: Items.HOARFROST_CORE, amount:  8 }, { item: Items.VIOLETGRASS, amount: 30 }, { item: Items.SEALED_SCROLL,          amount: 18 }], 
            "70+": [{ item: Items.SHIVADA_JADE_CHUNK,    amount: 6 }, { item: Items.HOARFROST_CORE, amount: 12 }, { item: Items.VIOLETGRASS, amount: 45 }, { item: Items.FORBIDDEN_CURSE_SCROLL, amount: 12 }], 
            "80+": [{ item: Items.SHIVADA_JADE_GEMSTONE, amount: 6 }, { item: Items.HOARFROST_CORE, amount: 20 }, { item: Items.VIOLETGRASS, amount: 60 }, { item: Items.FORBIDDEN_CURSE_SCROLL, amount: 24 }]
        }}, 
        elements: [
            { element: Elements.CRYO, talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_PROSPERITY,    amount:  3 }, {item: Items.DIVINING_SCROLL,        amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_PROSPERITY,        amount:  2 }, {item: Items.SEALED_SCROLL,          amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_PROSPERITY,        amount:  4 }, {item: Items.SEALED_SCROLL,          amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_PROSPERITY,        amount:  6 }, {item: Items.SEALED_SCROLL,          amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_PROSPERITY,        amount:  9 }, {item: Items.SEALED_SCROLL,          amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_PROSPERITY, amount:  4 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount:  4 }, { item: Items.TAIL_OF_BOREAS, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_PROSPERITY, amount:  6 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount:  6 }, { item: Items.TAIL_OF_BOREAS, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_PROSPERITY, amount: 12 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount:  9 }, { item: Items.TAIL_OF_BOREAS, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_PROSPERITY, amount: 16 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount: 12 }, { item: Items.TAIL_OF_BOREAS, amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_PROSPERITY,    amount:  3 }, {item: Items.DIVINING_SCROLL,        amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_PROSPERITY,        amount:  2 }, {item: Items.SEALED_SCROLL,          amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_PROSPERITY,        amount:  4 }, {item: Items.SEALED_SCROLL,          amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_PROSPERITY,        amount:  6 }, {item: Items.SEALED_SCROLL,          amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_PROSPERITY,        amount:  9 }, {item: Items.SEALED_SCROLL,          amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_PROSPERITY, amount:  4 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount:  4 }, { item: Items.TAIL_OF_BOREAS, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_PROSPERITY, amount:  6 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount:  6 }, { item: Items.TAIL_OF_BOREAS, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_PROSPERITY, amount: 12 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount:  9 }, { item: Items.TAIL_OF_BOREAS, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_PROSPERITY, amount: 16 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount: 12 }, { item: Items.TAIL_OF_BOREAS, amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_PROSPERITY,    amount:  3 }, {item: Items.DIVINING_SCROLL,        amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_PROSPERITY,        amount:  2 }, {item: Items.SEALED_SCROLL,          amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_PROSPERITY,        amount:  4 }, {item: Items.SEALED_SCROLL,          amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_PROSPERITY,        amount:  6 }, {item: Items.SEALED_SCROLL,          amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_PROSPERITY,        amount:  9 }, {item: Items.SEALED_SCROLL,          amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_PROSPERITY, amount:  4 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount:  4 }, { item: Items.TAIL_OF_BOREAS, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_PROSPERITY, amount:  6 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount:  6 }, { item: Items.TAIL_OF_BOREAS, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_PROSPERITY, amount: 12 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount:  9 }, { item: Items.TAIL_OF_BOREAS, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_PROSPERITY, amount: 16 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount: 12 }, { item: Items.TAIL_OF_BOREAS, amount: 2 }] 
                }}
            }}
        ]
    });
    static MONA               = new Character({ name: "MONA",               /* FINISHED */
        level: { materials: { 
            "20+": [{ item: Items.VARUNADA_LAZURITE_SLIVER,   amount: 1 },                                              { item: Items.PHILANEMO_MUSHROOM, amount:  3 }, { item: Items.WHOPPERFLOWER_NECTAR, amount:  3 }], 
            "40+": [{ item: Items.VARUNADA_LAZURITE_FRAGMENT, amount: 3 }, { item: Items.CLEANSING_HEART, amount:  2 }, { item: Items.PHILANEMO_MUSHROOM, amount: 10 }, { item: Items.WHOPPERFLOWER_NECTAR, amount: 15 }], 
            "50+": [{ item: Items.VARUNADA_LAZURITE_FRAGMENT, amount: 6 }, { item: Items.CLEANSING_HEART, amount:  4 }, { item: Items.PHILANEMO_MUSHROOM, amount: 20 }, { item: Items.SHIMMERING_NECTAR,    amount: 12 }], 
            "60+": [{ item: Items.VARUNADA_LAZURITE_CHUNK,    amount: 3 }, { item: Items.CLEANSING_HEART, amount:  8 }, { item: Items.PHILANEMO_MUSHROOM, amount: 30 }, { item: Items.SHIMMERING_NECTAR,    amount: 18 }], 
            "70+": [{ item: Items.VARUNADA_LAZURITE_CHUNK,    amount: 9 }, { item: Items.CLEANSING_HEART, amount: 12 }, { item: Items.PHILANEMO_MUSHROOM, amount: 45 }, { item: Items.ENERGY_NECTAR,        amount: 12 }], 
            "80+": [{ item: Items.VARUNADA_LAZURITE_GEMSTONE, amount: 6 }, { item: Items.CLEANSING_HEART, amount: 20 }, { item: Items.PHILANEMO_MUSHROOM, amount: 60 }, { item: Items.ENERGY_NECTAR,        amount: 24 }]
        }}, 
        elements: [
            { element: Elements.HYDRO, talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_RESISTANCE,    amount:  3 }, {item: Items.WHOPPERFLOWER_NECTAR, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_RESISTANCE,        amount:  2 }, {item: Items.SHIMMERING_NECTAR,    amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_RESISTANCE,        amount:  4 }, {item: Items.SHIMMERING_NECTAR,    amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_RESISTANCE,        amount:  6 }, {item: Items.SHIMMERING_NECTAR,    amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_RESISTANCE,        amount:  9 }, {item: Items.SHIMMERING_NECTAR,    amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_RESISTANCE, amount:  4 }, {item: Items.ENERGY_NECTAR,        amount:  4 }, { item: Items.RING_OF_BOREAS, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_RESISTANCE, amount:  6 }, {item: Items.ENERGY_NECTAR,        amount:  6 }, { item: Items.RING_OF_BOREAS, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_RESISTANCE, amount: 12 }, {item: Items.ENERGY_NECTAR,        amount:  9 }, { item: Items.RING_OF_BOREAS, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_RESISTANCE, amount: 16 }, {item: Items.ENERGY_NECTAR,        amount: 12 }, { item: Items.RING_OF_BOREAS, amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_RESISTANCE,    amount:  3 }, {item: Items.WHOPPERFLOWER_NECTAR, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_RESISTANCE,        amount:  2 }, {item: Items.SHIMMERING_NECTAR,    amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_RESISTANCE,        amount:  4 }, {item: Items.SHIMMERING_NECTAR,    amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_RESISTANCE,        amount:  6 }, {item: Items.SHIMMERING_NECTAR,    amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_RESISTANCE,        amount:  9 }, {item: Items.SHIMMERING_NECTAR,    amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_RESISTANCE, amount:  4 }, {item: Items.ENERGY_NECTAR,        amount:  4 }, { item: Items.RING_OF_BOREAS, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_RESISTANCE, amount:  6 }, {item: Items.ENERGY_NECTAR,        amount:  6 }, { item: Items.RING_OF_BOREAS, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_RESISTANCE, amount: 12 }, {item: Items.ENERGY_NECTAR,        amount:  9 }, { item: Items.RING_OF_BOREAS, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_RESISTANCE, amount: 16 }, {item: Items.ENERGY_NECTAR,        amount: 12 }, { item: Items.RING_OF_BOREAS, amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_RESISTANCE,    amount:  3 }, {item: Items.WHOPPERFLOWER_NECTAR, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_RESISTANCE,        amount:  2 }, {item: Items.SHIMMERING_NECTAR,    amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_RESISTANCE,        amount:  4 }, {item: Items.SHIMMERING_NECTAR,    amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_RESISTANCE,        amount:  6 }, {item: Items.SHIMMERING_NECTAR,    amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_RESISTANCE,        amount:  9 }, {item: Items.SHIMMERING_NECTAR,    amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_RESISTANCE, amount:  4 }, {item: Items.ENERGY_NECTAR,        amount:  4 }, { item: Items.RING_OF_BOREAS, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_RESISTANCE, amount:  6 }, {item: Items.ENERGY_NECTAR,        amount:  6 }, { item: Items.RING_OF_BOREAS, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_RESISTANCE, amount: 12 }, {item: Items.ENERGY_NECTAR,        amount:  9 }, { item: Items.RING_OF_BOREAS, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_RESISTANCE, amount: 16 }, {item: Items.ENERGY_NECTAR,        amount: 12 }, { item: Items.RING_OF_BOREAS, amount: 2 }] 
                }}
            }}
        ]
    });
    static KEQING             = new Character({ name: "KEQING",             /* FINISHED */
        level: { materials: { 
            "20+": [{ item: Items.VAJRADA_AMETHYST_SLIVER,   amount: 1 },                                              { item: Items.COR_LAPIS, amount:  3 }, { item: Items.WHOPPERFLOWER_NECTAR, amount:  3 }], 
            "40+": [{ item: Items.VAJRADA_AMETHYST_FRAGMENT, amount: 3 }, { item: Items.LIGHTNING_PRISM, amount:  2 }, { item: Items.COR_LAPIS, amount: 10 }, { item: Items.WHOPPERFLOWER_NECTAR, amount: 15 }], 
            "50+": [{ item: Items.VAJRADA_AMETHYST_FRAGMENT, amount: 6 }, { item: Items.LIGHTNING_PRISM, amount:  4 }, { item: Items.COR_LAPIS, amount: 20 }, { item: Items.SHIMMERING_NECTAR,    amount: 12 }], 
            "60+": [{ item: Items.VAJRADA_AMETHYST_CHUNK,    amount: 3 }, { item: Items.LIGHTNING_PRISM, amount:  8 }, { item: Items.COR_LAPIS, amount: 30 }, { item: Items.SHIMMERING_NECTAR,    amount: 18 }], 
            "70+": [{ item: Items.VAJRADA_AMETHYST_CHUNK,    amount: 6 }, { item: Items.LIGHTNING_PRISM, amount: 12 }, { item: Items.COR_LAPIS, amount: 45 }, { item: Items.ENERGY_NECTAR,        amount: 12 }], 
            "80+": [{ item: Items.VAJRADA_AMETHYST_GEMSTONE, amount: 6 }, { item: Items.LIGHTNING_PRISM, amount: 20 }, { item: Items.COR_LAPIS, amount: 60 }, { item: Items.ENERGY_NECTAR,        amount: 24 }]
        }}, 
        elements: [
            { element: Elements.ELECTRO, talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_PROSPERITY,    amount:  3 }, {item: Items.WHOPPERFLOWER_NECTAR, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_PROSPERITY,        amount:  2 }, {item: Items.SHIMMERING_NECTAR,    amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_PROSPERITY,        amount:  4 }, {item: Items.SHIMMERING_NECTAR,    amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_PROSPERITY,        amount:  6 }, {item: Items.SHIMMERING_NECTAR,    amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_PROSPERITY,        amount:  9 }, {item: Items.SHIMMERING_NECTAR,    amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_PROSPERITY, amount:  4 }, {item: Items.ENERGY_NECTAR,        amount:  4 }, { item: Items.RING_OF_BOREAS, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_PROSPERITY, amount:  6 }, {item: Items.ENERGY_NECTAR,        amount:  6 }, { item: Items.RING_OF_BOREAS, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_PROSPERITY, amount: 12 }, {item: Items.ENERGY_NECTAR,        amount:  9 }, { item: Items.RING_OF_BOREAS, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_PROSPERITY, amount: 16 }, {item: Items.ENERGY_NECTAR,        amount: 12 }, { item: Items.RING_OF_BOREAS, amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_PROSPERITY,    amount:  3 }, {item: Items.WHOPPERFLOWER_NECTAR, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_PROSPERITY,        amount:  2 }, {item: Items.SHIMMERING_NECTAR,    amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_PROSPERITY,        amount:  4 }, {item: Items.SHIMMERING_NECTAR,    amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_PROSPERITY,        amount:  6 }, {item: Items.SHIMMERING_NECTAR,    amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_PROSPERITY,        amount:  9 }, {item: Items.SHIMMERING_NECTAR,    amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_PROSPERITY, amount:  4 }, {item: Items.ENERGY_NECTAR,        amount:  4 }, { item: Items.RING_OF_BOREAS, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_PROSPERITY, amount:  6 }, {item: Items.ENERGY_NECTAR,        amount:  6 }, { item: Items.RING_OF_BOREAS, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_PROSPERITY, amount: 12 }, {item: Items.ENERGY_NECTAR,        amount:  9 }, { item: Items.RING_OF_BOREAS, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_PROSPERITY, amount: 16 }, {item: Items.ENERGY_NECTAR,        amount: 12 }, { item: Items.RING_OF_BOREAS, amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_PROSPERITY,    amount:  3 }, {item: Items.WHOPPERFLOWER_NECTAR, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_PROSPERITY,        amount:  2 }, {item: Items.SHIMMERING_NECTAR,    amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_PROSPERITY,        amount:  4 }, {item: Items.SHIMMERING_NECTAR,    amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_PROSPERITY,        amount:  6 }, {item: Items.SHIMMERING_NECTAR,    amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_PROSPERITY,        amount:  9 }, {item: Items.SHIMMERING_NECTAR,    amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_PROSPERITY, amount:  4 }, {item: Items.ENERGY_NECTAR,        amount:  4 }, { item: Items.RING_OF_BOREAS, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_PROSPERITY, amount:  6 }, {item: Items.ENERGY_NECTAR,        amount:  6 }, { item: Items.RING_OF_BOREAS, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_PROSPERITY, amount: 12 }, {item: Items.ENERGY_NECTAR,        amount:  9 }, { item: Items.RING_OF_BOREAS, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_PROSPERITY, amount: 16 }, {item: Items.ENERGY_NECTAR,        amount: 12 }, { item: Items.RING_OF_BOREAS, amount: 2 }] 
                }}
            }}
        ]
    });
    static VENTI              = new Character({ name: "VENTI",              /* FINISHED */
        level: { materials: { 
            "20+": [{ item: Items.VAYUDA_TURQUOISE_SLIVER,   amount: 1 },                                             { item: Items.CECILIA, amount:  3 }, { item: Items.SLIME_CONDENSATE,  amount:  3 }], 
            "40+": [{ item: Items.VAYUDA_TURQUOISE_FRAGMENT, amount: 3 }, { item: Items.HURRICANE_SEED, amount:  2 }, { item: Items.CECILIA, amount: 10 }, { item: Items.SLIME_CONDENSATE,  amount: 15 }], 
            "50+": [{ item: Items.VAYUDA_TURQUOISE_FRAGMENT, amount: 6 }, { item: Items.HURRICANE_SEED, amount:  4 }, { item: Items.CECILIA, amount: 20 }, { item: Items.SLIME_SECRETIONS,  amount: 12 }], 
            "60+": [{ item: Items.VAYUDA_TURQUOISE_CHUNK,    amount: 3 }, { item: Items.HURRICANE_SEED, amount:  8 }, { item: Items.CECILIA, amount: 30 }, { item: Items.SLIME_SECRETIONS,  amount: 18 }], 
            "70+": [{ item: Items.VAYUDA_TURQUOISE_CHUNK,    amount: 6 }, { item: Items.HURRICANE_SEED, amount: 12 }, { item: Items.CECILIA, amount: 45 }, { item: Items.SLIME_CONCENTRATE, amount: 12 }], 
            "80+": [{ item: Items.VAYUDA_TURQUOISE_GEMSTONE, amount: 6 }, { item: Items.HURRICANE_SEED, amount: 20 }, { item: Items.CECILIA, amount: 60 }, { item: Items.SLIME_CONCENTRATE, amount: 24 }]
        }}, 
        elements: [
            { element: Elements.ANEMO, talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_BALLAD,    amount:  3 }, {item: Items.SLIME_CONDENSATE,  amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_BALLAD,        amount:  2 }, {item: Items.SLIME_SECRETIONS,  amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_BALLAD,        amount:  4 }, {item: Items.SLIME_SECRETIONS,  amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_BALLAD,        amount:  6 }, {item: Items.SLIME_SECRETIONS,  amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_BALLAD,        amount:  9 }, {item: Items.SLIME_SECRETIONS,  amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_BALLAD, amount:  4 }, {item: Items.SLIME_CONCENTRATE, amount:  4 }, { item: Items.TAIL_OF_BOREAS, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_BALLAD, amount:  6 }, {item: Items.SLIME_CONCENTRATE, amount:  6 }, { item: Items.TAIL_OF_BOREAS, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_BALLAD, amount: 12 }, {item: Items.SLIME_CONCENTRATE, amount:  9 }, { item: Items.TAIL_OF_BOREAS, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_BALLAD, amount: 16 }, {item: Items.SLIME_CONCENTRATE, amount: 12 }, { item: Items.TAIL_OF_BOREAS, amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_BALLAD,    amount:  3 }, {item: Items.SLIME_CONDENSATE,  amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_BALLAD,        amount:  2 }, {item: Items.SLIME_SECRETIONS,  amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_BALLAD,        amount:  4 }, {item: Items.SLIME_SECRETIONS,  amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_BALLAD,        amount:  6 }, {item: Items.SLIME_SECRETIONS,  amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_BALLAD,        amount:  9 }, {item: Items.SLIME_SECRETIONS,  amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_BALLAD, amount:  4 }, {item: Items.SLIME_CONCENTRATE, amount:  4 }, { item: Items.TAIL_OF_BOREAS, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_BALLAD, amount:  6 }, {item: Items.SLIME_CONCENTRATE, amount:  6 }, { item: Items.TAIL_OF_BOREAS, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_BALLAD, amount: 12 }, {item: Items.SLIME_CONCENTRATE, amount:  9 }, { item: Items.TAIL_OF_BOREAS, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_BALLAD, amount: 16 }, {item: Items.SLIME_CONCENTRATE, amount: 12 }, { item: Items.TAIL_OF_BOREAS, amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_BALLAD,    amount:  3 }, {item: Items.SLIME_CONDENSATE,  amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_BALLAD,        amount:  2 }, {item: Items.SLIME_SECRETIONS,  amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_BALLAD,        amount:  4 }, {item: Items.SLIME_SECRETIONS,  amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_BALLAD,        amount:  6 }, {item: Items.SLIME_SECRETIONS,  amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_BALLAD,        amount:  9 }, {item: Items.SLIME_SECRETIONS,  amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_BALLAD, amount:  4 }, {item: Items.SLIME_CONCENTRATE, amount:  4 }, { item: Items.TAIL_OF_BOREAS, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_BALLAD, amount:  6 }, {item: Items.SLIME_CONCENTRATE, amount:  6 }, { item: Items.TAIL_OF_BOREAS, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_BALLAD, amount: 12 }, {item: Items.SLIME_CONCENTRATE, amount:  9 }, { item: Items.TAIL_OF_BOREAS, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_BALLAD, amount: 16 }, {item: Items.SLIME_CONCENTRATE, amount: 12 }, { item: Items.TAIL_OF_BOREAS, amount: 2 }] 
                }}
            }
        }]
    });
    static KLEE               = new Character({ name: "KLEE",               /* FINISHED */
        level: { materials: { 
            "20+": [{ item: Items.AGNIDUS_AGATE_SLIVER,   amount: 1 },                                             { item: Items.PHILANEMO_MUSHROOM, amount:  3 }, { item: Items.DIVINING_SCROLL,        amount:  3 }], 
            "40+": [{ item: Items.AGNIDUS_AGATE_FRAGMENT, amount: 3 }, { item: Items.EVERFLAME_SEED, amount:  2 }, { item: Items.PHILANEMO_MUSHROOM, amount: 10 }, { item: Items.DIVINING_SCROLL,        amount: 15 }], 
            "50+": [{ item: Items.AGNIDUS_AGATE_FRAGMENT, amount: 6 }, { item: Items.EVERFLAME_SEED, amount:  4 }, { item: Items.PHILANEMO_MUSHROOM, amount: 20 }, { item: Items.SEALED_SCROLL,          amount: 12 }], 
            "60+": [{ item: Items.AGNIDUS_AGATE_CHUNK,    amount: 3 }, { item: Items.EVERFLAME_SEED, amount:  8 }, { item: Items.PHILANEMO_MUSHROOM, amount: 30 }, { item: Items.SEALED_SCROLL,          amount: 18 }], 
            "70+": [{ item: Items.AGNIDUS_AGATE_CHUNK,    amount: 6 }, { item: Items.EVERFLAME_SEED, amount: 12 }, { item: Items.PHILANEMO_MUSHROOM, amount: 45 }, { item: Items.FORBIDDEN_CURSE_SCROLL, amount: 12 }], 
            "80+": [{ item: Items.AGNIDUS_AGATE_GEMSTONE, amount: 6 }, { item: Items.EVERFLAME_SEED, amount: 20 }, { item: Items.PHILANEMO_MUSHROOM, amount: 60 }, { item: Items.FORBIDDEN_CURSE_SCROLL, amount: 24 }]
        }}, 
        elements: [
            { element: Elements.PYRO, talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_FREEDOM,    amount:  3 }, {item: Items.DIVINING_SCROLL,        amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_FREEDOM,        amount:  2 }, {item: Items.SEALED_SCROLL,          amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_FREEDOM,        amount:  4 }, {item: Items.SEALED_SCROLL,          amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_FREEDOM,        amount:  6 }, {item: Items.SEALED_SCROLL,          amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_FREEDOM,        amount:  9 }, {item: Items.SEALED_SCROLL,          amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_FREEDOM, amount:  4 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount:  4 }, { item: Items.RING_OF_BOREAS, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_FREEDOM, amount:  6 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount:  6 }, { item: Items.RING_OF_BOREAS, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_FREEDOM, amount: 12 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount:  9 }, { item: Items.RING_OF_BOREAS, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_FREEDOM, amount: 16 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount: 12 }, { item: Items.RING_OF_BOREAS, amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_FREEDOM,    amount:  3 }, {item: Items.DIVINING_SCROLL,        amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_FREEDOM,        amount:  2 }, {item: Items.SEALED_SCROLL,          amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_FREEDOM,        amount:  4 }, {item: Items.SEALED_SCROLL,          amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_FREEDOM,        amount:  6 }, {item: Items.SEALED_SCROLL,          amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_FREEDOM,        amount:  9 }, {item: Items.SEALED_SCROLL,          amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_FREEDOM, amount:  4 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount:  4 }, { item: Items.RING_OF_BOREAS, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_FREEDOM, amount:  6 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount:  6 }, { item: Items.RING_OF_BOREAS, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_FREEDOM, amount: 12 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount:  9 }, { item: Items.RING_OF_BOREAS, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_FREEDOM, amount: 16 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount: 12 }, { item: Items.RING_OF_BOREAS, amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_FREEDOM,    amount:  3 }, {item: Items.DIVINING_SCROLL,        amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_FREEDOM,        amount:  2 }, {item: Items.SEALED_SCROLL,          amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_FREEDOM,        amount:  4 }, {item: Items.SEALED_SCROLL,          amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_FREEDOM,        amount:  6 }, {item: Items.SEALED_SCROLL,          amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_FREEDOM,        amount:  9 }, {item: Items.SEALED_SCROLL,          amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_FREEDOM, amount:  4 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount:  4 }, { item: Items.RING_OF_BOREAS, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_FREEDOM, amount:  6 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount:  6 }, { item: Items.RING_OF_BOREAS, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_FREEDOM, amount: 12 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount:  9 }, { item: Items.RING_OF_BOREAS, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_FREEDOM, amount: 16 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount: 12 }, { item: Items.RING_OF_BOREAS, amount: 2 }] 
                }}
            }}
        ]
    });
    static DIONA              = new Character({ name: "DIONA",              /* FINISHED */
        level: { materials: { 
            "20+": [{ item: Items.SHIVADA_JADE_SLIVER,   amount: 1 },                                             { item: Items.CALLA_LILY, amount:  3 }, { item: Items.FIRM_ARROWHEAD,     amount:  3 }], 
            "40+": [{ item: Items.SHIVADA_JADE_FRAGMENT, amount: 3 }, { item: Items.HOARFROST_CORE, amount:  2 }, { item: Items.CALLA_LILY, amount: 10 }, { item: Items.FIRM_ARROWHEAD,     amount: 15 }], 
            "50+": [{ item: Items.SHIVADA_JADE_FRAGMENT, amount: 6 }, { item: Items.HOARFROST_CORE, amount:  4 }, { item: Items.CALLA_LILY, amount: 20 }, { item: Items.SHARP_ARROWHEAD,    amount: 12 }], 
            "60+": [{ item: Items.SHIVADA_JADE_CHUNK,    amount: 3 }, { item: Items.HOARFROST_CORE, amount:  8 }, { item: Items.CALLA_LILY, amount: 30 }, { item: Items.SHARP_ARROWHEAD,    amount: 18 }], 
            "70+": [{ item: Items.SHIVADA_JADE_CHUNK,    amount: 6 }, { item: Items.HOARFROST_CORE, amount: 12 }, { item: Items.CALLA_LILY, amount: 45 }, { item: Items.WATHERED_ARROWHEAD, amount: 12 }], 
            "80+": [{ item: Items.SHIVADA_JADE_GEMSTONE, amount: 6 }, { item: Items.HOARFROST_CORE, amount: 20 }, { item: Items.CALLA_LILY, amount: 60 }, { item: Items.WATHERED_ARROWHEAD, amount: 24 }]
        }}, 
        elements: [
            { element: Elements.CRYO, talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_FREEDOM,    amount:  3 }, {item: Items.FIRM_ARROWHEAD,     amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_FREEDOM,        amount:  2 }, {item: Items.SHARP_ARROWHEAD,    amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_FREEDOM,        amount:  4 }, {item: Items.SHARP_ARROWHEAD,    amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_FREEDOM,        amount:  6 }, {item: Items.SHARP_ARROWHEAD,    amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_FREEDOM,        amount:  9 }, {item: Items.SHARP_ARROWHEAD,    amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_FREEDOM, amount:  4 }, {item: Items.WATHERED_ARROWHEAD, amount:  4 }, { item: Items.SHARD_OF_A_FOUL_LEGACY, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_FREEDOM, amount:  6 }, {item: Items.WATHERED_ARROWHEAD, amount:  6 }, { item: Items.SHARD_OF_A_FOUL_LEGACY, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_FREEDOM, amount: 12 }, {item: Items.WATHERED_ARROWHEAD, amount:  9 }, { item: Items.SHARD_OF_A_FOUL_LEGACY, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_FREEDOM, amount: 16 }, {item: Items.WATHERED_ARROWHEAD, amount: 12 }, { item: Items.SHARD_OF_A_FOUL_LEGACY, amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_FREEDOM,    amount:  3 }, {item: Items.FIRM_ARROWHEAD,     amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_FREEDOM,        amount:  2 }, {item: Items.SHARP_ARROWHEAD,    amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_FREEDOM,        amount:  4 }, {item: Items.SHARP_ARROWHEAD,    amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_FREEDOM,        amount:  6 }, {item: Items.SHARP_ARROWHEAD,    amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_FREEDOM,        amount:  9 }, {item: Items.SHARP_ARROWHEAD,    amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_FREEDOM, amount:  4 }, {item: Items.WATHERED_ARROWHEAD, amount:  4 }, { item: Items.SHARD_OF_A_FOUL_LEGACY, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_FREEDOM, amount:  6 }, {item: Items.WATHERED_ARROWHEAD, amount:  6 }, { item: Items.SHARD_OF_A_FOUL_LEGACY, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_FREEDOM, amount: 12 }, {item: Items.WATHERED_ARROWHEAD, amount:  9 }, { item: Items.SHARD_OF_A_FOUL_LEGACY, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_FREEDOM, amount: 16 }, {item: Items.WATHERED_ARROWHEAD, amount: 12 }, { item: Items.SHARD_OF_A_FOUL_LEGACY, amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_FREEDOM,    amount:  3 }, {item: Items.FIRM_ARROWHEAD,     amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_FREEDOM,        amount:  2 }, {item: Items.SHARP_ARROWHEAD,    amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_FREEDOM,        amount:  4 }, {item: Items.SHARP_ARROWHEAD,    amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_FREEDOM,        amount:  6 }, {item: Items.SHARP_ARROWHEAD,    amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_FREEDOM,        amount:  9 }, {item: Items.SHARP_ARROWHEAD,    amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_FREEDOM, amount:  4 }, {item: Items.WATHERED_ARROWHEAD, amount:  4 }, { item: Items.SHARD_OF_A_FOUL_LEGACY, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_FREEDOM, amount:  6 }, {item: Items.WATHERED_ARROWHEAD, amount:  6 }, { item: Items.SHARD_OF_A_FOUL_LEGACY, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_FREEDOM, amount: 12 }, {item: Items.WATHERED_ARROWHEAD, amount:  9 }, { item: Items.SHARD_OF_A_FOUL_LEGACY, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_FREEDOM, amount: 16 }, {item: Items.WATHERED_ARROWHEAD, amount: 12 }, { item: Items.SHARD_OF_A_FOUL_LEGACY, amount: 2 }] 
                }}
            }}
        ]
    });
    static TARTAGLIA          = new Character({ name: "TARTAGLIA",          /* FINISHED */
        level: { materials: { 
            "20+": [{ item: Items.VARUNADA_LAZURITE_SLIVER,   amount: 1 },                                              { item: Items.STARCONCH, amount:  3 }, { item: Items["RECRUIT'S_INSIGNIA"],    amount:  3 }], 
            "40+": [{ item: Items.VARUNADA_LAZURITE_FRAGMENT, amount: 3 }, { item: Items.CLEANSING_HEART, amount:  2 }, { item: Items.STARCONCH, amount: 10 }, { item: Items["RECRUIT'S_INSIGNIA"],    amount: 15 }], 
            "50+": [{ item: Items.VARUNADA_LAZURITE_FRAGMENT, amount: 6 }, { item: Items.CLEANSING_HEART, amount:  4 }, { item: Items.STARCONCH, amount: 20 }, { item: Items["SEARGENT'S_INSIGNIA"],   amount: 12 }], 
            "60+": [{ item: Items.VARUNADA_LAZURITE_CHUNK,    amount: 3 }, { item: Items.CLEANSING_HEART, amount:  8 }, { item: Items.STARCONCH, amount: 30 }, { item: Items["SEARGENT'S_INSIGNIA"],   amount: 18 }], 
            "70+": [{ item: Items.VARUNADA_LAZURITE_CHUNK,    amount: 6 }, { item: Items.CLEANSING_HEART, amount: 12 }, { item: Items.STARCONCH, amount: 45 }, { item: Items["LIEUTENANT'S_INSIGNIA"], amount: 12 }], 
            "80+": [{ item: Items.VARUNADA_LAZURITE_GEMSTONE, amount: 6 }, { item: Items.CLEANSING_HEART, amount: 20 }, { item: Items.STARCONCH, amount: 60 }, { item: Items["LIEUTENANT'S_INSIGNIA"], amount: 24 }]
        }}, 
        elements: [
            { element: Elements.HYDRO, talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_FREEDOM,    amount:  3 }, {item: Items["RECRUIT'S_INSIGNIA"],    amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_FREEDOM,        amount:  2 }, {item: Items["SEARGENT'S_INSIGNIA"],   amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_FREEDOM,        amount:  4 }, {item: Items["SEARGENT'S_INSIGNIA"],   amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_FREEDOM,        amount:  6 }, {item: Items["SEARGENT'S_INSIGNIA"],   amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_FREEDOM,        amount:  9 }, {item: Items["SEARGENT'S_INSIGNIA"],   amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_FREEDOM, amount:  4 }, {item: Items["LIEUTENANT'S_INSIGNIA"], amount:  4 }, { item: Items.SHARD_OF_A_FOUL_LEGACY, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_FREEDOM, amount:  6 }, {item: Items["LIEUTENANT'S_INSIGNIA"], amount:  6 }, { item: Items.SHARD_OF_A_FOUL_LEGACY, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_FREEDOM, amount: 12 }, {item: Items["LIEUTENANT'S_INSIGNIA"], amount:  9 }, { item: Items.SHARD_OF_A_FOUL_LEGACY, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_FREEDOM, amount: 16 }, {item: Items["LIEUTENANT'S_INSIGNIA"], amount: 12 }, { item: Items.SHARD_OF_A_FOUL_LEGACY, amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_FREEDOM,    amount:  3 }, {item: Items["RECRUIT'S_INSIGNIA"],    amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_FREEDOM,        amount:  2 }, {item: Items["SEARGENT'S_INSIGNIA"],   amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_FREEDOM,        amount:  4 }, {item: Items["SEARGENT'S_INSIGNIA"],   amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_FREEDOM,        amount:  6 }, {item: Items["SEARGENT'S_INSIGNIA"],   amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_FREEDOM,        amount:  9 }, {item: Items["SEARGENT'S_INSIGNIA"],   amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_FREEDOM, amount:  4 }, {item: Items["LIEUTENANT'S_INSIGNIA"], amount:  4 }, { item: Items.SHARD_OF_A_FOUL_LEGACY, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_FREEDOM, amount:  6 }, {item: Items["LIEUTENANT'S_INSIGNIA"], amount:  6 }, { item: Items.SHARD_OF_A_FOUL_LEGACY, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_FREEDOM, amount: 12 }, {item: Items["LIEUTENANT'S_INSIGNIA"], amount:  9 }, { item: Items.SHARD_OF_A_FOUL_LEGACY, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_FREEDOM, amount: 16 }, {item: Items["LIEUTENANT'S_INSIGNIA"], amount: 12 }, { item: Items.SHARD_OF_A_FOUL_LEGACY, amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_FREEDOM,    amount:  3 }, {item: Items["RECRUIT'S_INSIGNIA"],    amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_FREEDOM,        amount:  2 }, {item: Items["SEARGENT'S_INSIGNIA"],   amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_FREEDOM,        amount:  4 }, {item: Items["SEARGENT'S_INSIGNIA"],   amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_FREEDOM,        amount:  6 }, {item: Items["SEARGENT'S_INSIGNIA"],   amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_FREEDOM,        amount:  9 }, {item: Items["SEARGENT'S_INSIGNIA"],   amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_FREEDOM, amount:  4 }, {item: Items["LIEUTENANT'S_INSIGNIA"], amount:  4 }, { item: Items.SHARD_OF_A_FOUL_LEGACY, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_FREEDOM, amount:  6 }, {item: Items["LIEUTENANT'S_INSIGNIA"], amount:  6 }, { item: Items.SHARD_OF_A_FOUL_LEGACY, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_FREEDOM, amount: 12 }, {item: Items["LIEUTENANT'S_INSIGNIA"], amount:  9 }, { item: Items.SHARD_OF_A_FOUL_LEGACY, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_FREEDOM, amount: 16 }, {item: Items["LIEUTENANT'S_INSIGNIA"], amount: 12 }, { item: Items.SHARD_OF_A_FOUL_LEGACY, amount: 2 }] 
                }}
            }
        }]
    });
    static XINYAN             = new Character({ name: "XINYAN",             /* FINISHED */
        level: { materials: { 
            "20+": [{ item: Items.AGNIDUS_AGATE_SLIVER,   amount: 1 },                                             { item: Items.VIOLETGRASS, amount:  3 }, { item: Items.TREASURE_HOARDER_INSIGNIA, amount:  3 }], 
            "40+": [{ item: Items.AGNIDUS_AGATE_FRAGMENT, amount: 3 }, { item: Items.EVERFLAME_SEED, amount:  2 }, { item: Items.VIOLETGRASS, amount: 10 }, { item: Items.TREASURE_HOARDER_INSIGNIA, amount: 15 }], 
            "50+": [{ item: Items.AGNIDUS_AGATE_FRAGMENT, amount: 6 }, { item: Items.EVERFLAME_SEED, amount:  4 }, { item: Items.VIOLETGRASS, amount: 20 }, { item: Items.SILVER_RAVEN_INSIGNIA,     amount: 12 }], 
            "60+": [{ item: Items.AGNIDUS_AGATE_CHUNK,    amount: 3 }, { item: Items.EVERFLAME_SEED, amount:  8 }, { item: Items.VIOLETGRASS, amount: 30 }, { item: Items.SILVER_RAVEN_INSIGNIA,     amount: 18 }], 
            "70+": [{ item: Items.AGNIDUS_AGATE_CHUNK,    amount: 6 }, { item: Items.EVERFLAME_SEED, amount: 12 }, { item: Items.VIOLETGRASS, amount: 45 }, { item: Items.GOLDEN_RAVEN_INSIGNIA,     amount: 12 }], 
            "80+": [{ item: Items.AGNIDUS_AGATE_GEMSTONE, amount: 6 }, { item: Items.EVERFLAME_SEED, amount: 20 }, { item: Items.VIOLETGRASS, amount: 60 }, { item: Items.GOLDEN_RAVEN_INSIGNIA,     amount: 24 }]
        }}, 
        elements: [
            { element: Elements.PYRO, talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_GOLD,    amount:  3 }, {item: Items.TREASURE_HOARDER_INSIGNIA, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_GOLD,        amount:  2 }, {item: Items.SILVER_RAVEN_INSIGNIA,     amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_GOLD,        amount:  4 }, {item: Items.SILVER_RAVEN_INSIGNIA,     amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_GOLD,        amount:  6 }, {item: Items.SILVER_RAVEN_INSIGNIA,     amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_GOLD,        amount:  9 }, {item: Items.SILVER_RAVEN_INSIGNIA,     amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_GOLD, amount:  4 }, {item: Items.GOLDEN_RAVEN_INSIGNIA,     amount:  4 }, { item: Items.TUSK_OF_MONOCEROS_CAELI, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_GOLD, amount:  6 }, {item: Items.GOLDEN_RAVEN_INSIGNIA,     amount:  6 }, { item: Items.TUSK_OF_MONOCEROS_CAELI, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_GOLD, amount: 12 }, {item: Items.GOLDEN_RAVEN_INSIGNIA,     amount:  9 }, { item: Items.TUSK_OF_MONOCEROS_CAELI, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_GOLD, amount: 16 }, {item: Items.GOLDEN_RAVEN_INSIGNIA,     amount: 12 }, { item: Items.TUSK_OF_MONOCEROS_CAELI, amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_GOLD,    amount:  3 }, {item: Items.TREASURE_HOARDER_INSIGNIA, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_GOLD,        amount:  2 }, {item: Items.SILVER_RAVEN_INSIGNIA,     amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_GOLD,        amount:  4 }, {item: Items.SILVER_RAVEN_INSIGNIA,     amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_GOLD,        amount:  6 }, {item: Items.SILVER_RAVEN_INSIGNIA,     amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_GOLD,        amount:  9 }, {item: Items.SILVER_RAVEN_INSIGNIA,     amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_GOLD, amount:  4 }, {item: Items.GOLDEN_RAVEN_INSIGNIA,     amount:  4 }, { item: Items.TUSK_OF_MONOCEROS_CAELI, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_GOLD, amount:  6 }, {item: Items.GOLDEN_RAVEN_INSIGNIA,     amount:  6 }, { item: Items.TUSK_OF_MONOCEROS_CAELI, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_GOLD, amount: 12 }, {item: Items.GOLDEN_RAVEN_INSIGNIA,     amount:  9 }, { item: Items.TUSK_OF_MONOCEROS_CAELI, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_GOLD, amount: 16 }, {item: Items.GOLDEN_RAVEN_INSIGNIA,     amount: 12 }, { item: Items.TUSK_OF_MONOCEROS_CAELI, amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_GOLD,    amount:  3 }, {item: Items.TREASURE_HOARDER_INSIGNIA, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_GOLD,        amount:  2 }, {item: Items.SILVER_RAVEN_INSIGNIA,     amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_GOLD,        amount:  4 }, {item: Items.SILVER_RAVEN_INSIGNIA,     amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_GOLD,        amount:  6 }, {item: Items.SILVER_RAVEN_INSIGNIA,     amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_GOLD,        amount:  9 }, {item: Items.SILVER_RAVEN_INSIGNIA,     amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_GOLD, amount:  4 }, {item: Items.GOLDEN_RAVEN_INSIGNIA,     amount:  4 }, { item: Items.TUSK_OF_MONOCEROS_CAELI, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_GOLD, amount:  6 }, {item: Items.GOLDEN_RAVEN_INSIGNIA,     amount:  6 }, { item: Items.TUSK_OF_MONOCEROS_CAELI, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_GOLD, amount: 12 }, {item: Items.GOLDEN_RAVEN_INSIGNIA,     amount:  9 }, { item: Items.TUSK_OF_MONOCEROS_CAELI, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_GOLD, amount: 16 }, {item: Items.GOLDEN_RAVEN_INSIGNIA,     amount: 12 }, { item: Items.TUSK_OF_MONOCEROS_CAELI, amount: 2 }] 
                }}
            }}
        ]
    });
    static ZHONGLI            = new Character({ name: "ZHONGLI",            /* FINISHED */
        level: { materials: { 
            "20+": [{ item: Items.PRITHIVA_TOPAZ_SLIVER,   amount: 1 },                                            { item: Items.COR_LAPIS, amount:  3 }, { item: Items.SLIME_CONDENSATE,  amount:  3 }], 
            "40+": [{ item: Items.PRITHIVA_TOPAZ_FRAGMENT, amount: 3 }, { item: Items.BASALT_PILLAR, amount:  2 }, { item: Items.COR_LAPIS, amount: 10 }, { item: Items.SLIME_CONDENSATE,  amount: 15 }], 
            "50+": [{ item: Items.PRITHIVA_TOPAZ_FRAGMENT, amount: 6 }, { item: Items.BASALT_PILLAR, amount:  4 }, { item: Items.COR_LAPIS, amount: 20 }, { item: Items.SLIME_SECRETIONS,  amount: 12 }], 
            "60+": [{ item: Items.PRITHIVA_TOPAZ_CHUNK,    amount: 3 }, { item: Items.BASALT_PILLAR, amount:  8 }, { item: Items.COR_LAPIS, amount: 30 }, { item: Items.SLIME_SECRETIONS,  amount: 18 }], 
            "70+": [{ item: Items.PRITHIVA_TOPAZ_CHUNK,    amount: 9 }, { item: Items.BASALT_PILLAR, amount: 12 }, { item: Items.COR_LAPIS, amount: 45 }, { item: Items.SLIME_CONCENTRATE, amount: 12 }], 
            "80+": [{ item: Items.PRITHIVA_TOPAZ_GEMSTONE, amount: 6 }, { item: Items.BASALT_PILLAR, amount: 20 }, { item: Items.COR_LAPIS, amount: 60 }, { item: Items.SLIME_CONCENTRATE, amount: 24 }]
        }}, 
        elements: [
            { element: Elements.GEO, talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_GOLD,    amount:  3 }, {item: Items.SLIME_CONDENSATE,  amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_GOLD,        amount:  2 }, {item: Items.SLIME_SECRETIONS,  amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_GOLD,        amount:  4 }, {item: Items.SLIME_SECRETIONS,  amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_GOLD,        amount:  6 }, {item: Items.SLIME_SECRETIONS,  amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_GOLD,        amount:  9 }, {item: Items.SLIME_SECRETIONS,  amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_GOLD, amount:  4 }, {item: Items.SLIME_CONCENTRATE, amount:  4 }, { item: Items.TUSK_OF_MONOCEROS_CAELI, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_GOLD, amount:  6 }, {item: Items.SLIME_CONCENTRATE, amount:  6 }, { item: Items.TUSK_OF_MONOCEROS_CAELI, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_GOLD, amount: 12 }, {item: Items.SLIME_CONCENTRATE, amount:  9 }, { item: Items.TUSK_OF_MONOCEROS_CAELI, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_GOLD, amount: 16 }, {item: Items.SLIME_CONCENTRATE, amount: 12 }, { item: Items.TUSK_OF_MONOCEROS_CAELI, amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_GOLD,    amount:  3 }, {item: Items.SLIME_CONDENSATE,  amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_GOLD,        amount:  2 }, {item: Items.SLIME_SECRETIONS,  amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_GOLD,        amount:  4 }, {item: Items.SLIME_SECRETIONS,  amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_GOLD,        amount:  6 }, {item: Items.SLIME_SECRETIONS,  amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_GOLD,        amount:  9 }, {item: Items.SLIME_SECRETIONS,  amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_GOLD, amount:  4 }, {item: Items.SLIME_CONCENTRATE, amount:  4 }, { item: Items.TUSK_OF_MONOCEROS_CAELI, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_GOLD, amount:  6 }, {item: Items.SLIME_CONCENTRATE, amount:  6 }, { item: Items.TUSK_OF_MONOCEROS_CAELI, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_GOLD, amount: 12 }, {item: Items.SLIME_CONCENTRATE, amount:  9 }, { item: Items.TUSK_OF_MONOCEROS_CAELI, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_GOLD, amount: 16 }, {item: Items.SLIME_CONCENTRATE, amount: 12 }, { item: Items.TUSK_OF_MONOCEROS_CAELI, amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_GOLD,    amount:  3 }, {item: Items.SLIME_CONDENSATE,  amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_GOLD,        amount:  2 }, {item: Items.SLIME_SECRETIONS,  amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_GOLD,        amount:  4 }, {item: Items.SLIME_SECRETIONS,  amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_GOLD,        amount:  6 }, {item: Items.SLIME_SECRETIONS,  amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_GOLD,        amount:  9 }, {item: Items.SLIME_SECRETIONS,  amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_GOLD, amount:  4 }, {item: Items.SLIME_CONCENTRATE, amount:  4 }, { item: Items.TUSK_OF_MONOCEROS_CAELI, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_GOLD, amount:  6 }, {item: Items.SLIME_CONCENTRATE, amount:  6 }, { item: Items.TUSK_OF_MONOCEROS_CAELI, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_GOLD, amount: 12 }, {item: Items.SLIME_CONCENTRATE, amount:  9 }, { item: Items.TUSK_OF_MONOCEROS_CAELI, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_GOLD, amount: 16 }, {item: Items.SLIME_CONCENTRATE, amount: 12 }, { item: Items.TUSK_OF_MONOCEROS_CAELI, amount: 2 }] 
                }}
            }}
        ]
    });
    static ALBEDO             = new Character({ name: "ALBEDO",             /* FINISHED */
        level: { materials: { 
            "20+": [{ item: Items.PRITHIVA_TOPAZ_SLIVER,   amount: 1 },                                            { item: Items.CECILIA, amount:  3 }, { item: Items.DIVINING_SCROLL,        amount:  3 }], 
            "40+": [{ item: Items.PRITHIVA_TOPAZ_FRAGMENT, amount: 3 }, { item: Items.BASALT_PILLAR, amount:  2 }, { item: Items.CECILIA, amount: 10 }, { item: Items.DIVINING_SCROLL,        amount: 15 }], 
            "50+": [{ item: Items.PRITHIVA_TOPAZ_FRAGMENT, amount: 6 }, { item: Items.BASALT_PILLAR, amount:  4 }, { item: Items.CECILIA, amount: 20 }, { item: Items.SEALED_SCROLL,          amount: 12 }], 
            "60+": [{ item: Items.PRITHIVA_TOPAZ_CHUNK,    amount: 3 }, { item: Items.BASALT_PILLAR, amount:  8 }, { item: Items.CECILIA, amount: 30 }, { item: Items.SEALED_SCROLL,          amount: 18 }], 
            "70+": [{ item: Items.PRITHIVA_TOPAZ_CHUNK,    amount: 6 }, { item: Items.BASALT_PILLAR, amount: 12 }, { item: Items.CECILIA, amount: 45 }, { item: Items.FORBIDDEN_CURSE_SCROLL, amount: 12 }], 
            "80+": [{ item: Items.PRITHIVA_TOPAZ_GEMSTONE, amount: 6 }, { item: Items.BASALT_PILLAR, amount: 20 }, { item: Items.CECILIA, amount: 60 }, { item: Items.FORBIDDEN_CURSE_SCROLL, amount: 24 }]
        }}, 
        elements: [
            { element: Elements.GEO, talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_BALLAD,    amount:  3 }, {item: Items.DIVINING_SCROLL,        amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_BALLAD,        amount:  2 }, {item: Items.SEALED_SCROLL,          amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_BALLAD,        amount:  4 }, {item: Items.SEALED_SCROLL,          amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_BALLAD,        amount:  6 }, {item: Items.SEALED_SCROLL,          amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_BALLAD,        amount:  9 }, {item: Items.SEALED_SCROLL,          amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_BALLAD, amount:  4 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount:  4 }, { item: Items.TUSK_OF_MONOCEROS_CAELI, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_BALLAD, amount:  6 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount:  6 }, { item: Items.TUSK_OF_MONOCEROS_CAELI, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_BALLAD, amount: 12 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount:  9 }, { item: Items.TUSK_OF_MONOCEROS_CAELI, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_BALLAD, amount: 16 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount: 12 }, { item: Items.TUSK_OF_MONOCEROS_CAELI, amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_BALLAD,    amount:  3 }, {item: Items.DIVINING_SCROLL,        amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_BALLAD,        amount:  2 }, {item: Items.SEALED_SCROLL,          amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_BALLAD,        amount:  4 }, {item: Items.SEALED_SCROLL,          amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_BALLAD,        amount:  6 }, {item: Items.SEALED_SCROLL,          amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_BALLAD,        amount:  9 }, {item: Items.SEALED_SCROLL,          amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_BALLAD, amount:  4 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount:  4 }, { item: Items.TUSK_OF_MONOCEROS_CAELI, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_BALLAD, amount:  6 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount:  6 }, { item: Items.TUSK_OF_MONOCEROS_CAELI, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_BALLAD, amount: 12 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount:  9 }, { item: Items.TUSK_OF_MONOCEROS_CAELI, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_BALLAD, amount: 16 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount: 12 }, { item: Items.TUSK_OF_MONOCEROS_CAELI, amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_BALLAD,    amount:  3 }, {item: Items.DIVINING_SCROLL,        amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_BALLAD,        amount:  2 }, {item: Items.SEALED_SCROLL,          amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_BALLAD,        amount:  4 }, {item: Items.SEALED_SCROLL,          amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_BALLAD,        amount:  6 }, {item: Items.SEALED_SCROLL,          amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_BALLAD,        amount:  9 }, {item: Items.SEALED_SCROLL,          amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_BALLAD, amount:  4 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount:  4 }, { item: Items.TUSK_OF_MONOCEROS_CAELI, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_BALLAD, amount:  6 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount:  6 }, { item: Items.TUSK_OF_MONOCEROS_CAELI, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_BALLAD, amount: 12 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount:  9 }, { item: Items.TUSK_OF_MONOCEROS_CAELI, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_BALLAD, amount: 16 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount: 12 }, { item: Items.TUSK_OF_MONOCEROS_CAELI, amount: 2 }] 
                }}
            }
        }]
    });
    static GANYU              = new Character({ name: "GANYU",              /* FINISHED */
        level: { materials: { 
            "20+": [{ item: Items.SHIVADA_JADE_SLIVER,   amount: 1 },                                             { item: Items.QINGXIN, amount:  3 }, { item: Items.WHOPPERFLOWER_NECTAR, amount:  3 }], 
            "40+": [{ item: Items.SHIVADA_JADE_FRAGMENT, amount: 3 }, { item: Items.HOARFROST_CORE, amount:  2 }, { item: Items.QINGXIN, amount: 10 }, { item: Items.WHOPPERFLOWER_NECTAR, amount: 15 }], 
            "50+": [{ item: Items.SHIVADA_JADE_FRAGMENT, amount: 6 }, { item: Items.HOARFROST_CORE, amount:  4 }, { item: Items.QINGXIN, amount: 20 }, { item: Items.SHIMMERING_NECTAR,    amount: 12 }], 
            "60+": [{ item: Items.SHIVADA_JADE_CHUNK,    amount: 3 }, { item: Items.HOARFROST_CORE, amount:  8 }, { item: Items.QINGXIN, amount: 30 }, { item: Items.SHIMMERING_NECTAR,    amount: 18 }], 
            "70+": [{ item: Items.SHIVADA_JADE_CHUNK,    amount: 6 }, { item: Items.HOARFROST_CORE, amount: 12 }, { item: Items.QINGXIN, amount: 45 }, { item: Items.ENERGY_NECTAR,        amount: 12 }], 
            "80+": [{ item: Items.SHIVADA_JADE_GEMSTONE, amount: 6 }, { item: Items.HOARFROST_CORE, amount: 20 }, { item: Items.QINGXIN, amount: 60 }, { item: Items.ENERGY_NECTAR,        amount: 24 }]
        }}, 
        elements: [
            { element: Elements.CRYO, talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_DILIGENCE,    amount:  3 }, {item: Items.WHOPPERFLOWER_NECTAR, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_DILIGENCE,        amount:  2 }, {item: Items.SHIMMERING_NECTAR,    amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_DILIGENCE,        amount:  4 }, {item: Items.SHIMMERING_NECTAR,    amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_DILIGENCE,        amount:  6 }, {item: Items.SHIMMERING_NECTAR,    amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_DILIGENCE,        amount:  9 }, {item: Items.SHIMMERING_NECTAR,    amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_DILIGENCE, amount:  4 }, {item: Items.ENERGY_NECTAR,        amount:  4 }, { item: Items.SHADOW_OF_THE_WARRIOR, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_DILIGENCE, amount:  6 }, {item: Items.ENERGY_NECTAR,        amount:  6 }, { item: Items.SHADOW_OF_THE_WARRIOR, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_DILIGENCE, amount: 12 }, {item: Items.ENERGY_NECTAR,        amount:  9 }, { item: Items.SHADOW_OF_THE_WARRIOR, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_DILIGENCE, amount: 16 }, {item: Items.ENERGY_NECTAR,        amount: 12 }, { item: Items.SHADOW_OF_THE_WARRIOR, amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_DILIGENCE,    amount:  3 }, {item: Items.WHOPPERFLOWER_NECTAR, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_DILIGENCE,        amount:  2 }, {item: Items.SHIMMERING_NECTAR,    amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_DILIGENCE,        amount:  4 }, {item: Items.SHIMMERING_NECTAR,    amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_DILIGENCE,        amount:  6 }, {item: Items.SHIMMERING_NECTAR,    amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_DILIGENCE,        amount:  9 }, {item: Items.SHIMMERING_NECTAR,    amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_DILIGENCE, amount:  4 }, {item: Items.ENERGY_NECTAR,        amount:  4 }, { item: Items.SHADOW_OF_THE_WARRIOR, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_DILIGENCE, amount:  6 }, {item: Items.ENERGY_NECTAR,        amount:  6 }, { item: Items.SHADOW_OF_THE_WARRIOR, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_DILIGENCE, amount: 12 }, {item: Items.ENERGY_NECTAR,        amount:  9 }, { item: Items.SHADOW_OF_THE_WARRIOR, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_DILIGENCE, amount: 16 }, {item: Items.ENERGY_NECTAR,        amount: 12 }, { item: Items.SHADOW_OF_THE_WARRIOR, amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_DILIGENCE,    amount:  3 }, {item: Items.WHOPPERFLOWER_NECTAR, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_DILIGENCE,        amount:  2 }, {item: Items.SHIMMERING_NECTAR,    amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_DILIGENCE,        amount:  4 }, {item: Items.SHIMMERING_NECTAR,    amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_DILIGENCE,        amount:  6 }, {item: Items.SHIMMERING_NECTAR,    amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_DILIGENCE,        amount:  9 }, {item: Items.SHIMMERING_NECTAR,    amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_DILIGENCE, amount:  4 }, {item: Items.ENERGY_NECTAR,        amount:  4 }, { item: Items.SHADOW_OF_THE_WARRIOR, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_DILIGENCE, amount:  6 }, {item: Items.ENERGY_NECTAR,        amount:  6 }, { item: Items.SHADOW_OF_THE_WARRIOR, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_DILIGENCE, amount: 12 }, {item: Items.ENERGY_NECTAR,        amount:  9 }, { item: Items.SHADOW_OF_THE_WARRIOR, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_DILIGENCE, amount: 16 }, {item: Items.ENERGY_NECTAR,        amount: 12 }, { item: Items.SHADOW_OF_THE_WARRIOR, amount: 2 }] 
                }}
            }}
        ]
    });
    static XIAO               = new Character({ name: "XIAO",               /* FINISHED */
        level: { materials: { 
            "20+": [{ item: Items.VAYUDA_TURQUOISE_SLIVER,   amount: 1 },                                            { item: Items.QINGXIN, amount:  3 }, { item: Items.SLIME_CONDENSATE,  amount:  3 }], 
            "40+": [{ item: Items.VAYUDA_TURQUOISE_FRAGMENT, amount: 3 }, { item: Items.JUVENILE_JADE, amount:  2 }, { item: Items.QINGXIN, amount: 10 }, { item: Items.SLIME_CONDENSATE,  amount: 15 }], 
            "50+": [{ item: Items.VAYUDA_TURQUOISE_FRAGMENT, amount: 6 }, { item: Items.JUVENILE_JADE, amount:  4 }, { item: Items.QINGXIN, amount: 20 }, { item: Items.SLIME_SECRETIONS,  amount: 12 }], 
            "60+": [{ item: Items.VAYUDA_TURQUOISE_CHUNK,    amount: 3 }, { item: Items.JUVENILE_JADE, amount:  8 }, { item: Items.QINGXIN, amount: 30 }, { item: Items.SLIME_SECRETIONS,  amount: 18 }], 
            "70+": [{ item: Items.VAYUDA_TURQUOISE_CHUNK,    amount: 6 }, { item: Items.JUVENILE_JADE, amount: 12 }, { item: Items.QINGXIN, amount: 45 }, { item: Items.SLIME_CONCENTRATE, amount: 12 }], 
            "80+": [{ item: Items.VAYUDA_TURQUOISE_GEMSTONE, amount: 6 }, { item: Items.JUVENILE_JADE, amount: 20 }, { item: Items.QINGXIN, amount: 60 }, { item: Items.SLIME_CONCENTRATE, amount: 24 }]
        }}, 
        elements: [
            { element: Elements.ANEMO, talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_PROSPERITY,    amount:  3 }, {item: Items.SLIME_CONDENSATE,  amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_PROSPERITY,        amount:  2 }, {item: Items.SLIME_SECRETIONS,  amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_PROSPERITY,        amount:  4 }, {item: Items.SLIME_SECRETIONS,  amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_PROSPERITY,        amount:  6 }, {item: Items.SLIME_SECRETIONS,  amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_PROSPERITY,        amount:  9 }, {item: Items.SLIME_SECRETIONS,  amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_PROSPERITY, amount:  4 }, {item: Items.SLIME_CONCENTRATE, amount:  4 }, { item: Items.SHADOW_OF_THE_WARRIOR, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_PROSPERITY, amount:  6 }, {item: Items.SLIME_CONCENTRATE, amount:  6 }, { item: Items.SHADOW_OF_THE_WARRIOR, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_PROSPERITY, amount: 12 }, {item: Items.SLIME_CONCENTRATE, amount:  9 }, { item: Items.SHADOW_OF_THE_WARRIOR, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_PROSPERITY, amount: 16 }, {item: Items.SLIME_CONCENTRATE, amount: 12 }, { item: Items.SHADOW_OF_THE_WARRIOR, amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_PROSPERITY,    amount:  3 }, {item: Items.SLIME_CONDENSATE,  amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_PROSPERITY,        amount:  2 }, {item: Items.SLIME_SECRETIONS,  amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_PROSPERITY,        amount:  4 }, {item: Items.SLIME_SECRETIONS,  amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_PROSPERITY,        amount:  6 }, {item: Items.SLIME_SECRETIONS,  amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_PROSPERITY,        amount:  9 }, {item: Items.SLIME_SECRETIONS,  amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_PROSPERITY, amount:  4 }, {item: Items.SLIME_CONCENTRATE, amount:  4 }, { item: Items.SHADOW_OF_THE_WARRIOR, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_PROSPERITY, amount:  6 }, {item: Items.SLIME_CONCENTRATE, amount:  6 }, { item: Items.SHADOW_OF_THE_WARRIOR, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_PROSPERITY, amount: 12 }, {item: Items.SLIME_CONCENTRATE, amount:  9 }, { item: Items.SHADOW_OF_THE_WARRIOR, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_PROSPERITY, amount: 16 }, {item: Items.SLIME_CONCENTRATE, amount: 12 }, { item: Items.SHADOW_OF_THE_WARRIOR, amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_PROSPERITY,    amount:  3 }, {item: Items.SLIME_CONDENSATE,  amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_PROSPERITY,        amount:  2 }, {item: Items.SLIME_SECRETIONS,  amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_PROSPERITY,        amount:  4 }, {item: Items.SLIME_SECRETIONS,  amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_PROSPERITY,        amount:  6 }, {item: Items.SLIME_SECRETIONS,  amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_PROSPERITY,        amount:  9 }, {item: Items.SLIME_SECRETIONS,  amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_PROSPERITY, amount:  4 }, {item: Items.SLIME_CONCENTRATE, amount:  4 }, { item: Items.SHADOW_OF_THE_WARRIOR, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_PROSPERITY, amount:  6 }, {item: Items.SLIME_CONCENTRATE, amount:  6 }, { item: Items.SHADOW_OF_THE_WARRIOR, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_PROSPERITY, amount: 12 }, {item: Items.SLIME_CONCENTRATE, amount:  9 }, { item: Items.SHADOW_OF_THE_WARRIOR, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_PROSPERITY, amount: 16 }, {item: Items.SLIME_CONCENTRATE, amount: 12 }, { item: Items.SHADOW_OF_THE_WARRIOR, amount: 2 }] 
                }}
            }}
        ]
    });
    static HU_TAO             = new Character({ name: "HU_TAO",             /* FINISHED */
        level: { materials: { 
            "20+": [{ item: Items.AGNIDUS_AGATE_SLIVER,   amount: 1 },                                            { item: Items.SILK_FLOWER, amount:  3 }, { item: Items.WHOPPERFLOWER_NECTAR, amount:  3 }], 
            "40+": [{ item: Items.AGNIDUS_AGATE_FRAGMENT, amount: 3 }, { item: Items.JUVENILE_JADE, amount:  2 }, { item: Items.SILK_FLOWER, amount: 10 }, { item: Items.WHOPPERFLOWER_NECTAR, amount: 15 }], 
            "50+": [{ item: Items.AGNIDUS_AGATE_FRAGMENT, amount: 6 }, { item: Items.JUVENILE_JADE, amount:  4 }, { item: Items.SILK_FLOWER, amount: 20 }, { item: Items.SHIMMERING_NECTAR,    amount: 12 }], 
            "60+": [{ item: Items.AGNIDUS_AGATE_CHUNK,    amount: 3 }, { item: Items.JUVENILE_JADE, amount:  8 }, { item: Items.SILK_FLOWER, amount: 30 }, { item: Items.SHIMMERING_NECTAR,    amount: 18 }], 
            "70+": [{ item: Items.AGNIDUS_AGATE_CHUNK,    amount: 6 }, { item: Items.JUVENILE_JADE, amount: 12 }, { item: Items.SILK_FLOWER, amount: 45 }, { item: Items.ENERGY_NECTAR,        amount: 12 }], 
            "80+": [{ item: Items.AGNIDUS_AGATE_GEMSTONE, amount: 6 }, { item: Items.JUVENILE_JADE, amount: 20 }, { item: Items.SILK_FLOWER, amount: 60 }, { item: Items.ENERGY_NECTAR,        amount: 24 }]
        }}, 
        elements: [
            { element: Elements.PYRO, talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_DILIGENCE,    amount:  3 }, {item: Items.WHOPPERFLOWER_NECTAR, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_DILIGENCE,        amount:  2 }, {item: Items.SHIMMERING_NECTAR,    amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_DILIGENCE,        amount:  4 }, {item: Items.SHIMMERING_NECTAR,    amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_DILIGENCE,        amount:  6 }, {item: Items.SHIMMERING_NECTAR,    amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_DILIGENCE,        amount:  9 }, {item: Items.SHIMMERING_NECTAR,    amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_DILIGENCE, amount:  4 }, {item: Items.ENERGY_NECTAR,        amount:  4 }, { item: Items.SHARD_OF_A_FOUL_LEGACY, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_DILIGENCE, amount:  6 }, {item: Items.ENERGY_NECTAR,        amount:  6 }, { item: Items.SHARD_OF_A_FOUL_LEGACY, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_DILIGENCE, amount: 12 }, {item: Items.ENERGY_NECTAR,        amount:  9 }, { item: Items.SHARD_OF_A_FOUL_LEGACY, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_DILIGENCE, amount: 16 }, {item: Items.ENERGY_NECTAR,        amount: 12 }, { item: Items.SHARD_OF_A_FOUL_LEGACY, amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_DILIGENCE,    amount:  3 }, {item: Items.WHOPPERFLOWER_NECTAR, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_DILIGENCE,        amount:  2 }, {item: Items.SHIMMERING_NECTAR,    amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_DILIGENCE,        amount:  4 }, {item: Items.SHIMMERING_NECTAR,    amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_DILIGENCE,        amount:  6 }, {item: Items.SHIMMERING_NECTAR,    amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_DILIGENCE,        amount:  9 }, {item: Items.SHIMMERING_NECTAR,    amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_DILIGENCE, amount:  4 }, {item: Items.ENERGY_NECTAR,        amount:  4 }, { item: Items.SHARD_OF_A_FOUL_LEGACY, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_DILIGENCE, amount:  6 }, {item: Items.ENERGY_NECTAR,        amount:  6 }, { item: Items.SHARD_OF_A_FOUL_LEGACY, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_DILIGENCE, amount: 12 }, {item: Items.ENERGY_NECTAR,        amount:  9 }, { item: Items.SHARD_OF_A_FOUL_LEGACY, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_DILIGENCE, amount: 16 }, {item: Items.ENERGY_NECTAR,        amount: 12 }, { item: Items.SHARD_OF_A_FOUL_LEGACY, amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_DILIGENCE,    amount:  3 }, {item: Items.WHOPPERFLOWER_NECTAR, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_DILIGENCE,        amount:  2 }, {item: Items.SHIMMERING_NECTAR,    amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_DILIGENCE,        amount:  4 }, {item: Items.SHIMMERING_NECTAR,    amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_DILIGENCE,        amount:  6 }, {item: Items.SHIMMERING_NECTAR,    amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_DILIGENCE,        amount:  9 }, {item: Items.SHIMMERING_NECTAR,    amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_DILIGENCE, amount:  4 }, {item: Items.ENERGY_NECTAR,        amount:  4 }, { item: Items.SHARD_OF_A_FOUL_LEGACY, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_DILIGENCE, amount:  6 }, {item: Items.ENERGY_NECTAR,        amount:  6 }, { item: Items.SHARD_OF_A_FOUL_LEGACY, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_DILIGENCE, amount: 12 }, {item: Items.ENERGY_NECTAR,        amount:  9 }, { item: Items.SHARD_OF_A_FOUL_LEGACY, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_DILIGENCE, amount: 16 }, {item: Items.ENERGY_NECTAR,        amount: 12 }, { item: Items.SHARD_OF_A_FOUL_LEGACY, amount: 2 }] 
                }}
            }}
        ]
    });
    static ROSARIA            = new Character({ name: "ROSARIA",            /* FINISHED */
        level: { materials: { 
            "20+": [{ item: Items.SHIVADA_JADE_SLIVER,   amount: 1 },                                             { item: Items.VALBERRY, amount:  3 }, { item: Items["RECRUIT'S_INSIGNIA"],    amount:  3 }], 
            "40+": [{ item: Items.SHIVADA_JADE_FRAGMENT, amount: 3 }, { item: Items.HOARFROST_CORE, amount:  2 }, { item: Items.VALBERRY, amount: 10 }, { item: Items["RECRUIT'S_INSIGNIA"],    amount: 15 }], 
            "50+": [{ item: Items.SHIVADA_JADE_FRAGMENT, amount: 6 }, { item: Items.HOARFROST_CORE, amount:  4 }, { item: Items.VALBERRY, amount: 20 }, { item: Items["SEARGENT'S_INSIGNIA"],   amount: 12 }], 
            "60+": [{ item: Items.SHIVADA_JADE_CHUNK,    amount: 3 }, { item: Items.HOARFROST_CORE, amount:  8 }, { item: Items.VALBERRY, amount: 30 }, { item: Items["SEARGENT'S_INSIGNIA"],   amount: 18 }], 
            "70+": [{ item: Items.SHIVADA_JADE_CHUNK,    amount: 6 }, { item: Items.HOARFROST_CORE, amount: 12 }, { item: Items.VALBERRY, amount: 45 }, { item: Items["LIEUTENANT'S_INSIGNIA"], amount: 12 }], 
            "80+": [{ item: Items.SHIVADA_JADE_GEMSTONE, amount: 6 }, { item: Items.HOARFROST_CORE, amount: 20 }, { item: Items.VALBERRY, amount: 60 }, { item: Items["LIEUTENANT'S_INSIGNIA"], amount: 24 }]
        }}, 
        elements: [
            { element: Elements.CRYO, talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_BALLAD,    amount:  3 }, {item: Items["RECRUIT'S_INSIGNIA"],    amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_BALLAD,        amount:  2 }, {item: Items["SEARGENT'S_INSIGNIA"],   amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_BALLAD,        amount:  4 }, {item: Items["SEARGENT'S_INSIGNIA"],   amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_BALLAD,        amount:  6 }, {item: Items["SEARGENT'S_INSIGNIA"],   amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_BALLAD,        amount:  9 }, {item: Items["SEARGENT'S_INSIGNIA"],   amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_BALLAD, amount:  4 }, {item: Items["LIEUTENANT'S_INSIGNIA"], amount:  4 }, { item: Items.SHADOW_OF_THE_WARRIOR, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_BALLAD, amount:  6 }, {item: Items["LIEUTENANT'S_INSIGNIA"], amount:  6 }, { item: Items.SHADOW_OF_THE_WARRIOR, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_BALLAD, amount: 12 }, {item: Items["LIEUTENANT'S_INSIGNIA"], amount:  9 }, { item: Items.SHADOW_OF_THE_WARRIOR, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_BALLAD, amount: 16 }, {item: Items["LIEUTENANT'S_INSIGNIA"], amount: 12 }, { item: Items.SHADOW_OF_THE_WARRIOR, amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_BALLAD,    amount:  3 }, {item: Items["RECRUIT'S_INSIGNIA"],    amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_BALLAD,        amount:  2 }, {item: Items["SEARGENT'S_INSIGNIA"],   amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_BALLAD,        amount:  4 }, {item: Items["SEARGENT'S_INSIGNIA"],   amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_BALLAD,        amount:  6 }, {item: Items["SEARGENT'S_INSIGNIA"],   amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_BALLAD,        amount:  9 }, {item: Items["SEARGENT'S_INSIGNIA"],   amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_BALLAD, amount:  4 }, {item: Items["LIEUTENANT'S_INSIGNIA"], amount:  4 }, { item: Items.SHADOW_OF_THE_WARRIOR, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_BALLAD, amount:  6 }, {item: Items["LIEUTENANT'S_INSIGNIA"], amount:  6 }, { item: Items.SHADOW_OF_THE_WARRIOR, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_BALLAD, amount: 12 }, {item: Items["LIEUTENANT'S_INSIGNIA"], amount:  9 }, { item: Items.SHADOW_OF_THE_WARRIOR, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_BALLAD, amount: 16 }, {item: Items["LIEUTENANT'S_INSIGNIA"], amount: 12 }, { item: Items.SHADOW_OF_THE_WARRIOR, amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_BALLAD,    amount:  3 }, {item: Items["RECRUIT'S_INSIGNIA"],    amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_BALLAD,        amount:  2 }, {item: Items["SEARGENT'S_INSIGNIA"],   amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_BALLAD,        amount:  4 }, {item: Items["SEARGENT'S_INSIGNIA"],   amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_BALLAD,        amount:  6 }, {item: Items["SEARGENT'S_INSIGNIA"],   amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_BALLAD,        amount:  9 }, {item: Items["SEARGENT'S_INSIGNIA"],   amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_BALLAD, amount:  4 }, {item: Items["LIEUTENANT'S_INSIGNIA"], amount:  4 }, { item: Items.SHADOW_OF_THE_WARRIOR, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_BALLAD, amount:  6 }, {item: Items["LIEUTENANT'S_INSIGNIA"], amount:  6 }, { item: Items.SHADOW_OF_THE_WARRIOR, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_BALLAD, amount: 12 }, {item: Items["LIEUTENANT'S_INSIGNIA"], amount:  9 }, { item: Items.SHADOW_OF_THE_WARRIOR, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_BALLAD, amount: 16 }, {item: Items["LIEUTENANT'S_INSIGNIA"], amount: 12 }, { item: Items.SHADOW_OF_THE_WARRIOR, amount: 2 }] 
                }}
            }}
        ]
    });
    static YANFEI             = new Character({ name: "YANFEI",             
        level: { materials: { 
            "20+": [{ item: Items._SLIVER,   amount: 1 },                             { item: Items.UNKNOWN, amount:  3 }, { item: Items.UNKNOWN, amount:  3 }], 
            "40+": [{ item: Items._FRAGMENT, amount: 3 }, { item: Items.UNKNOWN, amount:  2 }, { item: Items.UNKNOWN, amount: 10 }, { item: Items.UNKNOWN, amount: 15 }], 
            "50+": [{ item: Items._FRAGMENT, amount: 6 }, { item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 12 }], 
            "60+": [{ item: Items._CHUNK,    amount: 3 }, { item: Items.UNKNOWN, amount:  8 }, { item: Items.UNKNOWN, amount: 30 }, { item: Items.UNKNOWN, amount: 18 }], 
            "70+": [{ item: Items._CHUNK,    amount: 6 }, { item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 45 }, { item: Items.UNKNOWN, amount: 12 }], 
            "80+": [{ item: Items._GEMSTONE, amount: 6 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 60 }, { item: Items.UNKNOWN, amount: 24 }]
        }}, 
        elements: [{
            element: Elements.CRYO,
            talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}
            }
        }]
    });
    static EULA               = new Character({ name: "EULA",               /* FINISHED */
        level: { materials: { 
            "20+": [{ item: Items.SHIVADA_JADE_SLIVER,   amount: 1 },                                                { item: Items.DANDELION_SEED, amount:  3 }, { item: Items.DAMAGED_MASK, amount:  3 }], 
            "40+": [{ item: Items.SHIVADA_JADE_FRAGMENT, amount: 3 }, { item: Items.CRYSTALLINE_BLOOM, amount:  2 }, { item: Items.DANDELION_SEED, amount: 10 }, { item: Items.DAMAGED_MASK, amount: 15 }], 
            "50+": [{ item: Items.SHIVADA_JADE_FRAGMENT, amount: 6 }, { item: Items.CRYSTALLINE_BLOOM, amount:  4 }, { item: Items.DANDELION_SEED, amount: 20 }, { item: Items.STAINED_MASK, amount: 12 }], 
            "60+": [{ item: Items.SHIVADA_JADE_CHUNK,    amount: 3 }, { item: Items.CRYSTALLINE_BLOOM, amount:  8 }, { item: Items.DANDELION_SEED, amount: 30 }, { item: Items.STAINED_MASK, amount: 18 }], 
            "70+": [{ item: Items.SHIVADA_JADE_CHUNK,    amount: 6 }, { item: Items.CRYSTALLINE_BLOOM, amount: 12 }, { item: Items.DANDELION_SEED, amount: 45 }, { item: Items.OMINOUS_MASK, amount: 12 }], 
            "80+": [{ item: Items.SHIVADA_JADE_GEMSTONE, amount: 6 }, { item: Items.CRYSTALLINE_BLOOM, amount: 20 }, { item: Items.DANDELION_SEED, amount: 60 }, { item: Items.OMINOUS_MASK, amount: 24 }]
        }}, 
        elements: [
            { element: Elements.CRYO, talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_RESISTANCE,    amount:  3 }, {item: Items.DAMAGED_MASK, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_RESISTANCE,        amount:  2 }, {item: Items.STAINED_MASK, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_RESISTANCE,        amount:  4 }, {item: Items.STAINED_MASK, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_RESISTANCE,        amount:  6 }, {item: Items.STAINED_MASK, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_RESISTANCE,        amount:  9 }, {item: Items.STAINED_MASK, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_RESISTANCE, amount:  4 }, {item: Items.OMINOUS_MASK, amount:  4 }, { item: Items["DRAGON_LORD'S_CROWN"], amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_RESISTANCE, amount:  6 }, {item: Items.OMINOUS_MASK, amount:  6 }, { item: Items["DRAGON_LORD'S_CROWN"], amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_RESISTANCE, amount: 12 }, {item: Items.OMINOUS_MASK, amount:  9 }, { item: Items["DRAGON_LORD'S_CROWN"], amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_RESISTANCE, amount: 16 }, {item: Items.OMINOUS_MASK, amount: 12 }, { item: Items["DRAGON_LORD'S_CROWN"], amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_RESISTANCE,    amount:  3 }, {item: Items.DAMAGED_MASK, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_RESISTANCE,        amount:  2 }, {item: Items.STAINED_MASK, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_RESISTANCE,        amount:  4 }, {item: Items.STAINED_MASK, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_RESISTANCE,        amount:  6 }, {item: Items.STAINED_MASK, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_RESISTANCE,        amount:  9 }, {item: Items.STAINED_MASK, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_RESISTANCE, amount:  4 }, {item: Items.OMINOUS_MASK, amount:  4 }, { item: Items["DRAGON_LORD'S_CROWN"], amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_RESISTANCE, amount:  6 }, {item: Items.OMINOUS_MASK, amount:  6 }, { item: Items["DRAGON_LORD'S_CROWN"], amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_RESISTANCE, amount: 12 }, {item: Items.OMINOUS_MASK, amount:  9 }, { item: Items["DRAGON_LORD'S_CROWN"], amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_RESISTANCE, amount: 16 }, {item: Items.OMINOUS_MASK, amount: 12 }, { item: Items["DRAGON_LORD'S_CROWN"], amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_RESISTANCE,    amount:  3 }, {item: Items.DAMAGED_MASK, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_RESISTANCE,        amount:  2 }, {item: Items.STAINED_MASK, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_RESISTANCE,        amount:  4 }, {item: Items.STAINED_MASK, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_RESISTANCE,        amount:  6 }, {item: Items.STAINED_MASK, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_RESISTANCE,        amount:  9 }, {item: Items.STAINED_MASK, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_RESISTANCE, amount:  4 }, {item: Items.OMINOUS_MASK, amount:  4 }, { item: Items["DRAGON_LORD'S_CROWN"], amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_RESISTANCE, amount:  6 }, {item: Items.OMINOUS_MASK, amount:  6 }, { item: Items["DRAGON_LORD'S_CROWN"], amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_RESISTANCE, amount: 12 }, {item: Items.OMINOUS_MASK, amount:  9 }, { item: Items["DRAGON_LORD'S_CROWN"], amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_RESISTANCE, amount: 16 }, {item: Items.OMINOUS_MASK, amount: 12 }, { item: Items["DRAGON_LORD'S_CROWN"], amount: 2 }] 
                }}
            }}
        ]
    });
    static KAEDEHARA_KAZUHA   = new Character({ name: "KAEDEHARA_KAZUHA",   
        level: { materials: { 
            "20+": [{ item: Items._SLIVER,   amount: 1 },                             { item: Items.UNKNOWN, amount:  3 }, { item: Items.UNKNOWN, amount:  3 }], 
            "40+": [{ item: Items._FRAGMENT, amount: 3 }, { item: Items.UNKNOWN, amount:  2 }, { item: Items.UNKNOWN, amount: 10 }, { item: Items.UNKNOWN, amount: 15 }], 
            "50+": [{ item: Items._FRAGMENT, amount: 6 }, { item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 12 }], 
            "60+": [{ item: Items._CHUNK,    amount: 3 }, { item: Items.UNKNOWN, amount:  8 }, { item: Items.UNKNOWN, amount: 30 }, { item: Items.UNKNOWN, amount: 18 }], 
            "70+": [{ item: Items._CHUNK,    amount: 6 }, { item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 45 }, { item: Items.UNKNOWN, amount: 12 }], 
            "80+": [{ item: Items._GEMSTONE, amount: 6 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 60 }, { item: Items.UNKNOWN, amount: 24 }]
        }}, 
        elements: [{
            element: Elements.CRYO,
            talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}
            }
        }]
    });
    static KAMISATO_AYAKA     = new Character({ name: "KAMISATO_AYAKA",     
        level: { materials: { 
            "20+": [{ item: Items._SLIVER,   amount: 1 },                             { item: Items.UNKNOWN, amount:  3 }, { item: Items.UNKNOWN, amount:  3 }], 
            "40+": [{ item: Items._FRAGMENT, amount: 3 }, { item: Items.UNKNOWN, amount:  2 }, { item: Items.UNKNOWN, amount: 10 }, { item: Items.UNKNOWN, amount: 15 }], 
            "50+": [{ item: Items._FRAGMENT, amount: 6 }, { item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 12 }], 
            "60+": [{ item: Items._CHUNK,    amount: 3 }, { item: Items.UNKNOWN, amount:  8 }, { item: Items.UNKNOWN, amount: 30 }, { item: Items.UNKNOWN, amount: 18 }], 
            "70+": [{ item: Items._CHUNK,    amount: 6 }, { item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 45 }, { item: Items.UNKNOWN, amount: 12 }], 
            "80+": [{ item: Items._GEMSTONE, amount: 6 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 60 }, { item: Items.UNKNOWN, amount: 24 }]
        }}, 
        elements: [{
            element: Elements.CRYO,
            talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}
            }
        }]
    });
    static SAYU               = new Character({ name: "SAYU",               
        level: { materials: { 
            "20+": [{ item: Items._SLIVER,   amount: 1 },                             { item: Items.UNKNOWN, amount:  3 }, { item: Items.UNKNOWN, amount:  3 }], 
            "40+": [{ item: Items._FRAGMENT, amount: 3 }, { item: Items.UNKNOWN, amount:  2 }, { item: Items.UNKNOWN, amount: 10 }, { item: Items.UNKNOWN, amount: 15 }], 
            "50+": [{ item: Items._FRAGMENT, amount: 6 }, { item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 12 }], 
            "60+": [{ item: Items._CHUNK,    amount: 3 }, { item: Items.UNKNOWN, amount:  8 }, { item: Items.UNKNOWN, amount: 30 }, { item: Items.UNKNOWN, amount: 18 }], 
            "70+": [{ item: Items._CHUNK,    amount: 6 }, { item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 45 }, { item: Items.UNKNOWN, amount: 12 }], 
            "80+": [{ item: Items._GEMSTONE, amount: 6 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 60 }, { item: Items.UNKNOWN, amount: 24 }]
        }}, 
        elements: [{
            element: Elements.CRYO,
            talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}
            }
        }]
    });
    static YOIMIYA            = new Character({ name: "YOIMIYA",            /* FINISHED */
        level: { materials: { 
            "20+": [{ item: Items.AGNIDUS_AGATE_SLIVER,   amount: 1 },                                               { item: Items.NAKU_WEED, amount:  3 }, { item: Items.DIVINING_SCROLL,        amount:  3 }], 
            "40+": [{ item: Items.AGNIDUS_AGATE_FRAGMENT, amount: 3 }, { item: Items.SMOLDERING_PEARL, amount:  2 }, { item: Items.NAKU_WEED, amount: 10 }, { item: Items.DIVINING_SCROLL,        amount: 15 }], 
            "50+": [{ item: Items.AGNIDUS_AGATE_FRAGMENT, amount: 6 }, { item: Items.SMOLDERING_PEARL, amount:  4 }, { item: Items.NAKU_WEED, amount: 20 }, { item: Items.SEALED_SCROLL,          amount: 12 }], 
            "60+": [{ item: Items.AGNIDUS_AGATE_CHUNK,    amount: 3 }, { item: Items.SMOLDERING_PEARL, amount:  8 }, { item: Items.NAKU_WEED, amount: 30 }, { item: Items.SEALED_SCROLL,          amount: 18 }], 
            "70+": [{ item: Items.AGNIDUS_AGATE_CHUNK,    amount: 6 }, { item: Items.SMOLDERING_PEARL, amount: 12 }, { item: Items.NAKU_WEED, amount: 45 }, { item: Items.FORBIDDEN_CURSE_SCROLL, amount: 12 }], 
            "80+": [{ item: Items.AGNIDUS_AGATE_GEMSTONE, amount: 6 }, { item: Items.SMOLDERING_PEARL, amount: 20 }, { item: Items.NAKU_WEED, amount: 60 }, { item: Items.FORBIDDEN_CURSE_SCROLL, amount: 24 }]
        }}, 
        elements: [
            { element: Elements.PYRO, talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_TRANSIENCE,    amount:  3 }, {item: Items.DIVINING_SCROLL,        amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_TRANSIENCE,        amount:  2 }, {item: Items.SEALED_SCROLL,          amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_TRANSIENCE,        amount:  4 }, {item: Items.SEALED_SCROLL,          amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_TRANSIENCE,        amount:  6 }, {item: Items.SEALED_SCROLL,          amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_TRANSIENCE,        amount:  9 }, {item: Items.SEALED_SCROLL,          amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_TRANSIENCE, amount:  4 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount:  4 }, { item: Items["DRAGON_LORD'S_CROWN"], amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_TRANSIENCE, amount:  6 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount:  6 }, { item: Items["DRAGON_LORD'S_CROWN"], amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_TRANSIENCE, amount: 12 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount:  9 }, { item: Items["DRAGON_LORD'S_CROWN"], amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_TRANSIENCE, amount: 16 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount: 12 }, { item: Items["DRAGON_LORD'S_CROWN"], amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_TRANSIENCE,    amount:  3 }, {item: Items.DIVINING_SCROLL,        amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_TRANSIENCE,        amount:  2 }, {item: Items.SEALED_SCROLL,          amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_TRANSIENCE,        amount:  4 }, {item: Items.SEALED_SCROLL,          amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_TRANSIENCE,        amount:  6 }, {item: Items.SEALED_SCROLL,          amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_TRANSIENCE,        amount:  9 }, {item: Items.SEALED_SCROLL,          amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_TRANSIENCE, amount:  4 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount:  4 }, { item: Items["DRAGON_LORD'S_CROWN"], amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_TRANSIENCE, amount:  6 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount:  6 }, { item: Items["DRAGON_LORD'S_CROWN"], amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_TRANSIENCE, amount: 12 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount:  9 }, { item: Items["DRAGON_LORD'S_CROWN"], amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_TRANSIENCE, amount: 16 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount: 12 }, { item: Items["DRAGON_LORD'S_CROWN"], amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_TRANSIENCE,    amount:  3 }, {item: Items.DIVINING_SCROLL,        amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_TRANSIENCE,        amount:  2 }, {item: Items.SEALED_SCROLL,          amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_TRANSIENCE,        amount:  4 }, {item: Items.SEALED_SCROLL,          amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_TRANSIENCE,        amount:  6 }, {item: Items.SEALED_SCROLL,          amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_TRANSIENCE,        amount:  9 }, {item: Items.SEALED_SCROLL,          amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_TRANSIENCE, amount:  4 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount:  4 }, { item: Items["DRAGON_LORD'S_CROWN"], amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_TRANSIENCE, amount:  6 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount:  6 }, { item: Items["DRAGON_LORD'S_CROWN"], amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_TRANSIENCE, amount: 12 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount:  9 }, { item: Items["DRAGON_LORD'S_CROWN"], amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_TRANSIENCE, amount: 16 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount: 12 }, { item: Items["DRAGON_LORD'S_CROWN"], amount: 2 }] 
                }}
            }}
        ]
    });
    static ALOY               = new Character({ name: "ALOY",               
        level: { materials: { 
            "20+": [{ item: Items._SLIVER,   amount: 1 },                             { item: Items.UNKNOWN, amount:  3 }, { item: Items.UNKNOWN, amount:  3 }], 
            "40+": [{ item: Items._FRAGMENT, amount: 3 }, { item: Items.UNKNOWN, amount:  2 }, { item: Items.UNKNOWN, amount: 10 }, { item: Items.UNKNOWN, amount: 15 }], 
            "50+": [{ item: Items._FRAGMENT, amount: 6 }, { item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 12 }], 
            "60+": [{ item: Items._CHUNK,    amount: 3 }, { item: Items.UNKNOWN, amount:  8 }, { item: Items.UNKNOWN, amount: 30 }, { item: Items.UNKNOWN, amount: 18 }], 
            "70+": [{ item: Items._CHUNK,    amount: 6 }, { item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 45 }, { item: Items.UNKNOWN, amount: 12 }], 
            "80+": [{ item: Items._GEMSTONE, amount: 6 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 60 }, { item: Items.UNKNOWN, amount: 24 }]
        }}, 
        elements: [{
            element: Elements.CRYO,
            talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}
            }
        }]
    });
    static KUJOU_SARA         = new Character({ name: "KUJOU_SARA",         /* FINISHED */
        level: { materials: { 
            "20+": [{ item: Items.VAJRADA_AMETHYST_SLIVER,   amount: 1 },                                          { item: Items.DENDROBIUM, amount:  3 }, { item: Items.DAMAGED_MASK, amount:  3 }], 
            "40+": [{ item: Items.VAJRADA_AMETHYST_FRAGMENT, amount: 3 }, { item: Items.STORM_BEADS, amount:  2 }, { item: Items.DENDROBIUM, amount: 10 }, { item: Items.DAMAGED_MASK, amount: 15 }], 
            "50+": [{ item: Items.VAJRADA_AMETHYST_FRAGMENT, amount: 6 }, { item: Items.STORM_BEADS, amount:  4 }, { item: Items.DENDROBIUM, amount: 20 }, { item: Items.STAINED_MASK, amount: 12 }], 
            "60+": [{ item: Items.VAJRADA_AMETHYST_CHUNK,    amount: 3 }, { item: Items.STORM_BEADS, amount:  8 }, { item: Items.DENDROBIUM, amount: 30 }, { item: Items.STAINED_MASK, amount: 18 }], 
            "70+": [{ item: Items.VAJRADA_AMETHYST_CHUNK,    amount: 6 }, { item: Items.STORM_BEADS, amount: 12 }, { item: Items.DENDROBIUM, amount: 45 }, { item: Items.OMINOUS_MASK, amount: 12 }], 
            "80+": [{ item: Items.VAJRADA_AMETHYST_GEMSTONE, amount: 6 }, { item: Items.STORM_BEADS, amount: 20 }, { item: Items.DENDROBIUM, amount: 60 }, { item: Items.OMINOUS_MASK, amount: 24 }]
        }}, 
        elements: [
            { element: Elements.ELECTRO, talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_ELEGANCE,    amount:  3 }, {item: Items.DAMAGED_MASK, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_ELEGANCE,        amount:  2 }, {item: Items.STAINED_MASK, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_ELEGANCE,        amount:  4 }, {item: Items.STAINED_MASK, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_ELEGANCE,        amount:  6 }, {item: Items.STAINED_MASK, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_ELEGANCE,        amount:  9 }, {item: Items.STAINED_MASK, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_ELEGANCE, amount:  4 }, {item: Items.OMINOUS_MASK, amount:  4 }, { item: Items.ASHEN_HEART, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_ELEGANCE, amount:  6 }, {item: Items.OMINOUS_MASK, amount:  6 }, { item: Items.ASHEN_HEART, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_ELEGANCE, amount: 12 }, {item: Items.OMINOUS_MASK, amount:  9 }, { item: Items.ASHEN_HEART, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_ELEGANCE, amount: 16 }, {item: Items.OMINOUS_MASK, amount: 12 }, { item: Items.ASHEN_HEART, amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_ELEGANCE,    amount:  3 }, {item: Items.DAMAGED_MASK, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_ELEGANCE,        amount:  2 }, {item: Items.STAINED_MASK, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_ELEGANCE,        amount:  4 }, {item: Items.STAINED_MASK, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_ELEGANCE,        amount:  6 }, {item: Items.STAINED_MASK, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_ELEGANCE,        amount:  9 }, {item: Items.STAINED_MASK, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_ELEGANCE, amount:  4 }, {item: Items.OMINOUS_MASK, amount:  4 }, { item: Items.ASHEN_HEART, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_ELEGANCE, amount:  6 }, {item: Items.OMINOUS_MASK, amount:  6 }, { item: Items.ASHEN_HEART, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_ELEGANCE, amount: 12 }, {item: Items.OMINOUS_MASK, amount:  9 }, { item: Items.ASHEN_HEART, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_ELEGANCE, amount: 16 }, {item: Items.OMINOUS_MASK, amount: 12 }, { item: Items.ASHEN_HEART, amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_ELEGANCE,    amount:  3 }, {item: Items.DAMAGED_MASK, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_ELEGANCE,        amount:  2 }, {item: Items.STAINED_MASK, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_ELEGANCE,        amount:  4 }, {item: Items.STAINED_MASK, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_ELEGANCE,        amount:  6 }, {item: Items.STAINED_MASK, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_ELEGANCE,        amount:  9 }, {item: Items.STAINED_MASK, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_ELEGANCE, amount:  4 }, {item: Items.OMINOUS_MASK, amount:  4 }, { item: Items.ASHEN_HEART, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_ELEGANCE, amount:  6 }, {item: Items.OMINOUS_MASK, amount:  6 }, { item: Items.ASHEN_HEART, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_ELEGANCE, amount: 12 }, {item: Items.OMINOUS_MASK, amount:  9 }, { item: Items.ASHEN_HEART, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_ELEGANCE, amount: 16 }, {item: Items.OMINOUS_MASK, amount: 12 }, { item: Items.ASHEN_HEART, amount: 2 }] 
                }}
            }}
        ]
    });
    static RAIDEN_SHOGUN      = new Character({ name: "RAIDEN_SHOGUN",      
        level: { materials: { 
            "20+": [{ item: Items._SLIVER,   amount: 1 },                             { item: Items.UNKNOWN, amount:  3 }, { item: Items.UNKNOWN, amount:  3 }], 
            "40+": [{ item: Items._FRAGMENT, amount: 3 }, { item: Items.UNKNOWN, amount:  2 }, { item: Items.UNKNOWN, amount: 10 }, { item: Items.UNKNOWN, amount: 15 }], 
            "50+": [{ item: Items._FRAGMENT, amount: 6 }, { item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 12 }], 
            "60+": [{ item: Items._CHUNK,    amount: 3 }, { item: Items.UNKNOWN, amount:  8 }, { item: Items.UNKNOWN, amount: 30 }, { item: Items.UNKNOWN, amount: 18 }], 
            "70+": [{ item: Items._CHUNK,    amount: 6 }, { item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 45 }, { item: Items.UNKNOWN, amount: 12 }], 
            "80+": [{ item: Items._GEMSTONE, amount: 6 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 60 }, { item: Items.UNKNOWN, amount: 24 }]
        }}, 
        elements: [{
            element: Elements.CRYO,
            talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}
            }
        }]
    });
    static SANGONOMIYA_KOKOMI = new Character({ name: "SANGONOMIYA_KOKOMI", 
        level: { materials: { 
            "20+": [{ item: Items._SLIVER,   amount: 1 },                             { item: Items.UNKNOWN, amount:  3 }, { item: Items.UNKNOWN, amount:  3 }], 
            "40+": [{ item: Items._FRAGMENT, amount: 3 }, { item: Items.UNKNOWN, amount:  2 }, { item: Items.UNKNOWN, amount: 10 }, { item: Items.UNKNOWN, amount: 15 }], 
            "50+": [{ item: Items._FRAGMENT, amount: 6 }, { item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 12 }], 
            "60+": [{ item: Items._CHUNK,    amount: 3 }, { item: Items.UNKNOWN, amount:  8 }, { item: Items.UNKNOWN, amount: 30 }, { item: Items.UNKNOWN, amount: 18 }], 
            "70+": [{ item: Items._CHUNK,    amount: 6 }, { item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 45 }, { item: Items.UNKNOWN, amount: 12 }], 
            "80+": [{ item: Items._GEMSTONE, amount: 6 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 60 }, { item: Items.UNKNOWN, amount: 24 }]
        }}, 
        elements: [{
            element: Elements.CRYO,
            talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}
            }
        }]
    });
    static THOMA              = new Character({ name: "THOMA",              
        level: { materials: { 
            "20+": [{ item: Items._SLIVER,   amount: 1 },                             { item: Items.UNKNOWN, amount:  3 }, { item: Items.UNKNOWN, amount:  3 }], 
            "40+": [{ item: Items._FRAGMENT, amount: 3 }, { item: Items.UNKNOWN, amount:  2 }, { item: Items.UNKNOWN, amount: 10 }, { item: Items.UNKNOWN, amount: 15 }], 
            "50+": [{ item: Items._FRAGMENT, amount: 6 }, { item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 12 }], 
            "60+": [{ item: Items._CHUNK,    amount: 3 }, { item: Items.UNKNOWN, amount:  8 }, { item: Items.UNKNOWN, amount: 30 }, { item: Items.UNKNOWN, amount: 18 }], 
            "70+": [{ item: Items._CHUNK,    amount: 6 }, { item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 45 }, { item: Items.UNKNOWN, amount: 12 }], 
            "80+": [{ item: Items._GEMSTONE, amount: 6 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 60 }, { item: Items.UNKNOWN, amount: 24 }]
        }}, 
        elements: [{
            element: Elements.CRYO,
            talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}
            }
        }]
    });
    static GOROU              = new Character({ name: "GOROU",              
        level: { materials: { 
            "20+": [{ item: Items._SLIVER,   amount: 1 },                             { item: Items.UNKNOWN, amount:  3 }, { item: Items.UNKNOWN, amount:  3 }], 
            "40+": [{ item: Items._FRAGMENT, amount: 3 }, { item: Items.UNKNOWN, amount:  2 }, { item: Items.UNKNOWN, amount: 10 }, { item: Items.UNKNOWN, amount: 15 }], 
            "50+": [{ item: Items._FRAGMENT, amount: 6 }, { item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 12 }], 
            "60+": [{ item: Items._CHUNK,    amount: 3 }, { item: Items.UNKNOWN, amount:  8 }, { item: Items.UNKNOWN, amount: 30 }, { item: Items.UNKNOWN, amount: 18 }], 
            "70+": [{ item: Items._CHUNK,    amount: 6 }, { item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 45 }, { item: Items.UNKNOWN, amount: 12 }], 
            "80+": [{ item: Items._GEMSTONE, amount: 6 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 60 }, { item: Items.UNKNOWN, amount: 24 }]
        }}, 
        elements: [{
            element: Elements.CRYO,
            talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}
            }
        }]
    });
    static ARATAKI_ITTO       = new Character({ name: "ARATAKI_ITTO",       /* FINISHED */
        level: { materials: { 
            "20+": [{ item: Items.PRITHIVA_TOPAZ_SLIVER,   amount: 1 },                                               { item: Items.ONIKABUTO, amount:  3 }, { item: Items.SLIME_CONDENSATE,  amount:  3 }], 
            "40+": [{ item: Items.PRITHIVA_TOPAZ_FRAGMENT, amount: 3 }, { item: Items.RIFTBORN_REGALIA, amount:  2 }, { item: Items.ONIKABUTO, amount: 10 }, { item: Items.SLIME_CONDENSATE,  amount: 15 }], 
            "50+": [{ item: Items.PRITHIVA_TOPAZ_FRAGMENT, amount: 6 }, { item: Items.RIFTBORN_REGALIA, amount:  4 }, { item: Items.ONIKABUTO, amount: 20 }, { item: Items.SLIME_SECRETIONS,  amount: 12 }], 
            "60+": [{ item: Items.PRITHIVA_TOPAZ_CHUNK,    amount: 3 }, { item: Items.RIFTBORN_REGALIA, amount:  8 }, { item: Items.ONIKABUTO, amount: 30 }, { item: Items.SLIME_SECRETIONS,  amount: 18 }], 
            "70+": [{ item: Items.PRITHIVA_TOPAZ_CHUNK,    amount: 9 }, { item: Items.RIFTBORN_REGALIA, amount: 12 }, { item: Items.ONIKABUTO, amount: 45 }, { item: Items.SLIME_CONCENTRATE, amount: 12 }], 
            "80+": [{ item: Items.PRITHIVA_TOPAZ_GEMSTONE, amount: 6 }, { item: Items.RIFTBORN_REGALIA, amount: 20 }, { item: Items.ONIKABUTO, amount: 60 }, { item: Items.SLIME_CONCENTRATE, amount: 24 }]
        }}, 
        elements: [
            { element: Elements.GEO, talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_ELEGANCE,    amount:  3 }, {item: Items.SLIME_CONDENSATE,  amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_ELEGANCE,        amount:  2 }, {item: Items.SLIME_SECRETIONS,  amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_ELEGANCE,        amount:  4 }, {item: Items.SLIME_SECRETIONS,  amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_ELEGANCE,        amount:  6 }, {item: Items.SLIME_SECRETIONS,  amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_ELEGANCE,        amount:  9 }, {item: Items.SLIME_SECRETIONS,  amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_ELEGANCE, amount:  4 }, {item: Items.SLIME_CONCENTRATE, amount:  4 }, { item: Items.ASHEN_HEART, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_ELEGANCE, amount:  6 }, {item: Items.SLIME_CONCENTRATE, amount:  6 }, { item: Items.ASHEN_HEART, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_ELEGANCE, amount: 12 }, {item: Items.SLIME_CONCENTRATE, amount:  9 }, { item: Items.ASHEN_HEART, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_ELEGANCE, amount: 16 }, {item: Items.SLIME_CONCENTRATE, amount: 12 }, { item: Items.ASHEN_HEART, amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_ELEGANCE,    amount:  3 }, {item: Items.SLIME_CONDENSATE,  amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_ELEGANCE,        amount:  2 }, {item: Items.SLIME_SECRETIONS,  amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_ELEGANCE,        amount:  4 }, {item: Items.SLIME_SECRETIONS,  amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_ELEGANCE,        amount:  6 }, {item: Items.SLIME_SECRETIONS,  amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_ELEGANCE,        amount:  9 }, {item: Items.SLIME_SECRETIONS,  amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_ELEGANCE, amount:  4 }, {item: Items.SLIME_CONCENTRATE, amount:  4 }, { item: Items.ASHEN_HEART, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_ELEGANCE, amount:  6 }, {item: Items.SLIME_CONCENTRATE, amount:  6 }, { item: Items.ASHEN_HEART, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_ELEGANCE, amount: 12 }, {item: Items.SLIME_CONCENTRATE, amount:  9 }, { item: Items.ASHEN_HEART, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_ELEGANCE, amount: 16 }, {item: Items.SLIME_CONCENTRATE, amount: 12 }, { item: Items.ASHEN_HEART, amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_ELEGANCE,    amount:  3 }, {item: Items.SLIME_CONDENSATE,  amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_ELEGANCE,        amount:  2 }, {item: Items.SLIME_SECRETIONS,  amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_ELEGANCE,        amount:  4 }, {item: Items.SLIME_SECRETIONS,  amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_ELEGANCE,        amount:  6 }, {item: Items.SLIME_SECRETIONS,  amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_ELEGANCE,        amount:  9 }, {item: Items.SLIME_SECRETIONS,  amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_ELEGANCE, amount:  4 }, {item: Items.SLIME_CONCENTRATE, amount:  4 }, { item: Items.ASHEN_HEART, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_ELEGANCE, amount:  6 }, {item: Items.SLIME_CONCENTRATE, amount:  6 }, { item: Items.ASHEN_HEART, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_ELEGANCE, amount: 12 }, {item: Items.SLIME_CONCENTRATE, amount:  9 }, { item: Items.ASHEN_HEART, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_ELEGANCE, amount: 16 }, {item: Items.SLIME_CONCENTRATE, amount: 12 }, { item: Items.ASHEN_HEART, amount: 2 }] 
                }}
            }}
        ]
    });
    static YUN_JIN            = new Character({ name: "YUN_JIN",            /* FINISHED */
        level: { materials: { 
            "20+": [{ item: Items.PRITHIVA_TOPAZ_SLIVER,   amount: 1 },                                               { item: Items.GLAZE_LILY, amount:  3 }, { item: Items.DAMAGED_MASK, amount:  3 }], 
            "40+": [{ item: Items.PRITHIVA_TOPAZ_FRAGMENT, amount: 3 }, { item: Items.RIFTBORN_REGALIA, amount:  2 }, { item: Items.GLAZE_LILY, amount: 10 }, { item: Items.DAMAGED_MASK, amount: 15 }], 
            "50+": [{ item: Items.PRITHIVA_TOPAZ_FRAGMENT, amount: 6 }, { item: Items.RIFTBORN_REGALIA, amount:  4 }, { item: Items.GLAZE_LILY, amount: 20 }, { item: Items.STAINED_MASK, amount: 12 }], 
            "60+": [{ item: Items.PRITHIVA_TOPAZ_CHUNK,    amount: 3 }, { item: Items.RIFTBORN_REGALIA, amount:  8 }, { item: Items.GLAZE_LILY, amount: 30 }, { item: Items.STAINED_MASK, amount: 18 }], 
            "70+": [{ item: Items.PRITHIVA_TOPAZ_CHUNK,    amount: 6 }, { item: Items.RIFTBORN_REGALIA, amount: 12 }, { item: Items.GLAZE_LILY, amount: 45 }, { item: Items.OMINOUS_MASK, amount: 12 }], 
            "80+": [{ item: Items.PRITHIVA_TOPAZ_GEMSTONE, amount: 6 }, { item: Items.RIFTBORN_REGALIA, amount: 20 }, { item: Items.GLAZE_LILY, amount: 60 }, { item: Items.OMINOUS_MASK, amount: 24 }]
        }}, 
        elements: [
            { element: Elements.GEO, talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_DILIGENCE,    amount:  3 }, {item: Items.DAMAGED_MASK, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_DILIGENCE,        amount:  2 }, {item: Items.STAINED_MASK, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_DILIGENCE,        amount:  4 }, {item: Items.STAINED_MASK, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_DILIGENCE,        amount:  6 }, {item: Items.STAINED_MASK, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_DILIGENCE,        amount:  9 }, {item: Items.STAINED_MASK, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_DILIGENCE, amount:  4 }, {item: Items.OMINOUS_MASK, amount:  4 }, { item: Items.ASHEN_HEART, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_DILIGENCE, amount:  6 }, {item: Items.OMINOUS_MASK, amount:  6 }, { item: Items.ASHEN_HEART, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_DILIGENCE, amount: 12 }, {item: Items.OMINOUS_MASK, amount:  9 }, { item: Items.ASHEN_HEART, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_DILIGENCE, amount: 16 }, {item: Items.OMINOUS_MASK, amount: 12 }, { item: Items.ASHEN_HEART, amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_DILIGENCE,    amount:  3 }, {item: Items.DAMAGED_MASK, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_DILIGENCE,        amount:  2 }, {item: Items.STAINED_MASK, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_DILIGENCE,        amount:  4 }, {item: Items.STAINED_MASK, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_DILIGENCE,        amount:  6 }, {item: Items.STAINED_MASK, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_DILIGENCE,        amount:  9 }, {item: Items.STAINED_MASK, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_DILIGENCE, amount:  4 }, {item: Items.OMINOUS_MASK, amount:  4 }, { item: Items.ASHEN_HEART, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_DILIGENCE, amount:  6 }, {item: Items.OMINOUS_MASK, amount:  6 }, { item: Items.ASHEN_HEART, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_DILIGENCE, amount: 12 }, {item: Items.OMINOUS_MASK, amount:  9 }, { item: Items.ASHEN_HEART, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_DILIGENCE, amount: 16 }, {item: Items.OMINOUS_MASK, amount: 12 }, { item: Items.ASHEN_HEART, amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_DILIGENCE,    amount:  3 }, {item: Items.DAMAGED_MASK, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_DILIGENCE,        amount:  2 }, {item: Items.STAINED_MASK, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_DILIGENCE,        amount:  4 }, {item: Items.STAINED_MASK, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_DILIGENCE,        amount:  6 }, {item: Items.STAINED_MASK, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_DILIGENCE,        amount:  9 }, {item: Items.STAINED_MASK, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_DILIGENCE, amount:  4 }, {item: Items.OMINOUS_MASK, amount:  4 }, { item: Items.ASHEN_HEART, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_DILIGENCE, amount:  6 }, {item: Items.OMINOUS_MASK, amount:  6 }, { item: Items.ASHEN_HEART, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_DILIGENCE, amount: 12 }, {item: Items.OMINOUS_MASK, amount:  9 }, { item: Items.ASHEN_HEART, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_DILIGENCE, amount: 16 }, {item: Items.OMINOUS_MASK, amount: 12 }, { item: Items.ASHEN_HEART, amount: 2 }] 
                }}
            }}
        ]
    });
    static SHENHE             = new Character({ name: "SHENHE",             
        level: { materials: { 
            "20+": [{ item: Items._SLIVER,   amount: 1 },                             { item: Items.UNKNOWN, amount:  3 }, { item: Items.UNKNOWN, amount:  3 }], 
            "40+": [{ item: Items._FRAGMENT, amount: 3 }, { item: Items.UNKNOWN, amount:  2 }, { item: Items.UNKNOWN, amount: 10 }, { item: Items.UNKNOWN, amount: 15 }], 
            "50+": [{ item: Items._FRAGMENT, amount: 6 }, { item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 12 }], 
            "60+": [{ item: Items._CHUNK,    amount: 3 }, { item: Items.UNKNOWN, amount:  8 }, { item: Items.UNKNOWN, amount: 30 }, { item: Items.UNKNOWN, amount: 18 }], 
            "70+": [{ item: Items._CHUNK,    amount: 6 }, { item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 45 }, { item: Items.UNKNOWN, amount: 12 }], 
            "80+": [{ item: Items._GEMSTONE, amount: 6 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 60 }, { item: Items.UNKNOWN, amount: 24 }]
        }}, 
        elements: [{
            element: Elements.CRYO,
            talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}
            }
        }]
    });
    static YAE_MIKO           = new Character({ name: "YAE_MIKO",           
        level: { materials: { 
            "20+": [{ item: Items._SLIVER,   amount: 1 },                             { item: Items.UNKNOWN, amount:  3 }, { item: Items.UNKNOWN, amount:  3 }], 
            "40+": [{ item: Items._FRAGMENT, amount: 3 }, { item: Items.UNKNOWN, amount:  2 }, { item: Items.UNKNOWN, amount: 10 }, { item: Items.UNKNOWN, amount: 15 }], 
            "50+": [{ item: Items._FRAGMENT, amount: 6 }, { item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 12 }], 
            "60+": [{ item: Items._CHUNK,    amount: 3 }, { item: Items.UNKNOWN, amount:  8 }, { item: Items.UNKNOWN, amount: 30 }, { item: Items.UNKNOWN, amount: 18 }], 
            "70+": [{ item: Items._CHUNK,    amount: 6 }, { item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 45 }, { item: Items.UNKNOWN, amount: 12 }], 
            "80+": [{ item: Items._GEMSTONE, amount: 6 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 60 }, { item: Items.UNKNOWN, amount: 24 }]
        }}, 
        elements: [{
            element: Elements.CRYO,
            talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}
            }
        }]
    });
    static KAMISATO_AYATO     = new Character({ name: "KAMISATO_AYATO",     
        level: { materials: { 
            "20+": [{ item: Items._SLIVER,   amount: 1 },                             { item: Items.UNKNOWN, amount:  3 }, { item: Items.UNKNOWN, amount:  3 }], 
            "40+": [{ item: Items._FRAGMENT, amount: 3 }, { item: Items.UNKNOWN, amount:  2 }, { item: Items.UNKNOWN, amount: 10 }, { item: Items.UNKNOWN, amount: 15 }], 
            "50+": [{ item: Items._FRAGMENT, amount: 6 }, { item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 12 }], 
            "60+": [{ item: Items._CHUNK,    amount: 3 }, { item: Items.UNKNOWN, amount:  8 }, { item: Items.UNKNOWN, amount: 30 }, { item: Items.UNKNOWN, amount: 18 }], 
            "70+": [{ item: Items._CHUNK,    amount: 6 }, { item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 45 }, { item: Items.UNKNOWN, amount: 12 }], 
            "80+": [{ item: Items._GEMSTONE, amount: 6 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 60 }, { item: Items.UNKNOWN, amount: 24 }]
        }}, 
        elements: [{
            element: Elements.CRYO,
            talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}
            }
        }]
    });
    static YELAN              = new Character({ name: "YELAN",              
        level: { materials: { 
            "20+": [{ item: Items._SLIVER,   amount: 1 },                             { item: Items.UNKNOWN, amount:  3 }, { item: Items.UNKNOWN, amount:  3 }], 
            "40+": [{ item: Items._FRAGMENT, amount: 3 }, { item: Items.UNKNOWN, amount:  2 }, { item: Items.UNKNOWN, amount: 10 }, { item: Items.UNKNOWN, amount: 15 }], 
            "50+": [{ item: Items._FRAGMENT, amount: 6 }, { item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 12 }], 
            "60+": [{ item: Items._CHUNK,    amount: 3 }, { item: Items.UNKNOWN, amount:  8 }, { item: Items.UNKNOWN, amount: 30 }, { item: Items.UNKNOWN, amount: 18 }], 
            "70+": [{ item: Items._CHUNK,    amount: 6 }, { item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 45 }, { item: Items.UNKNOWN, amount: 12 }], 
            "80+": [{ item: Items._GEMSTONE, amount: 6 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 60 }, { item: Items.UNKNOWN, amount: 24 }]
        }}, 
        elements: [{
            element: Elements.CRYO,
            talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}
            }
        }]
    });
    static KUKI_SHINOBU       = new Character({ name: "KUKI_SHINOBU",       
        level: { materials: { 
            "20+": [{ item: Items._SLIVER,   amount: 1 },                             { item: Items.UNKNOWN, amount:  3 }, { item: Items.UNKNOWN, amount:  3 }], 
            "40+": [{ item: Items._FRAGMENT, amount: 3 }, { item: Items.UNKNOWN, amount:  2 }, { item: Items.UNKNOWN, amount: 10 }, { item: Items.UNKNOWN, amount: 15 }], 
            "50+": [{ item: Items._FRAGMENT, amount: 6 }, { item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 12 }], 
            "60+": [{ item: Items._CHUNK,    amount: 3 }, { item: Items.UNKNOWN, amount:  8 }, { item: Items.UNKNOWN, amount: 30 }, { item: Items.UNKNOWN, amount: 18 }], 
            "70+": [{ item: Items._CHUNK,    amount: 6 }, { item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 45 }, { item: Items.UNKNOWN, amount: 12 }], 
            "80+": [{ item: Items._GEMSTONE, amount: 6 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 60 }, { item: Items.UNKNOWN, amount: 24 }]
        }}, 
        elements: [{
            element: Elements.CRYO,
            talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}
            }
        }]
    });
    static SHIKANOIN_HEIZOU   = new Character({ name: "SHIKANOIN_HEIZOU",   
        level: { materials: { 
            "20+": [{ item: Items._SLIVER,   amount: 1 },                             { item: Items.UNKNOWN, amount:  3 }, { item: Items.UNKNOWN, amount:  3 }], 
            "40+": [{ item: Items._FRAGMENT, amount: 3 }, { item: Items.UNKNOWN, amount:  2 }, { item: Items.UNKNOWN, amount: 10 }, { item: Items.UNKNOWN, amount: 15 }], 
            "50+": [{ item: Items._FRAGMENT, amount: 6 }, { item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 12 }], 
            "60+": [{ item: Items._CHUNK,    amount: 3 }, { item: Items.UNKNOWN, amount:  8 }, { item: Items.UNKNOWN, amount: 30 }, { item: Items.UNKNOWN, amount: 18 }], 
            "70+": [{ item: Items._CHUNK,    amount: 6 }, { item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 45 }, { item: Items.UNKNOWN, amount: 12 }], 
            "80+": [{ item: Items._GEMSTONE, amount: 6 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 60 }, { item: Items.UNKNOWN, amount: 24 }]
        }}, 
        elements: [{
            element: Elements.CRYO,
            talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}
            }
        }]
    });
    static COLLEI             = new Character({ name: "COLLEI",             
        level: { materials: { 
            "20+": [{ item: Items._SLIVER,   amount: 1 },                             { item: Items.UNKNOWN, amount:  3 }, { item: Items.UNKNOWN, amount:  3 }], 
            "40+": [{ item: Items._FRAGMENT, amount: 3 }, { item: Items.UNKNOWN, amount:  2 }, { item: Items.UNKNOWN, amount: 10 }, { item: Items.UNKNOWN, amount: 15 }], 
            "50+": [{ item: Items._FRAGMENT, amount: 6 }, { item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 12 }], 
            "60+": [{ item: Items._CHUNK,    amount: 3 }, { item: Items.UNKNOWN, amount:  8 }, { item: Items.UNKNOWN, amount: 30 }, { item: Items.UNKNOWN, amount: 18 }], 
            "70+": [{ item: Items._CHUNK,    amount: 6 }, { item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 45 }, { item: Items.UNKNOWN, amount: 12 }], 
            "80+": [{ item: Items._GEMSTONE, amount: 6 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 60 }, { item: Items.UNKNOWN, amount: 24 }]
        }}, 
        elements: [{
            element: Elements.CRYO,
            talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}
            }
        }]
    });
    static TIGNARI            = new Character({ name: "TIGNARI",            
        level: { materials: { 
            "20+": [{ item: Items._SLIVER,   amount: 1 },                             { item: Items.UNKNOWN, amount:  3 }, { item: Items.UNKNOWN, amount:  3 }], 
            "40+": [{ item: Items._FRAGMENT, amount: 3 }, { item: Items.UNKNOWN, amount:  2 }, { item: Items.UNKNOWN, amount: 10 }, { item: Items.UNKNOWN, amount: 15 }], 
            "50+": [{ item: Items._FRAGMENT, amount: 6 }, { item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 12 }], 
            "60+": [{ item: Items._CHUNK,    amount: 3 }, { item: Items.UNKNOWN, amount:  8 }, { item: Items.UNKNOWN, amount: 30 }, { item: Items.UNKNOWN, amount: 18 }], 
            "70+": [{ item: Items._CHUNK,    amount: 6 }, { item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 45 }, { item: Items.UNKNOWN, amount: 12 }], 
            "80+": [{ item: Items._GEMSTONE, amount: 6 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 60 }, { item: Items.UNKNOWN, amount: 24 }]
        }}, 
        elements: [{
            element: Elements.CRYO,
            talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}
            }
        }]
    });
    static DORI               = new Character({ name: "DORI",               
        level: { materials: { 
            "20+": [{ item: Items._SLIVER,   amount: 1 },                             { item: Items.UNKNOWN, amount:  3 }, { item: Items.UNKNOWN, amount:  3 }], 
            "40+": [{ item: Items._FRAGMENT, amount: 3 }, { item: Items.UNKNOWN, amount:  2 }, { item: Items.UNKNOWN, amount: 10 }, { item: Items.UNKNOWN, amount: 15 }], 
            "50+": [{ item: Items._FRAGMENT, amount: 6 }, { item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 12 }], 
            "60+": [{ item: Items._CHUNK,    amount: 3 }, { item: Items.UNKNOWN, amount:  8 }, { item: Items.UNKNOWN, amount: 30 }, { item: Items.UNKNOWN, amount: 18 }], 
            "70+": [{ item: Items._CHUNK,    amount: 6 }, { item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 45 }, { item: Items.UNKNOWN, amount: 12 }], 
            "80+": [{ item: Items._GEMSTONE, amount: 6 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 60 }, { item: Items.UNKNOWN, amount: 24 }]
        }}, 
        elements: [{
            element: Elements.CRYO,
            talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}
            }
        }]
    });
    static CANDACE            = new Character({ name: "CANDACE",            
        level: { materials: { 
            "20+": [{ item: Items._SLIVER,   amount: 1 },                             { item: Items.UNKNOWN, amount:  3 }, { item: Items.UNKNOWN, amount:  3 }], 
            "40+": [{ item: Items._FRAGMENT, amount: 3 }, { item: Items.UNKNOWN, amount:  2 }, { item: Items.UNKNOWN, amount: 10 }, { item: Items.UNKNOWN, amount: 15 }], 
            "50+": [{ item: Items._FRAGMENT, amount: 6 }, { item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 12 }], 
            "60+": [{ item: Items._CHUNK,    amount: 3 }, { item: Items.UNKNOWN, amount:  8 }, { item: Items.UNKNOWN, amount: 30 }, { item: Items.UNKNOWN, amount: 18 }], 
            "70+": [{ item: Items._CHUNK,    amount: 6 }, { item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 45 }, { item: Items.UNKNOWN, amount: 12 }], 
            "80+": [{ item: Items._GEMSTONE, amount: 6 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 60 }, { item: Items.UNKNOWN, amount: 24 }]
        }}, 
        elements: [{
            element: Elements.CRYO,
            talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}
            }
        }]
    });
    static CYNO               = new Character({ name: "CYNO",               /* FINISHED */
        level: { materials: { 
            "20+": [{ item: Items.VAJRADA_AMETHYST_SLIVER,   amount: 1 },                                                    { item: Items.SCARAB, amount:  3 }, { item: Items.DIVINING_SCROLL,        amount:  3 }], 
            "40+": [{ item: Items.VAJRADA_AMETHYST_FRAGMENT, amount: 3 }, { item: Items.THUNDERCLAP_FRUITCORE, amount:  2 }, { item: Items.SCARAB, amount: 10 }, { item: Items.DIVINING_SCROLL,        amount: 15 }], 
            "50+": [{ item: Items.VAJRADA_AMETHYST_FRAGMENT, amount: 6 }, { item: Items.THUNDERCLAP_FRUITCORE, amount:  4 }, { item: Items.SCARAB, amount: 20 }, { item: Items.SEALED_SCROLL,          amount: 12 }], 
            "60+": [{ item: Items.VAJRADA_AMETHYST_CHUNK,    amount: 3 }, { item: Items.THUNDERCLAP_FRUITCORE, amount:  8 }, { item: Items.SCARAB, amount: 30 }, { item: Items.SEALED_SCROLL,          amount: 18 }], 
            "70+": [{ item: Items.VAJRADA_AMETHYST_CHUNK,    amount: 6 }, { item: Items.THUNDERCLAP_FRUITCORE, amount: 12 }, { item: Items.SCARAB, amount: 45 }, { item: Items.FORBIDDEN_CURSE_SCROLL, amount: 12 }], 
            "80+": [{ item: Items.VAJRADA_AMETHYST_GEMSTONE, amount: 6 }, { item: Items.THUNDERCLAP_FRUITCORE, amount: 20 }, { item: Items.SCARAB, amount: 60 }, { item: Items.FORBIDDEN_CURSE_SCROLL, amount: 24 }]
        }}, 
        elements: [
            { element: Elements.ELECTRO, talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_ADMONITION,    amount:  3 }, {item: Items.DIVINING_SCROLL,        amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_ADMONITION,        amount:  2 }, {item: Items.SEALED_SCROLL,          amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_ADMONITION,        amount:  4 }, {item: Items.SEALED_SCROLL,          amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_ADMONITION,        amount:  6 }, {item: Items.SEALED_SCROLL,          amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_ADMONITION,        amount:  9 }, {item: Items.SEALED_SCROLL,          amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_ADMONITION, amount:  4 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount:  4 }, { item: Items.MUDRA_OF_THE_MALEFIC_GENERAL, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_ADMONITION, amount:  6 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount:  6 }, { item: Items.MUDRA_OF_THE_MALEFIC_GENERAL, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_ADMONITION, amount: 12 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount:  9 }, { item: Items.MUDRA_OF_THE_MALEFIC_GENERAL, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_ADMONITION, amount: 16 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount: 12 }, { item: Items.MUDRA_OF_THE_MALEFIC_GENERAL, amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_ADMONITION,    amount:  3 }, {item: Items.DIVINING_SCROLL,        amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_ADMONITION,        amount:  2 }, {item: Items.SEALED_SCROLL,          amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_ADMONITION,        amount:  4 }, {item: Items.SEALED_SCROLL,          amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_ADMONITION,        amount:  6 }, {item: Items.SEALED_SCROLL,          amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_ADMONITION,        amount:  9 }, {item: Items.SEALED_SCROLL,          amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_ADMONITION, amount:  4 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount:  4 }, { item: Items.MUDRA_OF_THE_MALEFIC_GENERAL, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_ADMONITION, amount:  6 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount:  6 }, { item: Items.MUDRA_OF_THE_MALEFIC_GENERAL, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_ADMONITION, amount: 12 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount:  9 }, { item: Items.MUDRA_OF_THE_MALEFIC_GENERAL, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_ADMONITION, amount: 16 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount: 12 }, { item: Items.MUDRA_OF_THE_MALEFIC_GENERAL, amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_ADMONITION,    amount:  3 }, {item: Items.DIVINING_SCROLL,        amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_ADMONITION,        amount:  2 }, {item: Items.SEALED_SCROLL,          amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_ADMONITION,        amount:  4 }, {item: Items.SEALED_SCROLL,          amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_ADMONITION,        amount:  6 }, {item: Items.SEALED_SCROLL,          amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_ADMONITION,        amount:  9 }, {item: Items.SEALED_SCROLL,          amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_ADMONITION, amount:  4 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount:  4 }, { item: Items.MUDRA_OF_THE_MALEFIC_GENERAL, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_ADMONITION, amount:  6 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount:  6 }, { item: Items.MUDRA_OF_THE_MALEFIC_GENERAL, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_ADMONITION, amount: 12 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount:  9 }, { item: Items.MUDRA_OF_THE_MALEFIC_GENERAL, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_ADMONITION, amount: 16 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount: 12 }, { item: Items.MUDRA_OF_THE_MALEFIC_GENERAL, amount: 2 }] 
                }}
            }}
        ]
    });
    static NILOU              = new Character({ name: "NILOU",              
        level: { materials: { 
            "20+": [{ item: Items._SLIVER,   amount: 1 },                             { item: Items.UNKNOWN, amount:  3 }, { item: Items.UNKNOWN, amount:  3 }], 
            "40+": [{ item: Items._FRAGMENT, amount: 3 }, { item: Items.UNKNOWN, amount:  2 }, { item: Items.UNKNOWN, amount: 10 }, { item: Items.UNKNOWN, amount: 15 }], 
            "50+": [{ item: Items._FRAGMENT, amount: 6 }, { item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 12 }], 
            "60+": [{ item: Items._CHUNK,    amount: 3 }, { item: Items.UNKNOWN, amount:  8 }, { item: Items.UNKNOWN, amount: 30 }, { item: Items.UNKNOWN, amount: 18 }], 
            "70+": [{ item: Items._CHUNK,    amount: 6 }, { item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 45 }, { item: Items.UNKNOWN, amount: 12 }], 
            "80+": [{ item: Items._GEMSTONE, amount: 6 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 60 }, { item: Items.UNKNOWN, amount: 24 }]
        }}, 
        elements: [{
            element: Elements.CRYO,
            talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}
            }
        }]
    });
    static NAHIDA             = new Character({ name: "NAHIDA",             
        level: { materials: { 
            "20+": [{ item: Items._SLIVER,   amount: 1 },                             { item: Items.UNKNOWN, amount:  3 }, { item: Items.UNKNOWN, amount:  3 }], 
            "40+": [{ item: Items._FRAGMENT, amount: 3 }, { item: Items.UNKNOWN, amount:  2 }, { item: Items.UNKNOWN, amount: 10 }, { item: Items.UNKNOWN, amount: 15 }], 
            "50+": [{ item: Items._FRAGMENT, amount: 6 }, { item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 12 }], 
            "60+": [{ item: Items._CHUNK,    amount: 3 }, { item: Items.UNKNOWN, amount:  8 }, { item: Items.UNKNOWN, amount: 30 }, { item: Items.UNKNOWN, amount: 18 }], 
            "70+": [{ item: Items._CHUNK,    amount: 6 }, { item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 45 }, { item: Items.UNKNOWN, amount: 12 }], 
            "80+": [{ item: Items._GEMSTONE, amount: 6 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 60 }, { item: Items.UNKNOWN, amount: 24 }]
        }}, 
        elements: [{
            element: Elements.CRYO,
            talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}
            }
        }]
    });
    static LAYLA              = new Character({ name: "LAYLA",              /* FINISHED */
        level: { materials: { 
            "20+": [{ item: Items.SHIVADA_JADE_SLIVER,   amount: 1 },                                                { item: Items.NILOTPALA_LOTUS, amount:  3 }, { item: Items.DIVINING_SCROLL,        amount:  3 }], 
            "40+": [{ item: Items.SHIVADA_JADE_FRAGMENT, amount: 3 }, { item: Items.PERPETUAL_CALIBER, amount:  2 }, { item: Items.NILOTPALA_LOTUS, amount: 10 }, { item: Items.DIVINING_SCROLL,        amount: 15 }], 
            "50+": [{ item: Items.SHIVADA_JADE_FRAGMENT, amount: 6 }, { item: Items.PERPETUAL_CALIBER, amount:  4 }, { item: Items.NILOTPALA_LOTUS, amount: 20 }, { item: Items.SEALED_SCROLL,          amount: 12 }], 
            "60+": [{ item: Items.SHIVADA_JADE_CHUNK,    amount: 3 }, { item: Items.PERPETUAL_CALIBER, amount:  8 }, { item: Items.NILOTPALA_LOTUS, amount: 30 }, { item: Items.SEALED_SCROLL,          amount: 18 }], 
            "70+": [{ item: Items.SHIVADA_JADE_CHUNK,    amount: 6 }, { item: Items.PERPETUAL_CALIBER, amount: 12 }, { item: Items.NILOTPALA_LOTUS, amount: 45 }, { item: Items.FORBIDDEN_CURSE_SCROLL, amount: 12 }], 
            "80+": [{ item: Items.SHIVADA_JADE_GEMSTONE, amount: 6 }, { item: Items.PERPETUAL_CALIBER, amount: 20 }, { item: Items.NILOTPALA_LOTUS, amount: 60 }, { item: Items.FORBIDDEN_CURSE_SCROLL, amount: 24 }]
        }}, 
        elements: [
            { element: Elements.CRYO, talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_INGENUITY,    amount:  3 }, {item: Items.DIVINING_SCROLL,        amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_INGENUITY,        amount:  2 }, {item: Items.SEALED_SCROLL,          amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_INGENUITY,        amount:  4 }, {item: Items.SEALED_SCROLL,          amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_INGENUITY,        amount:  6 }, {item: Items.SEALED_SCROLL,          amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_INGENUITY,        amount:  9 }, {item: Items.SEALED_SCROLL,          amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_INGENUITY, amount:  4 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount:  4 }, { item: Items.MIRROR_OF_MUSHIN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_INGENUITY, amount:  6 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount:  6 }, { item: Items.MIRROR_OF_MUSHIN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_INGENUITY, amount: 12 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount:  9 }, { item: Items.MIRROR_OF_MUSHIN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_INGENUITY, amount: 16 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount: 12 }, { item: Items.MIRROR_OF_MUSHIN, amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_INGENUITY,    amount:  3 }, {item: Items.DIVINING_SCROLL,        amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_INGENUITY,        amount:  2 }, {item: Items.SEALED_SCROLL,          amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_INGENUITY,        amount:  4 }, {item: Items.SEALED_SCROLL,          amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_INGENUITY,        amount:  6 }, {item: Items.SEALED_SCROLL,          amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_INGENUITY,        amount:  9 }, {item: Items.SEALED_SCROLL,          amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_INGENUITY, amount:  4 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount:  4 }, { item: Items.MIRROR_OF_MUSHIN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_INGENUITY, amount:  6 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount:  6 }, { item: Items.MIRROR_OF_MUSHIN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_INGENUITY, amount: 12 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount:  9 }, { item: Items.MIRROR_OF_MUSHIN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_INGENUITY, amount: 16 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount: 12 }, { item: Items.MIRROR_OF_MUSHIN, amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_INGENUITY,    amount:  3 }, {item: Items.DIVINING_SCROLL,        amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_INGENUITY,        amount:  2 }, {item: Items.SEALED_SCROLL,          amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_INGENUITY,        amount:  4 }, {item: Items.SEALED_SCROLL,          amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_INGENUITY,        amount:  6 }, {item: Items.SEALED_SCROLL,          amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_INGENUITY,        amount:  9 }, {item: Items.SEALED_SCROLL,          amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_INGENUITY, amount:  4 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount:  4 }, { item: Items.MIRROR_OF_MUSHIN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_INGENUITY, amount:  6 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount:  6 }, { item: Items.MIRROR_OF_MUSHIN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_INGENUITY, amount: 12 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount:  9 }, { item: Items.MIRROR_OF_MUSHIN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_INGENUITY, amount: 16 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount: 12 }, { item: Items.MIRROR_OF_MUSHIN, amount: 2 }] 
                }}
            }}
        ]
    });
    static FARUZAN            = new Character({ name: "FARUZAN",            
        level: { materials: { 
            "20+": [{ item: Items._SLIVER,   amount: 1 },                             { item: Items.UNKNOWN, amount:  3 }, { item: Items.UNKNOWN, amount:  3 }], 
            "40+": [{ item: Items._FRAGMENT, amount: 3 }, { item: Items.UNKNOWN, amount:  2 }, { item: Items.UNKNOWN, amount: 10 }, { item: Items.UNKNOWN, amount: 15 }], 
            "50+": [{ item: Items._FRAGMENT, amount: 6 }, { item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 12 }], 
            "60+": [{ item: Items._CHUNK,    amount: 3 }, { item: Items.UNKNOWN, amount:  8 }, { item: Items.UNKNOWN, amount: 30 }, { item: Items.UNKNOWN, amount: 18 }], 
            "70+": [{ item: Items._CHUNK,    amount: 6 }, { item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 45 }, { item: Items.UNKNOWN, amount: 12 }], 
            "80+": [{ item: Items._GEMSTONE, amount: 6 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 60 }, { item: Items.UNKNOWN, amount: 24 }]
        }}, 
        elements: [{
            element: Elements.CRYO,
            talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}
            }
        }]
    });
    static WANDERER           = new Character({ name: "WANDERER",           
        level: { materials: { 
            "20+": [{ item: Items._SLIVER,   amount: 1 },                             { item: Items.UNKNOWN, amount:  3 }, { item: Items.UNKNOWN, amount:  3 }], 
            "40+": [{ item: Items._FRAGMENT, amount: 3 }, { item: Items.UNKNOWN, amount:  2 }, { item: Items.UNKNOWN, amount: 10 }, { item: Items.UNKNOWN, amount: 15 }], 
            "50+": [{ item: Items._FRAGMENT, amount: 6 }, { item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 12 }], 
            "60+": [{ item: Items._CHUNK,    amount: 3 }, { item: Items.UNKNOWN, amount:  8 }, { item: Items.UNKNOWN, amount: 30 }, { item: Items.UNKNOWN, amount: 18 }], 
            "70+": [{ item: Items._CHUNK,    amount: 6 }, { item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 45 }, { item: Items.UNKNOWN, amount: 12 }], 
            "80+": [{ item: Items._GEMSTONE, amount: 6 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 60 }, { item: Items.UNKNOWN, amount: 24 }]
        }}, 
        elements: [{
            element: Elements.CRYO,
            talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}
            }
        }]
    });
    static YAO_YAO            = new Character({ name: "YAO_YAO",            /* FINISHED */
        level: { materials: { 
            "20+": [{ item: Items.NAGADUS_EMERALD_SLIVER,   amount: 1 },                                              { item: Items.JUEYUN_CHILI, amount:  3 }, { item: Items.SLIME_CONDENSATE,  amount:  3 }], 
            "40+": [{ item: Items.NAGADUS_EMERALD_FRAGMENT, amount: 3 }, { item: Items.QUELLED_CREEPER, amount:  2 }, { item: Items.JUEYUN_CHILI, amount: 10 }, { item: Items.SLIME_CONDENSATE,  amount: 15 }], 
            "50+": [{ item: Items.NAGADUS_EMERALD_FRAGMENT, amount: 6 }, { item: Items.QUELLED_CREEPER, amount:  4 }, { item: Items.JUEYUN_CHILI, amount: 20 }, { item: Items.SLIME_SECRETIONS,  amount: 12 }], 
            "60+": [{ item: Items.NAGADUS_EMERALD_CHUNK,    amount: 3 }, { item: Items.QUELLED_CREEPER, amount:  8 }, { item: Items.JUEYUN_CHILI, amount: 30 }, { item: Items.SLIME_SECRETIONS,  amount: 18 }], 
            "70+": [{ item: Items.NAGADUS_EMERALD_CHUNK,    amount: 6 }, { item: Items.QUELLED_CREEPER, amount: 12 }, { item: Items.JUEYUN_CHILI, amount: 45 }, { item: Items.SLIME_CONCENTRATE, amount: 12 }], 
            "80+": [{ item: Items.NAGADUS_EMERALD_GEMSTONE, amount: 6 }, { item: Items.QUELLED_CREEPER, amount: 20 }, { item: Items.JUEYUN_CHILI, amount: 60 }, { item: Items.SLIME_CONCENTRATE, amount: 24 }]
        }}, 
        elements: [
            { element: Elements.DENDRO, talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_DILIGENCE,    amount:  3 }, {item: Items.SLIME_CONDENSATE,  amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_DILIGENCE,        amount:  2 }, {item: Items.SLIME_SECRETIONS,  amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_DILIGENCE,        amount:  4 }, {item: Items.SLIME_SECRETIONS,  amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_DILIGENCE,        amount:  6 }, {item: Items.SLIME_SECRETIONS,  amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_DILIGENCE,        amount:  9 }, {item: Items.SLIME_SECRETIONS,  amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_DILIGENCE, amount:  4 }, {item: Items.SLIME_CONCENTRATE, amount:  4 }, { item: Items["DAKA'S_BELL"], amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_DILIGENCE, amount:  6 }, {item: Items.SLIME_CONCENTRATE, amount:  6 }, { item: Items["DAKA'S_BELL"], amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_DILIGENCE, amount: 12 }, {item: Items.SLIME_CONCENTRATE, amount:  9 }, { item: Items["DAKA'S_BELL"], amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_DILIGENCE, amount: 16 }, {item: Items.SLIME_CONCENTRATE, amount: 12 }, { item: Items["DAKA'S_BELL"], amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_DILIGENCE,    amount:  3 }, {item: Items.SLIME_CONDENSATE,  amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_DILIGENCE,        amount:  2 }, {item: Items.SLIME_SECRETIONS,  amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_DILIGENCE,        amount:  4 }, {item: Items.SLIME_SECRETIONS,  amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_DILIGENCE,        amount:  6 }, {item: Items.SLIME_SECRETIONS,  amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_DILIGENCE,        amount:  9 }, {item: Items.SLIME_SECRETIONS,  amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_DILIGENCE, amount:  4 }, {item: Items.SLIME_CONCENTRATE, amount:  4 }, { item: Items["DAKA'S_BELL"], amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_DILIGENCE, amount:  6 }, {item: Items.SLIME_CONCENTRATE, amount:  6 }, { item: Items["DAKA'S_BELL"], amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_DILIGENCE, amount: 12 }, {item: Items.SLIME_CONCENTRATE, amount:  9 }, { item: Items["DAKA'S_BELL"], amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_DILIGENCE, amount: 16 }, {item: Items.SLIME_CONCENTRATE, amount: 12 }, { item: Items["DAKA'S_BELL"], amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_DILIGENCE,    amount:  3 }, {item: Items.SLIME_CONDENSATE,  amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_DILIGENCE,        amount:  2 }, {item: Items.SLIME_SECRETIONS,  amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_DILIGENCE,        amount:  4 }, {item: Items.SLIME_SECRETIONS,  amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_DILIGENCE,        amount:  6 }, {item: Items.SLIME_SECRETIONS,  amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_DILIGENCE,        amount:  9 }, {item: Items.SLIME_SECRETIONS,  amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_DILIGENCE, amount:  4 }, {item: Items.SLIME_CONCENTRATE, amount:  4 }, { item: Items["DAKA'S_BELL"], amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_DILIGENCE, amount:  6 }, {item: Items.SLIME_CONCENTRATE, amount:  6 }, { item: Items["DAKA'S_BELL"], amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_DILIGENCE, amount: 12 }, {item: Items.SLIME_CONCENTRATE, amount:  9 }, { item: Items["DAKA'S_BELL"], amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_DILIGENCE, amount: 16 }, {item: Items.SLIME_CONCENTRATE, amount: 12 }, { item: Items["DAKA'S_BELL"], amount: 2 }] 
                }}
            }}
        ]
    });
    static ALHAITHAM          = new Character({ name: "ALHAITHAM",          
        level: { materials: { 
            "20+": [{ item: Items._SLIVER,   amount: 1 },                             { item: Items.UNKNOWN, amount:  3 }, { item: Items.UNKNOWN, amount:  3 }], 
            "40+": [{ item: Items._FRAGMENT, amount: 3 }, { item: Items.UNKNOWN, amount:  2 }, { item: Items.UNKNOWN, amount: 10 }, { item: Items.UNKNOWN, amount: 15 }], 
            "50+": [{ item: Items._FRAGMENT, amount: 6 }, { item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 12 }], 
            "60+": [{ item: Items._CHUNK,    amount: 3 }, { item: Items.UNKNOWN, amount:  8 }, { item: Items.UNKNOWN, amount: 30 }, { item: Items.UNKNOWN, amount: 18 }], 
            "70+": [{ item: Items._CHUNK,    amount: 6 }, { item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 45 }, { item: Items.UNKNOWN, amount: 12 }], 
            "80+": [{ item: Items._GEMSTONE, amount: 6 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 60 }, { item: Items.UNKNOWN, amount: 24 }]
        }}, 
        elements: [{
            element: Elements.CRYO,
            talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}
            }
        }]
    });
    static DEHYA              = new Character({ name: "DEHYA",              
        level: { materials: { 
            "20+": [{ item: Items._SLIVER,   amount: 1 },                             { item: Items.UNKNOWN, amount:  3 }, { item: Items.UNKNOWN, amount:  3 }], 
            "40+": [{ item: Items._FRAGMENT, amount: 3 }, { item: Items.UNKNOWN, amount:  2 }, { item: Items.UNKNOWN, amount: 10 }, { item: Items.UNKNOWN, amount: 15 }], 
            "50+": [{ item: Items._FRAGMENT, amount: 6 }, { item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 12 }], 
            "60+": [{ item: Items._CHUNK,    amount: 3 }, { item: Items.UNKNOWN, amount:  8 }, { item: Items.UNKNOWN, amount: 30 }, { item: Items.UNKNOWN, amount: 18 }], 
            "70+": [{ item: Items._CHUNK,    amount: 6 }, { item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 45 }, { item: Items.UNKNOWN, amount: 12 }], 
            "80+": [{ item: Items._GEMSTONE, amount: 6 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 60 }, { item: Items.UNKNOWN, amount: 24 }]
        }}, 
        elements: [{
            element: Elements.CRYO,
            talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}
            }
        }]
    });
    static MIKA               = new Character({ name: "MIKA",               
        level: { materials: { 
            "20+": [{ item: Items._SLIVER,   amount: 1 },                             { item: Items.UNKNOWN, amount:  3 }, { item: Items.UNKNOWN, amount:  3 }], 
            "40+": [{ item: Items._FRAGMENT, amount: 3 }, { item: Items.UNKNOWN, amount:  2 }, { item: Items.UNKNOWN, amount: 10 }, { item: Items.UNKNOWN, amount: 15 }], 
            "50+": [{ item: Items._FRAGMENT, amount: 6 }, { item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 12 }], 
            "60+": [{ item: Items._CHUNK,    amount: 3 }, { item: Items.UNKNOWN, amount:  8 }, { item: Items.UNKNOWN, amount: 30 }, { item: Items.UNKNOWN, amount: 18 }], 
            "70+": [{ item: Items._CHUNK,    amount: 6 }, { item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 45 }, { item: Items.UNKNOWN, amount: 12 }], 
            "80+": [{ item: Items._GEMSTONE, amount: 6 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 60 }, { item: Items.UNKNOWN, amount: 24 }]
        }}, 
        elements: [{
            element: Elements.CRYO,
            talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}
            }
        }]
    });
    static KAVEH              = new Character({ name: "KAVEH",              
        level: { materials: { 
            "20+": [{ item: Items._SLIVER,   amount: 1 },                             { item: Items.UNKNOWN, amount:  3 }, { item: Items.UNKNOWN, amount:  3 }], 
            "40+": [{ item: Items._FRAGMENT, amount: 3 }, { item: Items.UNKNOWN, amount:  2 }, { item: Items.UNKNOWN, amount: 10 }, { item: Items.UNKNOWN, amount: 15 }], 
            "50+": [{ item: Items._FRAGMENT, amount: 6 }, { item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 12 }], 
            "60+": [{ item: Items._CHUNK,    amount: 3 }, { item: Items.UNKNOWN, amount:  8 }, { item: Items.UNKNOWN, amount: 30 }, { item: Items.UNKNOWN, amount: 18 }], 
            "70+": [{ item: Items._CHUNK,    amount: 6 }, { item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 45 }, { item: Items.UNKNOWN, amount: 12 }], 
            "80+": [{ item: Items._GEMSTONE, amount: 6 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 60 }, { item: Items.UNKNOWN, amount: 24 }]
        }}, 
        elements: [{
            element: Elements.CRYO,
            talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}
            }
        }]
    });
    static BAIZHU             = new Character({ name: "BAIZHU",             
        level: { materials: { 
            "20+": [{ item: Items._SLIVER,   amount: 1 },                             { item: Items.UNKNOWN, amount:  3 }, { item: Items.UNKNOWN, amount:  3 }], 
            "40+": [{ item: Items._FRAGMENT, amount: 3 }, { item: Items.UNKNOWN, amount:  2 }, { item: Items.UNKNOWN, amount: 10 }, { item: Items.UNKNOWN, amount: 15 }], 
            "50+": [{ item: Items._FRAGMENT, amount: 6 }, { item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 12 }], 
            "60+": [{ item: Items._CHUNK,    amount: 3 }, { item: Items.UNKNOWN, amount:  8 }, { item: Items.UNKNOWN, amount: 30 }, { item: Items.UNKNOWN, amount: 18 }], 
            "70+": [{ item: Items._CHUNK,    amount: 6 }, { item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 45 }, { item: Items.UNKNOWN, amount: 12 }], 
            "80+": [{ item: Items._GEMSTONE, amount: 6 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 60 }, { item: Items.UNKNOWN, amount: 24 }]
        }}, 
        elements: [{
            element: Elements.CRYO,
            talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}
            }
        }]
    });
    static KIRARA             = new Character({ name: "KIRARA",             
        level: { materials: { 
            "20+": [{ item: Items._SLIVER,   amount: 1 },                             { item: Items.UNKNOWN, amount:  3 }, { item: Items.UNKNOWN, amount:  3 }], 
            "40+": [{ item: Items._FRAGMENT, amount: 3 }, { item: Items.UNKNOWN, amount:  2 }, { item: Items.UNKNOWN, amount: 10 }, { item: Items.UNKNOWN, amount: 15 }], 
            "50+": [{ item: Items._FRAGMENT, amount: 6 }, { item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 12 }], 
            "60+": [{ item: Items._CHUNK,    amount: 3 }, { item: Items.UNKNOWN, amount:  8 }, { item: Items.UNKNOWN, amount: 30 }, { item: Items.UNKNOWN, amount: 18 }], 
            "70+": [{ item: Items._CHUNK,    amount: 6 }, { item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 45 }, { item: Items.UNKNOWN, amount: 12 }], 
            "80+": [{ item: Items._GEMSTONE, amount: 6 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 60 }, { item: Items.UNKNOWN, amount: 24 }]
        }}, 
        elements: [{
            element: Elements.CRYO,
            talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}
            }
        }]
    });
    static LYNETTE            = new Character({ name: "LYNETTE",            
        level: { materials: { 
            "20+": [{ item: Items._SLIVER,   amount: 1 },                             { item: Items.UNKNOWN, amount:  3 }, { item: Items.UNKNOWN, amount:  3 }], 
            "40+": [{ item: Items._FRAGMENT, amount: 3 }, { item: Items.UNKNOWN, amount:  2 }, { item: Items.UNKNOWN, amount: 10 }, { item: Items.UNKNOWN, amount: 15 }], 
            "50+": [{ item: Items._FRAGMENT, amount: 6 }, { item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 12 }], 
            "60+": [{ item: Items._CHUNK,    amount: 3 }, { item: Items.UNKNOWN, amount:  8 }, { item: Items.UNKNOWN, amount: 30 }, { item: Items.UNKNOWN, amount: 18 }], 
            "70+": [{ item: Items._CHUNK,    amount: 6 }, { item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 45 }, { item: Items.UNKNOWN, amount: 12 }], 
            "80+": [{ item: Items._GEMSTONE, amount: 6 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 60 }, { item: Items.UNKNOWN, amount: 24 }]
        }}, 
        elements: [{
            element: Elements.CRYO,
            talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}
            }
        }]
    });
    static LYNEY              = new Character({ name: "LYNEY",              
        level: { materials: { 
            "20+": [{ item: Items._SLIVER,   amount: 1 },                             { item: Items.UNKNOWN, amount:  3 }, { item: Items.UNKNOWN, amount:  3 }], 
            "40+": [{ item: Items._FRAGMENT, amount: 3 }, { item: Items.UNKNOWN, amount:  2 }, { item: Items.UNKNOWN, amount: 10 }, { item: Items.UNKNOWN, amount: 15 }], 
            "50+": [{ item: Items._FRAGMENT, amount: 6 }, { item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 12 }], 
            "60+": [{ item: Items._CHUNK,    amount: 3 }, { item: Items.UNKNOWN, amount:  8 }, { item: Items.UNKNOWN, amount: 30 }, { item: Items.UNKNOWN, amount: 18 }], 
            "70+": [{ item: Items._CHUNK,    amount: 6 }, { item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 45 }, { item: Items.UNKNOWN, amount: 12 }], 
            "80+": [{ item: Items._GEMSTONE, amount: 6 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 60 }, { item: Items.UNKNOWN, amount: 24 }]
        }}, 
        elements: [{
            element: Elements.CRYO,
            talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}
            }
        }]
    });
    static FREMINET           = new Character({ name: "FREMINET",           
        level: { materials: { 
            "20+": [{ item: Items._SLIVER,   amount: 1 },                             { item: Items.UNKNOWN, amount:  3 }, { item: Items.UNKNOWN, amount:  3 }], 
            "40+": [{ item: Items._FRAGMENT, amount: 3 }, { item: Items.UNKNOWN, amount:  2 }, { item: Items.UNKNOWN, amount: 10 }, { item: Items.UNKNOWN, amount: 15 }], 
            "50+": [{ item: Items._FRAGMENT, amount: 6 }, { item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 12 }], 
            "60+": [{ item: Items._CHUNK,    amount: 3 }, { item: Items.UNKNOWN, amount:  8 }, { item: Items.UNKNOWN, amount: 30 }, { item: Items.UNKNOWN, amount: 18 }], 
            "70+": [{ item: Items._CHUNK,    amount: 6 }, { item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 45 }, { item: Items.UNKNOWN, amount: 12 }], 
            "80+": [{ item: Items._GEMSTONE, amount: 6 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 60 }, { item: Items.UNKNOWN, amount: 24 }]
        }}, 
        elements: [{
            element: Elements.CRYO,
            talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}
            }
        }]
    });
    static NEUVILLETTE        = new Character({ name: "NEUVILLETTE",        /* FINISHED */ 
        level: { materials: { 
            "20+": [{ item: Items.VARUNADA_LAZURITE_SLIVER,   amount: 1 },                                               { item: Items.LUMITOILE, amount:  3 }, { item: Items.TRANSOCEANIC_PEARL,    amount:  3 }], 
            "40+": [{ item: Items.VARUNADA_LAZURITE_FRAGMENT, amount: 3 }, { item: Items.FONTEMER_UNIHORN, amount:  2 }, { item: Items.LUMITOILE, amount: 10 }, { item: Items.TRANSOCEANIC_PEARL,    amount: 15 }], 
            "50+": [{ item: Items.VARUNADA_LAZURITE_FRAGMENT, amount: 6 }, { item: Items.FONTEMER_UNIHORN, amount:  4 }, { item: Items.LUMITOILE, amount: 20 }, { item: Items.TRANSOCEANIC_CHUNK,    amount: 12 }], 
            "60+": [{ item: Items.VARUNADA_LAZURITE_CHUNK,    amount: 3 }, { item: Items.FONTEMER_UNIHORN, amount:  8 }, { item: Items.LUMITOILE, amount: 30 }, { item: Items.TRANSOCEANIC_CHUNK,    amount: 18 }], 
            "70+": [{ item: Items.VARUNADA_LAZURITE_CHUNK,    amount: 9 }, { item: Items.FONTEMER_UNIHORN, amount: 12 }, { item: Items.LUMITOILE, amount: 45 }, { item: Items.XENOCHROMATIC_CRYSTAL, amount: 12 }], 
            "80+": [{ item: Items.VARUNADA_LAZURITE_GEMSTONE, amount: 6 }, { item: Items.FONTEMER_UNIHORN, amount: 20 }, { item: Items.LUMITOILE, amount: 60 }, { item: Items.XENOCHROMATIC_CRYSTAL, amount: 24 }]
        }}, 
        elements: [{
            element: Elements.HYDRO,
            talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_EQUITY,    amount:  3 }, { item: Items.TRANSOCEANIC_PEARL,    amount:  6 }], 
                    3:  [{ item: Items.GUIDE_TO_EQUITY,        amount:  2 }, { item: Items.TRANSOCEANIC_CHUNK,    amount:  3 }], 
                    4:  [{ item: Items.GUIDE_TO_EQUITY,        amount:  4 }, { item: Items.TRANSOCEANIC_CHUNK,    amount:  4 }], 
                    5:  [{ item: Items.GUIDE_TO_EQUITY,        amount:  6 }, { item: Items.TRANSOCEANIC_CHUNK,    amount:  6 }],
                    6:  [{ item: Items.GUIDE_TO_EQUITY,        amount:  9 }, { item: Items.TRANSOCEANIC_CHUNK,    amount:  9 }],
                    7:  [{ item: Items.PHILOSOPHIES_OF_EQUITY, amount:  4 }, { item: Items.XENOCHROMATIC_CRYSTAL, amount:  4 }, { item: Items.EVERAMBER, amount: 1 }], 
                    8:  [{ item: Items.PHILOSOPHIES_OF_EQUITY, amount:  6 }, { item: Items.XENOCHROMATIC_CRYSTAL, amount:  6 }, { item: Items.EVERAMBER, amount: 1 }], 
                    9:  [{ item: Items.PHILOSOPHIES_OF_EQUITY, amount: 12 }, { item: Items.XENOCHROMATIC_CRYSTAL, amount:  9 }, { item: Items.EVERAMBER, amount: 2 }], 
                    10: [{ item: Items.PHILOSOPHIES_OF_EQUITY, amount: 16 }, { item: Items.XENOCHROMATIC_CRYSTAL, amount: 12 }, { item: Items.EVERAMBER, amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_EQUITY,    amount:  3 }, { item: Items.TRANSOCEANIC_PEARL,    amount:  6 }], 
                    3:  [{ item: Items.GUIDE_TO_EQUITY,        amount:  2 }, { item: Items.TRANSOCEANIC_CHUNK,    amount:  3 }], 
                    4:  [{ item: Items.GUIDE_TO_EQUITY,        amount:  4 }, { item: Items.TRANSOCEANIC_CHUNK,    amount:  4 }], 
                    5:  [{ item: Items.GUIDE_TO_EQUITY,        amount:  6 }, { item: Items.TRANSOCEANIC_CHUNK,    amount:  6 }],
                    6:  [{ item: Items.GUIDE_TO_EQUITY,        amount:  9 }, { item: Items.TRANSOCEANIC_CHUNK,    amount:  9 }],
                    7:  [{ item: Items.PHILOSOPHIES_OF_EQUITY, amount:  4 }, { item: Items.XENOCHROMATIC_CRYSTAL, amount:  4 }, { item: Items.EVERAMBER, amount: 1 }], 
                    8:  [{ item: Items.PHILOSOPHIES_OF_EQUITY, amount:  6 }, { item: Items.XENOCHROMATIC_CRYSTAL, amount:  6 }, { item: Items.EVERAMBER, amount: 1 }], 
                    9:  [{ item: Items.PHILOSOPHIES_OF_EQUITY, amount: 12 }, { item: Items.XENOCHROMATIC_CRYSTAL, amount:  9 }, { item: Items.EVERAMBER, amount: 2 }], 
                    10: [{ item: Items.PHILOSOPHIES_OF_EQUITY, amount: 16 }, { item: Items.XENOCHROMATIC_CRYSTAL, amount: 12 }, { item: Items.EVERAMBER, amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_EQUITY,    amount:  3 }, { item: Items.TRANSOCEANIC_PEARL,    amount:  6 }], 
                    3:  [{ item: Items.GUIDE_TO_EQUITY,        amount:  2 }, { item: Items.TRANSOCEANIC_CHUNK,    amount:  3 }], 
                    4:  [{ item: Items.GUIDE_TO_EQUITY,        amount:  4 }, { item: Items.TRANSOCEANIC_CHUNK,    amount:  4 }], 
                    5:  [{ item: Items.GUIDE_TO_EQUITY,        amount:  6 }, { item: Items.TRANSOCEANIC_CHUNK,    amount:  6 }],
                    6:  [{ item: Items.GUIDE_TO_EQUITY,        amount:  9 }, { item: Items.TRANSOCEANIC_CHUNK,    amount:  9 }],
                    7:  [{ item: Items.PHILOSOPHIES_OF_EQUITY, amount:  4 }, { item: Items.XENOCHROMATIC_CRYSTAL, amount:  4 }, { item: Items.EVERAMBER, amount: 1 }], 
                    8:  [{ item: Items.PHILOSOPHIES_OF_EQUITY, amount:  6 }, { item: Items.XENOCHROMATIC_CRYSTAL, amount:  6 }, { item: Items.EVERAMBER, amount: 1 }], 
                    9:  [{ item: Items.PHILOSOPHIES_OF_EQUITY, amount: 12 }, { item: Items.XENOCHROMATIC_CRYSTAL, amount:  9 }, { item: Items.EVERAMBER, amount: 2 }], 
                    10: [{ item: Items.PHILOSOPHIES_OF_EQUITY, amount: 16 }, { item: Items.XENOCHROMATIC_CRYSTAL, amount: 12 }, { item: Items.EVERAMBER, amount: 2 }] 
                }}
            }
        }]
    });
    static WRIOTHESLEY        = new Character({ name: "WRIOTHESLEY",          
        level: { materials: { 
            "20+": [{ item: Items._SLIVER,   amount: 1 },                                      { item: Items.UNKNOWN, amount:  3 }, { item: Items.UNKNOWN, amount:  3 }], 
            "40+": [{ item: Items._FRAGMENT, amount: 3 }, { item: Items.UNKNOWN, amount:  2 }, { item: Items.UNKNOWN, amount: 10 }, { item: Items.UNKNOWN, amount: 15 }], 
            "50+": [{ item: Items._FRAGMENT, amount: 6 }, { item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 12 }], 
            "60+": [{ item: Items._CHUNK,    amount: 3 }, { item: Items.UNKNOWN, amount:  8 }, { item: Items.UNKNOWN, amount: 30 }, { item: Items.UNKNOWN, amount: 18 }], 
            "70+": [{ item: Items._CHUNK,    amount: 6 }, { item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 45 }, { item: Items.UNKNOWN, amount: 12 }], 
            "80+": [{ item: Items._GEMSTONE, amount: 6 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 60 }, { item: Items.UNKNOWN, amount: 24 }]
        }}, 
        elements: [{
            element: Elements.CRYO,
            talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}
            }
        }]
    });
    static CHARLOTTE          = new Character({ name: "CHARLOTTE",          
        level: { materials: { 
            "20+": [{ item: Items._SLIVER,   amount: 1 },                             { item: Items.UNKNOWN, amount:  3 }, { item: Items.UNKNOWN, amount:  3 }], 
            "40+": [{ item: Items._FRAGMENT, amount: 3 }, { item: Items.UNKNOWN, amount:  2 }, { item: Items.UNKNOWN, amount: 10 }, { item: Items.UNKNOWN, amount: 15 }], 
            "50+": [{ item: Items._FRAGMENT, amount: 6 }, { item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 12 }], 
            "60+": [{ item: Items._CHUNK,    amount: 3 }, { item: Items.UNKNOWN, amount:  8 }, { item: Items.UNKNOWN, amount: 30 }, { item: Items.UNKNOWN, amount: 18 }], 
            "70+": [{ item: Items._CHUNK,    amount: 6 }, { item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 45 }, { item: Items.UNKNOWN, amount: 12 }], 
            "80+": [{ item: Items._GEMSTONE, amount: 6 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 60 }, { item: Items.UNKNOWN, amount: 24 }]
        }}, 
        elements: [{
            element: Elements.CRYO,
            talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}
            }
        }]
    });
    static FURINA             = new Character({ name: "FURINA",             
        level: { materials : {
            "20+": [{ item: Items.VARUNADA_LAZURITE_SLIVER,   amount: 1 },                                                             { item: Items.LAKELIGHT_LILY, amount:  3 }, { item: Items.WHOPPERFLOWER_NECTAR, amount:  3 }],
            "40+": [{ item: Items.VARUNADA_LAZURITE_FRAGMENT, amount: 3 },                                                             { item: Items.LAKELIGHT_LILY, amount: 10 }, { item: Items.WHOPPERFLOWER_NECTAR, amount: 15 }],
            "50+": [{ item: Items.VARUNADA_LAZURITE_FRAGMENT, amount: 6 }, { item: Items.WATER_THAT_FAILED_TO_TRANSCEND, amount:  4 }, { item: Items.LAKELIGHT_LILY, amount: 20 }, { item: Items.SHIMMERING_NECTAR,    amount: 12 }],
            "60+": [{ item: Items.VARUNADA_LAZURITE_CHUNK,    amount: 3 }, { item: Items.WATER_THAT_FAILED_TO_TRANSCEND, amount:  8 }, { item: Items.LAKELIGHT_LILY, amount: 30 }, { item: Items.SHIMMERING_NECTAR,    amount: 18 }],
            "70+": [{ item: Items.VARUNADA_LAZURITE_CHUNK,    amount: 9 }, { item: Items.WATER_THAT_FAILED_TO_TRANSCEND, amount: 12 }, { item: Items.LAKELIGHT_LILY, amount: 45 }, { item: Items.ENERGY_NECTAR,        amount: 12 }],
            "80+": [{ item: Items.VARUNADA_LAZURITE_GEMSTONE, amount: 6 }, { item: Items.WATER_THAT_FAILED_TO_TRANSCEND, amount: 20 }, { item: Items.LAKELIGHT_LILY, amount: 60 }, { item: Items.ENERGY_NECTAR,        amount: 24 }],
        }},
        elements: [{ element: Elements.HYDRO, talents: {
            normal_attack: { min: 1, max: 10, materials: {
                 2: [],
                 3: [{ item: Items.GUIDE_TO_JUSTICE, amount: 2}, { item: Items.SHIMMERING_NECTAR, amount: 3 }],
                 4: [{ item: Items.GUIDE_TO_JUSTICE, amount: 4}, { item: Items.SHIMMERING_NECTAR, amount: 4 }],
                 5: [{ item: Items.GUIDE_TO_JUSTICE, amount: 6}, { item: Items.SHIMMERING_NECTAR, amount: 6 }],
                 6: [{ item: Items.GUIDE_TO_JUSTICE, amount: 9}, { item: Items.SHIMMERING_NECTAR, amount: 9 }],
                 7: [{ item: Items.PHILOSOPHIES_OF_JUSTICE, amount: 4}, { item: Items.ENERGY_NECTAR, amount: 4 }, { item: Items.LIGHTLESS_MASS, amount: 1 }],
                 8: [{ item: Items.PHILOSOPHIES_OF_JUSTICE, amount: 6}, { item: Items.ENERGY_NECTAR, amount: 6 }, { item: Items.LIGHTLESS_MASS, amount: 1 }],
                 9: [],
                10: []
            }},
            elemental_skill: { min: 1, max: 10, materials: {
                 2: [],
                 3: [{ item: Items.GUIDE_TO_JUSTICE, amount: 2}, { item: Items.SHIMMERING_NECTAR, amount: 3 }],
                 4: [{ item: Items.GUIDE_TO_JUSTICE, amount: 4}, { item: Items.SHIMMERING_NECTAR, amount: 4 }],
                 5: [{ item: Items.GUIDE_TO_JUSTICE, amount: 6}, { item: Items.SHIMMERING_NECTAR, amount: 6 }],
                 6: [{ item: Items.GUIDE_TO_JUSTICE, amount: 9}, { item: Items.SHIMMERING_NECTAR, amount: 9 }],
                 7: [{ item: Items.PHILOSOPHIES_OF_JUSTICE, amount: 4}, { item: Items.ENERGY_NECTAR, amount: 4 }, { item: Items.LIGHTLESS_MASS, amount: 1 }],
                 8: [{ item: Items.PHILOSOPHIES_OF_JUSTICE, amount: 6}, { item: Items.ENERGY_NECTAR, amount: 6 }, { item: Items.LIGHTLESS_MASS, amount: 1 }],
                 9: [],
                10: []
            }},
            elemental_burst: { min: 1, max: 10, materials: {
                 2: [],
                 3: [{ item: Items.GUIDE_TO_JUSTICE, amount: 2}, { item: Items.SHIMMERING_NECTAR, amount: 3 }],
                 4: [{ item: Items.GUIDE_TO_JUSTICE, amount: 4}, { item: Items.SHIMMERING_NECTAR, amount: 4 }],
                 5: [{ item: Items.GUIDE_TO_JUSTICE, amount: 6}, { item: Items.SHIMMERING_NECTAR, amount: 6 }],
                 6: [{ item: Items.GUIDE_TO_JUSTICE, amount: 9}, { item: Items.SHIMMERING_NECTAR, amount: 9 }],
                 7: [{ item: Items.PHILOSOPHIES_OF_JUSTICE, amount: 4}, { item: Items.ENERGY_NECTAR, amount: 4 }, { item: Items.LIGHTLESS_MASS, amount: 1 }],
                 8: [{ item: Items.PHILOSOPHIES_OF_JUSTICE, amount: 6}, { item: Items.ENERGY_NECTAR, amount: 6 }, { item: Items.LIGHTLESS_MASS, amount: 1 }],
                 9: [],
                10: []
            }}
        }}]
    })
    static NAVIA              = new Character({ name: "NAVIA",              
        level: { materials: { 
            "20+": [{ item: Items._SLIVER,   amount: 1 },                             { item: Items.UNKNOWN, amount:  3 }, { item: Items.UNKNOWN, amount:  3 }], 
            "40+": [{ item: Items._FRAGMENT, amount: 3 }, { item: Items.UNKNOWN, amount:  2 }, { item: Items.UNKNOWN, amount: 10 }, { item: Items.UNKNOWN, amount: 15 }], 
            "50+": [{ item: Items._FRAGMENT, amount: 6 }, { item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 12 }], 
            "60+": [{ item: Items._CHUNK,    amount: 3 }, { item: Items.UNKNOWN, amount:  8 }, { item: Items.UNKNOWN, amount: 30 }, { item: Items.UNKNOWN, amount: 18 }], 
            "70+": [{ item: Items._CHUNK,    amount: 6 }, { item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 45 }, { item: Items.UNKNOWN, amount: 12 }], 
            "80+": [{ item: Items._GEMSTONE, amount: 6 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 60 }, { item: Items.UNKNOWN, amount: 24 }]
        }}, 
        elements: [{
            element: Elements.CRYO,
            talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}
            }
        }]
    });
    static CHEVREUSE          = new Character({ name: "CHEVREUSE",          
        level: { materials: { 
            "20+": [{ item: Items._SLIVER,   amount: 1 },                             { item: Items.UNKNOWN, amount:  3 }, { item: Items.UNKNOWN, amount:  3 }], 
            "40+": [{ item: Items._FRAGMENT, amount: 3 }, { item: Items.UNKNOWN, amount:  2 }, { item: Items.UNKNOWN, amount: 10 }, { item: Items.UNKNOWN, amount: 15 }], 
            "50+": [{ item: Items._FRAGMENT, amount: 6 }, { item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 12 }], 
            "60+": [{ item: Items._CHUNK,    amount: 3 }, { item: Items.UNKNOWN, amount:  8 }, { item: Items.UNKNOWN, amount: 30 }, { item: Items.UNKNOWN, amount: 18 }], 
            "70+": [{ item: Items._CHUNK,    amount: 6 }, { item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 45 }, { item: Items.UNKNOWN, amount: 12 }], 
            "80+": [{ item: Items._GEMSTONE, amount: 6 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 60 }, { item: Items.UNKNOWN, amount: 24 }]
        }}, 
        elements: [{
            element: Elements.CRYO,
            talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}
            }
        }]
    });
    static GAMING             = new Character({ name: "GAMING",             /* FINISHED */
        level: { materials: { 
            "20+": [{ item: Items.AGNIDUS_AGATE_SLIVER,   amount: 1 },                                                      { item: Items.STARCONCH, amount:  3 }, { item: Items.SLIME_CONDENSATE,  amount:  3 }], 
            "40+": [{ item: Items.AGNIDUS_AGATE_FRAGMENT, amount: 3 }, { item: Items["EMPEROR'S_RESOLUTION"], amount:  2 }, { item: Items.STARCONCH, amount: 10 }, { item: Items.SLIME_CONDENSATE,  amount: 15 }], 
            "50+": [{ item: Items.AGNIDUS_AGATE_FRAGMENT, amount: 6 }, { item: Items["EMPEROR'S_RESOLUTION"], amount:  4 }, { item: Items.STARCONCH, amount: 20 }, { item: Items.SLIME_SECRETIONS,  amount: 12 }], 
            "60+": [{ item: Items.AGNIDUS_AGATE_CHUNK,    amount: 3 }, { item: Items["EMPEROR'S_RESOLUTION"], amount:  8 }, { item: Items.STARCONCH, amount: 30 }, { item: Items.SLIME_SECRETIONS,  amount: 18 }], 
            "70+": [{ item: Items.AGNIDUS_AGATE_CHUNK,    amount: 6 }, { item: Items["EMPEROR'S_RESOLUTION"], amount: 12 }, { item: Items.STARCONCH, amount: 45 }, { item: Items.SLIME_CONCENTRATE, amount: 12 }], 
            "80+": [{ item: Items.AGNIDUS_AGATE_GEMSTONE, amount: 6 }, { item: Items["EMPEROR'S_RESOLUTION"], amount: 20 }, { item: Items.STARCONCH, amount: 60 }, { item: Items.SLIME_CONCENTRATE, amount: 24 }]
        }}, 
        elements: [
            { element: Elements.PYRO, talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_PROSPERITY,    amount:  3 }, {item: Items.SLIME_CONDENSATE,  amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_PROSPERITY,        amount:  2 }, {item: Items.SLIME_SECRETIONS,  amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_PROSPERITY,        amount:  4 }, {item: Items.SLIME_SECRETIONS,  amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_PROSPERITY,        amount:  6 }, {item: Items.SLIME_SECRETIONS,  amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_PROSPERITY,        amount:  9 }, {item: Items.SLIME_SECRETIONS,  amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_PROSPERITY, amount:  4 }, {item: Items.SLIME_CONCENTRATE, amount:  4 }, { item: Items.LIGHTLESS_MASS, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_PROSPERITY, amount:  6 }, {item: Items.SLIME_CONCENTRATE, amount:  6 }, { item: Items.LIGHTLESS_MASS, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_PROSPERITY, amount: 12 }, {item: Items.SLIME_CONCENTRATE, amount:  9 }, { item: Items.LIGHTLESS_MASS, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_PROSPERITY, amount: 16 }, {item: Items.SLIME_CONCENTRATE, amount: 12 }, { item: Items.LIGHTLESS_MASS, amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_PROSPERITY,    amount:  3 }, {item: Items.SLIME_CONDENSATE,  amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_PROSPERITY,        amount:  2 }, {item: Items.SLIME_SECRETIONS,  amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_PROSPERITY,        amount:  4 }, {item: Items.SLIME_SECRETIONS,  amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_PROSPERITY,        amount:  6 }, {item: Items.SLIME_SECRETIONS,  amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_PROSPERITY,        amount:  9 }, {item: Items.SLIME_SECRETIONS,  amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_PROSPERITY, amount:  4 }, {item: Items.SLIME_CONCENTRATE, amount:  4 }, { item: Items.LIGHTLESS_MASS, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_PROSPERITY, amount:  6 }, {item: Items.SLIME_CONCENTRATE, amount:  6 }, { item: Items.LIGHTLESS_MASS, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_PROSPERITY, amount: 12 }, {item: Items.SLIME_CONCENTRATE, amount:  9 }, { item: Items.LIGHTLESS_MASS, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_PROSPERITY, amount: 16 }, {item: Items.SLIME_CONCENTRATE, amount: 12 }, { item: Items.LIGHTLESS_MASS, amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_PROSPERITY,    amount:  3 }, {item: Items.SLIME_CONDENSATE,  amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_PROSPERITY,        amount:  2 }, {item: Items.SLIME_SECRETIONS,  amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_PROSPERITY,        amount:  4 }, {item: Items.SLIME_SECRETIONS,  amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_PROSPERITY,        amount:  6 }, {item: Items.SLIME_SECRETIONS,  amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_PROSPERITY,        amount:  9 }, {item: Items.SLIME_SECRETIONS,  amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_PROSPERITY, amount:  4 }, {item: Items.SLIME_CONCENTRATE, amount:  4 }, { item: Items.LIGHTLESS_MASS, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_PROSPERITY, amount:  6 }, {item: Items.SLIME_CONCENTRATE, amount:  6 }, { item: Items.LIGHTLESS_MASS, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_PROSPERITY, amount: 12 }, {item: Items.SLIME_CONCENTRATE, amount:  9 }, { item: Items.LIGHTLESS_MASS, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_PROSPERITY, amount: 16 }, {item: Items.SLIME_CONCENTRATE, amount: 12 }, { item: Items.LIGHTLESS_MASS, amount: 2 }] 
                }}
            }}
        ]
    });
    static XIANYUN            = new Character({ name: "XIANYUN",            /* FINISHED */
        level: { materials: { 
            "20+": [{ item: Items.VAYUDA_TURQUOISE_SLIVER,   amount: 1 },                                              { item: Items.CLEARWATER_JADE, amount:  3 }, { item: Items.DIVINING_SCROLL,        amount:  3 }], 
            "40+": [{ item: Items.VAYUDA_TURQUOISE_FRAGMENT, amount: 3 }, { item: Items.CLOUDSEAM_SCALE, amount:  2 }, { item: Items.CLEARWATER_JADE, amount: 10 }, { item: Items.DIVINING_SCROLL,        amount: 15 }], 
            "50+": [{ item: Items.VAYUDA_TURQUOISE_FRAGMENT, amount: 6 }, { item: Items.CLOUDSEAM_SCALE, amount:  4 }, { item: Items.CLEARWATER_JADE, amount: 20 }, { item: Items.SEALED_SCROLL,          amount: 12 }], 
            "60+": [{ item: Items.VAYUDA_TURQUOISE_CHUNK,    amount: 3 }, { item: Items.CLOUDSEAM_SCALE, amount:  8 }, { item: Items.CLEARWATER_JADE, amount: 30 }, { item: Items.SEALED_SCROLL,          amount: 18 }], 
            "70+": [{ item: Items.VAYUDA_TURQUOISE_CHUNK,    amount: 6 }, { item: Items.CLOUDSEAM_SCALE, amount: 12 }, { item: Items.CLEARWATER_JADE, amount: 45 }, { item: Items.FORBIDDEN_CURSE_SCROLL, amount: 12 }], 
            "80+": [{ item: Items.VAYUDA_TURQUOISE_GEMSTONE, amount: 6 }, { item: Items.CLOUDSEAM_SCALE, amount: 20 }, { item: Items.CLEARWATER_JADE, amount: 60 }, { item: Items.FORBIDDEN_CURSE_SCROLL, amount: 24 }]
        }}, 
        elements: [
            { element: Elements.ANEMO, talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_GOLD,    amount:  3 }, {item: Items.DIVINING_SCROLL,        amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_GOLD,        amount:  2 }, {item: Items.SEALED_SCROLL,          amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_GOLD,        amount:  4 }, {item: Items.SEALED_SCROLL,          amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_GOLD,        amount:  6 }, {item: Items.SEALED_SCROLL,          amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_GOLD,        amount:  9 }, {item: Items.SEALED_SCROLL,          amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_GOLD, amount:  4 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount:  4 }, { item: Items.LIGHTLESS_EYE_OF_THE_MAELSTROM, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_GOLD, amount:  6 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount:  6 }, { item: Items.LIGHTLESS_EYE_OF_THE_MAELSTROM, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_GOLD, amount: 12 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount:  9 }, { item: Items.LIGHTLESS_EYE_OF_THE_MAELSTROM, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_GOLD, amount: 16 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount: 12 }, { item: Items.LIGHTLESS_EYE_OF_THE_MAELSTROM, amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_GOLD,    amount:  3 }, {item: Items.DIVINING_SCROLL,        amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_GOLD,        amount:  2 }, {item: Items.SEALED_SCROLL,          amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_GOLD,        amount:  4 }, {item: Items.SEALED_SCROLL,          amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_GOLD,        amount:  6 }, {item: Items.SEALED_SCROLL,          amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_GOLD,        amount:  9 }, {item: Items.SEALED_SCROLL,          amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_GOLD, amount:  4 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount:  4 }, { item: Items.LIGHTLESS_EYE_OF_THE_MAELSTROM, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_GOLD, amount:  6 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount:  6 }, { item: Items.LIGHTLESS_EYE_OF_THE_MAELSTROM, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_GOLD, amount: 12 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount:  9 }, { item: Items.LIGHTLESS_EYE_OF_THE_MAELSTROM, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_GOLD, amount: 16 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount: 12 }, { item: Items.LIGHTLESS_EYE_OF_THE_MAELSTROM, amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_GOLD,    amount:  3 }, {item: Items.DIVINING_SCROLL,        amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_GOLD,        amount:  2 }, {item: Items.SEALED_SCROLL,          amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_GOLD,        amount:  4 }, {item: Items.SEALED_SCROLL,          amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_GOLD,        amount:  6 }, {item: Items.SEALED_SCROLL,          amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_GOLD,        amount:  9 }, {item: Items.SEALED_SCROLL,          amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_GOLD, amount:  4 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount:  4 }, { item: Items.LIGHTLESS_EYE_OF_THE_MAELSTROM, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_GOLD, amount:  6 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount:  6 }, { item: Items.LIGHTLESS_EYE_OF_THE_MAELSTROM, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_GOLD, amount: 12 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount:  9 }, { item: Items.LIGHTLESS_EYE_OF_THE_MAELSTROM, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_GOLD, amount: 16 }, {item: Items.FORBIDDEN_CURSE_SCROLL, amount: 12 }, { item: Items.LIGHTLESS_EYE_OF_THE_MAELSTROM, amount: 2 }] 
                }}
            }}
        ]
    });
    static CHIORI             = new Character({ name: "CHIORI",             
        level: { materials: { 
            "20+": [{ item: Items._SLIVER,   amount: 1 },                             { item: Items.UNKNOWN, amount:  3 }, { item: Items.UNKNOWN, amount:  3 }], 
            "40+": [{ item: Items._FRAGMENT, amount: 3 }, { item: Items.UNKNOWN, amount:  2 }, { item: Items.UNKNOWN, amount: 10 }, { item: Items.UNKNOWN, amount: 15 }], 
            "50+": [{ item: Items._FRAGMENT, amount: 6 }, { item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 12 }], 
            "60+": [{ item: Items._CHUNK,    amount: 3 }, { item: Items.UNKNOWN, amount:  8 }, { item: Items.UNKNOWN, amount: 30 }, { item: Items.UNKNOWN, amount: 18 }], 
            "70+": [{ item: Items._CHUNK,    amount: 6 }, { item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 45 }, { item: Items.UNKNOWN, amount: 12 }], 
            "80+": [{ item: Items._GEMSTONE, amount: 6 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 60 }, { item: Items.UNKNOWN, amount: 24 }]
        }}, 
        elements: [{
            element: Elements.CRYO,
            talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}
            }
        }]
    });
    static ARLECCHINO         = new Character({ name: "ARLECCHINO",         
        level: { materials: { 
            "20+": [{ item: Items._SLIVER,   amount: 1 },                             { item: Items.UNKNOWN, amount:  3 }, { item: Items.UNKNOWN, amount:  3 }], 
            "40+": [{ item: Items._FRAGMENT, amount: 3 }, { item: Items.UNKNOWN, amount:  2 }, { item: Items.UNKNOWN, amount: 10 }, { item: Items.UNKNOWN, amount: 15 }], 
            "50+": [{ item: Items._FRAGMENT, amount: 6 }, { item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 12 }], 
            "60+": [{ item: Items._CHUNK,    amount: 3 }, { item: Items.UNKNOWN, amount:  8 }, { item: Items.UNKNOWN, amount: 30 }, { item: Items.UNKNOWN, amount: 18 }], 
            "70+": [{ item: Items._CHUNK,    amount: 6 }, { item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 45 }, { item: Items.UNKNOWN, amount: 12 }], 
            "80+": [{ item: Items._GEMSTONE, amount: 6 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 60 }, { item: Items.UNKNOWN, amount: 24 }]
        }}, 
        elements: [{
            element: Elements.CRYO,
            talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}
            }
        }]
    });
    static SETHOS             = new Character({ name: "SETHOS",             
        level: { materials: { 
            "20+": [{ item: Items.VAJRADA_AMETHYST_SLIVER,   amount: 1 },                             { item: Items.UNKNOWN, amount:  3 }, { item: Items.UNKNOWN, amount:  3 }], 
            "40+": [{ item: Items.VAJRADA_AMETHYST_FRAGMENT, amount: 3 }, { item: Items.UNKNOWN, amount:  2 }, { item: Items.UNKNOWN, amount: 10 }, { item: Items.UNKNOWN, amount: 15 }], 
            "50+": [{ item: Items.VAJRADA_AMETHYST_FRAGMENT, amount: 6 }, { item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 12 }], 
            "60+": [{ item: Items.VAJRADA_AMETHYST_CHUNK,    amount: 3 }, { item: Items.UNKNOWN, amount:  8 }, { item: Items.UNKNOWN, amount: 30 }, { item: Items.UNKNOWN, amount: 18 }], 
            "70+": [{ item: Items.VAJRADA_AMETHYST_CHUNK,    amount: 6 }, { item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 45 }, { item: Items.UNKNOWN, amount: 12 }], 
            "80+": [{ item: Items.VAJRADA_AMETHYST_GEMSTONE, amount: 6 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 60 }, { item: Items.UNKNOWN, amount: 24 }]
        }}, 
        elements: [{
            element: Elements.CRYO,
            talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}
            }
        }]
    });
    static CLORINDE           = new Character({ name: "CLORINDE",           
        level: { materials: { 
            "20+": [{ item: Items.VAJRADA_AMETHYST_SLIVER,   amount: 1 },                             { item: Items.UNKNOWN, amount:  3 }, { item: Items.UNKNOWN, amount:  3 }], 
            "40+": [{ item: Items.VAJRADA_AMETHYST_FRAGMENT, amount: 3 }, { item: Items.UNKNOWN, amount:  2 }, { item: Items.UNKNOWN, amount: 10 }, { item: Items.UNKNOWN, amount: 15 }], 
            "50+": [{ item: Items.VAJRADA_AMETHYST_FRAGMENT, amount: 6 }, { item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 12 }], 
            "60+": [{ item: Items.VAJRADA_AMETHYST_CHUNK,    amount: 3 }, { item: Items.UNKNOWN, amount:  8 }, { item: Items.UNKNOWN, amount: 30 }, { item: Items.UNKNOWN, amount: 18 }], 
            "70+": [{ item: Items.VAJRADA_AMETHYST_CHUNK,    amount: 6 }, { item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 45 }, { item: Items.UNKNOWN, amount: 12 }], 
            "80+": [{ item: Items.VAJRADA_AMETHYST_GEMSTONE, amount: 6 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 60 }, { item: Items.UNKNOWN, amount: 24 }]
        }}, 
        elements: [{
            element: Elements.CRYO,
            talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}
            }
        }]
    });
    static SIGEWINNE          = new Character({ name: "SIGEWINNE",          
        level: { materials: { 
            "20+": [{ item: Items._SLIVER,   amount: 1 },                             { item: Items.UNKNOWN, amount:  3 }, { item: Items.UNKNOWN, amount:  3 }], 
            "40+": [{ item: Items._FRAGMENT, amount: 3 }, { item: Items.UNKNOWN, amount:  2 }, { item: Items.UNKNOWN, amount: 10 }, { item: Items.UNKNOWN, amount: 15 }], 
            "50+": [{ item: Items._FRAGMENT, amount: 6 }, { item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 12 }], 
            "60+": [{ item: Items._CHUNK,    amount: 3 }, { item: Items.UNKNOWN, amount:  8 }, { item: Items.UNKNOWN, amount: 30 }, { item: Items.UNKNOWN, amount: 18 }], 
            "70+": [{ item: Items._CHUNK,    amount: 6 }, { item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 45 }, { item: Items.UNKNOWN, amount: 12 }], 
            "80+": [{ item: Items._GEMSTONE, amount: 6 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 60 }, { item: Items.UNKNOWN, amount: 24 }]
        }}, 
        elements: [{
            element: Elements.CRYO,
            talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}
            }
        }]
    });
    static EMILIE             = new Character({ name: "EMILIE",             
        level: { materials: { 
            "20+": [{ item: Items._SLIVER,   amount: 1 },                             { item: Items.UNKNOWN, amount:  3 }, { item: Items.UNKNOWN, amount:  3 }], 
            "40+": [{ item: Items._FRAGMENT, amount: 3 }, { item: Items.UNKNOWN, amount:  2 }, { item: Items.UNKNOWN, amount: 10 }, { item: Items.UNKNOWN, amount: 15 }], 
            "50+": [{ item: Items._FRAGMENT, amount: 6 }, { item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 12 }], 
            "60+": [{ item: Items._CHUNK,    amount: 3 }, { item: Items.UNKNOWN, amount:  8 }, { item: Items.UNKNOWN, amount: 30 }, { item: Items.UNKNOWN, amount: 18 }], 
            "70+": [{ item: Items._CHUNK,    amount: 6 }, { item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 45 }, { item: Items.UNKNOWN, amount: 12 }], 
            "80+": [{ item: Items._GEMSTONE, amount: 6 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 60 }, { item: Items.UNKNOWN, amount: 24 }]
        }}, 
        elements: [{
            element: Elements.CRYO,
            talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}
            }
        }]
    });
    static KACHINA            = new Character({ name: "KACHINA",            
        level: { materials: { 
            "20+": [{ item: Items._SLIVER,   amount: 1 },                             { item: Items.UNKNOWN, amount:  3 }, { item: Items.UNKNOWN, amount:  3 }], 
            "40+": [{ item: Items._FRAGMENT, amount: 3 }, { item: Items.UNKNOWN, amount:  2 }, { item: Items.UNKNOWN, amount: 10 }, { item: Items.UNKNOWN, amount: 15 }], 
            "50+": [{ item: Items._FRAGMENT, amount: 6 }, { item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 12 }], 
            "60+": [{ item: Items._CHUNK,    amount: 3 }, { item: Items.UNKNOWN, amount:  8 }, { item: Items.UNKNOWN, amount: 30 }, { item: Items.UNKNOWN, amount: 18 }], 
            "70+": [{ item: Items._CHUNK,    amount: 6 }, { item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 45 }, { item: Items.UNKNOWN, amount: 12 }], 
            "80+": [{ item: Items._GEMSTONE, amount: 6 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 60 }, { item: Items.UNKNOWN, amount: 24 }]
        }}, 
        elements: [{
            element: Elements.CRYO,
            talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}
            }
        }]
    });
    static MUALANI            = new Character({ name: "MUALANI",            
        level: { materials: { 
            "20+": [{ item: Items._SLIVER,   amount: 1 },                             { item: Items.UNKNOWN, amount:  3 }, { item: Items.UNKNOWN, amount:  3 }], 
            "40+": [{ item: Items._FRAGMENT, amount: 3 }, { item: Items.UNKNOWN, amount:  2 }, { item: Items.UNKNOWN, amount: 10 }, { item: Items.UNKNOWN, amount: 15 }], 
            "50+": [{ item: Items._FRAGMENT, amount: 6 }, { item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 12 }], 
            "60+": [{ item: Items._CHUNK,    amount: 3 }, { item: Items.UNKNOWN, amount:  8 }, { item: Items.UNKNOWN, amount: 30 }, { item: Items.UNKNOWN, amount: 18 }], 
            "70+": [{ item: Items._CHUNK,    amount: 6 }, { item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 45 }, { item: Items.UNKNOWN, amount: 12 }], 
            "80+": [{ item: Items._GEMSTONE, amount: 6 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 60 }, { item: Items.UNKNOWN, amount: 24 }]
        }}, 
        elements: [{
            element: Elements.CRYO,
            talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}
            }
        }]
    });
    static KINICH             = new Character({ name: "KINICH",             
        level: { materials: { 
            "20+": [{ item: Items._SLIVER,   amount: 1 },                             { item: Items.UNKNOWN, amount:  3 }, { item: Items.UNKNOWN, amount:  3 }], 
            "40+": [{ item: Items._FRAGMENT, amount: 3 }, { item: Items.UNKNOWN, amount:  2 }, { item: Items.UNKNOWN, amount: 10 }, { item: Items.UNKNOWN, amount: 15 }], 
            "50+": [{ item: Items._FRAGMENT, amount: 6 }, { item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 12 }], 
            "60+": [{ item: Items._CHUNK,    amount: 3 }, { item: Items.UNKNOWN, amount:  8 }, { item: Items.UNKNOWN, amount: 30 }, { item: Items.UNKNOWN, amount: 18 }], 
            "70+": [{ item: Items._CHUNK,    amount: 6 }, { item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 45 }, { item: Items.UNKNOWN, amount: 12 }], 
            "80+": [{ item: Items._GEMSTONE, amount: 6 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 60 }, { item: Items.UNKNOWN, amount: 24 }]
        }}, 
        elements: [{
            element: Elements.CRYO,
            talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}
            }
        }]
    });
    static XILONEN            = new Character({ name: "XILONEN",            
        level: { materials: { 
            "20+": [{ item: Items._SLIVER,   amount: 1 },                             { item: Items.UNKNOWN, amount:  3 }, { item: Items.UNKNOWN, amount:  3 }], 
            "40+": [{ item: Items._FRAGMENT, amount: 3 }, { item: Items.UNKNOWN, amount:  2 }, { item: Items.UNKNOWN, amount: 10 }, { item: Items.UNKNOWN, amount: 15 }], 
            "50+": [{ item: Items._FRAGMENT, amount: 6 }, { item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 12 }], 
            "60+": [{ item: Items._CHUNK,    amount: 3 }, { item: Items.UNKNOWN, amount:  8 }, { item: Items.UNKNOWN, amount: 30 }, { item: Items.UNKNOWN, amount: 18 }], 
            "70+": [{ item: Items._CHUNK,    amount: 6 }, { item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 45 }, { item: Items.UNKNOWN, amount: 12 }], 
            "80+": [{ item: Items._GEMSTONE, amount: 6 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 60 }, { item: Items.UNKNOWN, amount: 24 }]
        }}, 
        elements: [{
            element: Elements.CRYO,
            talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}
            }
        }]
    });
    static ORORON             = new Character({ name: "ORORON",             /* FINISHED */
        level: { materials: {
            "20+": [{ item: Items.VAJRADA_AMETHYST_SLIVER,   amount: 1 },                                                           { item: Items.GLOWING_HORNSHROOM, amount:  3 }, { item: Items.JUVENILE_FANG,    amount:  3 }],
            "40+": [{ item: Items.VAJRADA_AMETHYST_FRAGMENT, amount: 3 }, { item: Items.MARK_OF_THE_BINDING_BLEESING, amount:  2 }, { item: Items.GLOWING_HORNSHROOM, amount: 10 }, { item: Items.JUVENILE_FANG,    amount: 15 }],
            "50+": [{ item: Items.VAJRADA_AMETHYST_FRAGMENT, amount: 6 }, { item: Items.MARK_OF_THE_BINDING_BLEESING, amount:  4 }, { item: Items.GLOWING_HORNSHROOM, amount: 20 }, { item: Items.SEASONED_FANG,    amount: 12 }],
            "60+": [{ item: Items.VAJRADA_AMETHYST_CHUNK,    amount: 3 }, { item: Items.MARK_OF_THE_BINDING_BLEESING, amount:  8 }, { item: Items.GLOWING_HORNSHROOM, amount: 30 }, { item: Items.SEASONED_FANG,    amount: 18 }],
            "70+": [{ item: Items.VAJRADA_AMETHYST_CHUNK,    amount: 6 }, { item: Items.MARK_OF_THE_BINDING_BLEESING, amount: 12 }, { item: Items.GLOWING_HORNSHROOM, amount: 45 }, { item: Items["TYRANT'S_FANG"], amount: 12 }],
            "80+": [{ item: Items.VAJRADA_AMETHYST_GEMSTONE, amount: 6 }, { item: Items.MARK_OF_THE_BINDING_BLEESING, amount: 20 }, { item: Items.GLOWING_HORNSHROOM, amount: 60 }, { item: Items["TYRANT'S_FANG"], amount: 24 }],
        }},
        elements: [
            { element: Elements.ELECTRO, talents: {
                normal_attack: { min: 1, max: 10, materials: {
                    2:  [{ item: Items.TEACHINGS_OF_KINDLING,    amount:  3 }, { item: Items.JUVENILE_FANG,    amount:  6 }],
                    3:  [{ item: Items.GUIDE_TO_KINDLING,        amount:  2 }, { item: Items.SEASONED_FANG,    amount:  3 }],
                    4:  [{ item: Items.GUIDE_TO_KINDLING,        amount:  4 }, { item: Items.SEASONED_FANG,    amount:  4 }],
                    5:  [{ item: Items.GUIDE_TO_KINDLING,        amount:  6 }, { item: Items.SEASONED_FANG,    amount:  6 }],
                    6:  [{ item: Items.GUIDE_TO_KINDLING,        amount:  9 }, { item: Items.SEASONED_FANG,    amount:  9 }],
                    7:  [{ item: Items.PHILOSOPHIES_OF_KINDLING, amount:  4 }, { item: Items["TYRANT'S_FANG"], amount:  4 }, { item: Items.LIGHTLESS_SILK_STRING, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_KINDLING, amount:  6 }, { item: Items["TYRANT'S_FANG"], amount:  6 }, { item: Items.LIGHTLESS_SILK_STRING, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_KINDLING, amount: 12 }, { item: Items["TYRANT'S_FANG"], amount:  9 }, { item: Items.LIGHTLESS_SILK_STRING, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_KINDLING, amount: 16 }, { item: Items["TYRANT'S_FANG"], amount: 12 }, { item: Items.LIGHTLESS_SILK_STRING, amount: 2 }]
                }},
                elemental_skill: { min: 1, max: 10, materials: {
                    2:  [{ item: Items.TEACHINGS_OF_KINDLING,    amount:  3 }, { item: Items.JUVENILE_FANG,    amount:  6 }],
                    3:  [{ item: Items.GUIDE_TO_KINDLING,        amount:  2 }, { item: Items.SEASONED_FANG,    amount:  3 }],
                    4:  [{ item: Items.GUIDE_TO_KINDLING,        amount:  4 }, { item: Items.SEASONED_FANG,    amount:  4 }],
                    5:  [{ item: Items.GUIDE_TO_KINDLING,        amount:  6 }, { item: Items.SEASONED_FANG,    amount:  6 }],
                    6:  [{ item: Items.GUIDE_TO_KINDLING,        amount:  9 }, { item: Items.SEASONED_FANG,    amount:  9 }],
                    7:  [{ item: Items.PHILOSOPHIES_OF_KINDLING, amount:  4 }, { item: Items["TYRANT'S_FANG"], amount:  4 }, { item: Items.LIGHTLESS_SILK_STRING, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_KINDLING, amount:  6 }, { item: Items["TYRANT'S_FANG"], amount:  6 }, { item: Items.LIGHTLESS_SILK_STRING, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_KINDLING, amount: 12 }, { item: Items["TYRANT'S_FANG"], amount:  9 }, { item: Items.LIGHTLESS_SILK_STRING, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_KINDLING, amount: 16 }, { item: Items["TYRANT'S_FANG"], amount: 12 }, { item: Items.LIGHTLESS_SILK_STRING, amount: 2 }]
                }},
                elemental_burst: { min: 1, max: 10, materials: {
                    2:  [{ item: Items.TEACHINGS_OF_KINDLING,    amount:  3 }, { item: Items.JUVENILE_FANG,    amount:  6 }],
                    3:  [{ item: Items.GUIDE_TO_KINDLING,        amount:  2 }, { item: Items.SEASONED_FANG,    amount:  3 }],
                    4:  [{ item: Items.GUIDE_TO_KINDLING,        amount:  4 }, { item: Items.SEASONED_FANG,    amount:  4 }],
                    5:  [{ item: Items.GUIDE_TO_KINDLING,        amount:  6 }, { item: Items.SEASONED_FANG,    amount:  6 }],
                    6:  [{ item: Items.GUIDE_TO_KINDLING,        amount:  9 }, { item: Items.SEASONED_FANG,    amount:  9 }],
                    7:  [{ item: Items.PHILOSOPHIES_OF_KINDLING, amount:  4 }, { item: Items["TYRANT'S_FANG"], amount:  4 }, { item: Items.LIGHTLESS_SILK_STRING, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_KINDLING, amount:  6 }, { item: Items["TYRANT'S_FANG"], amount:  6 }, { item: Items.LIGHTLESS_SILK_STRING, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_KINDLING, amount: 12 }, { item: Items["TYRANT'S_FANG"], amount:  9 }, { item: Items.LIGHTLESS_SILK_STRING, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_KINDLING, amount: 16 }, { item: Items["TYRANT'S_FANG"], amount: 12 }, { item: Items.LIGHTLESS_SILK_STRING, amount: 2 }]
                }}
            }}
        ]
    });
    static CHASCA             = new Character({ name: "CHASCA",             
        level: { materials: { 
            "20+": [{ item: Items._SLIVER, amount: 1 },                                      { item: Items.UNKNOWN, amount:  3 }, { item: Items.UNKNOWN, amount:  3 }], 
            "40+": [{ item: Items._FRAGMENT, amount: 3 }, { item: Items.UNKNOWN, amount:  2 }, { item: Items.UNKNOWN, amount: 10 }, { item: Items.UNKNOWN, amount: 15 }], 
            "50+": [{ item: Items._FRAGMENT, amount: 6 }, { item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 12 }], 
            "60+": [{ item: Items._CHUNK, amount: 3 }, { item: Items.UNKNOWN, amount:  8 }, { item: Items.UNKNOWN, amount: 30 }, { item: Items.UNKNOWN, amount: 18 }], 
            "70+": [{ item: Items._CHUNK, amount: 9 }, { item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 45 }, { item: Items.UNKNOWN, amount: 12 }], 
            "80+": [{ item: Items._GEMSTONE, amount: 6 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 60 }, { item: Items.UNKNOWN, amount: 24 }]
        }}, 
        elements: [{
            element: Elements.CRYO,
            talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}
            }
        }]
    });
    static CITLALI            = new Character({ name: "CITLALI",            
        level: { materials: { 
            "20+": [{ item: Items._SLIVER,   amount: 1 },                             { item: Items.UNKNOWN, amount:  3 }, { item: Items.UNKNOWN, amount:  3 }], 
            "40+": [{ item: Items._FRAGMENT, amount: 3 }, { item: Items.UNKNOWN, amount:  2 }, { item: Items.UNKNOWN, amount: 10 }, { item: Items.UNKNOWN, amount: 15 }], 
            "50+": [{ item: Items._FRAGMENT, amount: 6 }, { item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 12 }], 
            "60+": [{ item: Items._CHUNK,    amount: 3 }, { item: Items.UNKNOWN, amount:  8 }, { item: Items.UNKNOWN, amount: 30 }, { item: Items.UNKNOWN, amount: 18 }], 
            "70+": [{ item: Items._CHUNK,    amount: 6 }, { item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 45 }, { item: Items.UNKNOWN, amount: 12 }], 
            "80+": [{ item: Items._GEMSTONE, amount: 6 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 60 }, { item: Items.UNKNOWN, amount: 24 }]
        }}, 
        elements: [{
            element: Elements.CRYO,
            talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}
            }
        }]
    });
    static MAVUIKA            = new Character({ name: "MAVUIKA",            
        level: { materials: { 
            "20+": [{ item: Items._SLIVER,   amount: 1 },                             { item: Items.UNKNOWN, amount:  3 }, { item: Items.UNKNOWN, amount:  3 }], 
            "40+": [{ item: Items._FRAGMENT, amount: 3 }, { item: Items.UNKNOWN, amount:  2 }, { item: Items.UNKNOWN, amount: 10 }, { item: Items.UNKNOWN, amount: 15 }], 
            "50+": [{ item: Items._FRAGMENT, amount: 6 }, { item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 12 }], 
            "60+": [{ item: Items._CHUNK,    amount: 3 }, { item: Items.UNKNOWN, amount:  8 }, { item: Items.UNKNOWN, amount: 30 }, { item: Items.UNKNOWN, amount: 18 }], 
            "70+": [{ item: Items._CHUNK,    amount: 6 }, { item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 45 }, { item: Items.UNKNOWN, amount: 12 }], 
            "80+": [{ item: Items._GEMSTONE, amount: 6 }, { item: Items.UNKNOWN, amount: 20 }, { item: Items.UNKNOWN, amount: 60 }, { item: Items.UNKNOWN, amount: 24 }]
        }}, 
        elements: [{
            element: Elements.CRYO,
            talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_,    amount:  3 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_,        amount:  2 }, {item: Items.UNKNOWN, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_,        amount:  4 }, {item: Items.UNKNOWN, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_,        amount:  6 }, {item: Items.UNKNOWN, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_,        amount:  9 }, {item: Items.UNKNOWN, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_, amount:  4 }, {item: Items.UNKNOWN, amount:  4 }, { item: Items.UNKNOWN, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_, amount:  6 }, {item: Items.UNKNOWN, amount:  6 }, { item: Items.UNKNOWN, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_, amount: 12 }, {item: Items.UNKNOWN, amount:  9 }, { item: Items.UNKNOWN, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_, amount: 16 }, {item: Items.UNKNOWN, amount: 12 }, { item: Items.UNKNOWN, amount: 2 }] 
                }}
            }
        }]
    });
    static LAN_YAN            = new Character({ name: "LAN_YAN",            /* FINISHED */
        level: { materials: { 
            "20+": [{ item: Items.VAYUDA_TURQUOISE_SLIVER,   amount: 1 },                                                                   { item: Items.CLEARWATER_JADE, amount:  3 }, { item: Items.WHOPPERFLOWER_NECTAR, amount:  3 }], 
            "40+": [{ item: Items.VAYUDA_TURQUOISE_FRAGMENT, amount: 3 }, { item: Items["GOLD-INSCRIBED_SECRET_SOURCE_CORE"], amount:  2 }, { item: Items.CLEARWATER_JADE, amount: 10 }, { item: Items.WHOPPERFLOWER_NECTAR, amount: 15 }], 
            "50+": [{ item: Items.VAYUDA_TURQUOISE_FRAGMENT, amount: 6 }, { item: Items["GOLD-INSCRIBED_SECRET_SOURCE_CORE"], amount:  4 }, { item: Items.CLEARWATER_JADE, amount: 20 }, { item: Items.SHIMMERING_NECTAR,    amount: 12 }], 
            "60+": [{ item: Items.VAYUDA_TURQUOISE_CHUNK,    amount: 3 }, { item: Items["GOLD-INSCRIBED_SECRET_SOURCE_CORE"], amount:  8 }, { item: Items.CLEARWATER_JADE, amount: 30 }, { item: Items.SHIMMERING_NECTAR,    amount: 18 }], 
            "70+": [{ item: Items.VAYUDA_TURQUOISE_CHUNK,    amount: 6 }, { item: Items["GOLD-INSCRIBED_SECRET_SOURCE_CORE"], amount: 12 }, { item: Items.CLEARWATER_JADE, amount: 45 }, { item: Items.ENERGY_NECTAR,        amount: 12 }], 
            "80+": [{ item: Items.VAYUDA_TURQUOISE_GEMSTONE, amount: 6 }, { item: Items["GOLD-INSCRIBED_SECRET_SOURCE_CORE"], amount: 20 }, { item: Items.CLEARWATER_JADE, amount: 60 }, { item: Items.ENERGY_NECTAR,        amount: 24 }]
        }}, 
        elements: [
            { element: Elements.CRYO, talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_DILIGENCE,    amount:  3 }, {item: Items.WHOPPERFLOWER_NECTAR, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_DILIGENCE,        amount:  2 }, {item: Items.SHIMMERING_NECTAR,    amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_DILIGENCE,        amount:  4 }, {item: Items.SHIMMERING_NECTAR,    amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_DILIGENCE,        amount:  6 }, {item: Items.SHIMMERING_NECTAR,    amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_DILIGENCE,        amount:  9 }, {item: Items.SHIMMERING_NECTAR,    amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_DILIGENCE, amount:  4 }, {item: Items.ENERGY_NECTAR,        amount:  4 }, { item: Items.ERODED_SUNFIRE, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_DILIGENCE, amount:  6 }, {item: Items.ENERGY_NECTAR,        amount:  6 }, { item: Items.ERODED_SUNFIRE, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_DILIGENCE, amount: 12 }, {item: Items.ENERGY_NECTAR,        amount:  9 }, { item: Items.ERODED_SUNFIRE, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_DILIGENCE, amount: 16 }, {item: Items.ENERGY_NECTAR,        amount: 12 }, { item: Items.ERODED_SUNFIRE, amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_DILIGENCE,    amount:  3 }, {item: Items.WHOPPERFLOWER_NECTAR, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_DILIGENCE,        amount:  2 }, {item: Items.SHIMMERING_NECTAR,    amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_DILIGENCE,        amount:  4 }, {item: Items.SHIMMERING_NECTAR,    amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_DILIGENCE,        amount:  6 }, {item: Items.SHIMMERING_NECTAR,    amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_DILIGENCE,        amount:  9 }, {item: Items.SHIMMERING_NECTAR,    amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_DILIGENCE, amount:  4 }, {item: Items.ENERGY_NECTAR,        amount:  4 }, { item: Items.ERODED_SUNFIRE, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_DILIGENCE, amount:  6 }, {item: Items.ENERGY_NECTAR,        amount:  6 }, { item: Items.ERODED_SUNFIRE, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_DILIGENCE, amount: 12 }, {item: Items.ENERGY_NECTAR,        amount:  9 }, { item: Items.ERODED_SUNFIRE, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_DILIGENCE, amount: 16 }, {item: Items.ENERGY_NECTAR,        amount: 12 }, { item: Items.ERODED_SUNFIRE, amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_DILIGENCE,    amount:  3 }, {item: Items.WHOPPERFLOWER_NECTAR, amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_DILIGENCE,        amount:  2 }, {item: Items.SHIMMERING_NECTAR,    amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_DILIGENCE,        amount:  4 }, {item: Items.SHIMMERING_NECTAR,    amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_DILIGENCE,        amount:  6 }, {item: Items.SHIMMERING_NECTAR,    amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_DILIGENCE,        amount:  9 }, {item: Items.SHIMMERING_NECTAR,    amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_DILIGENCE, amount:  4 }, {item: Items.ENERGY_NECTAR,        amount:  4 }, { item: Items.ERODED_SUNFIRE, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_DILIGENCE, amount:  6 }, {item: Items.ENERGY_NECTAR,        amount:  6 }, { item: Items.ERODED_SUNFIRE, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_DILIGENCE, amount: 12 }, {item: Items.ENERGY_NECTAR,        amount:  9 }, { item: Items.ERODED_SUNFIRE, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_DILIGENCE, amount: 16 }, {item: Items.ENERGY_NECTAR,        amount: 12 }, { item: Items.ERODED_SUNFIRE, amount: 2 }] 
                }}
            }}
        ]
    });
    static YUMEMIZUKI_MIZUKI  = new Character({ name: "YUMEMIZUKI_MIZUKI",  /* FINISHED */
        level: { materials: { 
            "20+": [{ item: Items.SHIVADA_JADE_SLIVER,   amount: 1 },                                                             { item: Items.SEA_GANODERMA, amount:  3 }, { item: Items.OLD_HANDGUARD,      amount:  3 }], 
            "40+": [{ item: Items.SHIVADA_JADE_FRAGMENT, amount: 3 }, { item: Items.TALISMAN_OF_THE_ENIGMATIC_LAND, amount:  2 }, { item: Items.SEA_GANODERMA, amount: 10 }, { item: Items.OLD_HANDGUARD,      amount: 15 }], 
            "50+": [{ item: Items.SHIVADA_JADE_FRAGMENT, amount: 6 }, { item: Items.TALISMAN_OF_THE_ENIGMATIC_LAND, amount:  4 }, { item: Items.SEA_GANODERMA, amount: 20 }, { item: Items.KAGEUCHI_HANDGUARD, amount: 12 }], 
            "60+": [{ item: Items.SHIVADA_JADE_CHUNK,    amount: 3 }, { item: Items.TALISMAN_OF_THE_ENIGMATIC_LAND, amount:  8 }, { item: Items.SEA_GANODERMA, amount: 30 }, { item: Items.KAGEUCHI_HANDGUARD, amount: 18 }], 
            "70+": [{ item: Items.SHIVADA_JADE_CHUNK,    amount: 6 }, { item: Items.TALISMAN_OF_THE_ENIGMATIC_LAND, amount: 12 }, { item: Items.SEA_GANODERMA, amount: 45 }, { item: Items.FAMED_HANDGUARD,    amount: 12 }], 
            "80+": [{ item: Items.SHIVADA_JADE_GEMSTONE, amount: 6 }, { item: Items.TALISMAN_OF_THE_ENIGMATIC_LAND, amount: 20 }, { item: Items.SEA_GANODERMA, amount: 60 }, { item: Items.FAMED_HANDGUARD,    amount: 24 }]
        }}, 
        elements: [
            { element: Elements.CRYO, talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_TRANSIENCE,    amount:  3 }, {item: Items.OLD_HANDGUARD,      amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_TRANSIENCE,        amount:  2 }, {item: Items.KAGEUCHI_HANDGUARD, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_TRANSIENCE,        amount:  4 }, {item: Items.KAGEUCHI_HANDGUARD, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_TRANSIENCE,        amount:  6 }, {item: Items.KAGEUCHI_HANDGUARD, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_TRANSIENCE,        amount:  9 }, {item: Items.KAGEUCHI_HANDGUARD, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_TRANSIENCE, amount:  4 }, {item: Items.FAMED_HANDGUARD,    amount:  4 }, { item: Items.FADING_CANDLE, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_TRANSIENCE, amount:  6 }, {item: Items.FAMED_HANDGUARD,    amount:  6 }, { item: Items.FADING_CANDLE, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_TRANSIENCE, amount: 12 }, {item: Items.FAMED_HANDGUARD,    amount:  9 }, { item: Items.FADING_CANDLE, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_TRANSIENCE, amount: 16 }, {item: Items.FAMED_HANDGUARD,    amount: 12 }, { item: Items.FADING_CANDLE, amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_TRANSIENCE,    amount:  3 }, {item: Items.OLD_HANDGUARD,      amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_TRANSIENCE,        amount:  2 }, {item: Items.KAGEUCHI_HANDGUARD, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_TRANSIENCE,        amount:  4 }, {item: Items.KAGEUCHI_HANDGUARD, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_TRANSIENCE,        amount:  6 }, {item: Items.KAGEUCHI_HANDGUARD, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_TRANSIENCE,        amount:  9 }, {item: Items.KAGEUCHI_HANDGUARD, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_TRANSIENCE, amount:  4 }, {item: Items.FAMED_HANDGUARD,    amount:  4 }, { item: Items.FADING_CANDLE, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_TRANSIENCE, amount:  6 }, {item: Items.FAMED_HANDGUARD,    amount:  6 }, { item: Items.FADING_CANDLE, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_TRANSIENCE, amount: 12 }, {item: Items.FAMED_HANDGUARD,    amount:  9 }, { item: Items.FADING_CANDLE, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_TRANSIENCE, amount: 16 }, {item: Items.FAMED_HANDGUARD,    amount: 12 }, { item: Items.FADING_CANDLE, amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_TRANSIENCE,    amount:  3 }, {item: Items.OLD_HANDGUARD,      amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_TRANSIENCE,        amount:  2 }, {item: Items.KAGEUCHI_HANDGUARD, amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_TRANSIENCE,        amount:  4 }, {item: Items.KAGEUCHI_HANDGUARD, amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_TRANSIENCE,        amount:  6 }, {item: Items.KAGEUCHI_HANDGUARD, amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_TRANSIENCE,        amount:  9 }, {item: Items.KAGEUCHI_HANDGUARD, amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_TRANSIENCE, amount:  4 }, {item: Items.FAMED_HANDGUARD,    amount:  4 }, { item: Items.FADING_CANDLE, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_TRANSIENCE, amount:  6 }, {item: Items.FAMED_HANDGUARD,    amount:  6 }, { item: Items.FADING_CANDLE, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_TRANSIENCE, amount: 12 }, {item: Items.FAMED_HANDGUARD,    amount:  9 }, { item: Items.FADING_CANDLE, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_TRANSIENCE, amount: 16 }, {item: Items.FAMED_HANDGUARD,    amount: 12 }, { item: Items.FADING_CANDLE, amount: 2 }] 
                }}
            }
        }]
    });
    static IANSAN             = new Character({ name: "IANSAN",             /* FINISHED */
        level: { materials: { 
            "20+": [{ item: Items.VAJRADA_AMETHYST_SLIVER,   amount: 1 },                                             { item: Items.DRACOLITE, amount:  3 }, { item: Items["SENTY'S_WOODEN_WHISTLE"],                   amount:  3 }], 
            "40+": [{ item: Items.VAJRADA_AMETHYST_FRAGMENT, amount: 3 }, { item: Items.ENSNARING_GAZE, amount:  2 }, { item: Items.DRACOLITE, amount: 10 }, { item: Items["SENTY'S_WOODEN_WHISTLE"],                   amount: 15 }], 
            "50+": [{ item: Items.VAJRADA_AMETHYST_FRAGMENT, amount: 6 }, { item: Items.ENSNARING_GAZE, amount:  4 }, { item: Items.DRACOLITE, amount: 20 }, { item: Items["WARRIOR'S_METAL_WHISTLE"],                  amount: 12 }], 
            "60+": [{ item: Items.VAJRADA_AMETHYST_CHUNK,    amount: 3 }, { item: Items.ENSNARING_GAZE, amount:  8 }, { item: Items.DRACOLITE, amount: 30 }, { item: Items["WARRIOR'S_METAL_WHISTLE"],                  amount: 18 }], 
            "70+": [{ item: Items.VAJRADA_AMETHYST_CHUNK,    amount: 6 }, { item: Items.ENSNARING_GAZE, amount: 12 }, { item: Items.DRACOLITE, amount: 45 }, { item: Items["SAURIAN-CROWNED_WARRIOR'S_GOLDEN_WHISTLE"], amount: 12 }], 
            "80+": [{ item: Items.VAJRADA_AMETHYST_GEMSTONE, amount: 6 }, { item: Items.ENSNARING_GAZE, amount: 20 }, { item: Items.DRACOLITE, amount: 60 }, { item: Items["SAURIAN-CROWNED_WARRIOR'S_GOLDEN_WHISTLE"], amount: 24 }]
        }}, 
        elements: [
            { element: Elements.ELECTRO, talents: { 
                normal_attack: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_CONTENTION,    amount:  3 }, {item: Items["SENTY'S_WOODEN_WHISTLE"],                   amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_CONTENTION,        amount:  2 }, {item: Items["WARRIOR'S_METAL_WHISTLE"],                  amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_CONTENTION,        amount:  4 }, {item: Items["WARRIOR'S_METAL_WHISTLE"],                  amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_CONTENTION,        amount:  6 }, {item: Items["WARRIOR'S_METAL_WHISTLE"],                  amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_CONTENTION,        amount:  9 }, {item: Items["WARRIOR'S_METAL_WHISTLE"],                  amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_CONTENTION, amount:  4 }, {item: Items["SAURIAN-CROWNED_WARRIOR'S_GOLDEN_WHISTLE"], amount:  4 }, { item: Items.DENIAL_AND_JUDGMENT, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_CONTENTION, amount:  6 }, {item: Items["SAURIAN-CROWNED_WARRIOR'S_GOLDEN_WHISTLE"], amount:  6 }, { item: Items.DENIAL_AND_JUDGMENT, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_CONTENTION, amount: 12 }, {item: Items["SAURIAN-CROWNED_WARRIOR'S_GOLDEN_WHISTLE"], amount:  9 }, { item: Items.DENIAL_AND_JUDGMENT, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_CONTENTION, amount: 16 }, {item: Items["SAURIAN-CROWNED_WARRIOR'S_GOLDEN_WHISTLE"], amount: 12 }, { item: Items.DENIAL_AND_JUDGMENT, amount: 2 }] 
                }}, 
                elemental_skill: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_CONTENTION,    amount:  3 }, {item: Items["SENTY'S_WOODEN_WHISTLE"],                   amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_CONTENTION,        amount:  2 }, {item: Items["WARRIOR'S_METAL_WHISTLE"],                  amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_CONTENTION,        amount:  4 }, {item: Items["WARRIOR'S_METAL_WHISTLE"],                  amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_CONTENTION,        amount:  6 }, {item: Items["WARRIOR'S_METAL_WHISTLE"],                  amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_CONTENTION,        amount:  9 }, {item: Items["WARRIOR'S_METAL_WHISTLE"],                  amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_CONTENTION, amount:  4 }, {item: Items["SAURIAN-CROWNED_WARRIOR'S_GOLDEN_WHISTLE"], amount:  4 }, { item: Items.DENIAL_AND_JUDGMENT, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_CONTENTION, amount:  6 }, {item: Items["SAURIAN-CROWNED_WARRIOR'S_GOLDEN_WHISTLE"], amount:  6 }, { item: Items.DENIAL_AND_JUDGMENT, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_CONTENTION, amount: 12 }, {item: Items["SAURIAN-CROWNED_WARRIOR'S_GOLDEN_WHISTLE"], amount:  9 }, { item: Items.DENIAL_AND_JUDGMENT, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_CONTENTION, amount: 16 }, {item: Items["SAURIAN-CROWNED_WARRIOR'S_GOLDEN_WHISTLE"], amount: 12 }, { item: Items.DENIAL_AND_JUDGMENT, amount: 2 }] 
                }}, 
                elemental_burst: { min: 1, max: 10, materials: { 
                    2:  [{ item: Items.TEACHINGS_OF_CONTENTION,    amount:  3 }, {item: Items["SENTY'S_WOODEN_WHISTLE"],                   amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_CONTENTION,        amount:  2 }, {item: Items["WARRIOR'S_METAL_WHISTLE"],                  amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_CONTENTION,        amount:  4 }, {item: Items["WARRIOR'S_METAL_WHISTLE"],                  amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_CONTENTION,        amount:  6 }, {item: Items["WARRIOR'S_METAL_WHISTLE"],                  amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_CONTENTION,        amount:  9 }, {item: Items["WARRIOR'S_METAL_WHISTLE"],                  amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_CONTENTION, amount:  4 }, {item: Items["SAURIAN-CROWNED_WARRIOR'S_GOLDEN_WHISTLE"], amount:  4 }, { item: Items.DENIAL_AND_JUDGMENT, amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_CONTENTION, amount:  6 }, {item: Items["SAURIAN-CROWNED_WARRIOR'S_GOLDEN_WHISTLE"], amount:  6 }, { item: Items.DENIAL_AND_JUDGMENT, amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_CONTENTION, amount: 12 }, {item: Items["SAURIAN-CROWNED_WARRIOR'S_GOLDEN_WHISTLE"], amount:  9 }, { item: Items.DENIAL_AND_JUDGMENT, amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_CONTENTION, amount: 16 }, {item: Items["SAURIAN-CROWNED_WARRIOR'S_GOLDEN_WHISTLE"], amount: 12 }, { item: Items.DENIAL_AND_JUDGMENT, amount: 2 }] 
                }}
            }}
        ]
    });
    static VARESA             = new Character({ name: "VARESA",             /* FINISHED */
        level: { materials: {
            "20+": [{ item: Items.VAJRADA_AMETHYST_SLIVER,   amount: 1 },                                                    { item: Items.SKYSPLIT_GEMBLOOM, amount:  3 }, { item: Items.JUVENILE_FANG,    amount:  3 }],
            "40+": [{ item: Items.VAJRADA_AMETHYST_FRAGMENT, amount: 3 }, { item: Items.SPARKLESS_STATUE_CORE, amount:  2 }, { item: Items.SKYSPLIT_GEMBLOOM, amount: 10 }, { item: Items.JUVENILE_FANG,    amount: 15 }],
            "50+": [{ item: Items.VAJRADA_AMETHYST_FRAGMENT, amount: 6 }, { item: Items.SPARKLESS_STATUE_CORE, amount:  4 }, { item: Items.SKYSPLIT_GEMBLOOM, amount: 20 }, { item: Items.SEASONED_FANG,    amount: 12 }],
            "60+": [{ item: Items.VAJRADA_AMETHYST_CHUNK,    amount: 3 }, { item: Items.SPARKLESS_STATUE_CORE, amount:  8 }, { item: Items.SKYSPLIT_GEMBLOOM, amount: 30 }, { item: Items.SEASONED_FANG,    amount: 18 }],
            "70+": [{ item: Items.VAJRADA_AMETHYST_CHUNK,    amount: 6 }, { item: Items.SPARKLESS_STATUE_CORE, amount: 12 }, { item: Items.SKYSPLIT_GEMBLOOM, amount: 45 }, { item: Items["TYRANT'S_FANG"], amount: 12 }],
            "80+": [{ item: Items.VAJRADA_AMETHYST_GEMSTONE, amount: 6 }, { item: Items.SPARKLESS_STATUE_CORE, amount: 20 }, { item: Items.SKYSPLIT_GEMBLOOM, amount: 60 }, { item: Items["TYRANT'S_FANG"], amount: 24 }],
        }},
        elements: [
            { element: Elements.ELECTRO, talents: {
                normal_attack: { min: 1, max: 10, materials: {
                    2:  [{ item: Items.TEACHINGS_OF_CONFLICT,    amount:  3 }, {item: Items.JUVENILE_FANG,    amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_CONFLICT,        amount:  2 }, {item: Items.SEASONED_FANG,    amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_CONFLICT,        amount:  4 }, {item: Items.SEASONED_FANG,    amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_CONFLICT,        amount:  6 }, {item: Items.SEASONED_FANG,    amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_CONFLICT,        amount:  9 }, {item: Items.SEASONED_FANG,    amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_CONFLICT, amount:  4 }, {item: Items["TYRANT'S_FANG"], amount:  4 }, { item: Items["ERODED_SCALE-FEATHER"], amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_CONFLICT, amount:  6 }, {item: Items["TYRANT'S_FANG"], amount:  6 }, { item: Items["ERODED_SCALE-FEATHER"], amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_CONFLICT, amount: 12 }, {item: Items["TYRANT'S_FANG"], amount:  9 }, { item: Items["ERODED_SCALE-FEATHER"], amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_CONFLICT, amount: 16 }, {item: Items["TYRANT'S_FANG"], amount: 12 }, { item: Items["ERODED_SCALE-FEATHER"], amount: 2 }] 
                }},
                elemental_skill: { min: 1, max: 10, materials: {
                    2:  [{ item: Items.TEACHINGS_OF_CONFLICT,    amount:  3 }, {item: Items.JUVENILE_FANG,    amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_CONFLICT,        amount:  2 }, {item: Items.SEASONED_FANG,    amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_CONFLICT,        amount:  4 }, {item: Items.SEASONED_FANG,    amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_CONFLICT,        amount:  6 }, {item: Items.SEASONED_FANG,    amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_CONFLICT,        amount:  9 }, {item: Items.SEASONED_FANG,    amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_CONFLICT, amount:  4 }, {item: Items["TYRANT'S_FANG"], amount:  4 }, { item: Items["ERODED_SCALE-FEATHER"], amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_CONFLICT, amount:  6 }, {item: Items["TYRANT'S_FANG"], amount:  6 }, { item: Items["ERODED_SCALE-FEATHER"], amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_CONFLICT, amount: 12 }, {item: Items["TYRANT'S_FANG"], amount:  9 }, { item: Items["ERODED_SCALE-FEATHER"], amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_CONFLICT, amount: 16 }, {item: Items["TYRANT'S_FANG"], amount: 12 }, { item: Items["ERODED_SCALE-FEATHER"], amount: 2 }] 
                }},
                elemental_burst: { min: 1, max: 10, materials: {
                    2:  [{ item: Items.TEACHINGS_OF_CONFLICT,    amount:  3 }, {item: Items.JUVENILE_FANG,    amount:  6 }],                                             
                    3:  [{ item: Items.GUIDE_TO_CONFLICT,        amount:  2 }, {item: Items.SEASONED_FANG,    amount:  3 }],                                             
                    4:  [{ item: Items.GUIDE_TO_CONFLICT,        amount:  4 }, {item: Items.SEASONED_FANG,    amount:  4 }],                                             
                    5:  [{ item: Items.GUIDE_TO_CONFLICT,        amount:  6 }, {item: Items.SEASONED_FANG,    amount:  6 }],                                             
                    6:  [{ item: Items.GUIDE_TO_CONFLICT,        amount:  9 }, {item: Items.SEASONED_FANG,    amount:  9 }],                                             
                    7:  [{ item: Items.PHILOSOPHIES_OF_CONFLICT, amount:  4 }, {item: Items["TYRANT'S_FANG"], amount:  4 }, { item: Items["ERODED_SCALE-FEATHER"], amount: 1 }],
                    8:  [{ item: Items.PHILOSOPHIES_OF_CONFLICT, amount:  6 }, {item: Items["TYRANT'S_FANG"], amount:  6 }, { item: Items["ERODED_SCALE-FEATHER"], amount: 1 }],
                    9:  [{ item: Items.PHILOSOPHIES_OF_CONFLICT, amount: 12 }, {item: Items["TYRANT'S_FANG"], amount:  9 }, { item: Items["ERODED_SCALE-FEATHER"], amount: 2 }],
                    10: [{ item: Items.PHILOSOPHIES_OF_CONFLICT, amount: 16 }, {item: Items["TYRANT'S_FANG"], amount: 12 }, { item: Items["ERODED_SCALE-FEATHER"], amount: 2 }] 
                }}
            }
        }]
    });
    //#endregion "LIST"
    
    /**
     * @param {number|String} key
     * @returns {Character}
     */
    static get(key) {
        if(typeof key === "string") { return CharacterList[key]; }
        if(typeof key === "number") { return CharacterList.get(CharacterMap.get(key)); }
    }
    /**
     * 
     * @returns {InventoryMat[]}
     */
    static get_materials(){
        let start_ms = performance.now()
        let total_mats = []
        for(let character_name in Characters){
            const character = Characters.get(character_name);
            character.get_data().level.min = "1";
            character.get_data().level.max = "90";
            for (let i = 0; i < character.get_data().elements.length; i++) {        
                character.get_data().elements[i].talents.normal_attack.min   = 1
                character.get_data().elements[i].talents.normal_attack.max   = 10
                character.get_data().elements[i].talents.elemental_skill.min = 1
                character.get_data().elements[i].talents.elemental_skill.max = 10
                character.get_data().elements[i].talents.elemental_burst.min = 1
                character.get_data().elements[i].talents.elemental_burst.max = 10
            }
            for(let mat of character.get_materials()){
                mat.dest.push(character_name);
                total_mats.push(mat)
            }
        }
        total_mats = Inventory.merge_materials([], total_mats);
        let end_ms = performance.now()
        console.log("time:", end_ms-start_ms)
        return total_mats;
    }

}
export const Characters = new Proxy(CharacterList, {
    get(target, prop) {
        if (!(prop in target)) {
            console.error(`Error: La variable 'Characters.${prop}' no existe.`);
            return undefined;
        }
        return target[prop];
    }
})
export function CharactersToJson() {
    const obj = {};
    for (const key of Object.getOwnPropertyNames(CharacterList)) {
        if ( key !== 'length' && key !== 'name' &&  key !== 'prototype' &&  typeof CharacterList[key] !== 'function' ) {
            obj[key] = CharacterList.get(key).get_data();
        }
    }

    const json_string = JSON.stringify(obj, null, 2);
    const size_in_bytes = new TextEncoder().encode(json_string).length;
    let size_formatted;
         if (size_in_bytes < 1024)       { size_formatted = `${size_in_bytes} B`;                            }
    else if (size_in_bytes < 1048576)    { size_formatted = `${(size_in_bytes / 1024).toFixed(2)} KB`;       } 
    else if (size_in_bytes < 1073741824) { size_formatted = `${(size_in_bytes / 1048576).toFixed(2)} MB`;    } 
    else                                 { size_formatted = `${(size_in_bytes / 1073741824).toFixed(2)} GB`; }
    console.log(`CharacterList size (${size_in_bytes.toLocaleString("es-ES")} bytes): ~${size_formatted}`);
    return json_string;
}
