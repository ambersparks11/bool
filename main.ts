function next_player_turn () {
    currant_player_numborrr = (currant_player_numborrr + 1) % 4
    rolladice()
}
function rolladice () {
    diiiice = sprites.create(img`
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        `, SpriteKind.Player)
    game_phase = 999
    tiles.placeOnRandomTile(diiiice, assets.tile`tile20`)
    diiiice = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
}
let game_phase = 0
let diiiice: Sprite = null
let currant_player_numborrr = 0
let play_1 = sprites.create(img`
    6 6 6 6 6 
    6 f d f 6 
    6 3 d 3 6 
    . 5 d 5 . 
    . 5 5 5 . 
    `, SpriteKind.Player)
let play_2 = sprites.create(img`
    . . . . . 
    b . . . b 
    c f a f c 
    . a a a . 
    . . . . . 
    `, SpriteKind.Player)
let play_3 = sprites.create(img`
    2 . . . . 
    . 2 2 2 . 
    . f d f . 
    . d d d . 
    . e e e . 
    `, SpriteKind.Player)
let play_4 = sprites.create(img`
    . . . . . 
    . 3 3 6 3 
    . 6 3 3 5 
    f 1 5 5 5 
    5 5 5 5 5 
    `, SpriteKind.Player)
scene.setBackgroundColor(6)
tiles.setSmallTilemap(tilemap`level2`)
let list = [play_1, play_2, play_3, play_4]
let big_picture = [img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . d d d d d d d d d . . . . 
    . . d d d b b b b b b d d . . . 
    . d d b b b d d d d b b b d . . 
    d d b b d d 1 1 1 1 1 d b b d . 
    d b b d d 1 1 1 1 1 1 1 d b d d 
    d b d d 1 1 1 1 1 1 1 1 1 b d d 
    d b b d 1 1 1 1 1 1 1 1 1 b d d 
    d d b d 1 1 1 1 1 1 1 1 1 b d d 
    . d b b 1 1 1 1 1 1 1 1 b b d d 
    . d d b b 1 1 1 1 1 1 b b d d . 
    . . d d b b b b b b b b d d d . 
    . . . d d d d d d d d d d . . . 
    . . . . . . . . . . . . . . . . 
    `, img`
    . . . . c c c c c c . . . . . . 
    . . . c 6 7 7 7 7 6 c . . . . . 
    . . c 7 7 7 7 7 7 7 7 c . . . . 
    . c 6 7 7 7 7 7 7 7 7 6 c . . . 
    . c 7 c 6 6 6 6 c 7 7 7 c . . . 
    . f 7 6 f 6 6 f 6 7 7 7 f . . . 
    . f 7 7 7 7 7 7 7 7 7 7 f . . . 
    . . f 7 7 7 7 6 c 7 7 6 f c . . 
    . . . f c c c c 7 7 6 f 7 7 c . 
    . . c 7 2 7 7 7 6 c f 7 7 7 7 c 
    . c 7 7 2 7 7 c f c 6 7 7 6 c c 
    c 1 1 1 1 7 6 f c c 6 6 6 c . . 
    f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
    f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
    . f 6 1 1 1 1 1 1 6 6 6 f . . . 
    . . c c c c c c c c c f . . . . 
    `, img`
    . . . . . . . f f f f . . . . . . 
    . . . . . f f 1 1 1 1 f f . . . . 
    . . . . f b 1 1 1 1 1 1 b f . . . 
    . . f f f c 1 1 1 1 1 1 1 f . . . 
    f c 1 1 1 c d 1 1 1 1 1 1 1 f . . 
    f 1 b 1 b 1 b 1 1 1 1 d d d f . . 
    f b f b f f c f 1 1 f c d d f . . 
    . . . f c f 1 1 1 1 1 1 b b f . . 
    . . . . c c b d b 1 b 1 f c f . . 
    . . . . f f f b f b f d f f . . . 
    . . . . . f f f f f f f f . . . . 
    . . . . . f f f f f f f f f f f . 
    . . . . . . f f f f f c 1 1 1 c f 
    . . . . . . f f f f f 1 b 1 b 1 f 
    . . . . . . . f f f f b f b f b f 
    `, img`
    . . . . . . . . . . . 6 6 6 6 6 
    . . . . . . . . . 6 6 7 7 7 7 8 
    . . . . . . 8 8 8 7 7 8 8 6 8 8 
    . . e e e e c 6 6 8 8 . 8 7 8 . 
    . e 2 5 4 2 e c 8 . . . 6 7 8 . 
    e 2 4 2 2 2 2 2 c . . . 6 7 8 . 
    e 2 2 2 2 2 2 2 c . . . 8 6 8 . 
    e 2 e e 2 2 2 2 e e e e c 6 8 . 
    c 2 e e 2 2 2 2 e 2 5 4 2 c 8 . 
    . c 2 e e e 2 e 2 4 2 2 2 2 c . 
    . . c 2 2 2 e e 2 2 2 2 2 2 2 e 
    . . . e c c e c 2 2 2 2 2 2 2 e 
    . . . . . . . c 2 e e 2 2 e 2 c 
    . . . . . . . c e e e e e e 2 c 
    . . . . . . . . c e 2 2 2 2 c . 
    . . . . . . . . . c c c c c . . 
    `]
currant_player_numborrr = 1
tiles.placeOnRandomTile(play_1, assets.tile`tile14`)
tiles.placeOnRandomTile(play_2, assets.tile`tile15`)
tiles.placeOnRandomTile(play_3, assets.tile`tile16`)
tiles.placeOnRandomTile(play_4, assets.tile`tile17`)
let dice_pictures = [
img`
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 f f f 1 1 1 1 1 1 
    1 1 1 1 1 1 f f f 1 1 1 1 1 1 
    1 1 1 1 1 1 f f f 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    `,
img`
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 f f f 1 1 1 1 1 1 1 1 1 1 
    1 1 f f f 1 1 1 1 1 1 1 1 1 1 
    1 1 f f f 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 f f f 1 
    1 1 1 1 1 1 1 1 1 1 1 f f f 1 
    1 1 1 1 1 1 1 1 1 1 1 f f f 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    `,
img`
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 f f f 1 1 1 1 1 1 1 1 1 1 1 
    1 f f f 1 1 1 1 1 1 1 1 1 1 1 
    1 f f f 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 f f f 1 1 1 1 1 1 
    1 1 1 1 1 1 f f f 1 1 1 1 1 1 
    1 1 1 1 1 1 f f f 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 f f f 1 
    1 1 1 1 1 1 1 1 1 1 1 f f f 1 
    1 1 1 1 1 1 1 1 1 1 1 f f f 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    `,
img`
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 f f f 1 1 1 1 1 1 1 1 f f f 
    1 f f f 1 1 1 1 1 1 1 1 f f f 
    1 f f f 1 1 1 1 1 1 1 1 f f f 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 f f f 1 1 1 1 1 1 1 1 f f f 
    1 f f f 1 1 1 1 1 1 1 1 f f f 
    1 f f f 1 1 1 1 1 1 1 1 f f f 
    `,
img`
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 f f f 1 1 1 1 1 1 1 1 f f f 
    1 f f f 1 1 1 1 1 1 1 1 f f f 
    1 f f f 1 1 1 1 1 1 1 1 f f f 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 f f f 1 1 1 1 1 1 
    1 1 1 1 1 1 f f f 1 1 1 1 1 1 
    1 1 1 1 1 1 f f f 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 f f f 1 1 1 1 1 1 1 1 f f f 
    1 f f f 1 1 1 1 1 1 1 1 f f f 
    1 f f f 1 1 1 1 1 1 1 1 f f f 
    `,
img`
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 f f f 1 1 1 1 1 1 1 1 f f f 
    1 f f f 1 1 1 1 1 1 1 1 f f f 
    1 f f f 1 1 1 1 1 1 1 1 f f f 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 f f f 1 1 1 1 1 1 1 1 f f f 
    1 f f f 1 1 1 1 1 1 1 1 f f f 
    1 f f f 1 1 1 1 1 1 1 1 f f f 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 f f f 1 1 1 1 1 1 1 1 f f f 
    1 f f f 1 1 1 1 1 1 1 1 f f f 
    1 f f f 1 1 1 1 1 1 1 1 f f f 
    `
]
next_player_turn()
game.onUpdateInterval(100, function () {
    if (game_phase == 999) {
        if (controller.A.isPressed()) {
            diiiice.setImage(dice_pictures._pickRandom())
            tiles.placeOnRandomTile(diiiice, assets.tile`tile20`)
        } else {
        	
        }
    }
})
