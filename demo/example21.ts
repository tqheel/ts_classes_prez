(function () {


    class Grid {
        static origin = { x: 0, y: 0 };
        calculateDistanceFromOrigin(point: { x: number; y: number; }) {
            let xDist = (point.x - Grid.origin.x);
            let yDist = (point.y - Grid.origin.y);
            return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
        }
        constructor(public scale: number) { }
    }

    let grid1 = new Grid(1.0);  // 1x scale
    let grid2 = new Grid(5.0);  // 5x scale

    console.log('grid1 distance: ' + grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
    console.log('grid2 distance: ' + grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));

    let instance_origin = grid1.origin;

    console.log('instance_origin from grid1 (static origin): ' + instance_origin);


})();

(function () {

    class Grid {
        public origin = { x: 0, y: 0 };
        calculateDistanceFromOrigin(point: { x: number; y: number; }) {
            let xDist = (point.x - this.origin.x);
            let yDist = (point.y - this.origin.y);
            return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
        }
        constructor(public scale: number) { }
    }

    let grid3 = new Grid(1.0);  // 1x scale
    let grid4 = new Grid(5.0);  // 5x scale

    console.log('grid3 distance:' + grid3.calculateDistanceFromOrigin({ x: 10, y: 10 }));
    console.log('grid4 distance' + grid4.calculateDistanceFromOrigin({ x: 10, y: 10 }));

    let instance_origin = grid3.origin;

    
    console.log( 'instance_origin from grid3 (public origin): ' + instance_origin.x + ', ' + instance_origin.y);


})();




