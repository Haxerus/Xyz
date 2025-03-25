ServerEvents.loaded(event => {
    console.log('===== Listing all Loot Tables =====');
    
    let tables = event.server.getLootTables();
    // this will be a list of all the resourcelocations.
    let tableIds = tables.getIds()

    let chests = tableIds.stream().filter(id => id.path.startsWith('chests')).map(id => id.toString()).toList()
    let entities = tableIds.stream().filter(id => id.path.startsWith('entities')).map(id => id.toString()).toList()
    let gameplay = tableIds.stream().filter(id => id.path.startsWith('gameplay')).map(id => id.toString()).toList()

    let other = tableIds.stream().filter(id => !id.path.startsWith('blocks') && !id.path.startsWith('chests') && !id.path.startsWith('entities') && !id.path.startsWith('gameplay')).map(id => id.toString()).toList()
    
    // JsonIO.write('kubejs/exported/lootTables.json', {
    //     chests: chests,
    //     entities: entities,
    //     gameplay: gameplay,
    //     other: other
    // })
});