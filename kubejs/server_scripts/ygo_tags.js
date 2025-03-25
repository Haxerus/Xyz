// Listen to item tag event
ServerEvents.tags('item', event => {
    const colors = [
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

    colors.forEach((item, index, arr) => {
        event.add('ydm:sleeves', `ydm:sleeves_${item}`)
        event.add('ydm:deck_boxes', `ydm:${item}_deck_box`)
    })

    event.add('ydm:sleeves', "ydm:sleeves_bronze")
    event.add('ydm:sleeves', "ydm:sleeves_silver")
    event.add('ydm:sleeves', "ydm:sleeves_gold")
    event.add('ydm:sleeves', "ydm:sleeves_platinum")
    event.add('ydm:sleeves', "ydm:sleeves_ruby")

    event.add('ydm:deck_boxes', `ydm:iron_deck_box`)
    event.add('ydm:deck_boxes', `ydm:gold_deck_box`)
    event.add('ydm:deck_boxes', `ydm:diamond_deck_box`)
    event.add('ydm:deck_boxes', `ydm:emerald_deck_box`)
})