(function () {
    var Grid = (function () {
        function Grid(scale) {
            this.scale = scale;
        }
        Grid.prototype.calculateDistanceFromOrigin = function (point) {
            var xDist = (point.x - Grid.origin.x);
            var yDist = (point.y - Grid.origin.y);
            return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
        };
        return Grid;
    }());
    Grid.origin = { x: 0, y: 0 };
    var grid1 = new Grid(1.0); // 1x scale
    var grid2 = new Grid(5.0); // 5x scale
    console.log('grid1 distance: ' + grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
    console.log('grid2 distance: ' + grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));
    var instance_origin = grid1.origin;
    console.log('instance_origin from grid1 (static origin): ' + instance_origin);
})();
(function () {
    var Grid = (function () {
        function Grid(scale) {
            this.scale = scale;
            this.origin = { x: 0, y: 0 };
        }
        Grid.prototype.calculateDistanceFromOrigin = function (point) {
            var xDist = (point.x - this.origin.x);
            var yDist = (point.y - this.origin.y);
            return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
        };
        return Grid;
    }());
    var grid3 = new Grid(1.0); // 1x scale
    var grid4 = new Grid(5.0); // 5x scale
    console.log('grid3 distance:' + grid3.calculateDistanceFromOrigin({ x: 10, y: 10 }));
    console.log('grid4 distance' + grid4.calculateDistanceFromOrigin({ x: 10, y: 10 }));
    var instance_origin = grid3.origin;
    console.log('instance_origin from grid3 (public origin): ' + instance_origin.x + ', ' + instance_origin.y);
})();
