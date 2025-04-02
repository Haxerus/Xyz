ServerEvents.recipes(event => {
    console.log("Loaded custom YGO recipes")

    global.Rarities.tier1.forEach((r) => global.Helpers.dusting(event, r, 'kubejs:n_dust', 1))
    global.Rarities.tier2.forEach((r) => global.Helpers.dusting(event, r, 'kubejs:n_dust', 2))
    global.Rarities.tier3.forEach((r) => global.Helpers.dusting(event, r, 'kubejs:n_dust', 4))
    global.Rarities.tier4.forEach((r) => global.Helpers.dusting(event, r, 'kubejs:n_dust', 8))
    global.Rarities.tier5.forEach((r) => global.Helpers.dusting(event, r, 'kubejs:n_dust', 16))

    const dm = ["LOB", "MRD", "SRL", "PSV", "LON", "LOD", "PGD", "MFC", "DCR", "IOC", "AST", "SOD", "RDS", "FET"]
    const gx = ["TLM", "CRV", "EEN", "SOI", "EOJ", "POTD", "CDIP", "STON", "FOTB", "TAEV", "GLAS", "PTDN", "LODT"]

    const fiveds_s = ["CSOC", "TDGS", "SOVR"]
    const fiveds_g = ["TSHD", "ANPR", "STOR"]
    const fiveds_w = ["HA01", "HA02", "BP01", "BP02", "BP03", "BPW2"]

    const zexal_x = ["GAOV", "REDU", "ABYR"]
    const zexal_y = ["CBLZ", "LTGY", "NUMH"]
    const zexal_z = ["JOTL", "SHSP", "LVAL", "DRLG", "PRIO"]

    dm.forEach((p) => event.shapeless(global.Helpers.get_pack(p), 'kubejs:dm_blank'))

    gx.forEach((p) => event.shapeless(global.Helpers.get_pack(p), 'kubejs:gx_blank'))

    fiveds_s.forEach((p) => event.shapeless(global.Helpers.get_pack(p), 'kubejs:5ds_blank_skiel'))
    fiveds_g.forEach((p) => event.shapeless(global.Helpers.get_pack(p), 'kubejs:5ds_blank_granel'))
    fiveds_w.forEach((p) => event.shapeless(global.Helpers.get_pack(p), 'kubejs:5ds_blank_wisel'))

    zexal_x.forEach((p) => event.shapeless(global.Helpers.get_pack(p), 'kubejs:zexal_blank_x'))
    zexal_y.forEach((p) => event.shapeless(global.Helpers.get_pack(p), 'kubejs:zexal_blank_y'))
    zexal_z.forEach((p) => event.shapeless(global.Helpers.get_pack(p), 'kubejs:zexal_blank_z'))

    event.stonecutting('kubejs:dm_blank', 'kubejs:n_dust_block')
    event.stonecutting('4x kubejs:gx_blank', 'kubejs:r_dust_block')

    event.shapeless('kubejs:r_dust', '4x kubejs:n_dust')

    event.shapeless('kubejs:sr_dust', '4x kubejs:r_dust')

    event.shapeless('kubejs:ur_dust', '4x kubejs:sr_dust')

    event.shapeless('4x kubejs:n_dust', 'kubejs:r_dust')

    event.shapeless('4x kubejs:r_dust', 'kubejs:sr_dust')

    event.shapeless('4x kubejs:sr_dust', 'kubejs:ur_dust')

    event.shapeless('9x kubejs:n_dust', 'kubejs:n_dust_block')

    event.shapeless('9x kubejs:r_dust', 'kubejs:r_dust_block')

    event.shapeless('9x kubejs:sr_dust', 'kubejs:sr_dust_block')

    event.shapeless('9x kubejs:ur_dust', 'kubejs:ur_dust_block')

    event.shaped('kubejs:n_dust_block', [
        'AAA', 
        'AAA',
        'AAA'  
      ], {
        A: 'kubejs:n_dust',
      }
    )

    event.shaped('kubejs:r_dust_block', [
        'AAA', 
        'AAA',
        'AAA'  
      ], {
        A: 'kubejs:r_dust',
      }
    )

    event.shaped('kubejs:sr_dust_block', [
        'AAA', 
        'AAA',
        'AAA'  
      ], {
        A: 'kubejs:sr_dust',
      }
    )

    event.shaped('kubejs:ur_dust_block', [
        'AAA', 
        'AAA',
        'AAA'  
      ], {
        A: 'kubejs:ur_dust',
      }
    )

    event.shaped('ydm:duel_disk', [
        'AAA', 
        'ABA',
        '  A'  
      ], {
        A: 'minecraft:iron_ingot', 
        B: 'ydm:duel_playmat',
      }
    )

    event.smithing(
        "ydm:chaos_disk",
        "ydm:duel_disk",
        "minecraft:ender_pearl"
    )

    event.smithing(
        "ydm:academia_disk",
        "ydm:duel_disk",
        "minecraft:book"
    )

    event.smithing(
        "ydm:academia_disk_red",
        "ydm:academia_disk",
        "minecraft:red_dye"
    )

    event.smithing(
        "ydm:academia_disk_blue",
        "ydm:academia_disk",
        "minecraft:blue_dye"
    )

    event.smithing(
        "ydm:academia_disk_yellow",
        "ydm:academia_disk",
        "minecraft:yellow_dye"
    )

    event.smithing(
        "ydm:rock_spirit_disk",
        "ydm:duel_disk",
        "minecraft:soul_sand"
    )

    event.smithing(
        "ydm:trueman_disk",
        "ydm:duel_disk",
        "minecraft:coal"
    )

    event.smithing(
        "ydm:jewel_disk",
        "ydm:duel_disk",
        "#forge:gems"
    )

    event.smithing(
        "ydm:kaibaman_disk",
        "ydm:duel_disk",
        "minecraft:dragon_head"
    )

    event.smithing(
        "ydm:cyber_design_interface",
        "ydm:duel_disk",
        "minecraft:enchanted_golden_apple"
    )

    event.shaped('ydm:duel_playmat', [
        ' B ', 
        ' A ',
        ' B '  
      ], {
        A: '#minecraft:wool_carpets', 
        B: 'ydm:card',
      }
    )

    event.shapeless('ydm:brown_deck_box', [ 
        'minecraft:chest',
        'ydm:card'
    ])

    event.shapeless('ydm:sleeves_white', [ 
        '#forge:glass_panes/colorless',
        'ydm:card'
    ])

    // Dyed Stuff

    let dyed_sleeve = (color) => {
        event.shapeless(`ydm:sleeves_${color}`, [ 
            '#ydm:sleeves',
            `minecraft:${color}_dye`
        ])
    }

    let dyed_box = (color) => {
        event.shapeless(`ydm:${color}_deck_box`, [ 
            '#ydm:deck_boxes',
            `minecraft:${color}_dye`
        ])
    }

    global.colors.forEach((item, index, arr) => {
        dyed_sleeve(item)
        dyed_box(item)
    })

    // Metal Sleeves

    event.shapeless(`ydm:sleeves_bronze`, [ 
        '#ydm:sleeves',
        'minecraft:copper_ingot'
    ])

    event.shapeless(`ydm:sleeves_silver`, [ 
        '#ydm:sleeves',
        'minecraft:iron_ingot'
    ])

    event.shapeless(`ydm:sleeves_gold`, [ 
        '#ydm:sleeves',
        'minecraft:gold_ingot'
    ])

    event.shapeless(`ydm:sleeves_platinum`, [ 
        '#ydm:sleeves',
        'minecraft:diamond'
    ])

    event.shapeless(`ydm:sleeves_ruby`, [ 
        '#ydm:sleeves',
        'minecraft:redstone'
    ])

    // Special Sleeves

    // Metal Deck Boxes

    event.shapeless(`ydm:iron_deck_box`, [ 
        '#ydm:deck_boxes',
        'minecraft:iron_ingot'
    ])

    event.shapeless(`ydm:gold_deck_box`, [ 
        '#ydm:deck_boxes',
        'minecraft:gold_ingot'
    ])

    event.shapeless(`ydm:diamond_deck_box`, [ 
        '#ydm:deck_boxes',
        'minecraft:diamond'
    ])

    event.shapeless(`ydm:emerald_deck_box`, [ 
        '#ydm:deck_boxes',
        'minecraft:emerald'
    ])

    event.shapeless(`ydm:patreon_deck_box`, [ 
        '#ydm:deck_boxes',
        'minecraft:diamond_hoe'
    ])

    // Binders
    event.shapeless('ydm:simple_binder_3', [ 
        '#forge:leather',
        '3x ydm:card'
    ])

    event.shapeless('ydm:simple_binder_9', [ 
        '3x ydm:simple_binder_3'
    ])

    event.shapeless('ydm:simple_binder_27', [ 
        '3x ydm:simple_binder_9'
    ])

    event.shapeless('ydm:card_binder', [ 
        'minecraft:writable_book',
        'ydm:card'
    ])
})
