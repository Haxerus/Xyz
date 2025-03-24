LootJS.modifiers((event) => {
    console.log("Custom YGO Loot Modification")

    let get_pack = (pack_code) => {
        return LootEntry.of("ydm:set", { code: pack_code })
    }

    // event
    //     .addLootTableModifier(lootTables)
    //     .randomChance(0.1)
    //     .addWeightedLoot(packs.map((p) => get_pack(p).withChance(1)))
    
    // event
    //     .addLootTableModifier(stronghold)
    //     .addWeightedLoot(packs.map((p) => get_pack(p).withChance(1)))
    
    // event
    //     .addLootTableModifier(test)
    //     .addLoot(get_pack("ABPF"))
    
    // event
    //     .addLootTableModifier("betterdungeons:skeleton_dungeon/chests/middle")
    //     .addLoot(get_pack("AP06"))
    
});