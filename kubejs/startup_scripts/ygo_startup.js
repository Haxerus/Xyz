// Listen to item registry event
StartupEvents.registry('item', e => {
    console.log("Adding Custom YGO Items")

    e.create('n_dust').displayName("White Duston")
    e.create('r_dust').displayName("Blue Duston")
    e.create('sr_dust').displayName("Yellow Duston")
    e.create('ur_dust').displayName("Starduston").glow(true)

    e.create('dm_blank').displayName("Blank DM Pack")
    e.create('gx_blank').displayName("Blank GX Pack")
    e.create('5ds_blank_granel').displayName("Blank 5D's Pack: Granel")
    e.create('5ds_blank_skiel').displayName("Blank 5D's Pack: Skiel")
    e.create('5ds_blank_wisel').displayName("Blank 5D's Pack: Wisel")
    e.create('zexal_blank_x').displayName("Blank ZEXAL Pack X")
    e.create('zexal_blank_y').displayName("Blank ZEXAL Pack Y")
    e.create('zexal_blank_z').displayName("Blank ZEXAL Pack Z")

    e.create('crimson_plate').displayName('Crimson Plate')
    e.create('astral_plate').displayName('Astral Plate')
})

StartupEvents.registry('block', e => {
    console.log("Adding Custom YGO Blocks")

    e.create('n_dust_block')
        .displayName('White Duston Block')
        .hardness(3.0) // Set hardness (affects mining time)
        .resistance(6.0) // Set resistance (to explosions, etc)
        .tagBlock('minecraft:mineable/pickaxe') // or a pickaxe
        .fullBlock(true)
    
    e.create('r_dust_block')
        .displayName('Blue Duston Block')
        .hardness(3.0) // Set hardness (affects mining time)
        .resistance(6.0) // Set resistance (to explosions, etc)
        .tagBlock('minecraft:mineable/pickaxe') // or a pickaxe
        .fullBlock(true)
    
    e.create('sr_dust_block')
        .displayName('Yellow Duston Block')
        .hardness(3.0) // Set hardness (affects mining time)
        .resistance(6.0) // Set resistance (to explosions, etc)
        .tagBlock('minecraft:mineable/pickaxe') // or a pickaxe
        .fullBlock(true)
    
    e.create('ur_dust_block')
        .displayName('Starduston Block')
        .hardness(3.0) // Set hardness (affects mining time)
        .resistance(6.0) // Set resistance (to explosions, etc)
        .tagBlock('minecraft:mineable/pickaxe') // or a pickaxe
        .fullBlock(true)
})

StartupEvents.registry('fluid', e => {   
    console.log("Adding Custom YGO Fluids")     
               
    e.create('astral_ink')
      .thickTexture(0x26216D)
      .bucketColor(0x26216D)
      //.stillTexture('kubejs:block/astral_ink_still')
      .displayName('Astral Ink')
      //.noBlock()
    
    e.create('ener_d')
      .thinTexture(0xD8FDFF)
      .bucketColor(0xD8FDFF)
      .displayName('Ener-D')
  })