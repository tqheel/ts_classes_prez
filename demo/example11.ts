interface ClockConstructor2 {
    new (hour: number, minute: number): any;
}

class Clock2 implements ClockConstructor2 {
    currentTime: Date;
    constructor(h: number, m: number) { }
}