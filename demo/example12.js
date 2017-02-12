var DigitalClock = (function () {
    function DigitalClock(h, m) {
    }
    DigitalClock.prototype.tick = function () {
        console.log("beep beep");
    };
    return DigitalClock;
}());
var AnalogClock = (function () {
    function AnalogClock(h, m) {
    }
    AnalogClock.prototype.tick = function () {
        console.log("tick tock");
    };
    return AnalogClock;
}());
function createClock(ctor, hour, minute) {
    return new ctor(hour, minute);
}
var digitalClock = createClock(DigitalClock, 12, 17);
var analogClock = createClock(AnalogClock, 7, 32);
digitalClock.tick();
analogClock.tick();
//# sourceMappingURL=example12.js.map