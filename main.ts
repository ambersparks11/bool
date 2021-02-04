namespace SpriteKind {
    export const dicesprites = SpriteKind.create()
}
function next_player_turn () {
    currant_player_numborrr = (currant_player_numborrr + 1) % 4
    currant_player = list[currant_player_numborrr]
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
    big_picture = sprites.create(big_picture[currant_player_numborrr], SpriteKind.dicesprites)
}
let game_phase = 0
let diiiice: Sprite = null
let currant_player: Sprite = null
let currant_player_numborrr = 0
let big_picture: Sprite = null
let list: Sprite[] = []
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
list = [play_1, play_2, play_3, play_4]
tiles.placeOnRandomTile(play_1, assets.tile`tile14`)
tiles.placeOnRandomTile(play_2, assets.tile`tile15`)
tiles.placeOnRandomTile(play_3, assets.tile`tile16`)
tiles.placeOnRandomTile(play_4, assets.tile`tile17`)
big_picture = [0, 1]
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
        }
    }
})
