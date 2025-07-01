export class CharacterMap {
    /**
     * @type {Map<number,string>}
     */
    static #map = new Map();
    /**
     * @param {string} key 
     * @returns {string}
     */
    static get(key) { 
        return CharacterMap.#map.get(key); 
    }
    /**
     * @param {number} key 
     * @param {string} value 
     */
    static set(key, value){ 
        CharacterMap.#map.set(key, value); 
    }
}