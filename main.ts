radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == hand) {
        basic.showString("TIE")
    } else if (receivedNumber == 0) {
    	
    } else {
    	
    }
})
input.onButtonPressed(Button.A, function () {
    if (state == 0) {
        hand += 1
        if (hand > 3) {
            hand = 1
        }
        if (hand == 1) {
            basic.showLeds(`
                . . . . .
                . # # # .
                . # # # .
                . # # # .
                . . . . .
                `)
        } else if (hand == 2) {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
        } else if (hand == 3) {
            basic.showLeds(`
                # # . . #
                # # . # .
                . . # . .
                # # . # .
                # # . . #
                `)
        }
    } else {
        hand_2 += 1
        if (hand_2 == 1) {
            basic.showLeds(`
                . . . . .
                . # # # .
                . # # # .
                . # # # .
                . . . . .
                `)
        } else if (hand_2 == 2) {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
        } else if (hand_2 == 3) {
            basic.showLeds(`
                # # . . #
                # # . # .
                . . # . .
                # # . # .
                # # . . #
                `)
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    if (state == 0) {
        state += 1
        basic.showString("PLayer 2")
    } else {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    if (state == 0) {
        hand += -1
        if (hand < 3) {
            hand = 1
            basic.showLeds(`
                . . . . .
                . # # # .
                . # # # .
                . # # # .
                . . . . .
                `)
        } else if (hand == 2) {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
        } else if (hand == 3) {
            basic.showLeds(`
                # # . . #
                # # . # .
                . . # . .
                # # . # .
                # # . . #
                `)
        }
    } else {
        hand_2 += -1
        if (hand_2 == 1) {
            basic.showLeds(`
                . . . . .
                . # # # .
                . # # # .
                . # # # .
                . . . . .
                `)
        } else if (hand_2 == 2) {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
        } else if (hand_2 == 3) {
            basic.showLeds(`
                # # . . #
                # # . # .
                . . # . .
                # # . # .
                # # . . #
                `)
        }
    }
})
let hand_2 = 0
let hand = 0
let state = 0
state = 0
