import { Element, Elements } from "./elements.js"
import { Items } from "./items.js"

class Character {
    data = {
        name: "",
        level: {
            min: 1,
            max: 90,
            materials: {
                2: { item: null, amount: -1 }
            }
        }
    }

    /**
     * @param {#data} data
     */
    constructor(data){
        // this.data = data;
        this.data.name = data.name;
        for (const level in data.level.materials) {
            const materials = data.level.materials[level]
            if(level in this.data.level.materials){
                
            }else{
                this.data.level.materials[level] = materials
            }
            console.log(level, materials)
        }
        console.log(this.data)
    }
    getName(){
        return this.data.name;
    }
    to_JSON(){
        return JSON.stringify(this.data);
    }
}
export const Characters = {}
Characters.AMBER = new Character({
    name: "Amber",
    element: Elements.PYRO,
    level: {
        materials: {
            1: [
                [ Items.MORA, 3],
                [ Items.MORA, 3],
                [ Items.MORA, 3] 
            ]
        }
    }
});