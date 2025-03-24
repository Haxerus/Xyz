global.Rarities = {
    tier1: ['Common', 'Short Print', 'Premium Gold Rare'],
    tier2: ['Rare', 'Mosaic Rare', 'Starfoil Rare', 'Gold Rare', 'Ghost/Gold Rare', 'Gold Secret Rare', 'Super Rare', 'Shatterfoil Rare'],
    tier3: ['Ultra Rare', 'Secret Rare'],
    tier4: ['Ultimate Rare', 'Ghost Rare', 'Collector\'s Rare'],
    tier5: ['Starlight Rare', 'Prismatic Secret Rare', '10000 Secret Rare']
};

global.colors = [
    "white",
    "black",
    "red",
    "yellow",
    "green",
    "blue",
    "brown",
    "cyan",
    "gray",
    "light_blue",
    "light_gray",
    "lime",
    "magenta",
    "orange",
    "pink",
    "purple"
]

global.Helpers = {
    dusting: function(event, rarity, result, amount) {
        event.custom({
            type: 'minecraft:smelting',
            ingredient: [
                Item.of('ydm:card', `{rarity: "${rarity}"}`).weakNBT()
            ],
            result: { item: `${result}`, count: amount }
        })
    },
    get_pack: function(pack_code) {
        return Item.of('ydm:set', {code: pack_code})
    }
}