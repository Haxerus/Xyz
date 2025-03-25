MoreJSEvents.wandererTrades((event) => {
    const wanderer_packs_dm = ["PSV", "PGD", "MOV", "LOD"]
    const wanderer_packs_gx = ["PTDN", "SOI", "RYMP"]

    wanderer_packs_dm.forEach((p) => event.addTrade(1, ["minecraft:emerald", TradeItem.of("kubejs:n_dust", 4, 8)], global.Helpers.get_pack(p)))
    wanderer_packs_gx.forEach((p) => event.addTrade(1, ["minecraft:emerald", TradeItem.of("kubejs:r_dust", 4, 8)], global.Helpers.get_pack(p)))
})