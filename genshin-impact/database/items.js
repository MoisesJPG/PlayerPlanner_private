class Item {
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
export const Items = {
    MORA : new Item("Mora")
};