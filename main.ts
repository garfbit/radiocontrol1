input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendNumber(4)
    basic.showIcon(IconNames.Square)
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
    basic.showArrow(ArrowNames.West)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(3)
    basic.showArrow(ArrowNames.North)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
    basic.showArrow(ArrowNames.East)
})
radio.setGroup(1)
basic.showIcon(IconNames.Triangle)
