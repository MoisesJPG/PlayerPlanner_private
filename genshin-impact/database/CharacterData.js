import CharacterLevelMaterials from "./CharacterLevelMaterials.js";
import { Element, Elements } from "./elements.js";
import { Items } from "./ItemList.js";

export class CharacterDataElementTalentMaterials {
	/** 
	  * @type {InventoryMat[]} 
	  **/
	2 = [{ item: Items.MORA.getData().basename, amount: 12500 }];
	/** 
	  * @type {InventoryMat[]} 
	  **/
	3 = [{ item: Items.MORA.getData().basename, amount: 17500 }];
	/** 
	  * @type {InventoryMat[]} 
	  **/
	4 = [{ item: Items.MORA.getData().basename, amount: 25500 }];
	/** 
	  * @type {InventoryMat[]} 
	  **/
	5 = [{ item: Items.MORA.getData().basename, amount: 30000 }];
	/** 
	  * @type {InventoryMat[]} 
	  **/
	6 = [{ item: Items.MORA.getData().basename, amount: 37500 }];
	/** 
	  * @type {InventoryMat[]} 
	  **/
	7 = [{ item: Items.MORA.getData().basename, amount: 120000 }];
	/** 
	  * @type {InventoryMat[]} 
	  **/
	8 = [{ item: Items.MORA.getData().basename, amount: 260000 }];
	/** 
	  * @type {InventoryMat[]} 
	  **/
	9 = [{ item: Items.MORA.getData().basename, amount: 450000 }];
	/** 
	  * @type {InventoryMat[]} 
	  **/
	10 = [{ item: Items.MORA.getData().basename, amount: 700000 }, { item: Items.CROWN_OF_INSIGHT.getData().basename, amount: 1 }];
}
export class CharacterDataElementTalent {
	/** @type {number} */
	min = 1;
	/** @type {number} */
	max = 1;
	/** @type {CharacterDataElementTalentMaterials} */
	materials = new CharacterDataElementTalentMaterials();
}
export class CharacterDataElementTalents {
	/** @type {CharacterDataElementTalent} */
	normal_attack = new CharacterDataElementTalent();
	/** @type {CharacterDataElementTalent} */
	elemental_skill = new CharacterDataElementTalent();
	/** @type {CharacterDataElementTalent} */
	elemental_burst = new CharacterDataElementTalent();
}
export class CharacterDataElementConstellation {
	static min = 0;
	static max = 6;
	/** 
	 * @type {number} 
	 **/
	min = 0;
	/**
	 * @type {number} 
	 **/
	max = 6;
	/**
	 * 
	 */
	fix() {
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
	 * @returns {Element} 
	 **/
	getElement() {
		return Elements.get(this.#elementName);
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
	#elements = [];
	/**
	 *  @returns {CharacterDataElement[]} 
	 **/
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
