ServerEvents.recipes(event => {
    console.log("Loaded custom YGO Create Recipes")
    // 5D's
    event.recipes.create.mixing(Fluid.of('kubejs:ener_d', 1000), [Fluid.lava(1000), 'kubejs:sr_dust'])
    event.recipes.create.filling('kubejs:crimson_plate', [Fluid.of('kubejs:ener_d', 1000), 'create:iron_sheet'])
    event.recipes.create.compacting('kubejs:5ds_blank_granel', ['kubejs:crimson_plate', 'minecraft:weeping_vines'])
    event.recipes.create.compacting('kubejs:5ds_blank_skiel', ['kubejs:crimson_plate', 'minecraft:twisting_vines'])
    event.recipes.create.compacting('kubejs:5ds_blank_wisel', ['kubejs:crimson_plate', 'minecraft:wither_rose'])

    // ZEXAL
    event.recipes.create.mixing(Fluid.of('kubejs:astral_ink', 1000), [Fluid.of('tconstruct:molten_ender', 1000), 'kubejs:ur_dust'])
    event.recipes.create.filling('kubejs:astral_plate', [Fluid.of('kubejs:astral_ink', 1000), 'alloyed:steel_sheet'])
    event.recipes.create.compacting('kubejs:zexal_blank_x', ['kubejs:astral_plate', 'minecraft:chorus_fruit']).heated()
    event.recipes.create.compacting('kubejs:zexal_blank_y', ['kubejs:astral_plate', 'minecraft:dragon_breath']).heated()
    event.recipes.create.compacting('kubejs:zexal_blank_z', ['kubejs:astral_plate', 'endergetic:bolloom_fruit']).heated()
})