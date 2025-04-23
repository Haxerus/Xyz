ServerEvents.recipes(event => {
    let card_item = (id) => {
        return Item.of("ydm:card", {
            rarity: "Ultra Rare",
            code: `${id}_0`,
            id: parseInt(id),
            image_index: 0
        })
    }

    // --- Promo Stuff ---

    // Joey's World Mega Pack
    event.recipes.create.crushing(['kubejs:n_dust', global.Helpers.get_pack("LCJW").withChance(0.5)], 'kubejs:dm_blank')

    // Seal of Orichalcos
    event.recipes.create.haunting(['supplementaries:ash', card_item(48179391).withChance(0.01)], 'ydm:card')
})


LootJS.modifiers(event => {
    let card_loot = (id) => {
        return LootEntry.of("ydm:card", {
            rarity: "Ultra Rare",
            code: `${id}_0`,
            id: parseInt(id),
            image_index: 0
        })
    }

    // Void Ogre Dragon
    event
        .addLootTableModifier('minecraft:entities/ender_dragon')
        .randomChance(0.5)
        .addLoot(card_loot(81020646))

    // Volcasaurus
    event
        .addLootTableModifier('friendsandfoes:entities/wildfire')
        .addLoot(card_loot(29669359))
})