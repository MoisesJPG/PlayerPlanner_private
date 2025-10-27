export class ItemTypes {
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
        NATLAN:    "LOCAL_SPECIALTY.NATLAN",
        NOD_KRAY:    "LOCAL_SPECIALTY.NOD_RAY",
    }
}
export class ResumenTypes {
    static MISC = "MISC";
    static COMMON = "COMMON";
    static LOCAL_SPECIALTIES = "LOCAL_SPECIALTIES";
    static UNKNOWN = "UNKNOWN";
    static WEEKLY_BOSS = "WEEKLY_BOSS";
    static WORLD_BOSS = "WORLD_BOSS";
    static GEMSTONES = "GEMSTONES";
    static DOMAINS = "DOMAINS";
}

export class ItemData {
    /**
     * @type {number}
     */
    id;
    /**
     * @type {String}
     */
    basename;
    /**
     * @type {String}
     */
    resumenType = ResumenTypes.UNKNOWN;
    /**
     * @type {String}
     */
    name;
    /**
     * @type {string}
     */
    type;
    /**
     * @type {number}
     */
    rarity;
    /**
     * @type {String}
     */
    description;

}
export class ItemDataPrivate {
    // === CAMPOS === //
    amount = { 
        current: 0, 
        required: 0,
        remaining: 0
    };
    calculateRequired() {
        this.amount.required = 0;
        for (const c of this.characters) {
            this.amount.required += c[1];
        }
        this.calculate_remaining();
    }
    calculate_remaining() {
        this.amount.remaining = this.amount.required - this.amount.current;
    }

    /**
     * @type {Map<string, number>}
     */
    characters = new Map();

}