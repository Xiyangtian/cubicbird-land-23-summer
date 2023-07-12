// 自动生成的代码。请勿编辑。
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile11 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile12 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "zzh级别3":return tiles.createTilemap(hex`0a0008000101010101010101010101030305050505030301010303030303030303010103030303030303030101030303030303030301010303030303030303010103030303030303030102010101040401010101`, img`
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            `, [myTiles.transparency16,sprites.castle.tileGrass1,sprites.swamp.swampTile13,sprites.castle.tilePath5,myTiles.tile8,myTiles.tile9], TileScale.Sixteen);
case "hxy级别2":return tiles.createTilemap(hex`1000100002020202020202010202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020207070702020202020202020202020202070707020202020202020202020202020707070202020202020207070702020202020202020202070707070707020202020202020202020707070707070202020202020202020207070703030303030302020203030303030303020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020205040602020202020202`, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    2 2 2 . . . . . . . . . . 2 2 2 
    2 2 2 . . . . . . . . . . 2 2 2 
    2 2 2 . . . . . . . . . . 2 2 2 
    2 2 2 2 2 2 . . . 2 2 2 2 2 2 2 
    . . . . . 2 . . . 2 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 2 . . . 2 . . . . . . 
    `, [myTiles.transparency16,sprites.dungeon.collectibleInsignia,sprites.dungeon.floorLight2,sprites.builtin.brick,tiles.util.arrow7,tiles.util.arrow15,tiles.util.arrow5,sprites.dungeon.darkGroundNorthWest1], TileScale.Sixteen);
    case "wn古树内部":return tiles.createTilemap(hex`0a00080001010101030505050506010101010402020202070101010104020202020703050505020202020207040202020202020202070a0808080202080808090b0c0b0c04070c0b0c0b0d0b0c0c04070b0c0b0c`, img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.castle.tilePath5,sprites.castle.tilePath1,sprites.castle.tilePath4,sprites.castle.tilePath2,sprites.castle.tilePath3,sprites.castle.tilePath6,sprites.castle.tilePath8,sprites.castle.tilePath9,sprites.castle.tilePath7,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.builtin.forestTiles0], TileScale.Sixteen);
}
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile10":return tile10;
            case "myTile0":
            case "tile11":return tile11;
            case "myTile1":
            case "tile12":return tile12;
            case "myTile2":
            case "tile9":return tile9;
            case "myTile3":
            case "tile8":return tile8;
            case "wn_myTile1":return wn_myTile1;
        }
        return null;
    })

}
// 自动生成的代码。请勿编辑。
