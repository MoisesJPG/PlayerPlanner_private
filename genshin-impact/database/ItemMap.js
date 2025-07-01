export default class ItemMap {
    /**
     * @type {Map<number,string>}
     */
    static #map = new Map();
    /**
     * @param {string} key 
     * @returns {string}
     */
    static get(key) { 
        return ItemMap.#map.get(key); 
    }
    /**
     * @param {number} key 
     * @param {string} value 
     */
    static set(key, value) { 
        ItemMap.#map.set(key, value); 
    }
}