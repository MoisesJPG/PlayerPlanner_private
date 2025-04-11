

import { Lang } from "./lang.js";
export const MISSING_ITEMS = {};


class ItemTypeList {
    static unknown                                   = "UNKNOWN";
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


export class ItemMap {
    /**
     * @type {Map<number,string>}
     */
    static #map = new Map();
    /**
     * @param {string} key 
     * @returns {string}
     */
    static get(key){ return ItemMap.#map.get(key); }
    /**
     * @param {number} key 
     * @param {string} value 
     */
    static set(key, value){ ItemMap.#map.set(key, value); }
}
class ItemData {
    /**
     * @type {number}
     */
    id;
    /**
     * @type {String}
     */
    base_name;
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
export class Item {
    static last_id = -1;
    #data = new ItemData();

    /**
     * @param {String} name 
     * @param {number} rarity 
     * @param {String} type 
     */
    constructor(name, rarity = 1, type) {
        this.#data.id          = ++Item.last_id;
        this.#data.base_name   = name;
        this.#data.name        = Lang.get_active(`ITEM.${name}.NAME`);
        this.#data.type        = Lang.get_active(`ITEM_TYPE.${type}.NAME`);
        this.#data.rarity      = rarity; //Lang.get_active(`RARITY.${rarity}.NAME`);
        this.#data.description = Lang.get_active(`ITEM.${name}.DESCRIPTION`);
        ItemMap.set(this.#data.id, name);
    }

    get_data()        { return this.#data;             }
    get_id()          { return this.#data.id;          }
    get_name()        { return this.#data.name;        }
    get_base_name()   { return this.#data.base_name;   }
    get_type()        { return this.#data.type;        }
    get_rarity()      { return this.#data.rarity;      }
    get_description() { return this.#data.description; }
}
export class ItemList {
    
    static UNKNOWN  = new Item("UNKNOWN",  0, ItemTypes.unknown);

    //#region "LIST"
    static EXP      = new Item("EXP",      1, ItemTypes.unknown);
    static MORA     = new Item("MORA",     5, ItemTypes.COMMON_CURRENCY);
    static PRIMOGEM = new Item("PRIMOGEM", 5, ItemTypes.SPECIAL_CURRENCY);
    //#region "SPECIAL"
    static CRIMSON_AGATE                   = new Item("CRIMSON_AGATE",                   1, ItemTypes.unknown);
    static SMOLDERING_PHOSPHORESCENT_FLAME = new Item("SMOLDERING_PHOSPHORESCENT_FLAME", ItemTypes.REFINEMENT_MATERIAL);
    //#endregion
    static "HERO'S_WIT"              = new Item("HERO'S_WIT",              4, ItemTypes.CHARACTER_EXP_MATERIAL)
    static "ADVENTURER'S_EXPERIENCE" = new Item("ADVENTURER'S_EXPERIENCE", 3, ItemTypes.CHARACTER_EXP_MATERIAL)
    //#region "ENEMY DROP"
    static BLACK_CRYSTAL_HORN                             = new Item("BLACK_CRYSTAL_HORN",                             4, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static BLACK_BRONZE_HORN                              = new Item("BLACK_BRONZE_HORN",                              3, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static HEAVY_HORN                                     = new Item("HEAVY_HORN",                                     2, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static CHAOS_CORE                                     = new Item("CHAOS_CORE",                                     4, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static CHAOS_CIRCUIT                                  = new Item("CHAOS_CIRCUIT",                                  3, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static CHAOS_DEVICE                                   = new Item("CHAOS_DEVICE",                                   2, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static MIST_GRASS_WICK                                = new Item("MIST_GRASS_WICK",                                4, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static MIST_GRASS                                     = new Item("MIST_GRASS",                                     3, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static MIST_GRASS_POLLEN                              = new Item("MIST_GRASS_POLLEN",                              2, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static "INSPECTOR'S_SACRIFICIAL_KNIFE"                = new Item("INSPECTOR'S_SACRIFICIAL_KNIFE",                  4, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static "AGENT'S_SACRIFICIAL_KNIFE"                    = new Item("AGENT'S_SACRIFICIAL_KNIFE",                      3, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static "HUNTER'S_SACRIFICIAL_KNIFE"                   = new Item("HUNTER'S_SACRIFICIAL_KNIFE",                     2, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static FOSSILIZED_BONE_SHARD                          = new Item("FOSSILIZED_BONE_SHARD",                          4, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static STURDY_BONE_SHARD                              = new Item("STURDY_BONE_SHARD",                              3, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static FRAGILE_BONE_SHARD                             = new Item("FRAGILE_BONE_SHARD",                             2, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static CHAOS_OCULUS                                   = new Item("CHAOS_OCULUS",                                   4, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static CHAOS_AXIS                                     = new Item("CHAOS_AXIS",                                     3, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static CHAOS_GEAR                                     = new Item("CHAOS_GEAR",                                     2, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static POLARIZING_PRISM                               = new Item("POLARIZING_PRISM",                               4, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static CRYSTAL_PRISM                                  = new Item("CRYSTAL_PRISM",                                  3, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static DISMAL_PRISM                                   = new Item("DISMAL_PRISM",                                   2, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static CONCEALED_TALON                                = new Item("CONCEALED_TALON",                                4, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static CONCEALED_UNGUIS                               = new Item("CONCEALED_UNGUIS",                               3, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static CONCEALED_CLAW                                 = new Item("CONCEALED_CLAW",                                 2, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static DEATHLY_STATUETTE                              = new Item("DEATHLY_STATUETTE",                              4, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static DARK_STATUETTE                                 = new Item("DARK_STATUETTE",                                 3, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static GLOOMY_STATUETTE                               = new Item("GLOOMY_STATUETTE",                               2, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static ROBUST_FUNGAL_NUCLEOUS                         = new Item("ROBUST_FUNGAL_NUCLEOUS",                         4, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static DORMANT_FUNGAL_NUCLEOUS                        = new Item("DORMANT_FUNGAL_NUCLEOUS",                        3, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static INACTIVATED_FUNGAL_NUCLEOUS                    = new Item("INACTIVATED_FUNGAL_NUCLEOUS",                    2, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static CHAOS_BOLT                                     = new Item("CHAOS_BOLT",                                     4, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static CHAOS_MODULE                                   = new Item("CHAOS_MODULE",                                   3, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static CHAOS_STORAGE                                  = new Item("CHAOS_STORAGE",                                  2, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static RADIANT_PRISM                                  = new Item("RADIANT_PRISM",                                  4, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static TURBID_PRISM                                   = new Item("TURBID_PRISM",                                   3, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static DAMAGED_PRISM                                  = new Item("DAMAGED_PRISM",                                  2, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static MARKED_SHELL                                   = new Item("MARKED_SHELL",                                   4, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static STURDY_SHELL                                   = new Item("STURDY_SHELL",                                   3, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static DESICCATED_SHELL                               = new Item("DESICCATED_SHELL",                               2, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static "WANDERER'S_BLOOMING_FLOWER"                   = new Item("WANDERER'S_BLOOMING_FLOWER",                     4, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static TREASURED_FLOWER                               = new Item("TREASURED_FLOWER",                               3, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static A_FLOWER_YET_TO_BLOOM                          = new Item("A_FLOWER_YET_TO_BLOOM",                          2, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static NEWBORN_TAINTED_HYDRO_PHANTASM                 = new Item("NEWBORN_TAINTED_HYDRO_PHANTASM",                 4, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static SCOOP_OF_TAINTED_WATER                         = new Item("SCOOP_OF_TAINTED_WATER",                         3, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static DROP_OF_TAINTED_WATER                          = new Item("DROP_OF_TAINTED_WATER",                          2, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static ALIEN_LIFE_CORE                                = new Item("ALIEN_LIFE_CORE",                                4, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static FOREIGN_SYNAPSE                                = new Item("FOREIGN_SYNAPSE",                                3, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static RIFT_CORE                                      = new Item("RIFT_CORE",                                      2, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static "OPERATIVE'S_CONSTANCY"                        = new Item("OPERATIVE'S_CONSTANCY",                          4, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static "OPERATIVE'S_STANDARD_POCKET_WATCH"            = new Item("OPERATIVE'S_STANDARD_POCKET_WATCH",              3, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static "OLD_OPERATIVE'S_POCKET_WATCH"                 = new Item("OLD_OPERATIVE'S_POCKET_WATCH",                   2, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static CHASMLIGHT_FIN                                 = new Item("CHASMLIGHT_FIN",                                 4, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static LUNAR_FIN                                      = new Item("LUNAR_FIN",                                      3, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static FEATHERY_FIN                                   = new Item("FEATHERY_FIN",                                   2, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static "STILL-SMOLDERING_HILT"                        = new Item("STILL-SMOLDERING_HILT",                          4, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static SPLINTERED_HILT                                = new Item("SPLINTERED_HILT",                                3, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static RUINED_HILT                                    = new Item("RUINED_HILT",                                    2, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static SIGIL_OF_A_STRIDING_WILL                       = new Item("SIGIL_OF_A_STRIDING_WILL",                       4, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static LOCUS_OF_A_CLEAR_WILL                          = new Item("LOCUS_OF_A_CLEAR_WILL",                          3, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static SHARD_OF_A_SHATTERED_WILL                      = new Item("SHARD_OF_A_SHATTERED_WILL",                      2, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static IGNITED_SEEING_EYE                             = new Item("IGNITED_SEEING_EYE",                             4, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static IGNITED_SEED_OF_LIFE                           = new Item("IGNITED_SEED_OF_LIFE",                           3, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static IGNITED_STONE                                  = new Item("IGNITED_STONE",                                  2, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static HEART_OT_THE_SECRET_SOURCE                     = new Item("HEART_OT_THE_SECRET_SOURCE",                     4, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static SHEATH_OF_THE_SECRET_SOURCE                    = new Item("SHEATH_OF_THE_SECRET_SOURCE",                    3, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static AXIS_OF_THE_SECRET_SOURCE                      = new Item("AXIS_OF_THE_SECRET_SOURCE",                      2, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static ILLUSORY_LEAFCOIL                              = new Item("ILLUSORY_LEAFCOIL",                              4, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static BEWILDERING_BROADLEAF                          = new Item("BEWILDERING_BROADLEAF",                          3, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static REFRACTIVE_BUD                                 = new Item("REFRACTIVE_BUD",                                 2, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static BLAZING_PRISMSHELL                             = new Item("BLAZING_PRISMSHELL",                             4, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static "WARM_BACK-SHELL"                              = new Item("WARM_BACK-SHELL",                                3, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static "COLD-CRACKED_SHELLSHARD"                      = new Item("COLD-CRACKED_SHELLSHARD",                        2, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static SLIME_CONCENTRATE                              = new Item("SLIME_CONCENTRATE",                              3, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static SLIME_SECRETIONS                               = new Item("SLIME_SECRETIONS",                               2, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static SLIME_CONDENSATE                               = new Item("SLIME_CONDENSATE",                               1, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static OMINOUS_MASK                                   = new Item("OMINOUS_MASK",                                   3, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static STAINED_MASK                                   = new Item("STAINED_MASK",                                   2, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static DAMAGED_MASK                                   = new Item("DAMAGED_MASK",                                   1, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static FORBIDDEN_CURSE_SCROLL                         = new Item("FORBIDDEN_CURSE_SCROLL",                         3, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static SEALED_SCROLL                                  = new Item("SEALED_SCROLL",                                  2, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static DIVINING_SCROLL                                = new Item("DIVINING_SCROLL",                                1, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static WATHERED_ARROWHEAD                             = new Item("WATHERED_ARROWHEAD",                             3, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static SHARP_ARROWHEAD                                = new Item("SHARP_ARROWHEAD",                                2, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static FIRM_ARROWHEAD                                 = new Item("FIRM_ARROWHEAD",                                 1, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static "LIEUTENANT'S_INSIGNIA"                        = new Item("LIEUTENANT'S_INSIGNIA",                          3, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static "SEARGENT'S_INSIGNIA"                          = new Item("SEARGENT'S_INSIGNIA",                            2, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static "RECRUIT'S_INSIGNIA"                           = new Item("RECRUIT'S_INSIGNIA",                             1, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static GOLDEN_RAVEN_INSIGNIA                          = new Item("GOLDEN_RAVEN_INSIGNIA",                          3, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static SILVER_RAVEN_INSIGNIA                          = new Item("SILVER_RAVEN_INSIGNIA",                          2, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static TREASURE_HOARDER_INSIGNIA                      = new Item("TREASURE_HOARDER_INSIGNIA",                      1, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static ENERGY_NECTAR                                  = new Item("ENERGY_NECTAR",                                  3, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static SHIMMERING_NECTAR                              = new Item("SHIMMERING_NECTAR",                              2, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static WHOPPERFLOWER_NECTAR                           = new Item("WHOPPERFLOWER_NECTAR",                           1, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static FAMED_HANDGUARD                                = new Item("FAMED_HANDGUARD",                                3, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static KAGEUCHI_HANDGUARD                             = new Item("KAGEUCHI_HANDGUARD",                             2, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static OLD_HANDGUARD                                  = new Item("OLD_HANDGUARD",                                  1, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static SPECTRAL_NUCLEUS                               = new Item("SPECTRAL_NUCLEUS",                               3, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static SPECTRAL_HEART                                 = new Item("SPECTRAL_HEART",                                 2, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static SPECTRAL_HUSK                                  = new Item("SPECTRAL_HUSK",                                  1, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static CRYSTALLINE_CYST_DUST                          = new Item("CRYSTALLINE_CYST_DUST",                          3, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static LUMINESCENT_POLLEN                             = new Item("LUMINESCENT_POLLEN",                             2, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static FUNGAL_SPORES                                  = new Item("FUNGAL_SPORES",                                  1, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static RICH_RED_BROCADE                               = new Item("RICH_RED_BROCADE",                               3, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static TRIMMED_RED_SILK                               = new Item("TRIMMED_RED_SILK",                               2, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static FADED_RED_SATIN                                = new Item("FADED_RED_SATIN",                                1, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static XENOCHROMATIC_CRYSTAL                          = new Item("XENOCHROMATIC_CRYSTAL",                          3, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static TRANSOCEANIC_CHUNK                             = new Item("TRANSOCEANIC_CHUNK",                             2, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static TRANSOCEANIC_PEARL                             = new Item("TRANSOCEANIC_PEARL",                             1, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static ARTIFICED_DYNAMIC_GEAR                         = new Item("ARTIFICED_DYNAMIC_GEAR",                         3, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static MECHANICAL_SPUR_GEAR                           = new Item("MECHANICAL_SPUR_GEAR",                           2, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static MESHING_GEAR                                   = new Item("MESHING_GEAR",                                   1, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static "TYRANT'S_FANG"                                = new Item("TYRANT'S_FANG",                                  3, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static SEASONED_FANG                                  = new Item("SEASONED_FANG",                                  2, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static JUVENILE_FANG                                  = new Item("JUVENILE_FANG",                                  1, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static "SAURIAN-CROWNED_WARRIOR'S_GOLDEN_WHISTLE"     = new Item("SAURIAN-CROWNED_WARRIOR'S_GOLDEN_WHISTLE",       3, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static "WARRIOR'S_METAL_WHISTLE"                      = new Item("WARRIOR'S_METAL_WHISTLE",                        2, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    static "SENTY'S_WOODEN_WHISTLE"                       = new Item("SENTY'S_WOODEN_WHISTLE",                         1, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL);
    //#endregion
    //#region "WEEKLY BOSS"
    static "DVALIN'S_PLUME"                               = new Item("DVALIN'S_PLUME",                                 5, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"]);
    static "DVALIN'S_CLAW"                                = new Item("DVALIN'S_CLAW",                                  5, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"]);
    static "DVALIN'S_SIGH"                                = new Item("DVALIN'S_SIGH",                                  5, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"]);
    static TAIL_OF_BOREAS                                 = new Item("TAIL_OF_BOREAS",                                 5, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"]);
    static RING_OF_BOREAS                                 = new Item("RING_OF_BOREAS",                                 5, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"]);
    static SPIRIT_LOCKET_OF_BOREAS                        = new Item("SPIRIT_LOCKET_OF_BOREAS",                        5, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"]);
    static TUSK_OF_MONOCEROS_CAELI                        = new Item("TUSK_OF_MONOCEROS_CAELI",                        5, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"]);
    static SHARD_OF_A_FOUL_LEGACY                         = new Item("SHARD_OF_A_FOUL_LEGACY",                         5, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"]);
    static SHADOW_OF_THE_WARRIOR                          = new Item("SHADOW_OF_THE_WARRIOR",                          5, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"]);
    static "DRAGON_LORD'S_CROWN"                          = new Item("DRAGON_LORD'S_CROWN",                            5, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"]);
    static BLOODJADE_BRANCH                               = new Item("BLOODJADE_BRANCH",                               5, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"]);
    static GILDED_SCALE                                   = new Item("GILDED_SCALE",                                   5, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"]);
    static MOLTEN_MOMENT                                  = new Item("MOLTEN_MOMENT",                                  5, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"]);
    static HELLFIRE_BUTTERFLY                             = new Item("HELLFIRE_BUTTERFLY",                             5, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"]);
    static ASHEN_HEART                                    = new Item("ASHEN_HEART",                                    5, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"]);
    static MUDRA_OF_THE_MALEFIC_GENERAL                   = new Item("MUDRA_OF_THE_MALEFIC_GENERAL",                   5, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"]);
    static TEARS_OF_THE_CALAMITOUS_GOD                    = new Item("TEARS_OF_THE_CALAMITOUS_GOD",                    5, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"]);
    static THE_MEANING_OF_AEONS                           = new Item("THE_MEANING_OF_AEONS",                           5, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"]);
    static PUPPET_STRINGS                                 = new Item("PUPPET_STRINGS",                                 5, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"]);
    static MIRROR_OF_MUSHIN                               = new Item("MIRROR_OF_MUSHIN",                               5, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"]);
    static "DAKA'S_BELL"                                  = new Item("DAKA'S_BELL",                                    5, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"]);
    static WORLDSPAN_FERN                                 = new Item("WORLDSPAN_FERN",                                 5, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"]);
    static PRIMORDIAL_GREENBLOOM                          = new Item("PRIMORDIAL_GREENBLOOM",                          5, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"]);
    static EVERAMBER                                      = new Item("EVERAMBER",                                      5, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"]);
    static LIGHTLESS_SILK_STRING                          = new Item("LIGHTLESS_SILK_STRING",                          5, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"]);    
    static LIGHTLESS_EYE_OF_THE_MAELSTROM                 = new Item("LIGHTLESS_EYE_OF_THE_MAELSTROM",                 5, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"]);    
    static LIGHTLESS_MASS                                 = new Item("LIGHTLESS_MASS",                                 5, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"]);    
    static FADING_CANDLE                                  = new Item("FADING_CANDLE",                                  5, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"]);
    static SILKEN_FEATHER                                 = new Item("SILKEN_FEATHER",                                 5, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"]);
    static DENIAL_AND_JUDGMENT                            = new Item("DENIAL_AND_JUDGMENT",                            5, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"]);
    static THE_CORNERSTONE_OF_STARS_AND_FLAMES            = new Item("THE_CORNERSTONE_OF_STARS_AND_FLAMES",            5, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"]);
    static ERODED_HORN                                    = new Item("ERODED_HORN",                                    5, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"]);
    static ERODED_SUNFIRE                                 = new Item("ERODED_SUNFIRE",                                 5, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"]);
    static "ERODED_SCALE-FEATHER"                         = new Item("ERODED_SCALE-FEATHER",                           5, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"]);
    //#endregion
    //#region "BOSS"
    static HURRICANE_SEED                                 = new Item("HURRICANE_SEED",                                 4, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"]); 
    static LIGHTNING_PRISM                                = new Item("LIGHTNING_PRISM",                                4, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"]); 
    static BASALT_PILLAR                                  = new Item("BASALT_PILLAR",                                  4, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"]); 
    static HOARFROST_CORE                                 = new Item("HOARFROST_CORE",                                 4, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"]); 
    static EVERFLAME_SEED                                 = new Item("EVERFLAME_SEED",                                 4, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"]); 
    static CLEANSING_HEART                                = new Item("CLEANSING_HEART",                                4, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"]); 
    static JUVENILE_JADE                                  = new Item("JUVENILE_JADE",                                  4, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"]); 
    static CRYSTALLINE_BLOOM                              = new Item("CRYSTALLINE_BLOOM",                              4, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"]); 
    static MARIONETTE_CORE                                = new Item("MARIONETTE_CORE",                                4, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"]); 
    static PERPETUAL_HEART                                = new Item("PERPETUAL_HEART",                                4, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"]); 
    static SMOLDERING_PEARL                               = new Item("SMOLDERING_PEARL",                               4, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"]); 
    static DEW_OF_REPUDIATION                             = new Item("DEW_OF_REPUDIATION",                             4, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"]); 
    static STORM_BEADS                                    = new Item("STORM_BEADS",                                    4, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"]); 
    static RIFTBORN_REGALIA                               = new Item("RIFTBORN_REGALIA",                               4, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"]); 
    static "DRAGONHEIR'S_FALSE_FIN"                       = new Item("DRAGONHEIR'S_FALSE_FIN",                         4, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"]); 
    static RUNIC_FANG                                     = new Item("RUNIC_FANG",                                     4, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"]); 
    static MAJESTIC_HOOKED_BEAK                           = new Item("MAJESTIC_HOOKED_BEAK",                           4, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"]); 
    static THUNDERCLAP_FRUITCORE                          = new Item("THUNDERCLAP_FRUITCORE",                          4, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"]); 
    static PERPETUAL_CALIBER                              = new Item("PERPETUAL_CALIBER",                              4, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"]); 
    static LIGHT_GUIDING_TETRAHEDRON                      = new Item("LIGHT_GUIDING_TETRAHEDRON",                      4, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"]); 
    static QUELLED_CREEPER                                = new Item("QUELLED_CREEPER",                                4, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"]); 
    static "PSEUDO-STAMENS"                               = new Item("PSEUDO-STAMENS",                                 4, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"]); 
    static EVERGLOOM_RING                                 = new Item("EVERGLOOM_RING",                                 4, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"]); 
    static ARTIFICED_SPARE_CLOCKWORK_COMPONENT__COPPELIA  = new Item("ARTIFICED_SPARE_CLOCKWORK_COMPONENT__COPPELIA",  4, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"]); 
    static ARTIFICED_SPARE_CLOCKWORK_COMPONENT__COPPELIUS = new Item("ARTIFICED_SPARE_CLOCKWORK_COMPONENT__COPPELIUS", 4, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"]); 
    static "EMPEROR'S_RESOLUTION"                         = new Item("EMPEROR'S_RESOLUTION",                           4, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"]); 
    static "\"TOURBILLON_DEVICE\""                        = new Item("\"TOURBILLON_DEVICE\"",                          4, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"]); 
    static FONTEMER_UNIHORN                               = new Item("FONTEMER_UNIHORN",                               4, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"]); 
    static WATER_THAT_FAILED_TO_TRANSCEND                 = new Item("WATER_THAT_FAILED_TO_TRANSCEND",                 4, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"]); 
    static CLOUDSEAM_SCALE                                = new Item("CLOUDSEAM_SCALE",                                4, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"]); 
    static FRAGMENT_OF_A_GOLDEN_MELODY                    = new Item("FRAGMENT_OF_A_GOLDEN_MELODY",                    4, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"]); 
    static MARK_OF_THE_BINDING_BLEESING                   = new Item("MARK_OF_THE_BINDING_BLEESING",                   4, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"]); 
    static OVERRIPE_FLAMEGRANATE                          = new Item("OVERRIPE_FLAMEGRANATE",                          4, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"]); 
    static "GOLD-INSCRIBED_SECRET_SOURCE_CORE"            = new Item("GOLD-INSCRIBED_SECRET_SOURCE_CORE",              4, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"]); 
    static ENSNARING_GAZE                                 = new Item("ENSNARING_GAZE",                                 4, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"]); 
    static TALISMAN_OF_THE_ENIGMATIC_LAND                 = new Item("TALISMAN_OF_THE_ENIGMATIC_LAND",                 4, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"]); 
    static SPARKLESS_STATUE_CORE                          = new Item("SPARKLESS_STATUE_CORE",                          4, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"]); 
    //#endregion 
    //#region "GEMS"
    static BRILLIANT_DIAMOND_GEMSTONE              = new Item("BRILLIANT_DIAMOND_GEMSTONE",              5, ItemTypes.CHARACTER_ASCENSION_MATERIAL);
    static BRILLIANT_DIAMOND_CHUNK                 = new Item("BRILLIANT_DIAMOND_CHUNK",                 4, ItemTypes.CHARACTER_ASCENSION_MATERIAL);
    static BRILLIANT_DIAMOND_FRAGMENT              = new Item("BRILLIANT_DIAMOND_FRAGMENT",              3, ItemTypes.CHARACTER_ASCENSION_MATERIAL);
    static BRILLIANT_DIAMOND_SLIVER                = new Item("BRILLIANT_DIAMOND_SLIVER",                2, ItemTypes.CHARACTER_ASCENSION_MATERIAL);
    static AGNIDUS_AGATE_GEMSTONE                  = new Item("AGNIDUS_AGATE_GEMSTONE",                  5, ItemTypes.CHARACTER_ASCENSION_MATERIAL);
    static AGNIDUS_AGATE_CHUNK                     = new Item("AGNIDUS_AGATE_CHUNK",                     4, ItemTypes.CHARACTER_ASCENSION_MATERIAL);
    static AGNIDUS_AGATE_FRAGMENT                  = new Item("AGNIDUS_AGATE_FRAGMENT",                  3, ItemTypes.CHARACTER_ASCENSION_MATERIAL);
    static AGNIDUS_AGATE_SLIVER                    = new Item("AGNIDUS_AGATE_SLIVER",                    2, ItemTypes.CHARACTER_ASCENSION_MATERIAL);
    static VARUNADA_LAZURITE_GEMSTONE              = new Item("VARUNADA_LAZURITE_GEMSTONE",              5, ItemTypes.CHARACTER_ASCENSION_MATERIAL);
    static VARUNADA_LAZURITE_CHUNK                 = new Item("VARUNADA_LAZURITE_CHUNK",                 4, ItemTypes.CHARACTER_ASCENSION_MATERIAL);
    static VARUNADA_LAZURITE_FRAGMENT              = new Item("VARUNADA_LAZURITE_FRAGMENT",              3, ItemTypes.CHARACTER_ASCENSION_MATERIAL);
    static VARUNADA_LAZURITE_SLIVER                = new Item("VARUNADA_LAZURITE_SLIVER",                2, ItemTypes.CHARACTER_ASCENSION_MATERIAL);
    static NAGADUS_EMERALD_GEMSTONE                = new Item("NAGADUS_EMERALD_GEMSTONE",                5, ItemTypes.CHARACTER_ASCENSION_MATERIAL);
    static NAGADUS_EMERALD_CHUNK                   = new Item("NAGADUS_EMERALD_CHUNK",                   4, ItemTypes.CHARACTER_ASCENSION_MATERIAL);
    static NAGADUS_EMERALD_FRAGMENT                = new Item("NAGADUS_EMERALD_FRAGMENT",                3, ItemTypes.CHARACTER_ASCENSION_MATERIAL);
    static NAGADUS_EMERALD_SLIVER                  = new Item("NAGADUS_EMERALD_SLIVER",                  2, ItemTypes.CHARACTER_ASCENSION_MATERIAL);
    static VAJRADA_AMETHYST_GEMSTONE               = new Item("VAJRADA_AMETHYST_GEMSTONE",               5, ItemTypes.CHARACTER_ASCENSION_MATERIAL);
    static VAJRADA_AMETHYST_CHUNK                  = new Item("VAJRADA_AMETHYST_CHUNK",                  4, ItemTypes.CHARACTER_ASCENSION_MATERIAL);
    static VAJRADA_AMETHYST_FRAGMENT               = new Item("VAJRADA_AMETHYST_FRAGMENT",               3, ItemTypes.CHARACTER_ASCENSION_MATERIAL);
    static VAJRADA_AMETHYST_SLIVER                 = new Item("VAJRADA_AMETHYST_SLIVER",                 2, ItemTypes.CHARACTER_ASCENSION_MATERIAL);
    static VAYUDA_TURQUOISE_GEMSTONE               = new Item("VAYUDA_TURQUOISE_GEMSTONE",               5, ItemTypes.CHARACTER_ASCENSION_MATERIAL);
    static VAYUDA_TURQUOISE_CHUNK                  = new Item("VAYUDA_TURQUOISE_CHUNK",                  4, ItemTypes.CHARACTER_ASCENSION_MATERIAL);
    static VAYUDA_TURQUOISE_FRAGMENT               = new Item("VAYUDA_TURQUOISE_FRAGMENT",               3, ItemTypes.CHARACTER_ASCENSION_MATERIAL);
    static VAYUDA_TURQUOISE_SLIVER                 = new Item("VAYUDA_TURQUOISE_SLIVER",                 2, ItemTypes.CHARACTER_ASCENSION_MATERIAL);
    static SHIVADA_JADE_GEMSTONE                   = new Item("SHIVADA_JADE_GEMSTONE",                   5, ItemTypes.CHARACTER_ASCENSION_MATERIAL);
    static SHIVADA_JADE_CHUNK                      = new Item("SHIVADA_JADE_CHUNK",                      4, ItemTypes.CHARACTER_ASCENSION_MATERIAL);
    static SHIVADA_JADE_FRAGMENT                   = new Item("SHIVADA_JADE_FRAGMENT",                   3, ItemTypes.CHARACTER_ASCENSION_MATERIAL);
    static SHIVADA_JADE_SLIVER                     = new Item("SHIVADA_JADE_SLIVER",                     2, ItemTypes.CHARACTER_ASCENSION_MATERIAL);
    static PRITHIVA_TOPAZ_GEMSTONE                 = new Item("PRITHIVA_TOPAZ_GEMSTONE",                 5, ItemTypes.CHARACTER_ASCENSION_MATERIAL);
    static PRITHIVA_TOPAZ_CHUNK                    = new Item("PRITHIVA_TOPAZ_CHUNK",                    4, ItemTypes.CHARACTER_ASCENSION_MATERIAL);
    static PRITHIVA_TOPAZ_FRAGMENT                 = new Item("PRITHIVA_TOPAZ_FRAGMENT",                 3, ItemTypes.CHARACTER_ASCENSION_MATERIAL);
    static PRITHIVA_TOPAZ_SLIVER                   = new Item("PRITHIVA_TOPAZ_SLIVER",                   2, ItemTypes.CHARACTER_ASCENSION_MATERIAL);
    //#endregion 
    //#region "BOOKS"    
    static PHILOSOPHIES_OF_FREEDOM                 = new Item("PHILOSOPHIES_OF_FREEDOM",                 4, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static GUIDE_TO_FREEDOM                        = new Item("GUIDE_TO_FREEDOM",                        3, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static TEACHINGS_OF_FREEDOM                    = new Item("TEACHINGS_OF_FREEDOM",                    2, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static PHILOSOPHIES_OF_RESISTANCE              = new Item("PHILOSOPHIES_OF_RESISTANCE",              4, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static GUIDE_TO_RESISTANCE                     = new Item("GUIDE_TO_RESISTANCE",                     3, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static TEACHINGS_OF_RESISTANCE                 = new Item("TEACHINGS_OF_RESISTANCE",                 2, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static PHILOSOPHIES_OF_BALLAD                  = new Item("PHILOSOPHIES_OF_BALLAD",                  4, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static GUIDE_TO_BALLAD                         = new Item("GUIDE_TO_BALLAD",                         3, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static TEACHINGS_OF_BALLAD                     = new Item("TEACHINGS_OF_BALLAD",                     2, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static PHILOSOPHIES_OF_PROSPERITY              = new Item("PHILOSOPHIES_OF_PROSPERITY",              4, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static GUIDE_TO_PROSPERITY                     = new Item("GUIDE_TO_PROSPERITY",                     3, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static TEACHINGS_OF_PROSPERITY                 = new Item("TEACHINGS_OF_PROSPERITY",                 2, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static PHILOSOPHIES_OF_DILIGENCE               = new Item("PHILOSOPHIES_OF_DILIGENCE",               4, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static GUIDE_TO_DILIGENCE                      = new Item("GUIDE_TO_DILIGENCE",                      3, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static TEACHINGS_OF_DILIGENCE                  = new Item("TEACHINGS_OF_DILIGENCE",                  2, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static PHILOSOPHIES_OF_GOLD                    = new Item("PHILOSOPHIES_OF_GOLD",                    4, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static GUIDE_TO_GOLD                           = new Item("GUIDE_TO_GOLD",                           3, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static TEACHINGS_OF_GOLD                       = new Item("TEACHINGS_OF_GOLD",                       2, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static PHILOSOPHIES_OF_TRANSIENCE              = new Item("PHILOSOPHIES_OF_TRANSIENCE",              4, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static GUIDE_TO_TRANSIENCE                     = new Item("GUIDE_TO_TRANSIENCE",                     3, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static TEACHINGS_OF_TRANSIENCE                 = new Item("TEACHINGS_OF_TRANSIENCE",                 2, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static PHILOSOPHIES_OF_ELEGANCE                = new Item("PHILOSOPHIES_OF_ELEGANCE",                4, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static GUIDE_TO_ELEGANCE                       = new Item("GUIDE_TO_ELEGANCE",                       3, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static TEACHINGS_OF_ELEGANCE                   = new Item("TEACHINGS_OF_ELEGANCE",                   2, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static PHILOSOPHIES_OF_LIGHT                   = new Item("PHILOSOPHIES_OF_LIGHT",                   4, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static GUIDE_TO_LIGHT                          = new Item("GUIDE_TO_LIGHT",                          3, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static TEACHINGS_OF_LIGHT                      = new Item("TEACHINGS_OF_LIGHT",                      2, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static PHILOSOPHIES_OF_ADMONITION              = new Item("PHILOSOPHIES_OF_ADMONITION",              4, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static GUIDE_TO_ADMONITION                     = new Item("GUIDE_TO_ADMONITION",                     3, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static TEACHINGS_OF_ADMONITION                 = new Item("TEACHINGS_OF_ADMONITION",                 2, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static PHILOSOPHIES_OF_INGENUITY               = new Item("PHILOSOPHIES_OF_INGENUITY",               4, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static GUIDE_TO_INGENUITY                      = new Item("GUIDE_TO_INGENUITY",                      3, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static TEACHINGS_OF_INGENUITY                  = new Item("TEACHINGS_OF_INGENUITY",                  2, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static PHILOSOPHIES_OF_PRAXIS                  = new Item("PHILOSOPHIES_OF_PRAXIS",                  4, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static GUIDE_TO_PRAXIS                         = new Item("GUIDE_TO_PRAXIS",                         3, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static TEACHINGS_OF_PRAXIS                     = new Item("TEACHINGS_OF_PRAXIS",                     2, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static PHILOSOPHIES_OF_EQUITY                  = new Item("PHILOSOPHIES_OF_EQUITY",                  4, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static GUIDE_TO_EQUITY                         = new Item("GUIDE_TO_EQUITY",                         3, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static TEACHINGS_OF_EQUITY                     = new Item("TEACHINGS_OF_EQUITY",                     2, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static PHILOSOPHIES_OF_JUSTICE                 = new Item("PHILOSOPHIES_OF_JUSTICE",                 4, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static GUIDE_TO_JUSTICE                        = new Item("GUIDE_TO_JUSTICE",                        3, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static TEACHINGS_OF_JUSTICE                    = new Item("TEACHINGS_OF_JUSTICE",                    2, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static PHILOSOPHIES_OF_ORDER                   = new Item("PHILOSOPHIES_OF_ORDER",                   4, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static GUIDE_TO_ORDER                          = new Item("GUIDE_TO_ORDER",                          3, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static TEACHINGS_OF_ORDER                      = new Item("TEACHINGS_OF_ORDER",                      2, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static PHILOSOPHIES_OF_CONTENTION              = new Item("PHILOSOPHIES_OF_CONTENTION",              4, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static GUIDE_TO_CONTENTION                     = new Item("GUIDE_TO_CONTENTION",                     3, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static TEACHINGS_OF_CONTENTION                 = new Item("TEACHINGS_OF_CONTENTION",                 2, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static PHILOSOPHIES_OF_KINDLING                = new Item("PHILOSOPHIES_OF_KINDLING",                4, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static GUIDE_TO_KINDLING                       = new Item("GUIDE_TO_KINDLING",                       3, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static TEACHINGS_OF_KINDLING                   = new Item("TEACHINGS_OF_KINDLING",                   2, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static PHILOSOPHIES_OF_CONFLICT                = new Item("PHILOSOPHIES_OF_CONFLICT",                4, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static GUIDE_TO_CONFLICT                       = new Item("GUIDE_TO_CONFLICT",                       3, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static TEACHINGS_OF_CONFLICT                   = new Item("TEACHINGS_OF_CONFLICT",                   2, ItemTypes.CHARACTER_TALENT_MATERIAL);
    //#endregion
    static CROWN_OF_INSIGHT                        = new Item("CROWN_OF_INSIGHT",                        5, ItemTypes.CHARACTER_TALENT_MATERIAL)
    //#region "DOMAIN DROP"
    static "SCATTERED_PIECE_OF_DECARABIAN'S_DREAM" = new Item("SCATTERED_PIECE_OF_DECARABIAN'S_DREAM",   5, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static "FRAGMENT_OF_DECARABIAN'S_EPIC"         = new Item("FRAGMENT_OF_DECARABIAN'S_EPIC",           4, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static "DEBRIS_OF_DECARABIAN'S_CITY"           = new Item("DEBRIS_OF_DECARABIAN'S_CITY",             3, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static "TILE_OF_DECARABIAN'S_TOWER"            = new Item("TILE_OF_DECARABIAN'S_TOWER",              2, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static "BOREAL_WOLF'S_NOSTALGIA"               = new Item("BOREAL_WOLF'S_NOSTALGIA",                 5, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static "BOREAL_WOLF'S_BROKEN_FANG"             = new Item("BOREAL_WOLF'S_BROKEN_FANG",               4, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static "BOREAL_WOLF'S_CRACKED_TOOTH"           = new Item("BOREAL_WOLF'S_CRACKED_TOOTH",             3, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static "BOREAL_WOLF'S_MILK_TOOTH"              = new Item("BOREAL_WOLF'S_MILK_TOOTH",                2, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static DREAM_OF_THE_DANDELION_GLADIATOR        = new Item("DREAM_OF_THE_DANDELION_GLADIATOR",        5, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static SHACKLES_OF_THE_DANDELION_GLADIATOR     = new Item("SHACKLES_OF_THE_DANDELION_GLADIATOR",     4, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static CHAINS_OF_THE_DANDELION_GLADIATOR       = new Item("CHAINS_OF_THE_DANDELION_GLADIATOR",       3, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static FETTERS_OF_THE_DANDELION_GLADIATOR      = new Item("FETTERS_OF_THE_DANDELION_GLADIATOR",      2, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static DIVINE_BODY_FROM_GUYUM                  = new Item("DIVINE_BODY_FROM_GUYUM",                  5, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static RELIC_FROM_GUYUM                        = new Item("RELIC_FROM_GUYUM",                        4, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static LUSTROUS_STONE_FROM_GUYUM               = new Item("LUSTROUS_STONE_FROM_GUYUM",               3, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static LUMINOUS_SANDS_FROM_GUYUM               = new Item("LUMINOUS_SANDS_FROM_GUYUM",               2, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static MIST_VEILED_PRIMO_ELIXIR                = new Item("MIST_VEILED_PRIMO_ELIXIR",                5, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static MIST_VEILED_GOLD_ELIXIR                 = new Item("MIST_VEILED_GOLD_ELIXIR",                 4, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static MIST_VEILED_MERCURY_ELIXIR              = new Item("MIST_VEILED_MERCURY_ELIXIR",              3, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static MIST_VEILED_LEAD_ELIXIR                 = new Item("MIST_VEILED_LEAD_ELIXIR",                 2, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static CHUNK_OF_AEROSIDERITE                   = new Item("CHUNK_OF_AEROSIDERITE",                   5, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static BIT_OF_AEROSIDERITE                     = new Item("BIT_OF_AEROSIDERITE",                     4, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static PIECE_OF_AEROSIDERITE                   = new Item("PIECE_OF_AEROSIDERITE",                   3, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static GRAIN_OF_AEROSIDERITE                   = new Item("GRAIN_OF_AEROSIDERITE",                   2, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static GOLDEN_BRANCH_OF_A_DISTANT_SEA          = new Item("GOLDEN_BRANCH_OF_A_DISTANT_SEA",          5, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static JADE_BRANCH_OF_A_DISTANT_SEA            = new Item("JADE_BRANCH_OF_A_DISTANT_SEA",            4, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static JEWELED_BRANCH_OF_A_DISTANT_SEA         = new Item("JEWELED_BRANCH_OF_A_DISTANT_SEA",         3, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static CORAL_BRANCH_OF_A_DISTANT_SEA           = new Item("CORAL_BRANCH_OF_A_DISTANT_SEA",           2, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static "NARUKAMI'S_VALOR"                      = new Item("NARUKAMI'S_VALOR",                        5, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static "NARUKAMI'S_AFFECTION"                  = new Item("NARUKAMI'S_AFFECTION",                    4, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static "NARUKAMI'S_JOY"                        = new Item("NARUKAMI'S_JOY",                          3, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static "NARUKAMI'S_WISDOM"                     = new Item("NARUKAMI'S_WISDOM",                       2, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static MASK_OF_THE_KIJIN                       = new Item("MASK_OF_THE_KIJIN",                       5, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static "MASK_OF_THE_ONE-HORNED"                = new Item("MASK_OF_THE_ONE-HORNED",                  4, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static "MASK_OF_THE_TIGER'S_BITE"              = new Item("MASK_OF_THE_TIGER'S_BITE",                3, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static MASK_OF_THE_WICKED_LIEUTENANT           = new Item("MASK_OF_THE_WICKED_LIEUTENANT",           2, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static GOLDEN_TALISMAN_OF_THE_FOREST_DEW       = new Item("GOLDEN_TALISMAN_OF_THE_FOREST_DEW",       5, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static SILVER_TALISMAN_OF_THE_FOREST_DEW       = new Item("SILVER_TALISMAN_OF_THE_FOREST_DEW",       4, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static IRON_TALISMAN_OF_THE_FOREST_DEW         = new Item("IRON_TALISMAN_OF_THE_FOREST_DEW",         3, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static COPPER_TALISMAN_OF_THE_FOREST_DEW       = new Item("COPPER_TALISMAN_OF_THE_FOREST_DEW",       2, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static "OASIS_GARDEN'S_TRUTH"                  = new Item("OASIS_GARDEN'S_TRUTH",                    5, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static "OASIS_GARDEN'S_MOURNING"               = new Item("OASIS_GARDEN'S_MOURNING",                 4, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static "OASIS_GARDEN'S_KINDNESS"               = new Item("OASIS_GARDEN'S_KINDNESS",                 3, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static "OASIS_GARDEN'S_REMINISCENCE"           = new Item("OASIS_GARDEN'S_REMINISCENCE",             2, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static OLDEN_DAYS_OF_SCORCHING_MIGHT           = new Item("OLDEN_DAYS_OF_SCORCHING_MIGHT",           5, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static DREAM_OF_SCORCHING_MIGHT                = new Item("DREAM_OF_SCORCHING_MIGHT",                4, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static REMNANT_GLOW_OF_SCORCHING_MIGHT         = new Item("REMNANT_GLOW_OF_SCORCHING_MIGHT",         3, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static ECHO_OF_SCORCHING_MIGHT                 = new Item("ECHO_OF_SCORCHING_MIGHT",                 2, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static ECHO_OF_AN_ANCIENT_CHORD                = new Item("ECHO_OF_AN_ANCIENT_CHORD",                5, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static MOVEMENT_OF_AN_ANCIENT_CHORD            = new Item("MOVEMENT_OF_AN_ANCIENT_CHORD",            4, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static CHAPTER_OF_AN_ANCIENT_CHORD             = new Item("CHAPTER_OF_AN_ANCIENT_CHORD",             3, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static FRAGMENT_OF_AN_ANCIENT_CHORD            = new Item("FRAGMENT_OF_AN_ANCIENT_CHORD",            2, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static ESSENCE_OF_PURE_SACRED_DEWDROP          = new Item("ESSENCE_OF_PURE_SACRED_DEWDROP",          5, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static SPRING_OF_PURE_SACRED_DEWDROP           = new Item("SPRING_OF_PURE_SACRED_DEWDROP",           4, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static SUBLIMATION_OF_PURE_SACRED_DEWDROP      = new Item("SUBLIMATION_OF_PURE_SACRED_DEWDROP",      3, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static DROSS_OF_PURE_SACRED_DEWDROP            = new Item("DROSS_OF_PURE_SACRED_DEWDROP",            2, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static GOLDEN_GOBLET_OF_THE_PRISTINE_SEA       = new Item("GOLDEN_GOBLET_OF_THE_PRISTINE_SEA",       5, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static SILVER_GOBLET_OF_THE_PRISTINE_SEA       = new Item("SILVER_GOBLET_OF_THE_PRISTINE_SEA",       4, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static WINE_GOBLET_OF_THE_PRISTINE_SEA         = new Item("WINE_GOBLET_OF_THE_PRISTINE_SEA",         3, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static BROKEN_GOBLET_OF_THE_PRISTINE_SEA       = new Item("BROKEN_GOBLET_OF_THE_PRISTINE_SEA",       2, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static "BLAZING_SACRIFICIAL_HEART'S_SPLENDOR"  = new Item("BLAZING_SACRIFICIAL_HEART'S_SPLENDOR",    5, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static "BLAZING_SACRIFICIAL_HEART'S_RESOLVE"   = new Item("BLAZING_SACRIFICIAL_HEART'S_RESOLVE",     4, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static "BLAZING_SACRIFICIAL_HEART'S_HESITANCE" = new Item("BLAZING_SACRIFICIAL_HEART'S_HESITANCE",   3, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static "BLAZING_SACRIFICIAL_HEART'S_TERROR"    = new Item("BLAZING_SACRIFICIAL_HEART'S_TERROR",      2, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static DELIRIOUS_DIVINITY_OF_THE_SACRED_LORD   = new Item("DELIRIOUS_DIVINITY_OF_THE_SACRED_LORD",   5, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static DELIRIOUS_DEMEANOR_OF_THE_SACRED_LORD   = new Item("DELIRIOUS_DEMEANOR_OF_THE_SACRED_LORD",   4, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static DELIRIOUS_DESOLATION_OF_THE_SACRED_LORD = new Item("DELIRIOUS_DESOLATION_OF_THE_SACRED_LORD", 3, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static DELIRIOUS_DECADENCE_OF_THE_SACRED_LORD  = new Item("DELIRIOUS_DECADENCE_OF_THE_SACRED_LORD",  2, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static "NIGHT-WIND'S_MYSTIC_REVELATION"        = new Item("NIGHT-WIND'S_MYSTIC_REVELATION",          5, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static "NIGHT-WIND'S_MYSTIC_AUGURY"            = new Item("NIGHT-WIND'S_MYSTIC_AUGURY",              4, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static "NIGHT-WIND'S_MYSTIC_PREMONITION"       = new Item("NIGHT-WIND'S_MYSTIC_PREMONITION",         3, ItemTypes.CHARACTER_TALENT_MATERIAL);
    static "NIGHT-WIND'S_MYSTIC_CONSIDERATION"     = new Item("NIGHT-WIND'S_MYSTIC_CONSIDERATION",       2, ItemTypes.CHARACTER_TALENT_MATERIAL);
    //#endregion
    //#region "LOCAL_SPECIALTY"
    static WOLFHOOK                                = new Item("WOLFHOOK",                                1, ItemTypes.LOCAL_SPECIALTY.MONDSTADT);
    static VALBERRY                                = new Item("VALBERRY",                                1, ItemTypes.LOCAL_SPECIALTY.MONDSTADT);
    static CECILIA                                 = new Item("CECILIA",                                 1, ItemTypes.LOCAL_SPECIALTY.MONDSTADT);
    static WINDWHEEL_ASTER                         = new Item("WINDWHEEL_ASTER",                         1, ItemTypes.LOCAL_SPECIALTY.MONDSTADT);
    static PHILANEMO_MUSHROOM                      = new Item("PHILANEMO_MUSHROOM",                      1, ItemTypes.LOCAL_SPECIALTY.MONDSTADT);
    static SMALL_LAMP_GRASS                        = new Item("SMALL_LAMP_GRASS",                        1, ItemTypes.LOCAL_SPECIALTY.MONDSTADT);
    static CALLA_LILY                              = new Item("CALLA_LILY",                              1, ItemTypes.LOCAL_SPECIALTY.MONDSTADT);
    static DANDELION_SEED                          = new Item("DANDELION_SEED",                          1, ItemTypes.LOCAL_SPECIALTY.MONDSTADT);
    static JUEYUN_CHILI                            = new Item("JUEYUN_CHILI",                            1, ItemTypes.LOCAL_SPECIALTY.LIYUE);
    static NOCTILUCOUS_JADE                        = new Item("NOCTILUCOUS_JADE",                        1, ItemTypes.LOCAL_SPECIALTY.LIYUE);
    static SILK_FLOWER                             = new Item("SILK_FLOWER",                             1, ItemTypes.LOCAL_SPECIALTY.LIYUE);
    static GLAZE_LILY                              = new Item("GLAZE_LILY",                              1, ItemTypes.LOCAL_SPECIALTY.LIYUE);
    static QINGXIN                                 = new Item("QINGXIN",                                 1, ItemTypes.LOCAL_SPECIALTY.LIYUE);
    static STARCONCH                               = new Item("STARCONCH",                               1, ItemTypes.LOCAL_SPECIALTY.LIYUE);
    static VIOLETGRASS                             = new Item("VIOLETGRASS",                             1, ItemTypes.LOCAL_SPECIALTY.LIYUE);
    static COR_LAPIS                               = new Item("COR_LAPIS",                               1, ItemTypes.LOCAL_SPECIALTY.LIYUE);
    static CLEARWATER_JADE                         = new Item("CLEARWATER_JADE",                         1, ItemTypes.LOCAL_SPECIALTY.LIYUE);
    static ONIKABUTO                               = new Item("ONIKABUTO",                               1, ItemTypes.LOCAL_SPECIALTY.INAZUMA);
    static SAKURA_BLOOM                            = new Item("SAKURA_BLOOM",                            1, ItemTypes.LOCAL_SPECIALTY.INAZUMA);
    static CRYSTAL_MARROW                          = new Item("CRYSTAL_MARROW",                          1, ItemTypes.LOCAL_SPECIALTY.INAZUMA);
    static DENDROBIUM                              = new Item("DENDROBIUM",                              1, ItemTypes.LOCAL_SPECIALTY.INAZUMA);
    static NAKU_WEED                               = new Item("NAKU_WEED",                               1, ItemTypes.LOCAL_SPECIALTY.INAZUMA);
    static SEA_GANODERMA                           = new Item("SEA_GANODERMA",                           1, ItemTypes.LOCAL_SPECIALTY.INAZUMA);
    static SANGO_PEARL                             = new Item("SANGO_PEARL",                             1, ItemTypes.LOCAL_SPECIALTY.INAZUMA);
    static AMAKUMO_FRUIT                           = new Item("AMAKUMO_FRUIT",                           1, ItemTypes.LOCAL_SPECIALTY.INAZUMA);
    static FLUORESCENT_FUNGUS                      = new Item("FLUORESCENT_FUNGUS",                      1, ItemTypes.LOCAL_SPECIALTY.INAZUMA);
    static RUKKHASHAVA_MUSHROOMS                   = new Item("RUKKHASHAVA_MUSHROOMS",                   1, ItemTypes.LOCAL_SPECIALTY.SUMERU);
    static PADISARAH                               = new Item("PADISARAH",                               1, ItemTypes.LOCAL_SPECIALTY.SUMERU);
    static NILOTPALA_LOTUS                         = new Item("NILOTPALA_LOTUS",                         1, ItemTypes.LOCAL_SPECIALTY.SUMERU);
    static KALPALATA_LOTUS                         = new Item("KALPALATA_LOTUS",                         1, ItemTypes.LOCAL_SPECIALTY.SUMERU);
    static HENNA_BERRY                             = new Item("HENNA_BERRY",                             1, ItemTypes.LOCAL_SPECIALTY.SUMERU);
    static SAND_GREASE_PUPA                        = new Item("SAND_GREASE_PUPA",                        1, ItemTypes.LOCAL_SPECIALTY.SUMERU);
    static MOURNING_FLOWER                         = new Item("MOURNING_FLOWER",                         1, ItemTypes.LOCAL_SPECIALTY.SUMERU);
    static TRISHIRAITE                             = new Item("TRISHIRAITE",                             1, ItemTypes.LOCAL_SPECIALTY.SUMERU);
    static SCARAB                                  = new Item("SCARAB",                                  1, ItemTypes.LOCAL_SPECIALTY.SUMERU);
    static BERYL_CONCH                             = new Item("BERYL_CONCH",                             1, ItemTypes.LOCAL_SPECIALTY.FONTAINE);
    static ROMARITIME_FLOWER                       = new Item("ROMARITIME_FLOWER",                       1, ItemTypes.LOCAL_SPECIALTY.FONTAINE);
    static LUMIDOUCE_BELL                          = new Item("LUMIDOUCE_BELL",                          1, ItemTypes.LOCAL_SPECIALTY.FONTAINE);
    static RAINBOW_ROSE                            = new Item("RAINBOW_ROSE",                            1, ItemTypes.LOCAL_SPECIALTY.FONTAINE);
    static LUMITOILE                               = new Item("LUMITOILE",                               1, ItemTypes.LOCAL_SPECIALTY.FONTAINE);
    static LAKELIGHT_LILY                          = new Item("LAKELIGHT_LILY",                          1, ItemTypes.LOCAL_SPECIALTY.FONTAINE);
    static SUBDETECTION_UNIT                       = new Item("SUBDETECTION_UNIT",                       1, ItemTypes.LOCAL_SPECIALTY.FONTAINE);
    static SPRING_OF_THE_FIRST_DEWDROP             = new Item("SPRING_OF_THE_FIRST_DEWDROP",             1, ItemTypes.LOCAL_SPECIALTY.FONTAINE);
    static SPRAYFEATHER_GILL                       = new Item("SPRAYFEATHER_GILL",                       1, ItemTypes.LOCAL_SPECIALTY.NATLAN);
    static BRILLIANT_CHRYSANTHEMUM                 = new Item("BRILLIANT_CHRYSANTHEMUM",                 1, ItemTypes.LOCAL_SPECIALTY.NATLAN);
    static QUENEPA_BERRY                           = new Item("QUENEPA_BERRY",                           1, ItemTypes.LOCAL_SPECIALTY.NATLAN);
    static SAURIAN_CLAW_SUCCULENT                  = new Item("SAURIAN_CLAW_SUCCULENT",                  1, ItemTypes.LOCAL_SPECIALTY.NATLAN);
    static GLOWING_HORNSHROOM                      = new Item("GLOWING_HORNSHROOM",                      1, ItemTypes.LOCAL_SPECIALTY.NATLAN);
    static WITHERING_PURPURBLOOM                   = new Item("WITHERING_PURPURBLOOM",                   1, ItemTypes.LOCAL_SPECIALTY.NATLAN);
    static SKYSPLIT_GEMBLOOM                       = new Item("SKYSPLIT_GEMBLOOM",                       1, ItemTypes.LOCAL_SPECIALTY.NATLAN);
    static DRACOLITE                               = new Item("DRACOLITE",                               1, ItemTypes.LOCAL_SPECIALTY.NATLAN);
    //#endregion
    //#endregion "LIST"
    
    /**
     * @param {number|String} key
     * @returns {Item}
     */
    static get(key) {
        let item;
        if(typeof key === "string") { item = ItemList[key]; } else
        if(typeof key === "number") { item = ItemList.get(ItemMap.get(key)); }
        return item;
    }

}
export const Items = new Proxy(ItemList, {
    get(target, prop) {
        if (!(prop in target)) {
            MISSING_ITEMS[prop] = (MISSING_ITEMS[prop] || 0) + 1
            // console.error(`Error: La variable 'Items.${prop}' no existe.`);
            return Items.UNKNOWN;
        }
        return target[prop];
    }
})
export function ItemsToJson() {
    const obj = {};
    for (const key of Object.getOwnPropertyNames(ItemList)) {
        if ( key !== 'length' && key !== 'name' && key !== 'map' && key !== 'prototype' && typeof ItemList[key] !== 'function' ) {
            obj[key] = ItemList.get(key).get_data();
        }
    }

    const json_string = JSON.stringify(obj, null, 2);
    const size_in_bytes = new TextEncoder().encode(json_string).length;
    let size_formatted;
         if (size_in_bytes <       1024) { size_formatted = `${size_in_bytes} B`;                            } 
    else if (size_in_bytes <    1048576) { size_formatted = `${(size_in_bytes / 1024).toFixed(2)} KB`;       } 
    else if (size_in_bytes < 1073741824) { size_formatted = `${(size_in_bytes / 1048576).toFixed(2)} MB`;    } 
    else                                 { size_formatted = `${(size_in_bytes / 1073741824).toFixed(2)} GB`; }
    console.log(`ItemList size (${size_in_bytes.toLocaleString("es-ES")} bytes): ~${size_formatted}`);
    return json_string;
}
