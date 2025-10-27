import { Element } from "./ElementList.js";
import { Item } from "./ItemList.js";
import { CharacterEntity } from "../entity/CharacterEntity.js";
import { Inventory } from "../entity/InventoryEntity.js";

/** 
 * @type {Map<number,string>} 
*/
export const CharacterMap = new Map();

class CharacterList {

        static TRAVELER           = new CharacterEntity({ name: "TRAVELER",           rarity: 5, /* FINISHED v2 */ 
        level: { materials: {
            "20+": [{ item: Item.BRILLIANT_DIAMOND_SLIVER,   amount: 1 }, { item: Item.WINDWHEEL_ASTER, amount:  3 }, { item: Item.DAMAGED_MASK, amount:  3 }],
            "40+": [{ item: Item.BRILLIANT_DIAMOND_FRAGMENT, amount: 3 }, { item: Item.WINDWHEEL_ASTER, amount: 10 }, { item: Item.DAMAGED_MASK, amount: 15 }],
            "50+": [{ item: Item.BRILLIANT_DIAMOND_FRAGMENT, amount: 6 }, { item: Item.WINDWHEEL_ASTER, amount: 20 }, { item: Item.STAINED_MASK, amount: 12 }],
            "60+": [{ item: Item.BRILLIANT_DIAMOND_CHUNK,    amount: 3 }, { item: Item.WINDWHEEL_ASTER, amount: 30 }, { item: Item.STAINED_MASK, amount: 18 }],
            "70+": [{ item: Item.BRILLIANT_DIAMOND_CHUNK,    amount: 6 }, { item: Item.WINDWHEEL_ASTER, amount: 45 }, { item: Item.OMINOUS_MASK, amount: 12 }],
            "80+": [{ item: Item.BRILLIANT_DIAMOND_GEMSTONE, amount: 6 }, { item: Item.WINDWHEEL_ASTER, amount: 60 }, { item: Item.OMINOUS_MASK, amount: 24 }],
        }},
        elements: [
            { element: Element.ANEMO, materials: {
                2:  [{ item: Item.TEACHINGS_OF_FREEDOM,       amount:  3 }, { item: Item.DIVINING_SCROLL,        amount:  6 }],
                3:  [{ item: Item.GUIDE_TO_RESISTANCE,        amount:  2 }, { item: Item.SEALED_SCROLL,          amount:  3 }],
                4:  [{ item: Item.GUIDE_TO_BALLAD,            amount:  4 }, { item: Item.SEALED_SCROLL,          amount:  4 }],
                5:  [{ item: Item.GUIDE_TO_FREEDOM,           amount:  6 }, { item: Item.SEALED_SCROLL,          amount:  6 }],
                6:  [{ item: Item.GUIDE_TO_RESISTANCE,        amount:  9 }, { item: Item.SEALED_SCROLL,          amount:  9 }],
                7:  [{ item: Item.PHILOSOPHIES_OF_BALLAD,     amount:  4 }, { item: Item.FORBIDDEN_CURSE_SCROLL, amount:  4 }, { item: Item["DVALIN'S_SIGH"], amount: 1 }],
                8:  [{ item: Item.PHILOSOPHIES_OF_FREEDOM,    amount:  6 }, { item: Item.FORBIDDEN_CURSE_SCROLL, amount:  6 }, { item: Item["DVALIN'S_SIGH"], amount: 1 }],
                9:  [{ item: Item.PHILOSOPHIES_OF_RESISTANCE, amount: 12 }, { item: Item.FORBIDDEN_CURSE_SCROLL, amount:  9 }, { item: Item["DVALIN'S_SIGH"], amount: 2 }],
                10: [{ item: Item.PHILOSOPHIES_OF_BALLAD,     amount: 16 }, { item: Item.FORBIDDEN_CURSE_SCROLL, amount: 12 }, { item: Item["DVALIN'S_SIGH"], amount: 2 }]
            }},
            { element: Element.GEO, materials: {
                2: [{ item: Item.TEACHINGS_OF_FREEDOM,       amount:  3 }, { item: Item.DIVINING_SCROLL,        amount:  6 }],
                3: [{ item: Item.GUIDE_TO_RESISTANCE,        amount:  2 }, { item: Item.SEALED_SCROLL,          amount:  3 }],
                4: [{ item: Item.GUIDE_TO_BALLAD,            amount:  4 }, { item: Item.SEALED_SCROLL,          amount:  4 }],
                5: [{ item: Item.GUIDE_TO_FREEDOM,           amount:  6 }, { item: Item.SEALED_SCROLL,          amount:  6 }],
                6: [{ item: Item.GUIDE_TO_RESISTANCE,        amount:  9 }, { item: Item.SEALED_SCROLL,          amount:  9 }],
                7: [{ item: Item.PHILOSOPHIES_OF_BALLAD,     amount:  4 }, { item: Item.FORBIDDEN_CURSE_SCROLL, amount:  4 }, { item: Item["DVALIN'S_SIGH"], amount: 1 }],
                8: [{ item: Item.PHILOSOPHIES_OF_FREEDOM,    amount:  6 }, { item: Item.FORBIDDEN_CURSE_SCROLL, amount:  6 }, { item: Item["DVALIN'S_SIGH"], amount: 1 }],
                9: [{ item: Item.PHILOSOPHIES_OF_RESISTANCE, amount: 12 }, { item: Item.FORBIDDEN_CURSE_SCROLL, amount:  9 }, { item: Item["DVALIN'S_SIGH"], amount: 2 }],
                10: [{ item: Item.PHILOSOPHIES_OF_BALLAD,    amount: 16 }, { item: Item.FORBIDDEN_CURSE_SCROLL, amount: 12 }, { item: Item["DVALIN'S_SIGH"], amount: 2 }]
            }},
            { element: Element.ELECTRO, materials: {
                2: [{ item: Item.TEACHINGS_OF_TRANSIENCE,    amount:  3 }, { item: Item.OLD_HANDGUARD,      amount:  6 }],
                3: [{ item: Item.GUIDE_TO_ELEGANCE,          amount:  2 }, { item: Item.KAGEUCHI_HANDGUARD, amount:  3 }],
                4: [{ item: Item.GUIDE_TO_LIGHT,             amount:  4 }, { item: Item.KAGEUCHI_HANDGUARD, amount:  4 }],
                5: [{ item: Item.GUIDE_TO_TRANSIENCE,        amount:  6 }, { item: Item.KAGEUCHI_HANDGUARD, amount:  6 }],
                6: [{ item: Item.GUIDE_TO_ELEGANCE,          amount:  9 }, { item: Item.KAGEUCHI_HANDGUARD, amount:  9 }],
                7: [{ item: Item.PHILOSOPHIES_OF_LIGHT,      amount:  4 }, { item: Item.FAMED_HANDGUARD,    amount:  4 }, { item: Item["DRAGON_LORD'S_CROWN"], amount: 1 }],
                8: [{ item: Item.PHILOSOPHIES_OF_TRANSIENCE, amount:  6 }, { item: Item.FAMED_HANDGUARD,    amount:  6 }, { item: Item["DRAGON_LORD'S_CROWN"], amount: 1 }],
                9: [{ item: Item.PHILOSOPHIES_OF_ELEGANCE,   amount: 12 }, { item: Item.FAMED_HANDGUARD,    amount:  9 }, { item: Item["DRAGON_LORD'S_CROWN"], amount: 2 }],
                10: [{ item: Item.PHILOSOPHIES_OF_LIGHT,     amount: 16 }, { item: Item.FAMED_HANDGUARD,    amount: 12 }, { item: Item["DRAGON_LORD'S_CROWN"], amount: 2 }]
            }},
            { element: Element.DENDRO, materials: {
                2: [{ item: Item.TEACHINGS_OF_ADMONITION,    amount:  3 }, { item: Item.FUNGAL_SPORES,         amount:  6 }],
                3: [{ item: Item.GUIDE_TO_INGENUITY,         amount:  2 }, { item: Item.LUMINESCENT_POLLEN,    amount:  3 }],
                4: [{ item: Item.GUIDE_TO_PRAXIS,            amount:  4 }, { item: Item.LUMINESCENT_POLLEN,    amount:  4 }],
                5: [{ item: Item.GUIDE_TO_ADMONITION,        amount:  6 }, { item: Item.LUMINESCENT_POLLEN,    amount:  6 }],
                6: [{ item: Item.GUIDE_TO_INGENUITY,         amount:  9 }, { item: Item.LUMINESCENT_POLLEN,    amount:  9 }],
                7: [{ item: Item.PHILOSOPHIES_OF_PRAXIS,     amount:  4 }, { item: Item.CRYSTALLINE_CYST_DUST, amount:  4 }, { item: Item.MUDRA_OF_THE_MALEFIC_GENERAL, amount: 1 }],
                8: [{ item: Item.PHILOSOPHIES_OF_ADMONITION, amount:  6 }, { item: Item.CRYSTALLINE_CYST_DUST, amount:  6 }, { item: Item.MUDRA_OF_THE_MALEFIC_GENERAL, amount: 1 }],
                9: [{ item: Item.PHILOSOPHIES_OF_INGENUITY,  amount: 12 }, { item: Item.CRYSTALLINE_CYST_DUST, amount:  9 }, { item: Item.MUDRA_OF_THE_MALEFIC_GENERAL, amount: 2 }],
                10: [{ item: Item.PHILOSOPHIES_OF_PRAXIS,     amount: 16 }, { item: Item.CRYSTALLINE_CYST_DUST, amount: 12 }, { item: Item.MUDRA_OF_THE_MALEFIC_GENERAL, amount: 2 }]
            }},
            { element: Element.HYDRO, materials: {
                2: [{ item: Item.TEACHINGS_OF_EQUITY,     amount:  3 }, { item: Item.TRANSOCEANIC_PEARL,    amount:  6 }],
                3: [{ item: Item.GUIDE_TO_JUSTICE,        amount:  2 }, { item: Item.TRANSOCEANIC_CHUNK,    amount:  3 }],
                4: [{ item: Item.GUIDE_TO_ORDER,          amount:  4 }, { item: Item.TRANSOCEANIC_CHUNK,    amount:  4 }],
                5: [{ item: Item.GUIDE_TO_EQUITY,         amount:  6 }, { item: Item.TRANSOCEANIC_CHUNK,    amount:  6 }],
                6: [{ item: Item.GUIDE_TO_JUSTICE,        amount:  9 }, { item: Item.TRANSOCEANIC_CHUNK,    amount:  9 }],
                7: [{ item: Item.PHILOSOPHIES_OF_ORDER,   amount:  4 }, { item: Item.XENOCHROMATIC_CRYSTAL, amount:  4 }, { item: Item.WORLDSPAN_FERN, amount: 1 }],
                8: [{ item: Item.PHILOSOPHIES_OF_EQUITY,  amount:  6 }, { item: Item.XENOCHROMATIC_CRYSTAL, amount:  6 }, { item: Item.WORLDSPAN_FERN, amount: 1 }],
                9: [{ item: Item.PHILOSOPHIES_OF_JUSTICE, amount: 12 }, { item: Item.XENOCHROMATIC_CRYSTAL, amount:  9 }, { item: Item.WORLDSPAN_FERN, amount: 2 }],
                10: [{ item: Item.PHILOSOPHIES_OF_ORDER,   amount: 16 }, { item: Item.XENOCHROMATIC_CRYSTAL, amount: 12 }, { item: Item.WORLDSPAN_FERN, amount: 2 }]
            }},
            { element: Element.PYRO, materials: {
                2: [{ item: Item.TEACHINGS_OF_CONTENTION,    amount:  3 }, { item: Item["SENTRY'S_WOODEN_WHISTLE"],                   amount:  6 }],
                3: [{ item: Item.GUIDE_TO_KINDLING,          amount:  2 }, { item: Item["WARRIOR'S_METAL_WHISTLE"],                  amount:  3 }],
                4: [{ item: Item.GUIDE_TO_CONFLICT,          amount:  4 }, { item: Item["WARRIOR'S_METAL_WHISTLE"],                  amount:  4 }],
                5: [{ item: Item.GUIDE_TO_CONTENTION,        amount:  6 }, { item: Item["WARRIOR'S_METAL_WHISTLE"],                  amount:  6 }],
                6: [{ item: Item.GUIDE_TO_KINDLING,          amount:  9 }, { item: Item["WARRIOR'S_METAL_WHISTLE"],                  amount:  9 }],
                7: [{ item: Item.PHILOSOPHIES_OF_CONFLICT,   amount:  4 }, { item: Item["SAURIAN-CROWNED_WARRIOR'S_GOLDEN_WHISTLE"], amount:  4 }, { item: Item.THE_CORNERSTONE_OF_STARS_AND_FLAMES, amount: 1 }],
                8: [{ item: Item.PHILOSOPHIES_OF_CONTENTION, amount:  6 }, { item: Item["SAURIAN-CROWNED_WARRIOR'S_GOLDEN_WHISTLE"], amount:  6 }, { item: Item.THE_CORNERSTONE_OF_STARS_AND_FLAMES, amount: 1 }],
                9: [{ item: Item.PHILOSOPHIES_OF_KINDLING,   amount: 12 }, { item: Item["SAURIAN-CROWNED_WARRIOR'S_GOLDEN_WHISTLE"], amount:  9 }, { item: Item.THE_CORNERSTONE_OF_STARS_AND_FLAMES, amount: 2 }],
                10: [{ item: Item.PHILOSOPHIES_OF_CONFLICT,   amount: 16 }, { item: Item["SAURIAN-CROWNED_WARRIOR'S_GOLDEN_WHISTLE"], amount: 12 }, { item: Item.THE_CORNERSTONE_OF_STARS_AND_FLAMES, amount: 2 }]
            }},
            { element: Element.CRYO, materials: {
                2: [],
                3: [],
                4: [],
                5: [],
                6: [],
                7: [],
                8: [],
                9: [],
                10: []
            }}
        ]
    }); static AMBER              = new CharacterEntity({ name: "AMBER",              rarity: 4, /* FINISHED v2 */ 
        level: { materials: {
            "20+": [{ item: Item.AGNIDUS_AGATE_SLIVER,   amount: 1 },                                             { item: Item.SMALL_LAMP_GRASS, amount:  3 }, { item: Item.FIRM_ARROWHEAD,     amount:  3 }],
            "40+": [{ item: Item.AGNIDUS_AGATE_FRAGMENT, amount: 3 }, { item: Item.EVERFLAME_SEED, amount:  2 }, { item: Item.SMALL_LAMP_GRASS, amount: 10 }, { item: Item.FIRM_ARROWHEAD,     amount: 15 }],
            "50+": [{ item: Item.AGNIDUS_AGATE_FRAGMENT, amount: 6 }, { item: Item.EVERFLAME_SEED, amount:  4 }, { item: Item.SMALL_LAMP_GRASS, amount: 20 }, { item: Item.SHARP_ARROWHEAD,    amount: 12 }],
            "60+": [{ item: Item.AGNIDUS_AGATE_CHUNK,    amount: 3 }, { item: Item.EVERFLAME_SEED, amount:  8 }, { item: Item.SMALL_LAMP_GRASS, amount: 30 }, { item: Item.SHARP_ARROWHEAD,    amount: 18 }],
            "70+": [{ item: Item.AGNIDUS_AGATE_CHUNK,    amount: 6 }, { item: Item.EVERFLAME_SEED, amount: 12 }, { item: Item.SMALL_LAMP_GRASS, amount: 45 }, { item: Item.WEATHERED_ARROWHEAD, amount: 12 }],
            "80+": [{ item: Item.AGNIDUS_AGATE_GEMSTONE, amount: 6 }, { item: Item.EVERFLAME_SEED, amount: 20 }, { item: Item.SMALL_LAMP_GRASS, amount: 60 }, { item: Item.WEATHERED_ARROWHEAD, amount: 24 }],
        }},
        elements: [{ element: Element.PYRO, materials: {
            2:  [{ item: Item.TEACHINGS_OF_FREEDOM,    amount:  3 }, { item: Item.FIRM_ARROWHEAD,     amount:  6 }],
            3:  [{ item: Item.GUIDE_TO_FREEDOM,        amount:  2 }, { item: Item.SHARP_ARROWHEAD,    amount:  3 }],
            4:  [{ item: Item.GUIDE_TO_FREEDOM,        amount:  4 }, { item: Item.SHARP_ARROWHEAD,    amount:  4 }],
            5:  [{ item: Item.GUIDE_TO_FREEDOM,        amount:  6 }, { item: Item.SHARP_ARROWHEAD,    amount:  6 }],
            6:  [{ item: Item.GUIDE_TO_FREEDOM,        amount:  9 }, { item: Item.SHARP_ARROWHEAD,    amount:  9 }],
            7:  [{ item: Item.PHILOSOPHIES_OF_FREEDOM, amount:  4 }, { item: Item.WEATHERED_ARROWHEAD, amount:  4 }, { item: Item["DVALIN'S_SIGH"], amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_FREEDOM, amount:  6 }, { item: Item.WEATHERED_ARROWHEAD, amount:  6 }, { item: Item["DVALIN'S_SIGH"], amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_FREEDOM, amount: 12 }, { item: Item.WEATHERED_ARROWHEAD, amount:  9 }, { item: Item["DVALIN'S_SIGH"], amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_FREEDOM, amount: 16 }, { item: Item.WEATHERED_ARROWHEAD, amount: 12 }, { item: Item["DVALIN'S_SIGH"], amount: 2 }],
        }}]
    }); static KAEYA              = new CharacterEntity({ name: "KAEYA",              rarity: 4, /* FINISHED v2 */ 
        level: { materials: { 
            "20+": [{ item: Item.SHIVADA_JADE_SLIVER,   amount: 1 },                                             { item: Item.CALLA_LILY, amount:  3 }, { item: Item.TREASURE_HOARDER_INSIGNIA, amount:  3 }], 
            "40+": [{ item: Item.SHIVADA_JADE_FRAGMENT, amount: 3 }, { item: Item.HOARFROST_CORE, amount:  2 }, { item: Item.CALLA_LILY, amount: 10 }, { item: Item.TREASURE_HOARDER_INSIGNIA, amount: 15 }], 
            "50+": [{ item: Item.SHIVADA_JADE_FRAGMENT, amount: 6 }, { item: Item.HOARFROST_CORE, amount:  4 }, { item: Item.CALLA_LILY, amount: 20 }, { item: Item.SILVER_RAVEN_INSIGNIA,     amount: 12 }], 
            "60+": [{ item: Item.SHIVADA_JADE_CHUNK,    amount: 3 }, { item: Item.HOARFROST_CORE, amount:  8 }, { item: Item.CALLA_LILY, amount: 30 }, { item: Item.SILVER_RAVEN_INSIGNIA,     amount: 18 }], 
            "70+": [{ item: Item.SHIVADA_JADE_CHUNK,    amount: 6 }, { item: Item.HOARFROST_CORE, amount: 12 }, { item: Item.CALLA_LILY, amount: 45 }, { item: Item.GOLDEN_RAVEN_INSIGNIA,     amount: 12 }], 
            "80+": [{ item: Item.SHIVADA_JADE_GEMSTONE, amount: 6 }, { item: Item.HOARFROST_CORE, amount: 20 }, { item: Item.CALLA_LILY, amount: 60 }, { item: Item.GOLDEN_RAVEN_INSIGNIA,     amount: 24 }]
        }}, 
        elements: [{ element: Element.CRYO, materials: { 
            2:  [{ item: Item.TEACHINGS_OF_BALLAD,    amount:  3 }, {item: Item.TREASURE_HOARDER_INSIGNIA, amount:  6 }], 
            3:  [{ item: Item.GUIDE_TO_BALLAD,        amount:  2 }, {item: Item.SILVER_RAVEN_INSIGNIA,     amount:  3 }], 
            4:  [{ item: Item.GUIDE_TO_BALLAD,        amount:  4 }, {item: Item.SILVER_RAVEN_INSIGNIA,     amount:  4 }], 
            5:  [{ item: Item.GUIDE_TO_BALLAD,        amount:  6 }, {item: Item.SILVER_RAVEN_INSIGNIA,     amount:  6 }],
            6:  [{ item: Item.GUIDE_TO_BALLAD,        amount:  9 }, {item: Item.SILVER_RAVEN_INSIGNIA,     amount:  9 }],
            7:  [{ item: Item.PHILOSOPHIES_OF_BALLAD, amount:  4 }, {item: Item.GOLDEN_RAVEN_INSIGNIA,     amount:  4 }, { item: Item.SPIRIT_LOCKET_OF_BOREAS, amount: 1 }], 
            8:  [{ item: Item.PHILOSOPHIES_OF_BALLAD, amount:  6 }, {item: Item.GOLDEN_RAVEN_INSIGNIA,     amount:  6 }, { item: Item.SPIRIT_LOCKET_OF_BOREAS, amount: 1 }], 
            9:  [{ item: Item.PHILOSOPHIES_OF_BALLAD, amount: 12 }, {item: Item.GOLDEN_RAVEN_INSIGNIA,     amount:  9 }, { item: Item.SPIRIT_LOCKET_OF_BOREAS, amount: 2 }], 
            10: [{ item: Item.PHILOSOPHIES_OF_BALLAD, amount: 16 }, {item: Item.GOLDEN_RAVEN_INSIGNIA,     amount: 12 }, { item: Item.SPIRIT_LOCKET_OF_BOREAS, amount: 2 }] 
        }}]
    }); static LISA               = new CharacterEntity({ name: "LISA",               rarity: 4, /* FINISHED v2 */ 
        level: { materials: { 
            "20+": [{ item: Item.VAJRADA_AMETHYST_SLIVER,   amount: 1 },                                              { item: Item.VALBERRY, amount:  3 }, { item: Item.SLIME_CONDENSATE,  amount:  3 }], 
            "40+": [{ item: Item.VAJRADA_AMETHYST_FRAGMENT, amount: 3 }, { item: Item.LIGHTNING_PRISM, amount:  2 }, { item: Item.VALBERRY, amount: 10 }, { item: Item.SLIME_CONDENSATE,  amount: 15 }], 
            "50+": [{ item: Item.VAJRADA_AMETHYST_FRAGMENT, amount: 6 }, { item: Item.LIGHTNING_PRISM, amount:  4 }, { item: Item.VALBERRY, amount: 20 }, { item: Item.SLIME_SECRETIONS,  amount: 12 }], 
            "60+": [{ item: Item.VAJRADA_AMETHYST_CHUNK,    amount: 3 }, { item: Item.LIGHTNING_PRISM, amount:  8 }, { item: Item.VALBERRY, amount: 30 }, { item: Item.SLIME_SECRETIONS,  amount: 18 }], 
            "70+": [{ item: Item.VAJRADA_AMETHYST_CHUNK,    amount: 6 }, { item: Item.LIGHTNING_PRISM, amount: 12 }, { item: Item.VALBERRY, amount: 45 }, { item: Item.SLIME_CONCENTRATE, amount: 12 }], 
            "80+": [{ item: Item.VAJRADA_AMETHYST_GEMSTONE, amount: 6 }, { item: Item.LIGHTNING_PRISM, amount: 20 }, { item: Item.VALBERRY, amount: 60 }, { item: Item.SLIME_CONCENTRATE, amount: 24 }]
        }}, 
        elements: [{ element: Element.ELECTRO, materials: { 
            2:  [{ item: Item.TEACHINGS_OF_BALLAD,    amount:  3 }, {item: Item.SLIME_CONDENSATE,      amount:  6 }],                                             
            3:  [{ item: Item.GUIDE_TO_BALLAD,        amount:  2 }, {item: Item.SLIME_SECRETIONS,      amount:  3 }],                                             
            4:  [{ item: Item.GUIDE_TO_BALLAD,        amount:  4 }, {item: Item.SLIME_SECRETIONS,      amount:  4 }],                                             
            5:  [{ item: Item.GUIDE_TO_BALLAD,        amount:  6 }, {item: Item.SLIME_SECRETIONS,      amount:  6 }],                                             
            6:  [{ item: Item.GUIDE_TO_BALLAD,        amount:  9 }, {item: Item.SLIME_SECRETIONS,      amount:  9 }],                                             
            7:  [{ item: Item.PHILOSOPHIES_OF_BALLAD, amount:  4 }, {item: Item.SLIME_CONCENTRATE,     amount:  4 }, { item: Item["DVALIN'S_CLAW"], amount: 1 }], 
            8:  [{ item: Item.PHILOSOPHIES_OF_BALLAD, amount:  6 }, {item: Item.SLIME_CONCENTRATE,     amount:  6 }, { item: Item["DVALIN'S_CLAW"], amount: 1 }], 
            9:  [{ item: Item.PHILOSOPHIES_OF_BALLAD, amount: 12 }, {item: Item.SLIME_CONCENTRATE,     amount:  9 }, { item: Item["DVALIN'S_CLAW"], amount: 2 }], 
            10: [{ item: Item.PHILOSOPHIES_OF_BALLAD, amount: 16 }, {item: Item.SLIME_CONCENTRATE,     amount: 12 }, { item: Item["DVALIN'S_CLAW"], amount: 2 }] 
        }}]
    }); static BARBARA            = new CharacterEntity({ name: "BARBARA",            rarity: 4, /* FINISHED v2 */ 
        level: { materials: { 
            "20+": [{ item: Item.VARUNADA_LAZURITE_SLIVER,   amount: 1 },                                              { item: Item.PHILANEMO_MUSHROOM, amount:  3 }, { item: Item.DIVINING_SCROLL,        amount:  3 }], 
            "40+": [{ item: Item.VARUNADA_LAZURITE_FRAGMENT, amount: 3 }, { item: Item.CLEANSING_HEART, amount:  2 }, { item: Item.PHILANEMO_MUSHROOM, amount: 10 }, { item: Item.DIVINING_SCROLL,        amount: 15 }], 
            "50+": [{ item: Item.VARUNADA_LAZURITE_FRAGMENT, amount: 6 }, { item: Item.CLEANSING_HEART, amount:  4 }, { item: Item.PHILANEMO_MUSHROOM, amount: 20 }, { item: Item.SEALED_SCROLL,          amount: 12 }], 
            "60+": [{ item: Item.VARUNADA_LAZURITE_CHUNK,    amount: 3 }, { item: Item.CLEANSING_HEART, amount:  8 }, { item: Item.PHILANEMO_MUSHROOM, amount: 30 }, { item: Item.SEALED_SCROLL,          amount: 18 }], 
            "70+": [{ item: Item.VARUNADA_LAZURITE_CHUNK,    amount: 6 }, { item: Item.CLEANSING_HEART, amount: 12 }, { item: Item.PHILANEMO_MUSHROOM, amount: 45 }, { item: Item.FORBIDDEN_CURSE_SCROLL, amount: 12 }], 
            "80+": [{ item: Item.VARUNADA_LAZURITE_GEMSTONE, amount: 6 }, { item: Item.CLEANSING_HEART, amount: 20 }, { item: Item.PHILANEMO_MUSHROOM, amount: 60 }, { item: Item.FORBIDDEN_CURSE_SCROLL, amount: 24 }]
        }}, 
        elements: [{ element: Element.HYDRO, materials: { 
            2:  [{ item: Item.TEACHINGS_OF_FREEDOM,    amount:  3 }, {item: Item.DIVINING_SCROLL,        amount:  6 }],                                             
            3:  [{ item: Item.GUIDE_TO_FREEDOM,        amount:  2 }, {item: Item.SEALED_SCROLL,          amount:  3 }],                                             
            4:  [{ item: Item.GUIDE_TO_FREEDOM,        amount:  4 }, {item: Item.SEALED_SCROLL,          amount:  4 }],                                             
            5:  [{ item: Item.GUIDE_TO_FREEDOM,        amount:  6 }, {item: Item.SEALED_SCROLL,          amount:  6 }],                                             
            6:  [{ item: Item.GUIDE_TO_FREEDOM,        amount:  9 }, {item: Item.SEALED_SCROLL,          amount:  9 }],                                             
            7:  [{ item: Item.PHILOSOPHIES_OF_FREEDOM, amount:  4 }, {item: Item.FORBIDDEN_CURSE_SCROLL, amount:  4 }, { item: Item.RING_OF_BOREAS, amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_FREEDOM, amount:  6 }, {item: Item.FORBIDDEN_CURSE_SCROLL, amount:  6 }, { item: Item.RING_OF_BOREAS, amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_FREEDOM, amount: 12 }, {item: Item.FORBIDDEN_CURSE_SCROLL, amount:  9 }, { item: Item.RING_OF_BOREAS, amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_FREEDOM, amount: 16 }, {item: Item.FORBIDDEN_CURSE_SCROLL, amount: 12 }, { item: Item.RING_OF_BOREAS, amount: 2 }] 
        }}]
    }); static RAZOR              = new CharacterEntity({ name: "RAZOR",              rarity: 4, /* FINISHED v2 */ 
        level: { materials: { 
            "20+": [{ item: Item.VAJRADA_AMETHYST_SLIVER,   amount: 1 },                                              { item: Item.WOLFHOOK, amount:  3 }, { item: Item.DAMAGED_MASK, amount:  3 }], 
            "40+": [{ item: Item.VAJRADA_AMETHYST_FRAGMENT, amount: 3 }, { item: Item.LIGHTNING_PRISM, amount:  2 }, { item: Item.WOLFHOOK, amount: 10 }, { item: Item.DAMAGED_MASK, amount: 15 }], 
            "50+": [{ item: Item.VAJRADA_AMETHYST_FRAGMENT, amount: 6 }, { item: Item.LIGHTNING_PRISM, amount:  4 }, { item: Item.WOLFHOOK, amount: 20 }, { item: Item.STAINED_MASK, amount: 12 }], 
            "60+": [{ item: Item.VAJRADA_AMETHYST_CHUNK,    amount: 3 }, { item: Item.LIGHTNING_PRISM, amount:  8 }, { item: Item.WOLFHOOK, amount: 30 }, { item: Item.STAINED_MASK, amount: 18 }], 
            "70+": [{ item: Item.VAJRADA_AMETHYST_CHUNK,    amount: 6 }, { item: Item.LIGHTNING_PRISM, amount: 12 }, { item: Item.WOLFHOOK, amount: 45 }, { item: Item.OMINOUS_MASK, amount: 12 }], 
            "80+": [{ item: Item.VAJRADA_AMETHYST_GEMSTONE, amount: 6 }, { item: Item.LIGHTNING_PRISM, amount: 20 }, { item: Item.WOLFHOOK, amount: 60 }, { item: Item.OMINOUS_MASK, amount: 24 }]
        }}, 
        elements: [{ element: Element.ELECTRO, materials: { 
            2:  [{ item: Item.TEACHINGS_OF_RESISTANCE   , amount:  3 }, {item: Item.DAMAGED_MASK, amount:  6 }],                                             
            3:  [{ item: Item.GUIDE_TO_RESISTANCE       , amount:  2 }, {item: Item.STAINED_MASK, amount:  3 }],                                             
            4:  [{ item: Item.GUIDE_TO_RESISTANCE       , amount:  4 }, {item: Item.STAINED_MASK, amount:  4 }],                                             
            5:  [{ item: Item.GUIDE_TO_RESISTANCE       , amount:  6 }, {item: Item.STAINED_MASK, amount:  6 }],                                             
            6:  [{ item: Item.GUIDE_TO_RESISTANCE       , amount:  9 }, {item: Item.STAINED_MASK, amount:  9 }],                                             
            7:  [{ item: Item.PHILOSOPHIES_OF_RESISTANCE, amount:  4 }, {item: Item.OMINOUS_MASK, amount:  4 }, { item: Item["DVALIN'S_CLAW"], amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_RESISTANCE, amount:  6 }, {item: Item.OMINOUS_MASK, amount:  6 }, { item: Item["DVALIN'S_CLAW"], amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_RESISTANCE, amount: 12 }, {item: Item.OMINOUS_MASK, amount:  9 }, { item: Item["DVALIN'S_CLAW"], amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_RESISTANCE, amount: 16 }, {item: Item.OMINOUS_MASK, amount: 12 }, { item: Item["DVALIN'S_CLAW"], amount: 2 }] 
        }}]
    }); static XIANGLING          = new CharacterEntity({ name: "XIANGLING",          rarity: 4, /* FINISHED v2 */ 
        level: { materials: { 
            "20+": [{ item: Item.AGNIDUS_AGATE_SLIVER,   amount: 1 },                                             { item: Item.JUEYUN_CHILI, amount:  3 }, { item: Item.SLIME_CONDENSATE,  amount:  3 }], 
            "40+": [{ item: Item.AGNIDUS_AGATE_FRAGMENT, amount: 3 }, { item: Item.EVERFLAME_SEED, amount:  2 }, { item: Item.JUEYUN_CHILI, amount: 10 }, { item: Item.SLIME_CONDENSATE,  amount: 15 }], 
            "50+": [{ item: Item.AGNIDUS_AGATE_FRAGMENT, amount: 6 }, { item: Item.EVERFLAME_SEED, amount:  4 }, { item: Item.JUEYUN_CHILI, amount: 20 }, { item: Item.SLIME_SECRETIONS,  amount: 12 }], 
            "60+": [{ item: Item.AGNIDUS_AGATE_CHUNK,    amount: 3 }, { item: Item.EVERFLAME_SEED, amount:  8 }, { item: Item.JUEYUN_CHILI, amount: 30 }, { item: Item.SLIME_SECRETIONS,  amount: 18 }], 
            "70+": [{ item: Item.AGNIDUS_AGATE_CHUNK,    amount: 6 }, { item: Item.EVERFLAME_SEED, amount: 12 }, { item: Item.JUEYUN_CHILI, amount: 45 }, { item: Item.SLIME_CONCENTRATE, amount: 12 }], 
            "80+": [{ item: Item.AGNIDUS_AGATE_GEMSTONE, amount: 6 }, { item: Item.EVERFLAME_SEED, amount: 20 }, { item: Item.JUEYUN_CHILI, amount: 60 }, { item: Item.SLIME_CONCENTRATE, amount: 24 }]
        }}, 
        elements: [{ element: Element.PYRO, materials: { 
            2:  [{ item: Item.TEACHINGS_OF_DILIGENCE   , amount:  3 }, {item: Item.SLIME_CONDENSATE,  amount:  6 }],                                             
            3:  [{ item: Item.GUIDE_TO_DILIGENCE       , amount:  2 }, {item: Item.SLIME_SECRETIONS,  amount:  3 }],                                             
            4:  [{ item: Item.GUIDE_TO_DILIGENCE       , amount:  4 }, {item: Item.SLIME_SECRETIONS,  amount:  4 }],                                             
            5:  [{ item: Item.GUIDE_TO_DILIGENCE       , amount:  6 }, {item: Item.SLIME_SECRETIONS,  amount:  6 }],                                             
            6:  [{ item: Item.GUIDE_TO_DILIGENCE       , amount:  9 }, {item: Item.SLIME_SECRETIONS,  amount:  9 }],                                             
            7:  [{ item: Item.PHILOSOPHIES_OF_DILIGENCE, amount:  4 }, {item: Item.SLIME_CONCENTRATE, amount:  4 }, { item: Item["DVALIN'S_CLAW"], amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_DILIGENCE, amount:  6 }, {item: Item.SLIME_CONCENTRATE, amount:  6 }, { item: Item["DVALIN'S_CLAW"], amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_DILIGENCE, amount: 12 }, {item: Item.SLIME_CONCENTRATE, amount:  9 }, { item: Item["DVALIN'S_CLAW"], amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_DILIGENCE, amount: 16 }, {item: Item.SLIME_CONCENTRATE, amount: 12 }, { item: Item["DVALIN'S_CLAW"], amount: 2 }] 
        }}]
    }); static BEIDOU             = new CharacterEntity({ name: "BEIDOU",             rarity: 4, /* FINISHED v2 */ 
        level: { materials: { 
            "20+": [{ item: Item.VAJRADA_AMETHYST_SLIVER,   amount: 1 },                                              { item: Item.NOCTILUCOUS_JADE, amount:  3 }, { item: Item.TREASURE_HOARDER_INSIGNIA, amount:  3 }], 
            "40+": [{ item: Item.VAJRADA_AMETHYST_FRAGMENT, amount: 3 }, { item: Item.LIGHTNING_PRISM, amount:  2 }, { item: Item.NOCTILUCOUS_JADE, amount: 10 }, { item: Item.TREASURE_HOARDER_INSIGNIA, amount: 15 }], 
            "50+": [{ item: Item.VAJRADA_AMETHYST_FRAGMENT, amount: 6 }, { item: Item.LIGHTNING_PRISM, amount:  4 }, { item: Item.NOCTILUCOUS_JADE, amount: 20 }, { item: Item.SILVER_RAVEN_INSIGNIA,     amount: 12 }], 
            "60+": [{ item: Item.VAJRADA_AMETHYST_CHUNK,    amount: 3 }, { item: Item.LIGHTNING_PRISM, amount:  8 }, { item: Item.NOCTILUCOUS_JADE, amount: 30 }, { item: Item.SILVER_RAVEN_INSIGNIA,     amount: 18 }], 
            "70+": [{ item: Item.VAJRADA_AMETHYST_CHUNK,    amount: 6 }, { item: Item.LIGHTNING_PRISM, amount: 12 }, { item: Item.NOCTILUCOUS_JADE, amount: 45 }, { item: Item.GOLDEN_RAVEN_INSIGNIA,     amount: 12 }], 
            "80+": [{ item: Item.VAJRADA_AMETHYST_GEMSTONE, amount: 6 }, { item: Item.LIGHTNING_PRISM, amount: 20 }, { item: Item.NOCTILUCOUS_JADE, amount: 60 }, { item: Item.GOLDEN_RAVEN_INSIGNIA,     amount: 24 }]
        }}, 
        elements: [{ element: Element.ELECTRO, materials: { 
            2:  [{ item: Item.TEACHINGS_OF_GOLD,    amount:  3 }, {item: Item.TREASURE_HOARDER_INSIGNIA, amount:  6 }],                                             
            3:  [{ item: Item.GUIDE_TO_GOLD,        amount:  2 }, {item: Item.SILVER_RAVEN_INSIGNIA,     amount:  3 }],                                             
            4:  [{ item: Item.GUIDE_TO_GOLD,        amount:  4 }, {item: Item.SILVER_RAVEN_INSIGNIA,     amount:  4 }],                                             
            5:  [{ item: Item.GUIDE_TO_GOLD,        amount:  6 }, {item: Item.SILVER_RAVEN_INSIGNIA,     amount:  6 }],                                             
            6:  [{ item: Item.GUIDE_TO_GOLD,        amount:  9 }, {item: Item.SILVER_RAVEN_INSIGNIA,     amount:  9 }],                                             
            7:  [{ item: Item.PHILOSOPHIES_OF_GOLD, amount:  4 }, {item: Item.GOLDEN_RAVEN_INSIGNIA,     amount:  4 }, { item: Item["DVALIN'S_SIGH"], amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_GOLD, amount:  6 }, {item: Item.GOLDEN_RAVEN_INSIGNIA,     amount:  6 }, { item: Item["DVALIN'S_SIGH"], amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_GOLD, amount: 12 }, {item: Item.GOLDEN_RAVEN_INSIGNIA,     amount:  9 }, { item: Item["DVALIN'S_SIGH"], amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_GOLD, amount: 16 }, {item: Item.GOLDEN_RAVEN_INSIGNIA,     amount: 12 }, { item: Item["DVALIN'S_SIGH"], amount: 2 }] 
        }}]
    }); static XINGQIU            = new CharacterEntity({ name: "XINGQIU",            rarity: 4, /* FINISHED v2 */ 
        level: { materials: { 
            "20+": [{ item: Item.VARUNADA_LAZURITE_SLIVER,   amount: 1 },                                              { item: Item.SILK_FLOWER, amount:  3 }, { item: Item.DAMAGED_MASK, amount:  3 }], 
            "40+": [{ item: Item.VARUNADA_LAZURITE_FRAGMENT, amount: 3 }, { item: Item.CLEANSING_HEART, amount:  2 }, { item: Item.SILK_FLOWER, amount: 10 }, { item: Item.DAMAGED_MASK, amount: 15 }], 
            "50+": [{ item: Item.VARUNADA_LAZURITE_FRAGMENT, amount: 6 }, { item: Item.CLEANSING_HEART, amount:  4 }, { item: Item.SILK_FLOWER, amount: 20 }, { item: Item.STAINED_MASK, amount: 12 }], 
            "60+": [{ item: Item.VARUNADA_LAZURITE_CHUNK,    amount: 3 }, { item: Item.CLEANSING_HEART, amount:  8 }, { item: Item.SILK_FLOWER, amount: 30 }, { item: Item.STAINED_MASK, amount: 18 }], 
            "70+": [{ item: Item.VARUNADA_LAZURITE_CHUNK,    amount: 6 }, { item: Item.CLEANSING_HEART, amount: 12 }, { item: Item.SILK_FLOWER, amount: 45 }, { item: Item.OMINOUS_MASK, amount: 12 }], 
            "80+": [{ item: Item.VARUNADA_LAZURITE_GEMSTONE, amount: 6 }, { item: Item.CLEANSING_HEART, amount: 20 }, { item: Item.SILK_FLOWER, amount: 60 }, { item: Item.OMINOUS_MASK, amount: 24 }]
        }}, 
        elements: [{ element: Element.HYDRO, materials: { 
            2:  [{ item: Item.TEACHINGS_OF_GOLD,    amount:  3 }, {item: Item.DAMAGED_MASK, amount:  6 }],                                             
            3:  [{ item: Item.GUIDE_TO_GOLD,        amount:  2 }, {item: Item.STAINED_MASK, amount:  3 }],                                             
            4:  [{ item: Item.GUIDE_TO_GOLD,        amount:  4 }, {item: Item.STAINED_MASK, amount:  4 }],                                             
            5:  [{ item: Item.GUIDE_TO_GOLD,        amount:  6 }, {item: Item.STAINED_MASK, amount:  6 }],                                             
            6:  [{ item: Item.GUIDE_TO_GOLD,        amount:  9 }, {item: Item.STAINED_MASK, amount:  9 }],                                             
            7:  [{ item: Item.PHILOSOPHIES_OF_GOLD, amount:  4 }, {item: Item.OMINOUS_MASK, amount:  4 }, { item: Item.TAIL_OF_BOREAS, amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_GOLD, amount:  6 }, {item: Item.OMINOUS_MASK, amount:  6 }, { item: Item.TAIL_OF_BOREAS, amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_GOLD, amount: 12 }, {item: Item.OMINOUS_MASK, amount:  9 }, { item: Item.TAIL_OF_BOREAS, amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_GOLD, amount: 16 }, {item: Item.OMINOUS_MASK, amount: 12 }, { item: Item.TAIL_OF_BOREAS, amount: 2 }] 
        }}]
    }); static NINGGUANG          = new CharacterEntity({ name: "NINGGUANG",          rarity: 4, /* FINISHED v2 */ 
        level: { materials: { 
            "20+": [{ item: Item.PRITHIVA_TOPAZ_SLIVER,   amount: 1 },                                            { item: Item.GLAZE_LILY, amount:  3 }, { item: Item["RECRUIT'S_INSIGNIA"],    amount:  3 }], 
            "40+": [{ item: Item.PRITHIVA_TOPAZ_FRAGMENT, amount: 3 }, { item: Item.BASALT_PILLAR, amount:  2 }, { item: Item.GLAZE_LILY, amount: 10 }, { item: Item["RECRUIT'S_INSIGNIA"],    amount: 15 }], 
            "50+": [{ item: Item.PRITHIVA_TOPAZ_FRAGMENT, amount: 6 }, { item: Item.BASALT_PILLAR, amount:  4 }, { item: Item.GLAZE_LILY, amount: 20 }, { item: Item["SERGEANT'S_INSIGNIA"],   amount: 12 }], 
            "60+": [{ item: Item.PRITHIVA_TOPAZ_CHUNK,    amount: 3 }, { item: Item.BASALT_PILLAR, amount:  8 }, { item: Item.GLAZE_LILY, amount: 30 }, { item: Item["SERGEANT'S_INSIGNIA"],   amount: 18 }], 
            "70+": [{ item: Item.PRITHIVA_TOPAZ_CHUNK,    amount: 6 }, { item: Item.BASALT_PILLAR, amount: 12 }, { item: Item.GLAZE_LILY, amount: 45 }, { item: Item["LIEUTENANT'S_INSIGNIA"], amount: 12 }], 
            "80+": [{ item: Item.PRITHIVA_TOPAZ_GEMSTONE, amount: 6 }, { item: Item.BASALT_PILLAR, amount: 20 }, { item: Item.GLAZE_LILY, amount: 60 }, { item: Item["LIEUTENANT'S_INSIGNIA"], amount: 24 }]
        }}, 
        elements: [{ element: Element.GEO, materials: { 
            2:  [{ item: Item.TEACHINGS_OF_PROSPERITY,    amount:  3 }, {item: Item["RECRUIT'S_INSIGNIA"],    amount:  6 }],                                             
            3:  [{ item: Item.GUIDE_TO_PROSPERITY,        amount:  2 }, {item: Item["SERGEANT'S_INSIGNIA"],   amount:  3 }],                                             
            4:  [{ item: Item.GUIDE_TO_PROSPERITY,        amount:  4 }, {item: Item["SERGEANT'S_INSIGNIA"],   amount:  4 }],                                             
            5:  [{ item: Item.GUIDE_TO_PROSPERITY,        amount:  6 }, {item: Item["SERGEANT'S_INSIGNIA"],   amount:  6 }],                                             
            6:  [{ item: Item.GUIDE_TO_PROSPERITY,        amount:  9 }, {item: Item["SERGEANT'S_INSIGNIA"],   amount:  9 }],                                             
            7:  [{ item: Item.PHILOSOPHIES_OF_PROSPERITY, amount:  4 }, {item: Item["LIEUTENANT'S_INSIGNIA"], amount:  4 }, { item: Item.SPIRIT_LOCKET_OF_BOREAS, amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_PROSPERITY, amount:  6 }, {item: Item["LIEUTENANT'S_INSIGNIA"], amount:  6 }, { item: Item.SPIRIT_LOCKET_OF_BOREAS, amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_PROSPERITY, amount: 12 }, {item: Item["LIEUTENANT'S_INSIGNIA"], amount:  9 }, { item: Item.SPIRIT_LOCKET_OF_BOREAS, amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_PROSPERITY, amount: 16 }, {item: Item["LIEUTENANT'S_INSIGNIA"], amount: 12 }, { item: Item.SPIRIT_LOCKET_OF_BOREAS, amount: 2 }] 
        }}]
    }); static FISCHL             = new CharacterEntity({ name: "FISCHL",             rarity: 4, /* FINISHED v2 */ 
        level: { materials: { 
            "20+": [{ item: Item.VAJRADA_AMETHYST_SLIVER,   amount: 1 },                                              { item: Item.SMALL_LAMP_GRASS, amount:  3 }, { item: Item.FIRM_ARROWHEAD,     amount:  3 }], 
            "40+": [{ item: Item.VAJRADA_AMETHYST_FRAGMENT, amount: 3 }, { item: Item.LIGHTNING_PRISM, amount:  2 }, { item: Item.SMALL_LAMP_GRASS, amount: 10 }, { item: Item.FIRM_ARROWHEAD,     amount: 15 }], 
            "50+": [{ item: Item.VAJRADA_AMETHYST_FRAGMENT, amount: 6 }, { item: Item.LIGHTNING_PRISM, amount:  4 }, { item: Item.SMALL_LAMP_GRASS, amount: 20 }, { item: Item.SHARP_ARROWHEAD,    amount: 12 }], 
            "60+": [{ item: Item.VAJRADA_AMETHYST_CHUNK,    amount: 3 }, { item: Item.LIGHTNING_PRISM, amount:  8 }, { item: Item.SMALL_LAMP_GRASS, amount: 30 }, { item: Item.SHARP_ARROWHEAD,    amount: 18 }], 
            "70+": [{ item: Item.VAJRADA_AMETHYST_CHUNK,    amount: 6 }, { item: Item.LIGHTNING_PRISM, amount: 12 }, { item: Item.SMALL_LAMP_GRASS, amount: 45 }, { item: Item.WEATHERED_ARROWHEAD, amount: 12 }], 
            "80+": [{ item: Item.VAJRADA_AMETHYST_GEMSTONE, amount: 6 }, { item: Item.LIGHTNING_PRISM, amount: 20 }, { item: Item.SMALL_LAMP_GRASS, amount: 60 }, { item: Item.WEATHERED_ARROWHEAD, amount: 24 }]
        }}, 
        elements: [{ element: Element.ELECTRO, materials: { 
            2:  [{ item: Item.TEACHINGS_OF_BALLAD,    amount:  3 }, {item: Item.FIRM_ARROWHEAD,     amount:  6 }],                                             
            3:  [{ item: Item.GUIDE_TO_BALLAD,        amount:  2 }, {item: Item.SHARP_ARROWHEAD,    amount:  3 }],                                             
            4:  [{ item: Item.GUIDE_TO_BALLAD,        amount:  4 }, {item: Item.SHARP_ARROWHEAD,    amount:  4 }],                                             
            5:  [{ item: Item.GUIDE_TO_BALLAD,        amount:  6 }, {item: Item.SHARP_ARROWHEAD,    amount:  6 }],                                             
            6:  [{ item: Item.GUIDE_TO_BALLAD,        amount:  9 }, {item: Item.SHARP_ARROWHEAD,    amount:  9 }],                                             
            7:  [{ item: Item.PHILOSOPHIES_OF_BALLAD, amount:  4 }, {item: Item.WEATHERED_ARROWHEAD, amount:  4 }, { item: Item.SPIRIT_LOCKET_OF_BOREAS, amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_BALLAD, amount:  6 }, {item: Item.WEATHERED_ARROWHEAD, amount:  6 }, { item: Item.SPIRIT_LOCKET_OF_BOREAS, amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_BALLAD, amount: 12 }, {item: Item.WEATHERED_ARROWHEAD, amount:  9 }, { item: Item.SPIRIT_LOCKET_OF_BOREAS, amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_BALLAD, amount: 16 }, {item: Item.WEATHERED_ARROWHEAD, amount: 12 }, { item: Item.SPIRIT_LOCKET_OF_BOREAS, amount: 2 }] 
        }}]
    }); static BENNETT            = new CharacterEntity({ name: "BENNETT",            rarity: 4, /* FINISHED v2 */ 
        level: { materials: { 
            "20+": [{ item: Item.AGNIDUS_AGATE_SLIVER,   amount: 1 },                                             { item: Item.WINDWHEEL_ASTER, amount:  3 }, { item: Item.TREASURE_HOARDER_INSIGNIA, amount:  3 }], 
            "40+": [{ item: Item.AGNIDUS_AGATE_FRAGMENT, amount: 3 }, { item: Item.EVERFLAME_SEED, amount:  2 }, { item: Item.WINDWHEEL_ASTER, amount: 10 }, { item: Item.TREASURE_HOARDER_INSIGNIA, amount: 15 }], 
            "50+": [{ item: Item.AGNIDUS_AGATE_FRAGMENT, amount: 6 }, { item: Item.EVERFLAME_SEED, amount:  4 }, { item: Item.WINDWHEEL_ASTER, amount: 20 }, { item: Item.SILVER_RAVEN_INSIGNIA,     amount: 12 }], 
            "60+": [{ item: Item.AGNIDUS_AGATE_CHUNK,    amount: 3 }, { item: Item.EVERFLAME_SEED, amount:  8 }, { item: Item.WINDWHEEL_ASTER, amount: 30 }, { item: Item.SILVER_RAVEN_INSIGNIA,     amount: 18 }], 
            "70+": [{ item: Item.AGNIDUS_AGATE_CHUNK,    amount: 6 }, { item: Item.EVERFLAME_SEED, amount: 12 }, { item: Item.WINDWHEEL_ASTER, amount: 45 }, { item: Item.GOLDEN_RAVEN_INSIGNIA,     amount: 12 }], 
            "80+": [{ item: Item.AGNIDUS_AGATE_GEMSTONE, amount: 6 }, { item: Item.EVERFLAME_SEED, amount: 20 }, { item: Item.WINDWHEEL_ASTER, amount: 60 }, { item: Item.GOLDEN_RAVEN_INSIGNIA,     amount: 24 }]
        }}, 
        elements: [{ element: Element.PYRO, materials: { 
            2:  [{ item: Item.TEACHINGS_OF_RESISTANCE,    amount:  3 }, {item: Item.TREASURE_HOARDER_INSIGNIA, amount:  6 }],                                             
            3:  [{ item: Item.GUIDE_TO_RESISTANCE,        amount:  2 }, {item: Item.SILVER_RAVEN_INSIGNIA,     amount:  3 }],                                             
            4:  [{ item: Item.GUIDE_TO_RESISTANCE,        amount:  4 }, {item: Item.SILVER_RAVEN_INSIGNIA,     amount:  4 }],                                             
            5:  [{ item: Item.GUIDE_TO_RESISTANCE,        amount:  6 }, {item: Item.SILVER_RAVEN_INSIGNIA,     amount:  6 }],                                             
            6:  [{ item: Item.GUIDE_TO_RESISTANCE,        amount:  9 }, {item: Item.SILVER_RAVEN_INSIGNIA,     amount:  9 }],                                             
            7:  [{ item: Item.PHILOSOPHIES_OF_RESISTANCE, amount:  4 }, {item: Item.GOLDEN_RAVEN_INSIGNIA,     amount:  4 }, { item: Item["DVALIN'S_PLUME"], amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_RESISTANCE, amount:  6 }, {item: Item.GOLDEN_RAVEN_INSIGNIA,     amount:  6 }, { item: Item["DVALIN'S_PLUME"], amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_RESISTANCE, amount: 12 }, {item: Item.GOLDEN_RAVEN_INSIGNIA,     amount:  9 }, { item: Item["DVALIN'S_PLUME"], amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_RESISTANCE, amount: 16 }, {item: Item.GOLDEN_RAVEN_INSIGNIA,     amount: 12 }, { item: Item["DVALIN'S_PLUME"], amount: 2 }] 
        }}]
    }); static NOELLE             = new CharacterEntity({ name: "NOELLE",             rarity: 4, /* FINISHED v2 */ 
        level: { materials: { 
            "20+": [{ item: Item.PRITHIVA_TOPAZ_SLIVER,   amount: 1 },                                            { item: Item.VALBERRY, amount:  3 }, { item: Item.DAMAGED_MASK, amount:  3 }], 
            "40+": [{ item: Item.PRITHIVA_TOPAZ_FRAGMENT, amount: 3 }, { item: Item.BASALT_PILLAR, amount:  2 }, { item: Item.VALBERRY, amount: 10 }, { item: Item.DAMAGED_MASK, amount: 15 }], 
            "50+": [{ item: Item.PRITHIVA_TOPAZ_FRAGMENT, amount: 6 }, { item: Item.BASALT_PILLAR, amount:  4 }, { item: Item.VALBERRY, amount: 20 }, { item: Item.STAINED_MASK, amount: 12 }], 
            "60+": [{ item: Item.PRITHIVA_TOPAZ_CHUNK,    amount: 3 }, { item: Item.BASALT_PILLAR, amount:  8 }, { item: Item.VALBERRY, amount: 30 }, { item: Item.STAINED_MASK, amount: 18 }], 
            "70+": [{ item: Item.PRITHIVA_TOPAZ_CHUNK,    amount: 6 }, { item: Item.BASALT_PILLAR, amount: 12 }, { item: Item.VALBERRY, amount: 45 }, { item: Item.OMINOUS_MASK, amount: 12 }], 
            "80+": [{ item: Item.PRITHIVA_TOPAZ_GEMSTONE, amount: 6 }, { item: Item.BASALT_PILLAR, amount: 20 }, { item: Item.VALBERRY, amount: 60 }, { item: Item.OMINOUS_MASK, amount: 24 }]
        }}, 
        elements: [{ element: Element.GEO, materials: { 
            2:  [{ item: Item.TEACHINGS_OF_RESISTANCE,    amount:  3 }, {item: Item.DAMAGED_MASK, amount:  6 }],                                             
            3:  [{ item: Item.GUIDE_TO_RESISTANCE,        amount:  2 }, {item: Item.STAINED_MASK, amount:  3 }],                                             
            4:  [{ item: Item.GUIDE_TO_RESISTANCE,        amount:  4 }, {item: Item.STAINED_MASK, amount:  4 }],                                             
            5:  [{ item: Item.GUIDE_TO_RESISTANCE,        amount:  6 }, {item: Item.STAINED_MASK, amount:  6 }],                                             
            6:  [{ item: Item.GUIDE_TO_RESISTANCE,        amount:  9 }, {item: Item.STAINED_MASK, amount:  9 }],                                             
            7:  [{ item: Item.PHILOSOPHIES_OF_RESISTANCE, amount:  4 }, {item: Item.OMINOUS_MASK, amount:  4 }, { item: Item["DVALIN'S_CLAW"], amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_RESISTANCE, amount:  6 }, {item: Item.OMINOUS_MASK, amount:  6 }, { item: Item["DVALIN'S_CLAW"], amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_RESISTANCE, amount: 12 }, {item: Item.OMINOUS_MASK, amount:  9 }, { item: Item["DVALIN'S_CLAW"], amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_RESISTANCE, amount: 16 }, {item: Item.OMINOUS_MASK, amount: 12 }, { item: Item["DVALIN'S_CLAW"], amount: 2 }] 
        }}]
    }); static CHONGYUN           = new CharacterEntity({ name: "CHONGYUN",           rarity: 4, /* FINISHED v2 */ 
        level: { materials: { 
            "20+": [{ item: Item.SHIVADA_JADE_SLIVER,   amount: 1 },                                             { item: Item.COR_LAPIS, amount:  3 }, { item: Item.DAMAGED_MASK, amount:  3 }], 
            "40+": [{ item: Item.SHIVADA_JADE_FRAGMENT, amount: 3 }, { item: Item.HOARFROST_CORE, amount:  2 }, { item: Item.COR_LAPIS, amount: 10 }, { item: Item.DAMAGED_MASK, amount: 15 }], 
            "50+": [{ item: Item.SHIVADA_JADE_FRAGMENT, amount: 6 }, { item: Item.HOARFROST_CORE, amount:  4 }, { item: Item.COR_LAPIS, amount: 20 }, { item: Item.STAINED_MASK, amount: 12 }], 
            "60+": [{ item: Item.SHIVADA_JADE_CHUNK,    amount: 3 }, { item: Item.HOARFROST_CORE, amount:  8 }, { item: Item.COR_LAPIS, amount: 30 }, { item: Item.STAINED_MASK, amount: 18 }], 
            "70+": [{ item: Item.SHIVADA_JADE_CHUNK,    amount: 6 }, { item: Item.HOARFROST_CORE, amount: 12 }, { item: Item.COR_LAPIS, amount: 45 }, { item: Item.OMINOUS_MASK, amount: 12 }], 
            "80+": [{ item: Item.SHIVADA_JADE_GEMSTONE, amount: 6 }, { item: Item.HOARFROST_CORE, amount: 20 }, { item: Item.COR_LAPIS, amount: 60 }, { item: Item.OMINOUS_MASK, amount: 24 }]
        }}, 
        elements: [{ element: Element.CRYO, materials: {  
            2:  [{ item: Item.TEACHINGS_OF_DILIGENCE,    amount:  3 }, {item: Item.DAMAGED_MASK, amount:  6 }],                                             
            3:  [{ item: Item.GUIDE_TO_DILIGENCE,        amount:  2 }, {item: Item.STAINED_MASK, amount:  3 }],                                             
            4:  [{ item: Item.GUIDE_TO_DILIGENCE,        amount:  4 }, {item: Item.STAINED_MASK, amount:  4 }],                                             
            5:  [{ item: Item.GUIDE_TO_DILIGENCE,        amount:  6 }, {item: Item.STAINED_MASK, amount:  6 }],                                             
            6:  [{ item: Item.GUIDE_TO_DILIGENCE,        amount:  9 }, {item: Item.STAINED_MASK, amount:  9 }],                                             
            7:  [{ item: Item.PHILOSOPHIES_OF_DILIGENCE, amount:  4 }, {item: Item.OMINOUS_MASK, amount:  4 }, { item: Item["DVALIN'S_SIGH"], amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_DILIGENCE, amount:  6 }, {item: Item.OMINOUS_MASK, amount:  6 }, { item: Item["DVALIN'S_SIGH"], amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_DILIGENCE, amount: 12 }, {item: Item.OMINOUS_MASK, amount:  9 }, { item: Item["DVALIN'S_SIGH"], amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_DILIGENCE, amount: 16 }, {item: Item.OMINOUS_MASK, amount: 12 }, { item: Item["DVALIN'S_SIGH"], amount: 2 }] 
        }}]
    }); static SUCROSE            = new CharacterEntity({ name: "SUCROSE",            rarity: 4, /* FINISHED v2 */ 
        level: { materials: { 
            "20+": [{ item: Item.VAYUDA_TURQUOISE_SLIVER,   amount: 1 },                                             { item: Item.WINDWHEEL_ASTER, amount:  3 }, { item: Item.WHOPPERFLOWER_NECTAR, amount:  3 }], 
            "40+": [{ item: Item.VAYUDA_TURQUOISE_FRAGMENT, amount: 3 }, { item: Item.HURRICANE_SEED, amount:  2 }, { item: Item.WINDWHEEL_ASTER, amount: 10 }, { item: Item.WHOPPERFLOWER_NECTAR, amount: 15 }], 
            "50+": [{ item: Item.VAYUDA_TURQUOISE_FRAGMENT, amount: 6 }, { item: Item.HURRICANE_SEED, amount:  4 }, { item: Item.WINDWHEEL_ASTER, amount: 20 }, { item: Item.SHIMMERING_NECTAR,    amount: 12 }], 
            "60+": [{ item: Item.VAYUDA_TURQUOISE_CHUNK,    amount: 3 }, { item: Item.HURRICANE_SEED, amount:  8 }, { item: Item.WINDWHEEL_ASTER, amount: 30 }, { item: Item.SHIMMERING_NECTAR,    amount: 18 }], 
            "70+": [{ item: Item.VAYUDA_TURQUOISE_CHUNK,    amount: 6 }, { item: Item.HURRICANE_SEED, amount: 12 }, { item: Item.WINDWHEEL_ASTER, amount: 45 }, { item: Item.ENERGY_NECTAR,        amount: 12 }], 
            "80+": [{ item: Item.VAYUDA_TURQUOISE_GEMSTONE, amount: 6 }, { item: Item.HURRICANE_SEED, amount: 20 }, { item: Item.WINDWHEEL_ASTER, amount: 60 }, { item: Item.ENERGY_NECTAR,        amount: 24 }]
        }}, 
        elements: [{ element: Element.ANEMO, materials: {  
            2:  [{ item: Item.TEACHINGS_OF_FREEDOM,    amount:  3 }, {item: Item.WHOPPERFLOWER_NECTAR, amount:  6 }],                                             
            3:  [{ item: Item.GUIDE_TO_FREEDOM,        amount:  2 }, {item: Item.SHIMMERING_NECTAR,    amount:  3 }],                                             
            4:  [{ item: Item.GUIDE_TO_FREEDOM,        amount:  4 }, {item: Item.SHIMMERING_NECTAR,    amount:  4 }],                                             
            5:  [{ item: Item.GUIDE_TO_FREEDOM,        amount:  6 }, {item: Item.SHIMMERING_NECTAR,    amount:  6 }],                                             
            6:  [{ item: Item.GUIDE_TO_FREEDOM,        amount:  9 }, {item: Item.SHIMMERING_NECTAR,    amount:  9 }],                                             
            7:  [{ item: Item.PHILOSOPHIES_OF_FREEDOM, amount:  4 }, {item: Item.ENERGY_NECTAR,        amount:  4 }, { item: Item.SPIRIT_LOCKET_OF_BOREAS, amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_FREEDOM, amount:  6 }, {item: Item.ENERGY_NECTAR,        amount:  6 }, { item: Item.SPIRIT_LOCKET_OF_BOREAS, amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_FREEDOM, amount: 12 }, {item: Item.ENERGY_NECTAR,        amount:  9 }, { item: Item.SPIRIT_LOCKET_OF_BOREAS, amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_FREEDOM, amount: 16 }, {item: Item.ENERGY_NECTAR,        amount: 12 }, { item: Item.SPIRIT_LOCKET_OF_BOREAS, amount: 2 }] 
        }}]
    }); static JEAN               = new CharacterEntity({ name: "JEAN",               rarity: 5, /* FINISHED v2 */ 
        
        level: { materials: { 
            "20+": [{ item: Item.VAYUDA_TURQUOISE_SLIVER,   amount: 1 },                                             { item: Item.DANDELION_SEED, amount:  3 }, { item: Item.DAMAGED_MASK, amount:  3 }], 
            "40+": [{ item: Item.VAYUDA_TURQUOISE_FRAGMENT, amount: 3 }, { item: Item.HURRICANE_SEED, amount:  2 }, { item: Item.DANDELION_SEED, amount: 10 }, { item: Item.DAMAGED_MASK, amount: 15 }], 
            "50+": [{ item: Item.VAYUDA_TURQUOISE_FRAGMENT, amount: 6 }, { item: Item.HURRICANE_SEED, amount:  4 }, { item: Item.DANDELION_SEED, amount: 20 }, { item: Item.STAINED_MASK, amount: 12 }], 
            "60+": [{ item: Item.VAYUDA_TURQUOISE_CHUNK,    amount: 3 }, { item: Item.HURRICANE_SEED, amount:  8 }, { item: Item.DANDELION_SEED, amount: 30 }, { item: Item.STAINED_MASK, amount: 18 }], 
            "70+": [{ item: Item.VAYUDA_TURQUOISE_CHUNK,    amount: 6 }, { item: Item.HURRICANE_SEED, amount: 12 }, { item: Item.DANDELION_SEED, amount: 45 }, { item: Item.OMINOUS_MASK, amount: 12 }], 
            "80+": [{ item: Item.VAYUDA_TURQUOISE_GEMSTONE, amount: 6 }, { item: Item.HURRICANE_SEED, amount: 20 }, { item: Item.DANDELION_SEED, amount: 60 }, { item: Item.OMINOUS_MASK, amount: 24 }]
        }}, 
        elements: [{ element: Element.ANEMO, materials: {  
            2:  [{ item: Item.TEACHINGS_OF_RESISTANCE,    amount:  3 }, {item: Item.DAMAGED_MASK, amount:  6 }],                                             
            3:  [{ item: Item.GUIDE_TO_RESISTANCE,        amount:  2 }, {item: Item.STAINED_MASK, amount:  3 }],                                             
            4:  [{ item: Item.GUIDE_TO_RESISTANCE,        amount:  4 }, {item: Item.STAINED_MASK, amount:  4 }],                                             
            5:  [{ item: Item.GUIDE_TO_RESISTANCE,        amount:  6 }, {item: Item.STAINED_MASK, amount:  6 }],                                             
            6:  [{ item: Item.GUIDE_TO_RESISTANCE,        amount:  9 }, {item: Item.STAINED_MASK, amount:  9 }],                                             
            7:  [{ item: Item.PHILOSOPHIES_OF_RESISTANCE, amount:  4 }, {item: Item.OMINOUS_MASK, amount:  4 }, { item: Item["DVALIN'S_PLUME"], amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_RESISTANCE, amount:  6 }, {item: Item.OMINOUS_MASK, amount:  6 }, { item: Item["DVALIN'S_PLUME"], amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_RESISTANCE, amount: 12 }, {item: Item.OMINOUS_MASK, amount:  9 }, { item: Item["DVALIN'S_PLUME"], amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_RESISTANCE, amount: 16 }, {item: Item.OMINOUS_MASK, amount: 12 }, { item: Item["DVALIN'S_PLUME"], amount: 2 }] 
        }}]
    }); static DILUC              = new CharacterEntity({ name: "DILUC",              rarity: 5, /* FINISHED v2 */ 
        level: { materials: { 
            "20+": [{ item: Item.AGNIDUS_AGATE_SLIVER,   amount: 1 },                                             { item: Item.SMALL_LAMP_GRASS, amount:  3 }, { item: Item["RECRUIT'S_INSIGNIA"], amount:  3 }], 
            "40+": [{ item: Item.AGNIDUS_AGATE_FRAGMENT, amount: 3 }, { item: Item.EVERFLAME_SEED, amount:  2 }, { item: Item.SMALL_LAMP_GRASS, amount: 10 }, { item: Item["RECRUIT'S_INSIGNIA"], amount: 15 }], 
            "50+": [{ item: Item.AGNIDUS_AGATE_FRAGMENT, amount: 6 }, { item: Item.EVERFLAME_SEED, amount:  4 }, { item: Item.SMALL_LAMP_GRASS, amount: 20 }, { item: Item["SERGEANT'S_INSIGNIA"], amount: 12 }], 
            "60+": [{ item: Item.AGNIDUS_AGATE_CHUNK,    amount: 3 }, { item: Item.EVERFLAME_SEED, amount:  8 }, { item: Item.SMALL_LAMP_GRASS, amount: 30 }, { item: Item["SERGEANT'S_INSIGNIA"], amount: 18 }], 
            "70+": [{ item: Item.AGNIDUS_AGATE_CHUNK,    amount: 6 }, { item: Item.EVERFLAME_SEED, amount: 12 }, { item: Item.SMALL_LAMP_GRASS, amount: 45 }, { item: Item["LIEUTENANT'S_INSIGNIA"], amount: 12 }], 
            "80+": [{ item: Item.AGNIDUS_AGATE_GEMSTONE, amount: 6 }, { item: Item.EVERFLAME_SEED, amount: 20 }, { item: Item.SMALL_LAMP_GRASS, amount: 60 }, { item: Item["LIEUTENANT'S_INSIGNIA"], amount: 24 }]
        }}, 
        elements: [{ element: Element.PYRO, materials: {  
            2:  [{ item: Item.TEACHINGS_OF_RESISTANCE,    amount:  3 }, {item: Item["RECRUIT'S_INSIGNIA"],    amount:  6 }],                                             
            3:  [{ item: Item.GUIDE_TO_RESISTANCE,        amount:  2 }, {item: Item["SERGEANT'S_INSIGNIA"],   amount:  3 }],                                             
            4:  [{ item: Item.GUIDE_TO_RESISTANCE,        amount:  4 }, {item: Item["SERGEANT'S_INSIGNIA"],   amount:  4 }],                                             
            5:  [{ item: Item.GUIDE_TO_RESISTANCE,        amount:  6 }, {item: Item["SERGEANT'S_INSIGNIA"],   amount:  6 }],                                             
            6:  [{ item: Item.GUIDE_TO_RESISTANCE,        amount:  9 }, {item: Item["SERGEANT'S_INSIGNIA"],   amount:  9 }],                                             
            7:  [{ item: Item.PHILOSOPHIES_OF_RESISTANCE, amount:  4 }, {item: Item["LIEUTENANT'S_INSIGNIA"], amount:  4 }, { item: Item["DVALIN'S_PLUME"], amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_RESISTANCE, amount:  6 }, {item: Item["LIEUTENANT'S_INSIGNIA"], amount:  6 }, { item: Item["DVALIN'S_PLUME"], amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_RESISTANCE, amount: 12 }, {item: Item["LIEUTENANT'S_INSIGNIA"], amount:  9 }, { item: Item["DVALIN'S_PLUME"], amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_RESISTANCE, amount: 16 }, {item: Item["LIEUTENANT'S_INSIGNIA"], amount: 12 }, { item: Item["DVALIN'S_PLUME"], amount: 2 }] 
        }}]
    }); static QIQI               = new CharacterEntity({ name: "QIQI",               rarity: 5, /* FINISHED v2 */ 
        level: { materials: { 
            "20+": [{ item: Item.SHIVADA_JADE_SLIVER,   amount: 1 },                                             { item: Item.VIOLETGRASS, amount:  3 }, { item: Item.DIVINING_SCROLL,        amount:  3 }], 
            "40+": [{ item: Item.SHIVADA_JADE_FRAGMENT, amount: 3 }, { item: Item.HOARFROST_CORE, amount:  2 }, { item: Item.VIOLETGRASS, amount: 10 }, { item: Item.DIVINING_SCROLL,        amount: 15 }], 
            "50+": [{ item: Item.SHIVADA_JADE_FRAGMENT, amount: 6 }, { item: Item.HOARFROST_CORE, amount:  4 }, { item: Item.VIOLETGRASS, amount: 20 }, { item: Item.SEALED_SCROLL,          amount: 12 }], 
            "60+": [{ item: Item.SHIVADA_JADE_CHUNK,    amount: 3 }, { item: Item.HOARFROST_CORE, amount:  8 }, { item: Item.VIOLETGRASS, amount: 30 }, { item: Item.SEALED_SCROLL,          amount: 18 }], 
            "70+": [{ item: Item.SHIVADA_JADE_CHUNK,    amount: 6 }, { item: Item.HOARFROST_CORE, amount: 12 }, { item: Item.VIOLETGRASS, amount: 45 }, { item: Item.FORBIDDEN_CURSE_SCROLL, amount: 12 }], 
            "80+": [{ item: Item.SHIVADA_JADE_GEMSTONE, amount: 6 }, { item: Item.HOARFROST_CORE, amount: 20 }, { item: Item.VIOLETGRASS, amount: 60 }, { item: Item.FORBIDDEN_CURSE_SCROLL, amount: 24 }]
        }}, 
        elements: [{ element: Element.CRYO, materials: {  
            2:  [{ item: Item.TEACHINGS_OF_PROSPERITY,    amount:  3 }, {item: Item.DIVINING_SCROLL,        amount:  6 }],                                             
            3:  [{ item: Item.GUIDE_TO_PROSPERITY,        amount:  2 }, {item: Item.SEALED_SCROLL,          amount:  3 }],                                             
            4:  [{ item: Item.GUIDE_TO_PROSPERITY,        amount:  4 }, {item: Item.SEALED_SCROLL,          amount:  4 }],                                             
            5:  [{ item: Item.GUIDE_TO_PROSPERITY,        amount:  6 }, {item: Item.SEALED_SCROLL,          amount:  6 }],                                             
            6:  [{ item: Item.GUIDE_TO_PROSPERITY,        amount:  9 }, {item: Item.SEALED_SCROLL,          amount:  9 }],                                             
            7:  [{ item: Item.PHILOSOPHIES_OF_PROSPERITY, amount:  4 }, {item: Item.FORBIDDEN_CURSE_SCROLL, amount:  4 }, { item: Item.TAIL_OF_BOREAS, amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_PROSPERITY, amount:  6 }, {item: Item.FORBIDDEN_CURSE_SCROLL, amount:  6 }, { item: Item.TAIL_OF_BOREAS, amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_PROSPERITY, amount: 12 }, {item: Item.FORBIDDEN_CURSE_SCROLL, amount:  9 }, { item: Item.TAIL_OF_BOREAS, amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_PROSPERITY, amount: 16 }, {item: Item.FORBIDDEN_CURSE_SCROLL, amount: 12 }, { item: Item.TAIL_OF_BOREAS, amount: 2 }] 
        }}]
    }); static MONA               = new CharacterEntity({ name: "MONA",               rarity: 5, /* FINISHED v2 */ 
        level: { materials: { 
            "20+": [{ item: Item.VARUNADA_LAZURITE_SLIVER,   amount: 1 },                                              { item: Item.PHILANEMO_MUSHROOM, amount:  3 }, { item: Item.WHOPPERFLOWER_NECTAR, amount:  3 }], 
            "40+": [{ item: Item.VARUNADA_LAZURITE_FRAGMENT, amount: 3 }, { item: Item.CLEANSING_HEART, amount:  2 }, { item: Item.PHILANEMO_MUSHROOM, amount: 10 }, { item: Item.WHOPPERFLOWER_NECTAR, amount: 15 }], 
            "50+": [{ item: Item.VARUNADA_LAZURITE_FRAGMENT, amount: 6 }, { item: Item.CLEANSING_HEART, amount:  4 }, { item: Item.PHILANEMO_MUSHROOM, amount: 20 }, { item: Item.SHIMMERING_NECTAR,    amount: 12 }], 
            "60+": [{ item: Item.VARUNADA_LAZURITE_CHUNK,    amount: 3 }, { item: Item.CLEANSING_HEART, amount:  8 }, { item: Item.PHILANEMO_MUSHROOM, amount: 30 }, { item: Item.SHIMMERING_NECTAR,    amount: 18 }], 
            "70+": [{ item: Item.VARUNADA_LAZURITE_CHUNK,    amount: 6 }, { item: Item.CLEANSING_HEART, amount: 12 }, { item: Item.PHILANEMO_MUSHROOM, amount: 45 }, { item: Item.ENERGY_NECTAR,        amount: 12 }], 
            "80+": [{ item: Item.VARUNADA_LAZURITE_GEMSTONE, amount: 6 }, { item: Item.CLEANSING_HEART, amount: 20 }, { item: Item.PHILANEMO_MUSHROOM, amount: 60 }, { item: Item.ENERGY_NECTAR,        amount: 24 }]
        }}, 
        elements: [{ element: Element.HYDRO, materials: {  
            2:  [{ item: Item.TEACHINGS_OF_RESISTANCE,    amount:  3 }, {item: Item.WHOPPERFLOWER_NECTAR, amount:  6 }],                                             
            3:  [{ item: Item.GUIDE_TO_RESISTANCE,        amount:  2 }, {item: Item.SHIMMERING_NECTAR,    amount:  3 }],                                             
            4:  [{ item: Item.GUIDE_TO_RESISTANCE,        amount:  4 }, {item: Item.SHIMMERING_NECTAR,    amount:  4 }],                                             
            5:  [{ item: Item.GUIDE_TO_RESISTANCE,        amount:  6 }, {item: Item.SHIMMERING_NECTAR,    amount:  6 }],                                             
            6:  [{ item: Item.GUIDE_TO_RESISTANCE,        amount:  9 }, {item: Item.SHIMMERING_NECTAR,    amount:  9 }],                                             
            7:  [{ item: Item.PHILOSOPHIES_OF_RESISTANCE, amount:  4 }, {item: Item.ENERGY_NECTAR,        amount:  4 }, { item: Item.RING_OF_BOREAS, amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_RESISTANCE, amount:  6 }, {item: Item.ENERGY_NECTAR,        amount:  6 }, { item: Item.RING_OF_BOREAS, amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_RESISTANCE, amount: 12 }, {item: Item.ENERGY_NECTAR,        amount:  9 }, { item: Item.RING_OF_BOREAS, amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_RESISTANCE, amount: 16 }, {item: Item.ENERGY_NECTAR,        amount: 12 }, { item: Item.RING_OF_BOREAS, amount: 2 }] 
        }}]
    }); static KEQING             = new CharacterEntity({ name: "KEQING",             rarity: 5, /* FINISHED v2 */ 
        level: { materials: { 
            "20+": [{ item: Item.VAJRADA_AMETHYST_SLIVER,   amount: 1 },                                              { item: Item.COR_LAPIS, amount:  3 }, { item: Item.WHOPPERFLOWER_NECTAR, amount:  3 }], 
            "40+": [{ item: Item.VAJRADA_AMETHYST_FRAGMENT, amount: 3 }, { item: Item.LIGHTNING_PRISM, amount:  2 }, { item: Item.COR_LAPIS, amount: 10 }, { item: Item.WHOPPERFLOWER_NECTAR, amount: 15 }], 
            "50+": [{ item: Item.VAJRADA_AMETHYST_FRAGMENT, amount: 6 }, { item: Item.LIGHTNING_PRISM, amount:  4 }, { item: Item.COR_LAPIS, amount: 20 }, { item: Item.SHIMMERING_NECTAR,    amount: 12 }], 
            "60+": [{ item: Item.VAJRADA_AMETHYST_CHUNK,    amount: 3 }, { item: Item.LIGHTNING_PRISM, amount:  8 }, { item: Item.COR_LAPIS, amount: 30 }, { item: Item.SHIMMERING_NECTAR,    amount: 18 }], 
            "70+": [{ item: Item.VAJRADA_AMETHYST_CHUNK,    amount: 6 }, { item: Item.LIGHTNING_PRISM, amount: 12 }, { item: Item.COR_LAPIS, amount: 45 }, { item: Item.ENERGY_NECTAR,        amount: 12 }], 
            "80+": [{ item: Item.VAJRADA_AMETHYST_GEMSTONE, amount: 6 }, { item: Item.LIGHTNING_PRISM, amount: 20 }, { item: Item.COR_LAPIS, amount: 60 }, { item: Item.ENERGY_NECTAR,        amount: 24 }]
        }}, 
        elements: [{ element: Element.ELECTRO, materials: {  
            2:  [{ item: Item.TEACHINGS_OF_PROSPERITY,    amount:  3 }, {item: Item.WHOPPERFLOWER_NECTAR, amount:  6 }],                                             
            3:  [{ item: Item.GUIDE_TO_PROSPERITY,        amount:  2 }, {item: Item.SHIMMERING_NECTAR,    amount:  3 }],                                             
            4:  [{ item: Item.GUIDE_TO_PROSPERITY,        amount:  4 }, {item: Item.SHIMMERING_NECTAR,    amount:  4 }],                                             
            5:  [{ item: Item.GUIDE_TO_PROSPERITY,        amount:  6 }, {item: Item.SHIMMERING_NECTAR,    amount:  6 }],                                             
            6:  [{ item: Item.GUIDE_TO_PROSPERITY,        amount:  9 }, {item: Item.SHIMMERING_NECTAR,    amount:  9 }],                                             
            7:  [{ item: Item.PHILOSOPHIES_OF_PROSPERITY, amount:  4 }, {item: Item.ENERGY_NECTAR,        amount:  4 }, { item: Item.RING_OF_BOREAS, amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_PROSPERITY, amount:  6 }, {item: Item.ENERGY_NECTAR,        amount:  6 }, { item: Item.RING_OF_BOREAS, amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_PROSPERITY, amount: 12 }, {item: Item.ENERGY_NECTAR,        amount:  9 }, { item: Item.RING_OF_BOREAS, amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_PROSPERITY, amount: 16 }, {item: Item.ENERGY_NECTAR,        amount: 12 }, { item: Item.RING_OF_BOREAS, amount: 2 }] 
        }}]
    }); static VENTI              = new CharacterEntity({ name: "VENTI",              rarity: 5, /* FINISHED v2 */ 
        level: { materials: { 
            "20+": [{ item: Item.VAYUDA_TURQUOISE_SLIVER,   amount: 1 },                                             { item: Item.CECILIA, amount:  3 }, { item: Item.SLIME_CONDENSATE,  amount:  3 }], 
            "40+": [{ item: Item.VAYUDA_TURQUOISE_FRAGMENT, amount: 3 }, { item: Item.HURRICANE_SEED, amount:  2 }, { item: Item.CECILIA, amount: 10 }, { item: Item.SLIME_CONDENSATE,  amount: 15 }], 
            "50+": [{ item: Item.VAYUDA_TURQUOISE_FRAGMENT, amount: 6 }, { item: Item.HURRICANE_SEED, amount:  4 }, { item: Item.CECILIA, amount: 20 }, { item: Item.SLIME_SECRETIONS,  amount: 12 }], 
            "60+": [{ item: Item.VAYUDA_TURQUOISE_CHUNK,    amount: 3 }, { item: Item.HURRICANE_SEED, amount:  8 }, { item: Item.CECILIA, amount: 30 }, { item: Item.SLIME_SECRETIONS,  amount: 18 }], 
            "70+": [{ item: Item.VAYUDA_TURQUOISE_CHUNK,    amount: 6 }, { item: Item.HURRICANE_SEED, amount: 12 }, { item: Item.CECILIA, amount: 45 }, { item: Item.SLIME_CONCENTRATE, amount: 12 }], 
            "80+": [{ item: Item.VAYUDA_TURQUOISE_GEMSTONE, amount: 6 }, { item: Item.HURRICANE_SEED, amount: 20 }, { item: Item.CECILIA, amount: 60 }, { item: Item.SLIME_CONCENTRATE, amount: 24 }]
        }}, 
        elements: [{ element: Element.ANEMO, materials: {  
            2:  [{ item: Item.TEACHINGS_OF_BALLAD,    amount:  3 }, {item: Item.SLIME_CONDENSATE,  amount:  6 }],                                             
            3:  [{ item: Item.GUIDE_TO_BALLAD,        amount:  2 }, {item: Item.SLIME_SECRETIONS,  amount:  3 }],                                             
            4:  [{ item: Item.GUIDE_TO_BALLAD,        amount:  4 }, {item: Item.SLIME_SECRETIONS,  amount:  4 }],                                             
            5:  [{ item: Item.GUIDE_TO_BALLAD,        amount:  6 }, {item: Item.SLIME_SECRETIONS,  amount:  6 }],                                             
            6:  [{ item: Item.GUIDE_TO_BALLAD,        amount:  9 }, {item: Item.SLIME_SECRETIONS,  amount:  9 }],                                             
            7:  [{ item: Item.PHILOSOPHIES_OF_BALLAD, amount:  4 }, {item: Item.SLIME_CONCENTRATE, amount:  4 }, { item: Item.TAIL_OF_BOREAS, amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_BALLAD, amount:  6 }, {item: Item.SLIME_CONCENTRATE, amount:  6 }, { item: Item.TAIL_OF_BOREAS, amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_BALLAD, amount: 12 }, {item: Item.SLIME_CONCENTRATE, amount:  9 }, { item: Item.TAIL_OF_BOREAS, amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_BALLAD, amount: 16 }, {item: Item.SLIME_CONCENTRATE, amount: 12 }, { item: Item.TAIL_OF_BOREAS, amount: 2 }] 
        }}]
    }); static KLEE               = new CharacterEntity({ name: "KLEE",               rarity: 5, /* FINISHED v2 */ 
        level: { materials: { 
            "20+": [{ item: Item.AGNIDUS_AGATE_SLIVER,   amount: 1 },                                             { item: Item.PHILANEMO_MUSHROOM, amount:  3 }, { item: Item.DIVINING_SCROLL,        amount:  3 }], 
            "40+": [{ item: Item.AGNIDUS_AGATE_FRAGMENT, amount: 3 }, { item: Item.EVERFLAME_SEED, amount:  2 }, { item: Item.PHILANEMO_MUSHROOM, amount: 10 }, { item: Item.DIVINING_SCROLL,        amount: 15 }], 
            "50+": [{ item: Item.AGNIDUS_AGATE_FRAGMENT, amount: 6 }, { item: Item.EVERFLAME_SEED, amount:  4 }, { item: Item.PHILANEMO_MUSHROOM, amount: 20 }, { item: Item.SEALED_SCROLL,          amount: 12 }], 
            "60+": [{ item: Item.AGNIDUS_AGATE_CHUNK,    amount: 3 }, { item: Item.EVERFLAME_SEED, amount:  8 }, { item: Item.PHILANEMO_MUSHROOM, amount: 30 }, { item: Item.SEALED_SCROLL,          amount: 18 }], 
            "70+": [{ item: Item.AGNIDUS_AGATE_CHUNK,    amount: 6 }, { item: Item.EVERFLAME_SEED, amount: 12 }, { item: Item.PHILANEMO_MUSHROOM, amount: 45 }, { item: Item.FORBIDDEN_CURSE_SCROLL, amount: 12 }], 
            "80+": [{ item: Item.AGNIDUS_AGATE_GEMSTONE, amount: 6 }, { item: Item.EVERFLAME_SEED, amount: 20 }, { item: Item.PHILANEMO_MUSHROOM, amount: 60 }, { item: Item.FORBIDDEN_CURSE_SCROLL, amount: 24 }]
        }}, 
        elements: [{ element: Element.PYRO, materials: {  
            2:  [{ item: Item.TEACHINGS_OF_FREEDOM,    amount:  3 }, {item: Item.DIVINING_SCROLL,        amount:  6 }],                                             
            3:  [{ item: Item.GUIDE_TO_FREEDOM,        amount:  2 }, {item: Item.SEALED_SCROLL,          amount:  3 }],                                             
            4:  [{ item: Item.GUIDE_TO_FREEDOM,        amount:  4 }, {item: Item.SEALED_SCROLL,          amount:  4 }],                                             
            5:  [{ item: Item.GUIDE_TO_FREEDOM,        amount:  6 }, {item: Item.SEALED_SCROLL,          amount:  6 }],                                             
            6:  [{ item: Item.GUIDE_TO_FREEDOM,        amount:  9 }, {item: Item.SEALED_SCROLL,          amount:  9 }],                                             
            7:  [{ item: Item.PHILOSOPHIES_OF_FREEDOM, amount:  4 }, {item: Item.FORBIDDEN_CURSE_SCROLL, amount:  4 }, { item: Item.RING_OF_BOREAS, amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_FREEDOM, amount:  6 }, {item: Item.FORBIDDEN_CURSE_SCROLL, amount:  6 }, { item: Item.RING_OF_BOREAS, amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_FREEDOM, amount: 12 }, {item: Item.FORBIDDEN_CURSE_SCROLL, amount:  9 }, { item: Item.RING_OF_BOREAS, amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_FREEDOM, amount: 16 }, {item: Item.FORBIDDEN_CURSE_SCROLL, amount: 12 }, { item: Item.RING_OF_BOREAS, amount: 2 }] 
        }}]
    }); static DIONA              = new CharacterEntity({ name: "DIONA",              rarity: 4, /* FINISHED v2 */ 
        level: { materials: { 
            "20+": [{ item: Item.SHIVADA_JADE_SLIVER,   amount: 1 },                                             { item: Item.CALLA_LILY, amount:  3 }, { item: Item.FIRM_ARROWHEAD,     amount:  3 }], 
            "40+": [{ item: Item.SHIVADA_JADE_FRAGMENT, amount: 3 }, { item: Item.HOARFROST_CORE, amount:  2 }, { item: Item.CALLA_LILY, amount: 10 }, { item: Item.FIRM_ARROWHEAD,     amount: 15 }], 
            "50+": [{ item: Item.SHIVADA_JADE_FRAGMENT, amount: 6 }, { item: Item.HOARFROST_CORE, amount:  4 }, { item: Item.CALLA_LILY, amount: 20 }, { item: Item.SHARP_ARROWHEAD,    amount: 12 }], 
            "60+": [{ item: Item.SHIVADA_JADE_CHUNK,    amount: 3 }, { item: Item.HOARFROST_CORE, amount:  8 }, { item: Item.CALLA_LILY, amount: 30 }, { item: Item.SHARP_ARROWHEAD,    amount: 18 }], 
            "70+": [{ item: Item.SHIVADA_JADE_CHUNK,    amount: 6 }, { item: Item.HOARFROST_CORE, amount: 12 }, { item: Item.CALLA_LILY, amount: 45 }, { item: Item.WEATHERED_ARROWHEAD, amount: 12 }], 
            "80+": [{ item: Item.SHIVADA_JADE_GEMSTONE, amount: 6 }, { item: Item.HOARFROST_CORE, amount: 20 }, { item: Item.CALLA_LILY, amount: 60 }, { item: Item.WEATHERED_ARROWHEAD, amount: 24 }]
        }}, 
        elements: [{ element: Element.CRYO, materials: {  
            2:  [{ item: Item.TEACHINGS_OF_FREEDOM,    amount:  3 }, {item: Item.FIRM_ARROWHEAD,     amount:  6 }],                                             
            3:  [{ item: Item.GUIDE_TO_FREEDOM,        amount:  2 }, {item: Item.SHARP_ARROWHEAD,    amount:  3 }],                                             
            4:  [{ item: Item.GUIDE_TO_FREEDOM,        amount:  4 }, {item: Item.SHARP_ARROWHEAD,    amount:  4 }],                                             
            5:  [{ item: Item.GUIDE_TO_FREEDOM,        amount:  6 }, {item: Item.SHARP_ARROWHEAD,    amount:  6 }],                                             
            6:  [{ item: Item.GUIDE_TO_FREEDOM,        amount:  9 }, {item: Item.SHARP_ARROWHEAD,    amount:  9 }],                                             
            7:  [{ item: Item.PHILOSOPHIES_OF_FREEDOM, amount:  4 }, {item: Item.WEATHERED_ARROWHEAD, amount:  4 }, { item: Item.SHARD_OF_A_FOUL_LEGACY, amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_FREEDOM, amount:  6 }, {item: Item.WEATHERED_ARROWHEAD, amount:  6 }, { item: Item.SHARD_OF_A_FOUL_LEGACY, amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_FREEDOM, amount: 12 }, {item: Item.WEATHERED_ARROWHEAD, amount:  9 }, { item: Item.SHARD_OF_A_FOUL_LEGACY, amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_FREEDOM, amount: 16 }, {item: Item.WEATHERED_ARROWHEAD, amount: 12 }, { item: Item.SHARD_OF_A_FOUL_LEGACY, amount: 2 }] 
        }}]
    }); static TARTAGLIA          = new CharacterEntity({ name: "TARTAGLIA",          rarity: 5, /* FINISHED v2 */ 
        level: { materials: { 
            "20+": [{ item: Item.VARUNADA_LAZURITE_SLIVER,   amount: 1 },                                              { item: Item.STARCONCH, amount:  3 }, { item: Item["RECRUIT'S_INSIGNIA"],    amount:  3 }], 
            "40+": [{ item: Item.VARUNADA_LAZURITE_FRAGMENT, amount: 3 }, { item: Item.CLEANSING_HEART, amount:  2 }, { item: Item.STARCONCH, amount: 10 }, { item: Item["RECRUIT'S_INSIGNIA"],    amount: 15 }], 
            "50+": [{ item: Item.VARUNADA_LAZURITE_FRAGMENT, amount: 6 }, { item: Item.CLEANSING_HEART, amount:  4 }, { item: Item.STARCONCH, amount: 20 }, { item: Item["SERGEANT'S_INSIGNIA"],   amount: 12 }], 
            "60+": [{ item: Item.VARUNADA_LAZURITE_CHUNK,    amount: 3 }, { item: Item.CLEANSING_HEART, amount:  8 }, { item: Item.STARCONCH, amount: 30 }, { item: Item["SERGEANT'S_INSIGNIA"],   amount: 18 }], 
            "70+": [{ item: Item.VARUNADA_LAZURITE_CHUNK,    amount: 6 }, { item: Item.CLEANSING_HEART, amount: 12 }, { item: Item.STARCONCH, amount: 45 }, { item: Item["LIEUTENANT'S_INSIGNIA"], amount: 12 }], 
            "80+": [{ item: Item.VARUNADA_LAZURITE_GEMSTONE, amount: 6 }, { item: Item.CLEANSING_HEART, amount: 20 }, { item: Item.STARCONCH, amount: 60 }, { item: Item["LIEUTENANT'S_INSIGNIA"], amount: 24 }]
        }}, 
        elements: [{ element: Element.HYDRO, materials: {  
            2:  [{ item: Item.TEACHINGS_OF_FREEDOM,    amount:  3 }, {item: Item["RECRUIT'S_INSIGNIA"],    amount:  6 }],                                             
            3:  [{ item: Item.GUIDE_TO_FREEDOM,        amount:  2 }, {item: Item["SERGEANT'S_INSIGNIA"],   amount:  3 }],                                             
            4:  [{ item: Item.GUIDE_TO_FREEDOM,        amount:  4 }, {item: Item["SERGEANT'S_INSIGNIA"],   amount:  4 }],                                             
            5:  [{ item: Item.GUIDE_TO_FREEDOM,        amount:  6 }, {item: Item["SERGEANT'S_INSIGNIA"],   amount:  6 }],                                             
            6:  [{ item: Item.GUIDE_TO_FREEDOM,        amount:  9 }, {item: Item["SERGEANT'S_INSIGNIA"],   amount:  9 }],                                             
            7:  [{ item: Item.PHILOSOPHIES_OF_FREEDOM, amount:  4 }, {item: Item["LIEUTENANT'S_INSIGNIA"], amount:  4 }, { item: Item.SHARD_OF_A_FOUL_LEGACY, amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_FREEDOM, amount:  6 }, {item: Item["LIEUTENANT'S_INSIGNIA"], amount:  6 }, { item: Item.SHARD_OF_A_FOUL_LEGACY, amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_FREEDOM, amount: 12 }, {item: Item["LIEUTENANT'S_INSIGNIA"], amount:  9 }, { item: Item.SHARD_OF_A_FOUL_LEGACY, amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_FREEDOM, amount: 16 }, {item: Item["LIEUTENANT'S_INSIGNIA"], amount: 12 }, { item: Item.SHARD_OF_A_FOUL_LEGACY, amount: 2 }] 
        }}]
    }); static XINYAN             = new CharacterEntity({ name: "XINYAN",             rarity: 4, /* FINISHED v2 */ 
        level: { materials: { 
            "20+": [{ item: Item.AGNIDUS_AGATE_SLIVER,   amount: 1 },                                             { item: Item.VIOLETGRASS, amount:  3 }, { item: Item.TREASURE_HOARDER_INSIGNIA, amount:  3 }], 
            "40+": [{ item: Item.AGNIDUS_AGATE_FRAGMENT, amount: 3 }, { item: Item.EVERFLAME_SEED, amount:  2 }, { item: Item.VIOLETGRASS, amount: 10 }, { item: Item.TREASURE_HOARDER_INSIGNIA, amount: 15 }], 
            "50+": [{ item: Item.AGNIDUS_AGATE_FRAGMENT, amount: 6 }, { item: Item.EVERFLAME_SEED, amount:  4 }, { item: Item.VIOLETGRASS, amount: 20 }, { item: Item.SILVER_RAVEN_INSIGNIA,     amount: 12 }], 
            "60+": [{ item: Item.AGNIDUS_AGATE_CHUNK,    amount: 3 }, { item: Item.EVERFLAME_SEED, amount:  8 }, { item: Item.VIOLETGRASS, amount: 30 }, { item: Item.SILVER_RAVEN_INSIGNIA,     amount: 18 }], 
            "70+": [{ item: Item.AGNIDUS_AGATE_CHUNK,    amount: 6 }, { item: Item.EVERFLAME_SEED, amount: 12 }, { item: Item.VIOLETGRASS, amount: 45 }, { item: Item.GOLDEN_RAVEN_INSIGNIA,     amount: 12 }], 
            "80+": [{ item: Item.AGNIDUS_AGATE_GEMSTONE, amount: 6 }, { item: Item.EVERFLAME_SEED, amount: 20 }, { item: Item.VIOLETGRASS, amount: 60 }, { item: Item.GOLDEN_RAVEN_INSIGNIA,     amount: 24 }]
        }}, 
        elements: [{ element: Element.PYRO, materials: {  
            2:  [{ item: Item.TEACHINGS_OF_GOLD,    amount:  3 }, {item: Item.TREASURE_HOARDER_INSIGNIA, amount:  6 }],                                             
            3:  [{ item: Item.GUIDE_TO_GOLD,        amount:  2 }, {item: Item.SILVER_RAVEN_INSIGNIA,     amount:  3 }],                                             
            4:  [{ item: Item.GUIDE_TO_GOLD,        amount:  4 }, {item: Item.SILVER_RAVEN_INSIGNIA,     amount:  4 }],                                             
            5:  [{ item: Item.GUIDE_TO_GOLD,        amount:  6 }, {item: Item.SILVER_RAVEN_INSIGNIA,     amount:  6 }],                                             
            6:  [{ item: Item.GUIDE_TO_GOLD,        amount:  9 }, {item: Item.SILVER_RAVEN_INSIGNIA,     amount:  9 }],                                             
            7:  [{ item: Item.PHILOSOPHIES_OF_GOLD, amount:  4 }, {item: Item.GOLDEN_RAVEN_INSIGNIA,     amount:  4 }, { item: Item.TUSK_OF_MONOCEROS_CAELI, amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_GOLD, amount:  6 }, {item: Item.GOLDEN_RAVEN_INSIGNIA,     amount:  6 }, { item: Item.TUSK_OF_MONOCEROS_CAELI, amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_GOLD, amount: 12 }, {item: Item.GOLDEN_RAVEN_INSIGNIA,     amount:  9 }, { item: Item.TUSK_OF_MONOCEROS_CAELI, amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_GOLD, amount: 16 }, {item: Item.GOLDEN_RAVEN_INSIGNIA,     amount: 12 }, { item: Item.TUSK_OF_MONOCEROS_CAELI, amount: 2 }] 
        }}]
    }); static ZHONGLI            = new CharacterEntity({ name: "ZHONGLI",            rarity: 5, /* FINISHED v2 */ 
        level: { materials: { 
            "20+": [{ item: Item.PRITHIVA_TOPAZ_SLIVER,   amount: 1 },                                            { item: Item.COR_LAPIS, amount:  3 }, { item: Item.SLIME_CONDENSATE,  amount:  3 }], 
            "40+": [{ item: Item.PRITHIVA_TOPAZ_FRAGMENT, amount: 3 }, { item: Item.BASALT_PILLAR, amount:  2 }, { item: Item.COR_LAPIS, amount: 10 }, { item: Item.SLIME_CONDENSATE,  amount: 15 }], 
            "50+": [{ item: Item.PRITHIVA_TOPAZ_FRAGMENT, amount: 6 }, { item: Item.BASALT_PILLAR, amount:  4 }, { item: Item.COR_LAPIS, amount: 20 }, { item: Item.SLIME_SECRETIONS,  amount: 12 }], 
            "60+": [{ item: Item.PRITHIVA_TOPAZ_CHUNK,    amount: 3 }, { item: Item.BASALT_PILLAR, amount:  8 }, { item: Item.COR_LAPIS, amount: 30 }, { item: Item.SLIME_SECRETIONS,  amount: 18 }], 
            "70+": [{ item: Item.PRITHIVA_TOPAZ_CHUNK,    amount: 6 }, { item: Item.BASALT_PILLAR, amount: 12 }, { item: Item.COR_LAPIS, amount: 45 }, { item: Item.SLIME_CONCENTRATE, amount: 12 }], 
            "80+": [{ item: Item.PRITHIVA_TOPAZ_GEMSTONE, amount: 6 }, { item: Item.BASALT_PILLAR, amount: 20 }, { item: Item.COR_LAPIS, amount: 60 }, { item: Item.SLIME_CONCENTRATE, amount: 24 }]
        }}, 
        elements: [{ element: Element.GEO, materials: {  
            2:  [{ item: Item.TEACHINGS_OF_GOLD,    amount:  3 }, {item: Item.SLIME_CONDENSATE,  amount:  6 }],                                             
            3:  [{ item: Item.GUIDE_TO_GOLD,        amount:  2 }, {item: Item.SLIME_SECRETIONS,  amount:  3 }],                                             
            4:  [{ item: Item.GUIDE_TO_GOLD,        amount:  4 }, {item: Item.SLIME_SECRETIONS,  amount:  4 }],                                             
            5:  [{ item: Item.GUIDE_TO_GOLD,        amount:  6 }, {item: Item.SLIME_SECRETIONS,  amount:  6 }],                                             
            6:  [{ item: Item.GUIDE_TO_GOLD,        amount:  9 }, {item: Item.SLIME_SECRETIONS,  amount:  9 }],                                             
            7:  [{ item: Item.PHILOSOPHIES_OF_GOLD, amount:  4 }, {item: Item.SLIME_CONCENTRATE, amount:  4 }, { item: Item.TUSK_OF_MONOCEROS_CAELI, amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_GOLD, amount:  6 }, {item: Item.SLIME_CONCENTRATE, amount:  6 }, { item: Item.TUSK_OF_MONOCEROS_CAELI, amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_GOLD, amount: 12 }, {item: Item.SLIME_CONCENTRATE, amount:  9 }, { item: Item.TUSK_OF_MONOCEROS_CAELI, amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_GOLD, amount: 16 }, {item: Item.SLIME_CONCENTRATE, amount: 12 }, { item: Item.TUSK_OF_MONOCEROS_CAELI, amount: 2 }] 
        }}]
    }); static ALBEDO             = new CharacterEntity({ name: "ALBEDO",             rarity: 5, /* FINISHED v2 */ 
        level: { materials: { 
            "20+": [{ item: Item.PRITHIVA_TOPAZ_SLIVER,   amount: 1 },                                            { item: Item.CECILIA, amount:  3 }, { item: Item.DIVINING_SCROLL,        amount:  3 }], 
            "40+": [{ item: Item.PRITHIVA_TOPAZ_FRAGMENT, amount: 3 }, { item: Item.BASALT_PILLAR, amount:  2 }, { item: Item.CECILIA, amount: 10 }, { item: Item.DIVINING_SCROLL,        amount: 15 }], 
            "50+": [{ item: Item.PRITHIVA_TOPAZ_FRAGMENT, amount: 6 }, { item: Item.BASALT_PILLAR, amount:  4 }, { item: Item.CECILIA, amount: 20 }, { item: Item.SEALED_SCROLL,          amount: 12 }], 
            "60+": [{ item: Item.PRITHIVA_TOPAZ_CHUNK,    amount: 3 }, { item: Item.BASALT_PILLAR, amount:  8 }, { item: Item.CECILIA, amount: 30 }, { item: Item.SEALED_SCROLL,          amount: 18 }], 
            "70+": [{ item: Item.PRITHIVA_TOPAZ_CHUNK,    amount: 6 }, { item: Item.BASALT_PILLAR, amount: 12 }, { item: Item.CECILIA, amount: 45 }, { item: Item.FORBIDDEN_CURSE_SCROLL, amount: 12 }], 
            "80+": [{ item: Item.PRITHIVA_TOPAZ_GEMSTONE, amount: 6 }, { item: Item.BASALT_PILLAR, amount: 20 }, { item: Item.CECILIA, amount: 60 }, { item: Item.FORBIDDEN_CURSE_SCROLL, amount: 24 }]
        }}, 
        elements: [{ element: Element.GEO, materials: {  
            2:  [{ item: Item.TEACHINGS_OF_BALLAD,    amount:  3 }, {item: Item.DIVINING_SCROLL,        amount:  6 }],                                             
            3:  [{ item: Item.GUIDE_TO_BALLAD,        amount:  2 }, {item: Item.SEALED_SCROLL,          amount:  3 }],                                             
            4:  [{ item: Item.GUIDE_TO_BALLAD,        amount:  4 }, {item: Item.SEALED_SCROLL,          amount:  4 }],                                             
            5:  [{ item: Item.GUIDE_TO_BALLAD,        amount:  6 }, {item: Item.SEALED_SCROLL,          amount:  6 }],                                             
            6:  [{ item: Item.GUIDE_TO_BALLAD,        amount:  9 }, {item: Item.SEALED_SCROLL,          amount:  9 }],                                             
            7:  [{ item: Item.PHILOSOPHIES_OF_BALLAD, amount:  4 }, {item: Item.FORBIDDEN_CURSE_SCROLL, amount:  4 }, { item: Item.TUSK_OF_MONOCEROS_CAELI, amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_BALLAD, amount:  6 }, {item: Item.FORBIDDEN_CURSE_SCROLL, amount:  6 }, { item: Item.TUSK_OF_MONOCEROS_CAELI, amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_BALLAD, amount: 12 }, {item: Item.FORBIDDEN_CURSE_SCROLL, amount:  9 }, { item: Item.TUSK_OF_MONOCEROS_CAELI, amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_BALLAD, amount: 16 }, {item: Item.FORBIDDEN_CURSE_SCROLL, amount: 12 }, { item: Item.TUSK_OF_MONOCEROS_CAELI, amount: 2 }] 
        }}]
    }); static GANYU              = new CharacterEntity({ name: "GANYU",              rarity: 5, /* FINISHED v2 */ 
        level: { materials: { 
            "20+": [{ item: Item.SHIVADA_JADE_SLIVER,   amount: 1 },                                             { item: Item.QINGXIN, amount:  3 }, { item: Item.WHOPPERFLOWER_NECTAR, amount:  3 }], 
            "40+": [{ item: Item.SHIVADA_JADE_FRAGMENT, amount: 3 }, { item: Item.HOARFROST_CORE, amount:  2 }, { item: Item.QINGXIN, amount: 10 }, { item: Item.WHOPPERFLOWER_NECTAR, amount: 15 }], 
            "50+": [{ item: Item.SHIVADA_JADE_FRAGMENT, amount: 6 }, { item: Item.HOARFROST_CORE, amount:  4 }, { item: Item.QINGXIN, amount: 20 }, { item: Item.SHIMMERING_NECTAR,    amount: 12 }], 
            "60+": [{ item: Item.SHIVADA_JADE_CHUNK,    amount: 3 }, { item: Item.HOARFROST_CORE, amount:  8 }, { item: Item.QINGXIN, amount: 30 }, { item: Item.SHIMMERING_NECTAR,    amount: 18 }], 
            "70+": [{ item: Item.SHIVADA_JADE_CHUNK,    amount: 6 }, { item: Item.HOARFROST_CORE, amount: 12 }, { item: Item.QINGXIN, amount: 45 }, { item: Item.ENERGY_NECTAR,        amount: 12 }], 
            "80+": [{ item: Item.SHIVADA_JADE_GEMSTONE, amount: 6 }, { item: Item.HOARFROST_CORE, amount: 20 }, { item: Item.QINGXIN, amount: 60 }, { item: Item.ENERGY_NECTAR,        amount: 24 }]
        }}, 
        elements: [{ element: Element.CRYO, materials: {  
            2:  [{ item: Item.TEACHINGS_OF_DILIGENCE,    amount:  3 }, {item: Item.WHOPPERFLOWER_NECTAR, amount:  6 }],                                             
            3:  [{ item: Item.GUIDE_TO_DILIGENCE,        amount:  2 }, {item: Item.SHIMMERING_NECTAR,    amount:  3 }],                                             
            4:  [{ item: Item.GUIDE_TO_DILIGENCE,        amount:  4 }, {item: Item.SHIMMERING_NECTAR,    amount:  4 }],                                             
            5:  [{ item: Item.GUIDE_TO_DILIGENCE,        amount:  6 }, {item: Item.SHIMMERING_NECTAR,    amount:  6 }],                                             
            6:  [{ item: Item.GUIDE_TO_DILIGENCE,        amount:  9 }, {item: Item.SHIMMERING_NECTAR,    amount:  9 }],                                             
            7:  [{ item: Item.PHILOSOPHIES_OF_DILIGENCE, amount:  4 }, {item: Item.ENERGY_NECTAR,        amount:  4 }, { item: Item.SHADOW_OF_THE_WARRIOR, amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_DILIGENCE, amount:  6 }, {item: Item.ENERGY_NECTAR,        amount:  6 }, { item: Item.SHADOW_OF_THE_WARRIOR, amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_DILIGENCE, amount: 12 }, {item: Item.ENERGY_NECTAR,        amount:  9 }, { item: Item.SHADOW_OF_THE_WARRIOR, amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_DILIGENCE, amount: 16 }, {item: Item.ENERGY_NECTAR,        amount: 12 }, { item: Item.SHADOW_OF_THE_WARRIOR, amount: 2 }] 
        }}]
    }); static XIAO               = new CharacterEntity({ name: "XIAO",               rarity: 5, /* FINISHED v2 */ 
        level: { materials: { 
            "20+": [{ item: Item.VAYUDA_TURQUOISE_SLIVER,   amount: 1 },                                            { item: Item.QINGXIN, amount:  3 }, { item: Item.SLIME_CONDENSATE,  amount:  3 }], 
            "40+": [{ item: Item.VAYUDA_TURQUOISE_FRAGMENT, amount: 3 }, { item: Item.JUVENILE_JADE, amount:  2 }, { item: Item.QINGXIN, amount: 10 }, { item: Item.SLIME_CONDENSATE,  amount: 15 }], 
            "50+": [{ item: Item.VAYUDA_TURQUOISE_FRAGMENT, amount: 6 }, { item: Item.JUVENILE_JADE, amount:  4 }, { item: Item.QINGXIN, amount: 20 }, { item: Item.SLIME_SECRETIONS,  amount: 12 }], 
            "60+": [{ item: Item.VAYUDA_TURQUOISE_CHUNK,    amount: 3 }, { item: Item.JUVENILE_JADE, amount:  8 }, { item: Item.QINGXIN, amount: 30 }, { item: Item.SLIME_SECRETIONS,  amount: 18 }], 
            "70+": [{ item: Item.VAYUDA_TURQUOISE_CHUNK,    amount: 6 }, { item: Item.JUVENILE_JADE, amount: 12 }, { item: Item.QINGXIN, amount: 45 }, { item: Item.SLIME_CONCENTRATE, amount: 12 }], 
            "80+": [{ item: Item.VAYUDA_TURQUOISE_GEMSTONE, amount: 6 }, { item: Item.JUVENILE_JADE, amount: 20 }, { item: Item.QINGXIN, amount: 60 }, { item: Item.SLIME_CONCENTRATE, amount: 24 }]
        }}, 
        elements: [{ element: Element.ANEMO, materials: {  
            2:  [{ item: Item.TEACHINGS_OF_PROSPERITY,    amount:  3 }, {item: Item.SLIME_CONDENSATE,  amount:  6 }],                                             
            3:  [{ item: Item.GUIDE_TO_PROSPERITY,        amount:  2 }, {item: Item.SLIME_SECRETIONS,  amount:  3 }],                                             
            4:  [{ item: Item.GUIDE_TO_PROSPERITY,        amount:  4 }, {item: Item.SLIME_SECRETIONS,  amount:  4 }],                                             
            5:  [{ item: Item.GUIDE_TO_PROSPERITY,        amount:  6 }, {item: Item.SLIME_SECRETIONS,  amount:  6 }],                                             
            6:  [{ item: Item.GUIDE_TO_PROSPERITY,        amount:  9 }, {item: Item.SLIME_SECRETIONS,  amount:  9 }],                                             
            7:  [{ item: Item.PHILOSOPHIES_OF_PROSPERITY, amount:  4 }, {item: Item.SLIME_CONCENTRATE, amount:  4 }, { item: Item.SHADOW_OF_THE_WARRIOR, amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_PROSPERITY, amount:  6 }, {item: Item.SLIME_CONCENTRATE, amount:  6 }, { item: Item.SHADOW_OF_THE_WARRIOR, amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_PROSPERITY, amount: 12 }, {item: Item.SLIME_CONCENTRATE, amount:  9 }, { item: Item.SHADOW_OF_THE_WARRIOR, amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_PROSPERITY, amount: 16 }, {item: Item.SLIME_CONCENTRATE, amount: 12 }, { item: Item.SHADOW_OF_THE_WARRIOR, amount: 2 }] 
        }}]
    }); static HU_TAO             = new CharacterEntity({ name: "HU_TAO",             rarity: 5, /* FINISHED v2 */ 
        level: { materials: { 
            "20+": [{ item: Item.AGNIDUS_AGATE_SLIVER,   amount: 1 },                                            { item: Item.SILK_FLOWER, amount:  3 }, { item: Item.WHOPPERFLOWER_NECTAR, amount:  3 }], 
            "40+": [{ item: Item.AGNIDUS_AGATE_FRAGMENT, amount: 3 }, { item: Item.JUVENILE_JADE, amount:  2 }, { item: Item.SILK_FLOWER, amount: 10 }, { item: Item.WHOPPERFLOWER_NECTAR, amount: 15 }], 
            "50+": [{ item: Item.AGNIDUS_AGATE_FRAGMENT, amount: 6 }, { item: Item.JUVENILE_JADE, amount:  4 }, { item: Item.SILK_FLOWER, amount: 20 }, { item: Item.SHIMMERING_NECTAR,    amount: 12 }], 
            "60+": [{ item: Item.AGNIDUS_AGATE_CHUNK,    amount: 3 }, { item: Item.JUVENILE_JADE, amount:  8 }, { item: Item.SILK_FLOWER, amount: 30 }, { item: Item.SHIMMERING_NECTAR,    amount: 18 }], 
            "70+": [{ item: Item.AGNIDUS_AGATE_CHUNK,    amount: 6 }, { item: Item.JUVENILE_JADE, amount: 12 }, { item: Item.SILK_FLOWER, amount: 45 }, { item: Item.ENERGY_NECTAR,        amount: 12 }], 
            "80+": [{ item: Item.AGNIDUS_AGATE_GEMSTONE, amount: 6 }, { item: Item.JUVENILE_JADE, amount: 20 }, { item: Item.SILK_FLOWER, amount: 60 }, { item: Item.ENERGY_NECTAR,        amount: 24 }]
        }}, 
        elements: [{ element: Element.PYRO, materials: {  
            2:  [{ item: Item.TEACHINGS_OF_DILIGENCE,    amount:  3 }, {item: Item.WHOPPERFLOWER_NECTAR, amount:  6 }],                                             
            3:  [{ item: Item.GUIDE_TO_DILIGENCE,        amount:  2 }, {item: Item.SHIMMERING_NECTAR,    amount:  3 }],                                             
            4:  [{ item: Item.GUIDE_TO_DILIGENCE,        amount:  4 }, {item: Item.SHIMMERING_NECTAR,    amount:  4 }],                                             
            5:  [{ item: Item.GUIDE_TO_DILIGENCE,        amount:  6 }, {item: Item.SHIMMERING_NECTAR,    amount:  6 }],                                             
            6:  [{ item: Item.GUIDE_TO_DILIGENCE,        amount:  9 }, {item: Item.SHIMMERING_NECTAR,    amount:  9 }],                                             
            7:  [{ item: Item.PHILOSOPHIES_OF_DILIGENCE, amount:  4 }, {item: Item.ENERGY_NECTAR,        amount:  4 }, { item: Item.SHARD_OF_A_FOUL_LEGACY, amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_DILIGENCE, amount:  6 }, {item: Item.ENERGY_NECTAR,        amount:  6 }, { item: Item.SHARD_OF_A_FOUL_LEGACY, amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_DILIGENCE, amount: 12 }, {item: Item.ENERGY_NECTAR,        amount:  9 }, { item: Item.SHARD_OF_A_FOUL_LEGACY, amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_DILIGENCE, amount: 16 }, {item: Item.ENERGY_NECTAR,        amount: 12 }, { item: Item.SHARD_OF_A_FOUL_LEGACY, amount: 2 }] 
        }}]
    }); static ROSARIA            = new CharacterEntity({ name: "ROSARIA",            rarity: 4, /* FINISHED v2 */ 
        level: { materials: { 
            "20+": [{ item: Item.SHIVADA_JADE_SLIVER,   amount: 1 },                                             { item: Item.VALBERRY, amount:  3 }, { item: Item["RECRUIT'S_INSIGNIA"],    amount:  3 }], 
            "40+": [{ item: Item.SHIVADA_JADE_FRAGMENT, amount: 3 }, { item: Item.HOARFROST_CORE, amount:  2 }, { item: Item.VALBERRY, amount: 10 }, { item: Item["RECRUIT'S_INSIGNIA"],    amount: 15 }], 
            "50+": [{ item: Item.SHIVADA_JADE_FRAGMENT, amount: 6 }, { item: Item.HOARFROST_CORE, amount:  4 }, { item: Item.VALBERRY, amount: 20 }, { item: Item["SERGEANT'S_INSIGNIA"],   amount: 12 }], 
            "60+": [{ item: Item.SHIVADA_JADE_CHUNK,    amount: 3 }, { item: Item.HOARFROST_CORE, amount:  8 }, { item: Item.VALBERRY, amount: 30 }, { item: Item["SERGEANT'S_INSIGNIA"],   amount: 18 }], 
            "70+": [{ item: Item.SHIVADA_JADE_CHUNK,    amount: 6 }, { item: Item.HOARFROST_CORE, amount: 12 }, { item: Item.VALBERRY, amount: 45 }, { item: Item["LIEUTENANT'S_INSIGNIA"], amount: 12 }], 
            "80+": [{ item: Item.SHIVADA_JADE_GEMSTONE, amount: 6 }, { item: Item.HOARFROST_CORE, amount: 20 }, { item: Item.VALBERRY, amount: 60 }, { item: Item["LIEUTENANT'S_INSIGNIA"], amount: 24 }]
        }}, 
        elements: [{ element: Element.CRYO, materials: {  
            2:  [{ item: Item.TEACHINGS_OF_BALLAD,    amount:  3 }, {item: Item["RECRUIT'S_INSIGNIA"],    amount:  6 }],                                             
            3:  [{ item: Item.GUIDE_TO_BALLAD,        amount:  2 }, {item: Item["SERGEANT'S_INSIGNIA"],   amount:  3 }],                                             
            4:  [{ item: Item.GUIDE_TO_BALLAD,        amount:  4 }, {item: Item["SERGEANT'S_INSIGNIA"],   amount:  4 }],                                             
            5:  [{ item: Item.GUIDE_TO_BALLAD,        amount:  6 }, {item: Item["SERGEANT'S_INSIGNIA"],   amount:  6 }],                                             
            6:  [{ item: Item.GUIDE_TO_BALLAD,        amount:  9 }, {item: Item["SERGEANT'S_INSIGNIA"],   amount:  9 }],                                             
            7:  [{ item: Item.PHILOSOPHIES_OF_BALLAD, amount:  4 }, {item: Item["LIEUTENANT'S_INSIGNIA"], amount:  4 }, { item: Item.SHADOW_OF_THE_WARRIOR, amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_BALLAD, amount:  6 }, {item: Item["LIEUTENANT'S_INSIGNIA"], amount:  6 }, { item: Item.SHADOW_OF_THE_WARRIOR, amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_BALLAD, amount: 12 }, {item: Item["LIEUTENANT'S_INSIGNIA"], amount:  9 }, { item: Item.SHADOW_OF_THE_WARRIOR, amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_BALLAD, amount: 16 }, {item: Item["LIEUTENANT'S_INSIGNIA"], amount: 12 }, { item: Item.SHADOW_OF_THE_WARRIOR, amount: 2 }] 
        }}]
    }); static YANFEI             = new CharacterEntity({ name: "YANFEI",             rarity: 4, /* FINISHED v2 */ 
        level: { materials: { 
            "20+": [{ item: Item.AGNIDUS_AGATE_SLIVER,   amount: 1 },                                            { item: Item.NOCTILUCOUS_JADE, amount:  3 }, { item: Item.TREASURE_HOARDER_INSIGNIA, amount:  3 }], 
            "40+": [{ item: Item.AGNIDUS_AGATE_FRAGMENT, amount: 3 }, { item: Item.JUVENILE_JADE, amount:  2 }, { item: Item.NOCTILUCOUS_JADE, amount: 10 }, { item: Item.TREASURE_HOARDER_INSIGNIA, amount: 15 }], 
            "50+": [{ item: Item.AGNIDUS_AGATE_FRAGMENT, amount: 6 }, { item: Item.JUVENILE_JADE, amount:  4 }, { item: Item.NOCTILUCOUS_JADE, amount: 20 }, { item: Item.SILVER_RAVEN_INSIGNIA    , amount: 12 }], 
            "60+": [{ item: Item.AGNIDUS_AGATE_CHUNK,    amount: 3 }, { item: Item.JUVENILE_JADE, amount:  8 }, { item: Item.NOCTILUCOUS_JADE, amount: 30 }, { item: Item.SILVER_RAVEN_INSIGNIA    , amount: 18 }], 
            "70+": [{ item: Item.AGNIDUS_AGATE_CHUNK,    amount: 6 }, { item: Item.JUVENILE_JADE, amount: 12 }, { item: Item.NOCTILUCOUS_JADE, amount: 45 }, { item: Item.GOLDEN_RAVEN_INSIGNIA    , amount: 12 }], 
            "80+": [{ item: Item.AGNIDUS_AGATE_GEMSTONE, amount: 6 }, { item: Item.JUVENILE_JADE, amount: 20 }, { item: Item.NOCTILUCOUS_JADE, amount: 60 }, { item: Item.GOLDEN_RAVEN_INSIGNIA    , amount: 24 }]
        }}, 
        elements: [{ element: Element.PYRO, materials: {  
            2:  [{ item: Item.TEACHINGS_OF_GOLD,    amount:  3 }, {item: Item.TREASURE_HOARDER_INSIGNIA, amount:  6 }],                                             
            3:  [{ item: Item.GUIDE_TO_GOLD,        amount:  2 }, {item: Item.SILVER_RAVEN_INSIGNIA    , amount:  3 }],                                             
            4:  [{ item: Item.GUIDE_TO_GOLD,        amount:  4 }, {item: Item.SILVER_RAVEN_INSIGNIA    , amount:  4 }],                                             
            5:  [{ item: Item.GUIDE_TO_GOLD,        amount:  6 }, {item: Item.SILVER_RAVEN_INSIGNIA    , amount:  6 }],                                             
            6:  [{ item: Item.GUIDE_TO_GOLD,        amount:  9 }, {item: Item.SILVER_RAVEN_INSIGNIA    , amount:  9 }],                                             
            7:  [{ item: Item.PHILOSOPHIES_OF_GOLD, amount:  4 }, {item: Item.GOLDEN_RAVEN_INSIGNIA    , amount:  4 }, { item: Item.BLOODJADE_BRANCH, amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_GOLD, amount:  6 }, {item: Item.GOLDEN_RAVEN_INSIGNIA    , amount:  6 }, { item: Item.BLOODJADE_BRANCH, amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_GOLD, amount: 12 }, {item: Item.GOLDEN_RAVEN_INSIGNIA    , amount:  9 }, { item: Item.BLOODJADE_BRANCH, amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_GOLD, amount: 16 }, {item: Item.GOLDEN_RAVEN_INSIGNIA    , amount: 12 }, { item: Item.BLOODJADE_BRANCH, amount: 2 }] 
        }}]
    }); static EULA               = new CharacterEntity({ name: "EULA",               rarity: 5, /* FINISHED v2 */ 
        level: { materials: { 
            "20+": [{ item: Item.SHIVADA_JADE_SLIVER,   amount: 1 },                                                { item: Item.DANDELION_SEED, amount:  3 }, { item: Item.DAMAGED_MASK, amount:  3 }], 
            "40+": [{ item: Item.SHIVADA_JADE_FRAGMENT, amount: 3 }, { item: Item.CRYSTALLINE_BLOOM, amount:  2 }, { item: Item.DANDELION_SEED, amount: 10 }, { item: Item.DAMAGED_MASK, amount: 15 }], 
            "50+": [{ item: Item.SHIVADA_JADE_FRAGMENT, amount: 6 }, { item: Item.CRYSTALLINE_BLOOM, amount:  4 }, { item: Item.DANDELION_SEED, amount: 20 }, { item: Item.STAINED_MASK, amount: 12 }], 
            "60+": [{ item: Item.SHIVADA_JADE_CHUNK,    amount: 3 }, { item: Item.CRYSTALLINE_BLOOM, amount:  8 }, { item: Item.DANDELION_SEED, amount: 30 }, { item: Item.STAINED_MASK, amount: 18 }], 
            "70+": [{ item: Item.SHIVADA_JADE_CHUNK,    amount: 6 }, { item: Item.CRYSTALLINE_BLOOM, amount: 12 }, { item: Item.DANDELION_SEED, amount: 45 }, { item: Item.OMINOUS_MASK, amount: 12 }], 
            "80+": [{ item: Item.SHIVADA_JADE_GEMSTONE, amount: 6 }, { item: Item.CRYSTALLINE_BLOOM, amount: 20 }, { item: Item.DANDELION_SEED, amount: 60 }, { item: Item.OMINOUS_MASK, amount: 24 }]
        }}, 
        elements: [{ element: Element.CRYO, materials: {  
            2:  [{ item: Item.TEACHINGS_OF_RESISTANCE,    amount:  3 }, {item: Item.DAMAGED_MASK, amount:  6 }],                                             
            3:  [{ item: Item.GUIDE_TO_RESISTANCE,        amount:  2 }, {item: Item.STAINED_MASK, amount:  3 }],                                             
            4:  [{ item: Item.GUIDE_TO_RESISTANCE,        amount:  4 }, {item: Item.STAINED_MASK, amount:  4 }],                                             
            5:  [{ item: Item.GUIDE_TO_RESISTANCE,        amount:  6 }, {item: Item.STAINED_MASK, amount:  6 }],                                             
            6:  [{ item: Item.GUIDE_TO_RESISTANCE,        amount:  9 }, {item: Item.STAINED_MASK, amount:  9 }],                                             
            7:  [{ item: Item.PHILOSOPHIES_OF_RESISTANCE, amount:  4 }, {item: Item.OMINOUS_MASK, amount:  4 }, { item: Item["DRAGON_LORD'S_CROWN"], amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_RESISTANCE, amount:  6 }, {item: Item.OMINOUS_MASK, amount:  6 }, { item: Item["DRAGON_LORD'S_CROWN"], amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_RESISTANCE, amount: 12 }, {item: Item.OMINOUS_MASK, amount:  9 }, { item: Item["DRAGON_LORD'S_CROWN"], amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_RESISTANCE, amount: 16 }, {item: Item.OMINOUS_MASK, amount: 12 }, { item: Item["DRAGON_LORD'S_CROWN"], amount: 2 }] 
        }}]
    }); static KAEDEHARA_KAZUHA   = new CharacterEntity({ name: "KAEDEHARA_KAZUHA",   rarity: 5, /* FINISHED v2 */ 
        level: { materials: { 
            "20+": [{ item: Item.VAYUDA_TURQUOISE_SLIVER,   amount: 1 },                                              { item: Item.SEA_GANODERMA, amount:  3 }, { item: Item.TREASURE_HOARDER_INSIGNIA, amount:  3 }], 
            "40+": [{ item: Item.VAYUDA_TURQUOISE_FRAGMENT, amount: 3 }, { item: Item.MARIONETTE_CORE, amount:  2 }, { item: Item.SEA_GANODERMA, amount: 10 }, { item: Item.TREASURE_HOARDER_INSIGNIA, amount: 15 }], 
            "50+": [{ item: Item.VAYUDA_TURQUOISE_FRAGMENT, amount: 6 }, { item: Item.MARIONETTE_CORE, amount:  4 }, { item: Item.SEA_GANODERMA, amount: 20 }, { item: Item.SILVER_RAVEN_INSIGNIA    , amount: 12 }], 
            "60+": [{ item: Item.VAYUDA_TURQUOISE_CHUNK,    amount: 3 }, { item: Item.MARIONETTE_CORE, amount:  8 }, { item: Item.SEA_GANODERMA, amount: 30 }, { item: Item.SILVER_RAVEN_INSIGNIA    , amount: 18 }], 
            "70+": [{ item: Item.VAYUDA_TURQUOISE_CHUNK,    amount: 6 }, { item: Item.MARIONETTE_CORE, amount: 12 }, { item: Item.SEA_GANODERMA, amount: 45 }, { item: Item.GOLDEN_RAVEN_INSIGNIA    , amount: 12 }], 
            "80+": [{ item: Item.VAYUDA_TURQUOISE_GEMSTONE, amount: 6 }, { item: Item.MARIONETTE_CORE, amount: 20 }, { item: Item.SEA_GANODERMA, amount: 60 }, { item: Item.GOLDEN_RAVEN_INSIGNIA    , amount: 24 }]
        }}, 
        elements: [{ element: Element.ANEMO, materials: {  
            2:  [{ item: Item.TEACHINGS_OF_DILIGENCE,    amount:  3 }, {item: Item.TREASURE_HOARDER_INSIGNIA, amount:  6 }],                                             
            3:  [{ item: Item.GUIDE_TO_DILIGENCE,        amount:  2 }, {item: Item.SILVER_RAVEN_INSIGNIA    , amount:  3 }],                                             
            4:  [{ item: Item.GUIDE_TO_DILIGENCE,        amount:  4 }, {item: Item.SILVER_RAVEN_INSIGNIA    , amount:  4 }],                                             
            5:  [{ item: Item.GUIDE_TO_DILIGENCE,        amount:  6 }, {item: Item.SILVER_RAVEN_INSIGNIA    , amount:  6 }],                                             
            6:  [{ item: Item.GUIDE_TO_DILIGENCE,        amount:  9 }, {item: Item.SILVER_RAVEN_INSIGNIA    , amount:  9 }],                                             
            7:  [{ item: Item.PHILOSOPHIES_OF_DILIGENCE, amount:  4 }, {item: Item.GOLDEN_RAVEN_INSIGNIA    , amount:  4 }, { item: Item.GILDED_SCALE, amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_DILIGENCE, amount:  6 }, {item: Item.GOLDEN_RAVEN_INSIGNIA    , amount:  6 }, { item: Item.GILDED_SCALE, amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_DILIGENCE, amount: 12 }, {item: Item.GOLDEN_RAVEN_INSIGNIA    , amount:  9 }, { item: Item.GILDED_SCALE, amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_DILIGENCE, amount: 16 }, {item: Item.GOLDEN_RAVEN_INSIGNIA    , amount: 12 }, { item: Item.GILDED_SCALE, amount: 2 }] 
        }}]
    }); static KAMISATO_AYAKA     = new CharacterEntity({ name: "KAMISATO_AYAKA",     rarity: 5, /* FINISHED v2 */ 
        level: { materials: { 
            "20+": [{ item: Item.SHIVADA_JADE_SLIVER,   amount: 1 },                                              { item: Item.SAKURA_BLOOM, amount:  3 }, { item: Item.OLD_HANDGUARD     , amount:  3 }], 
            "40+": [{ item: Item.SHIVADA_JADE_FRAGMENT, amount: 3 }, { item: Item.PERPETUAL_HEART, amount:  2 }, { item: Item.SAKURA_BLOOM, amount: 10 }, { item: Item.OLD_HANDGUARD     , amount: 15 }], 
            "50+": [{ item: Item.SHIVADA_JADE_FRAGMENT, amount: 6 }, { item: Item.PERPETUAL_HEART, amount:  4 }, { item: Item.SAKURA_BLOOM, amount: 20 }, { item: Item.KAGEUCHI_HANDGUARD, amount: 12 }], 
            "60+": [{ item: Item.SHIVADA_JADE_CHUNK,    amount: 3 }, { item: Item.PERPETUAL_HEART, amount:  8 }, { item: Item.SAKURA_BLOOM, amount: 30 }, { item: Item.KAGEUCHI_HANDGUARD, amount: 18 }], 
            "70+": [{ item: Item.SHIVADA_JADE_CHUNK,    amount: 6 }, { item: Item.PERPETUAL_HEART, amount: 12 }, { item: Item.SAKURA_BLOOM, amount: 45 }, { item: Item.FAMED_HANDGUARD   , amount: 12 }], 
            "80+": [{ item: Item.SHIVADA_JADE_GEMSTONE, amount: 6 }, { item: Item.PERPETUAL_HEART, amount: 20 }, { item: Item.SAKURA_BLOOM, amount: 60 }, { item: Item.FAMED_HANDGUARD   , amount: 24 }]
        }}, 
        elements: [{ element: Element.CRYO, materials: { 
            2:  [{ item: Item.TEACHINGS_OF_ELEGANCE,    amount:  3 }, {item: Item.OLD_HANDGUARD     , amount:  6 }],                                             
            3:  [{ item: Item.GUIDE_TO_ELEGANCE,        amount:  2 }, {item: Item.KAGEUCHI_HANDGUARD, amount:  3 }],                                             
            4:  [{ item: Item.GUIDE_TO_ELEGANCE,        amount:  4 }, {item: Item.KAGEUCHI_HANDGUARD, amount:  4 }],                                             
            5:  [{ item: Item.GUIDE_TO_ELEGANCE,        amount:  6 }, {item: Item.KAGEUCHI_HANDGUARD, amount:  6 }],                                             
            6:  [{ item: Item.GUIDE_TO_ELEGANCE,        amount:  9 }, {item: Item.KAGEUCHI_HANDGUARD, amount:  9 }],                                             
            7:  [{ item: Item.PHILOSOPHIES_OF_ELEGANCE, amount:  4 }, {item: Item.FAMED_HANDGUARD   , amount:  4 }, { item: Item.BLOODJADE_BRANCH, amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_ELEGANCE, amount:  6 }, {item: Item.FAMED_HANDGUARD   , amount:  6 }, { item: Item.BLOODJADE_BRANCH, amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_ELEGANCE, amount: 12 }, {item: Item.FAMED_HANDGUARD   , amount:  9 }, { item: Item.BLOODJADE_BRANCH, amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_ELEGANCE, amount: 16 }, {item: Item.FAMED_HANDGUARD   , amount: 12 }, { item: Item.BLOODJADE_BRANCH, amount: 2 }] 
        }}]
    }); static SAYU               = new CharacterEntity({ name: "SAYU",               rarity: 4, /* FINISHED v2 */ 
        level: { materials : {
            "20+": [{ item: Item.VAYUDA_TURQUOISE_SLIVER,   amount: 1 },                                              { item: Item.CRYSTAL_MARROW, amount:  3 }, { item: Item.WHOPPERFLOWER_NECTAR, amount:  3 }],
            "40+": [{ item: Item.VAYUDA_TURQUOISE_FRAGMENT, amount: 3 }, { item: Item.MARIONETTE_CORE, amount:  2 }, { item: Item.CRYSTAL_MARROW, amount: 10 }, { item: Item.WHOPPERFLOWER_NECTAR, amount: 15 }],
            "50+": [{ item: Item.VAYUDA_TURQUOISE_FRAGMENT, amount: 6 }, { item: Item.MARIONETTE_CORE, amount:  4 }, { item: Item.CRYSTAL_MARROW, amount: 20 }, { item: Item.SHIMMERING_NECTAR,    amount: 12 }],
            "60+": [{ item: Item.VAYUDA_TURQUOISE_CHUNK,    amount: 3 }, { item: Item.MARIONETTE_CORE, amount:  8 }, { item: Item.CRYSTAL_MARROW, amount: 30 }, { item: Item.SHIMMERING_NECTAR,    amount: 18 }],
            "70+": [{ item: Item.VAYUDA_TURQUOISE_CHUNK,    amount: 6 }, { item: Item.MARIONETTE_CORE, amount: 12 }, { item: Item.CRYSTAL_MARROW, amount: 45 }, { item: Item.ENERGY_NECTAR,        amount: 12 }],
            "80+": [{ item: Item.VAYUDA_TURQUOISE_GEMSTONE, amount: 6 }, { item: Item.MARIONETTE_CORE, amount: 20 }, { item: Item.CRYSTAL_MARROW, amount: 60 }, { item: Item.ENERGY_NECTAR,        amount: 24 }],
        }},
        elements: [{ element: Element.ANEMO, materials: {
             2: [{ item: Item.TEACHINGS_OF_LIGHT,    amount:  2}, { item: Item.WHOPPERFLOWER_NECTAR, amount:  6 }],
             3: [{ item: Item.GUIDE_TO_LIGHT,        amount:  2}, { item: Item.SHIMMERING_NECTAR   , amount:  3 }],
             4: [{ item: Item.GUIDE_TO_LIGHT,        amount:  4}, { item: Item.SHIMMERING_NECTAR   , amount:  4 }],
             5: [{ item: Item.GUIDE_TO_LIGHT,        amount:  6}, { item: Item.SHIMMERING_NECTAR   , amount:  6 }],
             6: [{ item: Item.GUIDE_TO_LIGHT,        amount:  9}, { item: Item.SHIMMERING_NECTAR   , amount:  9 }],
             7: [{ item: Item.PHILOSOPHIES_OF_LIGHT, amount:  4}, { item: Item.ENERGY_NECTAR       , amount:  4 }, { item: Item.GILDED_SCALE, amount: 1 }],
             8: [{ item: Item.PHILOSOPHIES_OF_LIGHT, amount:  6}, { item: Item.ENERGY_NECTAR       , amount:  6 }, { item: Item.GILDED_SCALE, amount: 1 }],
             9: [{ item: Item.PHILOSOPHIES_OF_LIGHT, amount: 12}, { item: Item.ENERGY_NECTAR       , amount:  9 }, { item: Item.GILDED_SCALE, amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_LIGHT, amount: 16}, { item: Item.ENERGY_NECTAR       , amount: 12 }, { item: Item.GILDED_SCALE, amount: 2 }]
        }}]
    }); static YOIMIYA            = new CharacterEntity({ name: "YOIMIYA",            rarity: 5, /* FINISHED v2 */ 
        level: { materials: { 
            "20+": [{ item: Item.AGNIDUS_AGATE_SLIVER,   amount: 1 },                                               { item: Item.NAKU_WEED, amount:  3 }, { item: Item.DIVINING_SCROLL,        amount:  3 }], 
            "40+": [{ item: Item.AGNIDUS_AGATE_FRAGMENT, amount: 3 }, { item: Item.SMOLDERING_PEARL, amount:  2 }, { item: Item.NAKU_WEED, amount: 10 }, { item: Item.DIVINING_SCROLL,        amount: 15 }], 
            "50+": [{ item: Item.AGNIDUS_AGATE_FRAGMENT, amount: 6 }, { item: Item.SMOLDERING_PEARL, amount:  4 }, { item: Item.NAKU_WEED, amount: 20 }, { item: Item.SEALED_SCROLL,          amount: 12 }], 
            "60+": [{ item: Item.AGNIDUS_AGATE_CHUNK,    amount: 3 }, { item: Item.SMOLDERING_PEARL, amount:  8 }, { item: Item.NAKU_WEED, amount: 30 }, { item: Item.SEALED_SCROLL,          amount: 18 }], 
            "70+": [{ item: Item.AGNIDUS_AGATE_CHUNK,    amount: 6 }, { item: Item.SMOLDERING_PEARL, amount: 12 }, { item: Item.NAKU_WEED, amount: 45 }, { item: Item.FORBIDDEN_CURSE_SCROLL, amount: 12 }], 
            "80+": [{ item: Item.AGNIDUS_AGATE_GEMSTONE, amount: 6 }, { item: Item.SMOLDERING_PEARL, amount: 20 }, { item: Item.NAKU_WEED, amount: 60 }, { item: Item.FORBIDDEN_CURSE_SCROLL, amount: 24 }]
        }}, 
        elements: [{ element: Element.PYRO, materials: {  
            2:  [{ item: Item.TEACHINGS_OF_TRANSIENCE,    amount:  3 }, {item: Item.DIVINING_SCROLL,        amount:  6 }],                                             
            3:  [{ item: Item.GUIDE_TO_TRANSIENCE,        amount:  2 }, {item: Item.SEALED_SCROLL,          amount:  3 }],                                             
            4:  [{ item: Item.GUIDE_TO_TRANSIENCE,        amount:  4 }, {item: Item.SEALED_SCROLL,          amount:  4 }],                                             
            5:  [{ item: Item.GUIDE_TO_TRANSIENCE,        amount:  6 }, {item: Item.SEALED_SCROLL,          amount:  6 }],                                             
            6:  [{ item: Item.GUIDE_TO_TRANSIENCE,        amount:  9 }, {item: Item.SEALED_SCROLL,          amount:  9 }],                                             
            7:  [{ item: Item.PHILOSOPHIES_OF_TRANSIENCE, amount:  4 }, {item: Item.FORBIDDEN_CURSE_SCROLL, amount:  4 }, { item: Item["DRAGON_LORD'S_CROWN"], amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_TRANSIENCE, amount:  6 }, {item: Item.FORBIDDEN_CURSE_SCROLL, amount:  6 }, { item: Item["DRAGON_LORD'S_CROWN"], amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_TRANSIENCE, amount: 12 }, {item: Item.FORBIDDEN_CURSE_SCROLL, amount:  9 }, { item: Item["DRAGON_LORD'S_CROWN"], amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_TRANSIENCE, amount: 16 }, {item: Item.FORBIDDEN_CURSE_SCROLL, amount: 12 }, { item: Item["DRAGON_LORD'S_CROWN"], amount: 2 }] 
        }}]
    }); static ALOY               = new CharacterEntity({ name: "ALOY",               rarity: 5, /* FINISHED v2 */ 
        level: { materials: { 
            "20+": [{ item: Item.SHIVADA_JADE_SLIVER,   amount: 1 },                                                { item: Item.CRYSTAL_MARROW, amount:  3 }, { item: Item.SPECTRAL_HUSK   , amount:  3 }], 
            "40+": [{ item: Item.SHIVADA_JADE_FRAGMENT, amount: 3 }, { item: Item.CRYSTALLINE_BLOOM, amount:  2 }, { item: Item.CRYSTAL_MARROW, amount: 10 }, { item: Item.SPECTRAL_HUSK   , amount: 15 }], 
            "50+": [{ item: Item.SHIVADA_JADE_FRAGMENT, amount: 6 }, { item: Item.CRYSTALLINE_BLOOM, amount:  4 }, { item: Item.CRYSTAL_MARROW, amount: 20 }, { item: Item.SPECTRAL_HEART  , amount: 12 }], 
            "60+": [{ item: Item.SHIVADA_JADE_CHUNK,    amount: 3 }, { item: Item.CRYSTALLINE_BLOOM, amount:  8 }, { item: Item.CRYSTAL_MARROW, amount: 30 }, { item: Item.SPECTRAL_HEART  , amount: 18 }], 
            "70+": [{ item: Item.SHIVADA_JADE_CHUNK,    amount: 6 }, { item: Item.CRYSTALLINE_BLOOM, amount: 12 }, { item: Item.CRYSTAL_MARROW, amount: 45 }, { item: Item.SPECTRAL_NUCLEUS, amount: 12 }], 
            "80+": [{ item: Item.SHIVADA_JADE_GEMSTONE, amount: 6 }, { item: Item.CRYSTALLINE_BLOOM, amount: 20 }, { item: Item.CRYSTAL_MARROW, amount: 60 }, { item: Item.SPECTRAL_NUCLEUS, amount: 24 }]
        }}, 
        elements: [{ element: Element.CRYO, materials: { 
            2:  [{ item: Item.TEACHINGS_OF_FREEDOM,    amount:  3 }, {item: Item.SPECTRAL_HUSK   , amount:  6 }],                                             
            3:  [{ item: Item.GUIDE_TO_FREEDOM,        amount:  2 }, {item: Item.SPECTRAL_HEART  , amount:  3 }],                                             
            4:  [{ item: Item.GUIDE_TO_FREEDOM,        amount:  4 }, {item: Item.SPECTRAL_HEART  , amount:  4 }],                                             
            5:  [{ item: Item.GUIDE_TO_FREEDOM,        amount:  6 }, {item: Item.SPECTRAL_HEART  , amount:  6 }],                                             
            6:  [{ item: Item.GUIDE_TO_FREEDOM,        amount:  9 }, {item: Item.SPECTRAL_HEART  , amount:  9 }],                                             
            7:  [{ item: Item.PHILOSOPHIES_OF_FREEDOM, amount:  4 }, {item: Item.SPECTRAL_NUCLEUS, amount:  4 }, { item: Item.MOLTEN_MOMENT, amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_FREEDOM, amount:  6 }, {item: Item.SPECTRAL_NUCLEUS, amount:  6 }, { item: Item.MOLTEN_MOMENT, amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_FREEDOM, amount: 12 }, {item: Item.SPECTRAL_NUCLEUS, amount:  9 }, { item: Item.MOLTEN_MOMENT, amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_FREEDOM, amount: 16 }, {item: Item.SPECTRAL_NUCLEUS, amount: 12 }, { item: Item.MOLTEN_MOMENT, amount: 2 }] 
        }}]
    }); static KUJOU_SARA         = new CharacterEntity({ name: "KUJOU_SARA",         rarity: 4, /* FINISHED v2 */ 
        level: { materials: { 
            "20+": [{ item: Item.VAJRADA_AMETHYST_SLIVER,   amount: 1 },                                          { item: Item.DENDROBIUM, amount:  3 }, { item: Item.DAMAGED_MASK, amount:  3 }], 
            "40+": [{ item: Item.VAJRADA_AMETHYST_FRAGMENT, amount: 3 }, { item: Item.STORM_BEADS, amount:  2 }, { item: Item.DENDROBIUM, amount: 10 }, { item: Item.DAMAGED_MASK, amount: 15 }], 
            "50+": [{ item: Item.VAJRADA_AMETHYST_FRAGMENT, amount: 6 }, { item: Item.STORM_BEADS, amount:  4 }, { item: Item.DENDROBIUM, amount: 20 }, { item: Item.STAINED_MASK, amount: 12 }], 
            "60+": [{ item: Item.VAJRADA_AMETHYST_CHUNK,    amount: 3 }, { item: Item.STORM_BEADS, amount:  8 }, { item: Item.DENDROBIUM, amount: 30 }, { item: Item.STAINED_MASK, amount: 18 }], 
            "70+": [{ item: Item.VAJRADA_AMETHYST_CHUNK,    amount: 6 }, { item: Item.STORM_BEADS, amount: 12 }, { item: Item.DENDROBIUM, amount: 45 }, { item: Item.OMINOUS_MASK, amount: 12 }], 
            "80+": [{ item: Item.VAJRADA_AMETHYST_GEMSTONE, amount: 6 }, { item: Item.STORM_BEADS, amount: 20 }, { item: Item.DENDROBIUM, amount: 60 }, { item: Item.OMINOUS_MASK, amount: 24 }]
        }}, 
        elements: [{ element: Element.ELECTRO, materials: {  
            2:  [{ item: Item.TEACHINGS_OF_ELEGANCE,    amount:  3 }, {item: Item.DAMAGED_MASK, amount:  6 }],                                             
            3:  [{ item: Item.GUIDE_TO_ELEGANCE,        amount:  2 }, {item: Item.STAINED_MASK, amount:  3 }],                                             
            4:  [{ item: Item.GUIDE_TO_ELEGANCE,        amount:  4 }, {item: Item.STAINED_MASK, amount:  4 }],                                             
            5:  [{ item: Item.GUIDE_TO_ELEGANCE,        amount:  6 }, {item: Item.STAINED_MASK, amount:  6 }],                                             
            6:  [{ item: Item.GUIDE_TO_ELEGANCE,        amount:  9 }, {item: Item.STAINED_MASK, amount:  9 }],                                             
            7:  [{ item: Item.PHILOSOPHIES_OF_ELEGANCE, amount:  4 }, {item: Item.OMINOUS_MASK, amount:  4 }, { item: Item.ASHEN_HEART, amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_ELEGANCE, amount:  6 }, {item: Item.OMINOUS_MASK, amount:  6 }, { item: Item.ASHEN_HEART, amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_ELEGANCE, amount: 12 }, {item: Item.OMINOUS_MASK, amount:  9 }, { item: Item.ASHEN_HEART, amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_ELEGANCE, amount: 16 }, {item: Item.OMINOUS_MASK, amount: 12 }, { item: Item.ASHEN_HEART, amount: 2 }] 
        }}]
    }); static RAIDEN_SHOGUN      = new CharacterEntity({ name: "RAIDEN_SHOGUN",      rarity: 5, /* FINISHED v2 */ 
        level: { materials: { 
            "20+": [{ item: Item.VAJRADA_AMETHYST_SLIVER,   amount: 1 },                                          { item: Item.AMAKUMO_FRUIT, amount:  3 }, { item: Item.OLD_HANDGUARD     , amount:  3 }], 
            "40+": [{ item: Item.VAJRADA_AMETHYST_FRAGMENT, amount: 3 }, { item: Item.STORM_BEADS, amount:  2 }, { item: Item.AMAKUMO_FRUIT, amount: 10 }, { item: Item.OLD_HANDGUARD     , amount: 15 }], 
            "50+": [{ item: Item.VAJRADA_AMETHYST_FRAGMENT, amount: 6 }, { item: Item.STORM_BEADS, amount:  4 }, { item: Item.AMAKUMO_FRUIT, amount: 20 }, { item: Item.KAGEUCHI_HANDGUARD, amount: 12 }], 
            "60+": [{ item: Item.VAJRADA_AMETHYST_CHUNK,    amount: 3 }, { item: Item.STORM_BEADS, amount:  8 }, { item: Item.AMAKUMO_FRUIT, amount: 30 }, { item: Item.KAGEUCHI_HANDGUARD, amount: 18 }], 
            "70+": [{ item: Item.VAJRADA_AMETHYST_CHUNK,    amount: 6 }, { item: Item.STORM_BEADS, amount: 12 }, { item: Item.AMAKUMO_FRUIT, amount: 45 }, { item: Item.FAMED_HANDGUARD   , amount: 12 }], 
            "80+": [{ item: Item.VAJRADA_AMETHYST_GEMSTONE, amount: 6 }, { item: Item.STORM_BEADS, amount: 20 }, { item: Item.AMAKUMO_FRUIT, amount: 60 }, { item: Item.FAMED_HANDGUARD   , amount: 24 }]
        }}, 
        elements: [{ element: Element.ELECTRO, materials: { 
            2:  [{ item: Item.TEACHINGS_OF_LIGHT,    amount:  3 }, {item: Item.OLD_HANDGUARD     , amount:  6 }],                                             
            3:  [{ item: Item.GUIDE_TO_LIGHT,        amount:  2 }, {item: Item.KAGEUCHI_HANDGUARD, amount:  3 }],                                             
            4:  [{ item: Item.GUIDE_TO_LIGHT,        amount:  4 }, {item: Item.KAGEUCHI_HANDGUARD, amount:  4 }],                                             
            5:  [{ item: Item.GUIDE_TO_LIGHT,        amount:  6 }, {item: Item.KAGEUCHI_HANDGUARD, amount:  6 }],                                             
            6:  [{ item: Item.GUIDE_TO_LIGHT,        amount:  9 }, {item: Item.KAGEUCHI_HANDGUARD, amount:  9 }],                                             
            7:  [{ item: Item.PHILOSOPHIES_OF_LIGHT, amount:  4 }, {item: Item.FAMED_HANDGUARD   , amount:  4 }, { item: Item.MOLTEN_MOMENT, amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_LIGHT, amount:  6 }, {item: Item.FAMED_HANDGUARD   , amount:  6 }, { item: Item.MOLTEN_MOMENT, amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_LIGHT, amount: 12 }, {item: Item.FAMED_HANDGUARD   , amount:  9 }, { item: Item.MOLTEN_MOMENT, amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_LIGHT, amount: 16 }, {item: Item.FAMED_HANDGUARD   , amount: 12 }, { item: Item.MOLTEN_MOMENT, amount: 2 }] 
        }}]
    }); static SANGONOMIYA_KOKOMI = new CharacterEntity({ name: "SANGONOMIYA_KOKOMI", rarity: 5, /* FINISHED v2 */ 
        level: { materials: { 
            "20+": [{ item: Item.VARUNADA_LAZURITE_SLIVER,   amount: 1 },                                                 { item: Item.SANGO_PEARL, amount:  3 }, { item: Item.SPECTRAL_HUSK   , amount:  3 }], 
            "40+": [{ item: Item.VARUNADA_LAZURITE_FRAGMENT, amount: 3 }, { item: Item.DEW_OF_REPUDIATION, amount:  2 }, { item: Item.SANGO_PEARL, amount: 10 }, { item: Item.SPECTRAL_HUSK   , amount: 15 }], 
            "50+": [{ item: Item.VARUNADA_LAZURITE_FRAGMENT, amount: 6 }, { item: Item.DEW_OF_REPUDIATION, amount:  4 }, { item: Item.SANGO_PEARL, amount: 20 }, { item: Item.SPECTRAL_HEART  , amount: 12 }], 
            "60+": [{ item: Item.VARUNADA_LAZURITE_CHUNK,    amount: 3 }, { item: Item.DEW_OF_REPUDIATION, amount:  8 }, { item: Item.SANGO_PEARL, amount: 30 }, { item: Item.SPECTRAL_HEART  , amount: 18 }], 
            "70+": [{ item: Item.VARUNADA_LAZURITE_CHUNK,    amount: 6 }, { item: Item.DEW_OF_REPUDIATION, amount: 12 }, { item: Item.SANGO_PEARL, amount: 45 }, { item: Item.SPECTRAL_NUCLEUS, amount: 12 }], 
            "80+": [{ item: Item.VARUNADA_LAZURITE_GEMSTONE, amount: 6 }, { item: Item.DEW_OF_REPUDIATION, amount: 20 }, { item: Item.SANGO_PEARL, amount: 60 }, { item: Item.SPECTRAL_NUCLEUS, amount: 24 }]
        }}, 
        elements: [{ element: Element.HYDRO, materials: { 
            2:  [{ item: Item.TEACHINGS_OF_TRANSIENCE,    amount:  3 }, {item: Item.SPECTRAL_HUSK   , amount:  6 }],                                             
            3:  [{ item: Item.GUIDE_TO_TRANSIENCE,        amount:  2 }, {item: Item.SPECTRAL_HEART  , amount:  3 }],                                             
            4:  [{ item: Item.GUIDE_TO_TRANSIENCE,        amount:  4 }, {item: Item.SPECTRAL_HEART  , amount:  4 }],                                             
            5:  [{ item: Item.GUIDE_TO_TRANSIENCE,        amount:  6 }, {item: Item.SPECTRAL_HEART  , amount:  6 }],                                             
            6:  [{ item: Item.GUIDE_TO_TRANSIENCE,        amount:  9 }, {item: Item.SPECTRAL_HEART  , amount:  9 }],                                             
            7:  [{ item: Item.PHILOSOPHIES_OF_TRANSIENCE, amount:  4 }, {item: Item.SPECTRAL_NUCLEUS, amount:  4 }, { item: Item.HELLFIRE_BUTTERFLY, amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_TRANSIENCE, amount:  6 }, {item: Item.SPECTRAL_NUCLEUS, amount:  6 }, { item: Item.HELLFIRE_BUTTERFLY, amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_TRANSIENCE, amount: 12 }, {item: Item.SPECTRAL_NUCLEUS, amount:  9 }, { item: Item.HELLFIRE_BUTTERFLY, amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_TRANSIENCE, amount: 16 }, {item: Item.SPECTRAL_NUCLEUS, amount: 12 }, { item: Item.HELLFIRE_BUTTERFLY, amount: 2 }] 
        }}]
    }); static THOMA              = new CharacterEntity({ name: "THOMA",              rarity: 4, /* FINISHED v2 */ 
        level: { materials: { 
            "20+": [{ item: Item.AGNIDUS_AGATE_SLIVER,   amount: 1 },                                              { item: Item.FLUORESCENT_FUNGUS, amount:  3 }, { item: Item.TREASURE_HOARDER_INSIGNIA, amount:  3 }], 
            "40+": [{ item: Item.AGNIDUS_AGATE_FRAGMENT, amount: 3 }, { item: Item.SMOLDERING_PEARL, amount:  2 }, { item: Item.FLUORESCENT_FUNGUS, amount: 10 }, { item: Item.TREASURE_HOARDER_INSIGNIA, amount: 15 }], 
            "50+": [{ item: Item.AGNIDUS_AGATE_FRAGMENT, amount: 6 }, { item: Item.SMOLDERING_PEARL, amount:  4 }, { item: Item.FLUORESCENT_FUNGUS, amount: 20 }, { item: Item.SILVER_RAVEN_INSIGNIA    , amount: 12 }], 
            "60+": [{ item: Item.AGNIDUS_AGATE_CHUNK,    amount: 3 }, { item: Item.SMOLDERING_PEARL, amount:  8 }, { item: Item.FLUORESCENT_FUNGUS, amount: 30 }, { item: Item.SILVER_RAVEN_INSIGNIA    , amount: 18 }], 
            "70+": [{ item: Item.AGNIDUS_AGATE_CHUNK,    amount: 6 }, { item: Item.SMOLDERING_PEARL, amount: 12 }, { item: Item.FLUORESCENT_FUNGUS, amount: 45 }, { item: Item.GOLDEN_RAVEN_INSIGNIA    , amount: 12 }], 
            "80+": [{ item: Item.AGNIDUS_AGATE_GEMSTONE, amount: 6 }, { item: Item.SMOLDERING_PEARL, amount: 20 }, { item: Item.FLUORESCENT_FUNGUS, amount: 60 }, { item: Item.GOLDEN_RAVEN_INSIGNIA    , amount: 24 }]
        }}, 
        elements: [{ element: Element.PYRO, materials: { 
            2:  [{ item: Item.TEACHINGS_OF_TRANSIENCE,    amount:  3 }, {item: Item.TREASURE_HOARDER_INSIGNIA, amount:  6 }],                                             
            3:  [{ item: Item.GUIDE_TO_TRANSIENCE,        amount:  2 }, {item: Item.SILVER_RAVEN_INSIGNIA    , amount:  3 }],                                             
            4:  [{ item: Item.GUIDE_TO_TRANSIENCE,        amount:  4 }, {item: Item.SILVER_RAVEN_INSIGNIA    , amount:  4 }],                                             
            5:  [{ item: Item.GUIDE_TO_TRANSIENCE,        amount:  6 }, {item: Item.SILVER_RAVEN_INSIGNIA    , amount:  6 }],                                             
            6:  [{ item: Item.GUIDE_TO_TRANSIENCE,        amount:  9 }, {item: Item.SILVER_RAVEN_INSIGNIA    , amount:  9 }],                                             
            7:  [{ item: Item.PHILOSOPHIES_OF_TRANSIENCE, amount:  4 }, {item: Item.GOLDEN_RAVEN_INSIGNIA    , amount:  4 }, { item: Item.HELLFIRE_BUTTERFLY, amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_TRANSIENCE, amount:  6 }, {item: Item.GOLDEN_RAVEN_INSIGNIA    , amount:  6 }, { item: Item.HELLFIRE_BUTTERFLY, amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_TRANSIENCE, amount: 12 }, {item: Item.GOLDEN_RAVEN_INSIGNIA    , amount:  9 }, { item: Item.HELLFIRE_BUTTERFLY, amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_TRANSIENCE, amount: 16 }, {item: Item.GOLDEN_RAVEN_INSIGNIA    , amount: 12 }, { item: Item.HELLFIRE_BUTTERFLY, amount: 2 }] 
        }}]
    }); static GOROU              = new CharacterEntity({ name: "GOROU",              rarity: 4, /* FINISHED v2 */ 
        level: { materials: { 
            "20+": [{ item: Item.PRITHIVA_TOPAZ_SLIVER,   amount: 1 },                                              { item: Item.SANGO_PEARL, amount:  3 }, { item: Item.SPECTRAL_HUSK   , amount:  3 }], 
            "40+": [{ item: Item.PRITHIVA_TOPAZ_FRAGMENT, amount: 3 }, { item: Item.PERPETUAL_HEART, amount:  2 }, { item: Item.SANGO_PEARL, amount: 10 }, { item: Item.SPECTRAL_HUSK   , amount: 15 }], 
            "50+": [{ item: Item.PRITHIVA_TOPAZ_FRAGMENT, amount: 6 }, { item: Item.PERPETUAL_HEART, amount:  4 }, { item: Item.SANGO_PEARL, amount: 20 }, { item: Item.SPECTRAL_HEART  , amount: 12 }], 
            "60+": [{ item: Item.PRITHIVA_TOPAZ_CHUNK,    amount: 3 }, { item: Item.PERPETUAL_HEART, amount:  8 }, { item: Item.SANGO_PEARL, amount: 30 }, { item: Item.SPECTRAL_HEART  , amount: 18 }], 
            "70+": [{ item: Item.PRITHIVA_TOPAZ_CHUNK,    amount: 6 }, { item: Item.PERPETUAL_HEART, amount: 12 }, { item: Item.SANGO_PEARL, amount: 45 }, { item: Item.SPECTRAL_NUCLEUS, amount: 12 }], 
            "80+": [{ item: Item.PRITHIVA_TOPAZ_GEMSTONE, amount: 6 }, { item: Item.PERPETUAL_HEART, amount: 20 }, { item: Item.SANGO_PEARL, amount: 60 }, { item: Item.SPECTRAL_NUCLEUS, amount: 24 }]
        }}, 
        elements: [{ element: Element.GEO, materials: { 
            2:  [{ item: Item.TEACHINGS_OF_LIGHT,    amount:  3 }, {item: Item.SPECTRAL_HUSK   , amount:  6 }],                                             
            3:  [{ item: Item.GUIDE_TO_LIGHT,        amount:  2 }, {item: Item.SPECTRAL_HEART  , amount:  3 }],                                             
            4:  [{ item: Item.GUIDE_TO_LIGHT,        amount:  4 }, {item: Item.SPECTRAL_HEART  , amount:  4 }],                                             
            5:  [{ item: Item.GUIDE_TO_LIGHT,        amount:  6 }, {item: Item.SPECTRAL_HEART  , amount:  6 }],                                             
            6:  [{ item: Item.GUIDE_TO_LIGHT,        amount:  9 }, {item: Item.SPECTRAL_HEART  , amount:  9 }],                                             
            7:  [{ item: Item.PHILOSOPHIES_OF_LIGHT, amount:  4 }, {item: Item.SPECTRAL_NUCLEUS, amount:  4 }, { item: Item.MOLTEN_MOMENT, amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_LIGHT, amount:  6 }, {item: Item.SPECTRAL_NUCLEUS, amount:  6 }, { item: Item.MOLTEN_MOMENT, amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_LIGHT, amount: 12 }, {item: Item.SPECTRAL_NUCLEUS, amount:  9 }, { item: Item.MOLTEN_MOMENT, amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_LIGHT, amount: 16 }, {item: Item.SPECTRAL_NUCLEUS, amount: 12 }, { item: Item.MOLTEN_MOMENT, amount: 2 }] 
        }}]
    }); static ARATAKI_ITTO       = new CharacterEntity({ name: "ARATAKI_ITTO",       rarity: 5, /* FINISHED v2 */ 
        level: { materials: { 
            "20+": [{ item: Item.PRITHIVA_TOPAZ_SLIVER,   amount: 1 },                                               { item: Item.ONIKABUTO, amount:  3 }, { item: Item.SLIME_CONDENSATE,  amount:  3 }], 
            "40+": [{ item: Item.PRITHIVA_TOPAZ_FRAGMENT, amount: 3 }, { item: Item.RIFTBORN_REGALIA, amount:  2 }, { item: Item.ONIKABUTO, amount: 10 }, { item: Item.SLIME_CONDENSATE,  amount: 15 }], 
            "50+": [{ item: Item.PRITHIVA_TOPAZ_FRAGMENT, amount: 6 }, { item: Item.RIFTBORN_REGALIA, amount:  4 }, { item: Item.ONIKABUTO, amount: 20 }, { item: Item.SLIME_SECRETIONS,  amount: 12 }], 
            "60+": [{ item: Item.PRITHIVA_TOPAZ_CHUNK,    amount: 3 }, { item: Item.RIFTBORN_REGALIA, amount:  8 }, { item: Item.ONIKABUTO, amount: 30 }, { item: Item.SLIME_SECRETIONS,  amount: 18 }], 
            "70+": [{ item: Item.PRITHIVA_TOPAZ_CHUNK,    amount: 6 }, { item: Item.RIFTBORN_REGALIA, amount: 12 }, { item: Item.ONIKABUTO, amount: 45 }, { item: Item.SLIME_CONCENTRATE, amount: 12 }], 
            "80+": [{ item: Item.PRITHIVA_TOPAZ_GEMSTONE, amount: 6 }, { item: Item.RIFTBORN_REGALIA, amount: 20 }, { item: Item.ONIKABUTO, amount: 60 }, { item: Item.SLIME_CONCENTRATE, amount: 24 }]
        }}, 
        elements: [{ element: Element.GEO, materials: {  
            2:  [{ item: Item.TEACHINGS_OF_ELEGANCE,    amount:  3 }, {item: Item.SLIME_CONDENSATE,  amount:  6 }],                                             
            3:  [{ item: Item.GUIDE_TO_ELEGANCE,        amount:  2 }, {item: Item.SLIME_SECRETIONS,  amount:  3 }],                                             
            4:  [{ item: Item.GUIDE_TO_ELEGANCE,        amount:  4 }, {item: Item.SLIME_SECRETIONS,  amount:  4 }],                                             
            5:  [{ item: Item.GUIDE_TO_ELEGANCE,        amount:  6 }, {item: Item.SLIME_SECRETIONS,  amount:  6 }],                                             
            6:  [{ item: Item.GUIDE_TO_ELEGANCE,        amount:  9 }, {item: Item.SLIME_SECRETIONS,  amount:  9 }],                                             
            7:  [{ item: Item.PHILOSOPHIES_OF_ELEGANCE, amount:  4 }, {item: Item.SLIME_CONCENTRATE, amount:  4 }, { item: Item.ASHEN_HEART, amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_ELEGANCE, amount:  6 }, {item: Item.SLIME_CONCENTRATE, amount:  6 }, { item: Item.ASHEN_HEART, amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_ELEGANCE, amount: 12 }, {item: Item.SLIME_CONCENTRATE, amount:  9 }, { item: Item.ASHEN_HEART, amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_ELEGANCE, amount: 16 }, {item: Item.SLIME_CONCENTRATE, amount: 12 }, { item: Item.ASHEN_HEART, amount: 2 }] 
        }}]
    }); static YUN_JIN            = new CharacterEntity({ name: "YUN_JIN",            rarity: 4, /* FINISHED v2 */ 
        level: { materials: { 
            "20+": [{ item: Item.PRITHIVA_TOPAZ_SLIVER,   amount: 1 },                                               { item: Item.GLAZE_LILY, amount:  3 }, { item: Item.DAMAGED_MASK, amount:  3 }], 
            "40+": [{ item: Item.PRITHIVA_TOPAZ_FRAGMENT, amount: 3 }, { item: Item.RIFTBORN_REGALIA, amount:  2 }, { item: Item.GLAZE_LILY, amount: 10 }, { item: Item.DAMAGED_MASK, amount: 15 }], 
            "50+": [{ item: Item.PRITHIVA_TOPAZ_FRAGMENT, amount: 6 }, { item: Item.RIFTBORN_REGALIA, amount:  4 }, { item: Item.GLAZE_LILY, amount: 20 }, { item: Item.STAINED_MASK, amount: 12 }], 
            "60+": [{ item: Item.PRITHIVA_TOPAZ_CHUNK,    amount: 3 }, { item: Item.RIFTBORN_REGALIA, amount:  8 }, { item: Item.GLAZE_LILY, amount: 30 }, { item: Item.STAINED_MASK, amount: 18 }], 
            "70+": [{ item: Item.PRITHIVA_TOPAZ_CHUNK,    amount: 6 }, { item: Item.RIFTBORN_REGALIA, amount: 12 }, { item: Item.GLAZE_LILY, amount: 45 }, { item: Item.OMINOUS_MASK, amount: 12 }], 
            "80+": [{ item: Item.PRITHIVA_TOPAZ_GEMSTONE, amount: 6 }, { item: Item.RIFTBORN_REGALIA, amount: 20 }, { item: Item.GLAZE_LILY, amount: 60 }, { item: Item.OMINOUS_MASK, amount: 24 }]
        }}, 
        elements: [{ element: Element.GEO, materials: {  
            2:  [{ item: Item.TEACHINGS_OF_DILIGENCE,    amount:  3 }, {item: Item.DAMAGED_MASK, amount:  6 }],                                             
            3:  [{ item: Item.GUIDE_TO_DILIGENCE,        amount:  2 }, {item: Item.STAINED_MASK, amount:  3 }],                                             
            4:  [{ item: Item.GUIDE_TO_DILIGENCE,        amount:  4 }, {item: Item.STAINED_MASK, amount:  4 }],                                             
            5:  [{ item: Item.GUIDE_TO_DILIGENCE,        amount:  6 }, {item: Item.STAINED_MASK, amount:  6 }],                                             
            6:  [{ item: Item.GUIDE_TO_DILIGENCE,        amount:  9 }, {item: Item.STAINED_MASK, amount:  9 }],                                             
            7:  [{ item: Item.PHILOSOPHIES_OF_DILIGENCE, amount:  4 }, {item: Item.OMINOUS_MASK, amount:  4 }, { item: Item.ASHEN_HEART, amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_DILIGENCE, amount:  6 }, {item: Item.OMINOUS_MASK, amount:  6 }, { item: Item.ASHEN_HEART, amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_DILIGENCE, amount: 12 }, {item: Item.OMINOUS_MASK, amount:  9 }, { item: Item.ASHEN_HEART, amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_DILIGENCE, amount: 16 }, {item: Item.OMINOUS_MASK, amount: 12 }, { item: Item.ASHEN_HEART, amount: 2 }] 
        }}]
    }); static SHENHE             = new CharacterEntity({ name: "SHENHE",             rarity: 5, /* FINISHED v2 */ 
        level: { materials: { 
            "20+": [{ item: Item.SHIVADA_JADE_SLIVER,   amount: 1 },                                                       { item: Item.QINGXIN, amount:  3 }, { item: Item.WHOPPERFLOWER_NECTAR, amount:  3 }], 
            "40+": [{ item: Item.SHIVADA_JADE_FRAGMENT, amount: 3 }, { item: Item["DRAGONHEIR'S_FALSE_FIN"], amount:  2 }, { item: Item.QINGXIN, amount: 10 }, { item: Item.WHOPPERFLOWER_NECTAR, amount: 15 }], 
            "50+": [{ item: Item.SHIVADA_JADE_FRAGMENT, amount: 6 }, { item: Item["DRAGONHEIR'S_FALSE_FIN"], amount:  4 }, { item: Item.QINGXIN, amount: 20 }, { item: Item.SHIMMERING_NECTAR   , amount: 12 }], 
            "60+": [{ item: Item.SHIVADA_JADE_CHUNK,    amount: 3 }, { item: Item["DRAGONHEIR'S_FALSE_FIN"], amount:  8 }, { item: Item.QINGXIN, amount: 30 }, { item: Item.SHIMMERING_NECTAR   , amount: 18 }], 
            "70+": [{ item: Item.SHIVADA_JADE_CHUNK,    amount: 6 }, { item: Item["DRAGONHEIR'S_FALSE_FIN"], amount: 12 }, { item: Item.QINGXIN, amount: 45 }, { item: Item.ENERGY_NECTAR       , amount: 12 }], 
            "80+": [{ item: Item.SHIVADA_JADE_GEMSTONE, amount: 6 }, { item: Item["DRAGONHEIR'S_FALSE_FIN"], amount: 20 }, { item: Item.QINGXIN, amount: 60 }, { item: Item.ENERGY_NECTAR       , amount: 24 }]
        }}, 
        elements: [{ element: Element.CRYO, materials: { 
            2:  [{ item: Item.TEACHINGS_OF_PROSPERITY   , amount:  3 }, {item: Item.WHOPPERFLOWER_NECTAR, amount:  6 }],                                             
            3:  [{ item: Item.GUIDE_TO_PROSPERITY       , amount:  2 }, {item: Item.SHIMMERING_NECTAR   , amount:  3 }],                                             
            4:  [{ item: Item.GUIDE_TO_PROSPERITY       , amount:  4 }, {item: Item.SHIMMERING_NECTAR   , amount:  4 }],                                             
            5:  [{ item: Item.GUIDE_TO_PROSPERITY       , amount:  6 }, {item: Item.SHIMMERING_NECTAR   , amount:  6 }],                                             
            6:  [{ item: Item.GUIDE_TO_PROSPERITY       , amount:  9 }, {item: Item.SHIMMERING_NECTAR   , amount:  9 }],                                             
            7:  [{ item: Item.PHILOSOPHIES_OF_PROSPERITY, amount:  4 }, {item: Item.ENERGY_NECTAR       , amount:  4 }, { item: Item.HELLFIRE_BUTTERFLY, amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_PROSPERITY, amount:  6 }, {item: Item.ENERGY_NECTAR       , amount:  6 }, { item: Item.HELLFIRE_BUTTERFLY, amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_PROSPERITY, amount: 12 }, {item: Item.ENERGY_NECTAR       , amount:  9 }, { item: Item.HELLFIRE_BUTTERFLY, amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_PROSPERITY, amount: 16 }, {item: Item.ENERGY_NECTAR       , amount: 12 }, { item: Item.HELLFIRE_BUTTERFLY, amount: 2 }] 
        }}]
    }); static YAE_MIKO           = new CharacterEntity({ name: "YAE_MIKO",           rarity: 5, /* FINISHED v2 */ 
        level: { materials: { 
            "20+": [{ item: Item.VAJRADA_AMETHYST_SLIVER,   amount: 1 },                                                        { item: Item.SEA_GANODERMA, amount:  3 }, { item: Item.OLD_HANDGUARD     , amount:  3 }], 
            "40+": [{ item: Item.VAJRADA_AMETHYST_FRAGMENT, amount: 3 }, { item: Item["DRAGONHEIR'S_FALSE_FIN"], amount:  2 }, { item: Item.SEA_GANODERMA, amount: 10 }, { item: Item.OLD_HANDGUARD     , amount: 15 }], 
            "50+": [{ item: Item.VAJRADA_AMETHYST_FRAGMENT, amount: 6 }, { item: Item["DRAGONHEIR'S_FALSE_FIN"], amount:  4 }, { item: Item.SEA_GANODERMA, amount: 20 }, { item: Item.KAGEUCHI_HANDGUARD, amount: 12 }], 
            "60+": [{ item: Item.VAJRADA_AMETHYST_CHUNK,    amount: 3 }, { item: Item["DRAGONHEIR'S_FALSE_FIN"], amount:  8 }, { item: Item.SEA_GANODERMA, amount: 30 }, { item: Item.KAGEUCHI_HANDGUARD, amount: 18 }], 
            "70+": [{ item: Item.VAJRADA_AMETHYST_CHUNK,    amount: 6 }, { item: Item["DRAGONHEIR'S_FALSE_FIN"], amount: 12 }, { item: Item.SEA_GANODERMA, amount: 45 }, { item: Item.FAMED_HANDGUARD   , amount: 12 }], 
            "80+": [{ item: Item.VAJRADA_AMETHYST_GEMSTONE, amount: 6 }, { item: Item["DRAGONHEIR'S_FALSE_FIN"], amount: 20 }, { item: Item.SEA_GANODERMA, amount: 60 }, { item: Item.FAMED_HANDGUARD   , amount: 24 }]
        }}, 
        elements: [{ element: Element.ELECTRO, materials: { 
            2:  [{ item: Item.TEACHINGS_OF_LIGHT,    amount:  3 }, {item: Item.OLD_HANDGUARD     , amount:  6 }],                                             
            3:  [{ item: Item.GUIDE_TO_LIGHT,        amount:  2 }, {item: Item.KAGEUCHI_HANDGUARD, amount:  3 }],                                             
            4:  [{ item: Item.GUIDE_TO_LIGHT,        amount:  4 }, {item: Item.KAGEUCHI_HANDGUARD, amount:  4 }],                                             
            5:  [{ item: Item.GUIDE_TO_LIGHT,        amount:  6 }, {item: Item.KAGEUCHI_HANDGUARD, amount:  6 }],                                             
            6:  [{ item: Item.GUIDE_TO_LIGHT,        amount:  9 }, {item: Item.KAGEUCHI_HANDGUARD, amount:  9 }],                                             
            7:  [{ item: Item.PHILOSOPHIES_OF_LIGHT, amount:  4 }, {item: Item.FAMED_HANDGUARD   , amount:  4 }, { item: Item.THE_MEANING_OF_AEONS, amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_LIGHT, amount:  6 }, {item: Item.FAMED_HANDGUARD   , amount:  6 }, { item: Item.THE_MEANING_OF_AEONS, amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_LIGHT, amount: 12 }, {item: Item.FAMED_HANDGUARD   , amount:  9 }, { item: Item.THE_MEANING_OF_AEONS, amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_LIGHT, amount: 16 }, {item: Item.FAMED_HANDGUARD   , amount: 12 }, { item: Item.THE_MEANING_OF_AEONS, amount: 2 }] 
        }}]
    }); static KAMISATO_AYATO     = new CharacterEntity({ name: "KAMISATO_AYATO",     rarity: 5, /* FINISHED v2 */ 
        level: { materials: { 
            "20+": [{ item: Item.VARUNADA_LAZURITE_SLIVER,   amount: 1 },                                                 { item: Item.SAKURA_BLOOM, amount:  3 }, { item: Item.OLD_HANDGUARD     , amount:  3 }], 
            "40+": [{ item: Item.VARUNADA_LAZURITE_FRAGMENT, amount: 3 }, { item: Item.DEW_OF_REPUDIATION, amount:  2 }, { item: Item.SAKURA_BLOOM, amount: 10 }, { item: Item.OLD_HANDGUARD     , amount: 15 }], 
            "50+": [{ item: Item.VARUNADA_LAZURITE_FRAGMENT, amount: 6 }, { item: Item.DEW_OF_REPUDIATION, amount:  4 }, { item: Item.SAKURA_BLOOM, amount: 20 }, { item: Item.KAGEUCHI_HANDGUARD, amount: 12 }], 
            "60+": [{ item: Item.VARUNADA_LAZURITE_CHUNK,    amount: 3 }, { item: Item.DEW_OF_REPUDIATION, amount:  8 }, { item: Item.SAKURA_BLOOM, amount: 30 }, { item: Item.KAGEUCHI_HANDGUARD, amount: 18 }], 
            "70+": [{ item: Item.VARUNADA_LAZURITE_CHUNK,    amount: 6 }, { item: Item.DEW_OF_REPUDIATION, amount: 12 }, { item: Item.SAKURA_BLOOM, amount: 45 }, { item: Item.FAMED_HANDGUARD   , amount: 12 }], 
            "80+": [{ item: Item.VARUNADA_LAZURITE_GEMSTONE, amount: 6 }, { item: Item.DEW_OF_REPUDIATION, amount: 20 }, { item: Item.SAKURA_BLOOM, amount: 60 }, { item: Item.FAMED_HANDGUARD   , amount: 24 }]
        }}, 
        elements: [{ element: Element.HYDRO, materials: { 
            2:  [{ item: Item.TEACHINGS_OF_ELEGANCE,    amount:  3 }, {item: Item.OLD_HANDGUARD     , amount:  6 }],                                             
            3:  [{ item: Item.GUIDE_TO_ELEGANCE,        amount:  2 }, {item: Item.KAGEUCHI_HANDGUARD, amount:  3 }],                                             
            4:  [{ item: Item.GUIDE_TO_ELEGANCE,        amount:  4 }, {item: Item.KAGEUCHI_HANDGUARD, amount:  4 }],                                             
            5:  [{ item: Item.GUIDE_TO_ELEGANCE,        amount:  6 }, {item: Item.KAGEUCHI_HANDGUARD, amount:  6 }],                                             
            6:  [{ item: Item.GUIDE_TO_ELEGANCE,        amount:  9 }, {item: Item.KAGEUCHI_HANDGUARD, amount:  9 }],                                             
            7:  [{ item: Item.PHILOSOPHIES_OF_ELEGANCE, amount:  4 }, {item: Item.FAMED_HANDGUARD   , amount:  4 }, { item: Item.MUDRA_OF_THE_MALEFIC_GENERAL, amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_ELEGANCE, amount:  6 }, {item: Item.FAMED_HANDGUARD   , amount:  6 }, { item: Item.MUDRA_OF_THE_MALEFIC_GENERAL, amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_ELEGANCE, amount: 12 }, {item: Item.FAMED_HANDGUARD   , amount:  9 }, { item: Item.MUDRA_OF_THE_MALEFIC_GENERAL, amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_ELEGANCE, amount: 16 }, {item: Item.FAMED_HANDGUARD   , amount: 12 }, { item: Item.MUDRA_OF_THE_MALEFIC_GENERAL, amount: 2 }] 
        }}]
    }); static YELAN              = new CharacterEntity({ name: "YELAN",              rarity: 5, /* FINISHED v2 */ 
        level: { materials: { 
            "20+": [{ item: Item.VARUNADA_LAZURITE_SLIVER,   amount: 1 },                                         { item: Item.STARCONCH, amount:  3 }, { item: Item["RECRUIT'S_INSIGNIA"]   , amount:  3 }], 
            "40+": [{ item: Item.VARUNADA_LAZURITE_FRAGMENT, amount: 3 }, { item: Item.RUNIC_FANG, amount:  2 }, { item: Item.STARCONCH, amount: 10 }, { item: Item["RECRUIT'S_INSIGNIA"]   , amount: 15 }], 
            "50+": [{ item: Item.VARUNADA_LAZURITE_FRAGMENT, amount: 6 }, { item: Item.RUNIC_FANG, amount:  4 }, { item: Item.STARCONCH, amount: 20 }, { item: Item["SERGEANT'S_INSIGNIA"]  , amount: 12 }], 
            "60+": [{ item: Item.VARUNADA_LAZURITE_CHUNK,    amount: 3 }, { item: Item.RUNIC_FANG, amount:  8 }, { item: Item.STARCONCH, amount: 30 }, { item: Item["SERGEANT'S_INSIGNIA"]  , amount: 18 }], 
            "70+": [{ item: Item.VARUNADA_LAZURITE_CHUNK,    amount: 6 }, { item: Item.RUNIC_FANG, amount: 12 }, { item: Item.STARCONCH, amount: 45 }, { item: Item["LIEUTENANT'S_INSIGNIA"], amount: 12 }], 
            "80+": [{ item: Item.VARUNADA_LAZURITE_GEMSTONE, amount: 6 }, { item: Item.RUNIC_FANG, amount: 20 }, { item: Item.STARCONCH, amount: 60 }, { item: Item["LIEUTENANT'S_INSIGNIA"], amount: 24 }]
        }}, 
        elements: [{ element: Element.HYDRO, materials: {  
            2:  [{ item: Item.TEACHINGS_OF_PROSPERITY,    amount:  3 }, {item: Item["RECRUIT'S_INSIGNIA"]   , amount:  6 }],                                             
            3:  [{ item: Item.GUIDE_TO_PROSPERITY,        amount:  2 }, {item: Item["SERGEANT'S_INSIGNIA"]  , amount:  3 }],                                             
            4:  [{ item: Item.GUIDE_TO_PROSPERITY,        amount:  4 }, {item: Item["SERGEANT'S_INSIGNIA"]  , amount:  4 }],                                             
            5:  [{ item: Item.GUIDE_TO_PROSPERITY,        amount:  6 }, {item: Item["SERGEANT'S_INSIGNIA"]  , amount:  6 }],                                             
            6:  [{ item: Item.GUIDE_TO_PROSPERITY,        amount:  9 }, {item: Item["SERGEANT'S_INSIGNIA"]  , amount:  9 }],                                             
            7:  [{ item: Item.PHILOSOPHIES_OF_PROSPERITY, amount:  4 }, {item: Item["LIEUTENANT'S_INSIGNIA"], amount:  4 }, { item: Item.GILDED_SCALE, amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_PROSPERITY, amount:  6 }, {item: Item["LIEUTENANT'S_INSIGNIA"], amount:  6 }, { item: Item.GILDED_SCALE, amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_PROSPERITY, amount: 12 }, {item: Item["LIEUTENANT'S_INSIGNIA"], amount:  9 }, { item: Item.GILDED_SCALE, amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_PROSPERITY, amount: 16 }, {item: Item["LIEUTENANT'S_INSIGNIA"], amount: 12 }, { item: Item.GILDED_SCALE, amount: 2 }] 
        }}]
    }); static KUKI_SHINOBU       = new CharacterEntity({ name: "KUKI_SHINOBU",       rarity: 4, /* FINISHED v2 */ 
        level: { materials: { 
            "20+": [{ item: Item.VAJRADA_AMETHYST_SLIVER,   amount: 1 },                                         { item: Item.NAKU_WEED, amount:  3 }, { item: Item.SPECTRAL_HUSK   , amount:  3 }], 
            "40+": [{ item: Item.VAJRADA_AMETHYST_FRAGMENT, amount: 3 }, { item: Item.RUNIC_FANG, amount:  2 }, { item: Item.NAKU_WEED, amount: 10 }, { item: Item.SPECTRAL_HUSK   , amount: 15 }], 
            "50+": [{ item: Item.VAJRADA_AMETHYST_FRAGMENT, amount: 6 }, { item: Item.RUNIC_FANG, amount:  4 }, { item: Item.NAKU_WEED, amount: 20 }, { item: Item.SPECTRAL_HEART  , amount: 12 }], 
            "60+": [{ item: Item.VAJRADA_AMETHYST_CHUNK,    amount: 3 }, { item: Item.RUNIC_FANG, amount:  8 }, { item: Item.NAKU_WEED, amount: 30 }, { item: Item.SPECTRAL_HEART  , amount: 18 }], 
            "70+": [{ item: Item.VAJRADA_AMETHYST_CHUNK,    amount: 6 }, { item: Item.RUNIC_FANG, amount: 12 }, { item: Item.NAKU_WEED, amount: 45 }, { item: Item.SPECTRAL_NUCLEUS, amount: 12 }], 
            "80+": [{ item: Item.VAJRADA_AMETHYST_GEMSTONE, amount: 6 }, { item: Item.RUNIC_FANG, amount: 20 }, { item: Item.NAKU_WEED, amount: 60 }, { item: Item.SPECTRAL_NUCLEUS, amount: 24 }]
        }}, 
        elements: [ { element: Element.ELECTRO, materials: {  
            2:  [{ item: Item.TEACHINGS_OF_ELEGANCE,    amount:  3 }, {item: Item.SPECTRAL_HUSK   , amount:  6 }],                                             
            3:  [{ item: Item.GUIDE_TO_ELEGANCE,        amount:  2 }, {item: Item.SPECTRAL_HEART  , amount:  3 }],                                             
            4:  [{ item: Item.GUIDE_TO_ELEGANCE,        amount:  4 }, {item: Item.SPECTRAL_HEART  , amount:  4 }],                                             
            5:  [{ item: Item.GUIDE_TO_ELEGANCE,        amount:  6 }, {item: Item.SPECTRAL_HEART  , amount:  6 }],                                             
            6:  [{ item: Item.GUIDE_TO_ELEGANCE,        amount:  9 }, {item: Item.SPECTRAL_HEART  , amount:  9 }],                                             
            7:  [{ item: Item.PHILOSOPHIES_OF_ELEGANCE, amount:  4 }, {item: Item.SPECTRAL_NUCLEUS, amount:  4 }, { item: Item.TEARS_OF_THE_CALAMITOUS_GOD, amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_ELEGANCE, amount:  6 }, {item: Item.SPECTRAL_NUCLEUS, amount:  6 }, { item: Item.TEARS_OF_THE_CALAMITOUS_GOD, amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_ELEGANCE, amount: 12 }, {item: Item.SPECTRAL_NUCLEUS, amount:  9 }, { item: Item.TEARS_OF_THE_CALAMITOUS_GOD, amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_ELEGANCE, amount: 16 }, {item: Item.SPECTRAL_NUCLEUS, amount: 12 }, { item: Item.TEARS_OF_THE_CALAMITOUS_GOD, amount: 2 }] 
        }}]
    }); static SHIKANOIN_HEIZOU   = new CharacterEntity({ name: "SHIKANOIN_HEIZOU",   rarity: 4, /* FINISHED v2 */ 
        level: { materials: { 
            "20+": [{ item: Item.VAYUDA_TURQUOISE_SLIVER,   amount: 1 },                                         { item: Item.ONIKABUTO, amount:  3 }, { item: Item.TREASURE_HOARDER_INSIGNIA, amount:  3 }], 
            "40+": [{ item: Item.VAYUDA_TURQUOISE_FRAGMENT, amount: 3 }, { item: Item.RUNIC_FANG, amount:  2 }, { item: Item.ONIKABUTO, amount: 10 }, { item: Item.TREASURE_HOARDER_INSIGNIA, amount: 15 }], 
            "50+": [{ item: Item.VAYUDA_TURQUOISE_FRAGMENT, amount: 6 }, { item: Item.RUNIC_FANG, amount:  4 }, { item: Item.ONIKABUTO, amount: 20 }, { item: Item.SILVER_RAVEN_INSIGNIA    , amount: 12 }], 
            "60+": [{ item: Item.VAYUDA_TURQUOISE_CHUNK,    amount: 3 }, { item: Item.RUNIC_FANG, amount:  8 }, { item: Item.ONIKABUTO, amount: 30 }, { item: Item.SILVER_RAVEN_INSIGNIA    , amount: 18 }], 
            "70+": [{ item: Item.VAYUDA_TURQUOISE_CHUNK,    amount: 6 }, { item: Item.RUNIC_FANG, amount: 12 }, { item: Item.ONIKABUTO, amount: 45 }, { item: Item.GOLDEN_RAVEN_INSIGNIA    , amount: 12 }], 
            "80+": [{ item: Item.VAYUDA_TURQUOISE_GEMSTONE, amount: 6 }, { item: Item.RUNIC_FANG, amount: 20 }, { item: Item.ONIKABUTO, amount: 60 }, { item: Item.GOLDEN_RAVEN_INSIGNIA    , amount: 24 }]
        }}, 
        elements: [{ element: Element.ANEMO, materials: { 
            2:  [{ item: Item.TEACHINGS_OF_TRANSIENCE,    amount:  3 }, {item: Item.TREASURE_HOARDER_INSIGNIA, amount:  6 }],                                             
            3:  [{ item: Item.GUIDE_TO_TRANSIENCE,        amount:  2 }, {item: Item.SILVER_RAVEN_INSIGNIA    , amount:  3 }],                                             
            4:  [{ item: Item.GUIDE_TO_TRANSIENCE,        amount:  4 }, {item: Item.SILVER_RAVEN_INSIGNIA    , amount:  4 }],                                             
            5:  [{ item: Item.GUIDE_TO_TRANSIENCE,        amount:  6 }, {item: Item.SILVER_RAVEN_INSIGNIA    , amount:  6 }],                                             
            6:  [{ item: Item.GUIDE_TO_TRANSIENCE,        amount:  9 }, {item: Item.SILVER_RAVEN_INSIGNIA    , amount:  9 }],                                             
            7:  [{ item: Item.PHILOSOPHIES_OF_TRANSIENCE, amount:  4 }, {item: Item.GOLDEN_RAVEN_INSIGNIA    , amount:  4 }, { item: Item.THE_MEANING_OF_AEONS, amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_TRANSIENCE, amount:  6 }, {item: Item.GOLDEN_RAVEN_INSIGNIA    , amount:  6 }, { item: Item.THE_MEANING_OF_AEONS, amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_TRANSIENCE, amount: 12 }, {item: Item.GOLDEN_RAVEN_INSIGNIA    , amount:  9 }, { item: Item.THE_MEANING_OF_AEONS, amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_TRANSIENCE, amount: 16 }, {item: Item.GOLDEN_RAVEN_INSIGNIA    , amount: 12 }, { item: Item.THE_MEANING_OF_AEONS, amount: 2 }] 
        }}]
    }); static COLLEI             = new CharacterEntity({ name: "COLLEI",             rarity: 4, /* FINISHED v2 */ 
        level: { materials: {
            "20+": [{ item: Item.VAJRADA_AMETHYST_SLIVER,   amount: 1 },                                                   { item: Item.RUKKHASHAVA_MUSHROOMS, amount:  3 }, { item: Item.FIRM_ARROWHEAD,      amount:  3 }],
            "40+": [{ item: Item.VAJRADA_AMETHYST_FRAGMENT, amount: 3 }, { item: Item.MAJESTIC_HOOKED_BEAK, amount:  2 }, { item: Item.RUKKHASHAVA_MUSHROOMS, amount: 10 }, { item: Item.FIRM_ARROWHEAD,      amount: 15 }],
            "50+": [{ item: Item.VAJRADA_AMETHYST_FRAGMENT, amount: 6 }, { item: Item.MAJESTIC_HOOKED_BEAK, amount:  4 }, { item: Item.RUKKHASHAVA_MUSHROOMS, amount: 20 }, { item: Item.SHARP_ARROWHEAD,     amount: 12 }],
            "60+": [{ item: Item.VAJRADA_AMETHYST_CHUNK,    amount: 3 }, { item: Item.MAJESTIC_HOOKED_BEAK, amount:  8 }, { item: Item.RUKKHASHAVA_MUSHROOMS, amount: 30 }, { item: Item.SHARP_ARROWHEAD,     amount: 18 }],
            "70+": [{ item: Item.VAJRADA_AMETHYST_CHUNK,    amount: 6 }, { item: Item.MAJESTIC_HOOKED_BEAK, amount: 12 }, { item: Item.RUKKHASHAVA_MUSHROOMS, amount: 45 }, { item: Item.WEATHERED_ARROWHEAD, amount: 12 }],
            "80+": [{ item: Item.VAJRADA_AMETHYST_GEMSTONE, amount: 6 }, { item: Item.MAJESTIC_HOOKED_BEAK, amount: 20 }, { item: Item.RUKKHASHAVA_MUSHROOMS, amount: 60 }, { item: Item.WEATHERED_ARROWHEAD, amount: 24 }],
        }},
        elements: [{ element: Element.DENDRO, materials: {
            2:  [{ item: Item.TEACHINGS_OF_PRAXIS,    amount:  3 }, { item: Item.FIRM_ARROWHEAD,      amount:  6 }],
            3:  [{ item: Item.GUIDE_TO_PRAXIS,        amount:  2 }, { item: Item.SHARP_ARROWHEAD,     amount:  3 }],
            4:  [{ item: Item.GUIDE_TO_PRAXIS,        amount:  4 }, { item: Item.SHARP_ARROWHEAD,     amount:  4 }],
            5:  [{ item: Item.GUIDE_TO_PRAXIS,        amount:  6 }, { item: Item.SHARP_ARROWHEAD,     amount:  6 }],
            6:  [{ item: Item.GUIDE_TO_PRAXIS,        amount:  9 }, { item: Item.SHARP_ARROWHEAD,     amount:  9 }],
            7:  [{ item: Item.PHILOSOPHIES_OF_PRAXIS, amount:  4 }, { item: Item.WEATHERED_ARROWHEAD, amount:  4 }, { item: Item.TEARS_OF_THE_CALAMITOUS_GOD, amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_PRAXIS, amount:  6 }, { item: Item.WEATHERED_ARROWHEAD, amount:  6 }, { item: Item.TEARS_OF_THE_CALAMITOUS_GOD, amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_PRAXIS, amount: 12 }, { item: Item.WEATHERED_ARROWHEAD, amount:  9 }, { item: Item.TEARS_OF_THE_CALAMITOUS_GOD, amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_PRAXIS, amount: 16 }, { item: Item.WEATHERED_ARROWHEAD, amount: 12 }, { item: Item.TEARS_OF_THE_CALAMITOUS_GOD, amount: 2 }],
        }}]
    }); static TIGHNARI           = new CharacterEntity({ name: "TIGHNARI",           rarity: 5, /* FINISHED v2 */ 
        level: { materials: {
            "20+": [{ item: Item.NAGADUS_EMERALD_SLIVER  , amount: 1 },                                                   { item: Item.NILOTPALA_LOTUS, amount:  3 }, { item: Item.FUNGAL_SPORES        , amount:  3 }],
            "40+": [{ item: Item.NAGADUS_EMERALD_FRAGMENT, amount: 3 }, { item: Item.MAJESTIC_HOOKED_BEAK, amount:  2 }, { item: Item.NILOTPALA_LOTUS, amount: 10 }, { item: Item.FUNGAL_SPORES        , amount: 15 }],
            "50+": [{ item: Item.NAGADUS_EMERALD_FRAGMENT, amount: 6 }, { item: Item.MAJESTIC_HOOKED_BEAK, amount:  4 }, { item: Item.NILOTPALA_LOTUS, amount: 20 }, { item: Item.LUMINESCENT_POLLEN   , amount: 12 }],
            "60+": [{ item: Item.NAGADUS_EMERALD_CHUNK   , amount: 3 }, { item: Item.MAJESTIC_HOOKED_BEAK, amount:  8 }, { item: Item.NILOTPALA_LOTUS, amount: 30 }, { item: Item.LUMINESCENT_POLLEN   , amount: 18 }],
            "70+": [{ item: Item.NAGADUS_EMERALD_CHUNK   , amount: 6 }, { item: Item.MAJESTIC_HOOKED_BEAK, amount: 12 }, { item: Item.NILOTPALA_LOTUS, amount: 45 }, { item: Item.CRYSTALLINE_CYST_DUST, amount: 12 }],
            "80+": [{ item: Item.NAGADUS_EMERALD_GEMSTONE, amount: 6 }, { item: Item.MAJESTIC_HOOKED_BEAK, amount: 20 }, { item: Item.NILOTPALA_LOTUS, amount: 60 }, { item: Item.CRYSTALLINE_CYST_DUST, amount: 24 }],
        }},
        elements: [{ element: Element.DENDRO, materials: {
            2:  [{ item: Item.TEACHINGS_OF_ADMONITION   , amount:  3 }, {item: Item.FUNGAL_SPORES        , amount:  6 }],
            3:  [{ item: Item.GUIDE_TO_ADMONITION       , amount:  2 }, {item: Item.LUMINESCENT_POLLEN   , amount:  3 }],
            4:  [{ item: Item.GUIDE_TO_ADMONITION       , amount:  4 }, {item: Item.LUMINESCENT_POLLEN   , amount:  4 }],
            5:  [{ item: Item.GUIDE_TO_ADMONITION       , amount:  6 }, {item: Item.LUMINESCENT_POLLEN   , amount:  6 }],
            6:  [{ item: Item.GUIDE_TO_ADMONITION       , amount:  9 }, {item: Item.LUMINESCENT_POLLEN   , amount:  9 }],
            7:  [{ item: Item.PHILOSOPHIES_OF_ADMONITION, amount:  4 }, {item: Item.CRYSTALLINE_CYST_DUST, amount:  4 }, { item: Item.THE_MEANING_OF_AEONS, amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_ADMONITION, amount:  6 }, {item: Item.CRYSTALLINE_CYST_DUST, amount:  6 }, { item: Item.THE_MEANING_OF_AEONS, amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_ADMONITION, amount: 12 }, {item: Item.CRYSTALLINE_CYST_DUST, amount:  9 }, { item: Item.THE_MEANING_OF_AEONS, amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_ADMONITION, amount: 16 }, {item: Item.CRYSTALLINE_CYST_DUST, amount: 12 }, { item: Item.THE_MEANING_OF_AEONS, amount: 2 }]
        }}]
    }); static DORI               = new CharacterEntity({ name: "DORI",               rarity: 4, /* FINISHED v2 */ 
        level: { materials: {
            "20+": [{ item: Item.VAJRADA_AMETHYST_SLIVER  , amount: 1 },                                                    { item: Item.KALPALATA_LOTUS, amount:  3 }, { item: Item.FADED_RED_SATIN , amount:  3 }],
            "40+": [{ item: Item.VAJRADA_AMETHYST_FRAGMENT, amount: 3 }, { item: Item.THUNDERCLAP_FRUITCORE, amount:  2 }, { item: Item.KALPALATA_LOTUS, amount: 10 }, { item: Item.FADED_RED_SATIN , amount: 15 }],
            "50+": [{ item: Item.VAJRADA_AMETHYST_FRAGMENT, amount: 6 }, { item: Item.THUNDERCLAP_FRUITCORE, amount:  4 }, { item: Item.KALPALATA_LOTUS, amount: 20 }, { item: Item.TRIMMED_RED_SILK, amount: 12 }],
            "60+": [{ item: Item.VAJRADA_AMETHYST_CHUNK   , amount: 3 }, { item: Item.THUNDERCLAP_FRUITCORE, amount:  8 }, { item: Item.KALPALATA_LOTUS, amount: 30 }, { item: Item.TRIMMED_RED_SILK, amount: 18 }],
            "70+": [{ item: Item.VAJRADA_AMETHYST_CHUNK   , amount: 6 }, { item: Item.THUNDERCLAP_FRUITCORE, amount: 12 }, { item: Item.KALPALATA_LOTUS, amount: 45 }, { item: Item.RICH_RED_BROCADE, amount: 12 }],
            "80+": [{ item: Item.VAJRADA_AMETHYST_GEMSTONE, amount: 6 }, { item: Item.THUNDERCLAP_FRUITCORE, amount: 20 }, { item: Item.KALPALATA_LOTUS, amount: 60 }, { item: Item.RICH_RED_BROCADE, amount: 24 }],
        }},
        elements: [{ element: Element.ELECTRO, materials: {
            2:  [{ item: Item.TEACHINGS_OF_INGENUITY   , amount:  3 }, {item: Item.FADED_RED_SATIN , amount:  6 }],
            3:  [{ item: Item.GUIDE_TO_INGENUITY       , amount:  2 }, {item: Item.TRIMMED_RED_SILK, amount:  3 }],
            4:  [{ item: Item.GUIDE_TO_INGENUITY       , amount:  4 }, {item: Item.TRIMMED_RED_SILK, amount:  4 }],
            5:  [{ item: Item.GUIDE_TO_INGENUITY       , amount:  6 }, {item: Item.TRIMMED_RED_SILK, amount:  6 }],
            6:  [{ item: Item.GUIDE_TO_INGENUITY       , amount:  9 }, {item: Item.TRIMMED_RED_SILK, amount:  9 }],
            7:  [{ item: Item.PHILOSOPHIES_OF_INGENUITY, amount:  4 }, {item: Item.RICH_RED_BROCADE, amount:  4 }, { item: Item.BLOODJADE_BRANCH, amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_INGENUITY, amount:  6 }, {item: Item.RICH_RED_BROCADE, amount:  6 }, { item: Item.BLOODJADE_BRANCH, amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_INGENUITY, amount: 12 }, {item: Item.RICH_RED_BROCADE, amount:  9 }, { item: Item.BLOODJADE_BRANCH, amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_INGENUITY, amount: 16 }, {item: Item.RICH_RED_BROCADE, amount: 12 }, { item: Item.BLOODJADE_BRANCH, amount: 2 }]
        }}]
    }); static CANDACE            = new CharacterEntity({ name: "CANDACE",            rarity: 4, /* FINISHED v2 */ 
        level: { materials: {
            "20+": [{ item: Item.VARUNADA_LAZURITE_SLIVER  , amount: 1 },                                                        { item: Item.HENNA_BERRY, amount:  3 }, { item: Item.FADED_RED_SATIN , amount:  3 }],
            "40+": [{ item: Item.VARUNADA_LAZURITE_FRAGMENT, amount: 3 }, { item: Item.LIGHT_GUIDING_TETRAHEDRON, amount:  2 }, { item: Item.HENNA_BERRY, amount: 10 }, { item: Item.FADED_RED_SATIN , amount: 15 }],
            "50+": [{ item: Item.VARUNADA_LAZURITE_FRAGMENT, amount: 6 }, { item: Item.LIGHT_GUIDING_TETRAHEDRON, amount:  4 }, { item: Item.HENNA_BERRY, amount: 20 }, { item: Item.TRIMMED_RED_SILK, amount: 12 }],
            "60+": [{ item: Item.VARUNADA_LAZURITE_CHUNK   , amount: 3 }, { item: Item.LIGHT_GUIDING_TETRAHEDRON, amount:  8 }, { item: Item.HENNA_BERRY, amount: 30 }, { item: Item.TRIMMED_RED_SILK, amount: 18 }],
            "70+": [{ item: Item.VARUNADA_LAZURITE_CHUNK   , amount: 6 }, { item: Item.LIGHT_GUIDING_TETRAHEDRON, amount: 12 }, { item: Item.HENNA_BERRY, amount: 45 }, { item: Item.RICH_RED_BROCADE, amount: 12 }],
            "80+": [{ item: Item.VARUNADA_LAZURITE_GEMSTONE, amount: 6 }, { item: Item.LIGHT_GUIDING_TETRAHEDRON, amount: 20 }, { item: Item.HENNA_BERRY, amount: 60 }, { item: Item.RICH_RED_BROCADE, amount: 24 }],
        }},
        elements: [{ element: Element.HYDRO, materials: {
            2:  [{ item: Item.TEACHINGS_OF_ADMONITION   , amount:  3 }, {item: Item.FADED_RED_SATIN , amount:  6 }],
            3:  [{ item: Item.GUIDE_TO_ADMONITION       , amount:  2 }, {item: Item.TRIMMED_RED_SILK, amount:  3 }],
            4:  [{ item: Item.GUIDE_TO_ADMONITION       , amount:  4 }, {item: Item.TRIMMED_RED_SILK, amount:  4 }],
            5:  [{ item: Item.GUIDE_TO_ADMONITION       , amount:  6 }, {item: Item.TRIMMED_RED_SILK, amount:  6 }],
            6:  [{ item: Item.GUIDE_TO_ADMONITION       , amount:  9 }, {item: Item.TRIMMED_RED_SILK, amount:  9 }],
            7:  [{ item: Item.PHILOSOPHIES_OF_ADMONITION, amount:  4 }, {item: Item.RICH_RED_BROCADE, amount:  4 }, { item: Item.TEARS_OF_THE_CALAMITOUS_GOD, amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_ADMONITION, amount:  6 }, {item: Item.RICH_RED_BROCADE, amount:  6 }, { item: Item.TEARS_OF_THE_CALAMITOUS_GOD, amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_ADMONITION, amount: 12 }, {item: Item.RICH_RED_BROCADE, amount:  9 }, { item: Item.TEARS_OF_THE_CALAMITOUS_GOD, amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_ADMONITION, amount: 16 }, {item: Item.RICH_RED_BROCADE, amount: 12 }, { item: Item.TEARS_OF_THE_CALAMITOUS_GOD, amount: 2 }]
        }}]
    }); static CYNO               = new CharacterEntity({ name: "CYNO",               rarity: 5, /* FINISHED v2 */ 
        level: { materials: { 
            "20+": [{ item: Item.VAJRADA_AMETHYST_SLIVER,   amount: 1 },                                                    { item: Item.SCARAB, amount:  3 }, { item: Item.DIVINING_SCROLL,        amount:  3 }], 
            "40+": [{ item: Item.VAJRADA_AMETHYST_FRAGMENT, amount: 3 }, { item: Item.THUNDERCLAP_FRUITCORE, amount:  2 }, { item: Item.SCARAB, amount: 10 }, { item: Item.DIVINING_SCROLL,        amount: 15 }], 
            "50+": [{ item: Item.VAJRADA_AMETHYST_FRAGMENT, amount: 6 }, { item: Item.THUNDERCLAP_FRUITCORE, amount:  4 }, { item: Item.SCARAB, amount: 20 }, { item: Item.SEALED_SCROLL,          amount: 12 }], 
            "60+": [{ item: Item.VAJRADA_AMETHYST_CHUNK,    amount: 3 }, { item: Item.THUNDERCLAP_FRUITCORE, amount:  8 }, { item: Item.SCARAB, amount: 30 }, { item: Item.SEALED_SCROLL,          amount: 18 }], 
            "70+": [{ item: Item.VAJRADA_AMETHYST_CHUNK,    amount: 6 }, { item: Item.THUNDERCLAP_FRUITCORE, amount: 12 }, { item: Item.SCARAB, amount: 45 }, { item: Item.FORBIDDEN_CURSE_SCROLL, amount: 12 }], 
            "80+": [{ item: Item.VAJRADA_AMETHYST_GEMSTONE, amount: 6 }, { item: Item.THUNDERCLAP_FRUITCORE, amount: 20 }, { item: Item.SCARAB, amount: 60 }, { item: Item.FORBIDDEN_CURSE_SCROLL, amount: 24 }]
        }}, 
        elements: [{ element: Element.ELECTRO, materials: {  
            2:  [{ item: Item.TEACHINGS_OF_ADMONITION,    amount:  3 }, {item: Item.DIVINING_SCROLL,        amount:  6 }],                                             
            3:  [{ item: Item.GUIDE_TO_ADMONITION,        amount:  2 }, {item: Item.SEALED_SCROLL,          amount:  3 }],                                             
            4:  [{ item: Item.GUIDE_TO_ADMONITION,        amount:  4 }, {item: Item.SEALED_SCROLL,          amount:  4 }],                                             
            5:  [{ item: Item.GUIDE_TO_ADMONITION,        amount:  6 }, {item: Item.SEALED_SCROLL,          amount:  6 }],                                             
            6:  [{ item: Item.GUIDE_TO_ADMONITION,        amount:  9 }, {item: Item.SEALED_SCROLL,          amount:  9 }],                                             
            7:  [{ item: Item.PHILOSOPHIES_OF_ADMONITION, amount:  4 }, {item: Item.FORBIDDEN_CURSE_SCROLL, amount:  4 }, { item: Item.MUDRA_OF_THE_MALEFIC_GENERAL, amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_ADMONITION, amount:  6 }, {item: Item.FORBIDDEN_CURSE_SCROLL, amount:  6 }, { item: Item.MUDRA_OF_THE_MALEFIC_GENERAL, amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_ADMONITION, amount: 12 }, {item: Item.FORBIDDEN_CURSE_SCROLL, amount:  9 }, { item: Item.MUDRA_OF_THE_MALEFIC_GENERAL, amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_ADMONITION, amount: 16 }, {item: Item.FORBIDDEN_CURSE_SCROLL, amount: 12 }, { item: Item.MUDRA_OF_THE_MALEFIC_GENERAL, amount: 2 }] 
        }}]
    }); static NILOU              = new CharacterEntity({ name: "NILOU",              rarity: 5, /* FINISHED v2 */ 
        level: { materials: {
            "20+": [{ item: Item.VARUNADA_LAZURITE_SLIVER  , amount: 1 },                                                { item: Item.PADISARAH, amount:  3 }, { item: Item.FUNGAL_SPORES        , amount:  3 }],
            "40+": [{ item: Item.VARUNADA_LAZURITE_FRAGMENT, amount: 3 }, { item: Item.PERPETUAL_CALIBER, amount:  2 }, { item: Item.PADISARAH, amount: 10 }, { item: Item.FUNGAL_SPORES        , amount: 15 }],
            "50+": [{ item: Item.VARUNADA_LAZURITE_FRAGMENT, amount: 6 }, { item: Item.PERPETUAL_CALIBER, amount:  4 }, { item: Item.PADISARAH, amount: 20 }, { item: Item.LUMINESCENT_POLLEN   , amount: 12 }],
            "60+": [{ item: Item.VARUNADA_LAZURITE_CHUNK   , amount: 3 }, { item: Item.PERPETUAL_CALIBER, amount:  8 }, { item: Item.PADISARAH, amount: 30 }, { item: Item.LUMINESCENT_POLLEN   , amount: 18 }],
            "70+": [{ item: Item.VARUNADA_LAZURITE_CHUNK   , amount: 6 }, { item: Item.PERPETUAL_CALIBER, amount: 12 }, { item: Item.PADISARAH, amount: 45 }, { item: Item.CRYSTALLINE_CYST_DUST, amount: 12 }],
            "80+": [{ item: Item.VARUNADA_LAZURITE_GEMSTONE, amount: 6 }, { item: Item.PERPETUAL_CALIBER, amount: 20 }, { item: Item.PADISARAH, amount: 60 }, { item: Item.CRYSTALLINE_CYST_DUST, amount: 24 }],
        }},
        elements: [{ element: Element.HYDRO, materials: {
            2:  [{ item: Item.TEACHINGS_OF_PRAXIS   , amount:  3 }, {item: Item.FUNGAL_SPORES        , amount:  6 }],
            3:  [{ item: Item.GUIDE_TO_PRAXIS       , amount:  2 }, {item: Item.LUMINESCENT_POLLEN   , amount:  3 }],
            4:  [{ item: Item.GUIDE_TO_PRAXIS       , amount:  4 }, {item: Item.LUMINESCENT_POLLEN   , amount:  4 }],
            5:  [{ item: Item.GUIDE_TO_PRAXIS       , amount:  6 }, {item: Item.LUMINESCENT_POLLEN   , amount:  6 }],
            6:  [{ item: Item.GUIDE_TO_PRAXIS       , amount:  9 }, {item: Item.LUMINESCENT_POLLEN   , amount:  9 }],
            7:  [{ item: Item.PHILOSOPHIES_OF_PRAXIS, amount:  4 }, {item: Item.CRYSTALLINE_CYST_DUST, amount:  4 }, { item: Item.TEARS_OF_THE_CALAMITOUS_GOD, amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_PRAXIS, amount:  6 }, {item: Item.CRYSTALLINE_CYST_DUST, amount:  6 }, { item: Item.TEARS_OF_THE_CALAMITOUS_GOD, amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_PRAXIS, amount: 12 }, {item: Item.CRYSTALLINE_CYST_DUST, amount:  9 }, { item: Item.TEARS_OF_THE_CALAMITOUS_GOD, amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_PRAXIS, amount: 16 }, {item: Item.CRYSTALLINE_CYST_DUST, amount: 12 }, { item: Item.TEARS_OF_THE_CALAMITOUS_GOD, amount: 2 }]
        }}]
    }); static NAHIDA             = new CharacterEntity({ name: "NAHIDA",             rarity: 5, /* FINISHED v2 */ 
        level: { materials: {
            "20+": [{ item: Item.NAGADUS_EMERALD_SLIVER  , amount: 1 },                                              { item: Item.KALPALATA_LOTUS, amount:  3 }, { item: Item.FUNGAL_SPORES        , amount:  3 }],
            "40+": [{ item: Item.NAGADUS_EMERALD_FRAGMENT, amount: 3 }, { item: Item.QUELLED_CREEPER, amount:  2 }, { item: Item.KALPALATA_LOTUS, amount: 10 }, { item: Item.FUNGAL_SPORES        , amount: 15 }],
            "50+": [{ item: Item.NAGADUS_EMERALD_FRAGMENT, amount: 6 }, { item: Item.QUELLED_CREEPER, amount:  4 }, { item: Item.KALPALATA_LOTUS, amount: 20 }, { item: Item.LUMINESCENT_POLLEN   , amount: 12 }],
            "60+": [{ item: Item.NAGADUS_EMERALD_CHUNK   , amount: 3 }, { item: Item.QUELLED_CREEPER, amount:  8 }, { item: Item.KALPALATA_LOTUS, amount: 30 }, { item: Item.LUMINESCENT_POLLEN   , amount: 18 }],
            "70+": [{ item: Item.NAGADUS_EMERALD_CHUNK   , amount: 6 }, { item: Item.QUELLED_CREEPER, amount: 12 }, { item: Item.KALPALATA_LOTUS, amount: 45 }, { item: Item.CRYSTALLINE_CYST_DUST, amount: 12 }],
            "80+": [{ item: Item.NAGADUS_EMERALD_GEMSTONE, amount: 6 }, { item: Item.QUELLED_CREEPER, amount: 20 }, { item: Item.KALPALATA_LOTUS, amount: 60 }, { item: Item.CRYSTALLINE_CYST_DUST, amount: 24 }],
        }},
        elements: [{ element: Element.DENDRO, materials: {
            2:  [{ item: Item.TEACHINGS_OF_INGENUITY   , amount:  3 }, {item: Item.FUNGAL_SPORES        , amount:  6 }],
            3:  [{ item: Item.GUIDE_TO_INGENUITY       , amount:  2 }, {item: Item.LUMINESCENT_POLLEN   , amount:  3 }],
            4:  [{ item: Item.GUIDE_TO_INGENUITY       , amount:  4 }, {item: Item.LUMINESCENT_POLLEN   , amount:  4 }],
            5:  [{ item: Item.GUIDE_TO_INGENUITY       , amount:  6 }, {item: Item.LUMINESCENT_POLLEN   , amount:  6 }],
            6:  [{ item: Item.GUIDE_TO_INGENUITY       , amount:  9 }, {item: Item.LUMINESCENT_POLLEN   , amount:  9 }],
            7:  [{ item: Item.PHILOSOPHIES_OF_INGENUITY, amount:  4 }, {item: Item.CRYSTALLINE_CYST_DUST, amount:  4 }, { item: Item.PUPPET_STRINGS, amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_INGENUITY, amount:  6 }, {item: Item.CRYSTALLINE_CYST_DUST, amount:  6 }, { item: Item.PUPPET_STRINGS, amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_INGENUITY, amount: 12 }, {item: Item.CRYSTALLINE_CYST_DUST, amount:  9 }, { item: Item.PUPPET_STRINGS, amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_INGENUITY, amount: 16 }, {item: Item.CRYSTALLINE_CYST_DUST, amount: 12 }, { item: Item.PUPPET_STRINGS, amount: 2 }]
        }}]
    }); static LAYLA              = new CharacterEntity({ name: "LAYLA",              rarity: 4, /* FINISHED v2 */ 
        level: { materials: { 
            "20+": [{ item: Item.SHIVADA_JADE_SLIVER,   amount: 1 },                                                { item: Item.NILOTPALA_LOTUS, amount:  3 }, { item: Item.DIVINING_SCROLL,        amount:  3 }], 
            "40+": [{ item: Item.SHIVADA_JADE_FRAGMENT, amount: 3 }, { item: Item.PERPETUAL_CALIBER, amount:  2 }, { item: Item.NILOTPALA_LOTUS, amount: 10 }, { item: Item.DIVINING_SCROLL,        amount: 15 }], 
            "50+": [{ item: Item.SHIVADA_JADE_FRAGMENT, amount: 6 }, { item: Item.PERPETUAL_CALIBER, amount:  4 }, { item: Item.NILOTPALA_LOTUS, amount: 20 }, { item: Item.SEALED_SCROLL,          amount: 12 }], 
            "60+": [{ item: Item.SHIVADA_JADE_CHUNK,    amount: 3 }, { item: Item.PERPETUAL_CALIBER, amount:  8 }, { item: Item.NILOTPALA_LOTUS, amount: 30 }, { item: Item.SEALED_SCROLL,          amount: 18 }], 
            "70+": [{ item: Item.SHIVADA_JADE_CHUNK,    amount: 6 }, { item: Item.PERPETUAL_CALIBER, amount: 12 }, { item: Item.NILOTPALA_LOTUS, amount: 45 }, { item: Item.FORBIDDEN_CURSE_SCROLL, amount: 12 }], 
            "80+": [{ item: Item.SHIVADA_JADE_GEMSTONE, amount: 6 }, { item: Item.PERPETUAL_CALIBER, amount: 20 }, { item: Item.NILOTPALA_LOTUS, amount: 60 }, { item: Item.FORBIDDEN_CURSE_SCROLL, amount: 24 }]
        }}, 
        elements: [{ element: Element.CRYO, materials: {  
            2:  [{ item: Item.TEACHINGS_OF_INGENUITY,    amount:  3 }, {item: Item.DIVINING_SCROLL,        amount:  6 }],                                             
            3:  [{ item: Item.GUIDE_TO_INGENUITY,        amount:  2 }, {item: Item.SEALED_SCROLL,          amount:  3 }],                                             
            4:  [{ item: Item.GUIDE_TO_INGENUITY,        amount:  4 }, {item: Item.SEALED_SCROLL,          amount:  4 }],                                             
            5:  [{ item: Item.GUIDE_TO_INGENUITY,        amount:  6 }, {item: Item.SEALED_SCROLL,          amount:  6 }],                                             
            6:  [{ item: Item.GUIDE_TO_INGENUITY,        amount:  9 }, {item: Item.SEALED_SCROLL,          amount:  9 }],                                             
            7:  [{ item: Item.PHILOSOPHIES_OF_INGENUITY, amount:  4 }, {item: Item.FORBIDDEN_CURSE_SCROLL, amount:  4 }, { item: Item.MIRROR_OF_MUSHIN, amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_INGENUITY, amount:  6 }, {item: Item.FORBIDDEN_CURSE_SCROLL, amount:  6 }, { item: Item.MIRROR_OF_MUSHIN, amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_INGENUITY, amount: 12 }, {item: Item.FORBIDDEN_CURSE_SCROLL, amount:  9 }, { item: Item.MIRROR_OF_MUSHIN, amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_INGENUITY, amount: 16 }, {item: Item.FORBIDDEN_CURSE_SCROLL, amount: 12 }, { item: Item.MIRROR_OF_MUSHIN, amount: 2 }] 
        }}]
    }); static FARUZAN            = new CharacterEntity({ name: "FARUZAN",            rarity: 4, /* FINISHED v2 */ 
        level: { materials: {
            "20+": [{ item: Item.VAYUDA_TURQUOISE_SLIVER  , amount: 1 },                                                        { item: Item.HENNA_BERRY, amount:  3 }, { item: Item.FADED_RED_SATIN , amount:  3 }],
            "40+": [{ item: Item.VAYUDA_TURQUOISE_FRAGMENT, amount: 3 }, { item: Item.LIGHT_GUIDING_TETRAHEDRON, amount:  2 }, { item: Item.HENNA_BERRY, amount: 10 }, { item: Item.FADED_RED_SATIN , amount: 15 }],
            "50+": [{ item: Item.VAYUDA_TURQUOISE_FRAGMENT, amount: 6 }, { item: Item.LIGHT_GUIDING_TETRAHEDRON, amount:  4 }, { item: Item.HENNA_BERRY, amount: 20 }, { item: Item.TRIMMED_RED_SILK, amount: 12 }],
            "60+": [{ item: Item.VAYUDA_TURQUOISE_CHUNK   , amount: 3 }, { item: Item.LIGHT_GUIDING_TETRAHEDRON, amount:  8 }, { item: Item.HENNA_BERRY, amount: 30 }, { item: Item.TRIMMED_RED_SILK, amount: 18 }],
            "70+": [{ item: Item.VAYUDA_TURQUOISE_CHUNK   , amount: 6 }, { item: Item.LIGHT_GUIDING_TETRAHEDRON, amount: 12 }, { item: Item.HENNA_BERRY, amount: 45 }, { item: Item.RICH_RED_BROCADE, amount: 12 }],
            "80+": [{ item: Item.VAYUDA_TURQUOISE_GEMSTONE, amount: 6 }, { item: Item.LIGHT_GUIDING_TETRAHEDRON, amount: 20 }, { item: Item.HENNA_BERRY, amount: 60 }, { item: Item.RICH_RED_BROCADE, amount: 24 }],
        }},
        elements: [{ element: Element.ANEMO, materials: {
            2:  [{ item: Item.TEACHINGS_OF_ADMONITION   , amount:  3 }, {item: Item.FADED_RED_SATIN , amount:  6 }],
            3:  [{ item: Item.GUIDE_TO_ADMONITION       , amount:  2 }, {item: Item.TRIMMED_RED_SILK, amount:  3 }],
            4:  [{ item: Item.GUIDE_TO_ADMONITION       , amount:  4 }, {item: Item.TRIMMED_RED_SILK, amount:  4 }],
            5:  [{ item: Item.GUIDE_TO_ADMONITION       , amount:  6 }, {item: Item.TRIMMED_RED_SILK, amount:  6 }],
            6:  [{ item: Item.GUIDE_TO_ADMONITION       , amount:  9 }, {item: Item.TRIMMED_RED_SILK, amount:  9 }],
            7:  [{ item: Item.PHILOSOPHIES_OF_ADMONITION, amount:  4 }, {item: Item.RICH_RED_BROCADE, amount:  4 }, { item: Item.PUPPET_STRINGS, amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_ADMONITION, amount:  6 }, {item: Item.RICH_RED_BROCADE, amount:  6 }, { item: Item.PUPPET_STRINGS, amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_ADMONITION, amount: 12 }, {item: Item.RICH_RED_BROCADE, amount:  9 }, { item: Item.PUPPET_STRINGS, amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_ADMONITION, amount: 16 }, {item: Item.RICH_RED_BROCADE, amount: 12 }, { item: Item.PUPPET_STRINGS, amount: 2 }]
        }}]
    }); static WANDERER           = new CharacterEntity({ name: "WANDERER",           rarity: 5, /* FINISHED v2 */ 
        level: { materials: {
            "20+": [{ item: Item.VAYUDA_TURQUOISE_SLIVER  , amount: 1 },                                                { item: Item.RUKKHASHAVA_MUSHROOMS, amount:  3 }, { item: Item.OLD_HANDGUARD     , amount:  3 }],
            "40+": [{ item: Item.VAYUDA_TURQUOISE_FRAGMENT, amount: 3 }, { item: Item.PERPETUAL_CALIBER, amount:  2 }, { item: Item.RUKKHASHAVA_MUSHROOMS, amount: 10 }, { item: Item.OLD_HANDGUARD     , amount: 15 }],
            "50+": [{ item: Item.VAYUDA_TURQUOISE_FRAGMENT, amount: 6 }, { item: Item.PERPETUAL_CALIBER, amount:  4 }, { item: Item.RUKKHASHAVA_MUSHROOMS, amount: 20 }, { item: Item.KAGEUCHI_HANDGUARD, amount: 12 }],
            "60+": [{ item: Item.VAYUDA_TURQUOISE_CHUNK   , amount: 3 }, { item: Item.PERPETUAL_CALIBER, amount:  8 }, { item: Item.RUKKHASHAVA_MUSHROOMS, amount: 30 }, { item: Item.KAGEUCHI_HANDGUARD, amount: 18 }],
            "70+": [{ item: Item.VAYUDA_TURQUOISE_CHUNK   , amount: 6 }, { item: Item.PERPETUAL_CALIBER, amount: 12 }, { item: Item.RUKKHASHAVA_MUSHROOMS, amount: 45 }, { item: Item.FAMED_HANDGUARD   , amount: 12 }],
            "80+": [{ item: Item.VAYUDA_TURQUOISE_GEMSTONE, amount: 6 }, { item: Item.PERPETUAL_CALIBER, amount: 20 }, { item: Item.RUKKHASHAVA_MUSHROOMS, amount: 60 }, { item: Item.FAMED_HANDGUARD   , amount: 24 }],
        }},
        elements: [{ element: Element.ANEMO, materials: {
            2:  [{ item: Item.TEACHINGS_OF_PRAXIS   , amount:  3 }, {item: Item.OLD_HANDGUARD     , amount:  6 }],
            3:  [{ item: Item.GUIDE_TO_PRAXIS       , amount:  2 }, {item: Item.KAGEUCHI_HANDGUARD, amount:  3 }],
            4:  [{ item: Item.GUIDE_TO_PRAXIS       , amount:  4 }, {item: Item.KAGEUCHI_HANDGUARD, amount:  4 }],
            5:  [{ item: Item.GUIDE_TO_PRAXIS       , amount:  6 }, {item: Item.KAGEUCHI_HANDGUARD, amount:  6 }],
            6:  [{ item: Item.GUIDE_TO_PRAXIS       , amount:  9 }, {item: Item.KAGEUCHI_HANDGUARD, amount:  9 }],
            7:  [{ item: Item.PHILOSOPHIES_OF_PRAXIS, amount:  4 }, {item: Item.FAMED_HANDGUARD   , amount:  4 }, { item: Item["DAKA'S_BELL"], amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_PRAXIS, amount:  6 }, {item: Item.FAMED_HANDGUARD   , amount:  6 }, { item: Item["DAKA'S_BELL"], amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_PRAXIS, amount: 12 }, {item: Item.FAMED_HANDGUARD   , amount:  9 }, { item: Item["DAKA'S_BELL"], amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_PRAXIS, amount: 16 }, {item: Item.FAMED_HANDGUARD   , amount: 12 }, { item: Item["DAKA'S_BELL"], amount: 2 }]
        }}]
    }); static YAO_YAO            = new CharacterEntity({ name: "YAO_YAO",            rarity: 4, /* FINISHED v2 */ 
        level: { materials: { 
            "20+": [{ item: Item.NAGADUS_EMERALD_SLIVER,   amount: 1 },                                              { item: Item.JUEYUN_CHILI, amount:  3 }, { item: Item.SLIME_CONDENSATE,  amount:  3 }], 
            "40+": [{ item: Item.NAGADUS_EMERALD_FRAGMENT, amount: 3 }, { item: Item.QUELLED_CREEPER, amount:  2 }, { item: Item.JUEYUN_CHILI, amount: 10 }, { item: Item.SLIME_CONDENSATE,  amount: 15 }], 
            "50+": [{ item: Item.NAGADUS_EMERALD_FRAGMENT, amount: 6 }, { item: Item.QUELLED_CREEPER, amount:  4 }, { item: Item.JUEYUN_CHILI, amount: 20 }, { item: Item.SLIME_SECRETIONS,  amount: 12 }], 
            "60+": [{ item: Item.NAGADUS_EMERALD_CHUNK,    amount: 3 }, { item: Item.QUELLED_CREEPER, amount:  8 }, { item: Item.JUEYUN_CHILI, amount: 30 }, { item: Item.SLIME_SECRETIONS,  amount: 18 }], 
            "70+": [{ item: Item.NAGADUS_EMERALD_CHUNK,    amount: 6 }, { item: Item.QUELLED_CREEPER, amount: 12 }, { item: Item.JUEYUN_CHILI, amount: 45 }, { item: Item.SLIME_CONCENTRATE, amount: 12 }], 
            "80+": [{ item: Item.NAGADUS_EMERALD_GEMSTONE, amount: 6 }, { item: Item.QUELLED_CREEPER, amount: 20 }, { item: Item.JUEYUN_CHILI, amount: 60 }, { item: Item.SLIME_CONCENTRATE, amount: 24 }]
        }}, 
        elements: [{ element: Element.DENDRO, materials: {  
            2:  [{ item: Item.TEACHINGS_OF_DILIGENCE,    amount:  3 }, {item: Item.SLIME_CONDENSATE,  amount:  6 }],                                             
            3:  [{ item: Item.GUIDE_TO_DILIGENCE,        amount:  2 }, {item: Item.SLIME_SECRETIONS,  amount:  3 }],                                             
            4:  [{ item: Item.GUIDE_TO_DILIGENCE,        amount:  4 }, {item: Item.SLIME_SECRETIONS,  amount:  4 }],                                             
            5:  [{ item: Item.GUIDE_TO_DILIGENCE,        amount:  6 }, {item: Item.SLIME_SECRETIONS,  amount:  6 }],                                             
            6:  [{ item: Item.GUIDE_TO_DILIGENCE,        amount:  9 }, {item: Item.SLIME_SECRETIONS,  amount:  9 }],                                             
            7:  [{ item: Item.PHILOSOPHIES_OF_DILIGENCE, amount:  4 }, {item: Item.SLIME_CONCENTRATE, amount:  4 }, { item: Item["DAKA'S_BELL"], amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_DILIGENCE, amount:  6 }, {item: Item.SLIME_CONCENTRATE, amount:  6 }, { item: Item["DAKA'S_BELL"], amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_DILIGENCE, amount: 12 }, {item: Item.SLIME_CONCENTRATE, amount:  9 }, { item: Item["DAKA'S_BELL"], amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_DILIGENCE, amount: 16 }, {item: Item.SLIME_CONCENTRATE, amount: 12 }, { item: Item["DAKA'S_BELL"], amount: 2 }] 
        }}]
    }); static ALHAITHAM          = new CharacterEntity({ name: "ALHAITHAM",          rarity: 5, /* FINISHED v2 */ 
        level: { materials: {
            "20+": [{ item: Item.NAGADUS_EMERALD_SLIVER  , amount: 1 },                                                { item: Item.SAND_GREASE_PUPA, amount:  3 }, { item: Item.FADED_RED_SATIN , amount:  3 }],
            "40+": [{ item: Item.NAGADUS_EMERALD_FRAGMENT, amount: 3 }, { item: Item["PSEUDO-STAMENS"], amount:  2 }, { item: Item.SAND_GREASE_PUPA, amount: 10 }, { item: Item.FADED_RED_SATIN , amount: 15 }],
            "50+": [{ item: Item.NAGADUS_EMERALD_FRAGMENT, amount: 6 }, { item: Item["PSEUDO-STAMENS"], amount:  4 }, { item: Item.SAND_GREASE_PUPA, amount: 20 }, { item: Item.TRIMMED_RED_SILK, amount: 12 }],
            "60+": [{ item: Item.NAGADUS_EMERALD_CHUNK   , amount: 3 }, { item: Item["PSEUDO-STAMENS"], amount:  8 }, { item: Item.SAND_GREASE_PUPA, amount: 30 }, { item: Item.TRIMMED_RED_SILK, amount: 18 }],
            "70+": [{ item: Item.NAGADUS_EMERALD_CHUNK   , amount: 6 }, { item: Item["PSEUDO-STAMENS"], amount: 12 }, { item: Item.SAND_GREASE_PUPA, amount: 45 }, { item: Item.RICH_RED_BROCADE, amount: 12 }],
            "80+": [{ item: Item.NAGADUS_EMERALD_GEMSTONE, amount: 6 }, { item: Item["PSEUDO-STAMENS"], amount: 20 }, { item: Item.SAND_GREASE_PUPA, amount: 60 }, { item: Item.RICH_RED_BROCADE, amount: 24 }],
        }},
        elements: [{ element: Element.DENDRO, materials: {
            2:  [{ item: Item.TEACHINGS_OF_INGENUITY   , amount:  3 }, {item: Item.FADED_RED_SATIN , amount:  6 }],
            3:  [{ item: Item.GUIDE_TO_INGENUITY       , amount:  2 }, {item: Item.TRIMMED_RED_SILK, amount:  3 }],
            4:  [{ item: Item.GUIDE_TO_INGENUITY       , amount:  4 }, {item: Item.TRIMMED_RED_SILK, amount:  4 }],
            5:  [{ item: Item.GUIDE_TO_INGENUITY       , amount:  6 }, {item: Item.TRIMMED_RED_SILK, amount:  6 }],
            6:  [{ item: Item.GUIDE_TO_INGENUITY       , amount:  9 }, {item: Item.TRIMMED_RED_SILK, amount:  9 }],
            7:  [{ item: Item.PHILOSOPHIES_OF_INGENUITY, amount:  4 }, {item: Item.RICH_RED_BROCADE, amount:  4 }, { item: Item.MIRROR_OF_MUSHIN, amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_INGENUITY, amount:  6 }, {item: Item.RICH_RED_BROCADE, amount:  6 }, { item: Item.MIRROR_OF_MUSHIN, amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_INGENUITY, amount: 12 }, {item: Item.RICH_RED_BROCADE, amount:  9 }, { item: Item.MIRROR_OF_MUSHIN, amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_INGENUITY, amount: 16 }, {item: Item.RICH_RED_BROCADE, amount: 12 }, { item: Item.MIRROR_OF_MUSHIN, amount: 2 }]
        }}]
    }); static DEHYA              = new CharacterEntity({ name: "DEHYA",              rarity: 5, /* FINISHED v2 */ 
        level: { materials: { 
            "20+": [{ item: Item.AGNIDUS_AGATE_SLIVER,   amount: 1 },                                                        { item: Item.SAND_GREASE_PUPA, amount:  3 }, { item: Item.FADED_RED_SATIN , amount:  3 }], 
            "40+": [{ item: Item.AGNIDUS_AGATE_FRAGMENT, amount: 3 }, { item: Item.LIGHT_GUIDING_TETRAHEDRON, amount:  2 }, { item: Item.SAND_GREASE_PUPA, amount: 10 }, { item: Item.FADED_RED_SATIN , amount: 15 }], 
            "50+": [{ item: Item.AGNIDUS_AGATE_FRAGMENT, amount: 6 }, { item: Item.LIGHT_GUIDING_TETRAHEDRON, amount:  4 }, { item: Item.SAND_GREASE_PUPA, amount: 20 }, { item: Item.TRIMMED_RED_SILK, amount: 12 }], 
            "60+": [{ item: Item.AGNIDUS_AGATE_CHUNK,    amount: 3 }, { item: Item.LIGHT_GUIDING_TETRAHEDRON, amount:  8 }, { item: Item.SAND_GREASE_PUPA, amount: 30 }, { item: Item.TRIMMED_RED_SILK, amount: 18 }], 
            "70+": [{ item: Item.AGNIDUS_AGATE_CHUNK,    amount: 6 }, { item: Item.LIGHT_GUIDING_TETRAHEDRON, amount: 12 }, { item: Item.SAND_GREASE_PUPA, amount: 45 }, { item: Item.RICH_RED_BROCADE, amount: 12 }], 
            "80+": [{ item: Item.AGNIDUS_AGATE_GEMSTONE, amount: 6 }, { item: Item.LIGHT_GUIDING_TETRAHEDRON, amount: 20 }, { item: Item.SAND_GREASE_PUPA, amount: 60 }, { item: Item.RICH_RED_BROCADE, amount: 24 }]
        }}, 
        elements: [{ element: Element.PYRO, materials: { 
            2:  [{ item: Item.TEACHINGS_OF_PRAXIS,    amount:  3 }, {item: Item.FADED_RED_SATIN , amount:  6 }],                                             
            3:  [{ item: Item.GUIDE_TO_PRAXIS,        amount:  2 }, {item: Item.TRIMMED_RED_SILK, amount:  3 }],                                             
            4:  [{ item: Item.GUIDE_TO_PRAXIS,        amount:  4 }, {item: Item.TRIMMED_RED_SILK, amount:  4 }],                                             
            5:  [{ item: Item.GUIDE_TO_PRAXIS,        amount:  6 }, {item: Item.TRIMMED_RED_SILK, amount:  6 }],                                             
            6:  [{ item: Item.GUIDE_TO_PRAXIS,        amount:  9 }, {item: Item.TRIMMED_RED_SILK, amount:  9 }],                                             
            7:  [{ item: Item.PHILOSOPHIES_OF_PRAXIS, amount:  4 }, {item: Item.RICH_RED_BROCADE, amount:  4 }, { item: Item.PUPPET_STRINGS, amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_PRAXIS, amount:  6 }, {item: Item.RICH_RED_BROCADE, amount:  6 }, { item: Item.PUPPET_STRINGS, amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_PRAXIS, amount: 12 }, {item: Item.RICH_RED_BROCADE, amount:  9 }, { item: Item.PUPPET_STRINGS, amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_PRAXIS, amount: 16 }, {item: Item.RICH_RED_BROCADE, amount: 12 }, { item: Item.PUPPET_STRINGS, amount: 2 }] 
        }}]
    }); static MIKA               = new CharacterEntity({ name: "MIKA",               rarity: 4, /* FINISHED v2 */ 
        level: { materials: { 
            "20+": [{ item: Item.SHIVADA_JADE_SLIVER,   amount: 1 },                                                { item: Item.WOLFHOOK, amount:  3 }, { item: Item["RECRUIT'S_INSIGNIA"],    amount:  3 }], 
            "40+": [{ item: Item.SHIVADA_JADE_FRAGMENT, amount: 3 }, { item: Item["PSEUDO-STAMENS"], amount:  2 }, { item: Item.WOLFHOOK, amount: 10 }, { item: Item["RECRUIT'S_INSIGNIA"],    amount: 15 }], 
            "50+": [{ item: Item.SHIVADA_JADE_FRAGMENT, amount: 6 }, { item: Item["PSEUDO-STAMENS"], amount:  4 }, { item: Item.WOLFHOOK, amount: 20 }, { item: Item["SERGEANT'S_INSIGNIA"],   amount: 12 }], 
            "60+": [{ item: Item.SHIVADA_JADE_CHUNK,    amount: 3 }, { item: Item["PSEUDO-STAMENS"], amount:  8 }, { item: Item.WOLFHOOK, amount: 30 }, { item: Item["SERGEANT'S_INSIGNIA"],   amount: 18 }], 
            "70+": [{ item: Item.SHIVADA_JADE_CHUNK,    amount: 6 }, { item: Item["PSEUDO-STAMENS"], amount: 12 }, { item: Item.WOLFHOOK, amount: 45 }, { item: Item["LIEUTENANT'S_INSIGNIA"], amount: 12 }], 
            "80+": [{ item: Item.SHIVADA_JADE_GEMSTONE, amount: 6 }, { item: Item["PSEUDO-STAMENS"], amount: 20 }, { item: Item.WOLFHOOK, amount: 60 }, { item: Item["LIEUTENANT'S_INSIGNIA"], amount: 24 }]
        }}, 
        elements: [{ element: Element.CRYO, materials: {  
            2:  [{ item: Item.TEACHINGS_OF_BALLAD,    amount:  3 }, {item: Item["RECRUIT'S_INSIGNIA"],    amount:  6 }],                                             
            3:  [{ item: Item.GUIDE_TO_BALLAD,        amount:  2 }, {item: Item["SERGEANT'S_INSIGNIA"],   amount:  3 }],                                             
            4:  [{ item: Item.GUIDE_TO_BALLAD,        amount:  4 }, {item: Item["SERGEANT'S_INSIGNIA"],   amount:  4 }],                                             
            5:  [{ item: Item.GUIDE_TO_BALLAD,        amount:  6 }, {item: Item["SERGEANT'S_INSIGNIA"],   amount:  6 }],                                             
            6:  [{ item: Item.GUIDE_TO_BALLAD,        amount:  9 }, {item: Item["SERGEANT'S_INSIGNIA"],   amount:  9 }],                                             
            7:  [{ item: Item.PHILOSOPHIES_OF_BALLAD, amount:  4 }, {item: Item["LIEUTENANT'S_INSIGNIA"], amount:  4 }, { item: Item.MIRROR_OF_MUSHIN, amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_BALLAD, amount:  6 }, {item: Item["LIEUTENANT'S_INSIGNIA"], amount:  6 }, { item: Item.MIRROR_OF_MUSHIN, amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_BALLAD, amount: 12 }, {item: Item["LIEUTENANT'S_INSIGNIA"], amount:  9 }, { item: Item.MIRROR_OF_MUSHIN, amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_BALLAD, amount: 16 }, {item: Item["LIEUTENANT'S_INSIGNIA"], amount: 12 }, { item: Item.MIRROR_OF_MUSHIN, amount: 2 }] 
        }}]
    }); static KAVEH              = new CharacterEntity({ name: "KAVEH",              rarity: 4, /* FINISHED v2 */ 
        level: { materials: { 
            "20+": [{ item: Item.VAJRADA_AMETHYST_SLIVER,   amount: 1 },                                              { item: Item.MOURNING_FLOWER, amount:  3 }, { item: Item.FUNGAL_SPORES        , amount:  3 }], 
            "40+": [{ item: Item.VAJRADA_AMETHYST_FRAGMENT, amount: 3 }, { item: Item.QUELLED_CREEPER, amount:  2 }, { item: Item.MOURNING_FLOWER, amount: 10 }, { item: Item.FUNGAL_SPORES        , amount: 15 }], 
            "50+": [{ item: Item.VAJRADA_AMETHYST_FRAGMENT, amount: 6 }, { item: Item.QUELLED_CREEPER, amount:  4 }, { item: Item.MOURNING_FLOWER, amount: 20 }, { item: Item.LUMINESCENT_POLLEN   , amount: 12 }], 
            "60+": [{ item: Item.VAJRADA_AMETHYST_CHUNK,    amount: 3 }, { item: Item.QUELLED_CREEPER, amount:  8 }, { item: Item.MOURNING_FLOWER, amount: 30 }, { item: Item.LUMINESCENT_POLLEN   , amount: 18 }], 
            "70+": [{ item: Item.VAJRADA_AMETHYST_CHUNK,    amount: 6 }, { item: Item.QUELLED_CREEPER, amount: 12 }, { item: Item.MOURNING_FLOWER, amount: 45 }, { item: Item.CRYSTALLINE_CYST_DUST, amount: 12 }], 
            "80+": [{ item: Item.VAJRADA_AMETHYST_GEMSTONE, amount: 6 }, { item: Item.QUELLED_CREEPER, amount: 20 }, { item: Item.MOURNING_FLOWER, amount: 60 }, { item: Item.CRYSTALLINE_CYST_DUST, amount: 24 }]
        }}, 
        elements: [{ element: Element.DENDRO, materials: { 
            2:  [{ item: Item.TEACHINGS_OF_INGENUITY,    amount:  3 }, {item: Item.FUNGAL_SPORES,         amount:  6 }],                                             
            3:  [{ item: Item.GUIDE_TO_INGENUITY,        amount:  2 }, {item: Item.LUMINESCENT_POLLEN,    amount:  3 }],                                             
            4:  [{ item: Item.GUIDE_TO_INGENUITY,        amount:  4 }, {item: Item.LUMINESCENT_POLLEN,    amount:  4 }],                                             
            5:  [{ item: Item.GUIDE_TO_INGENUITY,        amount:  6 }, {item: Item.LUMINESCENT_POLLEN,    amount:  6 }],                                             
            6:  [{ item: Item.GUIDE_TO_INGENUITY,        amount:  9 }, {item: Item.LUMINESCENT_POLLEN,    amount:  9 }],                                             
            7:  [{ item: Item.PHILOSOPHIES_OF_INGENUITY, amount:  4 }, {item: Item.CRYSTALLINE_CYST_DUST, amount:  4 }, { item: Item.PRIMORDIAL_GREENBLOOM, amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_INGENUITY, amount:  6 }, {item: Item.CRYSTALLINE_CYST_DUST, amount:  6 }, { item: Item.PRIMORDIAL_GREENBLOOM, amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_INGENUITY, amount: 12 }, {item: Item.CRYSTALLINE_CYST_DUST, amount:  9 }, { item: Item.PRIMORDIAL_GREENBLOOM, amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_INGENUITY, amount: 16 }, {item: Item.CRYSTALLINE_CYST_DUST, amount: 12 }, { item: Item.PRIMORDIAL_GREENBLOOM, amount: 2 }] 
        }}]
    }); static BAIZHU             = new CharacterEntity({ name: "BAIZHU",             rarity: 5, /* FINISHED v2 */ 
        level: { materials: { 
            "20+": [{ item: Item.VAJRADA_AMETHYST_SLIVER,   amount: 1 },                                             { item: Item.VIOLETGRASS, amount:  3 }, { item: Item.FUNGAL_SPORES,         amount:  3 }], 
            "40+": [{ item: Item.VAJRADA_AMETHYST_FRAGMENT, amount: 3 }, { item: Item.EVERGLOOM_RING, amount:  2 }, { item: Item.VIOLETGRASS, amount: 10 }, { item: Item.FUNGAL_SPORES,         amount: 15 }], 
            "50+": [{ item: Item.VAJRADA_AMETHYST_FRAGMENT, amount: 6 }, { item: Item.EVERGLOOM_RING, amount:  4 }, { item: Item.VIOLETGRASS, amount: 20 }, { item: Item.LUMINESCENT_POLLEN,    amount: 12 }], 
            "60+": [{ item: Item.VAJRADA_AMETHYST_CHUNK,    amount: 3 }, { item: Item.EVERGLOOM_RING, amount:  8 }, { item: Item.VIOLETGRASS, amount: 30 }, { item: Item.LUMINESCENT_POLLEN,    amount: 18 }], 
            "70+": [{ item: Item.VAJRADA_AMETHYST_CHUNK,    amount: 6 }, { item: Item.EVERGLOOM_RING, amount: 12 }, { item: Item.VIOLETGRASS, amount: 45 }, { item: Item.CRYSTALLINE_CYST_DUST, amount: 12 }], 
            "80+": [{ item: Item.VAJRADA_AMETHYST_GEMSTONE, amount: 6 }, { item: Item.EVERGLOOM_RING, amount: 20 }, { item: Item.VIOLETGRASS, amount: 60 }, { item: Item.CRYSTALLINE_CYST_DUST, amount: 24 }]
        }}, 
        elements: [{ element: Element.DENDRO, materials: { 
            2:  [{ item: Item.TEACHINGS_OF_GOLD,    amount:  3 }, {item: Item.FUNGAL_SPORES,         amount:  6 }],                                             
            3:  [{ item: Item.GUIDE_TO_GOLD,        amount:  2 }, {item: Item.LUMINESCENT_POLLEN,    amount:  3 }],                                             
            4:  [{ item: Item.GUIDE_TO_GOLD,        amount:  4 }, {item: Item.LUMINESCENT_POLLEN,    amount:  4 }],                                             
            5:  [{ item: Item.GUIDE_TO_GOLD,        amount:  6 }, {item: Item.LUMINESCENT_POLLEN,    amount:  6 }],                                             
            6:  [{ item: Item.GUIDE_TO_GOLD,        amount:  9 }, {item: Item.LUMINESCENT_POLLEN,    amount:  9 }],                                             
            7:  [{ item: Item.PHILOSOPHIES_OF_GOLD, amount:  4 }, {item: Item.CRYSTALLINE_CYST_DUST, amount:  4 }, { item: Item.WORLDSPAN_FERN, amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_GOLD, amount:  6 }, {item: Item.CRYSTALLINE_CYST_DUST, amount:  6 }, { item: Item.WORLDSPAN_FERN, amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_GOLD, amount: 12 }, {item: Item.CRYSTALLINE_CYST_DUST, amount:  9 }, { item: Item.WORLDSPAN_FERN, amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_GOLD, amount: 16 }, {item: Item.CRYSTALLINE_CYST_DUST, amount: 12 }, { item: Item.WORLDSPAN_FERN, amount: 2 }] 
        }}]
    }); static KIRARA             = new CharacterEntity({ name: "KIRARA",             rarity: 4, /* FINISHED v2 */ 
        level: { materials: {
            "20+": [{ item: Item.NAGADUS_EMERALD_SLIVER  , amount: 1 },                                             { item: Item.AMAKUMO_FRUIT, amount:  3 }, { item: Item.SPECTRAL_HUSK   , amount:  3 }],
            "40+": [{ item: Item.NAGADUS_EMERALD_FRAGMENT, amount: 3 }, { item: Item.EVERGLOOM_RING, amount:  2 }, { item: Item.AMAKUMO_FRUIT, amount: 10 }, { item: Item.SPECTRAL_HUSK   , amount: 15 }],
            "50+": [{ item: Item.NAGADUS_EMERALD_FRAGMENT, amount: 6 }, { item: Item.EVERGLOOM_RING, amount:  4 }, { item: Item.AMAKUMO_FRUIT, amount: 20 }, { item: Item.SPECTRAL_HEART  , amount: 12 }],
            "60+": [{ item: Item.NAGADUS_EMERALD_CHUNK   , amount: 3 }, { item: Item.EVERGLOOM_RING, amount:  8 }, { item: Item.AMAKUMO_FRUIT, amount: 30 }, { item: Item.SPECTRAL_HEART  , amount: 18 }],
            "70+": [{ item: Item.NAGADUS_EMERALD_CHUNK   , amount: 6 }, { item: Item.EVERGLOOM_RING, amount: 12 }, { item: Item.AMAKUMO_FRUIT, amount: 45 }, { item: Item.SPECTRAL_NUCLEUS, amount: 12 }],
            "80+": [{ item: Item.NAGADUS_EMERALD_GEMSTONE, amount: 6 }, { item: Item.EVERGLOOM_RING, amount: 20 }, { item: Item.AMAKUMO_FRUIT, amount: 60 }, { item: Item.SPECTRAL_NUCLEUS, amount: 24 }],
        }},
        elements: [{ element: Element.DENDRO, materials: {
            2:  [{ item: Item.TEACHINGS_OF_TRANSIENCE   , amount:  3 }, {item: Item.SPECTRAL_HUSK   , amount:  6 }],
            3:  [{ item: Item.GUIDE_TO_TRANSIENCE       , amount:  2 }, {item: Item.SPECTRAL_HEART  , amount:  3 }],
            4:  [{ item: Item.GUIDE_TO_TRANSIENCE       , amount:  4 }, {item: Item.SPECTRAL_HEART  , amount:  4 }],
            5:  [{ item: Item.GUIDE_TO_TRANSIENCE       , amount:  6 }, {item: Item.SPECTRAL_HEART  , amount:  6 }],
            6:  [{ item: Item.GUIDE_TO_TRANSIENCE       , amount:  9 }, {item: Item.SPECTRAL_HEART  , amount:  9 }],
            7:  [{ item: Item.PHILOSOPHIES_OF_TRANSIENCE, amount:  4 }, {item: Item.SPECTRAL_NUCLEUS, amount:  4 }, { item: Item.EVERAMBER, amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_TRANSIENCE, amount:  6 }, {item: Item.SPECTRAL_NUCLEUS, amount:  6 }, { item: Item.EVERAMBER, amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_TRANSIENCE, amount: 12 }, {item: Item.SPECTRAL_NUCLEUS, amount:  9 }, { item: Item.EVERAMBER, amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_TRANSIENCE, amount: 16 }, {item: Item.SPECTRAL_NUCLEUS, amount: 12 }, { item: Item.EVERAMBER, amount: 2 }]
        }}]
    }); static LYNETTE            = new CharacterEntity({ name: "LYNETTE",            rarity: 4, /* FINISHED v2 */ 
        level: { materials: {
            "20+": [{ item: Item.VAYUDA_TURQUOISE_SLIVER  , amount: 1 },                                                                               { item: Item.LUMIDOUCE_BELL, amount:  3 }, { item: Item.MESHING_GEAR          , amount:  3 }],
            "40+": [{ item: Item.VAYUDA_TURQUOISE_FRAGMENT, amount: 3 }, { item: Item["ARTIFICED_SPARE_CLOCKWORK_COMPONENT__COPPELIA"], amount:  2 }, { item: Item.LUMIDOUCE_BELL, amount: 10 }, { item: Item.MESHING_GEAR          , amount: 15 }],
            "50+": [{ item: Item.VAYUDA_TURQUOISE_FRAGMENT, amount: 6 }, { item: Item["ARTIFICED_SPARE_CLOCKWORK_COMPONENT__COPPELIA"], amount:  4 }, { item: Item.LUMIDOUCE_BELL, amount: 20 }, { item: Item.MECHANICAL_SPUR_GEAR  , amount: 12 }],
            "60+": [{ item: Item.VAYUDA_TURQUOISE_CHUNK   , amount: 3 }, { item: Item["ARTIFICED_SPARE_CLOCKWORK_COMPONENT__COPPELIA"], amount:  8 }, { item: Item.LUMIDOUCE_BELL, amount: 30 }, { item: Item.MECHANICAL_SPUR_GEAR  , amount: 18 }],
            "70+": [{ item: Item.VAYUDA_TURQUOISE_CHUNK   , amount: 6 }, { item: Item["ARTIFICED_SPARE_CLOCKWORK_COMPONENT__COPPELIA"], amount: 12 }, { item: Item.LUMIDOUCE_BELL, amount: 45 }, { item: Item.ARTIFICED_DYNAMIC_GEAR, amount: 12 }],
            "80+": [{ item: Item.VAYUDA_TURQUOISE_GEMSTONE, amount: 6 }, { item: Item["ARTIFICED_SPARE_CLOCKWORK_COMPONENT__COPPELIA"], amount: 20 }, { item: Item.LUMIDOUCE_BELL, amount: 60 }, { item: Item.ARTIFICED_DYNAMIC_GEAR, amount: 24 }],
        }},
        elements: [{ element: Element.ANEMO, materials: {
            2:  [{ item: Item.TEACHINGS_OF_ORDER   , amount:  3 }, {item: Item.MESHING_GEAR          , amount:  6 }],
            3:  [{ item: Item.GUIDE_TO_ORDER       , amount:  2 }, {item: Item.MECHANICAL_SPUR_GEAR  , amount:  3 }],
            4:  [{ item: Item.GUIDE_TO_ORDER       , amount:  4 }, {item: Item.MECHANICAL_SPUR_GEAR  , amount:  4 }],
            5:  [{ item: Item.GUIDE_TO_ORDER       , amount:  6 }, {item: Item.MECHANICAL_SPUR_GEAR  , amount:  6 }],
            6:  [{ item: Item.GUIDE_TO_ORDER       , amount:  9 }, {item: Item.MECHANICAL_SPUR_GEAR  , amount:  9 }],
            7:  [{ item: Item.PHILOSOPHIES_OF_ORDER, amount:  4 }, {item: Item.ARTIFICED_DYNAMIC_GEAR, amount:  4 }, { item: Item.EVERAMBER, amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_ORDER, amount:  6 }, {item: Item.ARTIFICED_DYNAMIC_GEAR, amount:  6 }, { item: Item.EVERAMBER, amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_ORDER, amount: 12 }, {item: Item.ARTIFICED_DYNAMIC_GEAR, amount:  9 }, { item: Item.EVERAMBER, amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_ORDER, amount: 16 }, {item: Item.ARTIFICED_DYNAMIC_GEAR, amount: 12 }, { item: Item.EVERAMBER, amount: 2 }]
        }}]
    }); static LYNEY              = new CharacterEntity({ name: "LYNEY",              rarity: 5, /* FINISHED v2 */ 
        level: { materials: {
            "20+": [{ item: Item.AGNIDUS_AGATE_SLIVER  , amount: 1 },                                                      { item: Item.RAINBOW_ROSE, amount:  3 }, { item: Item["RECRUIT'S_INSIGNIA"]   , amount:  3 }],
            "40+": [{ item: Item.AGNIDUS_AGATE_FRAGMENT, amount: 3 }, { item: Item["EMPEROR'S_RESOLUTION"], amount:  2 }, { item: Item.RAINBOW_ROSE, amount: 10 }, { item: Item["RECRUIT'S_INSIGNIA"]   , amount: 15 }],
            "50+": [{ item: Item.AGNIDUS_AGATE_FRAGMENT, amount: 6 }, { item: Item["EMPEROR'S_RESOLUTION"], amount:  4 }, { item: Item.RAINBOW_ROSE, amount: 20 }, { item: Item["SERGEANT'S_INSIGNIA"]  , amount: 12 }],
            "60+": [{ item: Item.AGNIDUS_AGATE_CHUNK   , amount: 3 }, { item: Item["EMPEROR'S_RESOLUTION"], amount:  8 }, { item: Item.RAINBOW_ROSE, amount: 30 }, { item: Item["SERGEANT'S_INSIGNIA"]  , amount: 18 }],
            "70+": [{ item: Item.AGNIDUS_AGATE_CHUNK   , amount: 6 }, { item: Item["EMPEROR'S_RESOLUTION"], amount: 12 }, { item: Item.RAINBOW_ROSE, amount: 45 }, { item: Item["LIEUTENANT'S_INSIGNIA"], amount: 12 }],
            "80+": [{ item: Item.AGNIDUS_AGATE_GEMSTONE, amount: 6 }, { item: Item["EMPEROR'S_RESOLUTION"], amount: 20 }, { item: Item.RAINBOW_ROSE, amount: 60 }, { item: Item["LIEUTENANT'S_INSIGNIA"], amount: 24 }],
        }},
        elements: [{ element: Element.PYRO, materials: {
            2:  [{ item: Item.TEACHINGS_OF_EQUITY   , amount:  3 }, {item: Item["RECRUIT'S_INSIGNIA"]   , amount:  6 }],
            3:  [{ item: Item.GUIDE_TO_EQUITY       , amount:  2 }, {item: Item["SERGEANT'S_INSIGNIA"]  , amount:  3 }],
            4:  [{ item: Item.GUIDE_TO_EQUITY       , amount:  4 }, {item: Item["SERGEANT'S_INSIGNIA"]  , amount:  4 }],
            5:  [{ item: Item.GUIDE_TO_EQUITY       , amount:  6 }, {item: Item["SERGEANT'S_INSIGNIA"]  , amount:  6 }],
            6:  [{ item: Item.GUIDE_TO_EQUITY       , amount:  9 }, {item: Item["SERGEANT'S_INSIGNIA"]  , amount:  9 }],
            7:  [{ item: Item.PHILOSOPHIES_OF_EQUITY, amount:  4 }, {item: Item["LIEUTENANT'S_INSIGNIA"], amount:  4 }, { item: Item.PRIMORDIAL_GREENBLOOM, amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_EQUITY, amount:  6 }, {item: Item["LIEUTENANT'S_INSIGNIA"], amount:  6 }, { item: Item.PRIMORDIAL_GREENBLOOM, amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_EQUITY, amount: 12 }, {item: Item["LIEUTENANT'S_INSIGNIA"], amount:  9 }, { item: Item.PRIMORDIAL_GREENBLOOM, amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_EQUITY, amount: 16 }, {item: Item["LIEUTENANT'S_INSIGNIA"], amount: 12 }, { item: Item.PRIMORDIAL_GREENBLOOM, amount: 2 }]
        }}]
    }); static FREMINET           = new CharacterEntity({ name: "FREMINET",           rarity: 4, /* FINISHED v2 */ 
        level: { materials: {
            "20+": [{ item: Item.SHIVADA_JADE_SLIVER  , amount: 1 },                                                                              { item: Item.ROMARITIME_FLOWER, amount:  3 }, { item: Item.TRANSOCEANIC_PEARL   , amount:  3 }],
            "40+": [{ item: Item.SHIVADA_JADE_FRAGMENT, amount: 3 }, { item: Item.ARTIFICED_SPARE_CLOCKWORK_COMPONENT__COPPELIUS, amount:  2 }, { item: Item.ROMARITIME_FLOWER, amount: 10 }, { item: Item.TRANSOCEANIC_PEARL   , amount: 15 }],
            "50+": [{ item: Item.SHIVADA_JADE_FRAGMENT, amount: 6 }, { item: Item.ARTIFICED_SPARE_CLOCKWORK_COMPONENT__COPPELIUS, amount:  4 }, { item: Item.ROMARITIME_FLOWER, amount: 20 }, { item: Item.TRANSOCEANIC_CHUNK   , amount: 12 }],
            "60+": [{ item: Item.SHIVADA_JADE_CHUNK   , amount: 3 }, { item: Item.ARTIFICED_SPARE_CLOCKWORK_COMPONENT__COPPELIUS, amount:  8 }, { item: Item.ROMARITIME_FLOWER, amount: 30 }, { item: Item.TRANSOCEANIC_CHUNK   , amount: 18 }],
            "70+": [{ item: Item.SHIVADA_JADE_CHUNK   , amount: 6 }, { item: Item.ARTIFICED_SPARE_CLOCKWORK_COMPONENT__COPPELIUS, amount: 12 }, { item: Item.ROMARITIME_FLOWER, amount: 45 }, { item: Item.XENOCHROMATIC_CRYSTAL, amount: 12 }],
            "80+": [{ item: Item.SHIVADA_JADE_GEMSTONE, amount: 6 }, { item: Item.ARTIFICED_SPARE_CLOCKWORK_COMPONENT__COPPELIUS, amount: 20 }, { item: Item.ROMARITIME_FLOWER, amount: 60 }, { item: Item.XENOCHROMATIC_CRYSTAL, amount: 24 }],
        }},
        elements: [{ element: Element.CRYO, materials: {
            2:  [{ item: Item.TEACHINGS_OF_JUSTICE   , amount:  3 }, {item: Item.TRANSOCEANIC_PEARL   , amount:  6 }],
            3:  [{ item: Item.GUIDE_TO_JUSTICE       , amount:  2 }, {item: Item.TRANSOCEANIC_CHUNK   , amount:  3 }],
            4:  [{ item: Item.GUIDE_TO_JUSTICE       , amount:  4 }, {item: Item.TRANSOCEANIC_CHUNK   , amount:  4 }],
            5:  [{ item: Item.GUIDE_TO_JUSTICE       , amount:  6 }, {item: Item.TRANSOCEANIC_CHUNK   , amount:  6 }],
            6:  [{ item: Item.GUIDE_TO_JUSTICE       , amount:  9 }, {item: Item.TRANSOCEANIC_CHUNK   , amount:  9 }],
            7:  [{ item: Item.PHILOSOPHIES_OF_JUSTICE, amount:  4 }, {item: Item.XENOCHROMATIC_CRYSTAL, amount:  4 }, { item: Item.WORLDSPAN_FERN, amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_JUSTICE, amount:  6 }, {item: Item.XENOCHROMATIC_CRYSTAL, amount:  6 }, { item: Item.WORLDSPAN_FERN, amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_JUSTICE, amount: 12 }, {item: Item.XENOCHROMATIC_CRYSTAL, amount:  9 }, { item: Item.WORLDSPAN_FERN, amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_JUSTICE, amount: 16 }, {item: Item.XENOCHROMATIC_CRYSTAL, amount: 12 }, { item: Item.WORLDSPAN_FERN, amount: 2 }]
        }}]
    }); static NEUVILLETTE        = new CharacterEntity({ name: "NEUVILLETTE",        rarity: 5, /* FINISHED v2 */ 
        level: { materials: { 
            "20+": [{ item: Item.VARUNADA_LAZURITE_SLIVER,   amount: 1 },                                               { item: Item.LUMITOILE, amount:  3 }, { item: Item.TRANSOCEANIC_PEARL,    amount:  3 }], 
            "40+": [{ item: Item.VARUNADA_LAZURITE_FRAGMENT, amount: 3 }, { item: Item.FONTEMER_UNIHORN, amount:  2 }, { item: Item.LUMITOILE, amount: 10 }, { item: Item.TRANSOCEANIC_PEARL,    amount: 15 }], 
            "50+": [{ item: Item.VARUNADA_LAZURITE_FRAGMENT, amount: 6 }, { item: Item.FONTEMER_UNIHORN, amount:  4 }, { item: Item.LUMITOILE, amount: 20 }, { item: Item.TRANSOCEANIC_CHUNK,    amount: 12 }], 
            "60+": [{ item: Item.VARUNADA_LAZURITE_CHUNK,    amount: 3 }, { item: Item.FONTEMER_UNIHORN, amount:  8 }, { item: Item.LUMITOILE, amount: 30 }, { item: Item.TRANSOCEANIC_CHUNK,    amount: 18 }], 
            "70+": [{ item: Item.VARUNADA_LAZURITE_CHUNK,    amount: 6 }, { item: Item.FONTEMER_UNIHORN, amount: 12 }, { item: Item.LUMITOILE, amount: 45 }, { item: Item.XENOCHROMATIC_CRYSTAL, amount: 12 }], 
            "80+": [{ item: Item.VARUNADA_LAZURITE_GEMSTONE, amount: 6 }, { item: Item.FONTEMER_UNIHORN, amount: 20 }, { item: Item.LUMITOILE, amount: 60 }, { item: Item.XENOCHROMATIC_CRYSTAL, amount: 24 }]
        }}, 
        elements: [{ element: Element.HYDRO, materials: { 
            2:  [{ item: Item.TEACHINGS_OF_EQUITY,    amount:  3 }, { item: Item.TRANSOCEANIC_PEARL,    amount:  6 }], 
            3:  [{ item: Item.GUIDE_TO_EQUITY,        amount:  2 }, { item: Item.TRANSOCEANIC_CHUNK,    amount:  3 }], 
            4:  [{ item: Item.GUIDE_TO_EQUITY,        amount:  4 }, { item: Item.TRANSOCEANIC_CHUNK,    amount:  4 }], 
            5:  [{ item: Item.GUIDE_TO_EQUITY,        amount:  6 }, { item: Item.TRANSOCEANIC_CHUNK,    amount:  6 }],
            6:  [{ item: Item.GUIDE_TO_EQUITY,        amount:  9 }, { item: Item.TRANSOCEANIC_CHUNK,    amount:  9 }],
            7:  [{ item: Item.PHILOSOPHIES_OF_EQUITY, amount:  4 }, { item: Item.XENOCHROMATIC_CRYSTAL, amount:  4 }, { item: Item.EVERAMBER, amount: 1 }], 
            8:  [{ item: Item.PHILOSOPHIES_OF_EQUITY, amount:  6 }, { item: Item.XENOCHROMATIC_CRYSTAL, amount:  6 }, { item: Item.EVERAMBER, amount: 1 }], 
            9:  [{ item: Item.PHILOSOPHIES_OF_EQUITY, amount: 12 }, { item: Item.XENOCHROMATIC_CRYSTAL, amount:  9 }, { item: Item.EVERAMBER, amount: 2 }], 
            10: [{ item: Item.PHILOSOPHIES_OF_EQUITY, amount: 16 }, { item: Item.XENOCHROMATIC_CRYSTAL, amount: 12 }, { item: Item.EVERAMBER, amount: 2 }] 
        }}]
    }); static WRIOTHESLEY        = new CharacterEntity({ name: "WRIOTHESLEY",        rarity: 5, /* FINISHED v2 */ 
        level: { materials: {
            "20+": [{ item: Item.SHIVADA_JADE_SLIVER  , amount: 1 },                                                       { item: Item.SUBDETECTION_UNIT, amount:  3 }, { item: Item.MESHING_GEAR          , amount:  3 }],
            "40+": [{ item: Item.SHIVADA_JADE_FRAGMENT, amount: 3 }, { item: Item["\"TOURBILLON_DEVICE\""], amount:  2 }, { item: Item.SUBDETECTION_UNIT, amount: 10 }, { item: Item.MESHING_GEAR          , amount: 15 }],
            "50+": [{ item: Item.SHIVADA_JADE_FRAGMENT, amount: 6 }, { item: Item["\"TOURBILLON_DEVICE\""], amount:  4 }, { item: Item.SUBDETECTION_UNIT, amount: 20 }, { item: Item.MECHANICAL_SPUR_GEAR  , amount: 12 }],
            "60+": [{ item: Item.SHIVADA_JADE_CHUNK   , amount: 3 }, { item: Item["\"TOURBILLON_DEVICE\""], amount:  8 }, { item: Item.SUBDETECTION_UNIT, amount: 30 }, { item: Item.MECHANICAL_SPUR_GEAR  , amount: 18 }],
            "70+": [{ item: Item.SHIVADA_JADE_CHUNK   , amount: 6 }, { item: Item["\"TOURBILLON_DEVICE\""], amount: 12 }, { item: Item.SUBDETECTION_UNIT, amount: 45 }, { item: Item.ARTIFICED_DYNAMIC_GEAR, amount: 12 }],
            "80+": [{ item: Item.SHIVADA_JADE_GEMSTONE, amount: 6 }, { item: Item["\"TOURBILLON_DEVICE\""], amount: 20 }, { item: Item.SUBDETECTION_UNIT, amount: 60 }, { item: Item.ARTIFICED_DYNAMIC_GEAR, amount: 24 }],
        }},
        elements: [{ element: Element.CRYO, materials: {
            2:  [{ item: Item.TEACHINGS_OF_ORDER   , amount:  3 }, {item: Item.MESHING_GEAR          , amount:  6 }],
            3:  [{ item: Item.GUIDE_TO_ORDER       , amount:  2 }, {item: Item.MECHANICAL_SPUR_GEAR  , amount:  3 }],
            4:  [{ item: Item.GUIDE_TO_ORDER       , amount:  4 }, {item: Item.MECHANICAL_SPUR_GEAR  , amount:  4 }],
            5:  [{ item: Item.GUIDE_TO_ORDER       , amount:  6 }, {item: Item.MECHANICAL_SPUR_GEAR  , amount:  6 }],
            6:  [{ item: Item.GUIDE_TO_ORDER       , amount:  9 }, {item: Item.MECHANICAL_SPUR_GEAR  , amount:  9 }],
            7:  [{ item: Item.PHILOSOPHIES_OF_ORDER, amount:  4 }, {item: Item.ARTIFICED_DYNAMIC_GEAR, amount:  4 }, { item: Item.PRIMORDIAL_GREENBLOOM, amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_ORDER, amount:  6 }, {item: Item.ARTIFICED_DYNAMIC_GEAR, amount:  6 }, { item: Item.PRIMORDIAL_GREENBLOOM, amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_ORDER, amount: 12 }, {item: Item.ARTIFICED_DYNAMIC_GEAR, amount:  9 }, { item: Item.PRIMORDIAL_GREENBLOOM, amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_ORDER, amount: 16 }, {item: Item.ARTIFICED_DYNAMIC_GEAR, amount: 12 }, { item: Item.PRIMORDIAL_GREENBLOOM, amount: 2 }]
        }}]    
    }); static CHARLOTTE          = new CharacterEntity({ name: "CHARLOTTE",          rarity: 4, /* FINISHED v2 */ 
        level: { materials: { 
            "20+": [{ item: Item.SHIVADA_JADE_SLIVER,   amount: 1 },                                                       { item: Item.BERYL_CONCH, amount:  3 }, { item: Item.MESHING_GEAR          , amount:  3 }], 
            "40+": [{ item: Item.SHIVADA_JADE_FRAGMENT, amount: 3 }, { item: Item["\"TOURBILLON_DEVICE\""], amount:  2 }, { item: Item.BERYL_CONCH, amount: 10 }, { item: Item.MESHING_GEAR          , amount: 15 }], 
            "50+": [{ item: Item.SHIVADA_JADE_FRAGMENT, amount: 6 }, { item: Item["\"TOURBILLON_DEVICE\""], amount:  4 }, { item: Item.BERYL_CONCH, amount: 20 }, { item: Item.MECHANICAL_SPUR_GEAR  , amount: 12 }], 
            "60+": [{ item: Item.SHIVADA_JADE_CHUNK,    amount: 3 }, { item: Item["\"TOURBILLON_DEVICE\""], amount:  8 }, { item: Item.BERYL_CONCH, amount: 30 }, { item: Item.MECHANICAL_SPUR_GEAR  , amount: 18 }], 
            "70+": [{ item: Item.SHIVADA_JADE_CHUNK,    amount: 6 }, { item: Item["\"TOURBILLON_DEVICE\""], amount: 12 }, { item: Item.BERYL_CONCH, amount: 45 }, { item: Item.ARTIFICED_DYNAMIC_GEAR, amount: 12 }], 
            "80+": [{ item: Item.SHIVADA_JADE_GEMSTONE, amount: 6 }, { item: Item["\"TOURBILLON_DEVICE\""], amount: 20 }, { item: Item.BERYL_CONCH, amount: 60 }, { item: Item.ARTIFICED_DYNAMIC_GEAR, amount: 24 }]
        }}, 
        elements: [{ element: Element.CRYO, materials: { 
            2:  [{ item: Item.TEACHINGS_OF_JUSTICE   , amount:  3 }, {item: Item.MESHING_GEAR          , amount:  6 }],                                             
            3:  [{ item: Item.GUIDE_TO_JUSTICE       , amount:  2 }, {item: Item.MECHANICAL_SPUR_GEAR  , amount:  3 }],                                             
            4:  [{ item: Item.GUIDE_TO_JUSTICE       , amount:  4 }, {item: Item.MECHANICAL_SPUR_GEAR  , amount:  4 }],                                             
            5:  [{ item: Item.GUIDE_TO_JUSTICE       , amount:  6 }, {item: Item.MECHANICAL_SPUR_GEAR  , amount:  6 }],                                             
            6:  [{ item: Item.GUIDE_TO_JUSTICE       , amount:  9 }, {item: Item.MECHANICAL_SPUR_GEAR  , amount:  9 }],                                             
            7:  [{ item: Item.PHILOSOPHIES_OF_JUSTICE, amount:  4 }, {item: Item.ARTIFICED_DYNAMIC_GEAR, amount:  4 }, { item: Item.LIGHTLESS_SILK_STRING, amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_JUSTICE, amount:  6 }, {item: Item.ARTIFICED_DYNAMIC_GEAR, amount:  6 }, { item: Item.LIGHTLESS_SILK_STRING, amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_JUSTICE, amount: 12 }, {item: Item.ARTIFICED_DYNAMIC_GEAR, amount:  9 }, { item: Item.LIGHTLESS_SILK_STRING, amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_JUSTICE, amount: 16 }, {item: Item.ARTIFICED_DYNAMIC_GEAR, amount: 12 }, { item: Item.LIGHTLESS_SILK_STRING, amount: 2 }] 
        }}]
    }); static FURINA             = new CharacterEntity({ name: "FURINA",             rarity: 5, /* FINISHED v2 */ 
        level: { materials : {
            "20+": [{ item: Item.VARUNADA_LAZURITE_SLIVER,   amount: 1 },                                                             { item: Item.LAKELIGHT_LILY, amount:  3 }, { item: Item.WHOPPERFLOWER_NECTAR, amount:  3 }],
            "40+": [{ item: Item.VARUNADA_LAZURITE_FRAGMENT, amount: 3 }, { item: Item.WATER_THAT_FAILED_TO_TRANSCEND, amount:  2 }, { item: Item.LAKELIGHT_LILY, amount: 10 }, { item: Item.WHOPPERFLOWER_NECTAR, amount: 15 }],
            "50+": [{ item: Item.VARUNADA_LAZURITE_FRAGMENT, amount: 6 }, { item: Item.WATER_THAT_FAILED_TO_TRANSCEND, amount:  4 }, { item: Item.LAKELIGHT_LILY, amount: 20 }, { item: Item.SHIMMERING_NECTAR,    amount: 12 }],
            "60+": [{ item: Item.VARUNADA_LAZURITE_CHUNK,    amount: 3 }, { item: Item.WATER_THAT_FAILED_TO_TRANSCEND, amount:  8 }, { item: Item.LAKELIGHT_LILY, amount: 30 }, { item: Item.SHIMMERING_NECTAR,    amount: 18 }],
            "70+": [{ item: Item.VARUNADA_LAZURITE_CHUNK,    amount: 6 }, { item: Item.WATER_THAT_FAILED_TO_TRANSCEND, amount: 12 }, { item: Item.LAKELIGHT_LILY, amount: 45 }, { item: Item.ENERGY_NECTAR,        amount: 12 }],
            "80+": [{ item: Item.VARUNADA_LAZURITE_GEMSTONE, amount: 6 }, { item: Item.WATER_THAT_FAILED_TO_TRANSCEND, amount: 20 }, { item: Item.LAKELIGHT_LILY, amount: 60 }, { item: Item.ENERGY_NECTAR,        amount: 24 }],
        }},
        elements: [{ element: Element.HYDRO, materials: {
             2: [{ item: Item.TEACHINGS_OF_JUSTICE,    amount:  2}, { item: Item.SHIMMERING_NECTAR, amount:  3 }],
             3: [{ item: Item.GUIDE_TO_JUSTICE,        amount:  2}, { item: Item.SHIMMERING_NECTAR, amount:  3 }],
             4: [{ item: Item.GUIDE_TO_JUSTICE,        amount:  4}, { item: Item.SHIMMERING_NECTAR, amount:  4 }],
             5: [{ item: Item.GUIDE_TO_JUSTICE,        amount:  6}, { item: Item.SHIMMERING_NECTAR, amount:  6 }],
             6: [{ item: Item.GUIDE_TO_JUSTICE,        amount:  9}, { item: Item.SHIMMERING_NECTAR, amount:  9 }],
             7: [{ item: Item.PHILOSOPHIES_OF_JUSTICE, amount:  4}, { item: Item.ENERGY_NECTAR,     amount:  4 }, { item: Item.LIGHTLESS_MASS, amount: 1 }],
             8: [{ item: Item.PHILOSOPHIES_OF_JUSTICE, amount:  6}, { item: Item.ENERGY_NECTAR,     amount:  6 }, { item: Item.LIGHTLESS_MASS, amount: 1 }],
             9: [{ item: Item.PHILOSOPHIES_OF_JUSTICE, amount: 12}, { item: Item.ENERGY_NECTAR,     amount:  9 }, { item: Item.LIGHTLESS_MASS, amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_JUSTICE, amount: 16}, { item: Item.ENERGY_NECTAR,     amount: 12 }, { item: Item.LIGHTLESS_MASS, amount: 2 }]
        }}]
    }); static NAVIA              = new CharacterEntity({ name: "NAVIA",              rarity: 5, /* FINISHED v2 */ 
        level: { materials: {
            "20+": [{ item: Item.PRITHIVA_TOPAZ_SLIVER  , amount: 1 },                                                                             { item: Item.SPRING_OF_THE_FIRST_DEWDROP, amount:  3 }, { item: Item.TRANSOCEANIC_PEARL   , amount:  3 }],
            "40+": [{ item: Item.PRITHIVA_TOPAZ_FRAGMENT, amount: 3 }, { item: Item.ARTIFICED_SPARE_CLOCKWORK_COMPONENT__COPPELIUS, amount:  2 }, { item: Item.SPRING_OF_THE_FIRST_DEWDROP, amount: 10 }, { item: Item.TRANSOCEANIC_PEARL   , amount: 15 }],
            "50+": [{ item: Item.PRITHIVA_TOPAZ_FRAGMENT, amount: 6 }, { item: Item.ARTIFICED_SPARE_CLOCKWORK_COMPONENT__COPPELIUS, amount:  4 }, { item: Item.SPRING_OF_THE_FIRST_DEWDROP, amount: 20 }, { item: Item.TRANSOCEANIC_CHUNK   , amount: 12 }],
            "60+": [{ item: Item.PRITHIVA_TOPAZ_CHUNK   , amount: 3 }, { item: Item.ARTIFICED_SPARE_CLOCKWORK_COMPONENT__COPPELIUS, amount:  8 }, { item: Item.SPRING_OF_THE_FIRST_DEWDROP, amount: 30 }, { item: Item.TRANSOCEANIC_CHUNK   , amount: 18 }],
            "70+": [{ item: Item.PRITHIVA_TOPAZ_CHUNK   , amount: 6 }, { item: Item.ARTIFICED_SPARE_CLOCKWORK_COMPONENT__COPPELIUS, amount: 12 }, { item: Item.SPRING_OF_THE_FIRST_DEWDROP, amount: 45 }, { item: Item.XENOCHROMATIC_CRYSTAL, amount: 12 }],
            "80+": [{ item: Item.PRITHIVA_TOPAZ_GEMSTONE, amount: 6 }, { item: Item.ARTIFICED_SPARE_CLOCKWORK_COMPONENT__COPPELIUS, amount: 20 }, { item: Item.SPRING_OF_THE_FIRST_DEWDROP, amount: 60 }, { item: Item.XENOCHROMATIC_CRYSTAL, amount: 24 }],
        }},
        elements: [{ element: Element.GEO, materials: {
            2:  [{ item: Item.TEACHINGS_OF_EQUITY   , amount:  3 }, {item: Item.TRANSOCEANIC_PEARL   , amount:  6 }],
            3:  [{ item: Item.GUIDE_TO_EQUITY       , amount:  2 }, {item: Item.TRANSOCEANIC_CHUNK   , amount:  3 }],
            4:  [{ item: Item.GUIDE_TO_EQUITY       , amount:  4 }, {item: Item.TRANSOCEANIC_CHUNK   , amount:  4 }],
            5:  [{ item: Item.GUIDE_TO_EQUITY       , amount:  6 }, {item: Item.TRANSOCEANIC_CHUNK   , amount:  6 }],
            6:  [{ item: Item.GUIDE_TO_EQUITY       , amount:  9 }, {item: Item.TRANSOCEANIC_CHUNK   , amount:  9 }],
            7:  [{ item: Item.PHILOSOPHIES_OF_EQUITY, amount:  4 }, {item: Item.XENOCHROMATIC_CRYSTAL, amount:  4 }, { item: Item.LIGHTLESS_SILK_STRING, amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_EQUITY, amount:  6 }, {item: Item.XENOCHROMATIC_CRYSTAL, amount:  6 }, { item: Item.LIGHTLESS_SILK_STRING, amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_EQUITY, amount: 12 }, {item: Item.XENOCHROMATIC_CRYSTAL, amount:  9 }, { item: Item.LIGHTLESS_SILK_STRING, amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_EQUITY, amount: 16 }, {item: Item.XENOCHROMATIC_CRYSTAL, amount: 12 }, { item: Item.LIGHTLESS_SILK_STRING, amount: 2 }]
        }}]
    }); static CHEVREUSE          = new CharacterEntity({ name: "CHEVREUSE",          rarity: 4, /* FINISHED v2 */ 
        level: { materials: {
            "20+": [{ item: Item.AGNIDUS_AGATE_SLIVER  , amount: 1 },                                               { item: Item.LUMIDOUCE_BELL, amount:  3 }, { item: Item.MESHING_GEAR          , amount:  3 }],
            "40+": [{ item: Item.AGNIDUS_AGATE_FRAGMENT, amount: 3 }, { item: Item.FONTEMER_UNIHORN, amount:  2 }, { item: Item.LUMIDOUCE_BELL, amount: 10 }, { item: Item.MESHING_GEAR          , amount: 15 }],
            "50+": [{ item: Item.AGNIDUS_AGATE_FRAGMENT, amount: 6 }, { item: Item.FONTEMER_UNIHORN, amount:  4 }, { item: Item.LUMIDOUCE_BELL, amount: 20 }, { item: Item.MECHANICAL_SPUR_GEAR  , amount: 12 }],
            "60+": [{ item: Item.AGNIDUS_AGATE_CHUNK   , amount: 3 }, { item: Item.FONTEMER_UNIHORN, amount:  8 }, { item: Item.LUMIDOUCE_BELL, amount: 30 }, { item: Item.MECHANICAL_SPUR_GEAR  , amount: 18 }],
            "70+": [{ item: Item.AGNIDUS_AGATE_CHUNK   , amount: 6 }, { item: Item.FONTEMER_UNIHORN, amount: 12 }, { item: Item.LUMIDOUCE_BELL, amount: 45 }, { item: Item.ARTIFICED_DYNAMIC_GEAR, amount: 12 }],
            "80+": [{ item: Item.AGNIDUS_AGATE_GEMSTONE, amount: 6 }, { item: Item.FONTEMER_UNIHORN, amount: 20 }, { item: Item.LUMIDOUCE_BELL, amount: 60 }, { item: Item.ARTIFICED_DYNAMIC_GEAR, amount: 24 }],
        }},
        elements: [{ element: Element.PYRO, materials: {
            2:  [{ item: Item.TEACHINGS_OF_ORDER   , amount:  3 }, {item: Item.MESHING_GEAR          , amount:  6 }],
            3:  [{ item: Item.GUIDE_TO_ORDER       , amount:  2 }, {item: Item.MECHANICAL_SPUR_GEAR  , amount:  3 }],
            4:  [{ item: Item.GUIDE_TO_ORDER       , amount:  4 }, {item: Item.MECHANICAL_SPUR_GEAR  , amount:  4 }],
            5:  [{ item: Item.GUIDE_TO_ORDER       , amount:  6 }, {item: Item.MECHANICAL_SPUR_GEAR  , amount:  6 }],
            6:  [{ item: Item.GUIDE_TO_ORDER       , amount:  9 }, {item: Item.MECHANICAL_SPUR_GEAR  , amount:  9 }],
            7:  [{ item: Item.PHILOSOPHIES_OF_ORDER, amount:  4 }, {item: Item.ARTIFICED_DYNAMIC_GEAR, amount:  4 }, { item: Item.LIGHTLESS_EYE_OF_THE_MAELSTROM, amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_ORDER, amount:  6 }, {item: Item.ARTIFICED_DYNAMIC_GEAR, amount:  6 }, { item: Item.LIGHTLESS_EYE_OF_THE_MAELSTROM, amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_ORDER, amount: 12 }, {item: Item.ARTIFICED_DYNAMIC_GEAR, amount:  9 }, { item: Item.LIGHTLESS_EYE_OF_THE_MAELSTROM, amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_ORDER, amount: 16 }, {item: Item.ARTIFICED_DYNAMIC_GEAR, amount: 12 }, { item: Item.LIGHTLESS_EYE_OF_THE_MAELSTROM, amount: 2 }]
        }}]
    }); static GAMING             = new CharacterEntity({ name: "GAMING",             rarity: 4, /* FINISHED v2 */ 
        level: { materials: { 
            "20+": [{ item: Item.AGNIDUS_AGATE_SLIVER,   amount: 1 },                                                      { item: Item.STARCONCH, amount:  3 }, { item: Item.SLIME_CONDENSATE,  amount:  3 }], 
            "40+": [{ item: Item.AGNIDUS_AGATE_FRAGMENT, amount: 3 }, { item: Item["EMPEROR'S_RESOLUTION"], amount:  2 }, { item: Item.STARCONCH, amount: 10 }, { item: Item.SLIME_CONDENSATE,  amount: 15 }], 
            "50+": [{ item: Item.AGNIDUS_AGATE_FRAGMENT, amount: 6 }, { item: Item["EMPEROR'S_RESOLUTION"], amount:  4 }, { item: Item.STARCONCH, amount: 20 }, { item: Item.SLIME_SECRETIONS,  amount: 12 }], 
            "60+": [{ item: Item.AGNIDUS_AGATE_CHUNK,    amount: 3 }, { item: Item["EMPEROR'S_RESOLUTION"], amount:  8 }, { item: Item.STARCONCH, amount: 30 }, { item: Item.SLIME_SECRETIONS,  amount: 18 }], 
            "70+": [{ item: Item.AGNIDUS_AGATE_CHUNK,    amount: 6 }, { item: Item["EMPEROR'S_RESOLUTION"], amount: 12 }, { item: Item.STARCONCH, amount: 45 }, { item: Item.SLIME_CONCENTRATE, amount: 12 }], 
            "80+": [{ item: Item.AGNIDUS_AGATE_GEMSTONE, amount: 6 }, { item: Item["EMPEROR'S_RESOLUTION"], amount: 20 }, { item: Item.STARCONCH, amount: 60 }, { item: Item.SLIME_CONCENTRATE, amount: 24 }]
        }}, 
        elements: [{ element: Element.PYRO, materials: {  
            2:  [{ item: Item.TEACHINGS_OF_PROSPERITY,    amount:  3 }, {item: Item.SLIME_CONDENSATE,  amount:  6 }],                                             
            3:  [{ item: Item.GUIDE_TO_PROSPERITY,        amount:  2 }, {item: Item.SLIME_SECRETIONS,  amount:  3 }],                                             
            4:  [{ item: Item.GUIDE_TO_PROSPERITY,        amount:  4 }, {item: Item.SLIME_SECRETIONS,  amount:  4 }],                                             
            5:  [{ item: Item.GUIDE_TO_PROSPERITY,        amount:  6 }, {item: Item.SLIME_SECRETIONS,  amount:  6 }],                                             
            6:  [{ item: Item.GUIDE_TO_PROSPERITY,        amount:  9 }, {item: Item.SLIME_SECRETIONS,  amount:  9 }],                                             
            7:  [{ item: Item.PHILOSOPHIES_OF_PROSPERITY, amount:  4 }, {item: Item.SLIME_CONCENTRATE, amount:  4 }, { item: Item.LIGHTLESS_MASS, amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_PROSPERITY, amount:  6 }, {item: Item.SLIME_CONCENTRATE, amount:  6 }, { item: Item.LIGHTLESS_MASS, amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_PROSPERITY, amount: 12 }, {item: Item.SLIME_CONCENTRATE, amount:  9 }, { item: Item.LIGHTLESS_MASS, amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_PROSPERITY, amount: 16 }, {item: Item.SLIME_CONCENTRATE, amount: 12 }, { item: Item.LIGHTLESS_MASS, amount: 2 }] 
        }}]
    }); static XIANYUN            = new CharacterEntity({ name: "XIANYUN",            rarity: 5, /* FINISHED v2 */ 
        level: { materials: { 
            "20+": [{ item: Item.VAYUDA_TURQUOISE_SLIVER,   amount: 1 },                                              { item: Item.CLEARWATER_JADE, amount:  3 }, { item: Item.DIVINING_SCROLL,        amount:  3 }], 
            "40+": [{ item: Item.VAYUDA_TURQUOISE_FRAGMENT, amount: 3 }, { item: Item.CLOUDSEAM_SCALE, amount:  2 }, { item: Item.CLEARWATER_JADE, amount: 10 }, { item: Item.DIVINING_SCROLL,        amount: 15 }], 
            "50+": [{ item: Item.VAYUDA_TURQUOISE_FRAGMENT, amount: 6 }, { item: Item.CLOUDSEAM_SCALE, amount:  4 }, { item: Item.CLEARWATER_JADE, amount: 20 }, { item: Item.SEALED_SCROLL,          amount: 12 }], 
            "60+": [{ item: Item.VAYUDA_TURQUOISE_CHUNK,    amount: 3 }, { item: Item.CLOUDSEAM_SCALE, amount:  8 }, { item: Item.CLEARWATER_JADE, amount: 30 }, { item: Item.SEALED_SCROLL,          amount: 18 }], 
            "70+": [{ item: Item.VAYUDA_TURQUOISE_CHUNK,    amount: 6 }, { item: Item.CLOUDSEAM_SCALE, amount: 12 }, { item: Item.CLEARWATER_JADE, amount: 45 }, { item: Item.FORBIDDEN_CURSE_SCROLL, amount: 12 }], 
            "80+": [{ item: Item.VAYUDA_TURQUOISE_GEMSTONE, amount: 6 }, { item: Item.CLOUDSEAM_SCALE, amount: 20 }, { item: Item.CLEARWATER_JADE, amount: 60 }, { item: Item.FORBIDDEN_CURSE_SCROLL, amount: 24 }]
        }}, 
        elements: [{ element: Element.ANEMO, materials: {  
            2:  [{ item: Item.TEACHINGS_OF_GOLD,    amount:  3 }, {item: Item.DIVINING_SCROLL,        amount:  6 }],                                             
            3:  [{ item: Item.GUIDE_TO_GOLD,        amount:  2 }, {item: Item.SEALED_SCROLL,          amount:  3 }],                                             
            4:  [{ item: Item.GUIDE_TO_GOLD,        amount:  4 }, {item: Item.SEALED_SCROLL,          amount:  4 }],                                             
            5:  [{ item: Item.GUIDE_TO_GOLD,        amount:  6 }, {item: Item.SEALED_SCROLL,          amount:  6 }],                                             
            6:  [{ item: Item.GUIDE_TO_GOLD,        amount:  9 }, {item: Item.SEALED_SCROLL,          amount:  9 }],                                             
            7:  [{ item: Item.PHILOSOPHIES_OF_GOLD, amount:  4 }, {item: Item.FORBIDDEN_CURSE_SCROLL, amount:  4 }, { item: Item.LIGHTLESS_EYE_OF_THE_MAELSTROM, amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_GOLD, amount:  6 }, {item: Item.FORBIDDEN_CURSE_SCROLL, amount:  6 }, { item: Item.LIGHTLESS_EYE_OF_THE_MAELSTROM, amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_GOLD, amount: 12 }, {item: Item.FORBIDDEN_CURSE_SCROLL, amount:  9 }, { item: Item.LIGHTLESS_EYE_OF_THE_MAELSTROM, amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_GOLD, amount: 16 }, {item: Item.FORBIDDEN_CURSE_SCROLL, amount: 12 }, { item: Item.LIGHTLESS_EYE_OF_THE_MAELSTROM, amount: 2 }] 
        }}]
    }); static CHIORI             = new CharacterEntity({ name: "CHIORI",             rarity: 5, /* FINISHED v2 */ 
        level: { materials: {
            "20+": [{ item: Item.PRITHIVA_TOPAZ_SLIVER  , amount: 1 },                                                                            { item: Item.DENDROBIUM, amount:  3 }, { item: Item.SPECTRAL_HUSK   , amount:  3 }],
            "40+": [{ item: Item.PRITHIVA_TOPAZ_FRAGMENT, amount: 3 }, { item: Item.ARTIFICED_SPARE_CLOCKWORK_COMPONENT__COPPELIA, amount:  2 }, { item: Item.DENDROBIUM, amount: 10 }, { item: Item.SPECTRAL_HUSK   , amount: 15 }],
            "50+": [{ item: Item.PRITHIVA_TOPAZ_FRAGMENT, amount: 6 }, { item: Item.ARTIFICED_SPARE_CLOCKWORK_COMPONENT__COPPELIA, amount:  4 }, { item: Item.DENDROBIUM, amount: 20 }, { item: Item.SPECTRAL_HEART  , amount: 12 }],
            "60+": [{ item: Item.PRITHIVA_TOPAZ_CHUNK   , amount: 3 }, { item: Item.ARTIFICED_SPARE_CLOCKWORK_COMPONENT__COPPELIA, amount:  8 }, { item: Item.DENDROBIUM, amount: 30 }, { item: Item.SPECTRAL_HEART  , amount: 18 }],
            "70+": [{ item: Item.PRITHIVA_TOPAZ_CHUNK   , amount: 6 }, { item: Item.ARTIFICED_SPARE_CLOCKWORK_COMPONENT__COPPELIA, amount: 12 }, { item: Item.DENDROBIUM, amount: 45 }, { item: Item.SPECTRAL_NUCLEUS, amount: 12 }],
            "80+": [{ item: Item.PRITHIVA_TOPAZ_GEMSTONE, amount: 6 }, { item: Item.ARTIFICED_SPARE_CLOCKWORK_COMPONENT__COPPELIA, amount: 20 }, { item: Item.DENDROBIUM, amount: 60 }, { item: Item.SPECTRAL_NUCLEUS, amount: 24 }],
        }},
        elements: [{ element: Element.GEO, materials: {
            2:  [{ item: Item.TEACHINGS_OF_LIGHT   , amount:  3 }, {item: Item.SPECTRAL_HUSK   , amount:  6 }],
            3:  [{ item: Item.GUIDE_TO_LIGHT       , amount:  2 }, {item: Item.SPECTRAL_HEART  , amount:  3 }],
            4:  [{ item: Item.GUIDE_TO_LIGHT       , amount:  4 }, {item: Item.SPECTRAL_HEART  , amount:  4 }],
            5:  [{ item: Item.GUIDE_TO_LIGHT       , amount:  6 }, {item: Item.SPECTRAL_HEART  , amount:  6 }],
            6:  [{ item: Item.GUIDE_TO_LIGHT       , amount:  9 }, {item: Item.SPECTRAL_HEART  , amount:  9 }],
            7:  [{ item: Item.PHILOSOPHIES_OF_LIGHT, amount:  4 }, {item: Item.SPECTRAL_NUCLEUS, amount:  4 }, { item: Item.LIGHTLESS_SILK_STRING, amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_LIGHT, amount:  6 }, {item: Item.SPECTRAL_NUCLEUS, amount:  6 }, { item: Item.LIGHTLESS_SILK_STRING, amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_LIGHT, amount: 12 }, {item: Item.SPECTRAL_NUCLEUS, amount:  9 }, { item: Item.LIGHTLESS_SILK_STRING, amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_LIGHT, amount: 16 }, {item: Item.SPECTRAL_NUCLEUS, amount: 12 }, { item: Item.LIGHTLESS_SILK_STRING, amount: 2 }]
        }}]
    }); static ARLECCHINO         = new CharacterEntity({ name: "ARLECCHINO",         rarity: 5, /* FINISHED v2 */ 
        level: { materials: {
            "20+": [{ item: Item.AGNIDUS_AGATE_SLIVER  , amount: 1 },                                                          { item: Item.RAINBOW_ROSE, amount:  3 }, { item: Item["RECRUIT'S_INSIGNIA"]   , amount:  3 }],
            "40+": [{ item: Item.AGNIDUS_AGATE_FRAGMENT, amount: 3 }, { item: Item.FRAGMENT_OF_A_GOLDEN_MELODY, amount:  2 }, { item: Item.RAINBOW_ROSE, amount: 10 }, { item: Item["RECRUIT'S_INSIGNIA"]   , amount: 15 }],
            "50+": [{ item: Item.AGNIDUS_AGATE_FRAGMENT, amount: 6 }, { item: Item.FRAGMENT_OF_A_GOLDEN_MELODY, amount:  4 }, { item: Item.RAINBOW_ROSE, amount: 20 }, { item: Item["SERGEANT'S_INSIGNIA"]  , amount: 12 }],
            "60+": [{ item: Item.AGNIDUS_AGATE_CHUNK   , amount: 3 }, { item: Item.FRAGMENT_OF_A_GOLDEN_MELODY, amount:  8 }, { item: Item.RAINBOW_ROSE, amount: 30 }, { item: Item["SERGEANT'S_INSIGNIA"]  , amount: 18 }],
            "70+": [{ item: Item.AGNIDUS_AGATE_CHUNK   , amount: 6 }, { item: Item.FRAGMENT_OF_A_GOLDEN_MELODY, amount: 12 }, { item: Item.RAINBOW_ROSE, amount: 45 }, { item: Item["LIEUTENANT'S_INSIGNIA"], amount: 12 }],
            "80+": [{ item: Item.AGNIDUS_AGATE_GEMSTONE, amount: 6 }, { item: Item.FRAGMENT_OF_A_GOLDEN_MELODY, amount: 20 }, { item: Item.RAINBOW_ROSE, amount: 60 }, { item: Item["LIEUTENANT'S_INSIGNIA"], amount: 24 }],
        }},
        elements: [{ element: Element.PYRO, materials: {
            2:  [{ item: Item.TEACHINGS_OF_ORDER   , amount:  3 }, {item: Item["RECRUIT'S_INSIGNIA"]   , amount:  6 }],
            3:  [{ item: Item.GUIDE_TO_ORDER       , amount:  2 }, {item: Item["SERGEANT'S_INSIGNIA"]  , amount:  3 }],
            4:  [{ item: Item.GUIDE_TO_ORDER       , amount:  4 }, {item: Item["SERGEANT'S_INSIGNIA"]  , amount:  4 }],
            5:  [{ item: Item.GUIDE_TO_ORDER       , amount:  6 }, {item: Item["SERGEANT'S_INSIGNIA"]  , amount:  6 }],
            6:  [{ item: Item.GUIDE_TO_ORDER       , amount:  9 }, {item: Item["SERGEANT'S_INSIGNIA"]  , amount:  9 }],
            7:  [{ item: Item.PHILOSOPHIES_OF_ORDER, amount:  4 }, {item: Item["LIEUTENANT'S_INSIGNIA"], amount:  4 }, { item: Item.FADING_CANDLE, amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_ORDER, amount:  6 }, {item: Item["LIEUTENANT'S_INSIGNIA"], amount:  6 }, { item: Item.FADING_CANDLE, amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_ORDER, amount: 12 }, {item: Item["LIEUTENANT'S_INSIGNIA"], amount:  9 }, { item: Item.FADING_CANDLE, amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_ORDER, amount: 16 }, {item: Item["LIEUTENANT'S_INSIGNIA"], amount: 12 }, { item: Item.FADING_CANDLE, amount: 2 }]
        }}]
    }); static SETHOS             = new CharacterEntity({ name: "SETHOS",             rarity: 4, /* FINISHED v2 */ 
        level: { materials: {
            "20+": [{ item: Item.VAJRADA_AMETHYST_SLIVER  , amount: 1 },                                              { item: Item.TRISHIRAITE, amount:  3 }, { item: Item.FADED_RED_SATIN , amount:  3 }],
            "40+": [{ item: Item.VAJRADA_AMETHYST_FRAGMENT, amount: 3 }, { item: Item.CLOUDSEAM_SCALE, amount:  2 }, { item: Item.TRISHIRAITE, amount: 10 }, { item: Item.FADED_RED_SATIN , amount: 15 }],
            "50+": [{ item: Item.VAJRADA_AMETHYST_FRAGMENT, amount: 6 }, { item: Item.CLOUDSEAM_SCALE, amount:  4 }, { item: Item.TRISHIRAITE, amount: 20 }, { item: Item.TRIMMED_RED_SILK, amount: 12 }],
            "60+": [{ item: Item.VAJRADA_AMETHYST_CHUNK   , amount: 3 }, { item: Item.CLOUDSEAM_SCALE, amount:  8 }, { item: Item.TRISHIRAITE, amount: 30 }, { item: Item.TRIMMED_RED_SILK, amount: 18 }],
            "70+": [{ item: Item.VAJRADA_AMETHYST_CHUNK   , amount: 6 }, { item: Item.CLOUDSEAM_SCALE, amount: 12 }, { item: Item.TRISHIRAITE, amount: 45 }, { item: Item.RICH_RED_BROCADE, amount: 12 }],
            "80+": [{ item: Item.VAJRADA_AMETHYST_GEMSTONE, amount: 6 }, { item: Item.CLOUDSEAM_SCALE, amount: 20 }, { item: Item.TRISHIRAITE, amount: 60 }, { item: Item.RICH_RED_BROCADE, amount: 24 }],
        }},
        elements: [{ element: Element.ELECTRO, materials: {
            2:  [{ item: Item.TEACHINGS_OF_PRAXIS   , amount:  3 }, {item: Item.FADED_RED_SATIN , amount:  6 }],
            3:  [{ item: Item.GUIDE_TO_PRAXIS       , amount:  2 }, {item: Item.TRIMMED_RED_SILK, amount:  3 }],
            4:  [{ item: Item.GUIDE_TO_PRAXIS       , amount:  4 }, {item: Item.TRIMMED_RED_SILK, amount:  4 }],
            5:  [{ item: Item.GUIDE_TO_PRAXIS       , amount:  6 }, {item: Item.TRIMMED_RED_SILK, amount:  6 }],
            6:  [{ item: Item.GUIDE_TO_PRAXIS       , amount:  9 }, {item: Item.TRIMMED_RED_SILK, amount:  9 }],
            7:  [{ item: Item.PHILOSOPHIES_OF_PRAXIS, amount:  4 }, {item: Item.RICH_RED_BROCADE, amount:  4 }, { item: Item["DAKA'S_BELL"], amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_PRAXIS, amount:  6 }, {item: Item.RICH_RED_BROCADE, amount:  6 }, { item: Item["DAKA'S_BELL"], amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_PRAXIS, amount: 12 }, {item: Item.RICH_RED_BROCADE, amount:  9 }, { item: Item["DAKA'S_BELL"], amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_PRAXIS, amount: 16 }, {item: Item.RICH_RED_BROCADE, amount: 12 }, { item: Item["DAKA'S_BELL"], amount: 2 }]
        }}]
    }); static CLORINDE           = new CharacterEntity({ name: "CLORINDE",           rarity: 5, /* FINISHED v2 */ 
        level: { materials: {
            "20+": [{ item: Item.VAJRADA_AMETHYST_SLIVER  , amount: 1 },                                               { item: Item.LUMITOILE, amount:  3 }, { item: Item.TRANSOCEANIC_PEARL   , amount:  3 }],
            "40+": [{ item: Item.VAJRADA_AMETHYST_FRAGMENT, amount: 3 }, { item: Item.FONTEMER_UNIHORN, amount:  2 }, { item: Item.LUMITOILE, amount: 10 }, { item: Item.TRANSOCEANIC_PEARL   , amount: 15 }],
            "50+": [{ item: Item.VAJRADA_AMETHYST_FRAGMENT, amount: 6 }, { item: Item.FONTEMER_UNIHORN, amount:  4 }, { item: Item.LUMITOILE, amount: 20 }, { item: Item.TRANSOCEANIC_CHUNK   , amount: 12 }],
            "60+": [{ item: Item.VAJRADA_AMETHYST_CHUNK   , amount: 3 }, { item: Item.FONTEMER_UNIHORN, amount:  8 }, { item: Item.LUMITOILE, amount: 30 }, { item: Item.TRANSOCEANIC_CHUNK   , amount: 18 }],
            "70+": [{ item: Item.VAJRADA_AMETHYST_CHUNK   , amount: 6 }, { item: Item.FONTEMER_UNIHORN, amount: 12 }, { item: Item.LUMITOILE, amount: 45 }, { item: Item.XENOCHROMATIC_CRYSTAL, amount: 12 }],
            "80+": [{ item: Item.VAJRADA_AMETHYST_GEMSTONE, amount: 6 }, { item: Item.FONTEMER_UNIHORN, amount: 20 }, { item: Item.LUMITOILE, amount: 60 }, { item: Item.XENOCHROMATIC_CRYSTAL, amount: 24 }],
        }},
        elements: [{ element: Element.ELECTRO, materials: {
            2:  [{ item: Item.TEACHINGS_OF_JUSTICE   , amount:  3 }, {item: Item.TRANSOCEANIC_PEARL   , amount:  6 }],
            3:  [{ item: Item.GUIDE_TO_JUSTICE       , amount:  2 }, {item: Item.TRANSOCEANIC_CHUNK   , amount:  3 }],
            4:  [{ item: Item.GUIDE_TO_JUSTICE       , amount:  4 }, {item: Item.TRANSOCEANIC_CHUNK   , amount:  4 }],
            5:  [{ item: Item.GUIDE_TO_JUSTICE       , amount:  6 }, {item: Item.TRANSOCEANIC_CHUNK   , amount:  6 }],
            6:  [{ item: Item.GUIDE_TO_JUSTICE       , amount:  9 }, {item: Item.TRANSOCEANIC_CHUNK   , amount:  9 }],
            7:  [{ item: Item.PHILOSOPHIES_OF_JUSTICE, amount:  4 }, {item: Item.XENOCHROMATIC_CRYSTAL, amount:  4 }, { item: Item.EVERAMBER, amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_JUSTICE, amount:  6 }, {item: Item.XENOCHROMATIC_CRYSTAL, amount:  6 }, { item: Item.EVERAMBER, amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_JUSTICE, amount: 12 }, {item: Item.XENOCHROMATIC_CRYSTAL, amount:  9 }, { item: Item.EVERAMBER, amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_JUSTICE, amount: 16 }, {item: Item.XENOCHROMATIC_CRYSTAL, amount: 12 }, { item: Item.EVERAMBER, amount: 2 }]
        }}]
    }); static SIGEWINNE          = new CharacterEntity({ name: "SIGEWINNE",          rarity: 5, /* FINISHED v2 */ 
        level: { materials: {
            "20+": [{ item: Item.VARUNADA_LAZURITE_SLIVER  , amount: 1 },                                                             { item: Item.ROMARITIME_FLOWER, amount:  3 }, { item: Item.TRANSOCEANIC_PEARL   , amount:  3 }],
            "40+": [{ item: Item.VARUNADA_LAZURITE_FRAGMENT, amount: 3 }, { item: Item.WATER_THAT_FAILED_TO_TRANSCEND, amount:  2 }, { item: Item.ROMARITIME_FLOWER, amount: 10 }, { item: Item.TRANSOCEANIC_PEARL   , amount: 15 }],
            "50+": [{ item: Item.VARUNADA_LAZURITE_FRAGMENT, amount: 6 }, { item: Item.WATER_THAT_FAILED_TO_TRANSCEND, amount:  4 }, { item: Item.ROMARITIME_FLOWER, amount: 20 }, { item: Item.TRANSOCEANIC_CHUNK   , amount: 12 }],
            "60+": [{ item: Item.VARUNADA_LAZURITE_CHUNK   , amount: 3 }, { item: Item.WATER_THAT_FAILED_TO_TRANSCEND, amount:  8 }, { item: Item.ROMARITIME_FLOWER, amount: 30 }, { item: Item.TRANSOCEANIC_CHUNK   , amount: 18 }],
            "70+": [{ item: Item.VARUNADA_LAZURITE_CHUNK   , amount: 6 }, { item: Item.WATER_THAT_FAILED_TO_TRANSCEND, amount: 12 }, { item: Item.ROMARITIME_FLOWER, amount: 45 }, { item: Item.XENOCHROMATIC_CRYSTAL, amount: 12 }],
            "80+": [{ item: Item.VARUNADA_LAZURITE_GEMSTONE, amount: 6 }, { item: Item.WATER_THAT_FAILED_TO_TRANSCEND, amount: 20 }, { item: Item.ROMARITIME_FLOWER, amount: 60 }, { item: Item.XENOCHROMATIC_CRYSTAL, amount: 24 }],
        }},
        elements: [{ element: Element.HYDRO, materials: {
            2:  [{ item: Item.TEACHINGS_OF_EQUITY   , amount:  3 }, {item: Item.TRANSOCEANIC_PEARL   , amount:  6 }],
            3:  [{ item: Item.GUIDE_TO_EQUITY       , amount:  2 }, {item: Item.TRANSOCEANIC_CHUNK   , amount:  3 }],
            4:  [{ item: Item.GUIDE_TO_EQUITY       , amount:  4 }, {item: Item.TRANSOCEANIC_CHUNK   , amount:  4 }],
            5:  [{ item: Item.GUIDE_TO_EQUITY       , amount:  6 }, {item: Item.TRANSOCEANIC_CHUNK   , amount:  6 }],
            6:  [{ item: Item.GUIDE_TO_EQUITY       , amount:  9 }, {item: Item.TRANSOCEANIC_CHUNK   , amount:  9 }],
            7:  [{ item: Item.PHILOSOPHIES_OF_EQUITY, amount:  4 }, {item: Item.XENOCHROMATIC_CRYSTAL, amount:  4 }, { item: Item.LIGHTLESS_EYE_OF_THE_MAELSTROM, amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_EQUITY, amount:  6 }, {item: Item.XENOCHROMATIC_CRYSTAL, amount:  6 }, { item: Item.LIGHTLESS_EYE_OF_THE_MAELSTROM, amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_EQUITY, amount: 12 }, {item: Item.XENOCHROMATIC_CRYSTAL, amount:  9 }, { item: Item.LIGHTLESS_EYE_OF_THE_MAELSTROM, amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_EQUITY, amount: 16 }, {item: Item.XENOCHROMATIC_CRYSTAL, amount: 12 }, { item: Item.LIGHTLESS_EYE_OF_THE_MAELSTROM, amount: 2 }]
        }}]
    }); static EMILIE             = new CharacterEntity({ name: "EMILIE",             rarity: 5, /* FINISHED v2 */ 
        level: { materials: {
            "20+": [{ item: Item.NAGADUS_EMERALD_SLIVER  , amount: 1 },                                                          { item: Item.LAKELIGHT_LILY, amount:  3 }, { item: Item.MESHING_GEAR          , amount:  3 }],
            "40+": [{ item: Item.NAGADUS_EMERALD_FRAGMENT, amount: 3 }, { item: Item.FRAGMENT_OF_A_GOLDEN_MELODY, amount:  2 }, { item: Item.LAKELIGHT_LILY, amount: 10 }, { item: Item.MESHING_GEAR          , amount: 15 }],
            "50+": [{ item: Item.NAGADUS_EMERALD_FRAGMENT, amount: 6 }, { item: Item.FRAGMENT_OF_A_GOLDEN_MELODY, amount:  4 }, { item: Item.LAKELIGHT_LILY, amount: 20 }, { item: Item.MECHANICAL_SPUR_GEAR  , amount: 12 }],
            "60+": [{ item: Item.NAGADUS_EMERALD_CHUNK   , amount: 3 }, { item: Item.FRAGMENT_OF_A_GOLDEN_MELODY, amount:  8 }, { item: Item.LAKELIGHT_LILY, amount: 30 }, { item: Item.MECHANICAL_SPUR_GEAR  , amount: 18 }],
            "70+": [{ item: Item.NAGADUS_EMERALD_CHUNK   , amount: 6 }, { item: Item.FRAGMENT_OF_A_GOLDEN_MELODY, amount: 12 }, { item: Item.LAKELIGHT_LILY, amount: 45 }, { item: Item.ARTIFICED_DYNAMIC_GEAR, amount: 12 }],
            "80+": [{ item: Item.NAGADUS_EMERALD_GEMSTONE, amount: 6 }, { item: Item.FRAGMENT_OF_A_GOLDEN_MELODY, amount: 20 }, { item: Item.LAKELIGHT_LILY, amount: 60 }, { item: Item.ARTIFICED_DYNAMIC_GEAR, amount: 24 }],
        }},
        elements: [{ element: Element.DENDRO, materials: {
            2:  [{ item: Item.TEACHINGS_OF_ORDER   , amount:  3 }, {item: Item.MESHING_GEAR          , amount:  6 }],
            3:  [{ item: Item.GUIDE_TO_ORDER       , amount:  2 }, {item: Item.MECHANICAL_SPUR_GEAR  , amount:  3 }],
            4:  [{ item: Item.GUIDE_TO_ORDER       , amount:  4 }, {item: Item.MECHANICAL_SPUR_GEAR  , amount:  4 }],
            5:  [{ item: Item.GUIDE_TO_ORDER       , amount:  6 }, {item: Item.MECHANICAL_SPUR_GEAR  , amount:  6 }],
            6:  [{ item: Item.GUIDE_TO_ORDER       , amount:  9 }, {item: Item.MECHANICAL_SPUR_GEAR  , amount:  9 }],
            7:  [{ item: Item.PHILOSOPHIES_OF_ORDER, amount:  4 }, {item: Item.ARTIFICED_DYNAMIC_GEAR, amount:  4 }, { item: Item.SILKEN_FEATHER, amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_ORDER, amount:  6 }, {item: Item.ARTIFICED_DYNAMIC_GEAR, amount:  6 }, { item: Item.SILKEN_FEATHER, amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_ORDER, amount: 12 }, {item: Item.ARTIFICED_DYNAMIC_GEAR, amount:  9 }, { item: Item.SILKEN_FEATHER, amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_ORDER, amount: 16 }, {item: Item.ARTIFICED_DYNAMIC_GEAR, amount: 12 }, { item: Item.SILKEN_FEATHER, amount: 2 }]
        }}]
    }); static KACHINA            = new CharacterEntity({ name: "KACHINA",            rarity: 4, /* FINISHED v2 */ 
        level: { materials: {
            "20+": [{ item: Item.PRITHIVA_TOPAZ_SLIVER  , amount: 1 },                                                    { item: Item.QUENEPA_BERRY, amount:  3 }, { item: Item["SENTRY'S_WOODEN_WHISTLE"]                 , amount:  3 }],
            "40+": [{ item: Item.PRITHIVA_TOPAZ_FRAGMENT, amount: 3 }, { item: Item.OVERRIPE_FLAMEGRANATE, amount:  2 }, { item: Item.QUENEPA_BERRY, amount: 10 }, { item: Item["SENTRY'S_WOODEN_WHISTLE"]                 , amount: 15 }],
            "50+": [{ item: Item.PRITHIVA_TOPAZ_FRAGMENT, amount: 6 }, { item: Item.OVERRIPE_FLAMEGRANATE, amount:  4 }, { item: Item.QUENEPA_BERRY, amount: 20 }, { item: Item["WARRIOR'S_METAL_WHISTLE"]                 , amount: 12 }],
            "60+": [{ item: Item.PRITHIVA_TOPAZ_CHUNK   , amount: 3 }, { item: Item.OVERRIPE_FLAMEGRANATE, amount:  8 }, { item: Item.QUENEPA_BERRY, amount: 30 }, { item: Item["WARRIOR'S_METAL_WHISTLE"]                 , amount: 18 }],
            "70+": [{ item: Item.PRITHIVA_TOPAZ_CHUNK   , amount: 6 }, { item: Item.OVERRIPE_FLAMEGRANATE, amount: 12 }, { item: Item.QUENEPA_BERRY, amount: 45 }, { item: Item["SAURIAN-CROWNED_WARRIOR'S_GOLDEN_WHISTLE"], amount: 12 }],
            "80+": [{ item: Item.PRITHIVA_TOPAZ_GEMSTONE, amount: 6 }, { item: Item.OVERRIPE_FLAMEGRANATE, amount: 20 }, { item: Item.QUENEPA_BERRY, amount: 60 }, { item: Item["SAURIAN-CROWNED_WARRIOR'S_GOLDEN_WHISTLE"], amount: 24 }],
        }},
        elements: [{ element: Element.GEO, materials: {
            2:  [{ item: Item.TEACHINGS_OF_CONFLICT   , amount:  3 }, {item: Item["SENTRY'S_WOODEN_WHISTLE"]                 , amount:  6 }],
            3:  [{ item: Item.GUIDE_TO_CONFLICT       , amount:  2 }, {item: Item["WARRIOR'S_METAL_WHISTLE"]                 , amount:  3 }],
            4:  [{ item: Item.GUIDE_TO_CONFLICT       , amount:  4 }, {item: Item["WARRIOR'S_METAL_WHISTLE"]                 , amount:  4 }],
            5:  [{ item: Item.GUIDE_TO_CONFLICT       , amount:  6 }, {item: Item["WARRIOR'S_METAL_WHISTLE"]                 , amount:  6 }],
            6:  [{ item: Item.GUIDE_TO_CONFLICT       , amount:  9 }, {item: Item["WARRIOR'S_METAL_WHISTLE"]                 , amount:  9 }],
            7:  [{ item: Item.PHILOSOPHIES_OF_CONFLICT, amount:  4 }, {item: Item["SAURIAN-CROWNED_WARRIOR'S_GOLDEN_WHISTLE"], amount:  4 }, { item: Item.FADING_CANDLE, amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_CONFLICT, amount:  6 }, {item: Item["SAURIAN-CROWNED_WARRIOR'S_GOLDEN_WHISTLE"], amount:  6 }, { item: Item.FADING_CANDLE, amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_CONFLICT, amount: 12 }, {item: Item["SAURIAN-CROWNED_WARRIOR'S_GOLDEN_WHISTLE"], amount:  9 }, { item: Item.FADING_CANDLE, amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_CONFLICT, amount: 16 }, {item: Item["SAURIAN-CROWNED_WARRIOR'S_GOLDEN_WHISTLE"], amount: 12 }, { item: Item.FADING_CANDLE, amount: 2 }]
        }}]
    }); static MUALANI            = new CharacterEntity({ name: "MUALANI",            rarity: 5, /* FINISHED v2 */ 
        level: { materials: {
            "20+": [{ item: Item.VARUNADA_LAZURITE_SLIVER  , amount: 1 },                                                          { item: Item.SPRAYFEATHER_GILL, amount:  3 }, { item: Item["SENTRY'S_WOODEN_WHISTLE"]                 , amount:  3 }],
            "40+": [{ item: Item.VARUNADA_LAZURITE_FRAGMENT, amount: 3 }, { item: Item.MARK_OF_THE_BINDING_BLESSING, amount:  2 }, { item: Item.SPRAYFEATHER_GILL, amount: 10 }, { item: Item["SENTRY'S_WOODEN_WHISTLE"]                 , amount: 15 }],
            "50+": [{ item: Item.VARUNADA_LAZURITE_FRAGMENT, amount: 6 }, { item: Item.MARK_OF_THE_BINDING_BLESSING, amount:  4 }, { item: Item.SPRAYFEATHER_GILL, amount: 20 }, { item: Item["WARRIOR'S_METAL_WHISTLE"]                 , amount: 12 }],
            "60+": [{ item: Item.VARUNADA_LAZURITE_CHUNK   , amount: 3 }, { item: Item.MARK_OF_THE_BINDING_BLESSING, amount:  8 }, { item: Item.SPRAYFEATHER_GILL, amount: 30 }, { item: Item["WARRIOR'S_METAL_WHISTLE"]                 , amount: 18 }],
            "70+": [{ item: Item.VARUNADA_LAZURITE_CHUNK   , amount: 6 }, { item: Item.MARK_OF_THE_BINDING_BLESSING, amount: 12 }, { item: Item.SPRAYFEATHER_GILL, amount: 45 }, { item: Item["SAURIAN-CROWNED_WARRIOR'S_GOLDEN_WHISTLE"], amount: 12 }],
            "80+": [{ item: Item.VARUNADA_LAZURITE_GEMSTONE, amount: 6 }, { item: Item.MARK_OF_THE_BINDING_BLESSING, amount: 20 }, { item: Item.SPRAYFEATHER_GILL, amount: 60 }, { item: Item["SAURIAN-CROWNED_WARRIOR'S_GOLDEN_WHISTLE"], amount: 24 }],
        }},
        elements: [{ element: Element.HYDRO, materials: {
            2:  [{ item: Item.TEACHINGS_OF_CONTENTION   , amount:  3 }, {item: Item["SENTRY'S_WOODEN_WHISTLE"]                 , amount:  6 }],
            3:  [{ item: Item.GUIDE_TO_CONTENTION       , amount:  2 }, {item: Item["WARRIOR'S_METAL_WHISTLE"]                 , amount:  3 }],
            4:  [{ item: Item.GUIDE_TO_CONTENTION       , amount:  4 }, {item: Item["WARRIOR'S_METAL_WHISTLE"]                 , amount:  4 }],
            5:  [{ item: Item.GUIDE_TO_CONTENTION       , amount:  6 }, {item: Item["WARRIOR'S_METAL_WHISTLE"]                 , amount:  6 }],
            6:  [{ item: Item.GUIDE_TO_CONTENTION       , amount:  9 }, {item: Item["WARRIOR'S_METAL_WHISTLE"]                 , amount:  9 }],
            7:  [{ item: Item.PHILOSOPHIES_OF_CONTENTION, amount:  4 }, {item: Item["SAURIAN-CROWNED_WARRIOR'S_GOLDEN_WHISTLE"], amount:  4 }, { item: Item.LIGHTLESS_MASS, amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_CONTENTION, amount:  6 }, {item: Item["SAURIAN-CROWNED_WARRIOR'S_GOLDEN_WHISTLE"], amount:  6 }, { item: Item.LIGHTLESS_MASS, amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_CONTENTION, amount: 12 }, {item: Item["SAURIAN-CROWNED_WARRIOR'S_GOLDEN_WHISTLE"], amount:  9 }, { item: Item.LIGHTLESS_MASS, amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_CONTENTION, amount: 16 }, {item: Item["SAURIAN-CROWNED_WARRIOR'S_GOLDEN_WHISTLE"], amount: 12 }, { item: Item.LIGHTLESS_MASS, amount: 2 }]
        }}]
    }); static KINICH             = new CharacterEntity({ name: "KINICH",             rarity: 5, /* FINISHED v2 */ 
        level: { materials: {
            "20+": [{ item: Item.NAGADUS_EMERALD_SLIVER  , amount: 1 },                                                    { item: Item.SAURIAN_CLAW_SUCCULENT, amount:  3 }, { item: Item.JUVENILE_FANG   , amount:  3 }],
            "40+": [{ item: Item.NAGADUS_EMERALD_FRAGMENT, amount: 3 }, { item: Item.OVERRIPE_FLAMEGRANATE, amount:  2 }, { item: Item.SAURIAN_CLAW_SUCCULENT, amount: 10 }, { item: Item.JUVENILE_FANG   , amount: 15 }],
            "50+": [{ item: Item.NAGADUS_EMERALD_FRAGMENT, amount: 6 }, { item: Item.OVERRIPE_FLAMEGRANATE, amount:  4 }, { item: Item.SAURIAN_CLAW_SUCCULENT, amount: 20 }, { item: Item.SEASONED_FANG   , amount: 12 }],
            "60+": [{ item: Item.NAGADUS_EMERALD_CHUNK   , amount: 3 }, { item: Item.OVERRIPE_FLAMEGRANATE, amount:  8 }, { item: Item.SAURIAN_CLAW_SUCCULENT, amount: 30 }, { item: Item.SEASONED_FANG   , amount: 18 }],
            "70+": [{ item: Item.NAGADUS_EMERALD_CHUNK   , amount: 6 }, { item: Item.OVERRIPE_FLAMEGRANATE, amount: 12 }, { item: Item.SAURIAN_CLAW_SUCCULENT, amount: 45 }, { item: Item["TYRANT'S_FANG"], amount: 12 }],
            "80+": [{ item: Item.NAGADUS_EMERALD_GEMSTONE, amount: 6 }, { item: Item.OVERRIPE_FLAMEGRANATE, amount: 20 }, { item: Item.SAURIAN_CLAW_SUCCULENT, amount: 60 }, { item: Item["TYRANT'S_FANG"], amount: 24 }],
        }},
        elements: [{ element: Element.DENDRO, materials: {
            2:  [{ item: Item.TEACHINGS_OF_KINDLING   , amount:  3 }, {item: Item.JUVENILE_FANG   , amount:  6 }],
            3:  [{ item: Item.GUIDE_TO_KINDLING       , amount:  2 }, {item: Item.SEASONED_FANG   , amount:  3 }],
            4:  [{ item: Item.GUIDE_TO_KINDLING       , amount:  4 }, {item: Item.SEASONED_FANG   , amount:  4 }],
            5:  [{ item: Item.GUIDE_TO_KINDLING       , amount:  6 }, {item: Item.SEASONED_FANG   , amount:  6 }],
            6:  [{ item: Item.GUIDE_TO_KINDLING       , amount:  9 }, {item: Item.SEASONED_FANG   , amount:  9 }],
            7:  [{ item: Item.PHILOSOPHIES_OF_KINDLING, amount:  4 }, {item: Item["TYRANT'S_FANG"], amount:  4 }, { item: Item.DENIAL_AND_JUDGMENT, amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_KINDLING, amount:  6 }, {item: Item["TYRANT'S_FANG"], amount:  6 }, { item: Item.DENIAL_AND_JUDGMENT, amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_KINDLING, amount: 12 }, {item: Item["TYRANT'S_FANG"], amount:  9 }, { item: Item.DENIAL_AND_JUDGMENT, amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_KINDLING, amount: 16 }, {item: Item["TYRANT'S_FANG"], amount: 12 }, { item: Item.DENIAL_AND_JUDGMENT, amount: 2 }]
        }}]
    }); static XILONEN            = new CharacterEntity({ name: "XILONEN",            rarity: 5, /* FINISHED v2 */ 
        level: { materials: {
            "20+": [{ item: Item.PRITHIVA_TOPAZ_SLIVER  , amount: 1 },                                                                   { item: Item.BRILLIANT_CHRYSANTHEMUM, amount:  3 }, { item: Item["SENTRY'S_WOODEN_WHISTLE"]                 , amount:  3 }],
            "40+": [{ item: Item.PRITHIVA_TOPAZ_FRAGMENT, amount: 3 }, { item: Item["GOLD-INSCRIBED_SECRET_SOURCE_CORE"], amount:  2 }, { item: Item.BRILLIANT_CHRYSANTHEMUM, amount: 10 }, { item: Item["SENTRY'S_WOODEN_WHISTLE"]                 , amount: 15 }],
            "50+": [{ item: Item.PRITHIVA_TOPAZ_FRAGMENT, amount: 6 }, { item: Item["GOLD-INSCRIBED_SECRET_SOURCE_CORE"], amount:  4 }, { item: Item.BRILLIANT_CHRYSANTHEMUM, amount: 20 }, { item: Item["WARRIOR'S_METAL_WHISTLE"]                 , amount: 12 }],
            "60+": [{ item: Item.PRITHIVA_TOPAZ_CHUNK   , amount: 3 }, { item: Item["GOLD-INSCRIBED_SECRET_SOURCE_CORE"], amount:  8 }, { item: Item.BRILLIANT_CHRYSANTHEMUM, amount: 30 }, { item: Item["WARRIOR'S_METAL_WHISTLE"]                 , amount: 18 }],
            "70+": [{ item: Item.PRITHIVA_TOPAZ_CHUNK   , amount: 6 }, { item: Item["GOLD-INSCRIBED_SECRET_SOURCE_CORE"], amount: 12 }, { item: Item.BRILLIANT_CHRYSANTHEMUM, amount: 45 }, { item: Item["SAURIAN-CROWNED_WARRIOR'S_GOLDEN_WHISTLE"], amount: 12 }],
            "80+": [{ item: Item.PRITHIVA_TOPAZ_GEMSTONE, amount: 6 }, { item: Item["GOLD-INSCRIBED_SECRET_SOURCE_CORE"], amount: 20 }, { item: Item.BRILLIANT_CHRYSANTHEMUM, amount: 60 }, { item: Item["SAURIAN-CROWNED_WARRIOR'S_GOLDEN_WHISTLE"], amount: 24 }],
        }},
        elements: [{ element: Element.GEO, materials: {
            2:  [{ item: Item.TEACHINGS_OF_KINDLING   , amount:  3 }, {item: Item["SENTRY'S_WOODEN_WHISTLE"]                 , amount:  6 }],
            3:  [{ item: Item.GUIDE_TO_KINDLING       , amount:  2 }, {item: Item["WARRIOR'S_METAL_WHISTLE"]                 , amount:  3 }],
            4:  [{ item: Item.GUIDE_TO_KINDLING       , amount:  4 }, {item: Item["WARRIOR'S_METAL_WHISTLE"]                 , amount:  4 }],
            5:  [{ item: Item.GUIDE_TO_KINDLING       , amount:  6 }, {item: Item["WARRIOR'S_METAL_WHISTLE"]                 , amount:  6 }],
            6:  [{ item: Item.GUIDE_TO_KINDLING       , amount:  9 }, {item: Item["WARRIOR'S_METAL_WHISTLE"]                 , amount:  9 }],
            7:  [{ item: Item.PHILOSOPHIES_OF_KINDLING, amount:  4 }, {item: Item["SAURIAN-CROWNED_WARRIOR'S_GOLDEN_WHISTLE"], amount:  4 }, { item: Item.MIRROR_OF_MUSHIN, amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_KINDLING, amount:  6 }, {item: Item["SAURIAN-CROWNED_WARRIOR'S_GOLDEN_WHISTLE"], amount:  6 }, { item: Item.MIRROR_OF_MUSHIN, amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_KINDLING, amount: 12 }, {item: Item["SAURIAN-CROWNED_WARRIOR'S_GOLDEN_WHISTLE"], amount:  9 }, { item: Item.MIRROR_OF_MUSHIN, amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_KINDLING, amount: 16 }, {item: Item["SAURIAN-CROWNED_WARRIOR'S_GOLDEN_WHISTLE"], amount: 12 }, { item: Item.MIRROR_OF_MUSHIN, amount: 2 }]
        }}]    
    }); static ORORON             = new CharacterEntity({ name: "ORORON",             rarity: 4, /* FINISHED v2 */ 
        level: { materials: {
            "20+": [{ item: Item.VAJRADA_AMETHYST_SLIVER,   amount: 1 },                                                           { item: Item.GLOWING_HORNSHROOM, amount:  3 }, { item: Item.JUVENILE_FANG,    amount:  3 }],
            "40+": [{ item: Item.VAJRADA_AMETHYST_FRAGMENT, amount: 3 }, { item: Item.MARK_OF_THE_BINDING_BLESSING, amount:  2 }, { item: Item.GLOWING_HORNSHROOM, amount: 10 }, { item: Item.JUVENILE_FANG,    amount: 15 }],
            "50+": [{ item: Item.VAJRADA_AMETHYST_FRAGMENT, amount: 6 }, { item: Item.MARK_OF_THE_BINDING_BLESSING, amount:  4 }, { item: Item.GLOWING_HORNSHROOM, amount: 20 }, { item: Item.SEASONED_FANG,    amount: 12 }],
            "60+": [{ item: Item.VAJRADA_AMETHYST_CHUNK,    amount: 3 }, { item: Item.MARK_OF_THE_BINDING_BLESSING, amount:  8 }, { item: Item.GLOWING_HORNSHROOM, amount: 30 }, { item: Item.SEASONED_FANG,    amount: 18 }],
            "70+": [{ item: Item.VAJRADA_AMETHYST_CHUNK,    amount: 6 }, { item: Item.MARK_OF_THE_BINDING_BLESSING, amount: 12 }, { item: Item.GLOWING_HORNSHROOM, amount: 45 }, { item: Item["TYRANT'S_FANG"], amount: 12 }],
            "80+": [{ item: Item.VAJRADA_AMETHYST_GEMSTONE, amount: 6 }, { item: Item.MARK_OF_THE_BINDING_BLESSING, amount: 20 }, { item: Item.GLOWING_HORNSHROOM, amount: 60 }, { item: Item["TYRANT'S_FANG"], amount: 24 }],
        }},
        elements: [{ element: Element.ELECTRO, materials: {
            2:  [{ item: Item.TEACHINGS_OF_KINDLING,    amount:  3 }, { item: Item.JUVENILE_FANG,    amount:  6 }],
            3:  [{ item: Item.GUIDE_TO_KINDLING,        amount:  2 }, { item: Item.SEASONED_FANG,    amount:  3 }],
            4:  [{ item: Item.GUIDE_TO_KINDLING,        amount:  4 }, { item: Item.SEASONED_FANG,    amount:  4 }],
            5:  [{ item: Item.GUIDE_TO_KINDLING,        amount:  6 }, { item: Item.SEASONED_FANG,    amount:  6 }],
            6:  [{ item: Item.GUIDE_TO_KINDLING,        amount:  9 }, { item: Item.SEASONED_FANG,    amount:  9 }],
            7:  [{ item: Item.PHILOSOPHIES_OF_KINDLING, amount:  4 }, { item: Item["TYRANT'S_FANG"], amount:  4 }, { item: Item.LIGHTLESS_SILK_STRING, amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_KINDLING, amount:  6 }, { item: Item["TYRANT'S_FANG"], amount:  6 }, { item: Item.LIGHTLESS_SILK_STRING, amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_KINDLING, amount: 12 }, { item: Item["TYRANT'S_FANG"], amount:  9 }, { item: Item.LIGHTLESS_SILK_STRING, amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_KINDLING, amount: 16 }, { item: Item["TYRANT'S_FANG"], amount: 12 }, { item: Item.LIGHTLESS_SILK_STRING, amount: 2 }]
        }}]
    }); static CHASCA             = new CharacterEntity({ name: "CHASCA",             rarity: 5, /* FINISHED v2 */ 
        level: { materials: {
            "20+": [{ item: Item.VAYUDA_TURQUOISE_SLIVER  , amount: 1 },                                             { item: Item.WITHERING_PURPURBLOOM, amount:  3 }, { item: Item.JUVENILE_FANG   , amount:  3 }],
            "40+": [{ item: Item.VAYUDA_TURQUOISE_FRAGMENT, amount: 3 }, { item: Item.ENSNARING_GAZE, amount:  2 }, { item: Item.WITHERING_PURPURBLOOM, amount: 10 }, { item: Item.JUVENILE_FANG   , amount: 15 }],
            "50+": [{ item: Item.VAYUDA_TURQUOISE_FRAGMENT, amount: 6 }, { item: Item.ENSNARING_GAZE, amount:  4 }, { item: Item.WITHERING_PURPURBLOOM, amount: 20 }, { item: Item.SEASONED_FANG   , amount: 12 }],
            "60+": [{ item: Item.VAYUDA_TURQUOISE_CHUNK   , amount: 3 }, { item: Item.ENSNARING_GAZE, amount:  8 }, { item: Item.WITHERING_PURPURBLOOM, amount: 30 }, { item: Item.SEASONED_FANG   , amount: 18 }],
            "70+": [{ item: Item.VAYUDA_TURQUOISE_CHUNK   , amount: 6 }, { item: Item.ENSNARING_GAZE, amount: 12 }, { item: Item.WITHERING_PURPURBLOOM, amount: 45 }, { item: Item["TYRANT'S_FANG"], amount: 12 }],
            "80+": [{ item: Item.VAYUDA_TURQUOISE_GEMSTONE, amount: 6 }, { item: Item.ENSNARING_GAZE, amount: 20 }, { item: Item.WITHERING_PURPURBLOOM, amount: 60 }, { item: Item["TYRANT'S_FANG"], amount: 24 }],
        }},
        elements: [{ element: Element.ANEMO, materials: {
            2:  [{ item: Item.TEACHINGS_OF_CONFLICT   , amount:  3 }, {item: Item.JUVENILE_FANG   , amount:  6 }],
            3:  [{ item: Item.GUIDE_TO_CONFLICT       , amount:  2 }, {item: Item.SEASONED_FANG   , amount:  3 }],
            4:  [{ item: Item.GUIDE_TO_CONFLICT       , amount:  4 }, {item: Item.SEASONED_FANG   , amount:  4 }],
            5:  [{ item: Item.GUIDE_TO_CONFLICT       , amount:  6 }, {item: Item.SEASONED_FANG   , amount:  6 }],
            6:  [{ item: Item.GUIDE_TO_CONFLICT       , amount:  9 }, {item: Item.SEASONED_FANG   , amount:  9 }],
            7:  [{ item: Item.PHILOSOPHIES_OF_CONFLICT, amount:  4 }, {item: Item["TYRANT'S_FANG"], amount:  4 }, { item: Item.SILKEN_FEATHER, amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_CONFLICT, amount:  6 }, {item: Item["TYRANT'S_FANG"], amount:  6 }, { item: Item.SILKEN_FEATHER, amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_CONFLICT, amount: 12 }, {item: Item["TYRANT'S_FANG"], amount:  9 }, { item: Item.SILKEN_FEATHER, amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_CONFLICT, amount: 16 }, {item: Item["TYRANT'S_FANG"], amount: 12 }, { item: Item.SILKEN_FEATHER, amount: 2 }]
        }}]
    }); static CITLALI            = new CharacterEntity({ name: "CITLALI",            rarity: 5, /* FINISHED v2 */ 
        level: { materials: {
            "20+": [{ item: Item.SHIVADA_JADE_SLIVER  , amount: 1 },                                                             { item: Item.QUENEPA_BERRY, amount:  3 }, { item: Item.JUVENILE_FANG   , amount:  3 }],
            "40+": [{ item: Item.SHIVADA_JADE_FRAGMENT, amount: 3 }, { item: Item.TALISMAN_OF_THE_ENIGMATIC_LAND, amount:  2 }, { item: Item.QUENEPA_BERRY, amount: 10 }, { item: Item.JUVENILE_FANG   , amount: 15 }],
            "50+": [{ item: Item.SHIVADA_JADE_FRAGMENT, amount: 6 }, { item: Item.TALISMAN_OF_THE_ENIGMATIC_LAND, amount:  4 }, { item: Item.QUENEPA_BERRY, amount: 20 }, { item: Item.SEASONED_FANG   , amount: 12 }],
            "60+": [{ item: Item.SHIVADA_JADE_CHUNK   , amount: 3 }, { item: Item.TALISMAN_OF_THE_ENIGMATIC_LAND, amount:  8 }, { item: Item.QUENEPA_BERRY, amount: 30 }, { item: Item.SEASONED_FANG   , amount: 18 }],
            "70+": [{ item: Item.SHIVADA_JADE_CHUNK   , amount: 6 }, { item: Item.TALISMAN_OF_THE_ENIGMATIC_LAND, amount: 12 }, { item: Item.QUENEPA_BERRY, amount: 45 }, { item: Item["TYRANT'S_FANG"], amount: 12 }],
            "80+": [{ item: Item.SHIVADA_JADE_GEMSTONE, amount: 6 }, { item: Item.TALISMAN_OF_THE_ENIGMATIC_LAND, amount: 20 }, { item: Item.QUENEPA_BERRY, amount: 60 }, { item: Item["TYRANT'S_FANG"], amount: 24 }],
        }},
        elements: [{ element: Element.CRYO, materials: {
            2:  [{ item: Item.TEACHINGS_OF_KINDLING   , amount:  3 }, {item: Item.JUVENILE_FANG   , amount:  6 }],
            3:  [{ item: Item.GUIDE_TO_KINDLING       , amount:  2 }, {item: Item.SEASONED_FANG   , amount:  3 }],
            4:  [{ item: Item.GUIDE_TO_KINDLING       , amount:  4 }, {item: Item.SEASONED_FANG   , amount:  4 }],
            5:  [{ item: Item.GUIDE_TO_KINDLING       , amount:  6 }, {item: Item.SEASONED_FANG   , amount:  6 }],
            6:  [{ item: Item.GUIDE_TO_KINDLING       , amount:  9 }, {item: Item.SEASONED_FANG   , amount:  9 }],
            7:  [{ item: Item.PHILOSOPHIES_OF_KINDLING, amount:  4 }, {item: Item["TYRANT'S_FANG"], amount:  4 }, { item: Item.DENIAL_AND_JUDGMENT, amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_KINDLING, amount:  6 }, {item: Item["TYRANT'S_FANG"], amount:  6 }, { item: Item.DENIAL_AND_JUDGMENT, amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_KINDLING, amount: 12 }, {item: Item["TYRANT'S_FANG"], amount:  9 }, { item: Item.DENIAL_AND_JUDGMENT, amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_KINDLING, amount: 16 }, {item: Item["TYRANT'S_FANG"], amount: 12 }, { item: Item.DENIAL_AND_JUDGMENT, amount: 2 }]
        }}]
    }); static MAVUIKA            = new CharacterEntity({ name: "MAVUIKA",            rarity: 5, /* FINISHED v2 */ 
        level: { materials: { 
            "20+": [{ item: Item.AGNIDUS_AGATE_SLIVER,   amount: 1 },                                                                   { item: Item.WITHERING_PURPURBLOOM, amount:  3 }, { item: Item["SENTRY'S_WOODEN_WHISTLE"]                 , amount:  3 }], 
            "40+": [{ item: Item.AGNIDUS_AGATE_FRAGMENT, amount: 3 }, { item: Item["GOLD-INSCRIBED_SECRET_SOURCE_CORE"], amount:  2 }, { item: Item.WITHERING_PURPURBLOOM, amount: 10 }, { item: Item["SENTRY'S_WOODEN_WHISTLE"]                 , amount: 15 }], 
            "50+": [{ item: Item.AGNIDUS_AGATE_FRAGMENT, amount: 6 }, { item: Item["GOLD-INSCRIBED_SECRET_SOURCE_CORE"], amount:  4 }, { item: Item.WITHERING_PURPURBLOOM, amount: 20 }, { item: Item["WARRIOR'S_METAL_WHISTLE"]                 , amount: 12 }], 
            "60+": [{ item: Item.AGNIDUS_AGATE_CHUNK,    amount: 3 }, { item: Item["GOLD-INSCRIBED_SECRET_SOURCE_CORE"], amount:  8 }, { item: Item.WITHERING_PURPURBLOOM, amount: 30 }, { item: Item["WARRIOR'S_METAL_WHISTLE"]                 , amount: 18 }], 
            "70+": [{ item: Item.AGNIDUS_AGATE_CHUNK,    amount: 6 }, { item: Item["GOLD-INSCRIBED_SECRET_SOURCE_CORE"], amount: 12 }, { item: Item.WITHERING_PURPURBLOOM, amount: 45 }, { item: Item["SAURIAN-CROWNED_WARRIOR'S_GOLDEN_WHISTLE"], amount: 12 }], 
            "80+": [{ item: Item.AGNIDUS_AGATE_GEMSTONE, amount: 6 }, { item: Item["GOLD-INSCRIBED_SECRET_SOURCE_CORE"], amount: 20 }, { item: Item.WITHERING_PURPURBLOOM, amount: 60 }, { item: Item["SAURIAN-CROWNED_WARRIOR'S_GOLDEN_WHISTLE"], amount: 24 }]
        }}, 
        elements: [{ element: Element.PYRO, materials: { 
            2:  [{ item: Item.TEACHINGS_OF_CONTENTION,    amount:  3 }, {item: Item["SENTRY'S_WOODEN_WHISTLE"], amount:  6 }],                                             
            3:  [{ item: Item.GUIDE_TO_CONTENTION,        amount:  2 }, {item: Item["WARRIOR'S_METAL_WHISTLE"], amount:  3 }],                                             
            4:  [{ item: Item.GUIDE_TO_CONTENTION,        amount:  4 }, {item: Item["WARRIOR'S_METAL_WHISTLE"], amount:  4 }],                                             
            5:  [{ item: Item.GUIDE_TO_CONTENTION,        amount:  6 }, {item: Item["WARRIOR'S_METAL_WHISTLE"], amount:  6 }],                                             
            6:  [{ item: Item.GUIDE_TO_CONTENTION,        amount:  9 }, {item: Item["WARRIOR'S_METAL_WHISTLE"], amount:  9 }],                                             
            7:  [{ item: Item.PHILOSOPHIES_OF_CONTENTION, amount:  4 }, {item: Item["SAURIAN-CROWNED_WARRIOR'S_GOLDEN_WHISTLE"], amount:  4 }, { item: Item.ERODED_HORN, amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_CONTENTION, amount:  6 }, {item: Item["SAURIAN-CROWNED_WARRIOR'S_GOLDEN_WHISTLE"], amount:  6 }, { item: Item.ERODED_HORN, amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_CONTENTION, amount: 12 }, {item: Item["SAURIAN-CROWNED_WARRIOR'S_GOLDEN_WHISTLE"], amount:  9 }, { item: Item.ERODED_HORN, amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_CONTENTION, amount: 16 }, {item: Item["SAURIAN-CROWNED_WARRIOR'S_GOLDEN_WHISTLE"], amount: 12 }, { item: Item.ERODED_HORN, amount: 2 }] 
        }}]
    }); static LAN_YAN            = new CharacterEntity({ name: "LAN_YAN",            rarity: 4, /* FINISHED v2 */ 
        level: { materials: { 
            "20+": [{ item: Item.VAYUDA_TURQUOISE_SLIVER,   amount: 1 },                                                                   { item: Item.CLEARWATER_JADE, amount:  3 }, { item: Item.WHOPPERFLOWER_NECTAR, amount:  3 }], 
            "40+": [{ item: Item.VAYUDA_TURQUOISE_FRAGMENT, amount: 3 }, { item: Item["GOLD-INSCRIBED_SECRET_SOURCE_CORE"], amount:  2 }, { item: Item.CLEARWATER_JADE, amount: 10 }, { item: Item.WHOPPERFLOWER_NECTAR, amount: 15 }], 
            "50+": [{ item: Item.VAYUDA_TURQUOISE_FRAGMENT, amount: 6 }, { item: Item["GOLD-INSCRIBED_SECRET_SOURCE_CORE"], amount:  4 }, { item: Item.CLEARWATER_JADE, amount: 20 }, { item: Item.SHIMMERING_NECTAR,    amount: 12 }], 
            "60+": [{ item: Item.VAYUDA_TURQUOISE_CHUNK,    amount: 3 }, { item: Item["GOLD-INSCRIBED_SECRET_SOURCE_CORE"], amount:  8 }, { item: Item.CLEARWATER_JADE, amount: 30 }, { item: Item.SHIMMERING_NECTAR,    amount: 18 }], 
            "70+": [{ item: Item.VAYUDA_TURQUOISE_CHUNK,    amount: 6 }, { item: Item["GOLD-INSCRIBED_SECRET_SOURCE_CORE"], amount: 12 }, { item: Item.CLEARWATER_JADE, amount: 45 }, { item: Item.ENERGY_NECTAR,        amount: 12 }], 
            "80+": [{ item: Item.VAYUDA_TURQUOISE_GEMSTONE, amount: 6 }, { item: Item["GOLD-INSCRIBED_SECRET_SOURCE_CORE"], amount: 20 }, { item: Item.CLEARWATER_JADE, amount: 60 }, { item: Item.ENERGY_NECTAR,        amount: 24 }]
        }}, 
        elements: [{ element: Element.CRYO, materials: {  
            2:  [{ item: Item.TEACHINGS_OF_DILIGENCE,    amount:  3 }, {item: Item.WHOPPERFLOWER_NECTAR, amount:  6 }],                                             
            3:  [{ item: Item.GUIDE_TO_DILIGENCE,        amount:  2 }, {item: Item.SHIMMERING_NECTAR,    amount:  3 }],                                             
            4:  [{ item: Item.GUIDE_TO_DILIGENCE,        amount:  4 }, {item: Item.SHIMMERING_NECTAR,    amount:  4 }],                                             
            5:  [{ item: Item.GUIDE_TO_DILIGENCE,        amount:  6 }, {item: Item.SHIMMERING_NECTAR,    amount:  6 }],                                             
            6:  [{ item: Item.GUIDE_TO_DILIGENCE,        amount:  9 }, {item: Item.SHIMMERING_NECTAR,    amount:  9 }],                                             
            7:  [{ item: Item.PHILOSOPHIES_OF_DILIGENCE, amount:  4 }, {item: Item.ENERGY_NECTAR,        amount:  4 }, { item: Item.ERODED_SUNFIRE, amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_DILIGENCE, amount:  6 }, {item: Item.ENERGY_NECTAR,        amount:  6 }, { item: Item.ERODED_SUNFIRE, amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_DILIGENCE, amount: 12 }, {item: Item.ENERGY_NECTAR,        amount:  9 }, { item: Item.ERODED_SUNFIRE, amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_DILIGENCE, amount: 16 }, {item: Item.ENERGY_NECTAR,        amount: 12 }, { item: Item.ERODED_SUNFIRE, amount: 2 }] 
        }}]
    }); static YUMEMIZUKI_MIZUKI  = new CharacterEntity({ name: "YUMEMIZUKI_MIZUKI",  rarity: 5, /* FINISHED v2 */ 
        level: { materials: { 
            "20+": [{ item: Item.SHIVADA_JADE_SLIVER,   amount: 1 },                                                             { item: Item.SEA_GANODERMA, amount:  3 }, { item: Item.OLD_HANDGUARD,      amount:  3 }], 
            "40+": [{ item: Item.SHIVADA_JADE_FRAGMENT, amount: 3 }, { item: Item.TALISMAN_OF_THE_ENIGMATIC_LAND, amount:  2 }, { item: Item.SEA_GANODERMA, amount: 10 }, { item: Item.OLD_HANDGUARD,      amount: 15 }], 
            "50+": [{ item: Item.SHIVADA_JADE_FRAGMENT, amount: 6 }, { item: Item.TALISMAN_OF_THE_ENIGMATIC_LAND, amount:  4 }, { item: Item.SEA_GANODERMA, amount: 20 }, { item: Item.KAGEUCHI_HANDGUARD, amount: 12 }], 
            "60+": [{ item: Item.SHIVADA_JADE_CHUNK,    amount: 3 }, { item: Item.TALISMAN_OF_THE_ENIGMATIC_LAND, amount:  8 }, { item: Item.SEA_GANODERMA, amount: 30 }, { item: Item.KAGEUCHI_HANDGUARD, amount: 18 }], 
            "70+": [{ item: Item.SHIVADA_JADE_CHUNK,    amount: 6 }, { item: Item.TALISMAN_OF_THE_ENIGMATIC_LAND, amount: 12 }, { item: Item.SEA_GANODERMA, amount: 45 }, { item: Item.FAMED_HANDGUARD,    amount: 12 }], 
            "80+": [{ item: Item.SHIVADA_JADE_GEMSTONE, amount: 6 }, { item: Item.TALISMAN_OF_THE_ENIGMATIC_LAND, amount: 20 }, { item: Item.SEA_GANODERMA, amount: 60 }, { item: Item.FAMED_HANDGUARD,    amount: 24 }]
        }}, 
        elements: [{ element: Element.CRYO, materials: {  
            2:  [{ item: Item.TEACHINGS_OF_TRANSIENCE,    amount:  3 }, {item: Item.OLD_HANDGUARD,      amount:  6 }],                                             
            3:  [{ item: Item.GUIDE_TO_TRANSIENCE,        amount:  2 }, {item: Item.KAGEUCHI_HANDGUARD, amount:  3 }],                                             
            4:  [{ item: Item.GUIDE_TO_TRANSIENCE,        amount:  4 }, {item: Item.KAGEUCHI_HANDGUARD, amount:  4 }],                                             
            5:  [{ item: Item.GUIDE_TO_TRANSIENCE,        amount:  6 }, {item: Item.KAGEUCHI_HANDGUARD, amount:  6 }],                                             
            6:  [{ item: Item.GUIDE_TO_TRANSIENCE,        amount:  9 }, {item: Item.KAGEUCHI_HANDGUARD, amount:  9 }],                                             
            7:  [{ item: Item.PHILOSOPHIES_OF_TRANSIENCE, amount:  4 }, {item: Item.FAMED_HANDGUARD,    amount:  4 }, { item: Item.FADING_CANDLE, amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_TRANSIENCE, amount:  6 }, {item: Item.FAMED_HANDGUARD,    amount:  6 }, { item: Item.FADING_CANDLE, amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_TRANSIENCE, amount: 12 }, {item: Item.FAMED_HANDGUARD,    amount:  9 }, { item: Item.FADING_CANDLE, amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_TRANSIENCE, amount: 16 }, {item: Item.FAMED_HANDGUARD,    amount: 12 }, { item: Item.FADING_CANDLE, amount: 2 }] 
        }}]
    }); static IANSAN             = new CharacterEntity({ name: "IANSAN",             rarity: 4, /* FINISHED v2 */ 
        level: { materials: { 
            "20+": [{ item: Item.VAJRADA_AMETHYST_SLIVER,   amount: 1 },                                             { item: Item.DRACOLITE, amount:  3 }, { item: Item["SENTRY'S_WOODEN_WHISTLE"],                   amount:  3 }], 
            "40+": [{ item: Item.VAJRADA_AMETHYST_FRAGMENT, amount: 3 }, { item: Item.ENSNARING_GAZE, amount:  2 }, { item: Item.DRACOLITE, amount: 10 }, { item: Item["SENTRY'S_WOODEN_WHISTLE"],                   amount: 15 }], 
            "50+": [{ item: Item.VAJRADA_AMETHYST_FRAGMENT, amount: 6 }, { item: Item.ENSNARING_GAZE, amount:  4 }, { item: Item.DRACOLITE, amount: 20 }, { item: Item["WARRIOR'S_METAL_WHISTLE"],                  amount: 12 }], 
            "60+": [{ item: Item.VAJRADA_AMETHYST_CHUNK,    amount: 3 }, { item: Item.ENSNARING_GAZE, amount:  8 }, { item: Item.DRACOLITE, amount: 30 }, { item: Item["WARRIOR'S_METAL_WHISTLE"],                  amount: 18 }], 
            "70+": [{ item: Item.VAJRADA_AMETHYST_CHUNK,    amount: 6 }, { item: Item.ENSNARING_GAZE, amount: 12 }, { item: Item.DRACOLITE, amount: 45 }, { item: Item["SAURIAN-CROWNED_WARRIOR'S_GOLDEN_WHISTLE"], amount: 12 }], 
            "80+": [{ item: Item.VAJRADA_AMETHYST_GEMSTONE, amount: 6 }, { item: Item.ENSNARING_GAZE, amount: 20 }, { item: Item.DRACOLITE, amount: 60 }, { item: Item["SAURIAN-CROWNED_WARRIOR'S_GOLDEN_WHISTLE"], amount: 24 }]
        }}, 
        elements: [{ element: Element.ELECTRO, materials: {  
            2:  [{ item: Item.TEACHINGS_OF_CONTENTION,    amount:  3 }, {item: Item["SENTRY'S_WOODEN_WHISTLE"],                   amount:  6 }],                                             
            3:  [{ item: Item.GUIDE_TO_CONTENTION,        amount:  2 }, {item: Item["WARRIOR'S_METAL_WHISTLE"],                  amount:  3 }],                                             
            4:  [{ item: Item.GUIDE_TO_CONTENTION,        amount:  4 }, {item: Item["WARRIOR'S_METAL_WHISTLE"],                  amount:  4 }],                                             
            5:  [{ item: Item.GUIDE_TO_CONTENTION,        amount:  6 }, {item: Item["WARRIOR'S_METAL_WHISTLE"],                  amount:  6 }],                                             
            6:  [{ item: Item.GUIDE_TO_CONTENTION,        amount:  9 }, {item: Item["WARRIOR'S_METAL_WHISTLE"],                  amount:  9 }],                                             
            7:  [{ item: Item.PHILOSOPHIES_OF_CONTENTION, amount:  4 }, {item: Item["SAURIAN-CROWNED_WARRIOR'S_GOLDEN_WHISTLE"], amount:  4 }, { item: Item.DENIAL_AND_JUDGMENT, amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_CONTENTION, amount:  6 }, {item: Item["SAURIAN-CROWNED_WARRIOR'S_GOLDEN_WHISTLE"], amount:  6 }, { item: Item.DENIAL_AND_JUDGMENT, amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_CONTENTION, amount: 12 }, {item: Item["SAURIAN-CROWNED_WARRIOR'S_GOLDEN_WHISTLE"], amount:  9 }, { item: Item.DENIAL_AND_JUDGMENT, amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_CONTENTION, amount: 16 }, {item: Item["SAURIAN-CROWNED_WARRIOR'S_GOLDEN_WHISTLE"], amount: 12 }, { item: Item.DENIAL_AND_JUDGMENT, amount: 2 }] 
        }}]
    }); static VARESA             = new CharacterEntity({ name: "VARESA",             rarity: 5, /* FINISHED v2 */ 
        level: { materials: {
            "20+": [{ item: Item.VAJRADA_AMETHYST_SLIVER,   amount: 1 },                                                    { item: Item.SKYSPLIT_GEMBLOOM, amount:  3 }, { item: Item.JUVENILE_FANG,    amount:  3 }],
            "40+": [{ item: Item.VAJRADA_AMETHYST_FRAGMENT, amount: 3 }, { item: Item.SPARKLESS_STATUE_CORE, amount:  2 }, { item: Item.SKYSPLIT_GEMBLOOM, amount: 10 }, { item: Item.JUVENILE_FANG,    amount: 15 }],
            "50+": [{ item: Item.VAJRADA_AMETHYST_FRAGMENT, amount: 6 }, { item: Item.SPARKLESS_STATUE_CORE, amount:  4 }, { item: Item.SKYSPLIT_GEMBLOOM, amount: 20 }, { item: Item.SEASONED_FANG,    amount: 12 }],
            "60+": [{ item: Item.VAJRADA_AMETHYST_CHUNK,    amount: 3 }, { item: Item.SPARKLESS_STATUE_CORE, amount:  8 }, { item: Item.SKYSPLIT_GEMBLOOM, amount: 30 }, { item: Item.SEASONED_FANG,    amount: 18 }],
            "70+": [{ item: Item.VAJRADA_AMETHYST_CHUNK,    amount: 6 }, { item: Item.SPARKLESS_STATUE_CORE, amount: 12 }, { item: Item.SKYSPLIT_GEMBLOOM, amount: 45 }, { item: Item["TYRANT'S_FANG"], amount: 12 }],
            "80+": [{ item: Item.VAJRADA_AMETHYST_GEMSTONE, amount: 6 }, { item: Item.SPARKLESS_STATUE_CORE, amount: 20 }, { item: Item.SKYSPLIT_GEMBLOOM, amount: 60 }, { item: Item["TYRANT'S_FANG"], amount: 24 }],
        }},
        elements: [{ element: Element.ELECTRO, materials: {
            2:  [{ item: Item.TEACHINGS_OF_CONFLICT,    amount:  3 }, {item: Item.JUVENILE_FANG,    amount:  6 }],                                             
            3:  [{ item: Item.GUIDE_TO_CONFLICT,        amount:  2 }, {item: Item.SEASONED_FANG,    amount:  3 }],                                             
            4:  [{ item: Item.GUIDE_TO_CONFLICT,        amount:  4 }, {item: Item.SEASONED_FANG,    amount:  4 }],                                             
            5:  [{ item: Item.GUIDE_TO_CONFLICT,        amount:  6 }, {item: Item.SEASONED_FANG,    amount:  6 }],                                             
            6:  [{ item: Item.GUIDE_TO_CONFLICT,        amount:  9 }, {item: Item.SEASONED_FANG,    amount:  9 }],                                             
            7:  [{ item: Item.PHILOSOPHIES_OF_CONFLICT, amount:  4 }, {item: Item["TYRANT'S_FANG"], amount:  4 }, { item: Item["ERODED_SCALE-FEATHER"], amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_CONFLICT, amount:  6 }, {item: Item["TYRANT'S_FANG"], amount:  6 }, { item: Item["ERODED_SCALE-FEATHER"], amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_CONFLICT, amount: 12 }, {item: Item["TYRANT'S_FANG"], amount:  9 }, { item: Item["ERODED_SCALE-FEATHER"], amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_CONFLICT, amount: 16 }, {item: Item["TYRANT'S_FANG"], amount: 12 }, { item: Item["ERODED_SCALE-FEATHER"], amount: 2 }] 
        }}]
    }); static IFA                = new CharacterEntity({ name: "IFA",                rarity: 4, /* FINISHED v2 */ 
        level: { materials: {
            "20+": [{ item: Item.VAYUDA_TURQUOISE_SLIVER  , amount: 1 },                                                    { item: Item.SAURIAN_CLAW_SUCCULENT, amount:  3 }, { item: Item.JUVENILE_FANG   , amount:  3 }],
            "40+": [{ item: Item.VAYUDA_TURQUOISE_FRAGMENT, amount: 3 }, { item: Item.SPARKLESS_STATUE_CORE, amount:  2 }, { item: Item.SAURIAN_CLAW_SUCCULENT, amount: 10 }, { item: Item.JUVENILE_FANG   , amount: 15 }],
            "50+": [{ item: Item.VAYUDA_TURQUOISE_FRAGMENT, amount: 6 }, { item: Item.SPARKLESS_STATUE_CORE, amount:  4 }, { item: Item.SAURIAN_CLAW_SUCCULENT, amount: 20 }, { item: Item.SEASONED_FANG   , amount: 12 }],
            "60+": [{ item: Item.VAYUDA_TURQUOISE_CHUNK   , amount: 3 }, { item: Item.SPARKLESS_STATUE_CORE, amount:  8 }, { item: Item.SAURIAN_CLAW_SUCCULENT, amount: 30 }, { item: Item.SEASONED_FANG   , amount: 18 }],
            "70+": [{ item: Item.VAYUDA_TURQUOISE_CHUNK   , amount: 6 }, { item: Item.SPARKLESS_STATUE_CORE, amount: 12 }, { item: Item.SAURIAN_CLAW_SUCCULENT, amount: 45 }, { item: Item["TYRANT'S_FANG"], amount: 12 }],
            "80+": [{ item: Item.VAYUDA_TURQUOISE_GEMSTONE, amount: 6 }, { item: Item.SPARKLESS_STATUE_CORE, amount: 20 }, { item: Item.SAURIAN_CLAW_SUCCULENT, amount: 60 }, { item: Item["TYRANT'S_FANG"], amount: 24 }],
        }},
        elements: [{ element: Element.ANEMO, materials: {
            2:  [{ item: Item.TEACHINGS_OF_CONFLICT   , amount:  3 }, {item: Item.JUVENILE_FANG   , amount:  6 }],
            3:  [{ item: Item.GUIDE_TO_CONFLICT       , amount:  2 }, {item: Item.SEASONED_FANG   , amount:  3 }],
            4:  [{ item: Item.GUIDE_TO_CONFLICT       , amount:  4 }, {item: Item.SEASONED_FANG   , amount:  4 }],
            5:  [{ item: Item.GUIDE_TO_CONFLICT       , amount:  6 }, {item: Item.SEASONED_FANG   , amount:  6 }],
            6:  [{ item: Item.GUIDE_TO_CONFLICT       , amount:  9 }, {item: Item.SEASONED_FANG   , amount:  9 }],
            7:  [{ item: Item.PHILOSOPHIES_OF_CONFLICT, amount:  4 }, {item: Item["TYRANT'S_FANG"], amount:  4 }, { item: Item.ASCENDED_SAMPLE__ROOK, amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_CONFLICT, amount:  6 }, {item: Item["TYRANT'S_FANG"], amount:  6 }, { item: Item.ASCENDED_SAMPLE__ROOK, amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_CONFLICT, amount: 12 }, {item: Item["TYRANT'S_FANG"], amount:  9 }, { item: Item.ASCENDED_SAMPLE__ROOK, amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_CONFLICT, amount: 16 }, {item: Item["TYRANT'S_FANG"], amount: 12 }, { item: Item.ASCENDED_SAMPLE__ROOK, amount: 2 }]
        }}]    
    }); static ESCOFFIER          = new CharacterEntity({ name: "ESCOFFIER",          rarity: 5, /* FINISHED v2 */ 
        level: { materials: {
            '20+': [{ item: Item.SHIVADA_JADE_SLIVER  , amount: 1 },                                                               { item: Item.BERYL_CONCH, amount:  3 }, { item: Item.MESHING_GEAR, amount:  3 }],
            '40+': [{ item: Item.SHIVADA_JADE_FRAGMENT, amount: 3 }, { item: Item.SECRET_SOURCE_AIRFLOW_ACCUMULATOR, amount:  2 }, { item: Item.BERYL_CONCH, amount: 10 }, { item: Item.MESHING_GEAR, amount: 15 }],
            '50+': [{ item: Item.SHIVADA_JADE_FRAGMENT, amount: 6 }, { item: Item.SECRET_SOURCE_AIRFLOW_ACCUMULATOR, amount:  4 }, { item: Item.BERYL_CONCH, amount: 20 }, { item: Item.MECHANICAL_SPUR_GEAR, amount: 12 }],
            '60+': [{ item: Item.SHIVADA_JADE_CHUNK   , amount: 3 }, { item: Item.SECRET_SOURCE_AIRFLOW_ACCUMULATOR, amount:  8 }, { item: Item.BERYL_CONCH, amount: 30 }, { item: Item.MECHANICAL_SPUR_GEAR, amount: 18 }],
            '70+': [{ item: Item.SHIVADA_JADE_CHUNK   , amount: 6 }, { item: Item.SECRET_SOURCE_AIRFLOW_ACCUMULATOR, amount: 12 }, { item: Item.BERYL_CONCH, amount: 45 }, { item: Item.ARTIFICED_DYNAMIC_GEAR, amount: 12 }],
            '80+': [{ item: Item.SHIVADA_JADE_GEMSTONE, amount: 6 }, { item: Item.SECRET_SOURCE_AIRFLOW_ACCUMULATOR, amount: 20 }, { item: Item.BERYL_CONCH, amount: 60 }, { item: Item.ARTIFICED_DYNAMIC_GEAR, amount: 24 }],
        }},
        elements: [{ element: Element.CRYO, materials: {
            2:  [{ item: Item.TEACHINGS_OF_JUSTICE   , amount:  3 }, {item: Item.MESHING_GEAR          , amount:  6 }],                                             
            3:  [{ item: Item.GUIDE_TO_JUSTICE       , amount:  2 }, {item: Item.MECHANICAL_SPUR_GEAR  , amount:  3 }],                                             
            4:  [{ item: Item.GUIDE_TO_JUSTICE       , amount:  4 }, {item: Item.MECHANICAL_SPUR_GEAR  , amount:  4 }],                                             
            5:  [{ item: Item.GUIDE_TO_JUSTICE       , amount:  6 }, {item: Item.MECHANICAL_SPUR_GEAR  , amount:  6 }],                                             
            6:  [{ item: Item.GUIDE_TO_JUSTICE       , amount:  9 }, {item: Item.MECHANICAL_SPUR_GEAR  , amount:  9 }],                                             
            7:  [{ item: Item.PHILOSOPHIES_OF_JUSTICE, amount:  4 }, {item: Item.ARTIFICED_DYNAMIC_GEAR, amount:  4 }, { item: Item.ERODED_HORN, amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_JUSTICE, amount:  6 }, {item: Item.ARTIFICED_DYNAMIC_GEAR, amount:  6 }, { item: Item.ERODED_HORN, amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_JUSTICE, amount: 12 }, {item: Item.ARTIFICED_DYNAMIC_GEAR, amount:  9 }, { item: Item.ERODED_HORN, amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_JUSTICE, amount: 16 }, {item: Item.ARTIFICED_DYNAMIC_GEAR, amount: 12 }, { item: Item.ERODED_HORN, amount: 2 }] 
        }}]
    }); static DAHLIA             = new CharacterEntity({ name: "DAHLIA",             rarity: 4, /* FINISHED v2 */ 
        level: { materials: {
            "20+": [{ item: Item.VARUNADA_LAZURITE_SLIVER,   amount: 1 },                                                               { item: Item.CALLA_LILY, amount:  3 }, { item: Item.FIRM_ARROWHEAD     , amount:  3 }],
            "40+": [{ item: Item.VARUNADA_LAZURITE_FRAGMENT, amount: 3 }, { item: Item.SECRET_SOURCE_AIRFLOW_ACCUMULATOR, amount:  2 }, { item: Item.CALLA_LILY, amount: 10 }, { item: Item.FIRM_ARROWHEAD     , amount: 15 }],
            "50+": [{ item: Item.VARUNADA_LAZURITE_FRAGMENT, amount: 6 }, { item: Item.SECRET_SOURCE_AIRFLOW_ACCUMULATOR, amount:  4 }, { item: Item.CALLA_LILY, amount: 20 }, { item: Item.SHARP_ARROWHEAD    , amount: 12 }],
            "60+": [{ item: Item.VARUNADA_LAZURITE_CHUNK,    amount: 3 }, { item: Item.SECRET_SOURCE_AIRFLOW_ACCUMULATOR, amount:  8 }, { item: Item.CALLA_LILY, amount: 30 }, { item: Item.SHARP_ARROWHEAD    , amount: 18 }],
            "70+": [{ item: Item.VARUNADA_LAZURITE_CHUNK,    amount: 6 }, { item: Item.SECRET_SOURCE_AIRFLOW_ACCUMULATOR, amount: 12 }, { item: Item.CALLA_LILY, amount: 45 }, { item: Item.WEATHERED_ARROWHEAD, amount: 12 }],
            "80+": [{ item: Item.VARUNADA_LAZURITE_GEMSTONE, amount: 6 }, { item: Item.SECRET_SOURCE_AIRFLOW_ACCUMULATOR, amount: 20 }, { item: Item.CALLA_LILY, amount: 60 }, { item: Item.WEATHERED_ARROWHEAD, amount: 24 }],
        }},
        elements: [{ element: Element.HYDRO, materials: {
            2:  [{ item: Item.TEACHINGS_OF_BALLAD,    amount:  3 }, {item: Item.FIRM_ARROWHEAD     , amount:  6 }],                                             
            3:  [{ item: Item.GUIDE_TO_BALLAD,        amount:  2 }, {item: Item.SHARP_ARROWHEAD    , amount:  3 }],                                             
            4:  [{ item: Item.GUIDE_TO_BALLAD,        amount:  4 }, {item: Item.SHARP_ARROWHEAD    , amount:  4 }],                                             
            5:  [{ item: Item.GUIDE_TO_BALLAD,        amount:  6 }, {item: Item.SHARP_ARROWHEAD    , amount:  6 }],                                             
            6:  [{ item: Item.GUIDE_TO_BALLAD,        amount:  9 }, {item: Item.SHARP_ARROWHEAD    , amount:  9 }],                                             
            7:  [{ item: Item.PHILOSOPHIES_OF_BALLAD, amount:  4 }, {item: Item.WEATHERED_ARROWHEAD, amount:  4 }, { item: Item["ERODED_SCALE-FEATHER"], amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_BALLAD, amount:  6 }, {item: Item.WEATHERED_ARROWHEAD, amount:  6 }, { item: Item["ERODED_SCALE-FEATHER"], amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_BALLAD, amount: 12 }, {item: Item.WEATHERED_ARROWHEAD, amount:  9 }, { item: Item["ERODED_SCALE-FEATHER"], amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_BALLAD, amount: 16 }, {item: Item.WEATHERED_ARROWHEAD, amount: 12 }, { item: Item["ERODED_SCALE-FEATHER"], amount: 2 }] 
        }}]
    }); static SKIRK              = new CharacterEntity({ name: "SKIRK",              rarity: 5, /* FINISHED v2 */ 
        level: { materials: {
            "20+": [{ item: Item.SHIVADA_JADE_SLIVER,   amount: 1 },                                            { item: Item.SKYSPLIT_GEMBLOOM, amount:  3 }, { item: Item.MESHING_GEAR          , amount:  3 }],
            "40+": [{ item: Item.SHIVADA_JADE_FRAGMENT, amount: 3 }, { item: Item.ENSNARING_GAZE, amount:  2 }, { item: Item.SKYSPLIT_GEMBLOOM, amount: 10 }, { item: Item.MESHING_GEAR          , amount: 15 }],
            "50+": [{ item: Item.SHIVADA_JADE_FRAGMENT, amount: 6 }, { item: Item.ENSNARING_GAZE, amount:  4 }, { item: Item.SKYSPLIT_GEMBLOOM, amount: 20 }, { item: Item.MECHANICAL_SPUR_GEAR  , amount: 12 }],
            "60+": [{ item: Item.SHIVADA_JADE_CHUNK,    amount: 3 }, { item: Item.ENSNARING_GAZE, amount:  8 }, { item: Item.SKYSPLIT_GEMBLOOM, amount: 30 }, { item: Item.MECHANICAL_SPUR_GEAR  , amount: 18 }],
            "70+": [{ item: Item.SHIVADA_JADE_CHUNK,    amount: 6 }, { item: Item.ENSNARING_GAZE, amount: 12 }, { item: Item.SKYSPLIT_GEMBLOOM, amount: 45 }, { item: Item.ARTIFICED_DYNAMIC_GEAR, amount: 12 }],
            "80+": [{ item: Item.SHIVADA_JADE_GEMSTONE, amount: 6 }, { item: Item.ENSNARING_GAZE, amount: 20 }, { item: Item.SKYSPLIT_GEMBLOOM, amount: 60 }, { item: Item.ARTIFICED_DYNAMIC_GEAR, amount: 24 }],
        }},
        elements: [{ element: Element.CRYO, materials: {
            2:  [{ item: Item.TEACHINGS_OF_CONTENTION,    amount:  3 }, {item: Item.ENSNARING_GAZE        , amount:  6 }],                                             
            3:  [{ item: Item.GUIDE_TO_CONTENTION,        amount:  2 }, {item: Item.MECHANICAL_SPUR_GEAR  , amount:  3 }],                                             
            4:  [{ item: Item.GUIDE_TO_CONTENTION,        amount:  4 }, {item: Item.MECHANICAL_SPUR_GEAR  , amount:  4 }],                                             
            5:  [{ item: Item.GUIDE_TO_CONTENTION,        amount:  6 }, {item: Item.MECHANICAL_SPUR_GEAR  , amount:  6 }],                                             
            6:  [{ item: Item.GUIDE_TO_CONTENTION,        amount:  9 }, {item: Item.MECHANICAL_SPUR_GEAR  , amount:  9 }],                                             
            7:  [{ item: Item.PHILOSOPHIES_OF_CONTENTION, amount:  4 }, {item: Item.ARTIFICED_DYNAMIC_GEAR, amount:  4 }, { item: Item["ASCENDED_SAMPLE__KNIGHT"], amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_CONTENTION, amount:  6 }, {item: Item.ARTIFICED_DYNAMIC_GEAR, amount:  6 }, { item: Item["ASCENDED_SAMPLE__KNIGHT"], amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_CONTENTION, amount: 12 }, {item: Item.ARTIFICED_DYNAMIC_GEAR, amount:  9 }, { item: Item["ASCENDED_SAMPLE__KNIGHT"], amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_CONTENTION, amount: 16 }, {item: Item.ARTIFICED_DYNAMIC_GEAR, amount: 12 }, { item: Item["ASCENDED_SAMPLE__KNIGHT"], amount: 2 }] 
        }}]
    }); static INEFFA             = new CharacterEntity({ name: "INEFFA",             rarity: 5, /* FINISHED v2 */ 
        level: { materials: {
            "20+": [{ item: Item.VAJRADA_AMETHYST_SLIVER,   amount: 1 },                                                               { item: Item.GLOWING_HORNSHROOM, amount:  3 }, { item: Item["SENTRY'S_WOODEN_WHISTLE"]                 , amount:  3 }],
            "40+": [{ item: Item.VAJRADA_AMETHYST_FRAGMENT, amount: 3 }, { item: Item.SECRET_SOURCE_AIRFLOW_ACCUMULATOR, amount:  2 }, { item: Item.GLOWING_HORNSHROOM, amount: 10 }, { item: Item["SENTRY'S_WOODEN_WHISTLE"]                 , amount: 15 }],
            "50+": [{ item: Item.VAJRADA_AMETHYST_FRAGMENT, amount: 6 }, { item: Item.SECRET_SOURCE_AIRFLOW_ACCUMULATOR, amount:  4 }, { item: Item.GLOWING_HORNSHROOM, amount: 20 }, { item: Item["WARRIOR'S_METAL_WHISTLE"]                 , amount: 12 }],
            "60+": [{ item: Item.VAJRADA_AMETHYST_CHUNK,    amount: 3 }, { item: Item.SECRET_SOURCE_AIRFLOW_ACCUMULATOR, amount:  8 }, { item: Item.GLOWING_HORNSHROOM, amount: 30 }, { item: Item["WARRIOR'S_METAL_WHISTLE"]                 , amount: 18 }],
            "70+": [{ item: Item.VAJRADA_AMETHYST_CHUNK,    amount: 6 }, { item: Item.SECRET_SOURCE_AIRFLOW_ACCUMULATOR, amount: 12 }, { item: Item.GLOWING_HORNSHROOM, amount: 45 }, { item: Item["SAURIAN-CROWNED_WARRIOR'S_GOLDEN_WHISTLE"], amount: 12 }],
            "80+": [{ item: Item.VAJRADA_AMETHYST_GEMSTONE, amount: 6 }, { item: Item.SECRET_SOURCE_AIRFLOW_ACCUMULATOR, amount: 20 }, { item: Item.GLOWING_HORNSHROOM, amount: 60 }, { item: Item["SAURIAN-CROWNED_WARRIOR'S_GOLDEN_WHISTLE"], amount: 24 }],
        }},
        elements: [{ element: Element.ELECTRO, materials: {
            2:  [{ item: Item.TEACHINGS_OF_CONFLICT,    amount:  3 }, {item: Item["SENTRY'S_WOODEN_WHISTLE"]                 , amount:  6 }],                                             
            3:  [{ item: Item.GUIDE_TO_CONFLICT,        amount:  2 }, {item: Item["WARRIOR'S_METAL_WHISTLE"]                 , amount:  3 }],                                             
            4:  [{ item: Item.GUIDE_TO_CONFLICT,        amount:  4 }, {item: Item["WARRIOR'S_METAL_WHISTLE"]                 , amount:  4 }],                                             
            5:  [{ item: Item.GUIDE_TO_CONFLICT,        amount:  6 }, {item: Item["WARRIOR'S_METAL_WHISTLE"]                 , amount:  6 }],                                             
            6:  [{ item: Item.GUIDE_TO_CONFLICT,        amount:  9 }, {item: Item["WARRIOR'S_METAL_WHISTLE"]                 , amount:  9 }],                                             
            7:  [{ item: Item.PHILOSOPHIES_OF_CONFLICT, amount:  4 }, {item: Item["SAURIAN-CROWNED_WARRIOR'S_GOLDEN_WHISTLE"], amount:  4 }, { item: Item.ERODED_SUNFIRE, amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_CONFLICT, amount:  6 }, {item: Item["SAURIAN-CROWNED_WARRIOR'S_GOLDEN_WHISTLE"], amount:  6 }, { item: Item.ERODED_SUNFIRE, amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_CONFLICT, amount: 12 }, {item: Item["SAURIAN-CROWNED_WARRIOR'S_GOLDEN_WHISTLE"], amount:  9 }, { item: Item.ERODED_SUNFIRE, amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_CONFLICT, amount: 16 }, {item: Item["SAURIAN-CROWNED_WARRIOR'S_GOLDEN_WHISTLE"], amount: 12 }, { item: Item.ERODED_SUNFIRE, amount: 2 }] 
        }}]
    }); static AINO               = new CharacterEntity({ name: "AINO",               rarity: 4, /* FINISHED v2 */ 
        level: { materials: {
            "20+": [{ item: Item.VARUNADA_LAZURITE_SLIVER,   amount: 1 },                                                             { item: Item.PORTABLE_BEARING, amount:  3 }, { item: Item.BROKEN_DRIVE_SHAFT    , amount:  3 }],
            "40+": [{ item: Item.VARUNADA_LAZURITE_FRAGMENT, amount: 3 }, { item: Item.PRECISION_KUUVAHKI_STAMPING_DIE, amount:  2 }, { item: Item.PORTABLE_BEARING, amount: 10 }, { item: Item.BROKEN_DRIVE_SHAFT    , amount: 15 }],
            "50+": [{ item: Item.VARUNADA_LAZURITE_FRAGMENT, amount: 6 }, { item: Item.PRECISION_KUUVAHKI_STAMPING_DIE, amount:  4 }, { item: Item.PORTABLE_BEARING, amount: 20 }, { item: Item.REINFORCED_DRIVE_SHAFT, amount: 12 }],
            "60+": [{ item: Item.VARUNADA_LAZURITE_CHUNK,    amount: 3 }, { item: Item.PRECISION_KUUVAHKI_STAMPING_DIE, amount:  8 }, { item: Item.PORTABLE_BEARING, amount: 30 }, { item: Item.REINFORCED_DRIVE_SHAFT, amount: 18 }],
            "70+": [{ item: Item.VARUNADA_LAZURITE_CHUNK,    amount: 6 }, { item: Item.PRECISION_KUUVAHKI_STAMPING_DIE, amount: 12 }, { item: Item.PORTABLE_BEARING, amount: 45 }, { item: Item.PRECISION_DRIVE_SHAFT , amount: 12 }],
            "80+": [{ item: Item.VARUNADA_LAZURITE_GEMSTONE, amount: 6 }, { item: Item.PRECISION_KUUVAHKI_STAMPING_DIE, amount: 20 }, { item: Item.PORTABLE_BEARING, amount: 60 }, { item: Item.PRECISION_DRIVE_SHAFT , amount: 24 }],
        }},
        elements: [{ element: Element.ELECTRO, materials: {
            2:  [{ item: Item.TEACHINGS_OF_ELYSIUM,    amount:  3 }, {item: Item.BROKEN_DRIVE_SHAFT    , amount:  6 }],                                             
            3:  [{ item: Item.GUIDE_TO_ELYSIUM,        amount:  2 }, {item: Item.REINFORCED_DRIVE_SHAFT, amount:  3 }],                                             
            4:  [{ item: Item.GUIDE_TO_ELYSIUM,        amount:  4 }, {item: Item.REINFORCED_DRIVE_SHAFT, amount:  4 }],                                             
            5:  [{ item: Item.GUIDE_TO_ELYSIUM,        amount:  6 }, {item: Item.REINFORCED_DRIVE_SHAFT, amount:  6 }],                                             
            6:  [{ item: Item.GUIDE_TO_ELYSIUM,        amount:  9 }, {item: Item.REINFORCED_DRIVE_SHAFT, amount:  9 }],                                             
            7:  [{ item: Item.PHILOSOPHIES_OF_ELYSIUM, amount:  4 }, {item: Item.PRECISION_DRIVE_SHAFT , amount:  4 }, { item: Item.SILKEN_FEATHER, amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_ELYSIUM, amount:  6 }, {item: Item.PRECISION_DRIVE_SHAFT , amount:  6 }, { item: Item.SILKEN_FEATHER, amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_ELYSIUM, amount: 12 }, {item: Item.PRECISION_DRIVE_SHAFT , amount:  9 }, { item: Item.SILKEN_FEATHER, amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_ELYSIUM, amount: 16 }, {item: Item.PRECISION_DRIVE_SHAFT , amount: 12 }, { item: Item.SILKEN_FEATHER, amount: 2 }] 
        }}]
    }); static LAUMA              = new CharacterEntity({ name: "LAUMA",              rarity: 5, /* FINISHED v2 */ 
        level: { materials: {
            "20+": [{ item: Item.NAGADUS_EMERALD_SLIVER,   amount: 1 },                                                            { item: Item.MOONFALL_SILVER, amount:  3 }, { item: Item.TATTERED_WARRANT       , amount:  3 }],
            "40+": [{ item: Item.NAGADUS_EMERALD_FRAGMENT, amount: 3 }, { item: Item["LIGHTBEARING_SCALE-FEATHER"], amount:  2 }, { item: Item.MOONFALL_SILVER, amount: 10 }, { item: Item.TATTERED_WARRANT       , amount: 15 }],
            "50+": [{ item: Item.NAGADUS_EMERALD_FRAGMENT, amount: 6 }, { item: Item["LIGHTBEARING_SCALE-FEATHER"], amount:  4 }, { item: Item.MOONFALL_SILVER, amount: 20 }, { item: Item.IMMACULATE_WARRANT     , amount: 12 }],
            "60+": [{ item: Item.NAGADUS_EMERALD_CHUNK,    amount: 3 }, { item: Item["LIGHTBEARING_SCALE-FEATHER"], amount:  8 }, { item: Item.MOONFALL_SILVER, amount: 30 }, { item: Item.IMMACULATE_WARRANT     , amount: 18 }],
            "70+": [{ item: Item.NAGADUS_EMERALD_CHUNK,    amount: 6 }, { item: Item["LIGHTBEARING_SCALE-FEATHER"], amount: 12 }, { item: Item.MOONFALL_SILVER, amount: 45 }, { item: Item["FROST-ETCHED_WARRANT"], amount: 12 }],
            "80+": [{ item: Item.NAGADUS_EMERALD_GEMSTONE, amount: 6 }, { item: Item["LIGHTBEARING_SCALE-FEATHER"], amount: 20 }, { item: Item.MOONFALL_SILVER, amount: 60 }, { item: Item["FROST-ETCHED_WARRANT"], amount: 24 }],
        }},
        elements: [{ element: Element.ELECTRO, materials: {
            2:  [{ item: Item.TEACHINGS_OF_MOONLIGHT,    amount:  3 }, {item: Item.TATTERED_WARRANT       , amount:  6 }],                                             
            3:  [{ item: Item.GUIDE_TO_MOONLIGHT,        amount:  2 }, {item: Item.IMMACULATE_WARRANT     , amount:  3 }],                                             
            4:  [{ item: Item.GUIDE_TO_MOONLIGHT,        amount:  4 }, {item: Item.IMMACULATE_WARRANT     , amount:  4 }],                                             
            5:  [{ item: Item.GUIDE_TO_MOONLIGHT,        amount:  6 }, {item: Item.IMMACULATE_WARRANT     , amount:  6 }],                                             
            6:  [{ item: Item.GUIDE_TO_MOONLIGHT,        amount:  9 }, {item: Item.IMMACULATE_WARRANT     , amount:  9 }],                                             
            7:  [{ item: Item.PHILOSOPHIES_OF_MOONLIGHT, amount:  4 }, {item: Item["FROST-ETCHED_WARRANT"], amount:  4 }, { item: Item["ERODED_SCALE-FEATHER"], amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_MOONLIGHT, amount:  6 }, {item: Item["FROST-ETCHED_WARRANT"], amount:  6 }, { item: Item["ERODED_SCALE-FEATHER"], amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_MOONLIGHT, amount: 12 }, {item: Item["FROST-ETCHED_WARRANT"], amount:  9 }, { item: Item["ERODED_SCALE-FEATHER"], amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_MOONLIGHT, amount: 16 }, {item: Item["FROST-ETCHED_WARRANT"], amount: 12 }, { item: Item["ERODED_SCALE-FEATHER"], amount: 2 }] 
        }}]
    }); static FLINS              = new CharacterEntity({ name: "FLINS",              rarity: 5, /* FINISHED v2 */ 
        level: { materials: {
            "20+": [{ item: Item.VAJRADA_AMETHYST_SLIVER  , amount: 1 },                                                             { item: Item.FROSTLAMP_FLOWER, amount:  3 }, { item: Item.BROKEN_DRIVE_SHAFT    , amount:  3 }],            
            "40+": [{ item: Item.VAJRADA_AMETHYST_FRAGMENT, amount: 3 }, { item: Item.PRECISION_KUUVAHKI_STAMPING_DIE, amount:  2 }, { item: Item.FROSTLAMP_FLOWER, amount: 10 }, { item: Item.BROKEN_DRIVE_SHAFT    , amount: 15 }],            
            "50+": [{ item: Item.VAJRADA_AMETHYST_FRAGMENT, amount: 6 }, { item: Item.PRECISION_KUUVAHKI_STAMPING_DIE, amount:  4 }, { item: Item.FROSTLAMP_FLOWER, amount: 20 }, { item: Item.REINFORCED_DRIVE_SHAFT, amount: 12 }],            
            "60+": [{ item: Item.VAJRADA_AMETHYST_CHUNK   , amount: 3 }, { item: Item.PRECISION_KUUVAHKI_STAMPING_DIE, amount:  8 }, { item: Item.FROSTLAMP_FLOWER, amount: 30 }, { item: Item.REINFORCED_DRIVE_SHAFT, amount: 18 }],            
            "70+": [{ item: Item.VAJRADA_AMETHYST_CHUNK   , amount: 6 }, { item: Item.PRECISION_KUUVAHKI_STAMPING_DIE, amount: 12 }, { item: Item.FROSTLAMP_FLOWER, amount: 45 }, { item: Item.PRECISION_DRIVE_SHAFT , amount: 12 }],            
            "80+": [{ item: Item.VAJRADA_AMETHYST_GEMSTONE, amount: 6 }, { item: Item.PRECISION_KUUVAHKI_STAMPING_DIE, amount: 20 }, { item: Item.FROSTLAMP_FLOWER, amount: 60 }, { item: Item.PRECISION_DRIVE_SHAFT , amount: 24 }],        }},
        elements: [{ element: Element.ELECTRO, materials: {
            2:  [{ item: Item.TEACHINGS_OF_VAGRANCY,    amount:  3 }, {item: Item.BROKEN_DRIVE_SHAFT    , amount:  6 }],
            3:  [{ item: Item.GUIDE_TO_VAGRANCY,        amount:  2 }, {item: Item.REINFORCED_DRIVE_SHAFT, amount:  3 }],
            4:  [{ item: Item.GUIDE_TO_VAGRANCY,        amount:  4 }, {item: Item.REINFORCED_DRIVE_SHAFT, amount:  4 }],
            5:  [{ item: Item.GUIDE_TO_VAGRANCY,        amount:  6 }, {item: Item.REINFORCED_DRIVE_SHAFT, amount:  6 }],
            6:  [{ item: Item.GUIDE_TO_VAGRANCY,        amount:  9 }, {item: Item.REINFORCED_DRIVE_SHAFT, amount:  9 }],
            7:  [{ item: Item.PHILOSOPHIES_OF_VAGRANCY, amount:  4 }, {item: Item.PRECISION_DRIVE_SHAFT , amount:  4 }, { item: Item.ASCENDED_SAMPLE__QUEEN, amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_VAGRANCY, amount:  6 }, {item: Item.PRECISION_DRIVE_SHAFT , amount:  6 }, { item: Item.ASCENDED_SAMPLE__QUEEN, amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_VAGRANCY, amount: 12 }, {item: Item.PRECISION_DRIVE_SHAFT , amount:  9 }, { item: Item.ASCENDED_SAMPLE__QUEEN, amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_VAGRANCY, amount: 16 }, {item: Item.PRECISION_DRIVE_SHAFT , amount: 12 }, { item: Item.ASCENDED_SAMPLE__QUEEN, amount: 2 }]
        }}]
    }); static MANEKIN            = new CharacterEntity({ name: "MANEKIN",            rarity: 5, /* FINISHED v2 */ 
        level: { materials: {
            "20+": [],
            "40+": [],
            "50+": [],
            "60+": [],
            "70+": [],
            "80+": [],
        }},
        elements: [{ element: Element.UNKNOWN, materials: {
            2:  [],                                             
            3:  [],                                             
            4:  [],                                             
            5:  [],                                             
            6:  [],                                             
            7:  [],
            8:  [],
            9:  [],
            10: [] 
        }}]
    }); static MANEKINA           = new CharacterEntity({ name: "MANEKINA",           rarity: 5, /* FINISHED v2 */ 
        level: { materials: {
            "20+": [],
            "40+": [],
            "50+": [],
            "60+": [],
            "70+": [],
            "80+": [],
        }},
        elements: [{ element: Element.UNKNOWN, materials: {
            2:  [],                                             
            3:  [],                                             
            4:  [],                                             
            5:  [],                                             
            6:  [],                                             
            7:  [],
            8:  [],
            9:  [],
            10: [] 
        }}]
    }); static NEFER              = new CharacterEntity({ name: "NEFER",              rarity: 5, /* FINISHED v2 */ 
        level: { materials: {
            "20+": [{ item: Item.NAGADUS_EMERALD_SLIVER  , amount: 1 },                                            { item: Item.MOONFALL_SILVER, amount:  3 }, { item: Item.TATTERED_WARRANT       , amount:  3 }],
            "40+": [{ item: Item.NAGADUS_EMERALD_FRAGMENT, amount: 3 }, { item: Item.RADIANT_ANTLER, amount:  2 }, { item: Item.MOONFALL_SILVER, amount: 10 }, { item: Item.TATTERED_WARRANT       , amount: 15 }],
            "50+": [{ item: Item.NAGADUS_EMERALD_FRAGMENT, amount: 6 }, { item: Item.RADIANT_ANTLER, amount:  4 }, { item: Item.MOONFALL_SILVER, amount: 20 }, { item: Item.IMMACULATE_WARRANT     , amount: 12 }],
            "60+": [{ item: Item.NAGADUS_EMERALD_CHUNK   , amount: 3 }, { item: Item.RADIANT_ANTLER, amount:  8 }, { item: Item.MOONFALL_SILVER, amount: 30 }, { item: Item.IMMACULATE_WARRANT     , amount: 18 }],
            "70+": [{ item: Item.NAGADUS_EMERALD_CHUNK   , amount: 6 }, { item: Item.RADIANT_ANTLER, amount: 12 }, { item: Item.MOONFALL_SILVER, amount: 45 }, { item: Item["FROST-ETCHED_WARRANT"], amount: 12 }],
            "80+": [{ item: Item.NAGADUS_EMERALD_GEMSTONE, amount: 6 }, { item: Item.RADIANT_ANTLER, amount: 20 }, { item: Item.MOONFALL_SILVER, amount: 60 }, { item: Item["FROST-ETCHED_WARRANT"], amount: 24 }],
        }},
        elements: [{ element: Element.ELECTRO, materials: {
            2:  [{ item: Item.TEACHINGS_OF_ELYSIUM,    amount:  3 }, {item: Item.TATTERED_WARRANT       , amount:  6 }],
            3:  [{ item: Item.GUIDE_TO_ELYSIUM,        amount:  2 }, {item: Item.IMMACULATE_WARRANT     , amount:  3 }],
            4:  [{ item: Item.GUIDE_TO_ELYSIUM,        amount:  4 }, {item: Item.IMMACULATE_WARRANT     , amount:  4 }],
            5:  [{ item: Item.GUIDE_TO_ELYSIUM,        amount:  6 }, {item: Item.IMMACULATE_WARRANT     , amount:  6 }],
            6:  [{ item: Item.GUIDE_TO_ELYSIUM,        amount:  9 }, {item: Item.IMMACULATE_WARRANT     , amount:  9 }],
            7:  [{ item: Item.PHILOSOPHIES_OF_ELYSIUM, amount:  4 }, {item: Item["FROST-ETCHED_WARRANT"], amount:  4 }, { item: Item.ASCENDED_SAMPLE__ROOK, amount: 1 }],
            8:  [{ item: Item.PHILOSOPHIES_OF_ELYSIUM, amount:  6 }, {item: Item["FROST-ETCHED_WARRANT"], amount:  6 }, { item: Item.ASCENDED_SAMPLE__ROOK, amount: 1 }],
            9:  [{ item: Item.PHILOSOPHIES_OF_ELYSIUM, amount: 12 }, {item: Item["FROST-ETCHED_WARRANT"], amount:  9 }, { item: Item.ASCENDED_SAMPLE__ROOK, amount: 2 }],
            10: [{ item: Item.PHILOSOPHIES_OF_ELYSIUM, amount: 16 }, {item: Item["FROST-ETCHED_WARRANT"], amount: 12 }, { item: Item.ASCENDED_SAMPLE__ROOK, amount: 2 }]
        }}]    
    });

}

export const Character = new Proxy(CharacterList, {
    get(target, prop) {
        if(prop === "get") { 
            return (key) => CharacterList[typeof key === "number" ? CharacterMap.get(key): key]
        } 
        if(prop === "getMaterials") {
            let totalMats = []
            for(let characterName in Character){
                const character = Character.get(characterName);
                for(let mat of character.getMaterials()){
                    mat.dest.push(characterName);
                    totalMats.push(mat)
                }
            }
            return Inventory.mergeMaterials([], totalMats);
        }
        if (!(prop in target)) return undefined;
        return target[prop];
    }
});