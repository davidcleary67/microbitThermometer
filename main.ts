function showCompass () {
    hands = [
    images.createImage(`
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        . . . . .
        `),
    images.createImage(`
        . # . . .
        . # . . .
        . . # . .
        . . . . .
        . . . . .
        `),
    images.createImage(`
        . . . . .
        # # . . .
        . . # . .
        . . . . .
        . . . . .
        `),
    images.createImage(`
        . . . . .
        . . . . .
        # # # . .
        . . . . .
        . . . . .
        `),
    images.createImage(`
        . . . . .
        . . . . .
        . . # . .
        # # . . .
        . . . . .
        `),
    images.createImage(`
        . . . . .
        . . . . .
        . . # . .
        . # . . .
        . # . . .
        `),
    images.createImage(`
        . . . . .
        . . . . .
        . . # . .
        . . # . .
        . . # . .
        `),
    images.createImage(`
        . . . . .
        . . . . .
        . . # . .
        . . . # .
        . . . # .
        `),
    images.createImage(`
        . . . . .
        . . . . .
        . . # . .
        . . . # #
        . . . . .
        `),
    images.createImage(`
        . . . . .
        . . . . .
        . . # # #
        . . . . .
        . . . . .
        `),
    images.createImage(`
        . . . . .
        . . . # #
        . . # . .
        . . . . .
        . . . . .
        `),
    images.createImage(`
        . . . # .
        . . . # .
        . . # . .
        . . . . .
        . . . . .
        `)
    ]
    while (true) {
        dir = input.compassHeading() / 30
        idir = Math.floor(dir)
        hands[idir].showImage(0)
        if (input.buttonIsPressed(Button.B)) {
            break;
        }
    }
    basic.showNumber(input.compassHeading())
}
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
    showCompass()
})
let idir = 0
let dir = 0
let hands: Image[] = []
music.playMelody("A G F F A G F F ", 120)
music.playMelody("A G C5 C5 A G C5 C5 ", 120)
music.playMelody("A G F G A G C5 C5 ", 120)
music.playMelody("A G F G A G F F ", 120)
