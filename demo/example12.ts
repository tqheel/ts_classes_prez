(function(){


    interface ClockConstructor {
            new (hour: number, minute: number): ClockInterface;
    }
    interface ClockInterface {
        tick(): any;
    }

    class DigitalClock implements ClockInterface {
        constructor(h: number, m: number) { }
        tick() {
            console.log("beep beep");
        }
    }
    class AnalogClock implements ClockInterface {
        constructor(h: number, m: number) { }
        tick() {
            console.log("tick tock");
        }
    }

    function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
        return new ctor(hour, minute);
    }

    let digitalClock = createClock(DigitalClock, 12, 17);
    let analogClock = createClock(AnalogClock, 7, 32);

    digitalClock.tick();

    analogClock.tick();


})();


    