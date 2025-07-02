import CharacterLevelMaterials from "./CharacterLevelMaterials.js";

export class CharacterConstructor {
    name = "";
    rarity = 0;
    /** @type {CharacterDataElement[]} **/
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