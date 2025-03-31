export class Element {
    data = {
        name: ""
    };
    /**
     * @param {String} name 
     */
    constructor(name){
        this.data.name = name;
    }
    /**
     * @returns {String}
     */
    get_name(){
        return this.data.name;
    }
}
export const Elements = {
    PYRO: new Element("Pyro")
};