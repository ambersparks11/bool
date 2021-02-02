function rolladice () {
	
}
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
tiles.placeOnRandomTile(play_1, assets.tile`tile14`)
tiles.placeOnRandomTile(play_2, assets.tile`tile15`)
tiles.placeOnRandomTile(play_3, assets.tile`tile16`)
tiles.placeOnRandomTile(play_4, assets.tile`tile17`)
