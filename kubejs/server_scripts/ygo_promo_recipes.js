let card_item = (id, rarity) => {
    return Item.of("ydm:card", {
        rarity: rarity,
        code: `${id}_0`,
        id: parseInt(id),
        image_index: 0
    })
}

let card_loot = (id, rarity) => {
    return LootEntry.of("ydm:card", {
        rarity: rarity,
        code: `${id}_0`,
        id: parseInt(id),
        image_index: 0
    })
}

ServerEvents.recipes(event => {
    // --- Promo Stuff ---

    // Joey's World Mega Pack
    event.recipes.create.crushing(['kubejs:n_dust', global.Helpers.get_pack("LCJW").withChance(0.5)], 'kubejs:dm_blank')

    // Seal of Orichalcos
    event.recipes.create.haunting(['supplementaries:ash', card_item(48179391, "Ultra Rare").withChance(0.01)], 'ydm:card')
})


LootJS.modifiers(event => {
    // Void Ogre Dragon
    event
        .addLootTableModifier('minecraft:entities/ender_dragon')
        .randomChance(0.5)
        .addLoot(card_loot(81020646, "Ultra Rare"))

    // Volcasaurus
    event
        .addLootTableModifier('friendsandfoes:entities/wildfire')
        .addLoot(card_loot(29669359, "Ultra Rare"))
    
    // Black Ship of Corn
    event
        .addLootTableModifier("lootr:chests/elytra")
        .randomChance(0.5)
        .addLoot(card_loot(51735257, "Super Rare"))
})

ItemEvents.rightClicked('aquaculture:message_in_a_bottle', event => {
    if (Math.random() < 0.3) {
        // 30% chance to obtain
        event.player.give(card_item(97433739, "Ultra Rare"))
    }
})