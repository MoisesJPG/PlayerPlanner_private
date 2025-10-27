import { Item } from "../../collection/ItemList.js";

export class CharacterLevelMap  {
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
    static getKey(value){
        for(let key in this.#map){
            if(`${this.#map[key]}` === `${value}`){
                return parseInt(key);
            }
        }
    }
    static getValue(key){
        return this.#map[key];
    }
}
export class CharacterLevelMaterials {
    "2"   = [{ item: Item.EXP.getData().basename, amount:   1000 }];
    "3"   = [{ item: Item.EXP.getData().basename, amount:   1325 }];
    "4"   = [{ item: Item.EXP.getData().basename, amount:   1700 }];
    "5"   = [{ item: Item.EXP.getData().basename, amount:   2150 }];
    "6"   = [{ item: Item.EXP.getData().basename, amount:   2625 }];
    "7"   = [{ item: Item.EXP.getData().basename, amount:   3150 }];
    "8"   = [{ item: Item.EXP.getData().basename, amount:   3725 }];
    "9"   = [{ item: Item.EXP.getData().basename, amount:   4350 }];
    "10"  = [{ item: Item.EXP.getData().basename, amount:   5000 }];
    "11"  = [{ item: Item.EXP.getData().basename, amount:   5700 }];
    "12"  = [{ item: Item.EXP.getData().basename, amount:   6450 }];
    "13"  = [{ item: Item.EXP.getData().basename, amount:   7225 }];
    "14"  = [{ item: Item.EXP.getData().basename, amount:   8050 }];
    "15"  = [{ item: Item.EXP.getData().basename, amount:   8925 }];
    "16"  = [{ item: Item.EXP.getData().basename, amount:   9825 }];
    "17"  = [{ item: Item.EXP.getData().basename, amount:  10750 }];
    "18"  = [{ item: Item.EXP.getData().basename, amount:  11725 }];
    "19"  = [{ item: Item.EXP.getData().basename, amount:  12725 }];
    "20"  = [{ item: Item.EXP.getData().basename, amount:  13775 }];
    "20+" = [{ item: Item.EXP.getData().basename, amount:      0 }, { item: Item.MORA.getData().basename, amount:  20000 }];
    "21"  = [{ item: Item.EXP.getData().basename, amount:  14875 }];
    "22"  = [{ item: Item.EXP.getData().basename, amount:  16800 }];
    "23"  = [{ item: Item.EXP.getData().basename, amount:  18000 }];
    "24"  = [{ item: Item.EXP.getData().basename, amount:  19250 }];
    "25"  = [{ item: Item.EXP.getData().basename, amount:  20550 }];
    "26"  = [{ item: Item.EXP.getData().basename, amount:  21875 }];
    "27"  = [{ item: Item.EXP.getData().basename, amount:  23250 }];
    "28"  = [{ item: Item.EXP.getData().basename, amount:  24650 }];
    "29"  = [{ item: Item.EXP.getData().basename, amount:  26100 }];
    "30"  = [{ item: Item.EXP.getData().basename, amount:  27575 }];
    "31"  = [{ item: Item.EXP.getData().basename, amount:  29100 }];
    "32"  = [{ item: Item.EXP.getData().basename, amount:  30650 }];
    "33"  = [{ item: Item.EXP.getData().basename, amount:  32250 }];
    "34"  = [{ item: Item.EXP.getData().basename, amount:  33875 }];
    "35"  = [{ item: Item.EXP.getData().basename, amount:  35550 }];
    "36"  = [{ item: Item.EXP.getData().basename, amount:  37250 }];
    "37"  = [{ item: Item.EXP.getData().basename, amount:  38975 }];
    "38"  = [{ item: Item.EXP.getData().basename, amount:  40750 }];
    "39"  = [{ item: Item.EXP.getData().basename, amount:  42575 }];
    "40"  = [{ item: Item.EXP.getData().basename, amount:  44425 }];
    "40+" = [{ item: Item.EXP.getData().basename, amount:      0 }, { item: Item.MORA.getData().basename, amount:  40000 }];
    "41"  = [{ item: Item.EXP.getData().basename, amount:  46300 }];
    "42"  = [{ item: Item.EXP.getData().basename, amount:  50625 }];
    "43"  = [{ item: Item.EXP.getData().basename, amount:  52700 }];
    "44"  = [{ item: Item.EXP.getData().basename, amount:  54775 }];
    "45"  = [{ item: Item.EXP.getData().basename, amount:  56900 }];
    "46"  = [{ item: Item.EXP.getData().basename, amount:  59075 }];
    "47"  = [{ item: Item.EXP.getData().basename, amount:  61275 }];
    "48"  = [{ item: Item.EXP.getData().basename, amount:  63525 }];
    "49"  = [{ item: Item.EXP.getData().basename, amount:  65800 }];
    "50"  = [{ item: Item.EXP.getData().basename, amount:  68125 }];
    "50+" = [{ item: Item.EXP.getData().basename, amount:      0 }, { item: Item.MORA.getData().basename, amount:  60000 }];
    "51"  = [{ item: Item.EXP.getData().basename, amount:  70475 }];
    "52"  = [{ item: Item.EXP.getData().basename, amount:  76500 }];
    "53"  = [{ item: Item.EXP.getData().basename, amount:  79050 }];
    "54"  = [{ item: Item.EXP.getData().basename, amount:  81650 }];
    "55"  = [{ item: Item.EXP.getData().basename, amount:  84275 }];
    "56"  = [{ item: Item.EXP.getData().basename, amount:  86950 }];
    "57"  = [{ item: Item.EXP.getData().basename, amount:  89650 }];
    "58"  = [{ item: Item.EXP.getData().basename, amount:  92400 }];
    "59"  = [{ item: Item.EXP.getData().basename, amount:  95175 }];
    "60"  = [{ item: Item.EXP.getData().basename, amount:  98000 }];
    "60+" = [{ item: Item.EXP.getData().basename, amount:      0 }, { item: Item.MORA.getData().basename, amount:  80000 }];
    "61"  = [{ item: Item.EXP.getData().basename, amount: 100875 }];
    "62"  = [{ item: Item.EXP.getData().basename, amount: 108950 }];
    "63"  = [{ item: Item.EXP.getData().basename, amount: 112050 }];
    "64"  = [{ item: Item.EXP.getData().basename, amount: 115175 }];
    "65"  = [{ item: Item.EXP.getData().basename, amount: 118325 }];
    "66"  = [{ item: Item.EXP.getData().basename, amount: 121525 }];
    "67"  = [{ item: Item.EXP.getData().basename, amount: 124775 }];
    "68"  = [{ item: Item.EXP.getData().basename, amount: 128075 }];
    "69"  = [{ item: Item.EXP.getData().basename, amount: 131400 }];
    "70"  = [{ item: Item.EXP.getData().basename, amount: 134775 }];
    "70+" = [{ item: Item.EXP.getData().basename, amount:      0 }, { item: Item.MORA.getData().basename, amount: 100000 }];
    "71"  = [{ item: Item.EXP.getData().basename, amount: 138175 }];
    "72"  = [{ item: Item.EXP.getData().basename, amount: 148700 }];
    "73"  = [{ item: Item.EXP.getData().basename, amount: 152375 }];
    "74"  = [{ item: Item.EXP.getData().basename, amount: 156075 }];
    "75"  = [{ item: Item.EXP.getData().basename, amount: 159825 }];
    "76"  = [{ item: Item.EXP.getData().basename, amount: 163600 }];
    "77"  = [{ item: Item.EXP.getData().basename, amount: 167425 }];
    "78"  = [{ item: Item.EXP.getData().basename, amount: 171300 }];
    "79"  = [{ item: Item.EXP.getData().basename, amount: 175225 }];
    "80"  = [{ item: Item.EXP.getData().basename, amount: 179175 }];
    "80+" = [{ item: Item.EXP.getData().basename, amount:      0 }, { item: Item.MORA.getData().basename, amount: 120000 }];
    "81"  = [{ item: Item.EXP.getData().basename, amount: 183175 }];
    "82"  = [{ item: Item.EXP.getData().basename, amount: 216225 }];
    "83"  = [{ item: Item.EXP.getData().basename, amount: 243025 }];
    "84"  = [{ item: Item.EXP.getData().basename, amount: 273100 }];
    "85"  = [{ item: Item.EXP.getData().basename, amount: 306800 }];
    "86"  = [{ item: Item.EXP.getData().basename, amount: 344600 }];
    "87"  = [{ item: Item.EXP.getData().basename, amount: 386950 }];
    "88"  = [{ item: Item.EXP.getData().basename, amount: 434425 }];
    "89"  = [{ item: Item.EXP.getData().basename, amount: 487625 }];
    "90"  = [{ item: Item.EXP.getData().basename, amount: 547200 }];
}
export class CharacterDataElementTalentMaterials {
	
	/** @type {InventoryMat[]} **/ 2 = [{ item: Item.MORA.getData().basename, amount: 12500 }];
	/** @type {InventoryMat[]} **/ 3 = [{ item: Item.MORA.getData().basename, amount: 17500 }];
	/** @type {InventoryMat[]} **/ 4 = [{ item: Item.MORA.getData().basename, amount: 25500 }];
	/** @type {InventoryMat[]} **/ 5 = [{ item: Item.MORA.getData().basename, amount: 30000 }];
	/** @type {InventoryMat[]} **/ 6 = [{ item: Item.MORA.getData().basename, amount: 37500 }];
	/** @type {InventoryMat[]} **/ 7 = [{ item: Item.MORA.getData().basename, amount: 120000 }];
	/** @type {InventoryMat[]} **/ 8 = [{ item: Item.MORA.getData().basename, amount: 260000 }];
	/** @type {InventoryMat[]} **/ 9 = [{ item: Item.MORA.getData().basename, amount: 450000 }];
	/** @type {InventoryMat[]} **/ 10 = [{ item: Item.MORA.getData().basename, amount: 700000 }, { item: Item.CROWN_OF_INSIGHT.getData().basename, amount: 1 }];

}
export class CharacterDataElementTalent {
	/** @type {number} */ min = 1;
	/** @type {number} */ max = 1;
	/** @type {CharacterDataElementTalentMaterials} */ materials = new CharacterDataElementTalentMaterials();
}
export class CharacterDataElementTalents {
	/** @type {CharacterDataElementTalent} */ normal_attack = new CharacterDataElementTalent();
	/** @type {CharacterDataElementTalent} */ elemental_skill = new CharacterDataElementTalent();
	/** @type {CharacterDataElementTalent} */ elemental_burst = new CharacterDataElementTalent();
}
export class CharacterDataElementConstellation {
	static min = 0;
	static max = 6;
	/** @type {number} **/ min = 0;
	/** @type {number} **/ max = 6;
	/**  **/ fix() {
		if (!((max <= CharacterDataElementConstellation.max) && (min >= CharacterDataElementConstellation.min))) {
			console.warn("Class CharacterDataElementConstellation: Value out of limits.")
		}
	}
}
export class CharacterDataElement {
	constellation = new CharacterDataElementConstellation();
	#elementName;
	#talents = new CharacterDataElementTalents();
	/** 
	 * @param {Element} element 
	 **/
	setElement(element) {
		this.#elementName = element.getBasename();
	}
	/** 
	 * @returns {ElementList} 
	 **/
	getElement() {
		return Element.get(this.#elementName);
	}
	/** 
	 * @type {CharacterDataElementTalents} 
	 **/
	getTalents() {
		return this.#talents;
	}
	/** 
	 * @param {String} talent 
	 * @returns {CharacterDataElementTalent} 
	 **/
	getTalent(talent) {
		return this.#talents[talent];
	}
}
export class CharacterData {
	/** 
	 * @type {Number} 
	 **/
	id;
	/** 
	 * @type {String} 
	 **/
	basename;
	/** 
	 * @type {String} 
	 **/
	name;
	/** 
	 * @type {Number} 
	 **/
	rarity;
    /**
     * @type {CharacterDataElement[]}
     */
	#elements = [];
    
	getElements() {
		return this.#elements;
	}
	/**
	 *  @param {Number} id 
	 *  @returns {CharacterDataElement} 
	 **/
	getElement(id) {
		return this.#elements[id];
	}
	level = {
		min: 1,
		max: 1,
		materials: new CharacterLevelMaterials()
	}
	friendship = {
		min: 1,
		max: 10
	}
}

export class CharacterConstructor {
    name = "";
    rarity = 0;
    level = {
        min: 1,
        max: 1,
        materials: new CharacterLevelMaterials()
    }
    friendship = {
        min: 1,
        max: 10
    }
    /** @type {CharacterDataElement[]} **/
    elements = [];
}