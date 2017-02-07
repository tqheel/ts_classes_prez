interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare2(config: SquareConfig): { color: string; area: number } {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare2 = createSquare({ colour: "red", width: 100 });