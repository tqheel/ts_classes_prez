function createSquare2(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare2 = createSquare({ colour: "red", width: 100 });
//# sourceMappingURL=example4.js.map