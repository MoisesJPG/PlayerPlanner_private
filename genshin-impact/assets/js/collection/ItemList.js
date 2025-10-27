import { ItemEntity } from "../entity/ItemEntity.js";
import { ItemTypes, ResumenTypes } from "../entity/struct/ItemStruct.js";

export const MISSING_ITEMS = {};

/**
 * @type {Map<number, string>}
 */
export const ItemMap = new Map();

class ItemList {
    
    static UNKNOWN                                   = new ItemEntity("UNKNOWN",                                  0, ItemTypes.UNKNOWN            , ResumenTypes.UNKNOWN);
    static EXP                                       = new ItemEntity("EXP",                                      1, ItemTypes.UNKNOWN            , ResumenTypes.MISC);
    static MORA                                      = new ItemEntity("MORA",                                     5, ItemTypes.COMMON_CURRENCY    , ResumenTypes.MISC);
    static PRIMOGEM                                  = new ItemEntity("PRIMOGEM",                                 5, ItemTypes.SPECIAL_CURRENCY   , ResumenTypes.MISC);
    static THE_CORNERSTONE_OF_STARS_AND_FLAMES       = new ItemEntity("THE_CORNERSTONE_OF_STARS_AND_FLAMES",      5, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"], ResumenTypes.MISC);
    
    /* =========================== */
    /* === ITEM GROUP: SPECIAL === */
    /* =========================== */
    //#region
    static CRIMSON_AGATE                             = new ItemEntity("CRIMSON_AGATE"                  , 1, ItemTypes.UNKNOWN               , ResumenTypes.MISC);
    static SMOLDERING_PHOSPHORESCENT_FLAME           = new ItemEntity("SMOLDERING_PHOSPHORESCENT_FLAME", 0, ItemTypes.REFINEMENT_MATERIAL   , ResumenTypes.MISC);
    static "HERO'S_WIT"                              = new ItemEntity("HERO'S_WIT"                     , 4, ItemTypes.CHARACTER_EXP_MATERIAL, ResumenTypes.MISC);
    static "ADVENTURER'S_EXPERIENCE"                 = new ItemEntity("ADVENTURER'S_EXPERIENCE"        , 3, ItemTypes.CHARACTER_EXP_MATERIAL, ResumenTypes.MISC);
    //#endregion
    
    /* ============================== */
    /* === ITEM GROUP: ENEMY DROP === */
    /* ============================== */
    //#region 
    static BLACK_CRYSTAL_HORN                        = new ItemEntity("BLACK_CRYSTAL_HORN",                       4, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static BLACK_BRONZE_HORN                         = new ItemEntity("BLACK_BRONZE_HORN",                        3, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static HEAVY_HORN                                = new ItemEntity("HEAVY_HORN",                               2, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static CHAOS_CORE                                = new ItemEntity("CHAOS_CORE",                               4, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static CHAOS_CIRCUIT                             = new ItemEntity("CHAOS_CIRCUIT",                            3, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static CHAOS_DEVICE                              = new ItemEntity("CHAOS_DEVICE",                             2, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static MIST_GRASS_WICK                           = new ItemEntity("MIST_GRASS_WICK",                          4, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static MIST_GRASS                                = new ItemEntity("MIST_GRASS",                               3, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static MIST_GRASS_POLLEN                         = new ItemEntity("MIST_GRASS_POLLEN",                        2, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static "INSPECTOR'S_SACRIFICIAL_KNIFE"           = new ItemEntity("INSPECTOR'S_SACRIFICIAL_KNIFE",            4, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static "AGENT'S_SACRIFICIAL_KNIFE"               = new ItemEntity("AGENT'S_SACRIFICIAL_KNIFE",                3, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static "HUNTER'S_SACRIFICIAL_KNIFE"              = new ItemEntity("HUNTER'S_SACRIFICIAL_KNIFE",               2, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static FOSSILIZED_BONE_SHARD                     = new ItemEntity("FOSSILIZED_BONE_SHARD",                    4, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static STURDY_BONE_SHARD                         = new ItemEntity("STURDY_BONE_SHARD",                        3, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static FRAGILE_BONE_SHARD                        = new ItemEntity("FRAGILE_BONE_SHARD",                       2, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static CHAOS_OCULUS                              = new ItemEntity("CHAOS_OCULUS",                             4, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static CHAOS_AXIS                                = new ItemEntity("CHAOS_AXIS",                               3, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static CHAOS_GEAR                                = new ItemEntity("CHAOS_GEAR",                               2, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static POLARIZING_PRISM                          = new ItemEntity("POLARIZING_PRISM",                         4, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static CRYSTAL_PRISM                             = new ItemEntity("CRYSTAL_PRISM",                            3, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static DISMAL_PRISM                              = new ItemEntity("DISMAL_PRISM",                             2, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static CONCEALED_TALON                           = new ItemEntity("CONCEALED_TALON",                          4, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static CONCEALED_UNGUIS                          = new ItemEntity("CONCEALED_UNGUIS",                         3, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static CONCEALED_CLAW                            = new ItemEntity("CONCEALED_CLAW",                           2, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static DEATHLY_STATUETTE                         = new ItemEntity("DEATHLY_STATUETTE",                        4, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static DARK_STATUETTE                            = new ItemEntity("DARK_STATUETTE",                           3, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static GLOOMY_STATUETTE                          = new ItemEntity("GLOOMY_STATUETTE",                         2, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static ROBUST_FUNGAL_NUCLEOUS                    = new ItemEntity("ROBUST_FUNGAL_NUCLEOUS",                   4, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static DORMANT_FUNGAL_NUCLEOUS                   = new ItemEntity("DORMANT_FUNGAL_NUCLEOUS",                  3, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static INACTIVATED_FUNGAL_NUCLEOUS               = new ItemEntity("INACTIVATED_FUNGAL_NUCLEOUS",              2, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static CHAOS_BOLT                                = new ItemEntity("CHAOS_BOLT",                               4, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static CHAOS_MODULE                              = new ItemEntity("CHAOS_MODULE",                             3, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static CHAOS_STORAGE                             = new ItemEntity("CHAOS_STORAGE",                            2, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static RADIANT_PRISM                             = new ItemEntity("RADIANT_PRISM",                            4, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static TURBID_PRISM                              = new ItemEntity("TURBID_PRISM",                             3, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static DAMAGED_PRISM                             = new ItemEntity("DAMAGED_PRISM",                            2, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static MARKED_SHELL                              = new ItemEntity("MARKED_SHELL",                             4, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static STURDY_SHELL                              = new ItemEntity("STURDY_SHELL",                             3, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static DESICCATED_SHELL                          = new ItemEntity("DESICCATED_SHELL",                         2, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static "WANDERER'S_BLOOMING_FLOWER"              = new ItemEntity("WANDERER'S_BLOOMING_FLOWER",               4, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static TREASURED_FLOWER                          = new ItemEntity("TREASURED_FLOWER",                         3, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static A_FLOWER_YET_TO_BLOOM                     = new ItemEntity("A_FLOWER_YET_TO_BLOOM",                    2, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static NEWBORN_TAINTED_HYDRO_PHANTASM            = new ItemEntity("NEWBORN_TAINTED_HYDRO_PHANTASM",           4, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static SCOOP_OF_TAINTED_WATER                    = new ItemEntity("SCOOP_OF_TAINTED_WATER",                   3, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static DROP_OF_TAINTED_WATER                     = new ItemEntity("DROP_OF_TAINTED_WATER",                    2, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static ALIEN_LIFE_CORE                           = new ItemEntity("ALIEN_LIFE_CORE",                          4, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static FOREIGN_SYNAPSE                           = new ItemEntity("FOREIGN_SYNAPSE",                          3, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static RIFT_CORE                                 = new ItemEntity("RIFT_CORE",                                2, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static "OPERATIVE'S_CONSTANCY"                   = new ItemEntity("OPERATIVE'S_CONSTANCY",                    4, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static "OPERATIVE'S_STANDARD_POCKET_WATCH"       = new ItemEntity("OPERATIVE'S_STANDARD_POCKET_WATCH",        3, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static "OLD_OPERATIVE'S_POCKET_WATCH"            = new ItemEntity("OLD_OPERATIVE'S_POCKET_WATCH",             2, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static CHASMLIGHT_FIN                            = new ItemEntity("CHASMLIGHT_FIN",                           4, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static LUNAR_FIN                                 = new ItemEntity("LUNAR_FIN",                                3, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static FEATHERY_FIN                              = new ItemEntity("FEATHERY_FIN",                             2, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static "STILL-SMOLDERING_HILT"                   = new ItemEntity("STILL-SMOLDERING_HILT",                    4, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static SPLINTERED_HILT                           = new ItemEntity("SPLINTERED_HILT",                          3, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static RUINED_HILT                               = new ItemEntity("RUINED_HILT",                              2, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static SIGIL_OF_A_STRIDING_WILL                  = new ItemEntity("SIGIL_OF_A_STRIDING_WILL",                 4, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static LOCUS_OF_A_CLEAR_WILL                     = new ItemEntity("LOCUS_OF_A_CLEAR_WILL",                    3, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static SHARD_OF_A_SHATTERED_WILL                 = new ItemEntity("SHARD_OF_A_SHATTERED_WILL",                2, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static IGNITED_SEEING_EYE                        = new ItemEntity("IGNITED_SEEING_EYE",                       4, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static IGNITED_SEED_OF_LIFE                      = new ItemEntity("IGNITED_SEED_OF_LIFE",                     3, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static IGNITED_STONE                             = new ItemEntity("IGNITED_STONE",                            2, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static HEART_OF_THE_SECRET_SOURCE                = new ItemEntity("HEART_OF_THE_SECRET_SOURCE",               4, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static SHEATH_OF_THE_SECRET_SOURCE               = new ItemEntity("SHEATH_OF_THE_SECRET_SOURCE",              3, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static AXIS_OF_THE_SECRET_SOURCE                 = new ItemEntity("AXIS_OF_THE_SECRET_SOURCE",                2, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static ILLUSORY_LEAFCOIL                         = new ItemEntity("ILLUSORY_LEAFCOIL",                        4, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static BEWILDERING_BROADLEAF                     = new ItemEntity("BEWILDERING_BROADLEAF",                    3, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static REFRACTIVE_BUD                            = new ItemEntity("REFRACTIVE_BUD",                           2, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static BLAZING_PRISMSHELL                        = new ItemEntity("BLAZING_PRISMSHELL",                       4, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static "WARM_BACK-SHELL"                         = new ItemEntity("WARM_BACK-SHELL",                          3, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static "COLD-CRACKED_SHELLSHARD"                 = new ItemEntity("COLD-CRACKED_SHELLSHARD",                  2, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static SLIME_CONCENTRATE                         = new ItemEntity("SLIME_CONCENTRATE",                        3, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static SLIME_SECRETIONS                          = new ItemEntity("SLIME_SECRETIONS",                         2, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static SLIME_CONDENSATE                          = new ItemEntity("SLIME_CONDENSATE",                         1, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static OMINOUS_MASK                              = new ItemEntity("OMINOUS_MASK",                             3, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static STAINED_MASK                              = new ItemEntity("STAINED_MASK",                             2, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static DAMAGED_MASK                              = new ItemEntity("DAMAGED_MASK",                             1, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static FORBIDDEN_CURSE_SCROLL                    = new ItemEntity("FORBIDDEN_CURSE_SCROLL",                   3, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static SEALED_SCROLL                             = new ItemEntity("SEALED_SCROLL",                            2, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static DIVINING_SCROLL                           = new ItemEntity("DIVINING_SCROLL",                          1, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static WEATHERED_ARROWHEAD                       = new ItemEntity("WEATHERED_ARROWHEAD",                      3, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static SHARP_ARROWHEAD                           = new ItemEntity("SHARP_ARROWHEAD",                          2, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static FIRM_ARROWHEAD                            = new ItemEntity("FIRM_ARROWHEAD",                           1, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static "LIEUTENANT'S_INSIGNIA"                   = new ItemEntity("LIEUTENANT'S_INSIGNIA",                    3, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static "SERGEANT'S_INSIGNIA"                     = new ItemEntity("SERGEANT'S_INSIGNIA",                      2, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static "RECRUIT'S_INSIGNIA"                      = new ItemEntity("RECRUIT'S_INSIGNIA",                       1, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static GOLDEN_RAVEN_INSIGNIA                     = new ItemEntity("GOLDEN_RAVEN_INSIGNIA",                    3, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static SILVER_RAVEN_INSIGNIA                     = new ItemEntity("SILVER_RAVEN_INSIGNIA",                    2, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static TREASURE_HOARDER_INSIGNIA                 = new ItemEntity("TREASURE_HOARDER_INSIGNIA",                1, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static ENERGY_NECTAR                             = new ItemEntity("ENERGY_NECTAR",                            3, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static SHIMMERING_NECTAR                         = new ItemEntity("SHIMMERING_NECTAR",                        2, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static WHOPPERFLOWER_NECTAR                      = new ItemEntity("WHOPPERFLOWER_NECTAR",                     1, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static FAMED_HANDGUARD                           = new ItemEntity("FAMED_HANDGUARD",                          3, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static KAGEUCHI_HANDGUARD                        = new ItemEntity("KAGEUCHI_HANDGUARD",                       2, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static OLD_HANDGUARD                             = new ItemEntity("OLD_HANDGUARD",                            1, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static SPECTRAL_NUCLEUS                          = new ItemEntity("SPECTRAL_NUCLEUS",                         3, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static SPECTRAL_HEART                            = new ItemEntity("SPECTRAL_HEART",                           2, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static SPECTRAL_HUSK                             = new ItemEntity("SPECTRAL_HUSK",                            1, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static CRYSTALLINE_CYST_DUST                     = new ItemEntity("CRYSTALLINE_CYST_DUST",                    3, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static LUMINESCENT_POLLEN                        = new ItemEntity("LUMINESCENT_POLLEN",                       2, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static FUNGAL_SPORES                             = new ItemEntity("FUNGAL_SPORES",                            1, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static RICH_RED_BROCADE                          = new ItemEntity("RICH_RED_BROCADE",                         3, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static TRIMMED_RED_SILK                          = new ItemEntity("TRIMMED_RED_SILK",                         2, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static FADED_RED_SATIN                           = new ItemEntity("FADED_RED_SATIN",                          1, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static XENOCHROMATIC_CRYSTAL                     = new ItemEntity("XENOCHROMATIC_CRYSTAL",                    3, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static TRANSOCEANIC_CHUNK                        = new ItemEntity("TRANSOCEANIC_CHUNK",                       2, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static TRANSOCEANIC_PEARL                        = new ItemEntity("TRANSOCEANIC_PEARL",                       1, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static ARTIFICED_DYNAMIC_GEAR                    = new ItemEntity("ARTIFICED_DYNAMIC_GEAR",                   3, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static MECHANICAL_SPUR_GEAR                      = new ItemEntity("MECHANICAL_SPUR_GEAR",                     2, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static MESHING_GEAR                              = new ItemEntity("MESHING_GEAR",                             1, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static "TYRANT'S_FANG"                           = new ItemEntity("TYRANT'S_FANG",                            3, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static SEASONED_FANG                             = new ItemEntity("SEASONED_FANG",                            2, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static JUVENILE_FANG                             = new ItemEntity("JUVENILE_FANG",                            1, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static "SAURIAN-CROWNED_WARRIOR'S_GOLDEN_WHISTLE"= new ItemEntity("SAURIAN-CROWNED_WARRIOR'S_GOLDEN_WHISTLE", 3, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static "WARRIOR'S_METAL_WHISTLE"                 = new ItemEntity("WARRIOR'S_METAL_WHISTLE",                  2, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static "SENTRY'S_WOODEN_WHISTLE"                 = new ItemEntity("SENTRY'S_WOODEN_WHISTLE",                  1, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static PRECISION_DRIVE_SHAFT                      = new ItemEntity("PRECISION_DRIVE_SHAFT",                   3, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static REINFORCED_DRIVE_SHAFT                     = new ItemEntity("REINFORCED_DRIVE_SHAFT",                  2, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static BROKEN_DRIVE_SHAFT                         = new ItemEntity("BROKEN_DRIVE_SHAFT",                      1, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static "FROST-ETCHED_WARRANT"                    = new ItemEntity("FROST-ETCHED_WARRANT",                     3, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static IMMACULATE_WARRANT                        = new ItemEntity("IMMACULATE_WARRANT",                       2, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON);
    static TATTERED_WARRANT                          = new ItemEntity("TATTERED_WARRANT",                         1, ItemTypes.CHARACTER_AND_WEAPON_ENHANCEMENT_MATERIAL, ResumenTypes.COMMON); 
    //#endregion

    /* =============================== */
    /* === ITEM GROUP: WEEKLY BOSS === */
    /* =============================== */
    //#region
    static "DVALIN'S_PLUME"                   = new ItemEntity("DVALIN'S_PLUME",                      5, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"], ResumenTypes.WEEKLY_BOSS);
    static "DVALIN'S_CLAW"                    = new ItemEntity("DVALIN'S_CLAW",                       5, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"], ResumenTypes.WEEKLY_BOSS);
    static "DVALIN'S_SIGH"                    = new ItemEntity("DVALIN'S_SIGH",                       5, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"], ResumenTypes.WEEKLY_BOSS);
    static TAIL_OF_BOREAS                     = new ItemEntity("TAIL_OF_BOREAS",                      5, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"], ResumenTypes.WEEKLY_BOSS);
    static RING_OF_BOREAS                     = new ItemEntity("RING_OF_BOREAS",                      5, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"], ResumenTypes.WEEKLY_BOSS);
    static SPIRIT_LOCKET_OF_BOREAS            = new ItemEntity("SPIRIT_LOCKET_OF_BOREAS",             5, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"], ResumenTypes.WEEKLY_BOSS);
    static TUSK_OF_MONOCEROS_CAELI            = new ItemEntity("TUSK_OF_MONOCEROS_CAELI",             5, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"], ResumenTypes.WEEKLY_BOSS);
    static SHARD_OF_A_FOUL_LEGACY             = new ItemEntity("SHARD_OF_A_FOUL_LEGACY",              5, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"], ResumenTypes.WEEKLY_BOSS);
    static SHADOW_OF_THE_WARRIOR              = new ItemEntity("SHADOW_OF_THE_WARRIOR",               5, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"], ResumenTypes.WEEKLY_BOSS);
    static "DRAGON_LORD'S_CROWN"              = new ItemEntity("DRAGON_LORD'S_CROWN",                 5, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"], ResumenTypes.WEEKLY_BOSS);
    static BLOODJADE_BRANCH                   = new ItemEntity("BLOODJADE_BRANCH",                    5, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"], ResumenTypes.WEEKLY_BOSS);
    static GILDED_SCALE                       = new ItemEntity("GILDED_SCALE",                        5, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"], ResumenTypes.WEEKLY_BOSS);
    static MOLTEN_MOMENT                      = new ItemEntity("MOLTEN_MOMENT",                       5, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"], ResumenTypes.WEEKLY_BOSS);
    static HELLFIRE_BUTTERFLY                 = new ItemEntity("HELLFIRE_BUTTERFLY",                  5, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"], ResumenTypes.WEEKLY_BOSS);
    static ASHEN_HEART                        = new ItemEntity("ASHEN_HEART",                         5, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"], ResumenTypes.WEEKLY_BOSS);
    static MUDRA_OF_THE_MALEFIC_GENERAL       = new ItemEntity("MUDRA_OF_THE_MALEFIC_GENERAL",        5, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"], ResumenTypes.WEEKLY_BOSS);
    static TEARS_OF_THE_CALAMITOUS_GOD        = new ItemEntity("TEARS_OF_THE_CALAMITOUS_GOD",         5, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"], ResumenTypes.WEEKLY_BOSS);
    static THE_MEANING_OF_AEONS               = new ItemEntity("THE_MEANING_OF_AEONS",                5, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"], ResumenTypes.WEEKLY_BOSS);
    static PUPPET_STRINGS                     = new ItemEntity("PUPPET_STRINGS",                      5, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"], ResumenTypes.WEEKLY_BOSS);
    static MIRROR_OF_MUSHIN                   = new ItemEntity("MIRROR_OF_MUSHIN",                    5, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"], ResumenTypes.WEEKLY_BOSS);
    static "DAKA'S_BELL"                      = new ItemEntity("DAKA'S_BELL",                         5, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"], ResumenTypes.WEEKLY_BOSS);
    static WORLDSPAN_FERN                     = new ItemEntity("WORLDSPAN_FERN",                      5, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"], ResumenTypes.WEEKLY_BOSS);
    static PRIMORDIAL_GREENBLOOM              = new ItemEntity("PRIMORDIAL_GREENBLOOM",               5, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"], ResumenTypes.WEEKLY_BOSS);
    static EVERAMBER                          = new ItemEntity("EVERAMBER",                           5, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"], ResumenTypes.WEEKLY_BOSS);
    static LIGHTLESS_SILK_STRING              = new ItemEntity("LIGHTLESS_SILK_STRING",               5, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"], ResumenTypes.WEEKLY_BOSS);    
    static LIGHTLESS_EYE_OF_THE_MAELSTROM     = new ItemEntity("LIGHTLESS_EYE_OF_THE_MAELSTROM",      5, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"], ResumenTypes.WEEKLY_BOSS);    
    static LIGHTLESS_MASS                     = new ItemEntity("LIGHTLESS_MASS",                      5, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"], ResumenTypes.WEEKLY_BOSS);    
    static FADING_CANDLE                      = new ItemEntity("FADING_CANDLE",                       5, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"], ResumenTypes.WEEKLY_BOSS);
    static SILKEN_FEATHER                     = new ItemEntity("SILKEN_FEATHER",                      5, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"], ResumenTypes.WEEKLY_BOSS);
    static DENIAL_AND_JUDGMENT                = new ItemEntity("DENIAL_AND_JUDGMENT",                 5, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"], ResumenTypes.WEEKLY_BOSS);
    static ERODED_HORN                        = new ItemEntity("ERODED_HORN",                         5, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"], ResumenTypes.WEEKLY_BOSS);
    static ERODED_SUNFIRE                     = new ItemEntity("ERODED_SUNFIRE",                      5, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"], ResumenTypes.WEEKLY_BOSS);
    static "ERODED_SCALE-FEATHER"             = new ItemEntity("ERODED_SCALE-FEATHER",                5, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"], ResumenTypes.WEEKLY_BOSS);
    static "ASCENDED_SAMPLE__KNIGHT"          = new ItemEntity("ASCENDED_SAMPLE__KNIGHT",             5, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"], ResumenTypes.WEEKLY_BOSS);
    static "ASCENDED_SAMPLE__ROOK"            = new ItemEntity("ASCENDED_SAMPLE__ROOK",               5, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"], ResumenTypes.WEEKLY_BOSS);
    static "ASCENDED_SAMPLE__QUEEN"           = new ItemEntity("ASCENDED_SAMPLE__QUEEN",              5, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"], ResumenTypes.WEEKLY_BOSS);
    
    //#endregion
    
    /* ============================== */
    /* === ITEM GROUP: WORLD BOSS === */
    /* ============================== */
    //#region
    static HURRICANE_SEED                                 = new ItemEntity("HURRICANE_SEED",                                 4, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"], ResumenTypes.WORLD_BOSS); 
    static LIGHTNING_PRISM                                = new ItemEntity("LIGHTNING_PRISM",                                4, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"], ResumenTypes.WORLD_BOSS); 
    static BASALT_PILLAR                                  = new ItemEntity("BASALT_PILLAR",                                  4, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"], ResumenTypes.WORLD_BOSS); 
    static HOARFROST_CORE                                 = new ItemEntity("HOARFROST_CORE",                                 4, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"], ResumenTypes.WORLD_BOSS); 
    static EVERFLAME_SEED                                 = new ItemEntity("EVERFLAME_SEED",                                 4, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"], ResumenTypes.WORLD_BOSS); 
    static CLEANSING_HEART                                = new ItemEntity("CLEANSING_HEART",                                4, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"], ResumenTypes.WORLD_BOSS); 
    static JUVENILE_JADE                                  = new ItemEntity("JUVENILE_JADE",                                  4, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"], ResumenTypes.WORLD_BOSS); 
    static CRYSTALLINE_BLOOM                              = new ItemEntity("CRYSTALLINE_BLOOM",                              4, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"], ResumenTypes.WORLD_BOSS); 
    static MARIONETTE_CORE                                = new ItemEntity("MARIONETTE_CORE",                                4, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"], ResumenTypes.WORLD_BOSS); 
    static PERPETUAL_HEART                                = new ItemEntity("PERPETUAL_HEART",                                4, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"], ResumenTypes.WORLD_BOSS); 
    static SMOLDERING_PEARL                               = new ItemEntity("SMOLDERING_PEARL",                               4, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"], ResumenTypes.WORLD_BOSS); 
    static DEW_OF_REPUDIATION                             = new ItemEntity("DEW_OF_REPUDIATION",                             4, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"], ResumenTypes.WORLD_BOSS); 
    static STORM_BEADS                                    = new ItemEntity("STORM_BEADS",                                    4, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"], ResumenTypes.WORLD_BOSS); 
    static RIFTBORN_REGALIA                               = new ItemEntity("RIFTBORN_REGALIA",                               4, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"], ResumenTypes.WORLD_BOSS); 
    static "DRAGONHEIR'S_FALSE_FIN"                       = new ItemEntity("DRAGONHEIR'S_FALSE_FIN",                         4, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"], ResumenTypes.WORLD_BOSS); 
    static RUNIC_FANG                                     = new ItemEntity("RUNIC_FANG",                                     4, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"], ResumenTypes.WORLD_BOSS); 
    static MAJESTIC_HOOKED_BEAK                           = new ItemEntity("MAJESTIC_HOOKED_BEAK",                           4, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"], ResumenTypes.WORLD_BOSS); 
    static THUNDERCLAP_FRUITCORE                          = new ItemEntity("THUNDERCLAP_FRUITCORE",                          4, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"], ResumenTypes.WORLD_BOSS); 
    static PERPETUAL_CALIBER                              = new ItemEntity("PERPETUAL_CALIBER",                              4, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"], ResumenTypes.WORLD_BOSS); 
    static LIGHT_GUIDING_TETRAHEDRON                      = new ItemEntity("LIGHT_GUIDING_TETRAHEDRON",                      4, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"], ResumenTypes.WORLD_BOSS); 
    static QUELLED_CREEPER                                = new ItemEntity("QUELLED_CREEPER",                                4, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"], ResumenTypes.WORLD_BOSS); 
    static "PSEUDO-STAMENS"                               = new ItemEntity("PSEUDO-STAMENS",                                 4, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"], ResumenTypes.WORLD_BOSS); 
    static EVERGLOOM_RING                                 = new ItemEntity("EVERGLOOM_RING",                                 4, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"], ResumenTypes.WORLD_BOSS); 
    static ARTIFICED_SPARE_CLOCKWORK_COMPONENT__COPPELIA  = new ItemEntity("ARTIFICED_SPARE_CLOCKWORK_COMPONENT__COPPELIA",  4, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"], ResumenTypes.WORLD_BOSS); 
    static ARTIFICED_SPARE_CLOCKWORK_COMPONENT__COPPELIUS = new ItemEntity("ARTIFICED_SPARE_CLOCKWORK_COMPONENT__COPPELIUS", 4, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"], ResumenTypes.WORLD_BOSS); 
    static "EMPEROR'S_RESOLUTION"                         = new ItemEntity("EMPEROR'S_RESOLUTION",                           4, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"], ResumenTypes.WORLD_BOSS); 
    static "\"TOURBILLON_DEVICE\""                        = new ItemEntity("\"TOURBILLON_DEVICE\"",                          4, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"], ResumenTypes.WORLD_BOSS); 
    static FONTEMER_UNIHORN                               = new ItemEntity("FONTEMER_UNIHORN",                               4, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"], ResumenTypes.WORLD_BOSS); 
    static WATER_THAT_FAILED_TO_TRANSCEND                 = new ItemEntity("WATER_THAT_FAILED_TO_TRANSCEND",                 4, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"], ResumenTypes.WORLD_BOSS); 
    static CLOUDSEAM_SCALE                                = new ItemEntity("CLOUDSEAM_SCALE",                                4, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"], ResumenTypes.WORLD_BOSS); 
    static FRAGMENT_OF_A_GOLDEN_MELODY                    = new ItemEntity("FRAGMENT_OF_A_GOLDEN_MELODY",                    4, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"], ResumenTypes.WORLD_BOSS); 
    static MARK_OF_THE_BINDING_BLESSING                   = new ItemEntity("MARK_OF_THE_BINDING_BLESSING",                   4, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"], ResumenTypes.WORLD_BOSS); 
    static OVERRIPE_FLAMEGRANATE                          = new ItemEntity("OVERRIPE_FLAMEGRANATE",                          4, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"], ResumenTypes.WORLD_BOSS); 
    static "GOLD-INSCRIBED_SECRET_SOURCE_CORE"            = new ItemEntity("GOLD-INSCRIBED_SECRET_SOURCE_CORE",              4, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"], ResumenTypes.WORLD_BOSS); 
    static ENSNARING_GAZE                                 = new ItemEntity("ENSNARING_GAZE",                                 4, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"], ResumenTypes.WORLD_BOSS); 
    static TALISMAN_OF_THE_ENIGMATIC_LAND                 = new ItemEntity("TALISMAN_OF_THE_ENIGMATIC_LAND",                 4, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"], ResumenTypes.WORLD_BOSS); 
    static SPARKLESS_STATUE_CORE                          = new ItemEntity("SPARKLESS_STATUE_CORE",                          4, ItemTypes["CHARACTER_LEVEL-UP_MATERIAL"], ResumenTypes.WORLD_BOSS); 
    static SECRET_SOURCE_AIRFLOW_ACCUMULATOR          = new ItemEntity("SECRET_SOURCE_AIRFLOW_ACCUMULATOR",       4, ItemTypes.UNKNOWN            , ResumenTypes.WORLD_BOSS);
    static PRECISION_KUUVAHKI_STAMPING_DIE            = new ItemEntity("PRECISION_KUUVAHKI_STAMPING_DIE",         4, ItemTypes.UNKNOWN            , ResumenTypes.WORLD_BOSS);
    static "LIGHTBEARING_SCALE-FEATHER"               = new ItemEntity("LIGHTBEARING_SCALE-FEATHER",              4, ItemTypes.UNKNOWN            , ResumenTypes.WORLD_BOSS);
    static RADIANT_ANTLER                             = new ItemEntity("RADIANT_ANTLER",                          4, ItemTypes.UNKNOWN            , ResumenTypes.WORLD_BOSS);
    //#endregion 
    
    /* ============================= */
    /* === ITEM GROUP: GEMSTONES === */
    /* ============================= */
    //#region
    static BRILLIANT_DIAMOND_GEMSTONE              = new ItemEntity("BRILLIANT_DIAMOND_GEMSTONE",              5, ItemTypes.CHARACTER_ASCENSION_MATERIAL, ResumenTypes.GEMSTONES);
    static BRILLIANT_DIAMOND_CHUNK                 = new ItemEntity("BRILLIANT_DIAMOND_CHUNK",                 4, ItemTypes.CHARACTER_ASCENSION_MATERIAL, ResumenTypes.GEMSTONES);
    static BRILLIANT_DIAMOND_FRAGMENT              = new ItemEntity("BRILLIANT_DIAMOND_FRAGMENT",              3, ItemTypes.CHARACTER_ASCENSION_MATERIAL, ResumenTypes.GEMSTONES);
    static BRILLIANT_DIAMOND_SLIVER                = new ItemEntity("BRILLIANT_DIAMOND_SLIVER",                2, ItemTypes.CHARACTER_ASCENSION_MATERIAL, ResumenTypes.GEMSTONES);
    static AGNIDUS_AGATE_GEMSTONE                  = new ItemEntity("AGNIDUS_AGATE_GEMSTONE",                  5, ItemTypes.CHARACTER_ASCENSION_MATERIAL, ResumenTypes.GEMSTONES);
    static AGNIDUS_AGATE_CHUNK                     = new ItemEntity("AGNIDUS_AGATE_CHUNK",                     4, ItemTypes.CHARACTER_ASCENSION_MATERIAL, ResumenTypes.GEMSTONES);
    static AGNIDUS_AGATE_FRAGMENT                  = new ItemEntity("AGNIDUS_AGATE_FRAGMENT",                  3, ItemTypes.CHARACTER_ASCENSION_MATERIAL, ResumenTypes.GEMSTONES);
    static AGNIDUS_AGATE_SLIVER                    = new ItemEntity("AGNIDUS_AGATE_SLIVER",                    2, ItemTypes.CHARACTER_ASCENSION_MATERIAL, ResumenTypes.GEMSTONES);
    static VARUNADA_LAZURITE_GEMSTONE              = new ItemEntity("VARUNADA_LAZURITE_GEMSTONE",              5, ItemTypes.CHARACTER_ASCENSION_MATERIAL, ResumenTypes.GEMSTONES);
    static VARUNADA_LAZURITE_CHUNK                 = new ItemEntity("VARUNADA_LAZURITE_CHUNK",                 4, ItemTypes.CHARACTER_ASCENSION_MATERIAL, ResumenTypes.GEMSTONES);
    static VARUNADA_LAZURITE_FRAGMENT              = new ItemEntity("VARUNADA_LAZURITE_FRAGMENT",              3, ItemTypes.CHARACTER_ASCENSION_MATERIAL, ResumenTypes.GEMSTONES);
    static VARUNADA_LAZURITE_SLIVER                = new ItemEntity("VARUNADA_LAZURITE_SLIVER",                2, ItemTypes.CHARACTER_ASCENSION_MATERIAL, ResumenTypes.GEMSTONES);
    static NAGADUS_EMERALD_GEMSTONE                = new ItemEntity("NAGADUS_EMERALD_GEMSTONE",                5, ItemTypes.CHARACTER_ASCENSION_MATERIAL, ResumenTypes.GEMSTONES);
    static NAGADUS_EMERALD_CHUNK                   = new ItemEntity("NAGADUS_EMERALD_CHUNK",                   4, ItemTypes.CHARACTER_ASCENSION_MATERIAL, ResumenTypes.GEMSTONES);
    static NAGADUS_EMERALD_FRAGMENT                = new ItemEntity("NAGADUS_EMERALD_FRAGMENT",                3, ItemTypes.CHARACTER_ASCENSION_MATERIAL, ResumenTypes.GEMSTONES);
    static NAGADUS_EMERALD_SLIVER                  = new ItemEntity("NAGADUS_EMERALD_SLIVER",                  2, ItemTypes.CHARACTER_ASCENSION_MATERIAL, ResumenTypes.GEMSTONES);
    static VAJRADA_AMETHYST_GEMSTONE               = new ItemEntity("VAJRADA_AMETHYST_GEMSTONE",               5, ItemTypes.CHARACTER_ASCENSION_MATERIAL, ResumenTypes.GEMSTONES);
    static VAJRADA_AMETHYST_CHUNK                  = new ItemEntity("VAJRADA_AMETHYST_CHUNK",                  4, ItemTypes.CHARACTER_ASCENSION_MATERIAL, ResumenTypes.GEMSTONES);
    static VAJRADA_AMETHYST_FRAGMENT               = new ItemEntity("VAJRADA_AMETHYST_FRAGMENT",               3, ItemTypes.CHARACTER_ASCENSION_MATERIAL, ResumenTypes.GEMSTONES);
    static VAJRADA_AMETHYST_SLIVER                 = new ItemEntity("VAJRADA_AMETHYST_SLIVER",                 2, ItemTypes.CHARACTER_ASCENSION_MATERIAL, ResumenTypes.GEMSTONES);
    static VAYUDA_TURQUOISE_GEMSTONE               = new ItemEntity("VAYUDA_TURQUOISE_GEMSTONE",               5, ItemTypes.CHARACTER_ASCENSION_MATERIAL, ResumenTypes.GEMSTONES);
    static VAYUDA_TURQUOISE_CHUNK                  = new ItemEntity("VAYUDA_TURQUOISE_CHUNK",                  4, ItemTypes.CHARACTER_ASCENSION_MATERIAL, ResumenTypes.GEMSTONES);
    static VAYUDA_TURQUOISE_FRAGMENT               = new ItemEntity("VAYUDA_TURQUOISE_FRAGMENT",               3, ItemTypes.CHARACTER_ASCENSION_MATERIAL, ResumenTypes.GEMSTONES);
    static VAYUDA_TURQUOISE_SLIVER                 = new ItemEntity("VAYUDA_TURQUOISE_SLIVER",                 2, ItemTypes.CHARACTER_ASCENSION_MATERIAL, ResumenTypes.GEMSTONES);
    static SHIVADA_JADE_GEMSTONE                   = new ItemEntity("SHIVADA_JADE_GEMSTONE",                   5, ItemTypes.CHARACTER_ASCENSION_MATERIAL, ResumenTypes.GEMSTONES);
    static SHIVADA_JADE_CHUNK                      = new ItemEntity("SHIVADA_JADE_CHUNK",                      4, ItemTypes.CHARACTER_ASCENSION_MATERIAL, ResumenTypes.GEMSTONES);
    static SHIVADA_JADE_FRAGMENT                   = new ItemEntity("SHIVADA_JADE_FRAGMENT",                   3, ItemTypes.CHARACTER_ASCENSION_MATERIAL, ResumenTypes.GEMSTONES);
    static SHIVADA_JADE_SLIVER                     = new ItemEntity("SHIVADA_JADE_SLIVER",                     2, ItemTypes.CHARACTER_ASCENSION_MATERIAL, ResumenTypes.GEMSTONES);
    static PRITHIVA_TOPAZ_GEMSTONE                 = new ItemEntity("PRITHIVA_TOPAZ_GEMSTONE",                 5, ItemTypes.CHARACTER_ASCENSION_MATERIAL, ResumenTypes.GEMSTONES);
    static PRITHIVA_TOPAZ_CHUNK                    = new ItemEntity("PRITHIVA_TOPAZ_CHUNK",                    4, ItemTypes.CHARACTER_ASCENSION_MATERIAL, ResumenTypes.GEMSTONES);
    static PRITHIVA_TOPAZ_FRAGMENT                 = new ItemEntity("PRITHIVA_TOPAZ_FRAGMENT",                 3, ItemTypes.CHARACTER_ASCENSION_MATERIAL, ResumenTypes.GEMSTONES);
    static PRITHIVA_TOPAZ_SLIVER                   = new ItemEntity("PRITHIVA_TOPAZ_SLIVER",                   2, ItemTypes.CHARACTER_ASCENSION_MATERIAL, ResumenTypes.GEMSTONES);
    //#endregion 
    
    /* ========================= */
    /* === ITEM GROUP: BOOKS === */
    /* ========================= */
    //#region    
    static PHILOSOPHIES_OF_FREEDOM                 = new ItemEntity("PHILOSOPHIES_OF_FREEDOM",                 4, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static GUIDE_TO_FREEDOM                        = new ItemEntity("GUIDE_TO_FREEDOM",                        3, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static TEACHINGS_OF_FREEDOM                    = new ItemEntity("TEACHINGS_OF_FREEDOM",                    2, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static PHILOSOPHIES_OF_RESISTANCE              = new ItemEntity("PHILOSOPHIES_OF_RESISTANCE",              4, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static GUIDE_TO_RESISTANCE                     = new ItemEntity("GUIDE_TO_RESISTANCE",                     3, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static TEACHINGS_OF_RESISTANCE                 = new ItemEntity("TEACHINGS_OF_RESISTANCE",                 2, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static PHILOSOPHIES_OF_BALLAD                  = new ItemEntity("PHILOSOPHIES_OF_BALLAD",                  4, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static GUIDE_TO_BALLAD                         = new ItemEntity("GUIDE_TO_BALLAD",                         3, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static TEACHINGS_OF_BALLAD                     = new ItemEntity("TEACHINGS_OF_BALLAD",                     2, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static PHILOSOPHIES_OF_PROSPERITY              = new ItemEntity("PHILOSOPHIES_OF_PROSPERITY",              4, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static GUIDE_TO_PROSPERITY                     = new ItemEntity("GUIDE_TO_PROSPERITY",                     3, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static TEACHINGS_OF_PROSPERITY                 = new ItemEntity("TEACHINGS_OF_PROSPERITY",                 2, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static PHILOSOPHIES_OF_DILIGENCE               = new ItemEntity("PHILOSOPHIES_OF_DILIGENCE",               4, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static GUIDE_TO_DILIGENCE                      = new ItemEntity("GUIDE_TO_DILIGENCE",                      3, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static TEACHINGS_OF_DILIGENCE                  = new ItemEntity("TEACHINGS_OF_DILIGENCE",                  2, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static PHILOSOPHIES_OF_GOLD                    = new ItemEntity("PHILOSOPHIES_OF_GOLD",                    4, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static GUIDE_TO_GOLD                           = new ItemEntity("GUIDE_TO_GOLD",                           3, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static TEACHINGS_OF_GOLD                       = new ItemEntity("TEACHINGS_OF_GOLD",                       2, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static PHILOSOPHIES_OF_TRANSIENCE              = new ItemEntity("PHILOSOPHIES_OF_TRANSIENCE",              4, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static GUIDE_TO_TRANSIENCE                     = new ItemEntity("GUIDE_TO_TRANSIENCE",                     3, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static TEACHINGS_OF_TRANSIENCE                 = new ItemEntity("TEACHINGS_OF_TRANSIENCE",                 2, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static PHILOSOPHIES_OF_ELEGANCE                = new ItemEntity("PHILOSOPHIES_OF_ELEGANCE",                4, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static GUIDE_TO_ELEGANCE                       = new ItemEntity("GUIDE_TO_ELEGANCE",                       3, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static TEACHINGS_OF_ELEGANCE                   = new ItemEntity("TEACHINGS_OF_ELEGANCE",                   2, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static PHILOSOPHIES_OF_LIGHT                   = new ItemEntity("PHILOSOPHIES_OF_LIGHT",                   4, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static GUIDE_TO_LIGHT                          = new ItemEntity("GUIDE_TO_LIGHT",                          3, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static TEACHINGS_OF_LIGHT                      = new ItemEntity("TEACHINGS_OF_LIGHT",                      2, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static PHILOSOPHIES_OF_ADMONITION              = new ItemEntity("PHILOSOPHIES_OF_ADMONITION",              4, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static GUIDE_TO_ADMONITION                     = new ItemEntity("GUIDE_TO_ADMONITION",                     3, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static TEACHINGS_OF_ADMONITION                 = new ItemEntity("TEACHINGS_OF_ADMONITION",                 2, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static PHILOSOPHIES_OF_INGENUITY               = new ItemEntity("PHILOSOPHIES_OF_INGENUITY",               4, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static GUIDE_TO_INGENUITY                      = new ItemEntity("GUIDE_TO_INGENUITY",                      3, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static TEACHINGS_OF_INGENUITY                  = new ItemEntity("TEACHINGS_OF_INGENUITY",                  2, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static PHILOSOPHIES_OF_PRAXIS                  = new ItemEntity("PHILOSOPHIES_OF_PRAXIS",                  4, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static GUIDE_TO_PRAXIS                         = new ItemEntity("GUIDE_TO_PRAXIS",                         3, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static TEACHINGS_OF_PRAXIS                     = new ItemEntity("TEACHINGS_OF_PRAXIS",                     2, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static PHILOSOPHIES_OF_EQUITY                  = new ItemEntity("PHILOSOPHIES_OF_EQUITY",                  4, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static GUIDE_TO_EQUITY                         = new ItemEntity("GUIDE_TO_EQUITY",                         3, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static TEACHINGS_OF_EQUITY                     = new ItemEntity("TEACHINGS_OF_EQUITY",                     2, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static PHILOSOPHIES_OF_JUSTICE                 = new ItemEntity("PHILOSOPHIES_OF_JUSTICE",                 4, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static GUIDE_TO_JUSTICE                        = new ItemEntity("GUIDE_TO_JUSTICE",                        3, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static TEACHINGS_OF_JUSTICE                    = new ItemEntity("TEACHINGS_OF_JUSTICE",                    2, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static PHILOSOPHIES_OF_ORDER                   = new ItemEntity("PHILOSOPHIES_OF_ORDER",                   4, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static GUIDE_TO_ORDER                          = new ItemEntity("GUIDE_TO_ORDER",                          3, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static TEACHINGS_OF_ORDER                      = new ItemEntity("TEACHINGS_OF_ORDER",                      2, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static PHILOSOPHIES_OF_CONTENTION              = new ItemEntity("PHILOSOPHIES_OF_CONTENTION",              4, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static GUIDE_TO_CONTENTION                     = new ItemEntity("GUIDE_TO_CONTENTION",                     3, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static TEACHINGS_OF_CONTENTION                 = new ItemEntity("TEACHINGS_OF_CONTENTION",                 2, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static PHILOSOPHIES_OF_KINDLING                = new ItemEntity("PHILOSOPHIES_OF_KINDLING",                4, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static GUIDE_TO_KINDLING                       = new ItemEntity("GUIDE_TO_KINDLING",                       3, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static TEACHINGS_OF_KINDLING                   = new ItemEntity("TEACHINGS_OF_KINDLING",                   2, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static PHILOSOPHIES_OF_CONFLICT                = new ItemEntity("PHILOSOPHIES_OF_CONFLICT",                4, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static GUIDE_TO_CONFLICT                       = new ItemEntity("GUIDE_TO_CONFLICT",                       3, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static TEACHINGS_OF_CONFLICT                   = new ItemEntity("TEACHINGS_OF_CONFLICT",                   2, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static PHILOSOPHIES_OF_MOONLIGHT               = new ItemEntity("PHILOSOPHIES_OF_MOONLIGHT",               4, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static GUIDE_TO_MOONLIGHT                      = new ItemEntity("GUIDE_TO_MOONLIGHT",                      3, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static TEACHINGS_OF_MOONLIGHT                  = new ItemEntity("TEACHINGS_OF_MOONLIGHT",                  2, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static PHILOSOPHIES_OF_ELYSIUM                 = new ItemEntity("PHILOSOPHIES_OF_ELYSIUM",                 4, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static GUIDE_TO_ELYSIUM                        = new ItemEntity("GUIDE_TO_ELYSIUM",                        3, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static TEACHINGS_OF_ELYSIUM                    = new ItemEntity("TEACHINGS_OF_ELYSIUM",                    2, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static PHILOSOPHIES_OF_VAGRANCY                = new ItemEntity("PHILOSOPHIES_OF_VAGRANCY",                4, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static GUIDE_TO_VAGRANCY                       = new ItemEntity("GUIDE_TO_VAGRANCY",                       3, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static TEACHINGS_OF_VAGRANCY                   = new ItemEntity("TEACHINGS_OF_VAGRANCY",                   2, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);

    //#endregion
    
    static CROWN_OF_INSIGHT                               = new ItemEntity("CROWN_OF_INSIGHT",                        5, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.MISC);
    
    /* =============================== */
    /* === ITEM GROUP: DOMAIN DROP === */
    /* =============================== */
    //#region
    static "SCATTERED_PIECE_OF_DECARABIAN'S_DREAM" = new ItemEntity("SCATTERED_PIECE_OF_DECARABIAN'S_DREAM",   5, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static "FRAGMENT_OF_DECARABIAN'S_EPIC"         = new ItemEntity("FRAGMENT_OF_DECARABIAN'S_EPIC",           4, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static "DEBRIS_OF_DECARABIAN'S_CITY"           = new ItemEntity("DEBRIS_OF_DECARABIAN'S_CITY",             3, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static "TILE_OF_DECARABIAN'S_TOWER"            = new ItemEntity("TILE_OF_DECARABIAN'S_TOWER",              2, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static "BOREAL_WOLF'S_NOSTALGIA"               = new ItemEntity("BOREAL_WOLF'S_NOSTALGIA",                 5, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static "BOREAL_WOLF'S_BROKEN_FANG"             = new ItemEntity("BOREAL_WOLF'S_BROKEN_FANG",               4, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static "BOREAL_WOLF'S_CRACKED_TOOTH"           = new ItemEntity("BOREAL_WOLF'S_CRACKED_TOOTH",             3, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static "BOREAL_WOLF'S_MILK_TOOTH"              = new ItemEntity("BOREAL_WOLF'S_MILK_TOOTH",                2, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static DREAM_OF_THE_DANDELION_GLADIATOR        = new ItemEntity("DREAM_OF_THE_DANDELION_GLADIATOR",        5, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static SHACKLES_OF_THE_DANDELION_GLADIATOR     = new ItemEntity("SHACKLES_OF_THE_DANDELION_GLADIATOR",     4, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static CHAINS_OF_THE_DANDELION_GLADIATOR       = new ItemEntity("CHAINS_OF_THE_DANDELION_GLADIATOR",       3, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static FETTERS_OF_THE_DANDELION_GLADIATOR      = new ItemEntity("FETTERS_OF_THE_DANDELION_GLADIATOR",      2, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static DIVINE_BODY_FROM_GUYUM                  = new ItemEntity("DIVINE_BODY_FROM_GUYUM",                  5, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static RELIC_FROM_GUYUM                        = new ItemEntity("RELIC_FROM_GUYUM",                        4, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static LUSTROUS_STONE_FROM_GUYUM               = new ItemEntity("LUSTROUS_STONE_FROM_GUYUM",               3, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static LUMINOUS_SANDS_FROM_GUYUM               = new ItemEntity("LUMINOUS_SANDS_FROM_GUYUM",               2, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static MIST_VEILED_PRIMO_ELIXIR                = new ItemEntity("MIST_VEILED_PRIMO_ELIXIR",                5, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static MIST_VEILED_GOLD_ELIXIR                 = new ItemEntity("MIST_VEILED_GOLD_ELIXIR",                 4, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static MIST_VEILED_MERCURY_ELIXIR              = new ItemEntity("MIST_VEILED_MERCURY_ELIXIR",              3, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static MIST_VEILED_LEAD_ELIXIR                 = new ItemEntity("MIST_VEILED_LEAD_ELIXIR",                 2, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static CHUNK_OF_AEROSIDERITE                   = new ItemEntity("CHUNK_OF_AEROSIDERITE",                   5, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static BIT_OF_AEROSIDERITE                     = new ItemEntity("BIT_OF_AEROSIDERITE",                     4, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static PIECE_OF_AEROSIDERITE                   = new ItemEntity("PIECE_OF_AEROSIDERITE",                   3, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static GRAIN_OF_AEROSIDERITE                   = new ItemEntity("GRAIN_OF_AEROSIDERITE",                   2, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static GOLDEN_BRANCH_OF_A_DISTANT_SEA          = new ItemEntity("GOLDEN_BRANCH_OF_A_DISTANT_SEA",          5, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static JADE_BRANCH_OF_A_DISTANT_SEA            = new ItemEntity("JADE_BRANCH_OF_A_DISTANT_SEA",            4, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static JEWELED_BRANCH_OF_A_DISTANT_SEA         = new ItemEntity("JEWELED_BRANCH_OF_A_DISTANT_SEA",         3, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static CORAL_BRANCH_OF_A_DISTANT_SEA           = new ItemEntity("CORAL_BRANCH_OF_A_DISTANT_SEA",           2, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static "NARUKAMI'S_VALOR"                      = new ItemEntity("NARUKAMI'S_VALOR",                        5, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static "NARUKAMI'S_AFFECTION"                  = new ItemEntity("NARUKAMI'S_AFFECTION",                    4, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static "NARUKAMI'S_JOY"                        = new ItemEntity("NARUKAMI'S_JOY",                          3, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static "NARUKAMI'S_WISDOM"                     = new ItemEntity("NARUKAMI'S_WISDOM",                       2, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static MASK_OF_THE_KIJIN                       = new ItemEntity("MASK_OF_THE_KIJIN",                       5, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static "MASK_OF_THE_ONE-HORNED"                = new ItemEntity("MASK_OF_THE_ONE-HORNED",                  4, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static "MASK_OF_THE_TIGER'S_BITE"              = new ItemEntity("MASK_OF_THE_TIGER'S_BITE",                3, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static MASK_OF_THE_WICKED_LIEUTENANT           = new ItemEntity("MASK_OF_THE_WICKED_LIEUTENANT",           2, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static GOLDEN_TALISMAN_OF_THE_FOREST_DEW       = new ItemEntity("GOLDEN_TALISMAN_OF_THE_FOREST_DEW",       5, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static SILVER_TALISMAN_OF_THE_FOREST_DEW       = new ItemEntity("SILVER_TALISMAN_OF_THE_FOREST_DEW",       4, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static IRON_TALISMAN_OF_THE_FOREST_DEW         = new ItemEntity("IRON_TALISMAN_OF_THE_FOREST_DEW",         3, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static COPPER_TALISMAN_OF_THE_FOREST_DEW       = new ItemEntity("COPPER_TALISMAN_OF_THE_FOREST_DEW",       2, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static "OASIS_GARDEN'S_TRUTH"                  = new ItemEntity("OASIS_GARDEN'S_TRUTH",                    5, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static "OASIS_GARDEN'S_MOURNING"               = new ItemEntity("OASIS_GARDEN'S_MOURNING",                 4, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static "OASIS_GARDEN'S_KINDNESS"               = new ItemEntity("OASIS_GARDEN'S_KINDNESS",                 3, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static "OASIS_GARDEN'S_REMINISCENCE"           = new ItemEntity("OASIS_GARDEN'S_REMINISCENCE",             2, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static OLDEN_DAYS_OF_SCORCHING_MIGHT           = new ItemEntity("OLDEN_DAYS_OF_SCORCHING_MIGHT",           5, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static DREAM_OF_SCORCHING_MIGHT                = new ItemEntity("DREAM_OF_SCORCHING_MIGHT",                4, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static REMNANT_GLOW_OF_SCORCHING_MIGHT         = new ItemEntity("REMNANT_GLOW_OF_SCORCHING_MIGHT",         3, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static ECHO_OF_SCORCHING_MIGHT                 = new ItemEntity("ECHO_OF_SCORCHING_MIGHT",                 2, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static ECHO_OF_AN_ANCIENT_CHORD                = new ItemEntity("ECHO_OF_AN_ANCIENT_CHORD",                5, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static MOVEMENT_OF_AN_ANCIENT_CHORD            = new ItemEntity("MOVEMENT_OF_AN_ANCIENT_CHORD",            4, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static CHAPTER_OF_AN_ANCIENT_CHORD             = new ItemEntity("CHAPTER_OF_AN_ANCIENT_CHORD",             3, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static FRAGMENT_OF_AN_ANCIENT_CHORD            = new ItemEntity("FRAGMENT_OF_AN_ANCIENT_CHORD",            2, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static ESSENCE_OF_PURE_SACRED_DEWDROP          = new ItemEntity("ESSENCE_OF_PURE_SACRED_DEWDROP",          5, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static SPRING_OF_PURE_SACRED_DEWDROP           = new ItemEntity("SPRING_OF_PURE_SACRED_DEWDROP",           4, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static SUBLIMATION_OF_PURE_SACRED_DEWDROP      = new ItemEntity("SUBLIMATION_OF_PURE_SACRED_DEWDROP",      3, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static DROSS_OF_PURE_SACRED_DEWDROP            = new ItemEntity("DROSS_OF_PURE_SACRED_DEWDROP",            2, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static GOLDEN_GOBLET_OF_THE_PRISTINE_SEA       = new ItemEntity("GOLDEN_GOBLET_OF_THE_PRISTINE_SEA",       5, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static SILVER_GOBLET_OF_THE_PRISTINE_SEA       = new ItemEntity("SILVER_GOBLET_OF_THE_PRISTINE_SEA",       4, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static WINE_GOBLET_OF_THE_PRISTINE_SEA         = new ItemEntity("WINE_GOBLET_OF_THE_PRISTINE_SEA",         3, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static BROKEN_GOBLET_OF_THE_PRISTINE_SEA       = new ItemEntity("BROKEN_GOBLET_OF_THE_PRISTINE_SEA",       2, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static "BLAZING_SACRIFICIAL_HEART'S_SPLENDOR"  = new ItemEntity("BLAZING_SACRIFICIAL_HEART'S_SPLENDOR",    5, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static "BLAZING_SACRIFICIAL_HEART'S_RESOLVE"   = new ItemEntity("BLAZING_SACRIFICIAL_HEART'S_RESOLVE",     4, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static "BLAZING_SACRIFICIAL_HEART'S_HESITANCE" = new ItemEntity("BLAZING_SACRIFICIAL_HEART'S_HESITANCE",   3, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static "BLAZING_SACRIFICIAL_HEART'S_TERROR"    = new ItemEntity("BLAZING_SACRIFICIAL_HEART'S_TERROR",      2, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static DELIRIOUS_DIVINITY_OF_THE_SACRED_LORD   = new ItemEntity("DELIRIOUS_DIVINITY_OF_THE_SACRED_LORD",   5, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static DELIRIOUS_DEMEANOR_OF_THE_SACRED_LORD   = new ItemEntity("DELIRIOUS_DEMEANOR_OF_THE_SACRED_LORD",   4, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static DELIRIOUS_DESOLATION_OF_THE_SACRED_LORD = new ItemEntity("DELIRIOUS_DESOLATION_OF_THE_SACRED_LORD", 3, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static DELIRIOUS_DECADENCE_OF_THE_SACRED_LORD  = new ItemEntity("DELIRIOUS_DECADENCE_OF_THE_SACRED_LORD",  2, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static "NIGHT-WIND'S_MYSTIC_REVELATION"        = new ItemEntity("NIGHT-WIND'S_MYSTIC_REVELATION",          5, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static "NIGHT-WIND'S_MYSTIC_AUGURY"            = new ItemEntity("NIGHT-WIND'S_MYSTIC_AUGURY",              4, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static "NIGHT-WIND'S_MYSTIC_PREMONITION"       = new ItemEntity("NIGHT-WIND'S_MYSTIC_PREMONITION",         3, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    static "NIGHT-WIND'S_MYSTIC_CONSIDERATION"     = new ItemEntity("NIGHT-WIND'S_MYSTIC_CONSIDERATION",       2, ItemTypes.CHARACTER_TALENT_MATERIAL, ResumenTypes.DOMAINS);
    //#endregion
    
    /* =================================== */
    /* === ITEM GROUP: LOCAL SPECIALTY === */
    /* =================================== */
    //#region
    static WOLFHOOK                                = new ItemEntity("WOLFHOOK",                                1, ItemTypes.LOCAL_SPECIALTY.MONDSTADT, ResumenTypes.LOCAL_SPECIALTIES);
    static VALBERRY                                = new ItemEntity("VALBERRY",                                1, ItemTypes.LOCAL_SPECIALTY.MONDSTADT, ResumenTypes.LOCAL_SPECIALTIES);
    static CECILIA                                 = new ItemEntity("CECILIA",                                 1, ItemTypes.LOCAL_SPECIALTY.MONDSTADT, ResumenTypes.LOCAL_SPECIALTIES);
    static WINDWHEEL_ASTER                         = new ItemEntity("WINDWHEEL_ASTER",                         1, ItemTypes.LOCAL_SPECIALTY.MONDSTADT, ResumenTypes.LOCAL_SPECIALTIES);
    static PHILANEMO_MUSHROOM                      = new ItemEntity("PHILANEMO_MUSHROOM",                      1, ItemTypes.LOCAL_SPECIALTY.MONDSTADT, ResumenTypes.LOCAL_SPECIALTIES);
    static SMALL_LAMP_GRASS                        = new ItemEntity("SMALL_LAMP_GRASS",                        1, ItemTypes.LOCAL_SPECIALTY.MONDSTADT, ResumenTypes.LOCAL_SPECIALTIES);
    static CALLA_LILY                              = new ItemEntity("CALLA_LILY",                              1, ItemTypes.LOCAL_SPECIALTY.MONDSTADT, ResumenTypes.LOCAL_SPECIALTIES);
    static DANDELION_SEED                          = new ItemEntity("DANDELION_SEED",                          1, ItemTypes.LOCAL_SPECIALTY.MONDSTADT, ResumenTypes.LOCAL_SPECIALTIES);
    static JUEYUN_CHILI                            = new ItemEntity("JUEYUN_CHILI",                            1, ItemTypes.LOCAL_SPECIALTY.LIYUE    , ResumenTypes.LOCAL_SPECIALTIES);
    static NOCTILUCOUS_JADE                        = new ItemEntity("NOCTILUCOUS_JADE",                        1, ItemTypes.LOCAL_SPECIALTY.LIYUE    , ResumenTypes.LOCAL_SPECIALTIES);
    static SILK_FLOWER                             = new ItemEntity("SILK_FLOWER",                             1, ItemTypes.LOCAL_SPECIALTY.LIYUE    , ResumenTypes.LOCAL_SPECIALTIES);
    static GLAZE_LILY                              = new ItemEntity("GLAZE_LILY",                              1, ItemTypes.LOCAL_SPECIALTY.LIYUE    , ResumenTypes.LOCAL_SPECIALTIES);
    static QINGXIN                                 = new ItemEntity("QINGXIN",                                 1, ItemTypes.LOCAL_SPECIALTY.LIYUE    , ResumenTypes.LOCAL_SPECIALTIES);
    static STARCONCH                               = new ItemEntity("STARCONCH",                               1, ItemTypes.LOCAL_SPECIALTY.LIYUE    , ResumenTypes.LOCAL_SPECIALTIES);
    static VIOLETGRASS                             = new ItemEntity("VIOLETGRASS",                             1, ItemTypes.LOCAL_SPECIALTY.LIYUE    , ResumenTypes.LOCAL_SPECIALTIES);
    static COR_LAPIS                               = new ItemEntity("COR_LAPIS",                               1, ItemTypes.LOCAL_SPECIALTY.LIYUE    , ResumenTypes.LOCAL_SPECIALTIES);
    static CLEARWATER_JADE                         = new ItemEntity("CLEARWATER_JADE",                         1, ItemTypes.LOCAL_SPECIALTY.LIYUE    , ResumenTypes.LOCAL_SPECIALTIES);
    static ONIKABUTO                               = new ItemEntity("ONIKABUTO",                               1, ItemTypes.LOCAL_SPECIALTY.INAZUMA  , ResumenTypes.LOCAL_SPECIALTIES);
    static SAKURA_BLOOM                            = new ItemEntity("SAKURA_BLOOM",                            1, ItemTypes.LOCAL_SPECIALTY.INAZUMA  , ResumenTypes.LOCAL_SPECIALTIES);
    static CRYSTAL_MARROW                          = new ItemEntity("CRYSTAL_MARROW",                          1, ItemTypes.LOCAL_SPECIALTY.INAZUMA  , ResumenTypes.LOCAL_SPECIALTIES);
    static DENDROBIUM                              = new ItemEntity("DENDROBIUM",                              1, ItemTypes.LOCAL_SPECIALTY.INAZUMA  , ResumenTypes.LOCAL_SPECIALTIES);
    static NAKU_WEED                               = new ItemEntity("NAKU_WEED",                               1, ItemTypes.LOCAL_SPECIALTY.INAZUMA  , ResumenTypes.LOCAL_SPECIALTIES);
    static SEA_GANODERMA                           = new ItemEntity("SEA_GANODERMA",                           1, ItemTypes.LOCAL_SPECIALTY.INAZUMA  , ResumenTypes.LOCAL_SPECIALTIES);
    static SANGO_PEARL                             = new ItemEntity("SANGO_PEARL",                             1, ItemTypes.LOCAL_SPECIALTY.INAZUMA  , ResumenTypes.LOCAL_SPECIALTIES);
    static AMAKUMO_FRUIT                           = new ItemEntity("AMAKUMO_FRUIT",                           1, ItemTypes.LOCAL_SPECIALTY.INAZUMA  , ResumenTypes.LOCAL_SPECIALTIES);
    static FLUORESCENT_FUNGUS                      = new ItemEntity("FLUORESCENT_FUNGUS",                      1, ItemTypes.LOCAL_SPECIALTY.INAZUMA  , ResumenTypes.LOCAL_SPECIALTIES);
    static RUKKHASHAVA_MUSHROOMS                   = new ItemEntity("RUKKHASHAVA_MUSHROOMS",                   1, ItemTypes.LOCAL_SPECIALTY.SUMERU   , ResumenTypes.LOCAL_SPECIALTIES);
    static PADISARAH                               = new ItemEntity("PADISARAH",                               1, ItemTypes.LOCAL_SPECIALTY.SUMERU   , ResumenTypes.LOCAL_SPECIALTIES);
    static NILOTPALA_LOTUS                         = new ItemEntity("NILOTPALA_LOTUS",                         1, ItemTypes.LOCAL_SPECIALTY.SUMERU   , ResumenTypes.LOCAL_SPECIALTIES);
    static KALPALATA_LOTUS                         = new ItemEntity("KALPALATA_LOTUS",                         1, ItemTypes.LOCAL_SPECIALTY.SUMERU   , ResumenTypes.LOCAL_SPECIALTIES);
    static HENNA_BERRY                             = new ItemEntity("HENNA_BERRY",                             1, ItemTypes.LOCAL_SPECIALTY.SUMERU   , ResumenTypes.LOCAL_SPECIALTIES);
    static SAND_GREASE_PUPA                        = new ItemEntity("SAND_GREASE_PUPA",                        1, ItemTypes.LOCAL_SPECIALTY.SUMERU   , ResumenTypes.LOCAL_SPECIALTIES);
    static MOURNING_FLOWER                         = new ItemEntity("MOURNING_FLOWER",                         1, ItemTypes.LOCAL_SPECIALTY.SUMERU   , ResumenTypes.LOCAL_SPECIALTIES);
    static TRISHIRAITE                             = new ItemEntity("TRISHIRAITE",                             1, ItemTypes.LOCAL_SPECIALTY.SUMERU   , ResumenTypes.LOCAL_SPECIALTIES);
    static SCARAB                                  = new ItemEntity("SCARAB",                                  1, ItemTypes.LOCAL_SPECIALTY.SUMERU   , ResumenTypes.LOCAL_SPECIALTIES);
    static BERYL_CONCH                             = new ItemEntity("BERYL_CONCH",                             1, ItemTypes.LOCAL_SPECIALTY.FONTAINE , ResumenTypes.LOCAL_SPECIALTIES);
    static ROMARITIME_FLOWER                       = new ItemEntity("ROMARITIME_FLOWER",                       1, ItemTypes.LOCAL_SPECIALTY.FONTAINE , ResumenTypes.LOCAL_SPECIALTIES);
    static LUMIDOUCE_BELL                          = new ItemEntity("LUMIDOUCE_BELL",                          1, ItemTypes.LOCAL_SPECIALTY.FONTAINE , ResumenTypes.LOCAL_SPECIALTIES);
    static RAINBOW_ROSE                            = new ItemEntity("RAINBOW_ROSE",                            1, ItemTypes.LOCAL_SPECIALTY.FONTAINE , ResumenTypes.LOCAL_SPECIALTIES);
    static LUMITOILE                               = new ItemEntity("LUMITOILE",                               1, ItemTypes.LOCAL_SPECIALTY.FONTAINE , ResumenTypes.LOCAL_SPECIALTIES);
    static LAKELIGHT_LILY                          = new ItemEntity("LAKELIGHT_LILY",                          1, ItemTypes.LOCAL_SPECIALTY.FONTAINE , ResumenTypes.LOCAL_SPECIALTIES);
    static SUBDETECTION_UNIT                       = new ItemEntity("SUBDETECTION_UNIT",                       1, ItemTypes.LOCAL_SPECIALTY.FONTAINE , ResumenTypes.LOCAL_SPECIALTIES);
    static SPRING_OF_THE_FIRST_DEWDROP             = new ItemEntity("SPRING_OF_THE_FIRST_DEWDROP",             1, ItemTypes.LOCAL_SPECIALTY.FONTAINE , ResumenTypes.LOCAL_SPECIALTIES);
    static SPRAYFEATHER_GILL                       = new ItemEntity("SPRAYFEATHER_GILL",                       1, ItemTypes.LOCAL_SPECIALTY.NATLAN   , ResumenTypes.LOCAL_SPECIALTIES);
    static BRILLIANT_CHRYSANTHEMUM                 = new ItemEntity("BRILLIANT_CHRYSANTHEMUM",                 1, ItemTypes.LOCAL_SPECIALTY.NATLAN   , ResumenTypes.LOCAL_SPECIALTIES);
    static QUENEPA_BERRY                           = new ItemEntity("QUENEPA_BERRY",                           1, ItemTypes.LOCAL_SPECIALTY.NATLAN   , ResumenTypes.LOCAL_SPECIALTIES);
    static SAURIAN_CLAW_SUCCULENT                  = new ItemEntity("SAURIAN_CLAW_SUCCULENT",                  1, ItemTypes.LOCAL_SPECIALTY.NATLAN   , ResumenTypes.LOCAL_SPECIALTIES);
    static GLOWING_HORNSHROOM                      = new ItemEntity("GLOWING_HORNSHROOM",                      1, ItemTypes.LOCAL_SPECIALTY.NATLAN   , ResumenTypes.LOCAL_SPECIALTIES);
    static WITHERING_PURPURBLOOM                   = new ItemEntity("WITHERING_PURPURBLOOM",                   1, ItemTypes.LOCAL_SPECIALTY.NATLAN   , ResumenTypes.LOCAL_SPECIALTIES);
    static SKYSPLIT_GEMBLOOM                       = new ItemEntity("SKYSPLIT_GEMBLOOM",                       1, ItemTypes.LOCAL_SPECIALTY.NATLAN   , ResumenTypes.LOCAL_SPECIALTIES);
    static DRACOLITE                               = new ItemEntity("DRACOLITE",                               1, ItemTypes.LOCAL_SPECIALTY.NATLAN   , ResumenTypes.LOCAL_SPECIALTIES);
    static PORTABLE_BEARING                        = new ItemEntity("PORTABLE_BEARING",                        1, ItemTypes.LOCAL_SPECIALTY.NOD_KRAY , ResumenTypes.LOCAL_SPECIALTIES);
    static FROSTLAMP_FLOWER                        = new ItemEntity("FROSTLAMP_FLOWER",                        1, ItemTypes.LOCAL_SPECIALTY.NOD_KRAY , ResumenTypes.LOCAL_SPECIALTIES);
    static MOONFALL_SILVER                         = new ItemEntity("MOONFALL_SILVER",                         1, ItemTypes.LOCAL_SPECIALTY.NOD_KRAY , ResumenTypes.LOCAL_SPECIALTIES);
    //#endregion

}
export const Item = new Proxy(ItemList, {
    get(target, prop) {
        if(prop === "get") {
            return (key) => ItemList[typeof key === "number" ? ItemMap.get(key): key];
        }
        if (!(prop in target)){
            console.error(`Error: La variable 'Item.${prop}' no existe.`);
            return ItemList.UNKNOWN;
        }
        return target[prop];
    }
})