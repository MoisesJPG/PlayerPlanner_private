import { Lang } from "../lang.js";
import { ElementMap } from "../collection/ElementList.js";
import { ElementData } from "./struct/ElementStruct.js";

export class ElementEntity {
    static last_id = -1;
    #data = new ElementData();

    /**
     * @param {String} name 
     */
    constructor(name) {
        this.#data.id        = ++ElementEntity.last_id;
        this.#data.basename = name;
        this.#data.name      = Lang.getActive(`ELEMENT.${name}.NAME`);
        ElementMap.set(this.#data.id, name);
    }
    
    getData()     { return this.#data;          }
    getId()       { return this.#data.id;       }
    getBasename() { return this.#data.basename; }

}