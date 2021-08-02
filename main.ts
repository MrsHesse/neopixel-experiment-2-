input.onButtonPressed(Button.A, function () {
    go = 1
})
input.onButtonPressed(Button.B, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    go = 0
})
let go = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
go = 1
basic.forever(function () {
    if (go) {
        strip.showRainbow(1, 90)
    }
})
