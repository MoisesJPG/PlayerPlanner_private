import { CharacterDataElement } from "./CharacterData.js";
import CharacterLevelMaterials from "./CharacterLevelMaterials.js";

export class CharacterConstructor {
    name = "";
    rarity = 0;
    level = {
        min: 1,
        max: 1,
        materials: new CharacterLevelMaterials()
    }
    friendship = {
        min: 1,
        max: 10
    }
    /** @type {CharacterDataElement[]} **/
    elements = [];
}