class ItemTypeList {
    static UNKNOWN                                   = "UNKNOWN";
    static REFINEMENT_MATERIAL                       = "REFINEMENT_MATERIAL";
    static CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL = "CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL";
    static "CHARACTER_LEVEL-UP_MATERIAL"             = "CHARACTER_LEVEL-UP_MATERIAL";
    static CHARACTER_TALENT_MATERIAL                 = "CHARACTER_TALENT_MATERIAL";
    static CHARACTER_EXP_MATERIAL                    = "CHARACTER_EXP_MATERIAL";
    static COMMON_CURRENCY                           = "COMMON_CURRENCY";
    static SPECIAL_CURRENCY                          = "SPECIAL_CURRENCY";
    static CHARACTER_ASCENSION_MATERIAL              = "CHARACTER_ASCENSION_MATERIAL";
    static LOCAL_SPECIALTY = {
        MONDSTADT: "LOCAL_SPECIALTY.MONDSTADT",
        LIYUE:     "LOCAL_SPECIALTY.LIYUE",
        INAZUMA:   "LOCAL_SPECIALTY.INAZUMA",
        SUMERU:    "LOCAL_SPECIALTY.SUMERU",
        FONTAINE:  "LOCAL_SPECIALTY.FONTAINE",
        NATLAN:    "LOCAL_SPECIALTY.NATLAN"
    }
}
export const ItemTypes = new Proxy(ItemTypeList, {
    get(target, prop) {
        if (!(prop in target)) {
            console.error(`Error: La variable 'ItemTypeList.${prop}' no existe.`);
            return undefined;
        }
        return target[prop];
    }
});
