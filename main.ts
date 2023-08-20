ESP8266_IoT.iotSwitchEvent(ESP8266_IoT.KidsIotSwitchState.off, function () {
    basic.showString("OFF")
})
ESP8266_IoT.iotSwitchEvent(ESP8266_IoT.KidsIotSwitchState.on, function () {
    basic.showString("ON")
})
ESP8266_IoT.initWIFI(SerialPin.P8, SerialPin.P12, BaudRate.BaudRate115200)
basic.forever(function () {
    if (ESP8266_IoT.wifiState(false)) {
        ESP8266_IoT.connectWifi("imotep", "Deltaforce322851!")
    } else {
        basic.showLeds(`
            # # # # #
            . . . . .
            . # # # .
            . . . . .
            . . . . .
            `)
    }
    if (ESP8266_IoT.kidsiotState(false)) {
        ESP8266_IoT.connectKidsiot("\t8045Rcjtu8gDvnPf", "1")
    } else {
        basic.showLeds(`
            # # # # #
            . . . . .
            . # # # .
            . . . . .
            . . # . .
            `)
        ESP8266_IoT.uploadKidsiot(input.soundLevel())
        basic.pause(2000)
    }
})
