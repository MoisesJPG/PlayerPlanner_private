import { Lang } from "./Lang.js";


export class ElementMap {
    /**
     * @type {Map<number,string>}
     */
    static #map = new Map();
    /**
     * @param {string} key 
     * @returns 
     */
    static get(key){ return ElementMap.#map.get(key); }
    /**
     * @param {number} key 
     * @param {string} value 
     */
    static set(key, value){ ElementMap.#map.set(key, value); }
}
class ElementData {
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
}
export class Element {
    static last_id = -1;
    #data = new ElementData();

    /**
     * @param {String} name 
     */
    constructor(name) {
        this.#data.id        = ++Element.last_id;
        this.#data.base_name = name;
        this.#data.name      = Lang.getActive(`ELEMENT.${name}.NAME`);
        ElementMap.set(this.#data.id, name);
    }
    
    get_data()      { return this.#data;           }
    get_id()        { return this.#data.id;        }
    getBasename() { return this.#data.base_name; }
}
export class ElementList {
    
    static unknown = new Element("UNKNOWN");

    //#region "LIST"
    static ANEMO   = new Element("ANEMO");
    static GEO     = new Element("GEO");
    static ELECTRO = new Element("ELECTRO");
    static DENDRO  = new Element("DENDRO");
    static HYDRO   = new Element("HYDRO");
    static PYRO    = new Element("PYRO");
    static CRYO    = new Element("CRYO");
    //#endregion

    /**
     * @param {number|String} key 
     * @returns {Element}
     */
    static get(key) {
        if(typeof key === "string") { return ElementList[key]; }
        if(typeof key === "number") { return ElementList.get(ElementMap.get(key)); }
    }

};
export const Elements = new Proxy(ElementList, {
    get(target, prop) {
        if (!(prop in target)) {
            console.error(`Error: La variable 'Elements.${prop}' no existe.`);
            return Elements.unknown;
        }
        return target[prop];
    }
});


export function ElementsToJson() {
    const obj = {};
    for (const key of Object.getOwnPropertyNames(ElementList)) {
        if ( key !== 'length' && key !== 'name' && key !== 'prototype' && typeof ElementList[key] !== 'function' ) {
            obj[key] = ElementList.get(key).get_data();
        }
    }
    
    const json_string = JSON.stringify(obj, null, 2);
    const size_in_bytes = new TextEncoder().encode(json_string).length;
    let size_formatted;
         if (size_in_bytes < 1024)       { size_formatted = `${size_in_bytes} B`;                            }
    else if (size_in_bytes < 1048576)    { size_formatted = `${(size_in_bytes / 1024).toFixed(2)} KB`;       } 
    else if (size_in_bytes < 1073741824) { size_formatted = `${(size_in_bytes / 1048576).toFixed(2)} MB`;    } 
    else                                 { size_formatted = `${(size_in_bytes / 1073741824).toFixed(2)} GB`; }
    console.log(`ElementList size (${size_in_bytes.toLocaleString("es-ES")} bytes): ~${size_formatted}`);
    return json_string;
}