controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . 
        . . . . f f f f f f . . . 
        . . . f f f f f f f f f . 
        . . f f f c f f f f f f . 
        . f f f c f f f c f f f f 
        f f c c f f f c c f f c f 
        f f f f f e f f f f c c f 
        . f f f e e f f f f f f f 
        . f f f e e f b f e e f f 
        . . f f 4 4 f 1 e 4 e f f 
        . . . f 4 4 4 4 e f f f . 
        . . . f f e e e e 4 4 4 . 
        . . . f 7 7 7 7 e 4 4 e . 
        . . f f 6 6 6 6 f e e f . 
        . . f f f f f f f f f f . 
        . . . f f f . . . f f . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . f f f f f f . . . 
        . . . f f f f f f f f f . 
        . . f f f c f f f f f f . 
        . f f f c f f f c f f f f 
        f f c c f f f c c f f c f 
        f f f f f e f f f f c c f 
        . f f f e e f f f f f f f 
        . . f f e e f b f e e f f 
        . . f f 4 4 f 1 e 4 e f . 
        . . . f 4 4 4 e e f f f . 
        . . . f f e e 4 4 e f . . 
        . . . f 7 7 e 4 4 e f . . 
        . . f f 6 6 f e e f f f . 
        . . f f f f f f f f f f . 
        . . . f f f . . . f f . . 
        `,img`
        . . . . . f f f f f . . . 
        . . . f f f f f f f f f . 
        . . f f f c f f f f f f . 
        . . f f c f f f c f f f f 
        f f c c f f f c c f f c f 
        f f f f f e f f f f c c f 
        . f f f e e f f f f f f f 
        . . f f e e f b f e e f f 
        . . . f 4 4 f 1 e 4 e f . 
        . . . f 4 4 4 4 e f f f . 
        . . . f f e e e e e f . . 
        . . . f 7 7 7 e 4 4 e . . 
        . . . f 7 7 7 e 4 4 e . . 
        . . . f 6 6 6 f e e f . . 
        . . . . f f f f f f . . . 
        . . . . . . f f f . . . . 
        `],
    100,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.OnlyHorizontal)
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . 
        . . . f f f f f f . . . . 
        . f f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f c f f f c f f f . 
        f c f f c c f f f c c f f 
        f c c f f f f e f f f f f 
        f f f f f f f e e f f f . 
        f f e e f b f e e f f f . 
        f f e 4 e 1 f 4 4 f f . . 
        . f f f e 4 4 4 4 f . . . 
        . 4 4 4 e e e e f f . . . 
        . e 4 4 e 7 7 7 7 f . . . 
        . f e e f 6 6 6 6 f f . . 
        . f f f f f f f f f f . . 
        . . f f . . . f f f . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . f f f f f f . . . . 
        . f f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f c f f f c f f f . 
        f c f f c c f f f c c f f 
        f c c f f f f e f f f f f 
        f f f f f f f e e f f f . 
        f f e e f b f e e f f . . 
        . f e 4 e 1 f 4 4 f f . . 
        . f f f e e 4 4 4 f . . . 
        . . f e 4 4 e e f f . . . 
        . . f e 4 4 e 7 7 f . . . 
        . f f f e e f 6 6 f f . . 
        . f f f f f f f f f f . . 
        . . f f . . . f f f . . . 
        `,img`
        . . . f f f f f . . . . . 
        . f f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f c f f f c f f . . 
        f c f f c c f f f c c f f 
        f c c f f f f e f f f f f 
        f f f f f f f e e f f f . 
        f f e e f b f e e f f . . 
        . f e 4 e 1 f 4 4 f . . . 
        . f f f e 4 4 4 4 f . . . 
        . . f e e e e e f f . . . 
        . . e 4 4 e 7 7 7 f . . . 
        . . e 4 4 e 7 7 7 f . . . 
        . . f e e f 6 6 6 f . . . 
        . . . f f f f f f . . . . 
        . . . . f f f . . . . . . 
        `],
    100,
    true
    )
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . f f f f f . . . . . 
    . f f f f f f f f f . . . 
    . f f f f f f c f f f . . 
    f f f f c f f f c f f . . 
    f c f f c c f f f c c f f 
    f c c f f f f e f f f f f 
    f f f f f f f e e f f f . 
    f f e e f b f e e f f . . 
    . f e 4 e 1 f 4 4 f . . . 
    . f f f e 4 4 4 4 f . . . 
    . . f e e e e e f f . . . 
    . . e 4 4 e 7 7 7 f . . . 
    . . e 4 4 e 7 7 7 f . . . 
    . . f e e f 6 6 6 f . . . 
    . . . f f f f f f . . . . 
    . . . . f f f . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
mySprite.ay = 300
scene.cameraFollowSprite(mySprite)
scene.setBackgroundImage(img`
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeefffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeffccffffcccffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffccffffcccffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeefccccffffcccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefccccffffcccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffcccffffccffeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeefcccccffffccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefcccccffffccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffcccffffcccfffffeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeefccccccffffcccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefccccccffffcccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffccccccffffcccccccfeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeefcccccccffffccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffccccccffffcccccccffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefcccccccffffcccccccfeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeefcccccccffffcccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefcccccccffffccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefcccccccffffcccccccfeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeffcccccccffffcccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffcccc8ccffffccccccccffeeeeeeeeeeeeeeeeeeeeeeeeeeeeffcccccccffffccc8cccfeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeffcc8ccccffffcccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffccc88ccffffccccccccffeeeeeeeeeeeeeeeeeeeeeeeeeeeeffccccc8cffffcc8ccccfeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeffcc8ccccffff88cccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffcccccccffffcccc88ccffeeeeeeeeeeeeeeeeeeeeeeeeeeeeffcccc8ccffffcc8ccccfeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeffcccccccffff8ccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffcccccccffffcccc8cccffeeeeeeeeeeeeeeeeeeeeeeeeeeeeffcccc8ccffffcc8ccccfeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeffcccccccffffcccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffcccccccffffccccccccffeeeeeeeeeeeeeeeeeeeeeeeeeeeeffccc88ccffffcccccccfeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeffcccccccffffcccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffcccccccffffccccccccffeeeeeeeeeeeeeeeeeeeeeeeeeeeeffcccccccffffcccccccfeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeffcccccccffffcccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffcccccccffffccccccccffeeeeeeeeeeeeeeeeeeeeeeeeeeeeffcccccccffffcccccccfeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeffcccccccffffcccccc8ccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffcccccccffffccccccccffeeeeeeeeeeeeeeeeeeeeeeeeeeeeffcccccccffffcccccccfeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeffcccccccffffcccccc8ccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffcccccccffffccccccccffeeeeeeeeeeeeeeeeeeeeeeeeeeeeffcccccccffffcccccccfeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeefcccccccffffccccc8cccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefcccccccffffccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefcccccccffffcccccccfeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeefcccccccffffcccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefcccccccffffccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefcccccccffffcccccccfeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeefcccccccffffcccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefcccccccffffccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefccc8cccffffcccccccfeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeefcccccccffffcccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefcccccccffffccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefcccccccffffcccccccfeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeefcccccccffffcccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefcccccccffffcccccccfeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefcccccccffffffffffffeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeefcccccccffffcccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefcccccccffffccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeefcccccccffffcccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefcccccccffffcccc8cccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeefcccccccffffcccc88cccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefcccccccffffcccc8cccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffcccccccfeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeefcccccccffffcccc8ccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefcccccccffffccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefcccccccffffcccccccfeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeefcccccccffffcccc8ccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefcccccccffffccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefcccccccffffcccccccfeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeefccccc8cffffcccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefccc8cccffffccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefcccccccffffcccccccfeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeefcccc88cffffcccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefccc8cccffffccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefcccccccffffcccccccfeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeefcccc8ccffffcccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefcc8ccccffffccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefcccccccffffcc8ccccfeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeefcccccccffffcccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefc8cccccffffccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefcccccc8ffffcc8ccccfeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeefcccccccffffcccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefc8cccccffffccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefccccc88ffffcc8ccccfeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeefcccccccffffcccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefcccccccffffccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefccccc8cffffcccccccfeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeefcccccccffffcccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefcccccccffffccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefccccc8cffffcccccccfeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeefcccccccffffccccc8cccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefcccccccffffccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefcccccccffffcccccccfeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeefcccccccffffccccc8cccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefcccccccffffcccc8cccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefcccccccffffcccccccfeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeefcccccccffffcccc8ccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefcccccccffffccc88cccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefcccccccffffcccc8ccfeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeefcccccccffffcccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefcccccccffffccc8ccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefcccccccffffcccc8ccfeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeefcccccccffffcccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefccccc8cffffccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefcccccccffffcccc8ccfeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeefcccccccffffcccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefcccc8ccffffccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefcccccccffffcccccccfeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeefccc8cccffffcccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefccc8cccffffccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefcccccccffffcccccccfeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeefcc8ccccffffcccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefccc8cccffffccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefccc8cccffffcccccccfeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeefc8cccccffffcccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefc88ccccffffccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefcc8ccccffffcccccccfeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeefc8cccccffffcccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefcccccccffffccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefc8cccccffffcccccccfeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeefcccccccffffcccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefcccccccffffccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefcccccccffffcccccccfeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeefcccccccffffcccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefcccccccfffffcccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefcccccccffffcccccccfeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    `)
tiles.setCurrentTilemap(tilemap`level1`)
tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 14))
music.play(music.createSong(hex`0055000408040304001c00100500640000041e000004000000000000000000000000000a0400042a000000040001190c00100001192c003000011940004400011958005c0001196c00700001197c008000011906001c00010a006400f4016400000400000000000000000000000000000000022a0000000800012210001800011e2000280001192c003400012238004000011e4400580001225c008000011e09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c80054000c000d0001041c001d0001042800290001043400350001044000410001044c004d0001045800590001046400650001066800690001066c006d0001067000710001067400750001067800790001067c007d000106`), music.PlaybackMode.LoopingInBackground)
