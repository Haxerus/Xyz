LootJS.modifiers((event) => {
    console.log("Custom YGO Loot Modification")

    const MAXX_C = 23434538

    const MAXX_C_RATE = 1 / 25000
    const ELYTRA_RATE = 1 / 100

    const RARE_MOBS = [
        "minecraft:entities/evoker",
        "minecraft:entities/phantom",
        "minecraft:entities/ravager",
        "minecraft:entities/skeleton_horse",
        "minecraft:entities/zoglin"
    ]

    const RARE_DROP_RATE = 1 / 2000

    const BOSSES = [
        "endergetic:entities/brood_eetle",
        "friendsandfoes:entities/wildfire",
        "minecraft:entities/elder_guardian",
        "minecraft:entities/ender_dragon",
        "minecraft:entities/warden",
        "minecraft:entities/wither"
    ]

    const BOSS_DROP_RATE = 1 / 200

    let get_pack_loot = (pack_code) => {
        return LootEntry.of("ydm:set", { code: pack_code })
    }

    let banned_card_loot = (id) => {
        return LootEntry.of("ydm:card", {
            rarity: "Forbidden",
            code: `${id}_0`,
            id: parseInt(id),
            image_index: 0
        })
    }

    let ygo_loot = JsonIO.toObject(JsonIO.readJson('kubejs/data/ygo_loot.json'))
    let banned_ids = JsonIO.toObject(JsonIO.readJson('kubejs/data/banned_cards.json')).ids
    let loot_pools = Object.values(ygo_loot)

    loot_pools.forEach((loot) => {
        event
            .addLootTableModifier(loot.tables)
            .randomChance(loot.chance)
            .addWeightedLoot(loot.packs.map((p) => get_pack_loot(p.code).withChance(p.weight)))
    })

    event
        .addLootTableModifier(RARE_MOBS)
        .randomChance(RARE_DROP_RATE)
        .addWeightedLoot(banned_ids.map((id) => {
            if (id !== MAXX_C) {
                return banned_card_loot(id).withChance(1)
            }
        }))

    event
        .addLootTableModifier(BOSSES)
        .randomChance(BOSS_DROP_RATE)
        .addWeightedLoot(banned_ids.map((id) => {
            if (id !== MAXX_C) {
                return banned_card_loot(id).withChance(1)
            }
        }))

    event
        .addLootTableModifier("lootr:chests/elytra")
        .randomChance(ELYTRA_RATE)
        .addWeightedLoot(banned_ids.map((id) => {
            if (id !== MAXX_C) {
                return banned_card_loot(id).withChance(1)
            }
        }))

    // MAXX "C" is a 1/25k global drop
    event
        .addLootTypeModifier(LootType.ENTITY)
        .randomChance(MAXX_C_RATE)
        .addLoot(banned_card_loot(MAXX_C));
})