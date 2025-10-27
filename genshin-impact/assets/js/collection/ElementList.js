import { ElementEntity } from "../entity/ElementEntity.js";

/**
 * @type {Map<number,string>}
*/
export const ElementMap  = new Map();

class ElementList {
    
    static UNKNOWN = new ElementEntity("UNKNOWN");
    static ANEMO   = new ElementEntity("ANEMO");
    static GEO     = new ElementEntity("GEO");
    static ELECTRO = new ElementEntity("ELECTRO");
    static DENDRO  = new ElementEntity("DENDRO");
    static HYDRO   = new ElementEntity("HYDRO");
    static PYRO    = new ElementEntity("PYRO");
    static CRYO    = new ElementEntity("CRYO");

};

export const Element = new Proxy(ElementList, {
    get(target, prop) {
        if(prop === "get") { 
            return (key) => {
                return Element[typeof key === "number" ? ElementMap.get(key): key]
            }
        } 
        if (!(prop in target)) {
            console.error(`Error: La variable 'Elements.${prop}' no existe.`);
            return ElementList.UNKNOWN;
        }
        return target[prop];
    }
});