input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # . # . #
        . # # # .
        # # . # #
        . # # # .
        # . # . #
        `)
    basic.clearScreen()
    basic.pause(1000)
    basic.showNumber(input.temperature())
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
    basic.clearScreen()
    basic.pause(1000)
    basic.showNumber(input.compassHeading())
})
let im = []
im[5].showImage(0)
