game.pushScene()

scene_util.captureRegisteringRoomScenes(() => {
    zzhCropland.prepare_zzhCropland()
    game.popScene()
})

scene_util.captureRegisteringRoomScenes(() => {
    hxyBuildingHouse.prepare_hxyBuildingHouse()
    game.popScene()
})

cbland.startVillage(false)