input.onButtonPressed(Button.A, function () {
    radio.sendString("yes")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("no")
})
radio.setGroup(1)
