import CharacterLevelMaterials from "./CharacterLevelMaterials";

export class CharacterConstructor {
    /** 
     * @type {String} 
     **/
    name;
    /** 
     * @type {Number} 
     **/
    rarity;
    /**
     *  @type {CharacterDataElement[]} 
     **/
    elements = [];
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